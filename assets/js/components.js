/**
 * CoAbility - Reusable Global Components & Interactions
 * Supports keyboard accessibility, screen readers, responsive menus, and data rendering
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNavigation();
  initActiveNavLink();
  renderTeamCardsIfEmpty();
  renderProjectCardsIfEmpty();
  initContactFormIfPresent();
});

/**
 * Mobile Navigation Toggle with ARIA & Keyboard Accessibility
 */
function initMobileNavigation() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!toggleBtn || !mobileMenu) return;

  function openMenu() {
    toggleBtn.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.remove('hidden');
    const openIcon = toggleBtn.querySelector('.menu-open-icon');
    const closeIcon = toggleBtn.querySelector('.menu-close-icon');
    if (openIcon) openIcon.classList.add('hidden');
    if (closeIcon) closeIcon.classList.remove('hidden');
  }

  function closeMenu() {
    toggleBtn.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.add('hidden');
    const openIcon = toggleBtn.querySelector('.menu-open-icon');
    const closeIcon = toggleBtn.querySelector('.menu-close-icon');
    if (openIcon) openIcon.classList.remove('hidden');
    if (closeIcon) closeIcon.classList.add('hidden');
  }

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu when pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggleBtn.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      toggleBtn.focus();
    }
  });

  // Close mobile menu on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024 && toggleBtn.getAttribute('aria-expanded') === 'true') {
      closeMenu();
    }
  });
}

/**
 * Highlight the currently active page in desktop and mobile navigation
 */
function initActiveNavLink() {
  const currentPath = window.location.pathname.toLowerCase();
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    const cleanHref = href.split('/').pop().replace('.html', '');
    const isHome = (cleanHref === '' || cleanHref === 'index') && 
                   (currentPath.endsWith('/') || currentPath.endsWith('index.html') || currentPath === '');
    const isMatch = cleanHref !== '' && cleanHref !== 'index' && currentPath.includes(cleanHref);

    if (isHome || isMatch) {
      link.classList.add('text-blue-600', 'font-bold');
      link.classList.remove('text-slate-600');
      link.setAttribute('aria-current', 'page');
    }
  });
}

/**
 * Client-side fallback: Render Team Member Cards only if container is empty
 */
function renderTeamCardsIfEmpty() {
  const container = document.getElementById('team-grid');
  if (!container || container.children.length > 0 || typeof COABILITY_TEAM === 'undefined') return;

  container.innerHTML = COABILITY_TEAM.map(member => `
    <article class="bg-white rounded-2xl border border-slate-200/80 p-6 md:p-8 flex flex-col justify-between interactive-card shadow-sm hover:shadow-md transition-all">
      <div>
        <div class="flex items-center gap-4 mb-6">
          <div class="w-16 h-16 rounded-2xl bg-gradient-to-br ${member.avatarColor || 'from-blue-600 to-cyan-500'} flex items-center justify-center text-white text-xl font-bold shadow-md shadow-blue-500/10 flex-shrink-0" aria-hidden="true">
            ${member.initials || 'CA'}
          </div>
          <div>
            <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100 mb-1">
              ${member.role}
            </div>
            <h3 class="text-xl font-bold text-slate-900 tracking-tight">${member.name}</h3>
          </div>
        </div>
        <p class="text-slate-600 leading-relaxed text-sm md:text-base mb-6">
          ${member.bio}
        </p>
      </div>
      <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
        ${member.isPlaceholder ? `
          <span class="text-xs font-medium text-slate-400 flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-amber-400" aria-hidden="true"></span>
            Placeholder Profile
          </span>
        ` : `
          <span class="text-xs font-medium text-slate-500">CoAbility Team</span>
        `}

        ${member.linkedin ? `
          <a href="${member.linkedin}" target="_blank" rel="noopener noreferrer" 
             class="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors p-1.5 rounded-lg hover:bg-blue-50 focus-visible:ring-2 focus-visible:ring-blue-500" 
             aria-label="Visit ${member.name}'s LinkedIn profile">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span>LinkedIn</span>
          </a>
        ` : ''}
      </div>
    </article>
  `).join('');
}

/**
 * Client-side fallback: Render Project Cards only if container is empty
 */
function renderProjectCardsIfEmpty() {
  const container = document.getElementById('projects-grid');
  if (!container || container.children.length > 0 || typeof COABILITY_PROJECTS === 'undefined') return;

  container.innerHTML = COABILITY_PROJECTS.map(proj => `
    <article class="bg-white rounded-2xl border border-slate-200/80 overflow-hidden interactive-card shadow-sm hover:shadow-lg transition-all flex flex-col">
      <div class="h-52 bg-gradient-to-br from-slate-50 via-blue-50/40 to-sky-50 relative p-6 flex flex-col justify-between border-b border-slate-100 bg-grid-pattern">
        <div class="flex items-center justify-between">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-blue-700 shadow-sm border border-slate-200/60 backdrop-blur-sm">
            ${proj.category}
          </span>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
            proj.statusType === 'prototype' 
              ? 'bg-blue-100 text-blue-800 border border-blue-200' 
              : 'bg-amber-100 text-amber-800 border border-amber-200'
          }">
            <span class="w-2 h-2 rounded-full ${proj.statusType === 'prototype' ? 'bg-blue-600 animate-pulse' : 'bg-amber-500'}" aria-hidden="true"></span>
            ${proj.status}
          </span>
        </div>

        <div class="flex items-center justify-center my-auto py-2">
          ${getSchematicGraphic(proj.iconType)}
        </div>

        <div class="text-[11px] font-mono text-slate-400 text-right">
          ID: #${proj.id}
        </div>
      </div>

      <div class="p-6 md:p-8 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="text-xl md:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
            ${proj.title}
          </h3>
          <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
            ${proj.shortDesc}
          </p>

          <div class="space-y-4 mb-6">
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200/60">
              <div class="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                <svg class="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                </svg>
                The Accessibility Challenge
              </div>
              <p class="text-xs md:text-sm text-slate-600 leading-relaxed">
                ${proj.challenge}
              </p>
            </div>

            <div class="p-4 rounded-xl bg-blue-50/60 border border-blue-100">
              <div class="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase tracking-wider mb-1.5">
                <svg class="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                The 3D-Printed Solution
              </div>
              <p class="text-xs md:text-sm text-slate-700 leading-relaxed">
                ${proj.solution}
              </p>
            </div>
          </div>
        </div>

        <div class="pt-4 border-t border-slate-100 flex flex-wrap gap-2 text-xs text-slate-500">
          <span class="inline-flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-md">
            <strong class="text-slate-700 font-medium">Material:</strong> ${proj.techSpecs.material}
          </span>
          <span class="inline-flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-md">
            <strong class="text-slate-700 font-medium">Est. Print:</strong> ${proj.techSpecs.printTime}
          </span>
        </div>
      </div>
    </article>
  `).join('');
}

function getSchematicGraphic(type) {
  switch (type) {
    case 'zipper':
      return `
        <svg class="w-24 h-24 text-blue-600 drop-shadow-md" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="38" stroke="#1254D8" stroke-width="8" stroke-linecap="round"/>
          <circle cx="50" cy="50" r="22" fill="#FFFFFF" stroke="#0284C7" stroke-width="3" stroke-dasharray="4 3"/>
          <path d="M42 16L50 8L58 16V24H42V16Z" fill="#1254D8"/>
          <path d="M40 50H60M42 43H58M42 57H58" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round"/>
        </svg>
      `;
    case 'utensil':
      return `
        <svg class="w-24 h-24 text-blue-600 drop-shadow-md" viewBox="0 0 100 100" fill="none">
          <path d="M30 20C30 14 70 14 70 20C70 40 76 50 76 65C76 80 65 88 50 88C35 88 24 80 24 65C24 50 30 40 30 20Z" fill="#1254D8" opacity="0.9"/>
          <rect x="44" y="16" width="12" height="68" rx="6" fill="#FFFFFF" stroke="#0B3CA0" stroke-width="2"/>
          <path d="M30 46C40 48 60 48 70 46M28 58C38 60 62 60 72 58M27 70C37 72 63 72 73 70" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
        </svg>
      `;
    case 'opener':
      return `
        <svg class="w-24 h-24 text-blue-600 drop-shadow-md" viewBox="0 0 100 100" fill="none">
          <path d="M20 25L50 80L80 25H68L50 60L32 25H20Z" fill="#1254D8"/>
          <path d="M36 34L50 60L64 34" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
          <rect x="15" y="18" width="70" height="10" rx="3" fill="#0B3CA0"/>
          <circle cx="22" cy="23" r="2.5" fill="#FFFFFF"/>
          <circle cx="78" cy="23" r="2.5" fill="#FFFFFF"/>
        </svg>
      `;
    case 'key':
    default:
      return `
        <svg class="w-24 h-24 text-blue-600 drop-shadow-md" viewBox="0 0 100 100" fill="none">
          <ellipse cx="50" cy="38" rx="36" ry="20" fill="#1254D8"/>
          <circle cx="50" cy="38" r="10" fill="#FFFFFF" stroke="#0284C7" stroke-width="3"/>
          <rect x="42" y="46" width="16" height="40" rx="4" fill="#0B3CA0"/>
          <path d="M22 26C28 18 42 16 50 16" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M78 50C72 58 58 60 50 60" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round"/>
        </svg>
      `;
  }
}

/**
 * Accessible Contact Form Handler with Validation and Accessible Feedback
 */
function initContactFormIfPresent() {
  const form = document.getElementById('coability-contact-form');
  const statusMessage = document.getElementById('form-status-message');

  if (!form || !statusMessage) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('#contact-name').value.trim();
    const email = form.querySelector('#contact-email').value.trim();
    const interest = form.querySelector('#contact-interest').value;
    const message = form.querySelector('#contact-message').value.trim();

    if (!name || !email || !message) {
      statusMessage.className = 'mt-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm';
      statusMessage.setAttribute('role', 'alert');
      statusMessage.innerHTML = '<strong>Please complete all required fields.</strong> Ensure your name, email, and message are provided.';
      statusMessage.classList.remove('hidden');
      statusMessage.focus();
      return;
    }

    // Success State Confirmation
    statusMessage.className = 'mt-6 p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-200 text-slate-800 text-sm shadow-sm';
    statusMessage.setAttribute('role', 'status');
    statusMessage.setAttribute('tabindex', '-1');
    statusMessage.innerHTML = `
      <div class="flex items-start gap-3">
        <div class="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
          </svg>
        </div>
        <div>
          <h4 class="text-base font-bold text-slate-900 mb-1">Thank you for connecting with CoAbility, ${name}!</h4>
          <p class="text-slate-600 mb-2 leading-relaxed">
            Your inquiry regarding <strong>${interest || 'General Information'}</strong> has been received. CoAbility is actively growing its community network, and we will follow up with you as development progresses.
          </p>
          <span class="text-xs text-blue-700 font-medium">CoAbility Volunteer & Inquiries Desk</span>
        </div>
      </div>
    `;
    statusMessage.classList.remove('hidden');
    statusMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    statusMessage.focus();

    form.reset();
  });
}
