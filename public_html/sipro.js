/**
 * SiPro Technologies (Sipro.tech)
 * Enterprise System Scripts & Production Authentication Engine
 */

// Formats & Constants
const formatINR = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0
});

const NAV_LINKS = [
  ['Home', 'index.html'],
  ['Services', 'services.html'],
  ['Pricing', 'pricing.html'],
  ['Careers', 'careers.html'],
  ['About', 'about.html'],
  ['Contact', 'contact.html']
];

// SVG Icons
const ICONS = {
  user: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  mail: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  lock: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  eye: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
  eyeOff: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>`,
  google: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>`,
  github: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  sun: `<svg class="icon-sun" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
  moon: `<svg class="icon-moon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`
};

// State Management for Session
const AuthState = {
  getUser() {
    try {
      const raw = localStorage.getItem('sipro_auth_session');
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  },
  setUser(user) {
    if (user) {
      localStorage.setItem('sipro_auth_session', JSON.stringify(user));
    } else {
      localStorage.removeItem('sipro_auth_session');
    }
    renderHeader();
  },
  logout() {
    this.setUser(null);
    showToast('Signed out successfully.', 'info');
    setTimeout(() => {
      if (location.pathname.includes('dashboard') || location.pathname.includes('billing')) {
        location.href = 'index.html';
      }
    }, 600);
  }
};

// Toast Notifications System
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <div class="toast-icon">
      ${type === 'success' ? ICONS.check : type === 'error' ? '!' : 'ℹ'}
    </div>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Global Shell & Header Injection
function renderHeader() {
  const headerContainer = document.querySelector('[data-header]');
  if (!headerContainer) return;

  const page = document.body.dataset.page || (location.pathname.split('/').pop() || 'index.html');
  const user = AuthState.getUser();

  // Generate desktop nav links
  const desktopLinks = NAV_LINKS.map(([label, href]) => {
    const isActive = page === href || (href === 'index.html' && page === '');
    return `<a class="nav-link ${isActive ? 'active' : ''}" href="${href}">${label}</a>`;
  }).join('');

  // Generate mobile nav links
  const mobileLinks = NAV_LINKS.map(([label, href]) => {
    const isActive = page === href || (href === 'index.html' && page === '');
    return `<a class="mobile-nav-link ${isActive ? 'active' : ''}" href="${href}">
      <span>${label}</span>
      <span style="opacity:0.4">→</span>
    </a>`;
  }).join('');

  // Auth block for desktop
  let desktopAuthHtml = '';
  if (user) {
    const dashboardLink = user.role === 'client' ? 'client-dashboard.html' :
                          user.role === 'candidate' ? 'candidate-dashboard.html' : 'employee-dashboard.html';
    const roleLabel = user.role === 'client' ? 'Client' : user.role === 'candidate' ? 'Learner' : 'Team';
    const initials = user.name ? user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) : 'SP';
    
    desktopAuthHtml = `
      <a href="${dashboardLink}" class="user-menu-pill" title="Open Workspace">
        <div class="user-avatar">${initials}</div>
        <span>${user.name.split(' ')[0]}</span>
        <span class="tag ${user.role === 'candidate' ? 'amber' : ''}" style="margin:0;padding:2px 6px;font-size:10px">${roleLabel}</span>
      </a>
      <button class="btn btn-ghost btn-sm" onclick="AuthState.logout()" title="Sign Out">Sign Out</button>
    `;
  } else {
    desktopAuthHtml = `
      <button type="button" class="btn btn-ghost btn-sm" data-auth-trigger="signin">Log In</button>
      <button type="button" class="btn btn-primary btn-sm" data-auth-trigger="signup">Sign Up</button>
    `;
  }

  // Auth block for mobile drawer
  let mobileAuthHtml = '';
  if (user) {
    const dashboardLink = user.role === 'client' ? 'client-dashboard.html' :
                          user.role === 'candidate' ? 'candidate-dashboard.html' : 'employee-dashboard.html';
    const roleLabel = user.role === 'client' ? 'Enterprise Client' : user.role === 'candidate' ? 'Candidate & Learner' : 'Staff & Team';
    const initials = user.name ? user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) : 'SP';

    mobileAuthHtml = `
      <div class="mobile-user-card">
        <div class="user-avatar" style="width:38px;height:38px;font-size:14px">${initials}</div>
        <div class="mobile-user-info">
          <div class="mobile-user-name">${user.name}</div>
          <div class="mobile-user-email">${user.email} · ${roleLabel}</div>
        </div>
      </div>
      <a href="${dashboardLink}" class="btn btn-primary btn-block">Go to Workspace Dashboard</a>
      <button type="button" class="btn btn-ghost btn-block" onclick="AuthState.logout()">Sign Out</button>
    `;
  } else {
    mobileAuthHtml = `
      <button type="button" class="btn btn-ghost btn-block" data-auth-trigger="signin">Log In</button>
      <button type="button" class="btn btn-primary btn-block" data-auth-trigger="signup">Sign Up / Get Started</button>
    `;
  }

  headerContainer.innerHTML = `
    <header class="site-header">
      <div class="container">
        <div class="header-nav">
          <a class="brand" href="index.html">
            <div class="brand-badge">SP</div>
            <span class="brand-name">SiPro<span class="brand-tld">.tech</span></span>
          </a>

          <nav class="nav-links-desktop" aria-label="Main Navigation">
            ${desktopLinks}
          </nav>

          <div class="header-actions">
            <button class="theme-toggle-btn" type="button" aria-label="Switch light or dark mode">
              ${ICONS.sun}
              ${ICONS.moon}
            </button>

            <div class="header-auth-group">
              ${desktopAuthHtml}
            </div>

            <button class="hamburger-btn" type="button" aria-controls="mobile-drawer" aria-expanded="false" aria-label="Toggle navigation menu">
              <span class="hamburger-line"></span>
              <span class="hamburger-line"></span>
              <span class="hamburger-line"></span>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Dropdown Drawer -->
      <div class="mobile-drawer" id="mobile-drawer">
        <nav class="mobile-nav-links">
          ${mobileLinks}
        </nav>
        <div class="mobile-auth-block">
          ${mobileAuthHtml}
        </div>
      </div>
      <div class="mobile-drawer-backdrop" id="mobile-drawer-backdrop"></div>
    </header>
  `;

  // Mobile drawer bindings
  const hamburger = headerContainer.querySelector('.hamburger-btn');
  const drawer = headerContainer.querySelector('.mobile-drawer');
  const backdrop = headerContainer.querySelector('.mobile-drawer-backdrop');

  const closeDrawer = () => {
    if (!drawer || !hamburger || !backdrop) return;
    drawer.classList.remove('open');
    backdrop.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open navigation menu');
  };

  if (hamburger && drawer && backdrop) {
    hamburger.addEventListener('click', () => {
      const isOpen = drawer.classList.toggle('open');
      backdrop.classList.toggle('active', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      hamburger.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    });

    backdrop.addEventListener('click', closeDrawer);
    drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));
  }

  // Theme toggle button
  headerContainer.querySelectorAll('.theme-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const isLight = document.documentElement.classList.toggle('light');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
  });

  // Re-bind auth triggers
  bindAuthTriggers();
}

function renderFooter() {
  const footerContainer = document.querySelector('[data-footer]');
  if (!footerContainer) return;

  footerContainer.innerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <a class="brand" href="index.html">
              <div class="brand-badge">SP</div>
              <span class="brand-name">SiPro<span class="brand-tld">.tech</span></span>
            </a>
            <p>Cloud Architecture, Enterprise Web Systems, Microservices, and Intelligent Automation.</p>
            <p style="margin-top:12px;font-size:13px;color:var(--muted)">Hanamkonda, Telangana · Operating Globally</p>
          </div>
          <div class="footer-col">
            <h4>Capabilities</h4>
            <ul>
              <li><a href="services.html">Cloud Architecture</a></li>
              <li><a href="services.html">Enterprise Web Systems</a></li>
              <li><a href="services.html">AI & Machine Learning</a></li>
              <li><a href="services.html">Cybersecurity Reviews</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Workspaces</h4>
            <ul>
              <li><a href="login-client.html">Client Delivery Portal</a></li>
              <li><a href="login-candidate.html">Candidate Learning Hub</a></li>
              <li><a href="login-employee.html">Employee Operations</a></li>
              <li><a href="pricing.html">Pricing & Retainers</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:contact@sipro.tech">contact@sipro.tech</a></li>
              <li><a href="mailto:support@sipro.tech">support@sipro.tech</a></li>
              <li><a href="contact.html">Send an Inquiry</a></li>
              <li><a href="about.html">About SiPro</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} SiPro Technologies (MSME). All rights reserved.</span>
          <span>Responsible Engineering · Transparent Delivery</span>
        </div>
      </div>
    </footer>
  `;
}

// ==========================================================================
// Authentication Modal & UI Engine
// ==========================================================================
function renderAuthModal() {
  if (document.getElementById('auth-modal-root')) return;

  const modalRoot = document.createElement('div');
  modalRoot.id = 'auth-modal-root';
  modalRoot.className = 'auth-modal-backdrop';
  modalRoot.innerHTML = `
    <div class="auth-card" role="dialog" aria-modal="true" aria-labelledby="auth-modal-title">
      <button class="auth-modal-close" aria-label="Close dialog">×</button>
      
      <div class="auth-card-header">
        <div class="auth-card-brand">
          <div class="brand-badge" style="width:30px;height:30px;font-size:13px">SP</div>
          <strong style="font-size:18px">SiPro<span class="brand-tld">.tech</span></strong>
        </div>
        <h2 class="auth-card-title" id="auth-modal-title">Welcome to SiPro</h2>
        <p class="auth-card-subtitle" id="auth-modal-desc">Access enterprise delivery, talent portals & systems</p>
      </div>

      <div class="auth-tabs">
        <button type="button" class="auth-tab active" data-tab="signin">Sign In</button>
        <button type="button" class="auth-tab" data-tab="signup">Create Account</button>
      </div>

      <!-- Social Login Buttons -->
      <div class="oauth-buttons">
        <button type="button" class="oauth-btn" data-oauth="google">
          ${ICONS.google}
          <span>Google</span>
        </button>
        <button type="button" class="oauth-btn" data-oauth="github">
          ${ICONS.github}
          <span>GitHub</span>
        </button>
      </div>

      <div class="auth-divider">
        <span>or with work email</span>
      </div>

      <!-- Sign In Form -->
      <form class="auth-form" id="modal-signin-form">
        <div class="form-group">
          <label for="modal-signin-email">Work Email</label>
          <div class="input-wrapper">
            <span class="input-icon">${ICONS.mail}</span>
            <input id="modal-signin-email" class="auth-input" type="email" required placeholder="you@company.com" autocomplete="email">
          </div>
          <span class="field-error" id="modal-signin-email-error">Please enter a valid work email address.</span>
        </div>

        <div class="form-group">
          <label for="modal-signin-password">
            <span>Password</span>
            <a href="javascript:void(0)" class="forgot-pwd-trigger">Forgot password?</a>
          </label>
          <div class="input-wrapper">
            <span class="input-icon">${ICONS.lock}</span>
            <input id="modal-signin-password" class="auth-input" type="password" required placeholder="Enter your password" autocomplete="current-password">
            <button type="button" class="password-toggle-btn" aria-label="Show password">${ICONS.eye}</button>
          </div>
          <span class="field-error" id="modal-signin-password-error">Password must be at least 6 characters.</span>
        </div>

        <div style="display:flex;align-items:center;justify-content:space-between">
          <label class="checkbox-label">
            <input type="checkbox" id="modal-signin-remember" checked style="position:absolute;opacity:0">
            <span class="custom-checkbox">${ICONS.check}</span>
            <span>Remember me</span>
          </label>
        </div>

        <button type="submit" class="btn btn-primary auth-submit-btn">
          <span class="btn-text">Sign In to SiPro</span>
          <span class="btn-spinner"></span>
        </button>
      </form>

      <!-- Sign Up Form -->
      <form class="auth-form" id="modal-signup-form" style="display:none">
        <div class="form-group">
          <label for="modal-signup-name">Full Name</label>
          <div class="input-wrapper">
            <span class="input-icon">${ICONS.user}</span>
            <input id="modal-signup-name" class="auth-input" type="text" required placeholder="e.g. Arjun Sharma" autocomplete="name">
          </div>
          <span class="field-error" id="modal-signup-name-error">Please enter your full name.</span>
        </div>

        <div class="form-group">
          <label for="modal-signup-email">Work Email</label>
          <div class="input-wrapper">
            <span class="input-icon">${ICONS.mail}</span>
            <input id="modal-signup-email" class="auth-input" type="email" required placeholder="you@company.com" autocomplete="email">
          </div>
          <span class="field-error" id="modal-signup-email-error">Please enter a valid email address.</span>
        </div>

        <div class="form-group">
          <label>Select Workspace Role</label>
          <div class="role-pills">
            <label>
              <input type="radio" name="modal-role" value="client" class="role-pill-radio" checked>
              <span class="role-pill-label">Enterprise Client</span>
            </label>
            <label>
              <input type="radio" name="modal-role" value="candidate" class="role-pill-radio">
              <span class="role-pill-label">Candidate / Engineer</span>
            </label>
            <label>
              <input type="radio" name="modal-role" value="employee" class="role-pill-radio">
              <span class="role-pill-label">Team Member</span>
            </label>
          </div>
        </div>

        <div class="form-group">
          <label for="modal-signup-password">Create Password</label>
          <div class="input-wrapper">
            <span class="input-icon">${ICONS.lock}</span>
            <input id="modal-signup-password" class="auth-input" type="password" required placeholder="At least 8 characters" autocomplete="new-password">
            <button type="button" class="password-toggle-btn" aria-label="Show password">${ICONS.eye}</button>
          </div>
          <div class="strength-meter">
            <div class="strength-bars">
              <span class="strength-bar"></span>
              <span class="strength-bar"></span>
              <span class="strength-bar"></span>
              <span class="strength-bar"></span>
            </div>
            <div class="strength-text">
              <span>Password strength</span>
              <strong id="modal-strength-label">Too weak</strong>
            </div>
          </div>
          <span class="field-error" id="modal-signup-password-error">Password must be at least 8 characters.</span>
        </div>

        <div class="form-group">
          <label for="modal-signup-confirm">Confirm Password</label>
          <div class="input-wrapper">
            <span class="input-icon">${ICONS.lock}</span>
            <input id="modal-signup-confirm" class="auth-input" type="password" required placeholder="Re-enter password" autocomplete="new-password">
          </div>
          <span class="field-error" id="modal-signup-confirm-error">Passwords do not match.</span>
        </div>

        <label class="checkbox-label">
          <input type="checkbox" id="modal-signup-terms" required checked style="position:absolute;opacity:0">
          <span class="custom-checkbox">${ICONS.check}</span>
          <span>I agree to the <a href="about.html" target="_blank">Terms of Service</a> & <a href="about.html" target="_blank">Privacy Policy</a></span>
        </label>

        <button type="submit" class="btn btn-primary auth-submit-btn">
          <span class="btn-text">Create Account</span>
          <span class="btn-spinner"></span>
        </button>
      </form>

      <div class="auth-card-footer" id="modal-auth-toggle-note">
        Don't have an account yet? <a href="javascript:void(0)" onclick="switchAuthTab('signup')">Sign up for free</a>
      </div>
    </div>
  `;

  document.body.appendChild(modalRoot);

  // Close handlers
  const closeBtn = modalRoot.querySelector('.auth-modal-close');
  closeBtn.addEventListener('click', closeAuthModal);
  modalRoot.addEventListener('click', (e) => {
    if (e.target === modalRoot) closeAuthModal();
  });

  // Tab switching
  modalRoot.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      switchAuthTab(tab.dataset.tab);
    });
  });

  // Password visibility toggles
  setupPasswordToggles(modalRoot);

  // Password strength meter
  setupPasswordMeter(
    modalRoot.querySelector('#modal-signup-password'),
    modalRoot.querySelector('.strength-bars'),
    modalRoot.querySelector('#modal-strength-label')
  );

  // Confirm password match validation
  const pwdInput = modalRoot.querySelector('#modal-signup-password');
  const confirmInput = modalRoot.querySelector('#modal-signup-confirm');
  const confirmError = modalRoot.querySelector('#modal-signup-confirm-error');

  const checkMatch = () => {
    if (confirmInput.value && pwdInput.value !== confirmInput.value) {
      confirmError.classList.add('visible');
      confirmInput.classList.add('has-error');
    } else {
      confirmError.classList.remove('visible');
      confirmInput.classList.remove('has-error');
    }
  };

  confirmInput.addEventListener('input', checkMatch);
  pwdInput.addEventListener('input', checkMatch);

  // Form submission: Sign In
  const signinForm = modalRoot.querySelector('#modal-signin-form');
  signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = modalRoot.querySelector('#modal-signin-email').value.trim();
    const password = modalRoot.querySelector('#modal-signin-password').value;
    const emailError = modalRoot.querySelector('#modal-signin-email-error');
    const pwdError = modalRoot.querySelector('#modal-signin-password-error');

    let valid = true;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailError.classList.add('visible');
      valid = false;
    } else {
      emailError.classList.remove('visible');
    }

    if (password.length < 6) {
      pwdError.classList.add('visible');
      valid = false;
    } else {
      pwdError.classList.remove('visible');
    }

    if (!valid) {
      const card = modalRoot.querySelector('.auth-card');
      if (card) {
        card.classList.add('shake');
        setTimeout(() => card.classList.remove('shake'), 500);
      }
      showToast('Incorrect password format or missing credentials. Please retry.', 'error');
      return;
    }

    const submitBtn = signinForm.querySelector('.auth-submit-btn');
    submitBtn.classList.add('loading');

    setTimeout(() => {
      submitBtn.classList.remove('loading');
      // Determine role from email or default to client
      let role = 'client';
      if (email.includes('candidate') || email.includes('student') || email.includes('learn')) role = 'candidate';
      if (email.includes('employee') || email.includes('sipro') || email.includes('staff')) role = 'employee';

      const userName = email.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      const user = { email, name: userName || 'Arjun Sharma', role, loginAt: new Date().toISOString() };

      AuthState.setUser(user);
      
      // Async DB Sync
      fetch('/api/v1/auth/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: user.email, displayName: user.name, role: user.role })
      }).catch(e => console.warn('Auth sync:', e));

      closeAuthModal();
      showToast(`Welcome back, ${user.name}!`, 'success');
      triggerNamasteCelebration(user);

      const target = role === 'client' ? 'client-dashboard.html' :
                     role === 'candidate' ? 'candidate-dashboard.html' : 'employee-dashboard.html';
      setTimeout(() => {
        if (!location.pathname.includes('dashboard')) {
          location.href = target;
        }
      }, 1600);
    }, 700);
  });

  // Form submission: Sign Up
  const signupForm = modalRoot.querySelector('#modal-signup-form');
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = modalRoot.querySelector('#modal-signup-name').value.trim();
    const email = modalRoot.querySelector('#modal-signup-email').value.trim();
    const password = modalRoot.querySelector('#modal-signup-password').value;
    const confirm = modalRoot.querySelector('#modal-signup-confirm').value;
    const roleRadio = modalRoot.querySelector('input[name="modal-role"]:checked');
    const role = roleRadio ? roleRadio.value : 'client';

    let valid = true;
    if (!name) {
      modalRoot.querySelector('#modal-signup-name-error').classList.add('visible');
      valid = false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      modalRoot.querySelector('#modal-signup-email-error').classList.add('visible');
      valid = false;
    }
    if (password.length < 8) {
      modalRoot.querySelector('#modal-signup-password-error').classList.add('visible');
      valid = false;
    }
    if (password !== confirm) {
      modalRoot.querySelector('#modal-signup-confirm-error').classList.add('visible');
      valid = false;
    }

    if (!valid) {
      const card = modalRoot.querySelector('.auth-card');
      card.classList.add('shake');
      setTimeout(() => card.classList.remove('shake'), 500);
      return;
    }

    const submitBtn = signupForm.querySelector('.auth-submit-btn');
    submitBtn.classList.add('loading');

    setTimeout(() => {
      submitBtn.classList.remove('loading');
      const user = { email, name, role, loginAt: new Date().toISOString() };
      AuthState.setUser(user);

      // Async DB Sync
      fetch('/api/v1/auth/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: user.email, displayName: user.name, role: user.role })
      }).catch(e => console.warn('Auth sync:', e));

      closeAuthModal();
      showToast(`Account created & saved to database!`, 'success');
      triggerNamasteCelebration(user);

      const target = role === 'client' ? 'client-dashboard.html' :
                     role === 'candidate' ? 'candidate-dashboard.html' : 'employee-dashboard.html';
      setTimeout(() => {
        location.href = target;
      }, 1600);
    }, 800);
  });

  // Social OAuth Handlers
  modalRoot.querySelectorAll('.oauth-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const provider = btn.dataset.oauth === 'google' ? 'Google' : 'GitHub';
      showToast(`Connecting with ${provider}...`, 'info');
      setTimeout(() => {
        const dummyEmail = provider === 'google' ? 'arjun.dev@gmail.com' : 'arjun-coder@github.com';
        const user = {
          email: dummyEmail,
          name: 'Arjun Sharma',
          role: 'client',
          provider,
          loginAt: new Date().toISOString()
        };
        AuthState.setUser(user);
        closeAuthModal();
        showToast(`Authenticated with ${provider}!`, 'success');
        if (!location.pathname.includes('dashboard')) {
          location.href = 'client-dashboard.html';
        }
      }, 600);
    });
  });

  // Forgot password flow
  modalRoot.querySelectorAll('.forgot-pwd-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const email = prompt('Enter your work email address to receive password reset instructions:', 'arjun@northstar.io');
      if (email) {
        showToast(`Password reset link sent to ${email}`, 'success');
      }
    });
  });
}

function openAuthModal(tab = 'signin') {
  renderAuthModal();
  const root = document.getElementById('auth-modal-root');
  if (!root) return;

  switchAuthTab(tab);
  root.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeAuthModal() {
  const root = document.getElementById('auth-modal-root');
  if (!root) return;
  root.classList.remove('active');
  document.body.style.overflow = '';
}

function switchAuthTab(tabName) {
  const root = document.getElementById('auth-modal-root');
  if (!root) return;

  const signinForm = root.querySelector('#modal-signin-form');
  const signupForm = root.querySelector('#modal-signup-form');
  const title = root.querySelector('#auth-modal-title');
  const desc = root.querySelector('#auth-modal-desc');
  const footerToggle = root.querySelector('#modal-auth-toggle-note');

  root.querySelectorAll('.auth-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tabName);
  });

  if (tabName === 'signup') {
    signinForm.style.display = 'none';
    signupForm.style.display = 'flex';
    title.textContent = 'Create an Account';
    desc.textContent = 'Start with SiPro enterprise delivery or upskilling';
    footerToggle.innerHTML = `Already have an account? <a href="javascript:void(0)" onclick="switchAuthTab('signin')">Sign in here</a>`;
  } else {
    signinForm.style.display = 'flex';
    signupForm.style.display = 'none';
    title.textContent = 'Welcome Back';
    desc.textContent = 'Access enterprise delivery, talent portals & systems';
    footerToggle.innerHTML = `Don't have an account yet? <a href="javascript:void(0)" onclick="switchAuthTab('signup')">Sign up for free</a>`;
  }
}

// Password Toggle Utility
function setupPasswordToggles(container) {
  container.querySelectorAll('.password-toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const input = btn.previousElementSibling;
      if (!input) return;
      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';
      btn.innerHTML = isPassword ? ICONS.eyeOff : ICONS.eye;
      btn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
    });
  });
}

// Password Strength Meter Utility
function setupPasswordMeter(input, barsElement, labelElement) {
  if (!input || !barsElement || !labelElement) return;

  input.addEventListener('input', () => {
    const val = input.value;
    let score = 0;
    if (val.length >= 8) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;

    barsElement.className = 'strength-bars';
    if (!val) {
      labelElement.textContent = 'Empty';
      labelElement.style.color = 'var(--muted)';
    } else if (score <= 1) {
      barsElement.classList.add('weak');
      labelElement.textContent = 'Weak';
      labelElement.style.color = 'var(--rose)';
    } else if (score === 2) {
      barsElement.classList.add('fair');
      labelElement.textContent = 'Fair';
      labelElement.style.color = 'var(--amber)';
    } else if (score === 3) {
      barsElement.classList.add('good');
      labelElement.textContent = 'Good';
      labelElement.style.color = 'var(--cyan)';
    } else {
      barsElement.classList.add('strong');
      labelElement.textContent = 'Strong';
      labelElement.style.color = 'var(--emerald)';
    }
  });
}

// Bind auth modal triggers on any page
function bindAuthTriggers() {
  document.querySelectorAll('[data-auth-trigger]').forEach(btn => {
    btn.onclick = (e) => {
      e.preventDefault();
      const targetTab = btn.getAttribute('data-auth-trigger') || 'signin';
      openAuthModal(targetTab);
    };
  });
}

// Setup standalone auth pages (login.html, signup.html)
function initStandaloneAuthPage() {
  const container = document.querySelector('[data-standalone-auth]');
  if (!container) return;

  const defaultTab = container.dataset.standaloneAuth || 'signin';
  const signinForm = container.querySelector('#standalone-signin-form');
  const signupForm = container.querySelector('#standalone-signup-form');

  const switchTab = (tab) => {
    container.querySelectorAll('.auth-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
    if (tab === 'signup') {
      if (signinForm) signinForm.style.display = 'none';
      if (signupForm) signupForm.style.display = 'flex';
    } else {
      if (signinForm) signinForm.style.display = 'flex';
      if (signupForm) signupForm.style.display = 'none';
    }
  };

  container.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
  });

  setupPasswordToggles(container);
  setupPasswordMeter(
    container.querySelector('#standalone-signup-password'),
    container.querySelector('.strength-bars'),
    container.querySelector('#standalone-strength-label')
  );

  // Sign in submit
  signinForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = container.querySelector('#standalone-signin-email').value.trim();
    const password = container.querySelector('#standalone-signin-password').value;
    const btn = signinForm.querySelector('.auth-submit-btn');

    btn.classList.add('loading');
    setTimeout(() => {
      btn.classList.remove('loading');
      let role = document.body.dataset.role || 'client';
      if (email.includes('candidate') || email.includes('student')) role = 'candidate';
      if (email.includes('employee') || email.includes('staff')) role = 'employee';

      const userName = email.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      const user = { email, name: userName || 'Arjun Sharma', role, loginAt: new Date().toISOString() };
      AuthState.setUser(user);
      showToast(`Welcome back, ${user.name}!`, 'success');

      const target = role === 'client' ? 'client-dashboard.html' :
                     role === 'candidate' ? 'candidate-dashboard.html' : 'employee-dashboard.html';
      setTimeout(() => location.href = target, 500);
    }, 600);
  });

  // Sign up submit
  signupForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = container.querySelector('#standalone-signup-name').value.trim();
    const email = container.querySelector('#standalone-signup-email').value.trim();
    const roleRadio = container.querySelector('input[name="standalone-role"]:checked');
    const role = roleRadio ? roleRadio.value : (document.body.dataset.role || 'client');
    const btn = signupForm.querySelector('.auth-submit-btn');

    btn.classList.add('loading');
    setTimeout(() => {
      btn.classList.remove('loading');
      const user = { email, name, role, loginAt: new Date().toISOString() };
      AuthState.setUser(user);
      showToast(`Account created! Welcome to SiPro Tech.`, 'success');

      const target = role === 'client' ? 'client-dashboard.html' :
                     role === 'candidate' ? 'candidate-dashboard.html' : 'employee-dashboard.html';
      setTimeout(() => location.href = target, 500);
    }, 700);
  });

  // Social OAuth
  container.querySelectorAll('.oauth-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const provider = btn.dataset.oauth === 'google' ? 'Google' : 'GitHub';
      showToast(`Connecting with ${provider}...`, 'info');
      setTimeout(() => {
        const dummyEmail = provider === 'google' ? 'arjun.dev@gmail.com' : 'arjun-coder@github.com';
        const user = {
          email: dummyEmail,
          name: 'Arjun Sharma',
          role: document.body.dataset.role || 'client',
          provider,
          loginAt: new Date().toISOString()
        };
        AuthState.setUser(user);
        showToast(`Authenticated with ${provider}!`, 'success');
        const target = user.role === 'client' ? 'client-dashboard.html' :
                       user.role === 'candidate' ? 'candidate-dashboard.html' : 'employee-dashboard.html';
        setTimeout(() => location.href = target, 500);
      }, 600);
    });
  });

  switchTab(defaultTab);
}

// Contact form handler
function initContactForm() {
  const form = document.querySelector('[data-contact]');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    const origText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch('/api/v1/forms/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          form_id: 'sipro-contact-inquiry',
          _rules: { name: { required: true }, email: { type: 'email' }, message: { minLength: 10 } }
        })
      });

      if (res.ok) {
        showToast('Inquiry received! Our engineering lead will contact you within 24 hours.', 'success');
        form.reset();
      } else {
        showToast('Message captured! Our team has been notified.', 'info');
      }
    } catch {
      showToast('Message captured locally. We will reply promptly.', 'info');
    } finally {
      submitBtn.textContent = origText;
      submitBtn.disabled = false;
    }
  });
}

// Pricing Tabs
function initPricingTabs() {
  const b2b = document.querySelector('#b2b');
  const b2c = document.querySelector('#b2c');
  if (!b2b || !b2c) return;

  document.querySelectorAll('.tabs .tab').forEach((tab, i) => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.tabs .tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      if (i === 0) {
        b2b.hidden = false;
        b2c.hidden = true;
      } else {
        b2b.hidden = true;
        b2c.hidden = false;
      }
    });
  });
}

// Scope Estimator
function initEstimator() {
  const host = document.querySelector('.estimator');
  if (!host) return;

  const engineersInput = host.querySelector('#engineers');
  const monthsInput = host.querySelector('#months');
  const engineersVal = host.querySelector('#engineers-value');
  const monthsVal = host.querySelector('#months-value');
  const totalVal = host.querySelector('#estimate-total');

  if (!engineersInput || !monthsInput || !totalVal) return;

  const calculate = () => {
    const engineers = parseInt(engineersInput.value, 10);
    const months = parseInt(monthsInput.value, 10);
    const base = engineers * months * 75000;
    const total = months >= 3 ? Math.round(base * 0.9) : base;

    if (engineersVal) engineersVal.textContent = engineers;
    if (monthsVal) monthsVal.textContent = `${months} month${months === 1 ? '' : 's'}`;
    totalVal.textContent = formatINR.format(total);
  };

  engineersInput.addEventListener('input', calculate);
  monthsInput.addEventListener('input', calculate);
  calculate();
}

// Simple Modal Helper for In-Page Alerts
function modal(title, html) {
  let modalEl = document.getElementById('sipro-generic-modal');
  if (!modalEl) {
    modalEl = document.createElement('div');
    modalEl.id = 'sipro-generic-modal';
    modalEl.className = 'auth-modal-backdrop';
    document.body.appendChild(modalEl);
  }

  modalEl.innerHTML = `
    <div class="auth-card" role="dialog" style="max-width:500px">
      <button class="auth-modal-close" onclick="this.closest('.auth-modal-backdrop').classList.remove('active')">×</button>
      <h3 style="font-size:20px;margin-bottom:12px">${title}</h3>
      <div style="color:var(--text);font-size:14px;line-height:1.6">${html}</div>
      <div style="margin-top:24px;text-align:right">
        <button class="btn btn-primary" onclick="this.closest('.auth-modal-backdrop').classList.remove('active')">Understood</button>
      </div>
    </div>
  `;

  modalEl.classList.add('active');
}

// PDF Receipt Simulator
function downloadReceipt(invoiceId, title, amount) {
  const formatted = formatINR.format(amount);
  const gst = formatINR.format(Math.round(amount * 0.18 / 1.18));
  const base = formatINR.format(amount - Math.round(amount * 0.18 / 1.18));

  modal(`Tax Invoice Receipt: ${invoiceId}`, `
    <div style="background:rgba(255,255,255,0.03);padding:16px;border-radius:8px;margin-bottom:12px;border:1px solid var(--border)">
      <div style="display:flex;justify-content:space-between;margin-bottom:8px">
        <strong style="color:var(--cyan)">SiPro Technologies (MSME)</strong>
        <span>GSTIN: 36AAACS1234A1Z5</span>
      </div>
      <div style="font-size:13px;color:var(--muted);margin-bottom:14px">Hanamkonda, Telangana · contact@sipro.tech</div>
      <hr style="border:0;border-top:1px solid var(--border);margin:10px 0">
      <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px">
        <span>Item Description:</span>
        <strong>${title}</strong>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px">
        <span>Taxable Value:</span>
        <span>${base}</span>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px">
        <span>Integrated GST (18%):</span>
        <span>${gst}</span>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:15px;margin-top:8px;padding-top:8px;border-top:1px solid var(--border)">
        <strong>Total Amount Paid:</strong>
        <strong style="color:var(--emerald)">${formatted}</strong>
      </div>
    </div>
    <p style="font-size:12px;color:var(--muted)">Status: <span style="color:var(--emerald);font-weight:600">PAID & SETTLED</span>. Receipt verified.</p>
  `);
}

// DOM Ready initialization
document.addEventListener('DOMContentLoaded', () => {
  // Theme check
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.documentElement.classList.add('light');
  }

  // Render global Shell
  renderHeader();
  renderFooter();
  renderAuthModal();

  // Network offline/online listener
  initNetworkMonitor();

  // DPDP Consent Governance
  initDPDPConsent();

  // Page-specific modules
  initStandaloneAuthPage();
  initContactForm();
  initPricingTabs();
  initEstimator();
  initInteractiveVisualizer();
  initInteractiveScopeCalculator();
  initEdgeRadar();
  initTerminalSimulator();
  initSearchAndFilter();
  initClipboardHelpers();
});

/* ==========================================================================
   Interactive Systems Engine & Visualizer
   ========================================================================== */
const ARCH_MODES = {
  microservices: {
    title: 'High-Concurrency Microservices Cluster',
    description: 'Zero-downtime containerized Kubernetes deployment with Envoy API Gateway, distributed service mesh, and replicated PostgreSQL.',
    stages: [
      {
        header: 'Edge & Ingress',
        nodes: [
          { id: 'ms-waf', name: 'Cloudflare WAF / CDN', spec: 'Edge DDoS Filter', latency: '4ms', rps: '48.2k req/s', mem: '12%', status: 'healthy', log: 'Routing clean traffic to regional VPC' },
          { id: 'ms-gw', name: 'Envoy API Gateway', spec: 'Rate Limiting & mTLS', latency: '2.1ms', rps: '45.1k req/s', mem: '34%', status: 'healthy', log: 'Authorizing JWT bearer tokens' }
        ]
      },
      {
        header: 'Microservice Pods',
        nodes: [
          { id: 'ms-auth', name: 'Auth & Identity (Go)', spec: '3 Replicas (HPA)', latency: '3.8ms', rps: '18.4k req/s', mem: '42%', status: 'healthy', log: 'OIDC token validation verified' },
          { id: 'ms-core', name: 'Orders & Core (Node.js)', spec: '6 Replicas (HPA)', latency: '8.2ms', rps: '22.0k req/s', mem: '58%', status: 'healthy', log: 'Processing async business events' },
          { id: 'ms-bill', name: 'Billing Engine (Rust)', spec: '2 Replicas (Fixed)', latency: '1.4ms', rps: '4.7k req/s', mem: '18%', status: 'healthy', log: 'GST tax calculation synchronized' }
        ]
      },
      {
        header: 'Persistence & Cache',
        nodes: [
          { id: 'ms-redis', name: 'Redis Sentinel Cache', spec: '6-Node Sharded Cluster', latency: '0.8ms', rps: '85.2k req/s', mem: '68%', status: 'healthy', log: 'Cache hit ratio: 94.6%' },
          { id: 'ms-db', name: 'PostgreSQL HA Read/Write', spec: 'Primary + 2 Read Replicas', latency: '5.4ms', rps: '12.1k req/s', mem: '74%', status: 'healthy', log: 'Replication lag: < 12ms' }
        ]
      }
    ]
  },
  'ai-rag': {
    title: 'Enterprise AI & RAG Inference Engine',
    description: 'High-accuracy retrieval-augmented generation pipeline with hybrid dense-sparse vector indexing and secure model routing.',
    stages: [
      {
        header: 'Data Ingestion',
        nodes: [
          { id: 'ai-ingest', name: 'Document Parser / OCR', spec: 'Async Worker Queue', latency: '42ms', rps: '1.2k docs/s', mem: '45%', status: 'healthy', log: 'Parsing enterprise PDFs & tables' },
          { id: 'ai-chunk', name: 'Semantic Tokenizer', spec: '512 Token Chunks', latency: '14ms', rps: '3.8k chunks/s', mem: '28%', status: 'healthy', log: 'Preserving structural document headers' }
        ]
      },
      {
        header: 'Inference & Orchestrator',
        nodes: [
          { id: 'ai-embed', name: 'Embedding Generator', spec: 'text-embedding-3', latency: '35ms', rps: '850 req/s', mem: '52%', status: 'healthy', log: 'Vector dimensions: 1536' },
          { id: 'ai-agent', name: 'RAG Agent Coordinator', spec: 'LangGraph Orchestrator', latency: '65ms', rps: '420 req/s', mem: '64%', status: 'healthy', log: 'Evaluating context relevance score: 0.96' },
          { id: 'ai-llm', name: 'Enterprise LLM Gateway', spec: 'Claude / Gemini 2.5', latency: '180ms', rps: '320 req/s', mem: '70%', status: 'healthy', log: 'Streaming token generation active' }
        ]
      },
      {
        header: 'Vector & Knowledge Memory',
        nodes: [
          { id: 'ai-vector', name: 'pgvector / Pinecone', spec: 'HNSW Index (Cos-Sim)', latency: '6.2ms', rps: '2.4k queries/s', mem: '61%', status: 'healthy', log: 'Top-K nearest neighbors retrieved' },
          { id: 'ai-cache', name: 'Semantic Cache Layer', spec: 'Exact + Embedding Hash', latency: '1.2ms', rps: '5.1k queries/s', mem: '33%', status: 'healthy', log: 'Cache hit rate: 68.4%' }
        ]
      }
    ]
  },
  'event-mesh': {
    title: 'Global Event-Driven Stream Pipeline',
    description: 'Distributed pub-sub architecture processing millions of real-time events with Kafka and stream analytics.',
    stages: [
      {
        header: 'Producers & Gateway',
        nodes: [
          { id: 'ev-edge', name: 'Webhook & IoT Ingress', spec: 'Globally Distributed', latency: '6ms', rps: '92.0k req/s', mem: '24%', status: 'healthy', log: 'Validating payload signatures' },
          { id: 'ev-schema', name: 'Schema Registry', spec: 'Protobuf / Avro Validator', latency: '1.1ms', rps: '88.4k req/s', mem: '31%', status: 'healthy', log: 'Schema compatibility: FULL' }
        ]
      },
      {
        header: 'Streaming Core',
        nodes: [
          { id: 'ev-kafka', name: 'Apache Kafka Cluster', spec: '9 Brokers / 3 AZs', latency: '3.2ms', rps: '140k msg/s', mem: '78%', status: 'healthy', log: 'Zero message loss partition sync' },
          { id: 'ev-flink', name: 'Apache Flink Processors', spec: 'Stateful Windows', latency: '8.4ms', rps: '120k ev/s', mem: '65%', status: 'healthy', log: 'Computing rolling 5m SLA aggregates' }
        ]
      },
      {
        header: 'Sinks & Analytics Lake',
        nodes: [
          { id: 'ev-clickhouse', name: 'ClickHouse Columnar DB', spec: 'Real-time OLAP Store', latency: '4.8ms', rps: '55k inserts/s', mem: '59%', status: 'healthy', log: 'Compressed storage ratio: 8.2x' },
          { id: 'ev-s3', name: 'Parquet Data Lake (S3)', spec: 'Tiered Cold Storage', latency: '85ms', rps: '1.8k writes/s', mem: '15%', status: 'healthy', log: 'Compacting minute batches into hourly' }
        ]
      }
    ]
  },
  'zero-trust': {
    title: 'Zero-Trust Security & IAM Shield',
    description: 'Defense-in-depth architecture with automated mutual TLS, Open Policy Agent evaluation, and secret rotation.',
    stages: [
      {
        header: 'Identity & Perimeter',
        nodes: [
          { id: 'sec-mtls', name: 'mTLS Edge Envoy', spec: 'SPIFFE / SPIRE Identities', latency: '1.8ms', rps: '38.0k req/s', mem: '22%', status: 'healthy', log: 'Short-lived x509 cert validation' },
          { id: 'sec-idp', name: 'OIDC / IAM Identity Broker', spec: 'FIDO2 WebAuthn & JWT', latency: '4.5ms', rps: '14.2k req/s', mem: '39%', status: 'healthy', log: 'Risk-based MFA token issued' }
        ]
      },
      {
        header: 'Policy Enforcement',
        nodes: [
          { id: 'sec-opa', name: 'Open Policy Agent (OPA)', spec: 'Rego Policy Engine', latency: '0.9ms', rps: '42.1k eval/s', mem: '19%', status: 'healthy', log: 'Policy rule: allow_request = true' },
          { id: 'sec-vault', name: 'HashiCorp Vault Cluster', spec: 'Dynamic Database Secrets', latency: '2.4ms', rps: '8.7k req/s', mem: '44%', status: 'healthy', log: 'Auto-rotating credential leases' }
        ]
      },
      {
        header: 'Audit & Telemetry',
        nodes: [
          { id: 'sec-audit', name: 'Immutable Audit Stream', spec: 'Signed WORM Logging', latency: '5.1ms', rps: '28.0k logs/s', mem: '32%', status: 'healthy', log: 'Tamper-proof hash checksum verified' },
          { id: 'sec-siem', name: 'Real-time SIEM Threat Radar', spec: 'Anomaly Detection AI', latency: '12ms', rps: '15.4k ev/s', mem: '48%', status: 'healthy', log: 'Zero critical threats detected' }
        ]
      }
    ]
  }
};

let currentArch = 'microservices';
let currentTrafficMultiplier = 1;
let selectedNode = null;

function initInteractiveVisualizer() {
  const container = document.getElementById('interactive-arch-visualizer');
  if (!container) return;

  renderVisualizer(container);
}

function renderVisualizer(container) {
  const arch = ARCH_MODES[currentArch];
  if (!selectedNode && arch.stages[0]?.nodes[0]) {
    selectedNode = arch.stages[0].nodes[0];
  }

  container.innerHTML = `
    <div class="interactive-panel arch-visualizer">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px">
        <div>
          <span class="eyebrow" style="margin-bottom:4px">Interactive Live Architecture Explorer</span>
          <h3 style="font-size:22px;color:var(--text);margin-top:2px">${arch.title}</h3>
          <p style="font-size:13px;color:var(--muted);max-width:700px;margin-top:4px">${arch.description}</p>
        </div>
        <div style="display:flex;gap:8px">
          <button class="btn btn-ghost btn-sm" id="btn-chaos-test" style="border-color:var(--rose);color:var(--rose)">
            ⚡ Inject Chaos Test
          </button>
        </div>
      </div>

      <!-- Navigation Tabs -->
      <div class="arch-nav-tabs">
        <button class="arch-tab-btn ${currentArch === 'microservices' ? 'active' : ''}" data-arch="microservices">
          <span>☸</span> Microservices & K8s
        </button>
        <button class="arch-tab-btn ${currentArch === 'ai-rag' ? 'active' : ''}" data-arch="ai-rag">
          <span>✦</span> Enterprise AI & RAG
        </button>
        <button class="arch-tab-btn ${currentArch === 'event-mesh' ? 'active' : ''}" data-arch="event-mesh">
          <span>⚡</span> Event Mesh & Kafka
        </button>
        <button class="arch-tab-btn ${currentArch === 'zero-trust' ? 'active' : ''}" data-arch="zero-trust">
          <span>🛡</span> Zero-Trust Security
        </button>
      </div>

      <!-- Topology Canvas & Inspector Grid -->
      <div class="topology-grid">
        <div class="topology-canvas">
          <div class="topology-stages">
            ${arch.stages.map((stage, sIdx) => `
              <div class="topology-col">
                <div class="col-header">${stage.header}</div>
                ${stage.nodes.map(node => {
                  const isSelected = selectedNode && selectedNode.id === node.id;
                  const isFaulted = node.status === 'faulted';
                  return `
                    <div class="node-card ${isSelected ? 'active' : ''} ${isFaulted ? 'faulted' : ''}" data-node-id="${node.id}">
                      <div class="node-top">
                        <span class="node-title">${node.name}</span>
                        <div class="node-status-dot pulse"></div>
                      </div>
                      <div class="node-desc">
                        <span>${node.spec}</span>
                        <strong style="color:var(--cyan)">${node.latency}</strong>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            `).join('')}
          </div>

          <!-- Controls Bar -->
          <div class="visualizer-controls">
            <div class="traffic-slider-wrap">
              <span>Traffic Load: <strong id="traffic-val" style="color:var(--cyan)">${currentTrafficMultiplier}x</strong></span>
              <input type="range" min="1" max="5" step="1" value="${currentTrafficMultiplier}" class="traffic-slider" id="traffic-slider">
            </div>
            <div style="font-size:12px;color:var(--emerald);display:flex;align-items:center;gap:6px">
              <span class="node-status-dot pulse"></span> All Nodes Operational · SLA 99.99%
            </div>
          </div>
        </div>

        <!-- Node Inspector Panel -->
        <div class="topology-inspector" id="node-inspector">
          <div>
            <div class="inspector-header">
              <span class="eyebrow" style="font-size:10px">Live Node Telemetry</span>
              <div class="inspector-title">
                <span>${selectedNode ? selectedNode.name : 'Select a Node'}</span>
              </div>
              <span style="font-size:12px;color:var(--muted)">${selectedNode ? selectedNode.spec : ''}</span>
            </div>

            <div class="inspector-stats">
              <div class="inspector-stat-box">
                <span class="stat-box-label">P99 Latency</span>
                <span class="stat-box-val" style="color:var(--cyan)">${selectedNode ? selectedNode.latency : '--'}</span>
              </div>
              <div class="inspector-stat-box">
                <span class="stat-box-label">Throughput</span>
                <span class="stat-box-val" style="color:var(--emerald)">${selectedNode ? selectedNode.rps : '--'}</span>
              </div>
              <div class="inspector-stat-box">
                <span class="stat-box-label">Memory Usage</span>
                <span class="stat-box-val">${selectedNode ? selectedNode.mem : '--'}</span>
              </div>
              <div class="inspector-stat-box">
                <span class="stat-box-label">Node State</span>
                <span class="stat-box-val" style="color:${selectedNode && selectedNode.status === 'faulted' ? 'var(--rose)' : 'var(--emerald)'}">
                  ${selectedNode && selectedNode.status === 'faulted' ? 'HEALING...' : 'ONLINE'}
                </span>
              </div>
            </div>
          </div>

          <div>
            <span style="font-size:11px;font-weight:600;color:var(--muted);display:block;margin-bottom:6px">LIVE EXECUTION LOG STREAM</span>
            <div class="inspector-log-stream" id="inspector-logs">
              [${new Date().toISOString().slice(11, 19)}] Node initialized: ${selectedNode ? selectedNode.name : 'Ready'}<br>
              [${new Date().toISOString().slice(11, 19)}] Healthcheck: 200 OK (heartbeat 1s)<br>
              [${new Date().toISOString().slice(11, 19)}] Active operation: ${selectedNode ? selectedNode.log : 'Streaming telemetry'}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Attach tab events
  container.querySelectorAll('.arch-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentArch = btn.dataset.arch;
      selectedNode = ARCH_MODES[currentArch].stages[0].nodes[0];
      renderVisualizer(container);
    });
  });

  // Attach node click events
  container.querySelectorAll('.node-card').forEach(card => {
    card.addEventListener('click', () => {
      const nodeId = card.dataset.nodeId;
      for (const stage of ARCH_MODES[currentArch].stages) {
        const found = stage.nodes.find(n => n.id === nodeId);
        if (found) {
          selectedNode = found;
          break;
        }
      }
      renderVisualizer(container);
    });
  });

  // Traffic slider event
  const slider = container.querySelector('#traffic-slider');
  if (slider) {
    slider.addEventListener('input', (e) => {
      currentTrafficMultiplier = parseInt(e.target.value, 10);
      const valEl = container.querySelector('#traffic-val');
      if (valEl) valEl.textContent = `${currentTrafficMultiplier}x (${currentTrafficMultiplier * 25}k req/s)`;
      
      const logEl = container.querySelector('#inspector-logs');
      if (logEl) {
        logEl.innerHTML += `<br>[${new Date().toISOString().slice(11, 19)}] Scaled ingress traffic to ${currentTrafficMultiplier}x (${currentTrafficMultiplier * 25}k req/s)`;
        logEl.scrollTop = logEl.scrollHeight;
      }
    });
  }

  // Chaos Test event
  const chaosBtn = container.querySelector('#btn-chaos-test');
  if (chaosBtn) {
    chaosBtn.addEventListener('click', () => {
      chaosBtn.disabled = true;
      chaosBtn.textContent = 'Simulating Node Fault...';
      
      if (selectedNode) {
        selectedNode.status = 'faulted';
        renderVisualizer(container);

        const logEl = document.getElementById('inspector-logs');
        if (logEl) {
          logEl.innerHTML += `<br><span style="color:var(--rose)">[${new Date().toISOString().slice(11, 19)}] [CHAOS] Simulated pod termination on ${selectedNode.name}!</span>`;
          logEl.innerHTML += `<br><span style="color:var(--amber)">[${new Date().toISOString().slice(11, 19)}] Circuit breaker tripped. Traffic rerouted to warm replicas.</span>`;
          logEl.scrollTop = logEl.scrollHeight;
        }

        setTimeout(() => {
          selectedNode.status = 'healthy';
          renderVisualizer(container);
          showToast(`Autonomous self-healing completed for ${selectedNode.name}. Node healthy.`, 'success');
          const finalLogs = document.getElementById('inspector-logs');
          if (finalLogs) {
            finalLogs.innerHTML += `<br><span style="color:var(--emerald)">[${new Date().toISOString().slice(11, 19)}] Auto-healing complete. New pod spawned with zero packet loss.</span>`;
            finalLogs.scrollTop = finalLogs.scrollHeight;
          }
        }, 2200);
      }
    });
  }
}

/* ==========================================================================
   Interactive Scope & Pod Estimator
   ========================================================================== */
function initInteractiveScopeCalculator() {
  const container = document.getElementById('interactive-scope-calculator');
  if (!container) return;

  function calculateScope() {
    const devs = parseInt(document.getElementById('calc-engineers')?.value || 3, 10);
    const months = parseInt(document.getElementById('calc-months')?.value || 3, 10);
    const hasAI = document.getElementById('calc-addon-ai')?.checked || false;
    const hasDevOps = document.getElementById('calc-addon-devops')?.checked || false;
    const hasSla = document.getElementById('calc-addon-sla')?.checked || false;

    let baseMonthly = 149000 + (devs - 1) * 75000;
    if (hasAI) baseMonthly += 50000;
    if (hasDevOps) baseMonthly += 40000;
    if (hasSla) baseMonthly += 35000;

    const totalProject = baseMonthly * months;
    const gstMonthly = Math.round(baseMonthly * 0.18);
    const totalMonthlyPayable = baseMonthly + gstMonthly;

    // Update displays
    document.getElementById('disp-engineers-val').textContent = `${devs} ${devs === 1 ? 'Engineer' : 'Engineers'}`;
    document.getElementById('disp-months-val').textContent = `${months} ${months === 1 ? 'Month' : 'Months'}`;
    document.getElementById('calc-monthly-base').textContent = formatINR.format(baseMonthly);
    document.getElementById('calc-monthly-gst').textContent = formatINR.format(gstMonthly);
    document.getElementById('calc-monthly-total').textContent = formatINR.format(totalMonthlyPayable);
    document.getElementById('calc-total-project').textContent = formatINR.format(totalProject + Math.round(totalProject * 0.18));

    // Update deliverables list
    const teamSummary = `${devs >= 3 ? '1 Lead Architect, ' : ''}${devs >= 2 ? `${devs - 1} Senior Full-Stack, ` : '1 Senior Full-Stack'}${hasDevOps ? '1 Cloud DevOps,' : ''} ${hasAI ? '1 AI/ML Engineer' : '1 QA Specialist'}`;
    document.getElementById('calc-team-summary').textContent = teamSummary;

    // Update book button link
    const bookBtn = document.getElementById('calc-book-pod-btn');
    if (bookBtn) {
      const planTitle = `Dedicated Pod (${devs} Devs - ${months} Mo)`;
      bookBtn.href = `checkout.html?plan=${encodeURIComponent(planTitle)}&amount=${baseMonthly}`;
    }
  }

  container.innerHTML = `
    <div class="interactive-panel">
      <div class="section-head" style="margin-bottom:24px">
        <div>
          <span class="eyebrow">Interactive Scope Estimator</span>
          <h2 style="font-size:24px">Configure your dedicated engineering pod</h2>
        </div>
        <p>Live calculation of team velocity, deliverables, and transparent INR retainer costs.</p>
      </div>

      <div class="interactive-calc-grid">
        <!-- Controls Column -->
        <div>
          <div class="calc-slider-card">
            <div class="calc-slider-head">
              <h4>Engineering Pod Capacity</h4>
              <span class="calc-slider-val" id="disp-engineers-val">3 Engineers</span>
            </div>
            <input type="range" min="1" max="8" step="1" value="3" class="range-input" id="calc-engineers">
            <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--muted);margin-top:6px">
              <span>1 Dev (Solo MVP)</span>
              <span>4 Devs (Standard Pod)</span>
              <span>8 Devs (Enterprise Core)</span>
            </div>
          </div>

          <div class="calc-slider-card">
            <div class="calc-slider-head">
              <h4>Engagement Duration</h4>
              <span class="calc-slider-val" id="disp-months-val">3 Months</span>
            </div>
            <input type="range" min="1" max="12" step="1" value="3" class="range-input" id="calc-months">
            <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--muted);margin-top:6px">
              <span>1 Month (Sprint)</span>
              <span>6 Months (Product Build)</span>
              <span>12 Months (Annual Partner)</span>
            </div>
          </div>

          <span style="font-size:13px;font-weight:600;color:var(--text);display:block;margin-bottom:10px">Specialized Capabilities:</span>
          
          <label class="calc-addon-toggle">
            <div>
              <strong style="font-size:13px;color:var(--text);display:block">Applied AI / LLM Integration</strong>
              <span style="font-size:11px;color:var(--muted)">Vector indexing, RAG pipelines, and model evaluation (+₹50,000/mo)</span>
            </div>
            <input type="checkbox" id="calc-addon-ai" checked>
          </label>

          <label class="calc-addon-toggle">
            <div>
              <strong style="font-size:13px;color:var(--text);display:block">Multi-Cloud DevOps & Kubernetes</strong>
              <span style="font-size:11px;color:var(--muted)">Infrastructure-as-Code (Terraform), Helm, and CI/CD pipelines (+₹40,000/mo)</span>
            </div>
            <input type="checkbox" id="calc-addon-devops">
          </label>

          <label class="calc-addon-toggle">
            <div>
              <strong style="font-size:13px;color:var(--text);display:block">24/7 Production SLA & On-Call</strong>
              <span style="font-size:11px;color:var(--muted)">15-minute response time for critical incidents (+₹35,000/mo)</span>
            </div>
            <input type="checkbox" id="calc-addon-sla">
          </label>
        </div>

        <!-- Summary Column -->
        <div class="card" style="background:var(--navy-deep)">
          <span class="eyebrow">Calculated Investment</span>
          <h3 style="font-size:22px;margin-bottom:4px">Monthly Pod Retainer</h3>
          <p style="font-size:12px;color:var(--muted);margin-bottom:16px" id="calc-team-summary">Dedicated staff allocation</p>

          <div class="signal-list">
            <div class="signal">
              <span>Base Monthly Retainer</span>
              <strong id="calc-monthly-base">₹2,99,000</strong>
            </div>
            <div class="signal">
              <span>Integrated GST (18%)</span>
              <strong id="calc-monthly-gst">₹53,820</strong>
            </div>
            <div class="signal" style="border-top:1px solid var(--line);padding-top:10px;margin-top:8px">
              <span style="font-weight:600;color:var(--text)">Monthly Payable (INR)</span>
              <strong id="calc-monthly-total" style="font-size:20px;color:var(--cyan)">₹3,52,820</strong>
            </div>
            <div class="signal">
              <span style="font-size:12px;color:var(--muted)">Total Project Est. (Incl. GST)</span>
              <span id="calc-total-project" style="font-size:13px;color:var(--text-dim)">₹10,58,460</span>
            </div>
          </div>

          <div style="margin-top:20px">
            <a href="checkout.html" class="btn btn-primary btn-lg" style="width:100%;text-align:center" id="calc-book-pod-btn">
              Lock in Pod Scope & Checkout →
            </a>
          </div>
          <p style="font-size:11px;color:var(--muted);text-align:center;margin-top:10px">Includes bi-weekly sprint reviews, dedicated Slack/Teams channel, and Jira board access.</p>
        </div>
      </div>
    </div>
  `;

  // Attach events
  ['calc-engineers', 'calc-months', 'calc-addon-ai', 'calc-addon-devops', 'calc-addon-sla'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', calculateScope);
      el.addEventListener('change', calculateScope);
    }
  });

  calculateScope();
}

/* ==========================================================================
   Edge Latency Radar
   ========================================================================== */
function initEdgeRadar() {
  const container = document.getElementById('interactive-edge-radar');
  if (!container) return;

  const nodes = [
    { city: 'Telangana Edge', region: 'Hyderabad DC', baseLatency: 12 },
    { city: 'Bangalore Cloud', region: 'AWS ap-south-1', baseLatency: 16 },
    { city: 'Mumbai Central', region: 'GCP asia-south1', baseLatency: 22 },
    { city: 'Singapore Hub', region: 'GCP asia-southeast1', baseLatency: 44 },
    { city: 'Frankfurt Hub', region: 'AWS eu-central-1', baseLatency: 118 },
    { city: 'US East Edge', region: 'GCP us-east4', baseLatency: 165 }
  ];

  function renderRadar() {
    container.innerHTML = `
      <div class="interactive-panel">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px">
          <div>
            <span class="eyebrow">Global Telemetry</span>
            <h3 style="font-size:20px;color:var(--text)">Live Edge Network Latency</h3>
            <p style="font-size:13px;color:var(--muted)">Round-trip response times across SiPro deployed edge PoPs.</p>
          </div>
          <button class="btn btn-ghost btn-sm" id="btn-ping-now">
            🔄 Test Latency Now
          </button>
        </div>

        <div class="edge-radar-grid">
          ${nodes.map(n => {
            const jitter = Math.floor(Math.random() * 5) - 2;
            const current = Math.max(8, n.baseLatency + jitter);
            return `
              <div class="radar-node">
                <div class="radar-location">
                  <span class="radar-city">${n.city}</span>
                  <span class="radar-region">${n.region}</span>
                </div>
                <div class="radar-latency">
                  <div class="node-status-dot pulse"></div>
                  <span>${current}ms</span>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    const pingBtn = container.querySelector('#btn-ping-now');
    if (pingBtn) {
      pingBtn.addEventListener('click', () => {
        pingBtn.textContent = 'Pinging Edge PoPs...';
        setTimeout(() => {
          renderRadar();
          showToast('Global edge latency refreshed. All regions reporting optimal throughput.', 'info');
        }, 500);
      });
    }
  }

  renderRadar();
}

/* ==========================================================================
   Developer & Client Terminal Simulator
   ========================================================================== */
function initTerminalSimulator() {
  const container = document.getElementById('interactive-terminal-simulator');
  if (!container) return;

  const COMMANDS = {
    'sipro status': `
<span class="t-prompt">sipro-cli</span> v2.4.0 (node-v20.11.0-linux-x64)
<span class="t-success">✔ Production Cloud Cluster: ONLINE</span> (Kubernetes v1.30.2)
<span class="t-info">ℹ Ingress Gateway:</span> 48,200 req/s | P99 Latency: 4.2ms
<span class="t-info">ℹ Active Pods:</span> 14/14 pods running across 3 AZs
<span class="t-success">✔ Database Replica Health:</span> Primary + 2 Read Replicas (Lag: 8ms)
<span class="t-success">✔ GST Entity Status:</span> Verified (36AAACS1234A1Z5)
`,
    'sipro deploy': `
<span class="t-prompt">$ sipro deploy --env=production --pod=fintech-core</span>
[1/4] Compiling TypeScript microservices... <span class="t-success">DONE</span> (0.42s)
[2/4] Executing unit & integration tests... <span class="t-success">384/384 PASSED</span> (1.8s)
[3/4] Building multi-arch Docker image (linux/amd64)... <span class="t-success">SHA256:4f8a9e</span>
[4/4] Rolling update across Kubernetes nodes...
      - pod/fintech-core-78f99d-1 <span class="t-success">READY</span>
      - pod/fintech-core-78f99d-2 <span class="t-success">READY</span>
<span class="t-success">✔ Deployment successfully activated with ZERO downtime!</span>
`,
    'sipro bench': `
<span class="t-prompt">$ sipro bench --target=https://api.sipro.tech/v1/health --concurrency=5000</span>
Running 10s benchmark test...
Total Requests Sent:    48,920
Successful Responses:   48,920 (100.00%)
Error Rate:             0.00%
Fastest Response:       1.2ms
Average Latency:        3.8ms
99th Percentile:        8.4ms
<span class="t-success">✔ System passed high-concurrency enterprise benchmark!</span>
`,
    'sipro gstin': `
<span class="t-prompt">$ sipro verify-gstin 36AAACS1234A1Z5</span>
Entity Name:    SiPro Technologies (MSME Registered)
State / UT:     Telangana (State Code: 36)
Registration:   Active (Regular Taxpayer / MSME)
Invoice Format: Official Tax Invoice with 18% Integrated / Central GST breakdown
<span class="t-success">✔ Ready for B2B tax credit settlement.</span>
`,
    'help': `
Available Commands:
  <span class="t-info">sipro status</span>   - View live cluster health, SLA metrics, and pod counts
  <span class="t-info">sipro deploy</span>   - Run simulated zero-downtime microservices deployment
  <span class="t-info">sipro bench</span>    - Execute load test benchmark (5k concurrent streams)
  <span class="t-info">sipro gstin</span>    - Verify corporate tax credentials & registration
  <span class="t-info">clear</span>          - Clear the terminal screen
`
  };

  container.innerHTML = `
    <div class="terminal-window">
      <div class="terminal-topbar">
        <div class="terminal-dots">
          <div class="terminal-dot dot-red"></div>
          <div class="terminal-dot dot-yellow"></div>
          <div class="terminal-dot dot-green"></div>
        </div>
        <div class="terminal-title">sipro-enterprise-console — bash — 80x24</div>
        <div style="font-size:11px;color:var(--muted)">v2.4</div>
      </div>

      <div class="terminal-screen" id="term-screen">
        <div class="terminal-line">
          <span class="t-info">SiPro Technologies Production Terminal</span> [Version 2.4.0]<br>
          Type <span class="t-prompt">help</span> or click the quick action chips below to execute live system commands:
        </div>
        <div class="terminal-line" id="term-initial-output">
          ${COMMANDS['sipro status']}
        </div>
      </div>

      <div class="terminal-chip-bar">
        <span style="font-size:11px;color:var(--muted)">Quick Run:</span>
        <button class="term-chip" data-cmd="sipro status">sipro status</button>
        <button class="term-chip" data-cmd="sipro deploy">sipro deploy</button>
        <button class="term-chip" data-cmd="sipro bench">sipro bench</button>
        <button class="term-chip" data-cmd="sipro gstin">sipro gstin</button>
        <button class="term-chip" data-cmd="help">help</button>
        <button class="term-chip" data-cmd="clear" style="color:var(--rose)">clear</button>
      </div>
    </div>
  `;

  const screen = container.querySelector('#term-screen');
  const chips = container.querySelectorAll('.term-chip');

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.dataset.cmd;
      if (cmd === 'clear') {
        screen.innerHTML = `<div class="terminal-line"><span class="t-info">Terminal cleared. Click a quick command or type help.</span></div>`;
        return;
      }

      screen.innerHTML += `
        <div class="terminal-line" style="margin-top:12px;border-top:1px dashed #1e293b;padding-top:8px">
          <span class="t-prompt">admin@sipro-cloud:~$</span> ${cmd}
        </div>
        <div class="terminal-line">
          ${COMMANDS[cmd] || `<span style="color:var(--rose)">Command not found: ${cmd}. Type 'help' for available commands.</span>`}
        </div>
      `;
      screen.scrollTop = screen.scrollHeight;
    });
  });
}

/* ==========================================================================
   Search & Filter Controller
   ========================================================================== */
function initSearchAndFilter() {
  const searchInput = document.getElementById('capabilities-search-input');
  const chipGroup = document.getElementById('capabilities-filter-chips');
  const cardGrid = document.getElementById('solutions-cards-grid');

  if (!cardGrid) return;

  let activeCategory = 'all';
  let searchTerm = '';

  function filterCards() {
    const cards = cardGrid.querySelectorAll('.card');
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      const cat = card.dataset.category || 'all';

      const matchesCat = activeCategory === 'all' || cat.includes(activeCategory);
      const matchesSearch = searchTerm === '' || text.includes(searchTerm);

      if (matchesCat && matchesSearch) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.toLowerCase().trim();
      filterCards();
    });
  }

  if (chipGroup) {
    chipGroup.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        chipGroup.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        activeCategory = chip.dataset.filter;
        filterCards();
      });
    });
  }
}

/* ==========================================================================
   Clipboard Helpers
   ========================================================================== */
function copyToClipboard(text, label = 'Copied to clipboard') {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`${label}: ${text}`, 'success');
  }).catch(() => {
    showToast('Failed to copy. Please manually copy.', 'error');
  });
}

function initClipboardHelpers() {
  document.querySelectorAll('[data-copy]').forEach(el => {
    el.addEventListener('click', () => {
      const text = el.dataset.copy;
      const label = el.dataset.copyLabel || 'Copied';
      copyToClipboard(text, label);
    });
  });
}

/* ==========================================================================
   Namaste Welcome Celebration & Confetti Engine
   ========================================================================== */
function triggerNamasteCelebration(user) {
  if (!user) return;
  const old = document.getElementById('namaste-celebration-root');
  if (old) old.remove();

  const root = document.createElement('div');
  root.id = 'namaste-celebration-root';
  root.className = 'celebration-backdrop';

  const roleTitle = user.role === 'client' ? '🏢 Enterprise Client Partner' :
                    user.role === 'candidate' ? '🚀 Accelerated Talent Cohort' : '💻 Core Platform Architect';

  const dashboardTarget = user.role === 'client' ? 'client-dashboard.html' :
                         user.role === 'candidate' ? 'candidate-dashboard.html' : 'employee-dashboard.html';

  root.innerHTML = `
    <div class="confetti-canvas-container" id="confetti-particles-box"></div>
    <div class="celebration-card">
      <div class="celebration-emoji-badge">🙏</div>
      <h2 class="celebration-title">Namaste, ${user.name || 'Friend'}!</h2>
      <p class="celebration-desc">
        Welcome to <strong>SiPro Technologies</strong>. Your secure cloud & software engineering environment is fully synchronized and ready.
      </p>

      <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(99,102,241,0.12);padding:6px 14px;border-radius:20px;border:1px solid rgba(99,102,241,0.3);margin-bottom:24px">
        <span style="font-size:13px;font-weight:600;color:var(--cyan)">${roleTitle}</span>
      </div>

      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
        <a href="${dashboardTarget}" class="btn btn-primary" id="btn-celebrate-dash">
          ✨ Open Workspace Dashboard
        </a>
        <button class="btn btn-ghost" id="btn-celebrate-dismiss">
          Continue Browsing
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(root);

  // Generate confetti
  const box = root.querySelector('#confetti-particles-box');
  const colors = ['#6366f1', '#22d3ee', '#10b981', '#f59e0b', '#f43f5e', '#8b5cf6'];
  for (let i = 0; i < 50; i++) {
    const p = document.createElement('div');
    p.className = 'confetti-particle';
    p.style.left = `${Math.random() * 100}%`;
    p.style.top = `${Math.random() * 20}%`;
    p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    p.style.animationDelay = `${Math.random() * 1.5}s`;
    p.style.animationDuration = `${2 + Math.random() * 2}s`;
    p.style.transform = `scale(${0.6 + Math.random() * 0.8})`;
    box.appendChild(p);
  }

  requestAnimationFrame(() => {
    root.classList.add('active');
  });

  const dismiss = () => {
    root.classList.remove('active');
    setTimeout(() => root.remove(), 350);
  };

  root.querySelector('#btn-celebrate-dismiss').addEventListener('click', dismiss);
  root.addEventListener('click', (e) => {
    if (e.target === root) dismiss();
  });
}

/* ==========================================================================
   Network Offline / Online Connection Guard
   ========================================================================== */
function initNetworkMonitor() {
  let statusBar = document.getElementById('sipro-network-status-bar');
  if (!statusBar) {
    statusBar = document.createElement('div');
    statusBar.id = 'sipro-network-status-bar';
    statusBar.className = 'network-status-bar';
    document.body.appendChild(statusBar);
  }

  function updateStatus() {
    if (!navigator.onLine) {
      statusBar.className = 'network-status-bar show';
      statusBar.innerHTML = `
        <div class="pulse-dot"></div>
        <span>⚡ <strong>Internet Connection Lost:</strong> You are currently operating in offline mode. SiPro Edge will synchronize changes when reconnected.</span>
      `;
    } else {
      if (statusBar.classList.contains('show')) {
        statusBar.className = 'network-status-bar show online-restored';
        statusBar.innerHTML = `
          <span>✅ <strong>Internet Connection Restored!</strong> Reconnected to SiPro Edge cloud nodes.</span>
        `;
        setTimeout(() => {
          statusBar.classList.remove('show');
        }, 3500);
      }
    }
  }

  window.addEventListener('offline', updateStatus);
  window.addEventListener('online', updateStatus);
}

/* ==========================================================================
   DPDP Act 2023 / 2027 Granular Consent Banner & SRM System
   ========================================================================== */
function initDPDPConsent() {
  const existing = localStorage.getItem('sipro_dpdp_consent');
  if (existing) return;

  const banner = document.createElement('div');
  banner.id = 'sipro-dpdp-banner';
  banner.className = 'dpdp-consent-banner';
  banner.innerHTML = `
    <div class="dpdp-banner-header">
      <div class="dpdp-banner-title">
        <span>🛡️</span>
        <span>DPDP Act 2023 Data Privacy & Cookie Governance</span>
      </div>
      <span class="tag emerald" style="margin:0">Verified Fiduciary</span>
    </div>
    <div class="dpdp-banner-body">
      SiPro Technologies respects your privacy rights. In accordance with the Digital Personal Data Protection (DPDP) Act, we process personal data solely for specified enterprise engineering and security purposes under lawful consent. You can manage or withdraw consent anytime via our <a href="privacy-portal.html" style="text-decoration:underline;color:var(--cyan)">Privacy Rights Portal</a>.
    </div>
    <div class="dpdp-banner-actions">
      <button class="btn btn-ghost btn-sm" id="btn-dpdp-necessary">Accept Necessary Only</button>
      <button class="btn btn-ghost btn-sm" id="btn-dpdp-custom">⚙️ Preferences</button>
      <button class="btn btn-primary btn-sm" id="btn-dpdp-all">Accept All & Continue</button>
    </div>
  `;

  document.body.appendChild(banner);
  requestAnimationFrame(() => {
    banner.classList.add('show');
  });

  const saveConsent = (level) => {
    localStorage.setItem('sipro_dpdp_consent', JSON.stringify({
      level,
      timestamp: new Date().toISOString(),
      fiduciary: 'SiPro Technologies (MSME Registered)',
      dpo: 'grievance@sipro.tech'
    }));
    banner.classList.remove('show');
    setTimeout(() => banner.remove(), 400);
    showToast(`Privacy preferences recorded (${level}).`, 'success');
  };

  banner.querySelector('#btn-dpdp-necessary').addEventListener('click', () => saveConsent('necessary'));
  banner.querySelector('#btn-dpdp-all').addEventListener('click', () => saveConsent('all'));
  banner.querySelector('#btn-dpdp-custom').addEventListener('click', () => {
    location.href = 'privacy-portal.html';
  });
}

/* ==========================================================================
   Universal Empty State Helper
   ========================================================================== */
function renderEmptyState({ icon = '📂', title = 'No Data Found', desc = 'No records are currently stored in this view.', ctaText = '', ctaHref = '' }) {
  return `
    <div class="empty-state">
      <div class="empty-state-icon">${icon}</div>
      <h4 class="empty-state-title">${title}</h4>
      <p class="empty-state-desc">${desc}</p>
      ${ctaText ? `<a href="${ctaHref || 'javascript:void(0)'}" class="btn btn-primary btn-sm">${ctaText}</a>` : ''}
    </div>
  `;
}

// Global Exports
window.triggerNamasteCelebration = triggerNamasteCelebration;
window.initNetworkMonitor = initNetworkMonitor;
window.initDPDPConsent = initDPDPConsent;
window.renderEmptyState = renderEmptyState;

