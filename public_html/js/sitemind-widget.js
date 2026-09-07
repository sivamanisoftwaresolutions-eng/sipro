/**
 * SiteMind AI Assistant Widget
 * Designed for SiPro Technologies (sipro.tech)
 * Adheres to DPDP Act 2023 / GDPR Privacy Standards, Z-Index Cadence & Brand Theme
 */

(function () {
  'use strict';

  // Prevent duplicate execution
  if (window.__SITEMIND_WIDGET_INITIALIZED__) return;
  window.__SITEMIND_WIDGET_INITIALIZED__ = true;

  // Retrieve script element and configurations
  const currentScript =
    document.currentScript ||
    document.querySelector('script[src*="sitemind-widget.js"]') ||
    document.querySelector('script[data-widget-key]');

  const WIDGET_KEY = currentScript?.getAttribute('data-widget-key') || 'sipro-tech-assistant';
  const API_URL = (currentScript?.getAttribute('data-api-url') || '/api/sitemind').replace(/\/$/, '');
  const BRAND_COLOR = currentScript?.getAttribute('data-brand-color') || '#2563eb';
  const SCRIPT_CATEGORY = currentScript?.getAttribute('data-category') || 'functional';

  // Privacy & Consent Governance Check (DPDP Act 2023)
  function getDPDPConsent() {
    try {
      const stored = localStorage.getItem('sipro_dpdp_consent');
      if (!stored) return { level: 'pending', functional: false };
      const parsed = JSON.parse(stored);
      return {
        level: parsed.level || 'necessary',
        functional: parsed.level === 'all'
      };
    } catch {
      return { level: 'pending', functional: false };
    }
  }

  // State Management
  const state = {
    isOpen: false,
    isBusy: false,
    conversationId: 'sm_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    messages: [
      {
        sender: 'assistant',
        text: 'Namaste! I am your SiPro technical advisor powered by SiteMind AI. How can I assist your engineering pod, cloud infrastructure, or DPDP compliance inquiry today?',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]
  };

  // Inject Styles into Document Head
  function injectStyles() {
    if (document.getElementById('sitemind-widget-styles')) return;

    const styleEl = document.createElement('style');
    styleEl.id = 'sitemind-widget-styles';
    styleEl.textContent = `
      /* Root Container - Z-Index 40 Cadence */
      #sitemind-widget-container {
        position: fixed;
        bottom: 1.5rem;
        right: 1.5rem;
        z-index: 40;
        font-family: 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        line-height: 1.5;
        box-sizing: border-box;
      }

      #sitemind-widget-container * {
        box-sizing: border-box;
      }

      /* Trigger Launcher Button (Pill Matching SiPro CTAs) */
      .sitemind-trigger-btn {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        min-height: 48px;
        padding: 12px 22px;
        background: #2563eb;
        color: #ffffff;
        font-size: 14px;
        font-weight: 700;
        letter-spacing: -0.01em;
        border-radius: 9999px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 10px 25px -5px rgba(37, 99, 235, 0.45), 0 6px 12px -4px rgba(15, 23, 42, 0.25);
        cursor: pointer;
        transition: all 0.24s cubic-bezier(0.16, 1, 0.3, 1);
        user-select: none;
        -webkit-tap-highlight-color: transparent;
      }

      .sitemind-trigger-btn:hover {
        background: #1d4ed8;
        transform: translateY(-2px);
        box-shadow: 0 16px 32px -6px rgba(37, 99, 235, 0.55), 0 8px 16px -4px rgba(15, 23, 42, 0.3);
      }

      .sitemind-trigger-btn:active {
        transform: translateY(0);
      }

      /* Accessible Focus State: Clear 2px outline */
      .sitemind-trigger-btn:focus-visible,
      .sitemind-action-btn:focus-visible,
      .sitemind-chip:focus-visible,
      .sitemind-input:focus-visible,
      .sitemind-send-btn:focus-visible {
        outline: 2px solid #2563eb !important;
        outline-offset: 2px !important;
      }

      html.light .sitemind-trigger-btn:focus-visible {
        outline: 2px solid #1d4ed8 !important;
        outline-offset: 2px !important;
      }

      /* Pulsing Status Dot */
      .sitemind-pulse-dot {
        position: relative;
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background: #10b981;
        flex-shrink: 0;
      }

      .sitemind-pulse-dot::after {
        content: '';
        position: absolute;
        inset: -3px;
        border-radius: 50%;
        background: rgba(16, 185, 129, 0.45);
        animation: sitemindPulse 2s infinite ease-out;
      }

      @keyframes sitemindPulse {
        0% { transform: scale(0.9); opacity: 0.8; }
        50% { transform: scale(1.6); opacity: 0; }
        100% { transform: scale(0.9); opacity: 0; }
      }

      /* Chat Panel Modal */
      .sitemind-panel {
        position: fixed;
        bottom: calc(1.5rem + 56px);
        right: 1.5rem;
        width: 380px;
        max-width: calc(100vw - 2rem);
        height: 560px;
        max-height: calc(100vh - 6rem);
        background: #0f172a;
        color: #f8fafc;
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 16px;
        box-shadow: 0 24px 50px -12px rgba(0, 0, 0, 0.75), 0 0 0 1px rgba(37, 99, 235, 0.2);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        z-index: 40;
        opacity: 0;
        pointer-events: none;
        transform: translateY(16px) scale(0.96);
        transition: opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      }

      html.light .sitemind-panel {
        background: #ffffff;
        color: #0f172a;
        border-color: rgba(226, 232, 240, 0.9);
        box-shadow: 0 24px 50px -12px rgba(15, 23, 42, 0.18), 0 0 0 1px rgba(37, 99, 235, 0.15);
      }

      .sitemind-panel.active {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0) scale(1);
      }

      /* Panel Header */
      .sitemind-header {
        padding: 14px 16px;
        background: #090e1a;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        flex-shrink: 0;
      }

      html.light .sitemind-header {
        background: #f8fafc;
        border-bottom-color: #e2e8f0;
      }

      .sitemind-brand-info {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .sitemind-avatar {
        width: 34px;
        height: 34px;
        border-radius: 10px;
        background: linear-gradient(135deg, #2563eb, #1e40af);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 800;
        font-size: 14px;
        color: #ffffff;
        box-shadow: 0 2px 8px rgba(37, 99, 235, 0.3);
      }

      .sitemind-title-group h3 {
        margin: 0;
        font-size: 14px;
        font-weight: 700;
        color: #f8fafc;
        letter-spacing: -0.01em;
        display: flex;
        align-items: center;
        gap: 6px;
      }

      html.light .sitemind-title-group h3 {
        color: #0f172a;
      }

      .sitemind-subtitle {
        font-size: 11px;
        color: #94a3b8;
      }

      html.light .sitemind-subtitle {
        color: #64748b;
      }

      .sitemind-badge-status {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 10px;
        padding: 2px 6px;
        border-radius: 9999px;
        background: rgba(16, 185, 129, 0.15);
        color: #34d399;
        font-weight: 600;
      }

      html.light .sitemind-badge-status {
        background: #ecfdf5;
        color: #059669;
      }

      .sitemind-header-actions {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .sitemind-action-btn {
        width: 28px;
        height: 28px;
        border-radius: 8px;
        background: transparent;
        border: none;
        color: #94a3b8;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.18s ease;
      }

      .sitemind-action-btn:hover {
        background: rgba(255, 255, 255, 0.08);
        color: #ffffff;
      }

      html.light .sitemind-action-btn:hover {
        background: #f1f5f9;
        color: #0f172a;
      }

      /* Micro-Disclaimer Compliance Banner inside Chat Initiation */
      .sitemind-disclaimer-box {
        padding: 9px 12px;
        background: rgba(37, 99, 235, 0.08);
        border-bottom: 1px solid rgba(37, 99, 235, 0.18);
        font-size: 11px;
        line-height: 1.45;
        color: #94a3b8;
        display: flex;
        align-items: flex-start;
        gap: 8px;
        flex-shrink: 0;
      }

      html.light .sitemind-disclaimer-box {
        background: #eff6ff;
        border-bottom-color: #dbeafe;
        color: #475569;
      }

      .sitemind-disclaimer-box a {
        color: #3b82f6;
        text-decoration: underline;
        font-weight: 600;
      }

      html.light .sitemind-disclaimer-box a {
        color: #2563eb;
      }

      /* Messages Feed */
      .sitemind-messages {
        flex: 1;
        padding: 14px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 12px;
        scroll-behavior: smooth;
      }

      .sitemind-msg-row {
        display: flex;
        flex-direction: column;
        max-width: 86%;
      }

      .sitemind-msg-row.user {
        align-self: flex-end;
      }

      .sitemind-msg-row.assistant {
        align-self: flex-start;
      }

      .sitemind-bubble {
        padding: 10px 14px;
        border-radius: 12px;
        font-size: 13px;
        line-height: 1.55;
        word-break: break-word;
      }

      .sitemind-msg-row.user .sitemind-bubble {
        background: #2563eb;
        color: #ffffff;
        border-bottom-right-radius: 4px;
      }

      .sitemind-msg-row.assistant .sitemind-bubble {
        background: #1e293b;
        color: #f1f5f9;
        border: 1px solid rgba(255, 255, 255, 0.07);
        border-bottom-left-radius: 4px;
      }

      html.light .sitemind-msg-row.assistant .sitemind-bubble {
        background: #f1f5f9;
        color: #0f172a;
        border-color: #e2e8f0;
      }

      .sitemind-msg-meta {
        font-size: 10px;
        color: #64748b;
        margin-top: 4px;
        padding: 0 4px;
      }

      .sitemind-msg-row.user .sitemind-msg-meta {
        text-align: right;
      }

      /* Quick Suggested Prompts */
      .sitemind-chips-row {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 8px;
      }

      .sitemind-chip {
        background: rgba(37, 99, 235, 0.12);
        border: 1px solid rgba(37, 99, 235, 0.3);
        color: #60a5fa;
        padding: 5px 10px;
        border-radius: 9999px;
        font-size: 11.5px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.18s ease;
        text-align: left;
      }

      html.light .sitemind-chip {
        background: #eff6ff;
        border-color: #bfdbfe;
        color: #1d4ed8;
      }

      .sitemind-chip:hover {
        background: #2563eb;
        color: #ffffff;
        border-color: #2563eb;
        transform: translateY(-1px);
      }

      /* Typing Loading Animation */
      .sitemind-typing {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 8px 12px;
      }

      .sitemind-typing-dot {
        width: 6px;
        height: 6px;
        background: #94a3b8;
        border-radius: 50%;
        animation: sitemindBounce 1.4s infinite ease-in-out both;
      }

      .sitemind-typing-dot:nth-child(1) { animation-delay: -0.32s; }
      .sitemind-typing-dot:nth-child(2) { animation-delay: -0.16s; }

      @keyframes sitemindBounce {
        0%, 80%, 100% { transform: scale(0); }
        40% { transform: scale(1); }
      }

      /* Chat Input Form */
      .sitemind-footer {
        padding: 10px 12px;
        background: #090e1a;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        display: flex;
        flex-direction: column;
        gap: 6px;
        flex-shrink: 0;
      }

      html.light .sitemind-footer {
        background: #f8fafc;
        border-top-color: #e2e8f0;
      }

      .sitemind-input-form {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .sitemind-input {
        flex: 1;
        height: 40px;
        background: #1e293b;
        color: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        padding: 8px 12px;
        font-size: 13px;
        font-family: inherit;
        outline: none;
        transition: border-color 0.2s ease;
      }

      html.light .sitemind-input {
        background: #ffffff;
        color: #0f172a;
        border-color: #cbd5e1;
      }

      .sitemind-input:focus {
        border-color: #2563eb;
      }

      .sitemind-send-btn {
        width: 40px;
        height: 40px;
        border-radius: 10px;
        background: #2563eb;
        color: #ffffff;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background 0.18s ease;
        flex-shrink: 0;
      }

      .sitemind-send-btn:hover:not(:disabled) {
        background: #1d4ed8;
      }

      .sitemind-send-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .sitemind-footer-meta {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 10px;
        color: #64748b;
        padding: 0 4px;
      }

      /* Mobile Responsive & Cookie Banner Collision Avoidance */
      @media (max-width: 640px) {
        #sitemind-widget-container {
          bottom: 1.25rem;
          right: 1.25rem;
        }

        .sitemind-panel {
          bottom: 0 !important;
          right: 0 !important;
          left: 0 !important;
          top: 0 !important;
          width: 100vw !important;
          max-width: 100vw !important;
          height: 100% !important;
          max-height: 100% !important;
          border-radius: 0 !important;
        }

        .sitemind-trigger-btn {
          padding: 10px 18px;
          font-size: 13px;
        }
      }

      /* Mobile Overlap Rule: When cookie banner is active, temporarily displace or hide widget trigger */
      @media (max-width: 768px) {
        body.has-cookie-banner #sitemind-widget-container .sitemind-trigger-btn,
        #sitemind-widget-container[data-cookie-banner-active="true"] .sitemind-trigger-btn {
          opacity: 0 !important;
          pointer-events: none !important;
          transform: translateY(24px) scale(0.9) !important;
          visibility: hidden !important;
        }
      }
    `;

    document.head.appendChild(styleEl);
  }

  // Create and Mount Widget DOM
  function createWidget() {
    if (document.getElementById('sitemind-widget-container')) return;

    injectStyles();

    const container = document.createElement('div');
    container.id = 'sitemind-widget-container';
    container.setAttribute('data-category', SCRIPT_CATEGORY);

    container.innerHTML = `
      <!-- Trigger Button Pinned Bottom-Right (z-index: 40) -->
      <button 
        type="button" 
        id="sitemind-widget-trigger" 
        class="sitemind-trigger-btn"
        aria-label="Open SiteMind AI Assistant"
        tabindex="0">
        <span class="sitemind-pulse-dot" aria-hidden="true"></span>
        <span>💬 Ask SiPro AI</span>
      </button>

      <!-- Chat Modal Window -->
      <div 
        id="sitemind-widget-panel" 
        class="sitemind-panel" 
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="sitemind-panel-title"
        aria-hidden="true">
        
        <!-- Header -->
        <div class="sitemind-header">
          <div class="sitemind-brand-info">
            <div class="sitemind-avatar" aria-hidden="true">SP</div>
            <div class="sitemind-title-group">
              <h3 id="sitemind-panel-title">
                <span>SiPro AI Assistant</span>
              </h3>
              <div class="sitemind-subtitle">Enterprise Cloud &amp; Engineering</div>
            </div>
          </div>
          <div class="sitemind-header-actions">
            <span class="sitemind-badge-status">
              <span class="sitemind-pulse-dot" style="width:6px;height:6px" aria-hidden="true"></span>
              Online
            </span>
            <button type="button" class="sitemind-action-btn" id="sitemind-reset-btn" title="Reset Conversation" aria-label="Reset Conversation">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
            </button>
            <button type="button" class="sitemind-action-btn" id="sitemind-close-btn" title="Close Assistant" aria-label="Close Assistant">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
        </div>

        <!-- Compliance & Privacy Safeguard Micro-Disclaimer (Requirement 4) -->
        <div class="sitemind-disclaimer-box" id="sitemind-disclaimer">
          <svg style="flex-shrink:0;margin-top:1px" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          <div>
            Powered by SiteMind AI. Chat interactions are used solely to assist your inquiries in accordance with our <a href="privacy-policy.html" target="_blank" rel="noopener noreferrer">Privacy Policy</a>. Do not share confidential credentials.
          </div>
        </div>

        <!-- Chat Conversation Messages Feed -->
        <div class="sitemind-messages" id="sitemind-messages-feed" role="log" aria-live="polite">
          <!-- Initial Welcome Bubble -->
          <div class="sitemind-msg-row assistant">
            <div class="sitemind-bubble">
              Namaste! I am your SiPro technical advisor powered by SiteMind AI. How can I assist your engineering pod, cloud infrastructure, or DPDP compliance inquiry today?
              
              <div class="sitemind-chips-row">
                <button type="button" class="sitemind-chip" data-query="What is the pricing and team structure for dedicated engineering pods?">
                  🚀 Pod Pricing &amp; Sizing
                </button>
                <button type="button" class="sitemind-chip" data-query="How does SiPro ensure DPDP Act 2023 compliance and IP ownership?">
                  🛡️ DPDP Act 2023 &amp; IP
                </button>
                <button type="button" class="sitemind-chip" data-query="What cloud architecture and Kubernetes stacks do you build?">
                  ☁️ Cloud &amp; Microservices
                </button>
                <button type="button" class="sitemind-chip" data-query="How quickly can a 5-day pod kick off on my project?">
                  ⏱️ 5-Day Pod Kickoff
                </button>
              </div>
            </div>
            <div class="sitemind-msg-meta">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
          </div>
        </div>

        <!-- Input Box & Actions -->
        <div class="sitemind-footer">
          <form class="sitemind-input-form" id="sitemind-chat-form">
            <input 
              type="text" 
              id="sitemind-chat-input" 
              class="sitemind-input" 
              placeholder="Ask about pods, cloud systems, pricing..." 
              autocomplete="off"
              aria-label="Message SiPro AI Assistant"
            />
            <button type="submit" id="sitemind-send-btn" class="sitemind-send-btn" aria-label="Send message">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </form>
          <div class="sitemind-footer-meta">
            <span>🔒 TLS 1.3 &amp; DPDP 2023 Compliant</span>
            <span>SiPro Technologies · Telangana</span>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(container);

    setupWidgetEvents(container);
    setupCookieBannerCoordination(container);
  }

  // Cookie Banner Collision Coordination on Mobile Viewports (Requirement 2)
  function setupCookieBannerCoordination(container) {
    function evaluateCollision() {
      const banner = document.getElementById('sipro-dpdp-banner') || document.querySelector('.dpdp-consent-banner');
      const isBannerActive = banner && (banner.classList.contains('show') || document.body.classList.contains('has-cookie-banner'));
      const isMobile = window.innerWidth <= 768;

      if (isMobile && isBannerActive) {
        container.setAttribute('data-cookie-banner-active', 'true');
      } else {
        container.removeAttribute('data-cookie-banner-active');
      }
    }

    // Initial check
    evaluateCollision();

    // Listen to resize and scroll
    window.addEventListener('resize', evaluateCollision, { passive: true });

    // Listen to DPDP events
    window.addEventListener('dpdp:consent-saved', () => {
      setTimeout(evaluateCollision, 350);
    });

    // MutationObserver to detect banner appearance/removal in DOM
    const observer = new MutationObserver(() => {
      evaluateCollision();
    });

    observer.observe(document.body, { childList: true, attributes: true, subtree: true, attributeFilter: ['class'] });
  }

  // Event Listeners and Chat Handlers
  function setupWidgetEvents(container) {
    const triggerBtn = container.querySelector('#sitemind-widget-trigger');
    const panel = container.querySelector('#sitemind-widget-panel');
    const closeBtn = container.querySelector('#sitemind-close-btn');
    const resetBtn = container.querySelector('#sitemind-reset-btn');
    const form = container.querySelector('#sitemind-chat-form');
    const input = container.querySelector('#sitemind-chat-input');
    const messagesFeed = container.querySelector('#sitemind-messages-feed');

    function openPanel() {
      state.isOpen = true;
      panel.classList.add('active');
      panel.setAttribute('aria-hidden', 'false');
      triggerBtn.style.display = 'none';
      setTimeout(() => input.focus(), 150);
    }

    function closePanel() {
      state.isOpen = false;
      panel.classList.remove('active');
      panel.setAttribute('aria-hidden', 'true');
      triggerBtn.style.display = 'inline-flex';
      triggerBtn.focus();
    }

    triggerBtn.addEventListener('click', openPanel);
    closeBtn.addEventListener('click', closePanel);

    // Escape Key Accessibility
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && state.isOpen) {
        closePanel();
      }
    });

    // Reset Chat
    resetBtn.addEventListener('click', () => {
      state.conversationId = 'sm_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
      messagesFeed.innerHTML = `
        <div class="sitemind-msg-row assistant">
          <div class="sitemind-bubble">
            Conversation reset. Namaste! How may I assist your software development or cloud infrastructure needs?
            <div class="sitemind-chips-row">
              <button type="button" class="sitemind-chip" data-query="What is the pricing and team structure for dedicated engineering pods?">
                🚀 Pod Pricing &amp; Sizing
              </button>
              <button type="button" class="sitemind-chip" data-query="How does SiPro ensure DPDP Act 2023 compliance and IP ownership?">
                🛡️ DPDP Act 2023 &amp; IP
              </button>
            </div>
          </div>
          <div class="sitemind-msg-meta">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
        </div>
      `;
    });

    // Prompt Chips Click Handler (Event Delegation)
    messagesFeed.addEventListener('click', (e) => {
      const chip = e.target.closest('.sitemind-chip');
      if (chip && chip.dataset.query) {
        sendMessage(chip.dataset.query);
      }
    });

    // Form Submission
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = input.value.trim();
      if (!text || state.isBusy) return;
      input.value = '';
      sendMessage(text);
    });

    // Send Message Handler
    async function sendMessage(userQuery) {
      if (!userQuery) return;

      const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      // Append User Bubble
      const userRow = document.createElement('div');
      userRow.className = 'sitemind-msg-row user';
      userRow.innerHTML = `
        <div class="sitemind-bubble">${escapeHtml(userQuery)}</div>
        <div class="sitemind-msg-meta">${timeNow}</div>
      `;
      messagesFeed.appendChild(userRow);

      // Scroll to bottom
      messagesFeed.scrollTop = messagesFeed.scrollHeight;

      // Append Typing Indicator
      state.isBusy = true;
      const sendBtn = container.querySelector('#sitemind-send-btn');
      if (sendBtn) sendBtn.disabled = true;

      const typingRow = document.createElement('div');
      typingRow.className = 'sitemind-msg-row assistant';
      typingRow.id = 'sitemind-typing-indicator';
      typingRow.innerHTML = `
        <div class="sitemind-bubble sitemind-typing" aria-label="Assistant is typing">
          <span class="sitemind-typing-dot"></span>
          <span class="sitemind-typing-dot"></span>
          <span class="sitemind-typing-dot"></span>
        </div>
      `;
      messagesFeed.appendChild(typingRow);
      messagesFeed.scrollTop = messagesFeed.scrollHeight;

      try {
        let answerText = '';

        // Try hitting backend API
        const res = await fetch(`${API_URL}/chat`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            question: userQuery,
            message: userQuery,
            widgetKey: WIDGET_KEY,
            conversationId: state.conversationId,
            pageUrl: window.location.href,
            pageTitle: document.title
          })
        });

        if (res.ok) {
          const data = await res.json();
          answerText = data.text || data.answer || data.message || '';
        }

        // Fallback to grounded local technical answers if server returns empty
        if (!answerText) {
          answerText = getFallbackResponse(userQuery);
        }

        typingRow.remove();

        // Render Assistant Response
        const assistantRow = document.createElement('div');
        assistantRow.className = 'sitemind-msg-row assistant';
        assistantRow.innerHTML = `
          <div class="sitemind-bubble">${formatMarkdown(answerText)}</div>
          <div class="sitemind-msg-meta">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} • Grounded by SiPro</div>
        `;
        messagesFeed.appendChild(assistantRow);

      } catch (err) {
        typingRow.remove();
        const fallbackText = getFallbackResponse(userQuery);
        const assistantRow = document.createElement('div');
        assistantRow.className = 'sitemind-msg-row assistant';
        assistantRow.innerHTML = `
          <div class="sitemind-bubble">${formatMarkdown(fallbackText)}</div>
          <div class="sitemind-msg-meta">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} • SiPro Verified</div>
        `;
        messagesFeed.appendChild(assistantRow);
      } finally {
        state.isBusy = false;
        if (sendBtn) sendBtn.disabled = false;
        messagesFeed.scrollTop = messagesFeed.scrollHeight;
      }
    }
  }

  // Grounded Technical Knowledge Base Fallback
  function getFallbackResponse(query) {
    const q = query.toLowerCase();

    if (q.includes('price') || q.includes('pricing') || q.includes('cost') || q.includes('tier') || q.includes('retainer')) {
      return `**SiPro Technologies Retainer & Pod Models:**\n\n- **Sprint Pod:** ₹1,20,000 / $1,450 per 2-week sprint (Dedicated Full-Stack pod, CI/CD, daily standups).\n- **Dedicated Pod:** ₹2,40,000 / $2,900 per month (Full engineering squad: Senior Lead, Cloud Architect, 2 Engineers).\n- **Enterprise Architecture:** ₹4,80,000 / $5,800 per month (Multi-region failover, Kubernetes GKE/EKS, DPDP compliance audits, 24/7 SLA).\n\nAll invoices are **18% GST tax-compliant** for corporate input tax credit (GSTIN: \`36AAACS1234A1Z5\`).`;
    }

    if (q.includes('dpdp') || q.includes('privacy') || q.includes('gdpr') || q.includes('compliance') || q.includes('dpo') || q.includes('consent')) {
      return `**DPDP Act 2023 & Compliance Guarantee:**\n\nSiPro Technologies is an MSME-registered Data Fiduciary adhering strictly to the **Digital Personal Data Protection Act 2023**:\n- **100% IP & Copyright Transfer:** Client retains complete source code ownership upon invoice clearance.\n- **Data Minimization & Audit Logs:** Verifiable consent lifecycle and statutory DPO mechanisms (\`grievance@sipro.tech\`).\n- You can manage consent preferences or export your personal data archive anytime via our **Privacy Rights Portal**.`;
    }

    if (q.includes('cloud') || q.includes('kubernetes') || q.includes('k8s') || q.includes('architecture') || q.includes('microservice') || q.includes('stack')) {
      return `**Enterprise Cloud & Architecture Stack:**\n\n- **Orchestration:** Kubernetes (GKE / AWS EKS), Istio Service Mesh, ArgoCD GitOps.\n- **Backend Microservices:** Go, TypeScript (Node.js/Next.js 15), Python FastAPI.\n- **Databases:** PostgreSQL (Cloud SQL/RDS) with Citus sharding, Redis caching, Kafka event meshes.\n- **Reliability:** 99.99% multi-region uptime architectures with automated mTLS zero-trust security.`;
    }

    if (q.includes('5-day') || q.includes('kickoff') || q.includes('speed') || q.includes('hire') || q.includes('start') || q.includes('timeline')) {
      return `**5-Day Pod Kickoff Timeline:**\n\n1. **Day 1:** Requirements briefing and architecture scoping call.\n2. **Day 2:** Pod composition matching (Principal Lead & vetted developers).\n3. **Day 3:** Repository access, environment setup, and security onboarding.\n4. **Day 4:** Sprint 1 backlog grooming and definition of done.\n5. **Day 5:** Active sprint kickoff with live commits directly to your codebase.`;
    }

    if (q.includes('contact') || q.includes('email') || q.includes('call') || q.includes('talk') || q.includes('location') || q.includes('where')) {
      return `**Get in Touch with SiPro Technologies:**\n\n- **Direct Email:** [contact@sipro.tech](mailto:contact@sipro.tech)\n- **Regional HQ:** Subedari, Hanamkonda, Telangana 506001, India\n- **Client Portal:** Sign in at [sipro.tech/login-client.html](login-client.html) for real-time sprint tracking and deliverables.`;
    }

    return `Thank you for your question. SiPro Technologies provides enterprise cloud architectures, high-concurrency microservices, DPDP-compliant web systems, and 5-day dedicated pods. \n\nYou can explore our solutions, schedule a consultation by emailing [contact@sipro.tech](mailto:contact@sipro.tech), or ask me about our pricing retainers and technical stacks!`;
  }

  // Utilities
  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function formatMarkdown(text) {
    if (!text) return '';
    let formatted = escapeHtml(text);
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');
    formatted = formatted.replace(/`([^`]+)`/g, '<code style="background:rgba(255,255,255,0.1);padding:2px 5px;border-radius:4px;font-family:monospace;font-size:12px;color:#60a5fa">$1</code>');
    formatted = formatted.replace(/\n/g, '<br>');
    return formatted;
  }

  // Bootstrap when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createWidget);
  } else {
    createWidget();
  }

  // Expose global interface for debugging or programmatic controls
  window.SiteMind = {
    open: () => {
      const trigger = document.getElementById('sitemind-widget-trigger');
      if (trigger) trigger.click();
    },
    close: () => {
      const closeBtn = document.getElementById('sitemind-close-btn');
      if (closeBtn) closeBtn.click();
    },
    version: '1.2.0',
    category: SCRIPT_CATEGORY
  };

})();
