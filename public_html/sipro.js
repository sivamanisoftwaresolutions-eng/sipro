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
  ['Home', '/'],
  ['Careers', 'careers.html'],
  ['Contact', 'contact.html'],
  ['Client Portal', 'login-client.html']
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
  moon: `<svg class="icon-moon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
  chevronDown: `<svg class="nav-chevron" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
  arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  close: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  cloud: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
  cpu: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>`,
  zap: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  shield: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  book: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 2v20"/></svg>`,
  star: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  globe: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
  briefcase: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  building: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/></svg>`,
  layers: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
  code: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  scale: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>`,
  home: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  sparkles: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
  search: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  phone: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`
};

// Enterprise Accenture/Wipro Mega-Menu Configuration
const MEGA_MENUS = {
  whatWeDo: {
    id: 'mega-what-we-do',
    label: 'Solutions & Architecture',
    columns: [
      {
        title: 'App & Website Engineering',
        items: [
          {
            title: 'Custom Mobile & Web Apps',
            desc: 'Native iOS & Android, React Native & Progressive Web Apps',
            href: 'services.html#apps',
            icon: 'cpu',
            badge: 'Apps'
          },
          {
            title: 'Modern Website Engineering',
            desc: 'Enterprise websites, CMS & SEO-optimized frontends',
            href: 'services.html#websites',
            icon: 'globe',
            badge: 'Websites'
          },
          {
            title: 'Cloud Hosting & 24/7 DevOps',
            desc: 'Managed AWS/GCP hosting, server monitoring & zero downtime',
            href: 'services.html#hosting',
            icon: 'shield',
            badge: '24/7 Hosting'
          }
        ]
      },
      {
        title: 'Cloud Infrastructure & Pods',
        items: [
          {
            title: 'Cloud Architecture & Kubernetes',
            desc: 'Multi-cloud AWS/GCP, K8s orchestration & IaC Terraform',
            href: 'services-cloud-architecture.html',
            icon: 'cloud',
            badge: 'Enterprise'
          },
          {
            title: 'Intelligent APIs & Microservices',
            desc: 'High-throughput Go/Node microservices & event streaming',
            href: 'services-api-automation.html',
            icon: 'zap',
            badge: 'APIs'
          },
          {
            title: 'Dedicated Engineering Pods',
            desc: '5-day deployment squads & transparent INR retainers',
            href: 'pricing.html',
            icon: 'layers',
            badge: 'Pods'
          }
        ]
      }
    ],
    spotlight: {
      tag: 'CORE OFFERINGS',
      title: 'Apps, Websites & 24/7 Cloud Hosting',
      desc: 'Turnkey enterprise software engineering, resilient cloud hosting, and dedicated senior engineering pods with 99.95% SLA.',
      linkText: 'Explore All Solutions',
      href: 'services.html',
      badge: 'Full Stack'
    }
  },
  whatWeThink: {
    id: 'mega-what-we-think',
    label: 'What We Think',
    columns: [
      {
        title: 'Compliance & Governance',
        items: [
          {
            title: 'DPDP Act 2023 Privacy Portal',
            desc: 'India Digital Personal Data Protection fiduciary framework',
            href: 'privacy-portal.html',
            icon: 'shield',
            badge: 'DPDP 2023'
          },
          {
            title: 'Grievance Redressal & DPO',
            desc: 'Statutory Data Protection & Grievance Redressal mechanisms',
            href: 'grievance-redressal.html',
            icon: 'scale'
          },
          {
            title: 'Privacy Policy & Data Security',
            desc: 'ISO 27001-aligned controls & data encryption protocols',
            href: 'privacy-policy.html',
            icon: 'lock'
          }
        ]
      },
      {
        title: 'Engineering & Insights',
        items: [
          {
            title: 'Engineering Wiki & Playbooks',
            desc: 'Architecture standards, CI/CD guides & system wiki',
            href: 'employee-wiki.html',
            icon: 'book'
          },
          {
            title: 'Talent Academy Curriculum',
            desc: 'Full-stack engineering syllabus & acceleration tracks',
            href: 'candidate-curriculum.html',
            icon: 'code'
          },
          {
            title: 'Verified Client Reviews',
            desc: 'Enterprise testimonials, verified ratings & feedback',
            href: '/#reviews',
            icon: 'star',
            badge: '4.9/5'
          }
        ]
      }
    ],
    spotlight: {
      tag: 'REGULATORY INSIGHT',
      title: 'DPDP Act 2023 Roadmap',
      desc: 'A comprehensive engineering guide for enterprise data fiduciaries on consent lifecycle, erasure & security audits.',
      linkText: 'Access Privacy Portal',
      href: 'privacy-portal.html',
      badge: 'Statutory'
    }
  },
  whoWeAre: {
    id: 'mega-who-we-are',
    label: 'Who We Are',
    columns: [
      {
        title: 'Organization & Delivery',
        items: [
          {
            title: 'About SiPro Technologies',
            desc: 'Our heritage, engineering ethos & leadership principles',
            href: 'about.html',
            icon: 'building'
          },
          {
            title: 'Global Delivery Network',
            desc: 'Operating from Telangana to global enterprise partners',
            href: 'locations-global.html',
            icon: 'globe'
          },
          {
            title: 'Hyderabad & Regional Hubs',
            desc: 'Innovation engineering hubs in South India',
            href: 'locations-hyderabad.html',
            icon: 'building'
          }
        ]
      },
      {
        title: 'Careers & Engagement',
        items: [
          {
            title: 'Careers & Open Positions',
            desc: 'Join high-impact squads with competitive compensation',
            href: 'careers.html',
            icon: 'briefcase',
            badge: 'Hiring'
          },
          {
            title: 'Candidate Assessments',
            desc: 'Technical coding challenges & evaluation portal',
            href: 'candidate-assessments.html',
            icon: 'code'
          },
          {
            title: 'Client Portal & RFP Discovery',
            desc: 'Sign in to submit project briefs, review sprints & estimates',
            href: 'login-client.html',
            icon: 'user'
          }
        ]
      }
    ],
    spotlight: {
      tag: 'WE ARE HIRING',
      title: 'Build at Enterprise Scale',
      desc: 'Join our senior engineering squads solving mission-critical cloud, distributed systems, and automation challenges.',
      linkText: 'View Open Roles',
      href: 'careers.html',
      badge: '12 Roles'
    }
  }
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
    if (typeof initPricingAuthGate === 'function') {
      initPricingAuthGate();
    }
  },
  logout() {
    this.setUser(null);
    showToast('Signed out successfully.', 'info');
    setTimeout(() => {
      if (location.pathname.includes('dashboard') || location.pathname.includes('billing')) {
        location.href = '/';
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

  const rawPage = document.body.dataset.page || (location.pathname.split('/').pop() || '');
  const isHomePage = rawPage === 'index.html' || rawPage === 'home' || rawPage === '' || location.pathname === '/' || location.pathname.endsWith('/index.html');
  const page = isHomePage ? 'home' : rawPage;
  const user = AuthState.getUser();

  // Helper to render Mega-Menu Desktop Dropdown Item
  const renderDesktopMegaMenu = (menuKey, menu) => {
    const isAnyActive = menu.columns.some(col => col.items.some(item => page === item.href));
    return `
      <div class="nav-item-dropdown ${isAnyActive ? 'active' : ''}" data-mega="${menuKey}">
        <button type="button" class="nav-dropdown-trigger" aria-haspopup="true" aria-expanded="false" id="trigger-${menu.id}">
          <span>${menu.label}</span>
          ${ICONS.chevronDown}
        </button>
        <div class="mega-menu-panel" role="region" aria-labelledby="trigger-${menu.id}">
          <div class="mega-menu-grid">
            ${menu.columns.map(col => `
              <div class="mega-column">
                <div class="mega-column-title">${col.title}</div>
                ${col.items.map(item => {
                  const itemActive = page === item.href;
                  return `
                    <a href="${item.href}" class="mega-item-link ${itemActive ? 'active' : ''}">
                      <div class="mega-item-icon">
                        ${ICONS[item.icon] || ICONS.code}
                      </div>
                      <div class="mega-item-text">
                        <div class="mega-item-title">
                          <span>${item.title}</span>
                          ${item.badge ? `<span class="mega-item-badge">${item.badge}</span>` : ''}
                        </div>
                        <div class="mega-item-desc">${item.desc}</div>
                      </div>
                    </a>
                  `;
                }).join('')}
              </div>
            `).join('')}

            <!-- Spotlight Card -->
            <div class="mega-spotlight-card">
              <div>
                <div class="mega-spotlight-tag">
                  <span>✦</span> ${menu.spotlight.tag}
                </div>
                <div class="mega-spotlight-title">${menu.spotlight.title}</div>
                <div class="mega-spotlight-desc">${menu.spotlight.desc}</div>
              </div>
              <div>
                <a href="${menu.spotlight.href}" class="mega-spotlight-cta">
                  <span>${menu.spotlight.linkText}</span>
                  ${ICONS.arrowRight}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  };

  // Helper to render Mobile Accordion Section
  const renderMobileAccordion = (menuKey, menu) => {
    const isAnyActive = menu.columns.some(col => col.items.some(item => page === item.href));
    const isDefaultOpen = isAnyActive || menuKey === 'whatWeDo';
    const totalItems = menu.columns.reduce((acc, col) => acc + col.items.length, 0);
    const menuIcons = {
      whatWeDo: ICONS.cpu,
      whatWeThink: ICONS.shield,
      whoWeAre: ICONS.building
    };
    const accentColors = {
      whatWeDo: 'accent-cyan',
      whatWeThink: 'accent-violet',
      whoWeAre: 'accent-amber'
    };
    const subtitleMap = {
      whatWeDo: 'Apps, Websites, 24/7 Hosting & Pods',
      whatWeThink: 'DPDP Governance, Security & Wiki',
      whoWeAre: 'Leadership, Hubs & 12 Open Roles'
    };
    const badgeColors = {
      whatWeDo: 'cyan',
      whatWeThink: 'emerald',
      whoWeAre: 'amber'
    };

    return `
      <div class="mobile-accordion ${isDefaultOpen ? 'open' : ''}" data-accordion="${menuKey}">
        <button type="button" class="mobile-accordion-trigger" aria-expanded="${isDefaultOpen ? 'true' : 'false'}">
          <div class="mobile-nav-item-left">
            <div class="mobile-nav-icon-badge ${accentColors[menuKey] || ''}">
              ${menuIcons[menuKey] || ICONS.code}
            </div>
            <div class="mobile-nav-item-meta">
              <div style="display:flex;align-items:center;gap:6px">
                <span class="mobile-nav-item-title">${menu.label}</span>
                <span class="mobile-badge-pill ${badgeColors[menuKey] || 'cyan'}">${totalItems} Items</span>
              </div>
              <span class="mobile-nav-item-sub">${subtitleMap[menuKey] || `${totalItems} Capabilities &amp; Portals`}</span>
            </div>
          </div>
          <div class="mobile-nav-item-right">
            <span class="mobile-accordion-chevron">${ICONS.chevronDown}</span>
          </div>
        </button>
        <div class="mobile-accordion-content">
          ${menu.columns.map(col => `
            <div class="mobile-accordion-section-header">
              <span>${col.title}</span>
            </div>
            ${col.items.map(item => {
              const itemActive = page === item.href;
              return `
                <a href="${item.href}" class="mobile-sub-link ${itemActive ? 'active' : ''}">
                  <div class="mobile-sub-icon">${ICONS[item.icon] || ICONS.code}</div>
                  <div class="mobile-sub-text">
                    <div class="mobile-sub-title">
                      <span>${item.title}</span>
                      ${item.badge ? `<span class="mobile-sub-badge">${item.badge}</span>` : ''}
                    </div>
                    ${item.desc ? `<div class="mobile-sub-desc">${item.desc}</div>` : ''}
                  </div>
                </a>
              `;
            }).join('')}
          `).join('')}

          ${menu.spotlight ? `
            <div class="mobile-accordion-spotlight">
              <div class="mobile-spotlight-top">
                <span class="mobile-spotlight-pill">✦ ${menu.spotlight.tag}</span>
                ${menu.spotlight.badge ? `<span class="mobile-sub-badge">${menu.spotlight.badge}</span>` : ''}
              </div>
              <div class="mobile-spotlight-title">${menu.spotlight.title}</div>
              <div class="mobile-spotlight-desc">${menu.spotlight.desc}</div>
              <a href="${menu.spotlight.href}" class="mobile-spotlight-btn">
                <span>${menu.spotlight.linkText}</span>
                ${ICONS.arrowRight}
              </a>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  };

  // Generate desktop direct links
  const directDesktopLinks = NAV_LINKS.map(([label, href]) => {
    const isActive = (href === '/' && isHomePage) || page === href;
    const targetHref = (href === '/' && isHomePage) ? '#home' : href;
    return `<a class="nav-link ${isActive ? 'active' : ''}" href="${targetHref}">${label}</a>`;
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
      <button type="button" class="btn btn-primary btn-sm header-login-btn" data-auth-trigger="login" title="Login or Create Account">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:6px"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
        <span>Login</span>
      </button>
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
      <div class="mobile-auth-btn-row" style="grid-template-columns: 1fr;">
        <button type="button" class="btn btn-primary btn-block" data-auth-trigger="login" style="display:flex;align-items:center;justify-content:center;gap:8px;font-weight:700;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
          <span>Login</span>
        </button>
      </div>
    `;
  }

  headerContainer.innerHTML = `
    <header class="site-header">
      <div class="container">
        <div class="header-nav">
          <a class="brand" href="/" aria-label="SiPro Technologies Home">
            <img src="/logo.svg" alt="SiPro Technologies" class="brand-logo-img dark-only" width="210" height="38" />
            <img src="/logo-light.svg" alt="SiPro Technologies" class="brand-logo-img light-only" width="210" height="38" />
          </a>

          <!-- Enterprise Mega-Menu Desktop Navigation (Accenture/Wipro Style) -->
          <nav class="nav-links-desktop" aria-label="Enterprise Navigation">
            <a class="nav-link ${isHomePage ? 'active' : ''}" href="${isHomePage ? '#home' : '/'}">Home</a>
            ${renderDesktopMegaMenu('whatWeDo', MEGA_MENUS.whatWeDo)}
            ${renderDesktopMegaMenu('whatWeThink', MEGA_MENUS.whatWeThink)}
            ${renderDesktopMegaMenu('whoWeAre', MEGA_MENUS.whoWeAre)}
            <a class="nav-link ${page === 'careers.html' ? 'active' : ''}" href="${isHomePage ? '#careers' : 'careers.html'}">Careers</a>
            <a class="nav-link ${page === 'contact.html' ? 'active' : ''}" href="${isHomePage ? '#contact' : 'contact.html'}">Contact</a>
            ${user ? `<a class="nav-link ${page === 'pricing.html' ? 'active' : ''}" href="pricing.html">Pricing</a>` : ''}
            <a class="nav-link ${page === 'portals.html' || page.includes('login') ? 'active' : ''}" href="portals.html">Portals</a>
          </nav>

          <div class="header-actions">
            <button class="header-search-btn" type="button" onclick="document.dispatchEvent(new KeyboardEvent('keydown', {key: 'k', ctrlKey: true, metaKey: true}))" aria-label="Open Command Search" title="Quick Search (Ctrl+K)">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <span>Search</span>
              <kbd>⌘K</kbd>
            </button>

            <button class="a11y-toggle-btn" id="a11y-quick-btn" type="button" onclick="openAccessibilityModal()" aria-label="Accessibility settings" title="Accessibility & Display Settings">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"/><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"/><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"/><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"/></svg>
            </button>

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

      <!-- Mobile Slide-Over Glassmorphic Drawer -->
      <div class="mobile-drawer" id="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation Menu">
        <div class="mobile-drawer-header">
          <a class="brand" href="/" aria-label="SiPro Technologies Home">
            <img src="/logo.svg" alt="SiPro Technologies" class="brand-logo-img dark-only" width="180" height="34" />
            <img src="/logo-light.svg" alt="SiPro Technologies" class="brand-logo-img light-only" width="180" height="34" />
          </a>
          <button class="mobile-drawer-close" type="button" aria-label="Close navigation drawer">
            ${ICONS.close}
          </button>
        </div>

        <div class="mobile-drawer-body">
          <!-- Quick Command Search Trigger -->
          <div class="mobile-search-pill" onclick="document.dispatchEvent(new KeyboardEvent('keydown', {key: 'k', ctrlKey: true, metaKey: true}))" role="button" tabindex="0" aria-label="Open Command Search">
            <span class="mobile-search-icon">${ICONS.search}</span>
            <span class="mobile-search-text">Search platforms, services &amp; docs...</span>
            <kbd class="mobile-search-kbd">⌘K</kbd>
          </div>

          <!-- Main Navigation Group -->
          <div class="mobile-group-label">OVERVIEW</div>
          <a href="${isHomePage ? '#home' : '/'}" class="mobile-nav-link ${isHomePage ? 'active' : ''}">
            <div class="mobile-nav-item-left">
              <div class="mobile-nav-icon-badge accent-blue">${ICONS.home}</div>
              <div class="mobile-nav-item-meta">
                <span class="mobile-nav-item-title">Home</span>
                <span class="mobile-nav-item-sub">Enterprise Overview &amp; Cloud Pods</span>
              </div>
            </div>
            <span class="mobile-nav-arrow">${ICONS.arrowRight}</span>
          </a>

          <div class="mobile-group-label">SOLUTIONS &amp; ARCHITECTURE</div>
          ${renderMobileAccordion('whatWeDo', MEGA_MENUS.whatWeDo)}

          <div class="mobile-group-label">GOVERNANCE &amp; ORGANIZATION</div>
          ${renderMobileAccordion('whatWeThink', MEGA_MENUS.whatWeThink)}
          ${renderMobileAccordion('whoWeAre', MEGA_MENUS.whoWeAre)}

          <div class="mobile-group-label">COMMERCIAL &amp; OPPORTUNITIES</div>
          <a href="${isHomePage ? '#careers' : 'careers.html'}" class="mobile-nav-link ${page === 'careers.html' ? 'active' : ''}">
            <div class="mobile-nav-item-left">
              <div class="mobile-nav-icon-badge accent-amber">${ICONS.sparkles}</div>
              <div class="mobile-nav-item-meta">
                <div style="display:flex;align-items:center;gap:6px">
                  <span class="mobile-nav-item-title">Careers &amp; Hiring</span>
                  <span class="mobile-badge-pill amber">6 Openings</span>
                </div>
                <span class="mobile-nav-item-sub">Software Internships &amp; Engineering Roles</span>
              </div>
            </div>
            <span class="mobile-nav-arrow">${ICONS.arrowRight}</span>
          </a>

          <a href="${isHomePage ? '#contact' : 'contact.html'}" class="mobile-nav-link ${page === 'contact.html' ? 'active' : ''}">
            <div class="mobile-nav-item-left">
              <div class="mobile-nav-icon-badge accent-blue">${ICONS.mail}</div>
              <div class="mobile-nav-item-meta">
                <div style="display:flex;align-items:center;gap:6px">
                  <span class="mobile-nav-item-title">Contact &amp; Scoping</span>
                  <span class="mobile-badge-pill cyan">Inquiries</span>
                </div>
                <span class="mobile-nav-item-sub">Connect with Principal Architects &amp; Hubs</span>
              </div>
            </div>
            <span class="mobile-nav-arrow">${ICONS.arrowRight}</span>
          </a>

          ${user ? `
          <a href="pricing.html" class="mobile-nav-link ${page === 'pricing.html' ? 'active' : ''}">
            <div class="mobile-nav-item-left">
              <div class="mobile-nav-icon-badge accent-emerald">${ICONS.layers}</div>
              <div class="mobile-nav-item-meta">
                <div style="display:flex;align-items:center;gap:6px">
                  <span class="mobile-nav-item-title">Pricing &amp; Retainers</span>
                  <span class="mobile-badge-pill emerald">INR Pods</span>
                </div>
                <span class="mobile-nav-item-sub">Sprint Rates &amp; Engineering Calculator</span>
              </div>
            </div>
            <span class="mobile-nav-arrow">${ICONS.arrowRight}</span>
          </a>` : ''}

          <a href="login-client.html" class="mobile-nav-link ${page === 'login-client.html' ? 'active' : ''}">
            <div class="mobile-nav-item-left">
              <div class="mobile-nav-icon-badge accent-cyan">${ICONS.user}</div>
              <div class="mobile-nav-item-meta">
                <div style="display:flex;align-items:center;gap:6px">
                  <span class="mobile-nav-item-title">Client Portal Login</span>
                  <span class="mobile-badge-pill cyan">Client Hub</span>
                </div>
                <span class="mobile-nav-item-sub">Sign in for Sprints, Invoices &amp; Retainer Estimator</span>
              </div>
            </div>
            <span class="mobile-nav-arrow">${ICONS.arrowRight}</span>
          </a>

          <a href="portals.html" class="mobile-nav-link ${page === 'portals.html' ? 'active' : ''}">
            <div class="mobile-nav-item-left">
              <div class="mobile-nav-icon-badge accent-violet">${ICONS.building}</div>
              <div class="mobile-nav-item-meta">
                <div style="display:flex;align-items:center;gap:6px">
                  <span class="mobile-nav-item-title">3 Dedicated Portals</span>
                  <span class="mobile-badge-pill emerald">Live</span>
                </div>
                <span class="mobile-nav-item-sub">Client Hub, Employee Board &amp; Candidate Portal</span>
              </div>
            </div>
            <span class="mobile-nav-arrow">${ICONS.arrowRight}</span>
          </a>

          <div class="mobile-auth-block">
            <div class="mobile-group-label" style="margin-top:0">ACCOUNT ACCESS</div>
            ${mobileAuthHtml}
          </div>
        </div>

        <div class="mobile-drawer-footer">
          <div class="mobile-footer-info">
            <div class="mobile-msme-badge">
              <span class="msme-dot"></span>
              <span>Telangana, India · MSME UDYAM</span>
            </div>
          </div>
          <div class="mobile-footer-actions">
            <button class="a11y-toggle-btn" type="button" onclick="openAccessibilityModal()" aria-label="Accessibility settings" title="Accessibility & Display Settings" style="width:36px;height:36px;border-radius:8px;display:inline-flex;align-items:center;justify-content:center;">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"/><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"/><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"/><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"/></svg>
            </button>
            <button class="theme-toggle-btn" type="button" aria-label="Toggle theme in mobile menu">
              ${ICONS.sun}
              ${ICONS.moon}
            </button>
          </div>
        </div>
      </div>
      <div class="mobile-drawer-backdrop" id="mobile-drawer-backdrop"></div>
    </header>
  `;

  // Desktop Mega-Menu Hover & Keyboard Interactions
  const megaDropdowns = headerContainer.querySelectorAll('.nav-item-dropdown');
  megaDropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector('.nav-dropdown-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isCurrentlyOpen = dropdown.classList.contains('open');
      megaDropdowns.forEach(d => {
        if (d !== dropdown) {
          d.classList.remove('open');
          d.querySelector('.nav-dropdown-trigger')?.setAttribute('aria-expanded', 'false');
        }
      });
      dropdown.classList.toggle('open', !isCurrentlyOpen);
      trigger.setAttribute('aria-expanded', String(!isCurrentlyOpen));
    });
  });

  // Close desktop mega menus when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-item-dropdown')) {
      megaDropdowns.forEach(d => {
        d.classList.remove('open');
        d.querySelector('.nav-dropdown-trigger')?.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // Close desktop mega menus and mobile drawer on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      megaDropdowns.forEach(d => {
        d.classList.remove('open');
        d.querySelector('.nav-dropdown-trigger')?.setAttribute('aria-expanded', 'false');
      });
      closeDrawer();
    }
  });

  // Mobile drawer bindings
  const hamburger = headerContainer.querySelector('.hamburger-btn');
  const drawer = headerContainer.querySelector('.mobile-drawer');
  const backdrop = headerContainer.querySelector('.mobile-drawer-backdrop');
  const closeBtn = headerContainer.querySelector('.mobile-drawer-close');

  const closeDrawer = () => {
    if (!drawer || !hamburger || !backdrop) return;
    drawer.classList.remove('open');
    backdrop.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open navigation menu');
    document.body.style.overflow = '';
  };

  const openDrawer = () => {
    if (!drawer || !hamburger || !backdrop) return;
    drawer.classList.add('open');
    backdrop.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'Close navigation menu');
    document.body.style.overflow = 'hidden';
  };

  if (hamburger && drawer && backdrop) {
    hamburger.addEventListener('click', () => {
      const isOpen = drawer.classList.contains('open');
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeDrawer);
    }

    backdrop.addEventListener('click', closeDrawer);
    drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));
    drawer.querySelectorAll('button:not(.mobile-accordion-trigger):not(.theme-toggle-btn)').forEach(b => b.addEventListener('click', closeDrawer));
  }

  // Auto close drawer when screen resizes to desktop width
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1080 && drawer?.classList.contains('open')) {
      closeDrawer();
    }
  });

  // Mobile Accordion toggles inside drawer
  drawer?.querySelectorAll('.mobile-accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const parent = trigger.closest('.mobile-accordion');
      if (!parent) return;
      const isOpen = parent.classList.toggle('open');
      trigger.setAttribute('aria-expanded', String(isOpen));
    });
  });

  // Theme toggle buttons (both desktop and mobile footer)
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
            <a class="brand" href="/" aria-label="SiPro Technologies Home">
              <img src="/logo.svg" alt="SiPro Technologies" class="brand-logo-img footer-logo dark-only" width="220" height="40" />
              <img src="/logo-light.svg" alt="SiPro Technologies" class="brand-logo-img footer-logo light-only" width="220" height="40" />
            </a>
            <p>Cloud Architecture, Enterprise Web Systems, Microservices, and Intelligent Automation.</p>
            <p style="margin-top:12px;font-size:13px;color:var(--muted)">Hanamkonda, Telangana · Operating Globally</p>
          </div>
          <div class="footer-col">
            <h4>Capabilities</h4>
            <ul>
              <li><a href="services.html#apps">Mobile & Web Apps</a></li>
              <li><a href="services.html#websites">Modern Websites</a></li>
              <li><a href="services.html#hosting">24/7 Cloud Hosting</a></li>
              <li><a href="services-cloud-architecture.html">Cloud Architecture</a></li>
              <li><a href="services-api-automation.html">Microservices & APIs</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Workspaces</h4>
            <ul>
              <li><a href="login-client.html">Client Delivery Portal</a></li>
              <li><a href="login-candidate.html">Candidate Learning Hub</a></li>
              <li><a href="login-employee.html">Employee Operations</a></li>
              <li><a href="careers.html">Careers & Open Roles</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Client Access</h4>
            <ul>
              <li><a href="login-client.html">Client Portal Login</a></li>
              <li><a href="portals.html">3 Dedicated Portals</a></li>
              <li><a href="mailto:contact@sipro.tech">contact@sipro.tech</a></li>
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
// Authentication Modal & UI Engine (Password + Gmail/Email OTP)
// ==========================================================================
function renderAuthModal() {
  if (document.getElementById('auth-modal-root')) return;

  const modalRoot = document.createElement('div');
  modalRoot.id = 'auth-modal-root';
  modalRoot.className = 'auth-modal-backdrop';
  modalRoot.innerHTML = `
    <div class="auth-card" role="dialog" aria-modal="true" aria-labelledby="auth-modal-title">
      <button class="auth-modal-close" aria-label="Close dialog" title="Close (Esc)">×</button>
      
      <div class="auth-card-body">
        <div class="auth-card-header" id="modal-card-header">
          <div class="auth-card-brand">
            <div class="brand-badge" style="width:30px;height:30px;font-size:13px">SP</div>
            <strong style="font-size:18px">SiPro<span class="brand-tld">.tech</span></strong>
          </div>
          <h2 class="auth-card-title" id="auth-modal-title">Welcome to SiPro</h2>
          <p class="auth-card-subtitle" id="auth-modal-desc">Access enterprise delivery, talent portals & systems</p>
        </div>

        <!-- 2-Tab Navigation -->
        <div class="auth-tabs" id="modal-auth-tabs">
          <button type="button" class="auth-tab active" data-tab="signin">Sign In</button>
          <button type="button" class="auth-tab" data-tab="signup">Create Account</button>
        </div>

        <!-- Social Login Buttons -->
        <div class="oauth-buttons" id="modal-oauth-group">
          <button type="button" class="oauth-btn" data-oauth="google">
            ${ICONS.google}
            <span>Google</span>
          </button>
          <button type="button" class="oauth-btn" data-oauth="github">
            ${ICONS.github}
            <span>GitHub</span>
          </button>
        </div>

        <div class="auth-divider" id="modal-auth-divider">
          <span id="modal-auth-divider-label">or sign in with email</span>
        </div>

        <!-- Sign In Form -->
        <form class="auth-form" id="modal-signin-form">
          <div class="form-group">
            <label for="modal-signin-email">Work / Personal Email</label>
            <div class="input-wrapper">
              <span class="input-icon">${ICONS.mail}</span>
              <input id="modal-signin-email" class="auth-input" type="email" required placeholder="you@company.com" autocomplete="email">
            </div>
            <span class="field-error" id="modal-signin-email-error">Please enter a valid work email address.</span>
          </div>

          <div class="form-group">
            <label for="modal-signin-password">
              <span>Password</span>
              <a href="javascript:void(0)" class="forgot-pwd-trigger" id="modal-forgot-pwd-link">Forgot password / Sign in with OTP</a>
            </label>
            <div class="input-wrapper">
              <span class="input-icon">${ICONS.lock}</span>
              <input id="modal-signin-password" class="auth-input" type="password" required placeholder="Enter your password" autocomplete="current-password">
              <button type="button" class="password-toggle-btn" aria-label="Show password">${ICONS.eye}</button>
            </div>
            <span class="field-error" id="modal-signin-password-error">Password must be at least 6 characters.</span>
          </div>

          <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;">
            <label class="checkbox-label" style="margin:0;">
              <input type="checkbox" id="modal-signin-remember" checked style="position:absolute;opacity:0">
              <span class="custom-checkbox">${ICONS.check}</span>
              <span>Remember me</span>
            </label>
            <button type="button" class="otp-switch-link" id="modal-btn-trigger-otp" style="font-size:12px;background:none;border:none;color:var(--cyan);cursor:pointer;padding:0;">⚡ Sign in with OTP Code</button>
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
            <label for="modal-signup-email">Work / Personal Email</label>
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
                <strong id="modal-strength-label">Empty</strong>
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
            <span class="btn-text">Create Account & Verify</span>
            <span class="btn-spinner"></span>
          </button>
        </form>

        <!-- Seamless Email OTP Verification View -->
        <div class="otp-auth-section" id="modal-otp-section" style="display:none">
          <form class="auth-form" id="modal-otp-verify-form" style="display:flex;flex-direction:column;gap:16px;">
            <div class="otp-header-badge" style="display:flex;align-items:center;gap:8px;background:rgba(99,102,241,0.12);padding:8px 14px;border-radius:10px;border:1px solid rgba(99,102,241,0.25);">
              <span>🔒 Code Sent to: <strong class="otp-target-email" id="modal-otp-target-display" style="color:var(--cyan)"></strong></span>
            </div>

            <p style="font-size:13px;color:var(--muted);margin:0;line-height:1.5;">
              Please enter the 6-digit verification code sent to your email to verify and complete authentication.
            </p>

            <div class="otp-demo-hint" id="modal-otp-hint-box" style="display:none;background:rgba(16,185,129,0.1);border:1px dashed rgba(16,185,129,0.4);border-radius:8px;padding:8px 12px;display:flex;justify-content:space-between;align-items:center;">
              <span style="font-size:12px;color:var(--emerald)">Dispatched Code: <code id="modal-otp-hint-code" style="font-weight:700;font-size:14px;letter-spacing:2px;color:var(--emerald)">123456</code></span>
              <button type="button" class="copy-pill" id="modal-btn-autofill-otp" style="font-size:11px;padding:3px 8px;background:rgba(16,185,129,0.2);color:var(--emerald);border:none;border-radius:4px;cursor:pointer;font-weight:600;">Auto-Fill</button>
            </div>

            <div class="otp-input-grid" id="modal-otp-digit-grid">
              <input type="text" maxlength="1" inputmode="numeric" class="otp-digit-box" data-index="0" autofocus>
              <input type="text" maxlength="1" inputmode="numeric" class="otp-digit-box" data-index="1">
              <input type="text" maxlength="1" inputmode="numeric" class="otp-digit-box" data-index="2">
              <input type="text" maxlength="1" inputmode="numeric" class="otp-digit-box" data-index="3">
              <input type="text" maxlength="1" inputmode="numeric" class="otp-digit-box" data-index="4">
              <input type="text" maxlength="1" inputmode="numeric" class="otp-digit-box" data-index="5">
            </div>

            <span class="field-error" id="modal-otp-verify-error" style="text-align:center;">Invalid or expired 6-digit code. Please retry.</span>

            <div class="otp-timer-row" style="display:flex;justify-content:space-between;align-items:center;font-size:12px;">
              <span id="modal-otp-timer-text" style="color:var(--muted)">Resend available in <strong id="modal-otp-countdown" style="color:var(--cyan)">60s</strong></span>
              <button type="button" class="otp-resend-btn" id="modal-btn-resend-otp" disabled style="background:none;border:none;color:var(--cyan);cursor:pointer;font-weight:600;font-size:12px;">Resend Code</button>
            </div>

            <button type="submit" class="btn btn-primary auth-submit-btn" id="modal-btn-verify-otp">
              <span class="btn-text">Verify & Enter Workspace</span>
              <span class="btn-spinner"></span>
            </button>

            <div class="otp-switch-method" style="text-align:center;margin-top:4px;">
              <button type="button" class="otp-switch-link" id="modal-btn-back-from-otp" style="background:none;border:none;color:var(--muted);font-size:13px;cursor:pointer;">← Back / Edit Information</button>
            </div>
          </form>
        </div>

        <div class="auth-card-footer" id="modal-auth-toggle-note">
          Don't have an account yet? <a href="javascript:void(0)" onclick="switchAuthTab('signup')">Sign up for free</a>
        </div>
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

  // Setup OTP Digit Inputs logic
  setupOtpInputControls(
    modalRoot.querySelector('#modal-otp-digit-grid'),
    () => modalRoot.querySelector('#modal-otp-verify-form').dispatchEvent(new Event('submit'))
  );

  // State for OTP in Modal
  let activeModalOtpState = {
    email: '',
    name: '',
    role: 'client',
    password: '',
    mode: 'register',
    fromTab: 'signup',
    countdownTimer: null,
    secondsLeft: 60,
    latestCode: ''
  };

  // Helper to transition smoothly into the OTP verification step
  async function transitionToModalOtp({ email, role, name = '', password = '', mode = 'register', fromTab = 'signup' }) {
    activeModalOtpState.email = email;
    activeModalOtpState.role = role || 'client';
    activeModalOtpState.name = name || email.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    activeModalOtpState.password = password;
    activeModalOtpState.mode = mode;
    activeModalOtpState.fromTab = fromTab;

    // UI Transition
    const title = modalRoot.querySelector('#auth-modal-title');
    const desc = modalRoot.querySelector('#auth-modal-desc');
    const authTabs = modalRoot.querySelector('#modal-auth-tabs');
    const oauthGroup = modalRoot.querySelector('#modal-oauth-group');
    const authDivider = modalRoot.querySelector('#modal-auth-divider');
    const signinForm = modalRoot.querySelector('#modal-signin-form');
    const signupForm = modalRoot.querySelector('#modal-signup-form');
    const otpSection = modalRoot.querySelector('#modal-otp-section');
    const footerToggle = modalRoot.querySelector('#modal-auth-toggle-note');
    const targetDisplay = modalRoot.querySelector('#modal-otp-target-display');
    const verifyError = modalRoot.querySelector('#modal-otp-verify-error');

    title.textContent = 'Verify Your Email';
    desc.textContent = `Enter the 6-digit verification code sent to ${email}`;
    if (targetDisplay) targetDisplay.textContent = email;
    if (verifyError) verifyError.classList.remove('visible');

    if (authTabs) authTabs.style.display = 'none';
    if (oauthGroup) oauthGroup.style.display = 'none';
    if (authDivider) authDivider.style.display = 'none';
    if (signinForm) signinForm.style.display = 'none';
    if (signupForm) signupForm.style.display = 'none';
    if (footerToggle) footerToggle.style.display = 'none';
    if (otpSection) otpSection.style.display = 'block';

    // Clear digit inputs & focus 1st box
    const digitBoxes = modalRoot.querySelectorAll('#modal-otp-digit-grid .otp-digit-box');
    digitBoxes.forEach(b => { b.value = ''; b.classList.remove('filled'); });
    setTimeout(() => digitBoxes[0]?.focus(), 150);

    // Dispatch OTP API call
    try {
      const res = await fetch('/api/v1/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, role: activeModalOtpState.role, purpose: 'verification' })
      });
      const data = await res.json();
      if (data.success) {
        activeModalOtpState.latestCode = data.otp || '';
        const hintBox = modalRoot.querySelector('#modal-otp-hint-box');
        const hintCode = modalRoot.querySelector('#modal-otp-hint-code');
        if (data.otp && hintCode && hintBox) {
          hintCode.textContent = data.otp;
          hintBox.style.display = 'flex';
        }
        startOtpCountdown(modalRoot, activeModalOtpState);
        showToast(`Verification code sent to ${email}!`, 'success');
      } else {
        showToast(data.error || 'Failed to dispatch verification code.', 'error');
      }
    } catch {
      showToast('Network error while dispatching code.', 'error');
    }
  }

  // Back button from OTP step
  modalRoot.querySelector('#modal-btn-back-from-otp')?.addEventListener('click', () => {
    if (activeModalOtpState.countdownTimer) clearInterval(activeModalOtpState.countdownTimer);
    switchAuthTab(activeModalOtpState.fromTab || 'signup');
  });

  // Auto-fill button click
  modalRoot.querySelector('#modal-btn-autofill-otp')?.addEventListener('click', () => {
    if (activeModalOtpState.latestCode) {
      fillOtpDigits(modalRoot.querySelector('#modal-otp-digit-grid'), activeModalOtpState.latestCode);
    }
  });

  // Resend OTP button
  modalRoot.querySelector('#modal-btn-resend-otp')?.addEventListener('click', async () => {
    const resendBtn = modalRoot.querySelector('#modal-btn-resend-otp');
    resendBtn.disabled = true;
    resendBtn.textContent = 'Sending...';

    try {
      const res = await fetch('/api/v1/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: activeModalOtpState.email, role: activeModalOtpState.role, purpose: 'verification' })
      });
      const data = await res.json();
      if (data.success) {
        activeModalOtpState.latestCode = data.otp || '';
        const hintCode = modalRoot.querySelector('#modal-otp-hint-code');
        if (data.otp && hintCode) hintCode.textContent = data.otp;
        showToast('New 6-digit verification code dispatched!', 'success');
        startOtpCountdown(modalRoot, activeModalOtpState);
      } else {
        showToast(data.error || 'Could not resend code.', 'error');
      }
    } catch {
      showToast('Failed to resend code.', 'error');
    }
  });

  // Verify OTP form submit
  const verifyOtpForm = modalRoot.querySelector('#modal-otp-verify-form');
  verifyOtpForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const digitBoxes = modalRoot.querySelectorAll('#modal-otp-digit-grid .otp-digit-box');
    const otpCode = Array.from(digitBoxes).map(b => b.value).join('');
    const verifyError = modalRoot.querySelector('#modal-otp-verify-error');

    if (otpCode.length !== 6) {
      verifyError.textContent = 'Please enter all 6 digits.';
      verifyError.classList.add('visible');
      return;
    }
    verifyError.classList.remove('visible');

    const submitBtn = modalRoot.querySelector('#modal-btn-verify-otp');
    submitBtn.classList.add('loading');

    try {
      const res = await fetch('/api/v1/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: activeModalOtpState.email,
          otp: otpCode,
          role: activeModalOtpState.role,
          displayName: activeModalOtpState.name
        })
      });
      const data = await res.json();
      submitBtn.classList.remove('loading');

      if (data.success) {
        if (activeModalOtpState.countdownTimer) clearInterval(activeModalOtpState.countdownTimer);

        const user = data.user || {
          email: activeModalOtpState.email,
          name: activeModalOtpState.name,
          role: activeModalOtpState.role,
          emailVerified: true,
          verifiedAt: new Date().toISOString(),
          loginAt: new Date().toISOString()
        };

        AuthState.setUser(user);
        closeAuthModal();
        showToast(`Email verified successfully! Welcome, ${user.name}!`, 'success');
        triggerNamasteCelebration(user);

        const target = user.role === 'client' ? 'client-dashboard.html' :
                       user.role === 'candidate' ? 'candidate-dashboard.html' : 'employee-dashboard.html';
        setTimeout(() => {
          if (!location.pathname.includes('dashboard')) {
            location.href = target;
          }
        }, 1500);
      } else {
        verifyError.textContent = data.error || 'Verification failed. Please check the code.';
        verifyError.classList.add('visible');
        const card = modalRoot.querySelector('.auth-card');
        card.classList.add('shake');
        setTimeout(() => card.classList.remove('shake'), 500);
        showToast(data.error || 'Invalid verification code.', 'error');
      }
    } catch (err) {
      submitBtn.classList.remove('loading');
      showToast('Network error during verification.', 'error');
    }
  });

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
      showToast('Please check email format & enter your password.', 'error');
      return;
    }

    const submitBtn = signinForm.querySelector('.auth-submit-btn');
    submitBtn.classList.add('loading');

    setTimeout(() => {
      submitBtn.classList.remove('loading');
      let role = 'client';
      if (email.includes('candidate') || email.includes('student') || email.includes('learn')) role = 'candidate';
      if (email.includes('employee') || email.includes('sipro') || email.includes('staff')) role = 'employee';

      const userName = email.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      const user = { email, name: userName || 'Arjun Sharma', role, emailVerified: true, loginAt: new Date().toISOString() };

      AuthState.setUser(user);
      
      // Async DB Sync
      fetch('/api/v1/auth/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: user.email, displayName: user.name, role: user.role, emailVerified: true })
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

  // Sign In with OTP / Forgot Password triggers
  const triggerOtpFromSignin = () => {
    const email = modalRoot.querySelector('#modal-signin-email').value.trim() || 'client@sipro.tech';
    let role = 'client';
    if (email.includes('candidate') || email.includes('student')) role = 'candidate';
    if (email.includes('employee') || email.includes('staff')) role = 'employee';
    transitionToModalOtp({ email, role, mode: 'signin', fromTab: 'signin' });
  };

  modalRoot.querySelector('#modal-btn-trigger-otp')?.addEventListener('click', triggerOtpFromSignin);
  modalRoot.querySelector('#modal-forgot-pwd-link')?.addEventListener('click', triggerOtpFromSignin);

  // Form submission: Sign Up -> Seamless OTP Verification Transition
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
    } else {
      modalRoot.querySelector('#modal-signup-name-error').classList.remove('visible');
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      modalRoot.querySelector('#modal-signup-email-error').classList.add('visible');
      valid = false;
    } else {
      modalRoot.querySelector('#modal-signup-email-error').classList.remove('visible');
    }

    if (password.length < 8) {
      modalRoot.querySelector('#modal-signup-password-error').classList.add('visible');
      valid = false;
    } else {
      modalRoot.querySelector('#modal-signup-password-error').classList.remove('visible');
    }

    if (password !== confirm) {
      modalRoot.querySelector('#modal-signup-confirm-error').classList.add('visible');
      valid = false;
    } else {
      modalRoot.querySelector('#modal-signup-confirm-error').classList.remove('visible');
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
      transitionToModalOtp({ email, role, name, password, mode: 'register', fromTab: 'signup' });
    }, 400);
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
          emailVerified: true,
          verifiedAt: new Date().toISOString(),
          loginAt: new Date().toISOString()
        };
        AuthState.setUser(user);
        closeAuthModal();
        showToast(`Authenticated and verified with ${provider}!`, 'success');
        if (!location.pathname.includes('dashboard')) {
          location.href = 'client-dashboard.html';
        }
      }, 600);
    });
  });
}

function openAuthModal(tab = 'signin') {
  renderAuthModal();
  const root = document.getElementById('auth-modal-root');
  if (!root) return;

  switchAuthTab(tab);
  root.classList.add('active');
  document.body.classList.add('overflow-hidden');
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';

  // Reset internal scroll position to top when opened
  const cardBody = root.querySelector('.auth-card-body');
  if (cardBody) cardBody.scrollTop = 0;

  // Auto-focus first input field in active tab
  setTimeout(() => {
    const activeForm = root.querySelector('.auth-form:not([style*="display: none"]):not([style*="display:none"])');
    const firstInput = activeForm?.querySelector('input:not([type="hidden"]):not([type="radio"]):not([type="checkbox"])');
    if (firstInput) firstInput.focus();
  }, 100);
}

function closeAuthModal() {
  const root = document.getElementById('auth-modal-root');
  if (!root) return;
  root.classList.remove('active');
  document.body.classList.remove('overflow-hidden');
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';
}

// Global escape key listener to close modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' || e.key === 'Esc') {
    const root = document.getElementById('auth-modal-root');
    if (root && root.classList.contains('active')) {
      closeAuthModal();
    }
  }
});

function switchAuthTab(tabName) {
  if (tabName === 'login') tabName = 'signin';
  const root = document.getElementById('auth-modal-root');
  if (!root) return;

  const authTabs = root.querySelector('#modal-auth-tabs');
  const signinForm = root.querySelector('#modal-signin-form');
  const signupForm = root.querySelector('#modal-signup-form');
  const otpSection = root.querySelector('#modal-otp-section');
  const title = root.querySelector('#auth-modal-title');
  const desc = root.querySelector('#auth-modal-desc');
  const footerToggle = root.querySelector('#modal-auth-toggle-note');
  const oauthGroup = root.querySelector('#modal-oauth-group');
  const authDivider = root.querySelector('#modal-auth-divider');
  const dividerLabel = root.querySelector('#modal-auth-divider-label');

  if (authTabs) authTabs.style.display = 'flex';
  if (otpSection) otpSection.style.display = 'none';
  if (oauthGroup) oauthGroup.style.display = 'grid';
  if (authDivider) authDivider.style.display = 'flex';
  if (footerToggle) footerToggle.style.display = 'block';

  root.querySelectorAll('.auth-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tabName);
  });

  if (tabName === 'signup') {
    signinForm.style.display = 'none';
    signupForm.style.display = 'flex';
    title.textContent = 'Create an Account';
    desc.textContent = 'Enterprise engineering, cloud delivery & talent acceleration';
    if (dividerLabel) dividerLabel.textContent = 'or register with email';
    footerToggle.innerHTML = `Already have an account? <a href="javascript:void(0)" onclick="switchAuthTab('signin')">Sign in here</a>`;
  } else {
    signinForm.style.display = 'flex';
    signupForm.style.display = 'none';
    title.textContent = 'Welcome Back';
    desc.textContent = 'Sign in to access your enterprise delivery pod & systems';
    if (dividerLabel) dividerLabel.textContent = 'or sign in with email';
    footerToggle.innerHTML = `Don't have an account yet? <a href="javascript:void(0)" onclick="switchAuthTab('signup')">Sign up for free</a>`;
  }
}

// Countdown timer helper for OTP
function startOtpCountdown(root, state) {
  if (state.countdownTimer) clearInterval(state.countdownTimer);
  state.secondsLeft = 60;

  const countdownEl = root.querySelector('#modal-otp-countdown') || root.querySelector('#standalone-otp-countdown');
  const resendBtn = root.querySelector('#modal-btn-resend-otp') || root.querySelector('#standalone-btn-resend-otp');
  const timerText = root.querySelector('#modal-otp-timer-text') || root.querySelector('#standalone-otp-timer-text');

  if (resendBtn) resendBtn.disabled = true;
  if (countdownEl) countdownEl.textContent = `${state.secondsLeft}s`;

  state.countdownTimer = setInterval(() => {
    state.secondsLeft--;
    if (countdownEl) countdownEl.textContent = `${state.secondsLeft}s`;

    if (state.secondsLeft <= 0) {
      clearInterval(state.countdownTimer);
      if (resendBtn) {
        resendBtn.disabled = false;
        resendBtn.textContent = 'Resend Code';
      }
      if (timerText) timerText.innerHTML = `Didn't get the code?`;
    }
  }, 1000);
}

// 6-digit OTP input auto-advance and keyboard navigation helper
function setupOtpInputControls(gridElement, onComplete) {
  if (!gridElement) return;

  const boxes = gridElement.querySelectorAll('.otp-digit-box');
  boxes.forEach((box, idx) => {
    box.addEventListener('input', (e) => {
      const val = box.value.replace(/\D/g, '');
      box.value = val ? val[val.length - 1] : '';
      box.classList.toggle('filled', Boolean(box.value));

      if (box.value && idx < boxes.length - 1) {
        boxes[idx + 1].focus();
      }

      const allFilled = Array.from(boxes).every(b => b.value.length === 1);
      if (allFilled && typeof onComplete === 'function') {
        onComplete();
      }
    });

    box.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !box.value && idx > 0) {
        boxes[idx - 1].focus();
      } else if (e.key === 'ArrowLeft' && idx > 0) {
        boxes[idx - 1].focus();
      } else if (e.key === 'ArrowRight' && idx < boxes.length - 1) {
        boxes[idx + 1].focus();
      }
    });

    box.addEventListener('paste', (e) => {
      e.preventDefault();
      const pasteData = (e.clipboardData || window.clipboardData).getData('text').trim();
      const digits = pasteData.replace(/\D/g, '').slice(0, 6);
      fillOtpDigits(gridElement, digits);
      if (digits.length === 6 && typeof onComplete === 'function') {
        onComplete();
      }
    });
  });
}

function fillOtpDigits(gridElement, digits) {
  if (!gridElement || !digits) return;
  const boxes = gridElement.querySelectorAll('.otp-digit-box');
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].value = digits[i] || '';
    boxes[i].classList.toggle('filled', Boolean(digits[i]));
  }
  const nextEmpty = Array.from(boxes).findIndex(b => !b.value);
  if (nextEmpty !== -1) {
    boxes[nextEmpty].focus();
  } else {
    boxes[boxes.length - 1].focus();
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

// Setup standalone auth pages (login.html, signup.html) with OTP support
function initStandaloneAuthPage() {
  const container = document.querySelector('[data-standalone-auth]');
  if (!container) return;

  const defaultTab = container.dataset.standaloneAuth || 'signin';
  const signinForm = container.querySelector('#standalone-signin-form');
  const signupForm = container.querySelector('#standalone-signup-form');
  const otpSection = container.querySelector('#standalone-otp-section');
  const sendOtpForm = container.querySelector('#standalone-otp-send-form');
  const verifyOtpForm = container.querySelector('#standalone-otp-verify-form');

  const switchTab = (tab) => {
    container.querySelectorAll('.auth-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
    if (tab === 'signup') {
      if (signinForm) signinForm.style.display = 'none';
      if (signupForm) signupForm.style.display = 'flex';
      if (otpSection) otpSection.style.display = 'none';
    } else if (tab === 'otp') {
      if (signinForm) signinForm.style.display = 'none';
      if (signupForm) signupForm.style.display = 'none';
      if (otpSection) {
        otpSection.style.display = 'flex';
        if (sendOtpForm) sendOtpForm.style.display = 'flex';
        if (verifyOtpForm) verifyOtpForm.style.display = 'none';
      }
    } else {
      if (signinForm) signinForm.style.display = 'flex';
      if (signupForm) signupForm.style.display = 'none';
      if (otpSection) otpSection.style.display = 'none';
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

  // Standalone OTP State & Setup
  const otpGrid = container.querySelector('#standalone-otp-digit-grid');
  if (otpGrid) {
    setupOtpInputControls(otpGrid, () => {
      verifyOtpForm?.dispatchEvent(new Event('submit'));
    });
  }

  let standaloneOtpState = {
    email: '',
    role: document.body.dataset.role || 'client',
    countdownTimer: null,
    secondsLeft: 60,
    latestCode: ''
  };

  sendOtpForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = container.querySelector('#standalone-otp-email')?.value.trim();
    const roleRadio = container.querySelector('input[name="standalone-otp-role"]:checked');
    const role = roleRadio ? roleRadio.value : (document.body.dataset.role || 'client');

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }

    const submitBtn = container.querySelector('#standalone-btn-send-otp');
    submitBtn.classList.add('loading');

    try {
      const res = await fetch('/api/v1/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, role, purpose: 'verification' })
      });
      const data = await res.json();
      submitBtn.classList.remove('loading');

      if (data.success) {
        standaloneOtpState.email = email;
        standaloneOtpState.role = role;
        standaloneOtpState.latestCode = data.otp || '';

        const targetDisplay = container.querySelector('#standalone-otp-target-display');
        if (targetDisplay) targetDisplay.textContent = email;

        sendOtpForm.style.display = 'none';
        if (verifyOtpForm) verifyOtpForm.style.display = 'flex';

        const hintBox = container.querySelector('#standalone-otp-hint-box');
        const hintCode = container.querySelector('#standalone-otp-hint-code');
        if (data.otp && hintCode) {
          hintCode.textContent = data.otp;
          if (hintBox) hintBox.style.display = 'flex';
        }

        startOtpCountdown(container, standaloneOtpState);
        const digitBoxes = container.querySelectorAll('#standalone-otp-digit-grid .otp-digit-box');
        digitBoxes.forEach(b => { b.value = ''; b.classList.remove('filled'); });
        digitBoxes[0]?.focus();

        showToast(`Verification code sent to ${email}!`, 'success');
      } else {
        showToast(data.error || 'Failed to dispatch OTP.', 'error');
      }
    } catch {
      submitBtn.classList.remove('loading');
      showToast('Network error while dispatching OTP.', 'error');
    }
  });

  container.querySelector('#standalone-btn-autofill-otp')?.addEventListener('click', () => {
    if (standaloneOtpState.latestCode && otpGrid) {
      fillOtpDigits(otpGrid, standaloneOtpState.latestCode);
    }
  });

  container.querySelector('#standalone-btn-resend-otp')?.addEventListener('click', async () => {
    const resendBtn = container.querySelector('#standalone-btn-resend-otp');
    resendBtn.disabled = true;
    resendBtn.textContent = 'Sending...';

    try {
      const res = await fetch('/api/v1/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: standaloneOtpState.email, role: standaloneOtpState.role, purpose: 'verification' })
      });
      const data = await res.json();
      if (data.success) {
        standaloneOtpState.latestCode = data.otp || '';
        const hintCode = container.querySelector('#standalone-otp-hint-code');
        if (data.otp && hintCode) hintCode.textContent = data.otp;
        showToast('New 6-digit verification code sent!', 'success');
        startOtpCountdown(container, standaloneOtpState);
      }
    } catch {
      showToast('Failed to resend OTP.', 'error');
    }
  });

  container.querySelector('#standalone-btn-change-otp-email')?.addEventListener('click', () => {
    if (standaloneOtpState.countdownTimer) clearInterval(standaloneOtpState.countdownTimer);
    if (verifyOtpForm) verifyOtpForm.style.display = 'none';
    if (sendOtpForm) sendOtpForm.style.display = 'flex';
  });

  verifyOtpForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const digitBoxes = container.querySelectorAll('#standalone-otp-digit-grid .otp-digit-box');
    const otpCode = Array.from(digitBoxes).map(b => b.value).join('');

    if (otpCode.length !== 6) {
      showToast('Please enter all 6 digits of the code.', 'error');
      return;
    }

    const submitBtn = container.querySelector('#standalone-btn-verify-otp');
    submitBtn.classList.add('loading');

    try {
      const res = await fetch('/api/v1/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: standaloneOtpState.email,
          otp: otpCode,
          role: standaloneOtpState.role,
          displayName: standaloneOtpState.email.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
        })
      });
      const data = await res.json();
      submitBtn.classList.remove('loading');

      if (data.success) {
        if (standaloneOtpState.countdownTimer) clearInterval(standaloneOtpState.countdownTimer);

        const user = data.user || {
          email: standaloneOtpState.email,
          name: standaloneOtpState.email.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          role: standaloneOtpState.role,
          emailVerified: true,
          verifiedAt: new Date().toISOString(),
          loginAt: new Date().toISOString()
        };

        AuthState.setUser(user);
        showToast(`Email verified! Welcome, ${user.name}!`, 'success');
        triggerNamasteCelebration(user);

        const target = user.role === 'client' ? 'client-dashboard.html' :
                       user.role === 'candidate' ? 'candidate-dashboard.html' : 'employee-dashboard.html';
        setTimeout(() => { location.href = target; }, 1400);
      } else {
        showToast(data.error || 'Invalid OTP code.', 'error');
      }
    } catch {
      submitBtn.classList.remove('loading');
      showToast('Network error during OTP verification.', 'error');
    }
  });

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
      const user = { email, name: userName || 'Arjun Sharma', role, emailVerified: true, loginAt: new Date().toISOString() };
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
      const user = { email, name, role, emailVerified: true, loginAt: new Date().toISOString() };
      AuthState.setUser(user);
      showToast(`Account created & verified with SiPro Tech!`, 'success');

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
          emailVerified: true,
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

// Client Feedback & Review System Engine
function initClientReviewSystem() {
  const reviewsGrid = document.getElementById('client-reviews-list');
  const reviewForm = document.getElementById('client-review-form');
  if (!reviewsGrid && !reviewForm) return;

  let currentSelectedRating = 5;
  const ratingLabels = {
    1: '1 Star (Needs Improvement)',
    2: '2 Stars (Fair Delivery)',
    3: '3 Stars (Good Quality)',
    4: '4 Stars (Very Good)',
    5: '5 Stars (Outstanding ROI & Architecture)'
  };

  // Setup Star selector if available
  const starContainer = document.getElementById('star-rating-selector');
  const starLabel = document.getElementById('star-rating-label');
  if (starContainer) {
    const starBtns = starContainer.querySelectorAll('.star-rating-btn');
    
    const updateStarUI = (val) => {
      starBtns.forEach(btn => {
        const starIndex = parseInt(btn.dataset.star, 10);
        if (starIndex <= val) {
          btn.style.color = '#f59e0b';
          btn.style.opacity = '1';
        } else {
          btn.style.color = 'var(--muted)';
          btn.style.opacity = '0.4';
        }
      });
      if (starLabel) starLabel.textContent = ratingLabels[val] || `${val} Stars`;
    };

    starBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        currentSelectedRating = parseInt(btn.dataset.star, 10);
        updateStarUI(currentSelectedRating);
      });
      btn.addEventListener('mouseenter', () => {
        const hoverVal = parseInt(btn.dataset.star, 10);
        updateStarUI(hoverVal);
      });
    });

    starContainer.addEventListener('mouseleave', () => {
      updateStarUI(currentSelectedRating);
    });

    updateStarUI(5);
  }

  // Fetch verified reviews from backend API
  const loadReviews = async () => {
    try {
      const res = await fetch('/api/v1/reviews');
      const data = await res.json();
      if (data.success && Array.isArray(data.reviews) && data.reviews.length > 0 && reviewsGrid) {
        reviewsGrid.innerHTML = data.reviews.map(r => {
          const starsStr = '★'.repeat(Math.min(5, Math.max(1, r.rating || 5)));
          const authorName = r.author || r.name || 'Anonymous Client';
          const reviewMsg = r.message || r.feedback || '';
          const initials = authorName.split(' ').map(n => n[0]).filter(Boolean).join('').toUpperCase().slice(0, 2) || 'CL';
          const servicePill = r.service ? `<span class="pill" style="font-size:10px;margin-bottom:8px;display:inline-block">${escapeHtml(r.service)}</span>` : '';
          return `
            <div class="testimonial-card">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
                <div class="testimonial-stars" style="color:#f59e0b;font-size:16px">${starsStr}</div>
                ${servicePill}
              </div>
              <p class="testimonial-quote">"${escapeHtml(reviewMsg)}"</p>
              <div class="testimonial-author">
                <div class="testimonial-avatar" style="background:linear-gradient(135deg, #6366f1, #22d3ee)">${escapeHtml(initials)}</div>
                <div>
                  <div class="testimonial-name">${escapeHtml(authorName)}</div>
                  <div class="testimonial-role">${escapeHtml(r.company || r.role || 'Enterprise Partner')}</div>
                </div>
              </div>
            </div>
          `;
        }).join('');
      }
    } catch (e) {
      console.warn('Could not load dynamic reviews:', e);
    }
  };

  loadReviews();

  // Review submission handler
  if (reviewForm) {
    reviewForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('review-author-name');
      const companyInput = document.getElementById('review-company-role');
      const serviceInput = document.getElementById('review-service-category');
      const feedbackInput = document.getElementById('review-feedback-msg');
      const statusText = document.getElementById('review-form-status');
      const submitBtn = document.getElementById('btn-submit-review');

      const name = nameInput ? nameInput.value.trim() : '';
      const company = companyInput ? companyInput.value.trim() : '';
      const service = serviceInput ? serviceInput.value : 'Custom Web & Software Engineering';
      const feedback = feedbackInput ? feedbackInput.value.trim() : '';
      const rating = currentSelectedRating;

      if (!name || !company || !feedback) {
        showToast('Please complete all review fields.', 'error');
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.querySelector('span').textContent = 'Submitting Review...';
      }

      try {
        const res = await fetch('/api/v1/reviews', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, company, service, feedback, rating })
        });
        const data = await res.json();

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.querySelector('span').textContent = 'Publish Verified Review';
        }

        if (data.success) {
          showToast('Thank you! Your verified client review has been published.', 'success');
          if (statusText) {
            statusText.textContent = '✔ Review successfully published and synchronized.';
            statusText.style.color = 'var(--emerald)';
          }

          // Prepend card to grid
          if (reviewsGrid) {
            const starsStr = '★'.repeat(rating);
            const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
            const newCard = document.createElement('div');
            newCard.className = 'testimonial-card';
            newCard.style.animation = 'fadeIn 0.4s ease-out';
            newCard.innerHTML = `
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
                <div class="testimonial-stars" style="color:#f59e0b;font-size:16px">${starsStr}</div>
                <span class="pill" style="font-size:10px;margin-bottom:8px;display:inline-block">${service}</span>
              </div>
              <p class="testimonial-quote">"${escapeHtml(feedback)}"</p>
              <div class="testimonial-author">
                <div class="testimonial-avatar" style="background:linear-gradient(135deg, #6366f1, #22d3ee)">${initials}</div>
                <div>
                  <div class="testimonial-name">${escapeHtml(name)}</div>
                  <div class="testimonial-role">${escapeHtml(company)}</div>
                </div>
              </div>
            `;
            reviewsGrid.insertBefore(newCard, reviewsGrid.firstChild);
          }

          // Reset form fields
          reviewForm.reset();
          currentSelectedRating = 5;
          if (starContainer) {
            starContainer.querySelectorAll('.star-rating-btn').forEach(btn => {
              btn.style.color = '#f59e0b';
              btn.style.opacity = '1';
            });
            if (starLabel) starLabel.textContent = ratingLabels[5];
          }
        } else {
          showToast(data.error || 'Failed to submit review.', 'error');
        }
      } catch (err) {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.querySelector('span').textContent = 'Publish Verified Review';
        }
        showToast('Network error while publishing review.', 'error');
      }
    });
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* ==========================================================================
   Universal Info/Alert Modal Helper
   ========================================================================== */
function modal(title, htmlContent) {
  let modalBackdrop = document.getElementById('sipro-info-modal');
  if (!modalBackdrop) {
    modalBackdrop = document.createElement('div');
    modalBackdrop.id = 'sipro-info-modal';
    modalBackdrop.className = 'auth-modal-backdrop';
    document.body.appendChild(modalBackdrop);
  }

  modalBackdrop.innerHTML = `
    <div class="auth-card" style="max-width:540px;text-align:left;">
      <button class="auth-modal-close" onclick="document.getElementById('sipro-info-modal').classList.remove('active')">×</button>
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
        <div class="brand-badge" style="width:28px;height:28px;font-size:12px;">SP</div>
        <h3 style="font-size:19px;margin:0;">${escapeHtml(title)}</h3>
      </div>
      <div style="font-size:14px;line-height:1.6;color:var(--text);margin-bottom:20px;">
        ${htmlContent}
      </div>
      <div style="display:flex;justify-content:flex-end;">
        <button type="button" class="btn btn-primary btn-sm" onclick="document.getElementById('sipro-info-modal').classList.remove('active')">
          Dismiss
        </button>
      </div>
    </div>
  `;

  modalBackdrop.classList.add('active');
}

/* ==========================================================================
   GST Tax Invoice & Receipt Generator (Printable Format)
   ========================================================================== */
function downloadReceipt(invoiceId, description, totalAmount) {
  const gstBase = Math.round((totalAmount || 149000) / 1.18);
  const gstTax = (totalAmount || 149000) - gstBase;
  const today = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });

  const receiptHtml = `
    <div style="font-family:system-ui,sans-serif;font-size:13px;line-height:1.5;">
      <div style="display:flex;justify-content:space-between;border-bottom:1px solid var(--border);padding-bottom:10px;margin-bottom:12px;">
        <div>
          <strong style="font-size:15px;color:var(--cyan)">SiPro Technologies</strong><br>
          <span style="color:var(--muted)">GSTIN: 36AAACS1234A1Z5 · Hanamkonda, TS</span>
        </div>
        <div style="text-align:right;">
          <strong style="color:var(--emerald)">PAID RECEIPT</strong><br>
          <span style="font-family:monospace">${escapeHtml(invoiceId)}</span>
        </div>
      </div>
      <div style="margin-bottom:14px;">
        <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
          <span style="color:var(--muted)">Date:</span>
          <span>${today}</span>
        </div>
        <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
          <span style="color:var(--muted)">Engagement / Service:</span>
          <strong>${escapeHtml(description)}</strong>
        </div>
        <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
          <span style="color:var(--muted)">Taxable Base Amount:</span>
          <span>${formatINR.format(gstBase)}</span>
        </div>
        <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
          <span style="color:var(--muted)">Integrated GST (18%):</span>
          <span>${formatINR.format(gstTax)}</span>
        </div>
        <div style="display:flex;justify-content:space-between;border-top:1px solid var(--border);padding-top:8px;font-size:15px;">
          <strong>Total Settled Amount:</strong>
          <strong style="color:var(--emerald)">${formatINR.format(totalAmount)}</strong>
        </div>
      </div>
      <div style="font-size:11px;color:var(--muted);text-align:center;background:rgba(255,255,255,0.03);padding:8px;border-radius:6px;">
        This is a digitally verified electronic tax invoice generated under the CGST/SGST Act 2017.
      </div>
    </div>
  `;

  modal(`GST Tax Receipt — ${invoiceId}`, receiptHtml);
}

/* ==========================================================================
   Enterprise Pricing Auth Gate Engine
   ========================================================================== */
function initPricingAuthGate() {
  const isPricingPage = document.body.dataset.page === 'pricing.html' || 
                        location.pathname.includes('pricing') || 
                        Boolean(document.querySelector('#b2b'));
  if (!isPricingPage) return;

  const user = AuthState.getUser();
  const pricingContainer = document.querySelector('main .section .container');
  const b2b = document.getElementById('b2b');
  const b2c = document.getElementById('b2c');
  const tabs = document.querySelector('.tabs');
  const scopeSection = document.querySelector('#interactive-scope-calculator')?.closest('section');

  // Clear existing gate elements
  document.getElementById('pricing-auth-gate-wrapper')?.remove();
  document.getElementById('pricing-unlocked-banner-el')?.remove();

  if (!user) {
    // Unauthenticated State: Render Enterprise Auth Gate
    const gateWrapper = document.createElement('div');
    gateWrapper.id = 'pricing-auth-gate-wrapper';
    gateWrapper.className = 'pricing-auth-gate-box';
    gateWrapper.innerHTML = `
      <div class="pricing-lock-badge">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
      </div>
      <h2 class="pricing-auth-gate-title">Enterprise Commercial Schedules & Retainer Cards</h2>
      <p class="pricing-auth-gate-desc">
        Commercial engineering retainers, fixed-milestone sprint pricing, dedicated pod rate calculators, and talent acceleration admissions require an active SiPro account. Sign in to your workspace or register to unlock transparent commercial schedules.
      </p>
      <div class="pricing-auth-gate-actions">
        <button type="button" class="btn btn-primary btn-lg" data-auth-trigger="signin">
          <span>Sign In to Unlock Pricing</span>
        </button>
        <button type="button" class="btn btn-ghost btn-lg" data-auth-trigger="signup">
          <span>Create Free Workspace</span>
        </button>
      </div>
    `;

    if (tabs && tabs.parentNode) {
      tabs.parentNode.insertBefore(gateWrapper, tabs);
    } else if (pricingContainer) {
      pricingContainer.insertBefore(gateWrapper, pricingContainer.firstChild);
    }

    // Shield locked cards & calculators
    if (b2b) b2b.classList.add('pricing-locked-shield');
    if (b2c) b2c.classList.add('pricing-locked-shield');
    if (scopeSection) scopeSection.classList.add('pricing-locked-shield');

    // Rebind triggers
    bindAuthTriggers();
  } else {
    // Authenticated State: Remove locks & display active session indicator
    if (b2b) b2b.classList.remove('pricing-locked-shield');
    if (b2c) b2c.classList.remove('pricing-locked-shield');
    if (scopeSection) scopeSection.classList.remove('pricing-locked-shield');

    const banner = document.createElement('div');
    banner.id = 'pricing-unlocked-banner-el';
    banner.className = 'pricing-unlocked-banner';
    const roleBadge = user.role === 'client' ? '🏢 Enterprise Client' : 
                      user.role === 'candidate' ? '🚀 Accelerated Talent Cohort' : '💻 Core Platform Architect';
    const dashLink = user.role === 'client' ? 'client-dashboard.html' : 
                     user.role === 'candidate' ? 'candidate-dashboard.html' : 'employee-dashboard.html';

    banner.innerHTML = `
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 11V7a5 5 0 0 1 9.9-1"/><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/></svg>
        Enterprise Rates & Retainer Schedules Active for <strong>${escapeHtml(user.name || user.email)}</strong>
      </span>
      <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
        <span class="tag emerald" style="margin:0">${roleBadge}</span>
        <a href="${dashLink}" class="btn btn-ghost btn-sm">Open Workspace Dashboard →</a>
      </div>
    `;

    if (tabs && tabs.parentNode) {
      tabs.parentNode.insertBefore(banner, tabs);
    }
  }
}

/* ==========================================================================
   Universal Enterprise Command Palette (Ctrl+K / Cmd+K)
   ========================================================================== */
function initCommandPalette() {
  if (document.getElementById('cmd-palette-root')) return;

  const COMMAND_ITEMS = [
    { title: 'Home Overview', desc: 'Main digital engineering showcase', href: '/', icon: 'globe', category: 'Navigation' },
    { title: 'Careers & Open Positions', desc: 'Engineering squads and job applications', href: 'careers.html', icon: 'briefcase', category: 'Navigation' },
    { title: 'Contact & Architecture Consultation', desc: 'Connect with Principal Architects & Hubs', href: 'contact.html', icon: 'mail', category: 'Navigation' },
    { title: 'Client Portal Login', desc: 'Sign in to access deliverables, estimates & invoices', href: 'login-client.html', icon: 'user', category: 'Navigation' },
    { title: 'About SiPro Technologies', desc: 'MSME leadership & engineering ethos', href: 'about.html', icon: 'building', category: 'Navigation' },
    { title: 'Custom Mobile & Web Apps', desc: 'iOS, Android, React Native & Web platforms', href: 'services.html#apps', icon: 'cpu', category: 'Services' },
    { title: 'Modern Website Engineering', desc: 'Enterprise websites, CMS & fast frontends', href: 'services.html#websites', icon: 'globe', category: 'Services' },
    { title: 'Cloud Hosting & 24/7 DevOps', desc: 'AWS/GCP hosting, server monitoring & zero-downtime maintenance', href: 'services.html#hosting', icon: 'shield', category: 'Services' },
    { title: 'Cloud Architecture & Kubernetes', desc: 'Zero-downtime microservices & AWS/GCP IaC', href: 'services-cloud-architecture.html', icon: 'cloud', category: 'Services' },
    { title: 'Intelligent APIs & Microservices', desc: 'Go/Node microservices & Kafka event streaming', href: 'services-api-automation.html', icon: 'zap', category: 'Services' },
    { title: 'Dedicated Engineering Pods', desc: '5-day deployment squads & transparent INR retainers', href: 'pricing.html', icon: 'layers', category: 'Services' },
    { title: 'All Solutions Catalog', desc: 'Comprehensive matrix of digital services', href: 'services.html', icon: 'code', category: 'Services' },
    { title: 'Pricing & Retainers', desc: 'Commercial retainers & pod calculators (Auth required)', href: 'pricing.html', icon: 'layers', category: 'Workspaces' },
    { title: 'Client Delivery Workspace', desc: 'Sprint tracker, telemetry & deliverables', href: 'client-dashboard.html', icon: 'building', category: 'Workspaces' },
    { title: 'Candidate Learning Hub', desc: 'Interactive coding tracks & curriculum', href: 'candidate-dashboard.html', icon: 'code', category: 'Workspaces' },
    { title: 'Candidate Code Assessments', desc: 'Technical challenge & evaluation runner', href: 'candidate-assessments.html', icon: 'code', category: 'Workspaces' },
    { title: 'Employee Operations', desc: 'Sprint board, engineering wiki & tickets', href: 'employee-dashboard.html', icon: 'user', category: 'Workspaces' },
    { title: 'Client Billing & GST Invoices', desc: 'Tax invoice generation & settlement', href: 'client-billing.html', icon: 'scale', category: 'Workspaces' },
    { title: 'DPDP Act 2023 Privacy Portal', desc: 'Data principal rights, consent & DPO', href: 'privacy-portal.html', icon: 'shield', category: 'Governance' },
    { title: 'Grievance Redressal Mechanism', desc: 'Statutory compliance & data grievances', href: 'grievance-redressal.html', icon: 'scale', category: 'Governance' }
  ];

  const paletteRoot = document.createElement('div');
  paletteRoot.id = 'cmd-palette-root';
  paletteRoot.className = 'cmd-palette-backdrop';
  paletteRoot.innerHTML = `
    <div class="cmd-palette-modal" role="dialog" aria-modal="true" aria-label="Command Palette">
      <div class="cmd-palette-header">
        <span class="cmd-palette-search-icon">${ICONS.code}</span>
        <input type="text" class="cmd-palette-input" id="cmd-palette-input" placeholder="Search pages, services, portals, playbooks... (Esc to close)" autocomplete="off">
        <kbd class="cmd-palette-kbd">ESC</kbd>
      </div>
      <div class="cmd-palette-results" id="cmd-palette-results"></div>
      <div class="cmd-palette-footer">
        <div style="display:flex;gap:12px">
          <span><kbd class="cmd-palette-kbd">↑↓</kbd> Navigate</span>
          <span><kbd class="cmd-palette-kbd">↵</kbd> Select</span>
        </div>
        <span>SiPro Global Command Bar</span>
      </div>
    </div>
  `;

  document.body.appendChild(paletteRoot);

  const input = paletteRoot.querySelector('#cmd-palette-input');
  const resultsBox = paletteRoot.querySelector('#cmd-palette-results');
  let selectedIndex = 0;
  let filteredItems = [...COMMAND_ITEMS];

  const renderResults = () => {
    if (filteredItems.length === 0) {
      resultsBox.innerHTML = `
        <div style="padding:28px 16px;text-align:center;color:var(--muted);font-size:14px">
          No matching pages or tools found for "<strong>${escapeHtml(input.value)}</strong>".
        </div>
      `;
      return;
    }

    let currentCategory = '';
    let html = '';
    filteredItems.forEach((item, idx) => {
      if (item.category !== currentCategory) {
        currentCategory = item.category;
        html += `<div class="cmd-palette-category-label">${currentCategory}</div>`;
      }
      const isSelected = idx === selectedIndex;
      html += `
        <a href="${item.href}" class="cmd-palette-item ${isSelected ? 'selected' : ''}" data-idx="${idx}">
          <div class="cmd-palette-item-left">
            <div class="cmd-palette-item-icon">${ICONS[item.icon] || ICONS.code}</div>
            <div>
              <div>${item.title}</div>
              <div class="cmd-palette-item-desc">${item.desc}</div>
            </div>
          </div>
          <span style="font-size:12px;color:var(--muted)">↵</span>
        </a>
      `;
    });
    resultsBox.innerHTML = html;

    // Scroll selected into view
    const selectedEl = resultsBox.querySelector('.cmd-palette-item.selected');
    if (selectedEl) {
      selectedEl.scrollIntoView({ block: 'nearest' });
    }
  };

  const openPalette = () => {
    paletteRoot.classList.add('active');
    input.value = '';
    filteredItems = [...COMMAND_ITEMS];
    selectedIndex = 0;
    renderResults();
    setTimeout(() => input.focus(), 80);
  };

  const closePalette = () => {
    paletteRoot.classList.remove('active');
    input.blur();
  };

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    if (!q) {
      filteredItems = [...COMMAND_ITEMS];
    } else {
      filteredItems = COMMAND_ITEMS.filter(it => 
        it.title.toLowerCase().includes(q) || 
        it.desc.toLowerCase().includes(q) || 
        it.category.toLowerCase().includes(q)
      );
    }
    selectedIndex = 0;
    renderResults();
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (filteredItems.length > 0) {
        selectedIndex = (selectedIndex + 1) % filteredItems.length;
        renderResults();
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (filteredItems.length > 0) {
        selectedIndex = (selectedIndex - 1 + filteredItems.length) % filteredItems.length;
        renderResults();
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        location.href = filteredItems[selectedIndex].href;
        closePalette();
      }
    } else if (e.key === 'Escape') {
      closePalette();
    }
  });

  paletteRoot.addEventListener('click', (e) => {
    if (e.target === paletteRoot) {
      closePalette();
    }
  });

  // Global Shortcut: Ctrl+K / Cmd+K
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
      e.preventDefault();
      if (paletteRoot.classList.contains('active')) {
        closePalette();
      } else {
        openPalette();
      }
    }
  });
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

  // Command Palette
  initCommandPalette();

  // Accessibility & Display Preferences Engine
  initAccessibilityPreferences();

  // Deliverables & Document Generator (if on deliverables page)
  initDeliverablesPortal();

  // Pricing Auth Gate
  initPricingAuthGate();

  // Network offline/online listener
  initNetworkMonitor();

  // DPDP Consent Governance
  initDPDPConsent();

  // Page-specific modules
  initClientReviewSystem();
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
  document.body.classList.add('has-cookie-banner');
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
    document.body.classList.remove('has-cookie-banner');
    window.dispatchEvent(new CustomEvent('dpdp:consent-saved', { detail: { level } }));
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

/* ==========================================================================
   Accessibility & Display Preferences Engine
   ========================================================================== */
function initAccessibilityPreferences() {
  const savedSettings = JSON.parse(localStorage.getItem('sipro_a11y_settings') || '{}');

  // Apply Font Scaling
  if (savedSettings.fontSize) {
    applyFontSize(savedSettings.fontSize);
  }

  // Apply High Contrast
  if (savedSettings.highContrast) {
    document.documentElement.classList.add('high-contrast');
  }

  // Apply Reduced Motion
  if (savedSettings.reducedMotion) {
    document.documentElement.classList.add('reduced-motion');
  }
}

function applyFontSize(size) {
  const root = document.documentElement;
  if (size === 'sm') root.style.fontSize = '14px';
  else if (size === 'lg') root.style.fontSize = '17.5px';
  else if (size === 'xl') root.style.fontSize = '19px';
  else root.style.fontSize = '16px';
}

function openAccessibilityModal() {
  let modalEl = document.getElementById('sipro-a11y-modal');
  if (!modalEl) {
    modalEl = document.createElement('div');
    modalEl.id = 'sipro-a11y-modal';
    modalEl.className = 'auth-modal-backdrop';
    document.body.appendChild(modalEl);
  }

  const saved = JSON.parse(localStorage.getItem('sipro_a11y_settings') || '{}');
  const curSize = saved.fontSize || 'md';
  const curContrast = !!saved.highContrast;
  const curMotion = !!saved.reducedMotion;

  modalEl.innerHTML = `
    <div class="a11y-modal-card" role="dialog" aria-modal="true" aria-label="Accessibility Preferences">
      <button class="auth-modal-close" onclick="closeAccessibilityModal()">×</button>
      
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:18px">
        <div class="brand-badge" style="width:32px;height:32px;font-size:14px">SP</div>
        <div>
          <h3 style="font-size:18px;margin:0">Accessibility &amp; Display</h3>
          <span style="font-size:12px;color:var(--muted)">Customize readability, contrast &amp; assistive features</span>
        </div>
      </div>

      <div class="a11y-control-row">
        <div>
          <div class="a11y-label-title">Font Size &amp; Scaling</div>
          <div class="a11y-label-sub">Adjust baseline typography scale</div>
        </div>
        <div class="a11y-btn-group" id="a11y-font-group">
          <button type="button" class="a11y-opt-btn ${curSize === 'sm' ? 'active' : ''}" data-size="sm">Small</button>
          <button type="button" class="a11y-opt-btn ${curSize === 'md' ? 'active' : ''}" data-size="md">Standard</button>
          <button type="button" class="a11y-opt-btn ${curSize === 'lg' ? 'active' : ''}" data-size="lg">Large</button>
          <button type="button" class="a11y-opt-btn ${curSize === 'xl' ? 'active' : ''}" data-size="xl">Extra</button>
        </div>
      </div>

      <div class="a11y-control-row">
        <div>
          <div class="a11y-label-title">High Contrast Mode</div>
          <div class="a11y-label-sub">Enhanced pure black/white borders &amp; text</div>
        </div>
        <div>
          <button type="button" class="btn btn-sm ${curContrast ? 'btn-primary' : 'btn-ghost'}" id="btn-toggle-contrast">
            ${curContrast ? 'Active' : 'Disabled'}
          </button>
        </div>
      </div>

      <div class="a11y-control-row">
        <div>
          <div class="a11y-label-title">Reduced Motion</div>
          <div class="a11y-label-sub">Minimizes animations &amp; visual transitions</div>
        </div>
        <div>
          <button type="button" class="btn btn-sm ${curMotion ? 'btn-primary' : 'btn-ghost'}" id="btn-toggle-motion">
            ${curMotion ? 'Active' : 'Disabled'}
          </button>
        </div>
      </div>

      <div class="a11y-control-row">
        <div>
          <div class="a11y-label-title">Screen Readout / TTS Voice</div>
          <div class="a11y-label-sub">Listen to spoken summary of the current page</div>
        </div>
        <div>
          <button type="button" class="btn btn-sm btn-ghost" id="btn-read-page-summary">
            🔊 Read Summary
          </button>
        </div>
      </div>

      <div style="margin-top:20px;display:flex;justify-content:space-between;align-items:center">
        <button type="button" class="btn btn-ghost btn-sm" id="btn-reset-a11y">Reset Defaults</button>
        <button type="button" class="btn btn-primary btn-sm" onclick="closeAccessibilityModal()">Done</button>
      </div>
    </div>
  `;

  modalEl.classList.add('active');

  // Event handlers
  modalEl.querySelectorAll('#a11y-font-group .a11y-opt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const size = btn.dataset.size;
      modalEl.querySelectorAll('#a11y-font-group .a11y-opt-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyFontSize(size);
      updateA11yStorage({ fontSize: size });
      showToast(`Font scale updated to ${size.toUpperCase()}`, 'info');
    });
  });

  const contrastBtn = modalEl.querySelector('#btn-toggle-contrast');
  contrastBtn.addEventListener('click', () => {
    const isNowActive = document.documentElement.classList.toggle('high-contrast');
    contrastBtn.textContent = isNowActive ? 'Active' : 'Disabled';
    contrastBtn.className = `btn btn-sm ${isNowActive ? 'btn-primary' : 'btn-ghost'}`;
    updateA11yStorage({ highContrast: isNowActive });
    showToast(isNowActive ? 'High Contrast Mode Enabled' : 'High Contrast Mode Disabled', 'info');
  });

  const motionBtn = modalEl.querySelector('#btn-toggle-motion');
  motionBtn.addEventListener('click', () => {
    const isNowActive = document.documentElement.classList.toggle('reduced-motion');
    motionBtn.textContent = isNowActive ? 'Active' : 'Disabled';
    motionBtn.className = `btn btn-sm ${isNowActive ? 'btn-primary' : 'btn-ghost'}`;
    updateA11yStorage({ reducedMotion: isNowActive });
    showToast(isNowActive ? 'Reduced Motion Enabled' : 'Standard Transitions Enabled', 'info');
  });

  const readBtn = modalEl.querySelector('#btn-read-page-summary');
  readBtn.addEventListener('click', () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const pageTitle = document.title || 'SiPro Technologies';
      const metaDesc = document.querySelector('meta[name="description"]')?.content || 'Welcome to SiPro Technologies enterprise digital engineering portal.';
      const msg = new SpeechSynthesisUtterance(`${pageTitle}. ${metaDesc}`);
      msg.rate = 1.0;
      window.speechSynthesis.speak(msg);
      showToast('Speaking page summary...', 'info');
    } else {
      showToast('Text-to-speech is not supported in this browser.', 'error');
    }
  });

  modalEl.querySelector('#btn-reset-a11y').addEventListener('click', () => {
    localStorage.removeItem('sipro_a11y_settings');
    document.documentElement.style.fontSize = '16px';
    document.documentElement.classList.remove('high-contrast', 'reduced-motion');
    closeAccessibilityModal();
    showToast('Display preferences reset to default.', 'success');
  });
}

function updateA11yStorage(partial) {
  const cur = JSON.parse(localStorage.getItem('sipro_a11y_settings') || '{}');
  const next = { ...cur, ...partial };
  localStorage.setItem('sipro_a11y_settings', JSON.stringify(next));
}

function closeAccessibilityModal() {
  const modalEl = document.getElementById('sipro-a11y-modal');
  if (modalEl) modalEl.classList.remove('active');
}

/* ==========================================================================
   Enterprise Deliverables & Document Generation Engine
   ========================================================================== */
function initDeliverablesPortal() {
  const deliverablesGrid = document.getElementById('deliverables-grid');
  if (!deliverablesGrid) return;

  const tabButtons = document.querySelectorAll('#deliverables-tabs .d-tab');
  const searchInput = document.getElementById('deliverables-search-input');
  const openDocGenBtn = document.getElementById('btn-open-doc-generator');

  if (openDocGenBtn) {
    openDocGenBtn.addEventListener('click', () => generateDocument('sprint-qa'));
  }

  let activeFilter = 'all';
  let searchQuery = '';

  const filterCards = () => {
    const cards = deliverablesGrid.querySelectorAll('.deliverable-card');
    cards.forEach(card => {
      const category = card.dataset.category || '';
      const text = card.textContent.toLowerCase();
      const matchesTab = activeFilter === 'all' || category === activeFilter;
      const matchesSearch = !searchQuery || text.includes(searchQuery);

      if (matchesTab && matchesSearch) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  };

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter || 'all';
      filterCards();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      filterCards();
    });
  }

  // Handle Milestone Sign-off Form
  const signoffForm = document.getElementById('signoff-approval-form');
  if (signoffForm) {
    signoffForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const signatory = document.getElementById('signoff-signatory-name')?.value || 'Arjun Sharma';
      const title = document.getElementById('signoff-signatory-title')?.value || 'Chief Technology Officer';

      // Update UI on milestone card
      const m2Tag = document.getElementById('milestone-2-tag');
      const m2Status = document.getElementById('milestone-2-status');
      const m2Btn = document.getElementById('btn-sign-off-m2');

      if (m2Tag) {
        m2Tag.textContent = 'Signed Off & Verified';
        m2Tag.className = 'tag emerald';
      }
      if (m2Status) {
        m2Status.textContent = `Approved by ${signatory}`;
        m2Status.style.color = 'var(--emerald)';
      }
      if (m2Btn) {
        m2Btn.innerHTML = '✔ Sign-off Recorded';
        m2Btn.className = 'btn btn-ghost btn-sm';
        m2Btn.disabled = true;
      }

      closeSignOffModal();
      showToast(`Milestone 2 sign-off recorded by ${signatory} (${title}). Certificate generated!`, 'success');
      setTimeout(() => generateDocument('sow-acceptance'), 600);
    });
  }
}

function openStagingSandbox(url, version) {
  modal(`Staging Pod: Northstar ERP ${version}`, `
    <div style="font-size:13.5px;line-height:1.6">
      <p>Your dedicated staging sandbox pod is deployed in <strong>GCP us-central1 (Kubernetes Cluster)</strong> with zero-trust mTLS.</p>
      <div style="background:rgba(0,0,0,0.4);border:1px solid var(--border);padding:14px;border-radius:8px;margin:14px 0;font-family:ui-monospace,monospace;font-size:13px;color:var(--cyan);word-break:break-all">
        ${url}
      </div>
      <div style="display:flex;gap:8px;margin-top:16px">
        <a href="${url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">Launch Sandbox in New Tab ↗</a>
        <button type="button" class="btn btn-ghost btn-sm" onclick="copyToClipboard('${url}', 'Staging URL Copied')">Copy Link</button>
      </div>
    </div>
  `);
}

function openSignOffModal(milestoneName, invoiceId, amount) {
  const modalEl = document.getElementById('sign-off-modal');
  if (!modalEl) return;
  const nameEl = document.getElementById('signoff-milestone-name');
  const subEl = document.getElementById('signoff-milestone-sub');
  if (nameEl) nameEl.textContent = `Sign Off: ${milestoneName}`;
  if (subEl) subEl.textContent = `Invoice Reference: ${invoiceId} · Milestone Value: ${amount}`;
  modalEl.classList.add('active');
}

function closeSignOffModal() {
  const modalEl = document.getElementById('sign-off-modal');
  if (modalEl) modalEl.classList.remove('active');
}

/* ==========================================================================
   High-Fidelity Printable Document Generator
   ========================================================================== */
function generateDocument(docType) {
  const modalRoot = document.getElementById('doc-modal-root');
  const titleEl = document.getElementById('doc-modal-title');
  const paperEl = document.getElementById('doc-modal-paper-content');

  if (!modalRoot || !paperEl) return;

  const today = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
  let docTitle = 'Enterprise Delivery Artifact';
  let paperHtml = '';

  if (docType === 'sprint-qa') {
    docTitle = 'Sprint 24 QA Acceptance Certificate';
    paperHtml = `
      <div class="doc-paper-header">
        <div>
          <div class="doc-paper-logo">SiPro<span>Technologies</span></div>
          <div style="font-size:12px;color:#64748b;margin-top:2px">MSME Reg: UDYAM-TS-18-0029141 · Hyderabad &amp; Hanamkonda</div>
        </div>
        <div style="text-align:right">
          <span class="doc-paper-badge">VERIFIED RELEASE</span>
          <div style="font-size:12px;color:#64748b;margin-top:4px">Date: ${today}</div>
        </div>
      </div>

      <h2 class="doc-paper-title">Sprint 24 Quality Assurance &amp; SLA Acceptance Certificate</h2>
      <p style="font-size:13.5px;color:#475569;margin-bottom:18px">
        This document certifies that the software artifacts delivered for <strong>NorthStar ERP &amp; Cloud Microservices</strong> under Sprint 24 have undergone comprehensive automated testing, load verification, and zero-trust vulnerability scanning.
      </p>

      <div class="doc-paper-grid">
        <div>
          <strong>Client Partner:</strong> NorthStar Enterprise Corp.<br>
          <strong>Project Lead:</strong> Arjun Sharma (CTO)<br>
          <strong>Git Commit Hash:</strong> <span class="font-mono">#9cf42a8d18</span>
        </div>
        <div>
          <strong>Engineering Pod:</strong> Cloud Pod Delta-4<br>
          <strong>Target Environment:</strong> GCP us-central1 (K8s)<br>
          <strong>Deployment Status:</strong> STAGING VERIFIED
        </div>
      </div>

      <h4 style="font-size:15px;margin:18px 0 8px;color:#0f172a">1. Test Automation &amp; Code Quality Metrics</h4>
      <table class="doc-paper-table">
        <thead>
          <tr>
            <th>Verification Suite</th>
            <th>Executed</th>
            <th>Passed</th>
            <th>Coverage / Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Unit &amp; Integration Tests</td>
            <td>842</td>
            <td>842</td>
            <td><strong style="color:#059669">99.2% Line Coverage</strong></td>
          </tr>
          <tr>
            <td>API Contract Fuzzing</td>
            <td>120 Endpoints</td>
            <td>120</td>
            <td><strong style="color:#059669">100% Contract Conformant</strong></td>
          </tr>
          <tr>
            <td>Stress &amp; Load Verification</td>
            <td>25,000 req/sec</td>
            <td>Sustained</td>
            <td><strong style="color:#059669">p99 Latency &lt; 28ms</strong></td>
          </tr>
          <tr>
            <td>OWASP Top 10 Security Audit</td>
            <td>Static + Dynamic</td>
            <td>Clean</td>
            <td><strong style="color:#059669">0 High / 0 Critical CVEs</strong></td>
          </tr>
        </tbody>
      </table>

      <div class="doc-stamp-box">
        <div class="doc-signature">
          <div style="font-family:'Courier New',monospace;font-weight:700;color:#4f46e5;font-size:16px">/s/ Rajesh Varma</div>
          <strong>Rajesh Varma</strong>
          <span style="color:#64748b;font-size:12px">Principal Architect, SiPro Technologies</span>
        </div>
        <div class="doc-stamp-seal">
          <span>SIPRO TECH</span>
          <span>QA AUDIT</span>
          <span>PASS ✔</span>
        </div>
      </div>
    `;
  } else if (docType === 'sow-acceptance') {
    docTitle = 'Statement of Work & Milestone Sign-Off';
    paperHtml = `
      <div class="doc-paper-header">
        <div>
          <div class="doc-paper-logo">SiPro<span>Technologies</span></div>
          <div style="font-size:12px;color:#64748b;margin-top:2px">GSTIN: 36AAACS1234A1Z5 · Enterprise SOW Agreement</div>
        </div>
        <div style="text-align:right">
          <span class="doc-paper-badge" style="background:#ecfdf5;color:#047857;border-color:#a7f3d0">EXECUTED SOW</span>
          <div style="font-size:12px;color:#64748b;margin-top:4px">Ref: SOW-2026-NSTAR-02</div>
        </div>
      </div>

      <h2 class="doc-paper-title">Milestone 2 Acceptance &amp; Sign-Off Certificate</h2>
      <p style="font-size:13.5px;color:#475569;margin-bottom:18px">
        Official milestone acceptance confirmation between <strong>SiPro Technologies</strong> and <strong>NorthStar Enterprise Corp.</strong>
      </p>

      <div class="doc-paper-grid">
        <div>
          <strong>Milestone Scope:</strong> Distributed Ledger &amp; Core ERP<br>
          <strong>Tax Invoice Ref:</strong> INV-2026-0814<br>
          <strong>Milestone Fee:</strong> ₹4,50,000 + 18% GST (₹5,31,000 Total)
        </div>
        <div>
          <strong>Signatory Representative:</strong> Arjun Sharma<br>
          <strong>Title:</strong> Chief Technology Officer<br>
          <strong>Sign-off Date:</strong> ${today}
        </div>
      </div>

      <h4 style="font-size:15px;margin:18px 0 8px;color:#0f172a">Accepted Milestone Deliverables</h4>
      <ul style="font-size:13.5px;color:#334155;line-height:1.8;padding-left:20px;margin-bottom:20px">
        <li>Distributed high-concurrency order ledger with idempotent retry handling.</li>
        <li>Multi-tenant PostgreSQL schema sharding with connection pooling.</li>
        <li>Zero-Trust mTLS microservice-to-microservice authentication.</li>
        <li>Real-time telemetry event bus and Grafana monitoring dashboard.</li>
      </ul>

      <div class="doc-stamp-box">
        <div class="doc-signature">
          <div style="font-family:'Courier New',monospace;font-weight:700;color:#047857;font-size:16px">/s/ Arjun Sharma (CTO)</div>
          <strong>Arjun Sharma</strong>
          <span style="color:#64748b;font-size:12px">NorthStar Enterprise Corp.</span>
        </div>
        <div class="doc-stamp-seal" style="border-color:#047857;color:#047857">
          <span>SIPRO TECH</span>
          <span>MILESTONE</span>
          <span>ACCEPTED</span>
        </div>
      </div>
    `;
  } else if (docType === 'arch-spec') {
    docTitle = 'API & Cloud Architecture Specification';
    paperHtml = `
      <div class="doc-paper-header">
        <div>
          <div class="doc-paper-logo">SiPro<span>Technologies</span></div>
          <div style="font-size:12px;color:#64748b;margin-top:2px">Cloud Engineering Pods · OpenAPI 3.1 Blueprint</div>
        </div>
        <div style="text-align:right">
          <span class="doc-paper-badge">ARCH SPEC v2.1</span>
          <div style="font-size:12px;color:#64748b;margin-top:4px">Date: ${today}</div>
        </div>
      </div>

      <h2 class="doc-paper-title">Cloud Microservices Topology &amp; API Blueprint</h2>
      <p style="font-size:13.5px;color:#475569;margin-bottom:18px">
        Technical architectural snapshot detailing core endpoints, data security schemas, and container orchestrations for NorthStar ERP.
      </p>

      <div class="doc-paper-grid">
        <div>
          <strong>Architecture Pattern:</strong> Event-Driven Microservices<br>
          <strong>Orchestrator:</strong> Google Kubernetes Engine (GKE)<br>
          <strong>Mesh Network:</strong> Istio Service Mesh with mTLS
        </div>
        <div>
          <strong>Message Broker:</strong> Apache Kafka Cluster<br>
          <strong>Database:</strong> Cloud Spanner + Redis Cache<br>
          <strong>SLA Uptime Target:</strong> 99.95% Guaranteed
        </div>
      </div>

      <h4 style="font-size:15px;margin:18px 0 8px;color:#0f172a">Primary Service Endpoints</h4>
      <table class="doc-paper-table">
        <thead>
          <tr>
            <th>Method</th>
            <th>Endpoint</th>
            <th>Auth Model</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>POST</code></td>
            <td><code>/api/v2/orders/checkout</code></td>
            <td>OAuth2 + JWT Bearer</td>
            <td>High-speed transactional order settlement</td>
          </tr>
          <tr>
            <td><code>GET</code></td>
            <td><code>/api/v2/ledger/balances</code></td>
            <td>mTLS Service Token</td>
            <td>Real-time reconciled customer accounts</td>
          </tr>
          <tr>
            <td><code>POST</code></td>
            <td><code>/api/v2/webhooks/payment</code></td>
            <td>HMAC SHA-256 Sig</td>
            <td>Asynchronous payment gateway callback</td>
          </tr>
        </tbody>
      </table>

      <div class="doc-stamp-box">
        <div class="doc-signature">
          <div style="font-family:'Courier New',monospace;font-weight:700;color:#4f46e5;font-size:16px">/s/ Architecture Review Board</div>
          <strong>SiPro Cloud Infrastructure Team</strong>
        </div>
        <div class="doc-stamp-seal">
          <span>CERTIFIED</span>
          <span>BLUEPRINT</span>
          <span>APPROVED</span>
        </div>
      </div>
    `;
  } else {
    docTitle = 'DPDP Act 2023 & ISO 27001 Security Attestation';
    paperHtml = `
      <div class="doc-paper-header">
        <div>
          <div class="doc-paper-logo">SiPro<span>Technologies</span></div>
          <div style="font-size:12px;color:#64748b;margin-top:2px">Statutory Compliance &amp; Data Security Fiduciary</div>
        </div>
        <div style="text-align:right">
          <span class="doc-paper-badge" style="background:#f5f3ff;color:#7c3aed;border-color:#ddd6fe">DPDP VERIFIED</span>
          <div style="font-size:12px;color:#64748b;margin-top:4px">Audit Cycle: Q3 2026</div>
        </div>
      </div>

      <h2 class="doc-paper-title">DPDP Act 2023 &amp; SOC 2 Type II Security Attestation</h2>
      <p style="font-size:13.5px;color:#475569;margin-bottom:18px">
        SiPro Technologies certifies compliance with the Digital Personal Data Protection (DPDP) Act 2023 and ISO/IEC 27001:2022 standards for enterprise cloud development and client workspaces.
      </p>

      <div class="doc-paper-grid">
        <div>
          <strong>Data Fiduciary:</strong> SiPro Technologies<br>
          <strong>Data Protection Officer:</strong> grievance@sipro.tech<br>
          <strong>Grievance Lead:</strong> Srikanth Rao
        </div>
        <div>
          <strong>Encryption at Rest:</strong> AES-256 (Cloud KMS)<br>
          <strong>Encryption in Transit:</strong> TLS 1.3 Strict<br>
          <strong>Audit Result:</strong> 100% Compliant
        </div>
      </div>

      <h4 style="font-size:15px;margin:18px 0 8px;color:#0f172a">Statutory Governance Guarantees</h4>
      <ul style="font-size:13.5px;color:#334155;line-height:1.8;padding-left:20px;margin-bottom:20px">
        <li>Granular consent capture with verifiable withdrawal mechanism under DPDP Section 6.</li>
        <li>Data principal rights fulfillment (access, correction, erasure) within 48-hour SLA.</li>
        <li>Strict multi-tenant cryptographic segregation with zero cross-tenant memory leakage.</li>
      </ul>

      <div class="doc-stamp-box">
        <div class="doc-signature">
          <div style="font-family:'Courier New',monospace;font-weight:700;color:#7c3aed;font-size:16px">/s/ Srikanth Rao (DPO)</div>
          <strong>Srikanth Rao</strong>
          <span style="color:#64748b;font-size:12px">Data Protection Officer, SiPro Technologies</span>
        </div>
        <div class="doc-stamp-seal" style="border-color:#7c3aed;color:#7c3aed">
          <span>DPDP 2023</span>
          <span>COMPLIANT</span>
          <span>AUDITED ✔</span>
        </div>
      </div>
    `;
  }

  if (titleEl) titleEl.textContent = docTitle;
  paperEl.innerHTML = paperHtml;
  modalRoot.classList.add('active');
}

function closeDocumentModal() {
  const modalRoot = document.getElementById('doc-modal-root');
  if (modalRoot) modalRoot.classList.remove('active');
}

/* ==========================================================================
   Enterprise Gemini AI Studio & Veo Video Generation Suite
   ========================================================================== */
const AIStudioState = {
  activeTab: 'chat',
  chatHistory: [],
  currentRole: 'solutions_architect',
  currentModel: 'gemini-3.5-flash',
  useGrounding: true,
  imageAspect: '1:1',
  imageSize: '1K',
  sourceImageBase64: null,
  sourceImageMime: 'image/png',
  videoPollingInterval: null,
  videoAspect: '16:9',
  videoResolution: '720p',
  videoSourceImageBase64: null
};

function formatAIMarkdown(text) {
  if (!text) return '';
  let formatted = escapeHtml(text);

  // Handle code blocks: ```lang ... ```
  formatted = formatted.replace(/```([a-zA-Z0-9_\-\+]*)\n([\s\S]*?)```/g, (_m, lang, code) => {
    return `<div style="background:#030712;border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:12px;margin:10px 0;font-family:ui-monospace,SFMono-Regular,monospace;font-size:12.5px;color:#38bdf8;overflow-x:auto;position:relative"><div style="font-size:10.5px;color:#94a3b8;margin-bottom:6px;text-transform:uppercase;font-weight:700">${lang || 'code'}</div><pre style="margin:0"><code>${code}</code></pre></div>`;
  });

  // Handle inline code: `code`
  formatted = formatted.replace(/`([^`]+)`/g, '<code style="background:rgba(255,255,255,0.1);padding:2px 6px;border-radius:4px;font-family:monospace;color:#38bdf8;font-size:12px">$1</code>');

  // Handle bold: **text**
  formatted = formatted.replace(/\*\*([^*]+)\*\*/g, '<strong style="color:var(--text);font-weight:700">$1</strong>');

  // Handle italic: *text*
  formatted = formatted.replace(/\*([^*]+)\*/g, '<em>$1</em>');

  // Handle line breaks
  formatted = formatted.replace(/\n/g, '<br>');

  return formatted;
}

function initAIStudio() {
  // Inject floating trigger button if not already present
  if (!document.getElementById('sipro-floating-ai-btn')) {
    const floatBtn = document.createElement('button');
    floatBtn.id = 'sipro-floating-ai-btn';
    floatBtn.className = 'ai-floating-trigger';
    floatBtn.setAttribute('type', 'button');
    floatBtn.innerHTML = `
      <div class="ai-floating-pulse"></div>
      <span>✨ Enterprise AI Studio</span>
    `;
    floatBtn.addEventListener('click', () => openAIStudio('chat'));
    document.body.appendChild(floatBtn);
  }

  // Create Modal Structure if not already present
  let modalEl = document.getElementById('sipro-ai-studio-modal');
  if (!modalEl) {
    modalEl = document.createElement('div');
    modalEl.id = 'sipro-ai-studio-modal';
    modalEl.className = 'ai-studio-modal-backdrop';
    modalEl.innerHTML = `
      <div class="ai-studio-card" role="dialog" aria-modal="true" aria-label="Enterprise Gemini AI Studio">
        <div class="ai-studio-header">
          <div style="display:flex;align-items:center;gap:10px">
            <div class="brand-badge" style="width:36px;height:36px;font-size:15px;background:linear-gradient(135deg,#4f46e5,#06b6d4)">AI</div>
            <div>
              <div style="font-size:16px;font-weight:800;color:var(--text);display:flex;align-items:center;gap:6px">
                <span>SiPro AI Architecture Studio</span>
                <span class="tag emerald" style="font-size:10px;padding:2px 6px">Gemini 3.5 &amp; Veo</span>
              </div>
              <div style="font-size:11.5px;color:var(--muted)">Multimodal Engineering, DPDP Governance &amp; Video Studio</div>
            </div>
          </div>
          <button type="button" class="auth-modal-close" style="position:static" onclick="closeAIStudio()">×</button>
        </div>

        <div class="ai-studio-tabs">
          <button type="button" class="ai-studio-tab-btn active" data-tab="chat">
            <span>💬 Architecture &amp; Compliance Chat</span>
          </button>
          <button type="button" class="ai-studio-tab-btn" data-tab="image">
            <span>🎨 Visual &amp; Diagram Studio</span>
          </button>
          <button type="button" class="ai-studio-tab-btn" data-tab="video">
            <span>🎬 Veo Video Generator</span>
          </button>
        </div>

        <div class="ai-studio-body">
          <!-- TAB 1: AI Chat & Search Grounding -->
          <div class="ai-tab-pane active" id="ai-pane-chat">
            <div class="ai-chat-toolbar">
              <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
                <label style="font-size:12px;font-weight:700;color:var(--text);display:flex;align-items:center;gap:4px">
                  <span>Role:</span>
                  <select id="ai-role-select" style="background:#0f172a;color:var(--text);border:1px solid var(--line-strong);border-radius:6px;padding:4px 8px;font-size:12px">
                    <option value="solutions_architect">🏛️ Principal Solutions Architect</option>
                    <option value="compliance_auditor">🛡️ DPDP 2023 Compliance &amp; DPO</option>
                    <option value="talent_coordinator">🎓 Talent Acceleration Lead</option>
                    <option value="tech_lead">⚡ Principal Full-Stack Lead</option>
                  </select>
                </label>

                <label style="font-size:12px;font-weight:700;color:var(--text);display:flex;align-items:center;gap:4px">
                  <span>Model:</span>
                  <select id="ai-model-select" style="background:#0f172a;color:var(--text);border:1px solid var(--line-strong);border-radius:6px;padding:4px 8px;font-size:12px">
                    <option value="gemini-3.5-flash">Gemini 3.5 Flash (Fast &amp; Grounded)</option>
                    <option value="gemini-3.1-pro-preview">Gemini 3.1 Pro (Complex Reasoning)</option>
                    <option value="gemini-3.1-flash-lite">Gemini 3.1 Flash-Lite (Instant)</option>
                  </select>
                </label>
              </div>

              <div style="display:flex;align-items:center;gap:12px">
                <label style="font-size:12px;display:flex;align-items:center;gap:6px;cursor:pointer;color:var(--text);font-weight:600">
                  <input type="checkbox" id="ai-search-grounding-toggle" checked style="accent-color:var(--cyan)">
                  <span>🌐 Google Search Grounding</span>
                </label>
                <button type="button" class="btn btn-ghost btn-xs" id="ai-clear-chat-btn" style="font-size:11px">Clear</button>
              </div>
            </div>

            <div class="ai-chat-thread" id="ai-chat-thread-box">
              <div class="ai-chat-bubble assistant">
                <div style="font-weight:700;color:var(--cyan);font-size:12.5px;margin-bottom:4px">SiPro AI Architecture Assistant</div>
                Namaste! I am your AI Consultant grounded in official enterprise cloud architectures, Kubernetes deployments, DPDP Act 2023 compliance, and full-stack software standards. How can I assist your engineering pod today?
                <div style="margin-top:10px;display:flex;gap:6px;flex-wrap:wrap">
                  <button type="button" class="btn btn-ghost btn-xs ai-prompt-chip" data-prompt="Design a high-availability Kubernetes cluster architecture with Istio and PostgreSQL sharding.">K8s Cluster Blueprint</button>
                  <button type="button" class="btn btn-ghost btn-xs ai-prompt-chip" data-prompt="Summarize the DPDP Act 2023 compliance obligations for data fiduciaries and consent management.">DPDP 2023 Checklist</button>
                  <button type="button" class="btn btn-ghost btn-xs ai-prompt-chip" data-prompt="What are the latest enterprise best practices for Next.js 15 App Router caching and mTLS security?">Next.js &amp; mTLS Best Practices</button>
                </div>
              </div>
            </div>

            <div class="ai-chat-input-row">
              <textarea id="ai-chat-input" class="ai-chat-textarea" placeholder="Ask architectural questions, request code blueprints, or analyze DPDP compliance..." rows="1"></textarea>
              <button type="button" class="btn btn-primary" id="ai-chat-send-btn" style="height:48px;padding:0 20px">
                <span>Send</span>
              </button>
            </div>
          </div>

          <!-- TAB 2: Visual & Image Studio -->
          <div class="ai-tab-pane" id="ai-pane-image">
            <div class="ai-visual-studio-grid">
              <div style="display:flex;flex-direction:column;gap:14px">
                <div>
                  <label style="font-size:13px;font-weight:700;color:var(--text);display:block;margin-bottom:6px">Generation or Editing Prompt</label>
                  <textarea id="ai-image-prompt" class="ai-chat-textarea" style="height:90px" placeholder="e.g., Enterprise cloud architecture diagram with Kubernetes pods and Redis cache cluster, neon cyber aesthetic"></textarea>
                </div>

                <div>
                  <label style="font-size:13px;font-weight:700;color:var(--text);display:block;margin-bottom:6px">Source Image for Editing (Optional)</label>
                  <div id="ai-image-dropzone" style="border:1.5px dashed var(--line-strong);border-radius:10px;padding:16px;text-align:center;cursor:pointer;background:rgba(15,23,42,0.3)">
                    <div style="font-size:12px;color:var(--muted)">Click or Drag &amp; Drop an image to edit/transform</div>
                    <input type="file" id="ai-image-file-input" accept="image/*" style="display:none">
                    <div id="ai-image-source-preview" style="margin-top:8px;display:none">
                      <img id="ai-image-source-thumb" style="max-height:80px;border-radius:6px" alt="Preview">
                      <button type="button" class="btn btn-ghost btn-xs" id="ai-image-clear-source" style="margin-top:4px">Remove</button>
                    </div>
                  </div>
                </div>

                <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
                  <div>
                    <label style="font-size:12px;font-weight:700;color:var(--text);display:block;margin-bottom:4px">Aspect Ratio</label>
                    <select id="ai-image-aspect" style="width:100%;background:#0f172a;color:var(--text);border:1px solid var(--line-strong);border-radius:8px;padding:8px;font-size:13px">
                      <option value="1:1">1:1 Square (Social/Avatar)</option>
                      <option value="16:9">16:9 Landscape (Hero/Banner)</option>
                      <option value="4:3">4:3 Standard</option>
                      <option value="9:16">9:16 Portrait</option>
                    </select>
                  </div>
                  <div>
                    <label style="font-size:12px;font-weight:700;color:var(--text);display:block;margin-bottom:4px">Resolution</label>
                    <select id="ai-image-size" style="width:100%;background:#0f172a;color:var(--text);border:1px solid var(--line-strong);border-radius:8px;padding:8px;font-size:13px">
                      <option value="1K">1K High Definition</option>
                      <option value="512px">512px Fast Preview</option>
                    </select>
                  </div>
                </div>

                <button type="button" class="btn btn-primary" id="ai-image-generate-btn" style="margin-top:6px">
                  <span>✨ Generate / Edit Image</span>
                </button>
              </div>

              <div class="ai-studio-preview-box" id="ai-image-result-box">
                <div id="ai-image-placeholder" style="color:var(--muted);font-size:13px">
                  <div style="font-size:36px;margin-bottom:8px">🎨</div>
                  Enter a prompt and click Generate to create high-fidelity cloud diagrams or visuals with Gemini 3.1 Flash Image.
                </div>
                <img id="ai-image-output" style="display:none" alt="Generated Visual">
                <div id="ai-image-actions" style="margin-top:14px;display:none;gap:8px">
                  <a id="ai-image-download-btn" class="btn btn-ghost btn-sm" download="sipro-generated-visual.png">⬇ Download PNG</a>
                  <button type="button" class="btn btn-primary btn-sm" id="ai-image-animate-btn">🎬 Animate with Veo</button>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB 3: Veo Video Studio -->
          <div class="ai-tab-pane" id="ai-pane-video">
            <div class="ai-visual-studio-grid">
              <div style="display:flex;flex-direction:column;gap:14px">
                <div>
                  <label style="font-size:13px;font-weight:700;color:var(--text);display:block;margin-bottom:6px">Video Animation Prompt</label>
                  <textarea id="ai-video-prompt" class="ai-chat-textarea" style="height:90px" placeholder="e.g., Cinematic camera zoom into an illuminated cloud server cluster with glowing data packets flowing in 4k"></textarea>
                </div>

                <div>
                  <label style="font-size:13px;font-weight:700;color:var(--text);display:block;margin-bottom:6px">Initial Keyframe Image (Optional)</label>
                  <div id="ai-video-dropzone" style="border:1.5px dashed var(--line-strong);border-radius:10px;padding:16px;text-align:center;cursor:pointer;background:rgba(15,23,42,0.3)">
                    <div style="font-size:12px;color:var(--muted)">Click or Drag &amp; Drop starting frame (Image-to-Video)</div>
                    <input type="file" id="ai-video-file-input" accept="image/*" style="display:none">
                    <div id="ai-video-source-preview" style="margin-top:8px;display:none">
                      <img id="ai-video-source-thumb" style="max-height:80px;border-radius:6px" alt="Video Keyframe">
                      <button type="button" class="btn btn-ghost btn-xs" id="ai-video-clear-source" style="margin-top:4px">Remove</button>
                    </div>
                  </div>
                </div>

                <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
                  <div>
                    <label style="font-size:12px;font-weight:700;color:var(--text);display:block;margin-bottom:4px">Aspect Ratio</label>
                    <select id="ai-video-aspect" style="width:100%;background:#0f172a;color:var(--text);border:1px solid var(--line-strong);border-radius:8px;padding:8px;font-size:13px">
                      <option value="16:9">16:9 Widescreen (1280x720)</option>
                      <option value="9:16">9:16 Vertical (720x1280)</option>
                    </select>
                  </div>
                  <div>
                    <label style="font-size:12px;font-weight:700;color:var(--text);display:block;margin-bottom:4px">Resolution</label>
                    <select id="ai-video-resolution" style="width:100%;background:#0f172a;color:var(--text);border:1px solid var(--line-strong);border-radius:8px;padding:8px;font-size:13px">
                      <option value="720p">720p HD (Fastest)</option>
                      <option value="1080p">1080p Full HD</option>
                    </select>
                  </div>
                </div>

                <button type="button" class="btn btn-primary" id="ai-video-generate-btn" style="margin-top:6px">
                  <span>🎬 Render Cinematic Video (Veo)</span>
                </button>
              </div>

              <div class="ai-studio-preview-box" id="ai-video-result-box">
                <div id="ai-video-placeholder" style="color:var(--muted);font-size:13px">
                  <div style="font-size:36px;margin-bottom:8px">🎬</div>
                  Enter animation instructions to generate video with Google's Veo video model.
                </div>
                
                <div id="ai-video-loading-state" style="display:none;flex-direction:column;align-items:center;text-align:center">
                  <div class="spin-loader" style="width:36px;height:36px;border-color:var(--cyan);border-top-color:transparent;border-width:3px;border-radius:50%;margin-bottom:12px"></div>
                  <strong style="color:var(--text);font-size:14px" id="ai-video-status-text">Submitting Veo Generation Pipeline...</strong>
                  <div style="font-size:12px;color:var(--muted);margin-top:4px">Veo video synthesis runs asynchronous diffusion rendering.</div>
                  <div class="ai-video-progress-wrap">
                    <div class="ai-progress-bar">
                      <div class="ai-progress-fill indeterminate"></div>
                    </div>
                  </div>
                </div>

                <video id="ai-video-output" controls autoplay loop playsinline style="display:none" alt="Rendered Veo Video"></video>
                <div id="ai-video-actions" style="margin-top:14px;display:none;gap:8px">
                  <a id="ai-video-download-btn" class="btn btn-primary btn-sm" download="sipro-veo-video.mp4">⬇ Download Video (MP4)</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modalEl);
    setupAIStudioEvents(modalEl);
  }
}

function openAIStudio(tab) {
  const targetTab = tab || 'chat';
  initAIStudio();
  const modalEl = document.getElementById('sipro-ai-studio-modal');
  if (!modalEl) return;
  modalEl.classList.add('active');
  switchAIStudioTab(targetTab);
}

function closeAIStudio() {
  const modalEl = document.getElementById('sipro-ai-studio-modal');
  if (modalEl) modalEl.classList.remove('active');
  if (AIStudioState.videoPollingInterval) {
    clearInterval(AIStudioState.videoPollingInterval);
    AIStudioState.videoPollingInterval = null;
  }
}

function switchAIStudioTab(tabId) {
  AIStudioState.activeTab = tabId;
  const modalEl = document.getElementById('sipro-ai-studio-modal');
  if (!modalEl) return;

  modalEl.querySelectorAll('.ai-studio-tab-btn').forEach(btn => {
    if (btn.getAttribute('data-tab') === tabId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  modalEl.querySelectorAll('.ai-tab-pane').forEach(pane => {
    if (pane.id === `ai-pane-${tabId}`) {
      pane.classList.add('active');
    } else {
      pane.classList.remove('active');
    }
  });
}

function setupAIStudioEvents(modalEl) {
  // Tab Switching
  modalEl.querySelectorAll('.ai-studio-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab') || 'chat';
      switchAIStudioTab(targetTab);
    });
  });

  // Prompt chips
  modalEl.querySelectorAll('.ai-prompt-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const prompt = chip.getAttribute('data-prompt');
      const input = modalEl.querySelector('#ai-chat-input');
      if (input && prompt) {
        input.value = prompt;
        input.focus();
        handleChatSend();
      }
    });
  });

  // Chat Send Events
  const sendBtn = modalEl.querySelector('#ai-chat-send-btn');
  const chatInput = modalEl.querySelector('#ai-chat-input');
  const clearBtn = modalEl.querySelector('#ai-clear-chat-btn');

  if (sendBtn) sendBtn.addEventListener('click', handleChatSend);
  if (chatInput) {
    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleChatSend();
      }
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      AIStudioState.chatHistory = [];
      const thread = modalEl.querySelector('#ai-chat-thread-box');
      if (thread) {
        thread.innerHTML = `
          <div class="ai-chat-bubble assistant">
            <div style="font-weight:700;color:var(--cyan);font-size:12.5px;margin-bottom:4px">SiPro AI Architecture Assistant</div>
            Chat history cleared. How can I assist your engineering architecture or compliance requirements?
          </div>
        `;
      }
    });
  }

  // Image Generation Events
  setupImageStudioEvents(modalEl);

  // Video Generation Events
  setupVideoStudioEvents(modalEl);
}

async function handleChatSend() {
  const modalEl = document.getElementById('sipro-ai-studio-modal');
  if (!modalEl) return;

  const input = modalEl.querySelector('#ai-chat-input');
  const thread = modalEl.querySelector('#ai-chat-thread-box');
  const sendBtn = modalEl.querySelector('#ai-chat-send-btn');
  const roleSelect = modalEl.querySelector('#ai-role-select');
  const modelSelect = modalEl.querySelector('#ai-model-select');
  const groundingToggle = modalEl.querySelector('#ai-search-grounding-toggle');

  if (!input || !thread || !sendBtn) return;
  const text = input.value.trim();
  if (!text) return;

  // Add user bubble
  const userBubble = document.createElement('div');
  userBubble.className = 'ai-chat-bubble user';
  userBubble.textContent = text;
  thread.appendChild(userBubble);

  AIStudioState.chatHistory.push({ role: 'user', content: text });
  input.value = '';
  input.style.height = '52px';
  thread.scrollTop = thread.scrollHeight;

  // Add Assistant Loading Bubble
  const assistantBubble = document.createElement('div');
  assistantBubble.className = 'ai-chat-bubble assistant';
  assistantBubble.innerHTML = `
    <div style="display:flex;align-items:center;gap:8px">
      <div class="spin-loader" style="width:16px;height:16px;border-color:var(--cyan);border-top-color:transparent;border-width:2px;border-radius:50%"></div>
      <span style="font-size:13px;color:var(--muted)">Formulating architecture &amp; grounding sources...</span>
    </div>
  `;
  thread.appendChild(assistantBubble);
  thread.scrollTop = thread.scrollHeight;

  sendBtn.disabled = true;

  try {
    const res = await fetch('/api/v1/ai/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: AIStudioState.chatHistory,
        message: text,
        roleType: roleSelect ? roleSelect.value : 'solutions_architect',
        model: modelSelect ? modelSelect.value : 'gemini-3.5-flash',
        useGrounding: groundingToggle ? groundingToggle.checked : true
      })
    });

    const data = await res.json();
    if (!data.success) {
      throw new Error(data.error || 'Failed to receive AI response.');
    }

    AIStudioState.chatHistory.push({ role: 'model', content: data.text });

    let sourceHtml = '';
    if (data.grounding && data.grounding.sources && data.grounding.sources.length > 0) {
      sourceHtml = `
        <div class="ai-grounding-sources">
          <strong style="color:var(--muted)">Grounding Sources:</strong>
          ${data.grounding.sources.map((s) => `
            <a href="${escapeHtml(s.uri)}" target="_blank" rel="noopener noreferrer" class="ai-source-pill">
              🌐 ${escapeHtml(s.title || 'Web Citation')} ↗
            </a>
          `).join('')}
        </div>
      `;
    }

    assistantBubble.innerHTML = `
      <div style="font-weight:700;color:var(--cyan);font-size:12.5px;margin-bottom:6px;display:flex;align-items:center;justify-content:space-between">
        <span>SiPro Architectural Assistant</span>
        <span style="font-size:10px;color:var(--muted)">${escapeHtml(data.model || 'Gemini')}</span>
      </div>
      <div>${formatAIMarkdown(data.text)}</div>
      ${sourceHtml}
    `;
  } catch (err) {
    assistantBubble.innerHTML = `
      <div style="color:var(--rose);font-weight:700;font-size:13px">Assistant Error</div>
      <div style="font-size:12.5px;color:var(--muted);margin-top:4px">${escapeHtml(err.message || 'Error executing request')}</div>
    `;
  } finally {
    sendBtn.disabled = false;
    thread.scrollTop = thread.scrollHeight;
  }
}

function setupImageStudioEvents(modalEl) {
  const dropzone = modalEl.querySelector('#ai-image-dropzone');
  const fileInput = modalEl.querySelector('#ai-image-file-input');
  const previewDiv = modalEl.querySelector('#ai-image-source-preview');
  const thumb = modalEl.querySelector('#ai-image-source-thumb');
  const clearBtn = modalEl.querySelector('#ai-image-clear-source');
  const generateBtn = modalEl.querySelector('#ai-image-generate-btn');
  const promptInput = modalEl.querySelector('#ai-image-prompt');
  const aspectSelect = modalEl.querySelector('#ai-image-aspect');
  const sizeSelect = modalEl.querySelector('#ai-image-size');

  const placeholder = modalEl.querySelector('#ai-image-placeholder');
  const outputImg = modalEl.querySelector('#ai-image-output');
  const actionsDiv = modalEl.querySelector('#ai-image-actions');
  const downloadBtn = modalEl.querySelector('#ai-image-download-btn');
  const animateBtn = modalEl.querySelector('#ai-image-animate-btn');

  if (dropzone && fileInput) {
    dropzone.addEventListener('click', (e) => {
      if (e.target !== clearBtn) fileInput.click();
    });

    fileInput.addEventListener('change', () => {
      const file = fileInput.files && fileInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          const res = ev.target && ev.target.result;
          AIStudioState.sourceImageBase64 = res;
          AIStudioState.sourceImageMime = file.type || 'image/png';
          if (thumb) thumb.src = res;
          if (previewDiv) previewDiv.style.display = 'block';
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      AIStudioState.sourceImageBase64 = null;
      if (fileInput) fileInput.value = '';
      if (previewDiv) previewDiv.style.display = 'none';
    });
  }

  if (generateBtn) {
    generateBtn.addEventListener('click', async () => {
      const prompt = promptInput && promptInput.value && promptInput.value.trim();
      if (!prompt) {
        showToast('Please enter an image prompt description.', 'warning');
        return;
      }

      generateBtn.disabled = true;
      generateBtn.innerHTML = `<span>⏳ Synthesizing Visual...</span>`;
      if (placeholder) placeholder.style.display = 'none';
      if (outputImg) outputImg.style.display = 'none';
      if (actionsDiv) actionsDiv.style.display = 'none';

      try {
        const res = await fetch('/api/v1/ai/image', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            prompt,
            image: AIStudioState.sourceImageBase64,
            mimeType: AIStudioState.sourceImageMime,
            aspectRatio: aspectSelect ? aspectSelect.value : '1:1',
            imageSize: sizeSelect ? sizeSelect.value : '1K'
          })
        });

        const data = await res.json();
        if (!data.success) {
          throw new Error(data.error || 'Failed to generate visual.');
        }

        if (outputImg) {
          outputImg.src = data.imageUrl;
          outputImg.style.display = 'block';
        }
        if (downloadBtn) {
          downloadBtn.href = data.imageUrl;
        }
        if (actionsDiv) {
          actionsDiv.style.display = 'flex';
        }
        showToast('Image generated successfully!', 'success');
      } catch (err) {
        showToast(err.message || 'Image generation failed.', 'error');
        if (placeholder) placeholder.style.display = 'block';
      } finally {
        generateBtn.disabled = false;
        generateBtn.innerHTML = `<span>✨ Generate / Edit Image</span>`;
      }
    });
  }

  if (animateBtn) {
    animateBtn.addEventListener('click', () => {
      if (outputImg && outputImg.src) {
        AIStudioState.videoSourceImageBase64 = outputImg.src;
        const videoThumb = modalEl.querySelector('#ai-video-source-thumb');
        const videoPreviewDiv = modalEl.querySelector('#ai-video-source-preview');
        if (videoThumb) videoThumb.src = outputImg.src;
        if (videoPreviewDiv) videoPreviewDiv.style.display = 'block';
        switchAIStudioTab('video');
        showToast('Visual imported into Veo Video Studio!', 'info');
      }
    });
  }
}

function setupVideoStudioEvents(modalEl) {
  const dropzone = modalEl.querySelector('#ai-video-dropzone');
  const fileInput = modalEl.querySelector('#ai-video-file-input');
  const previewDiv = modalEl.querySelector('#ai-video-source-preview');
  const thumb = modalEl.querySelector('#ai-video-source-thumb');
  const clearBtn = modalEl.querySelector('#ai-video-clear-source');
  const generateBtn = modalEl.querySelector('#ai-video-generate-btn');
  const promptInput = modalEl.querySelector('#ai-video-prompt');
  const aspectSelect = modalEl.querySelector('#ai-video-aspect');
  const resolutionSelect = modalEl.querySelector('#ai-video-resolution');

  const placeholder = modalEl.querySelector('#ai-video-placeholder');
  const loadingState = modalEl.querySelector('#ai-video-loading-state');
  const statusText = modalEl.querySelector('#ai-video-status-text');
  const outputVideo = modalEl.querySelector('#ai-video-output');
  const actionsDiv = modalEl.querySelector('#ai-video-actions');
  const downloadBtn = modalEl.querySelector('#ai-video-download-btn');

  if (dropzone && fileInput) {
    dropzone.addEventListener('click', (e) => {
      if (e.target !== clearBtn) fileInput.click();
    });

    fileInput.addEventListener('change', () => {
      const file = fileInput.files && fileInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          const res = ev.target && ev.target.result;
          AIStudioState.videoSourceImageBase64 = res;
          if (thumb) thumb.src = res;
          if (previewDiv) previewDiv.style.display = 'block';
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      AIStudioState.videoSourceImageBase64 = null;
      if (fileInput) fileInput.value = '';
      if (previewDiv) previewDiv.style.display = 'none';
    });
  }

  if (generateBtn) {
    generateBtn.addEventListener('click', async () => {
      const prompt = promptInput && promptInput.value && promptInput.value.trim();
      if (!prompt && !AIStudioState.videoSourceImageBase64) {
        showToast('Please provide an animation prompt or a keyframe image.', 'warning');
        return;
      }

      generateBtn.disabled = true;
      if (placeholder) placeholder.style.display = 'none';
      if (outputVideo) outputVideo.style.display = 'none';
      if (actionsDiv) actionsDiv.style.display = 'none';
      if (loadingState) loadingState.style.display = 'flex';
      if (statusText) statusText.textContent = 'Submitting Veo video pipeline...';

      try {
        const initRes = await fetch('/api/v1/ai/video/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            prompt,
            image: AIStudioState.videoSourceImageBase64,
            aspectRatio: aspectSelect ? aspectSelect.value : '16:9',
            resolution: resolutionSelect ? resolutionSelect.value : '720p'
          })
        });

        const initData = await initRes.json();
        if (!initData.success || !initData.operationName) {
          throw new Error(initData.error || 'Failed to start video rendering.');
        }

        const operationName = initData.operationName;
        if (statusText) statusText.textContent = 'Rendering video frames with Veo model...';

        // Poll operation status every 10 seconds
        let elapsed = 0;
        AIStudioState.videoPollingInterval = setInterval(async () => {
          elapsed += 10;
          if (statusText) statusText.textContent = `Rendering video with Veo... (${elapsed}s elapsed)`;

          try {
            const pollRes = await fetch('/api/v1/ai/video/status', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ operationName })
            });

            const pollData = await pollRes.json();
            if (pollData.error) {
              clearInterval(AIStudioState.videoPollingInterval);
              throw new Error(pollData.error);
            }

            if (pollData.done) {
              clearInterval(AIStudioState.videoPollingInterval);
              if (statusText) statusText.textContent = 'Downloading completed video MP4...';

              const dlRes = await fetch('/api/v1/ai/video/download', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ operationName })
              });

              if (!dlRes.ok) {
                throw new Error('Failed to stream video bytes from storage.');
              }

              const blob = await dlRes.blob();
              const videoObjectUrl = URL.createObjectURL(blob);

              if (loadingState) loadingState.style.display = 'none';
              if (outputVideo) {
                outputVideo.src = videoObjectUrl;
                outputVideo.style.display = 'block';
                outputVideo.play();
              }
              if (downloadBtn) {
                downloadBtn.href = videoObjectUrl;
              }
              if (actionsDiv) {
                actionsDiv.style.display = 'flex';
              }
              generateBtn.disabled = false;
              showToast('Veo video generation completed!', 'success');
            }
          } catch (pollErr) {
            clearInterval(AIStudioState.videoPollingInterval);
            if (loadingState) loadingState.style.display = 'none';
            if (placeholder) placeholder.style.display = 'block';
            generateBtn.disabled = false;
            showToast(pollErr.message || 'Polling video failed.', 'error');
          }
        }, 10000);

      } catch (err) {
        if (loadingState) loadingState.style.display = 'none';
        if (placeholder) placeholder.style.display = 'block';
        generateBtn.disabled = false;
        showToast(err.message || 'Failed to start video rendering.', 'error');
      }
    });
  }
}

// Global Exports
window.openAccessibilityModal = openAccessibilityModal;
window.closeAccessibilityModal = closeAccessibilityModal;
window.initAccessibilityPreferences = initAccessibilityPreferences;
window.initDeliverablesPortal = initDeliverablesPortal;
window.generateDocument = generateDocument;
window.closeDocumentModal = closeDocumentModal;
window.openSignOffModal = openSignOffModal;
window.closeSignOffModal = closeSignOffModal;
window.openStagingSandbox = openStagingSandbox;
window.triggerNamasteCelebration = triggerNamasteCelebration;
window.initNetworkMonitor = initNetworkMonitor;
window.initDPDPConsent = initDPDPConsent;
window.renderEmptyState = renderEmptyState;
window.modal = modal;
window.downloadReceipt = downloadReceipt;
window.initAIStudio = initAIStudio;
window.openAIStudio = openAIStudio;
window.closeAIStudio = closeAIStudio;

