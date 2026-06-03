export function initApp() {
/* ============================================================
   ADVOCATE ANOOP KUMAR SAXENA — JavaScript
   ============================================================ */

/* ---- PRELOADER ---- */

  setTimeout(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) preloader.classList.add('fade-out');
  }, 1600);


/* ---- NAVBAR SCROLL BEHAVIOUR ---- */
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

function updateNav() {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Highlight active section in nav
  const sections = document.querySelectorAll('section[id]');
  let currentSection = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    if (window.scrollY >= top) currentSection = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + currentSection) {
      link.classList.add('active');
    }
  });
}
window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

/* ---- HAMBURGER MENU ---- */
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  const isOpen = navLinksEl.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile menu on link click
navLinksEl.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinksEl.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

/* ---- SMOOTH SCROLL for anchor links ---- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ---- INTERSECTION OBSERVER: Scroll animations ---- */
const animateObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = parseInt(entry.target.dataset.delay || '0');
      setTimeout(() => entry.target.classList.add('in-view'), delay);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('[data-animate]').forEach(el => animateObserver.observe(el));

/* ---- ANIMATED COUNTERS ---- */
function animateCounter(el, target, duration = 2000) {
  const start = 0;
  const range = target - start;
  const increment = range / (duration / 16);
  let current = start;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current).toLocaleString();
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counters = entry.target.querySelectorAll('.stat-number');
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        animateCounter(counter, target, 2000);
      });
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) counterObserver.observe(heroStats);

/* ---- LEGAL QUOTE CAROUSEL ---- */
const quotes = document.querySelectorAll('.legal-quote');
let currentQuote = 0;
if (quotes.length > 0) {
  setInterval(() => {
    quotes[currentQuote].classList.remove('active');
    currentQuote = (currentQuote + 1) % quotes.length;
    quotes[currentQuote].classList.add('active');
  }, 4000);
}

/* ============================================================
   PAYMENT SYSTEM — Secure Post-Payment Video Call Access
   ============================================================ */

// Config — UPI
const UPI_ID   = 'saxenaanoop11@okaxis';
const UPI_NAME = 'Anoop%20Kumar%20Saxena';
const STORE_KEY = 'adv_sessions_v1';
// Admin password: AdvSaxena@2024
const ADMIN_HASH = 'QWR2U2F4ZW5hQDIwMjQ=';

// Plan definitions
const PLAN_DATA = {
  'Basic Counseling \u2014 \u20b91,000': {
    fee: 1000, icon: '\uD83D\uDCCB',
    perks: ['30-minute Google Meet / Zoom session', 'Career guidance in law', 'Legal awareness session', 'Confirmation after payment']
  },
  'Detailed Guidance \u2014 \u20b92,000': {
    fee: 2000, icon: '\u2696',
    perks: ['60-minute dedicated session', 'Comprehensive career roadmap', 'Juvenile & family counseling', 'Written summary shared post-session', 'Confirmation after payment']
  }
};

// Current payment state
let _currentPlan = { name: '', fee: 0, icon: '📋' };
let _qrBuilt = false;

// ──────────────────────────────────────────────────────────────
// PLAN SELECT BUTTONS → open payment modal instead of form scroll
// ──────────────────────────────────────────────────────────────
document.querySelectorAll('.price-select').forEach(btn => {
  btn.addEventListener('click', () => {
    const rawPlan = btn.getAttribute('data-plan');
    const fee     = parseInt(btn.getAttribute('data-fee')) || 1000;
    // Find matching plan data
    const planKey = Object.keys(PLAN_DATA).find(k => k.includes(fee + ',000') || rawPlan.includes(fee));
    const data    = PLAN_DATA[planKey] || { fee, icon: '📋', perks: [] };

    _currentPlan = { name: rawPlan, fee, icon: data.icon };
    _qrBuilt = false;

    // Populate step 1
    const planNameEl = document.getElementById('pay-plan-name');
    const amountEl   = document.getElementById('pay-amount-display');
    const iconEl     = document.getElementById('pay-plan-icon');
    const perksEl    = document.getElementById('pay-plan-perks');
    if (planNameEl) planNameEl.textContent = rawPlan;
    if (amountEl)   amountEl.textContent   = '\u20b9' + fee.toLocaleString('en-IN');
    if (iconEl)     iconEl.textContent     = data.icon;
    if (perksEl)    perksEl.innerHTML      = data.perks.map(p => `<li>\u2713 ${p}</li>`).join('');

    openPayModal();
  });
});

// Also hook the "Book Paid Counseling Session" submit button to open modal if no plan selected
const consultSubmitBtn = document.getElementById('consult-submit-btn');
if (consultSubmitBtn) {
  consultSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const selectedPlan = document.getElementById('selected-plan')?.value;
    if (!selectedPlan) {
      alert('Please select a counseling plan first (₹1,000 or ₹2,000) to proceed with payment.');
      return;
    }
    _currentPlan.name = selectedPlan;
    openPayModal();
  });
}

// ──────────────────────────────────────────────────────────────
// PAYMENT MODAL CONTROLLER
// ──────────────────────────────────────────────────────────────
function openPayModal() {
  const modal = document.getElementById('payment-modal');
  if (!modal) return;
  modal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
  goToPayStep(1);
}

window.closePaymentModal = function() {
  const modal = document.getElementById('payment-modal');
  if (modal) modal.setAttribute('hidden', '');
  document.body.style.overflow = '';
};

document.getElementById('close-payment-modal')?.addEventListener('click', closePaymentModal);
document.getElementById('payment-modal')?.addEventListener('click', e => {
  if (e.target.id === 'payment-modal') closePaymentModal();
});

window.goToPayStep = function(step) {
  [1, 2, 3, 4].forEach(n => {
    const el = document.getElementById('pay-step-' + n);
    if (el) el.hidden = (n !== step);
  });

  document.querySelectorAll('.pay-step-dot').forEach(dot => {
    const dn = parseInt(dot.getAttribute('data-step'));
    dot.classList.toggle('active',    dn === step);
    dot.classList.toggle('completed', dn < step);
  });

  // Build QR on first visit to step 2
  if (step === 2 && !_qrBuilt) {
    buildUPIQR();
    document.getElementById('qr-amount-label').textContent = '\u20b9' + _currentPlan.fee.toLocaleString('en-IN');
    document.getElementById('amount-reminder').textContent  = '\u20b9' + _currentPlan.fee.toLocaleString('en-IN');
    _qrBuilt = true;
  }
};

function buildUPIQR() {
  const container = document.getElementById('upi-qr-code');
  if (!container) return;
  container.innerHTML = '';
  // Use plan-specific note so it appears in bank statement
  const note = _currentPlan.fee === 2000
    ? 'Detailed%20Counseling'
    : 'Basic%20Counseling';
  const upiURL = `upi://pay?pa=${UPI_ID}&pn=${UPI_NAME}&am=${_currentPlan.fee}&cu=INR&tn=${note}`;
  if (typeof QRCode === 'undefined') {
    container.innerHTML = '<p style="font-size:0.78rem;color:#666;text-align:center;padding:1rem;">Scan with any UPI app using the UPI ID →</p>';
    return;
  }
  new QRCode(container, {
    text: upiURL,
    width: 190,
    height: 190,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H
  });
}

document.getElementById('proceed-to-pay-btn')?.addEventListener('click', () => goToPayStep(2));
document.getElementById('paid-confirm-btn')?.addEventListener('click',   () => goToPayStep(3));

// Copy UPI ID
document.getElementById('copy-upi-btn')?.addEventListener('click', () => {
  const id = document.getElementById('upi-id-text')?.textContent || UPI_ID;
  navigator.clipboard.writeText(id).then(() => {
    const btn = document.getElementById('copy-upi-btn');
    if (btn) { btn.textContent = 'Copied!'; setTimeout(() => btn.textContent = 'Copy', 2000); }
  }).catch(() => {});
});

// ──────────────────────────────────────────────────────────────
// UTR FORM SUBMISSION (Step 3 → Step 4)
// ──────────────────────────────────────────────────────────────
document.getElementById('utr-form')?.addEventListener('submit', async e => {
  e.preventDefault();
  const name  = document.getElementById('utr-name').value.trim();
  const phone = document.getElementById('utr-phone').value.trim();
  const email = document.getElementById('utr-email').value.trim();
  const ref   = document.getElementById('utr-ref').value.trim();

  const btn = document.getElementById('utr-submit-btn');
  const txt = document.getElementById('utr-submit-text');
  if (btn) btn.disabled = true;
  if (txt) txt.textContent = 'Submitting\u2026';

  const fd = new FormData();
  fd.append('Full Name', name);
  fd.append('Email', email);
  fd.append('Phone', phone);
  fd.append('Plan', _currentPlan.name);
  fd.append('Amount Paid', '\u20b9' + _currentPlan.fee.toLocaleString('en-IN'));
  fd.append('UTR / Transaction Reference', ref);
  fd.append('_subject', 'Payment Received \u2013 Counseling Session Verification Required');
  fd.append('_template', 'table');
  fd.append('_captcha', 'false');
  fd.append('_autoresponse',
    `Dear ${name}, Thank you for your payment of \u20b9${_currentPlan.fee} for ${_currentPlan.name}. ` +
    `We have received your UTR: ${ref}. After verification, your Access Code & Meeting Link will be sent to ${email} within 2\u20134 hours. ` +
    `For urgent help: +91 9415194180`
  );

  try {
    await fetch('https://formsubmit.co/advanoopsaxena@gmail.com', {
      method: 'POST',
      body: fd,
      headers: { 'Accept': 'application/json' }
    });
  } catch (_) {}

  document.getElementById('pending-plan').textContent   = _currentPlan.name;
  document.getElementById('pending-amount').textContent = '\u20b9' + _currentPlan.fee.toLocaleString('en-IN');
  document.getElementById('pending-email').textContent  = email;

  if (btn) btn.disabled = false;
  if (txt) txt.textContent = 'Submit Payment for Verification';
  goToPayStep(4);
});

// ──────────────────────────────────────────────────────────────
// JOIN SESSION — Simple Access Logic
// ──────────────────────────────────────────────────────────────
document.getElementById('join-session-form')?.addEventListener('submit', e => {
  e.preventDefault();
  const email  = document.getElementById('join-email').value.trim().toLowerCase();
  let code   = document.getElementById('join-code').value.trim();
  
  // Remove spaces in case user typed them
  code = code.replace(/\s+/g, '');

  let urlToOpen = '';

  // 1. If it's just numbers (a Zoom Meeting ID like 3254216383)
  if (/^\d+$/.test(code)) {
    urlToOpen = 'https://zoom.us/j/' + code;
  }
  // 2. If it's a full URL
  else if (code.startsWith('http')) {
    urlToOpen = code;
  }
  // 3. Fallback: treat as admin-generated access code
  else {
    const session = getSession(email, code.toUpperCase());
    if (session && session.link) {
      urlToOpen = session.link;
    } else {
      alert("Invalid Email or Access Code. Please verify your details or contact support on WhatsApp.");
      return;
    }
  }

  if (urlToOpen) {
    window.open(urlToOpen, '_blank', 'noopener,noreferrer');
    document.getElementById('join-email').value = '';
    document.getElementById('join-code').value = '';
  }
});

function getSession(email, code) {
  try {
    const sessions = JSON.parse(localStorage.getItem(STORE_KEY) || '[]');
    return sessions.find(s =>
      s.email.toLowerCase() === email &&
      s.code.toUpperCase()  === code &&
      s.status === 'active'
    ) || null;
  } catch (_) { return null; }
}

// ──────────────────────────────────────────────────────────────
// MEETING MODAL
// ──────────────────────────────────────────────────────────────
function openMeetingModal(session) {
  window._activeSession = session;

  document.getElementById('md-type').textContent     = session.plan;
  document.getElementById('md-date').textContent     = session.date;
  document.getElementById('md-time').textContent     = session.time || '\u2014';
  document.getElementById('md-platform').textContent = session.platform;

  const linkInput = document.getElementById('md-link-display');
  const joinBtn   = document.getElementById('join-meeting-btn');
  if (linkInput) linkInput.value = session.link;
  if (joinBtn)   joinBtn.href    = session.link;

  const idRow = document.getElementById('md-id-row');
  if (session.meetingId) {
    document.getElementById('md-meeting-id').textContent = session.meetingId;
    if (idRow) idRow.removeAttribute('hidden');
  } else {
    if (idRow) idRow.setAttribute('hidden', '');
  }

  const isZoom = session.platform.toLowerCase().includes('zoom');
  document.getElementById('md-platform-icon').textContent = isZoom ? '\uD83D\uDD35' : '\uD83C\uDFA5';
  document.getElementById('md-link-title').textContent    = session.platform + ' — Join Link';

  const modal = document.getElementById('meeting-modal');
  if (modal) { modal.removeAttribute('hidden'); document.body.style.overflow = 'hidden'; }
}

document.getElementById('close-meeting-modal')?.addEventListener('click', () => {
  document.getElementById('meeting-modal')?.setAttribute('hidden', '');
  document.body.style.overflow = '';
});
document.getElementById('meeting-modal')?.addEventListener('click', e => {
  if (e.target.id === 'meeting-modal') {
    document.getElementById('meeting-modal').setAttribute('hidden', '');
    document.body.style.overflow = '';
  }
});

window.copyMeetingLink = function() {
  const v = document.getElementById('md-link-display')?.value;
  if (!v) return;
  navigator.clipboard.writeText(v).then(() => {
    const btn = document.querySelector('.mlb-link-row .pay-copy-btn');
    if (btn) { btn.textContent = 'Copied!'; setTimeout(() => btn.textContent = 'Copy', 2000); }
  }).catch(() => {});
};

window.downloadMeetingDetails = function() {
  const s = window._activeSession;
  if (!s) return;
  const txt = [
    'COUNSELING SESSION DETAILS',
    'Advocate Anoop Kumar Saxena, LL.M.',
    '\u2501'.repeat(35),
    '',
    `Session Type : ${s.plan}`,
    `Date         : ${s.date}`,
    `Time         : ${s.time || '\u2014'}`,
    `Platform     : ${s.platform}`,
    s.meetingId ? `Meeting ID   : ${s.meetingId}` : '',
    '',
    'JOIN LINK:',
    s.link,
    '',
    '\u2501'.repeat(35),
    'Support  : +91 9415194180',
    'Email    : advanoopsaxena@gmail.com',
    '',
    '\u26A0 This link is private and confidential.',
  ].filter(l => l !== undefined).join('\n');

  const blob = new Blob([txt], { type: 'text/plain' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = 'session-details.txt'; a.click();
  URL.revokeObjectURL(url);
};

window.addToCalendar = function() {
  const s = window._activeSession;
  if (!s) return;
  const title = encodeURIComponent('Legal Counseling — Advocate Anoop Kumar Saxena');
  const desc  = encodeURIComponent(`Join at: ${s.link}\nType: ${s.plan}`);
  const loc   = encodeURIComponent(s.link);
  window.open(
    `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${desc}&location=${loc}`,
    '_blank'
  );
};

// ──────────────────────────────────────────────────────────────
// ADMIN PANEL  (Ctrl + Shift + A)
// ──────────────────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.ctrlKey && e.shiftKey && e.key === 'A') {
    e.preventDefault();
    document.getElementById('admin-panel')?.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
  }
});

document.getElementById('close-admin-panel')?.addEventListener('click', () => {
  document.getElementById('admin-panel')?.setAttribute('hidden', '');
  document.body.style.overflow = '';
  document.getElementById('admin-dashboard').hidden = true;
  document.getElementById('admin-login-area').hidden = false;
  document.getElementById('admin-password').value = '';
  document.getElementById('admin-error').hidden = true;
});

document.getElementById('admin-panel')?.addEventListener('click', e => {
  if (e.target.id === 'admin-panel') {
    document.getElementById('close-admin-panel').click();
  }
});

// Login
document.getElementById('admin-login-btn')?.addEventListener('click', () => {
  const pw = document.getElementById('admin-password').value;
  if (btoa(pw) === ADMIN_HASH) {
    document.getElementById('admin-login-area').hidden = true;
    document.getElementById('admin-dashboard').hidden  = false;
    document.getElementById('admin-error').hidden      = true;
    renderAdminSessions();
  } else {
    document.getElementById('admin-error').hidden = false;
  }
});
document.getElementById('admin-password')?.addEventListener('keydown', e => {
  if (e.key === 'Enter') document.getElementById('admin-login-btn').click();
});

// Generate code
document.getElementById('gen-code-btn')?.addEventListener('click', () => {
  document.getElementById('admin-access-code').value = genCode();
});

function genCode() {
  return Math.random().toString(36).substring(2, 10).toUpperCase();
}

// Create session
document.getElementById('create-session-btn')?.addEventListener('click', () => {
  const email   = document.getElementById('admin-client-email').value.trim();
  const plan    = document.getElementById('admin-plan').value;
  const date    = document.getElementById('admin-date').value;
  const time    = document.getElementById('admin-time').value;
  const platform= document.getElementById('admin-platform').value;
  const mid     = document.getElementById('admin-meeting-id').value.trim();
  const link    = document.getElementById('admin-meeting-link').value.trim();
  let   code    = document.getElementById('admin-access-code').value.trim().toUpperCase();

  if (!email || !link || !date) { alert('Please fill in Client Email, Date, and Meeting Link.'); return; }
  if (!code) { code = genCode(); document.getElementById('admin-access-code').value = code; }

  const session = { id: Date.now() + '', email, plan, date, time, platform, meetingId: mid, link, code, status: 'active', created: new Date().toISOString() };
  const sessions = JSON.parse(localStorage.getItem(STORE_KEY) || '[]');
  sessions.push(session);
  localStorage.setItem(STORE_KEY, JSON.stringify(sessions));

  const res = document.getElementById('create-session-result');
  res.removeAttribute('hidden');
  res.innerHTML = `
    <div class="admin-success-box">
      <p>✓ Session created successfully!</p>
      <p>Send this Access Code to the client after verifying payment:</p>
      <div class="access-code-highlight">${code}</div>
      <p style="font-size:0.78rem;margin-top:0.5rem;">Client: ${email} &nbsp;|&nbsp; Plan: ${plan} &nbsp;|&nbsp; ${date}</p>
    </div>`;

  // Reset form
  document.getElementById('admin-client-email').value = '';
  document.getElementById('admin-meeting-link').value = '';
  document.getElementById('admin-meeting-id').value   = '';
  document.getElementById('admin-access-code').value  = '';
  renderAdminSessions();
});

function renderAdminSessions() {
  const sessions = JSON.parse(localStorage.getItem(STORE_KEY) || '[]');
  const container = document.getElementById('admin-sessions-list');
  const badge     = document.getElementById('session-count-badge');
  if (badge) badge.textContent = sessions.length;
  if (!container) return;
  if (!sessions.length) {
    container.innerHTML = '<p class="admin-empty">No active sessions yet.</p>';
    return;
  }
  container.innerHTML = sessions.map(s => `
    <div class="admin-session-item">
      <div class="admin-session-info">
        <strong>${s.email}</strong>
        <span>${s.plan}</span>
        <span>${s.date} &nbsp;|&nbsp; ${s.time || '—'} &nbsp;|&nbsp; ${s.platform}</span>
      </div>
      <span class="admin-code-badge">${s.code}</span>
      <button class="admin-delete-btn" onclick="deleteSession('${s.id}')" title="Delete session">✕</button>
    </div>`).join('');
}

window.deleteSession = function(id) {
  if (!confirm('Delete this session? The client will no longer be able to access their meeting.')) return;
  const sessions = JSON.parse(localStorage.getItem(STORE_KEY) || '[]').filter(s => s.id !== id);
  localStorage.setItem(STORE_KEY, JSON.stringify(sessions));
  renderAdminSessions();
};

document.getElementById('clear-sessions-btn')?.addEventListener('click', () => {
  if (confirm('Clear ALL sessions? This cannot be undone.')) {
    localStorage.removeItem(STORE_KEY);
    renderAdminSessions();
  }
});


/* ---- INTERNSHIP FORM SUBMIT ---- */
const internForm = document.getElementById('internship-form');
const internModal = document.getElementById('intern-modal');
const closeInternModal = document.getElementById('close-intern-modal');
const internSubmitBtn = document.getElementById('internship-submit');
const internSubmitText = document.getElementById('intern-submit-text');
const resumeInput = document.getElementById('intern-resume');
const resumeLabelText = document.getElementById('resume-label-text');

if (internForm) {
  internForm.addEventListener('submit', async e => {
    e.preventDefault();

    if (!internForm.checkValidity()) {
      internForm.reportValidity();
      return;
    }

    // File size guard (5MB)
    if (resumeInput && resumeInput.files[0] && resumeInput.files[0].size > 5 * 1024 * 1024) {
      alert('File size exceeds 5MB. Please upload a smaller PDF file.');
      return;
    }

    if (internSubmitBtn) internSubmitBtn.disabled = true;
    if (internSubmitText) internSubmitText.textContent = 'Submitting…';

    try {
      const formData = new FormData(internForm);

      await fetch(internForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
    } catch (err) {
      console.error('Submission failed:', err);
    }

    if (internModal) {
      internModal.removeAttribute('hidden');
      document.body.style.overflow = 'hidden';
    }
    
    internForm.reset();
    if (resumeLabelText) resumeLabelText.textContent = 'Upload Resume (Optional, PDF)';
    
    if (internSubmitBtn) internSubmitBtn.disabled = false;
    if (internSubmitText) internSubmitText.textContent = 'Apply for Internship →';
  });
}

if (closeInternModal) {
  closeInternModal.addEventListener('click', () => {
    if (internModal) {
      internModal.setAttribute('hidden', '');
      document.body.style.overflow = '';
    }
  });
}
if (internModal) {
  internModal.addEventListener('click', e => {
    if (e.target === internModal) {
      internModal.setAttribute('hidden', '');
      document.body.style.overflow = '';
    }
  });
}

/* ---- FILE UPLOAD LABEL UPDATE ---- */
if (resumeInput && resumeLabelText) {
  resumeInput.addEventListener('change', () => {
    if (resumeInput.files && resumeInput.files[0]) {
      resumeLabelText.textContent = '✓ ' + resumeInput.files[0].name;
    } else {
      resumeLabelText.textContent = 'Upload Resume (Optional, PDF)';
    }
  });
}

/* ---- TESTIMONIAL SLIDER ---- */
const track = document.getElementById('testimonial-track');
const prevBtn = document.getElementById('prev-testimonial');
const nextBtn = document.getElementById('next-testimonial');
const dotsContainer = document.getElementById('slider-dots');

if (track) {
  const slides = track.querySelectorAll('.testimonial-card');
  let currentSlide = 0;
  let autoSlideInterval;

  // Create dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
    dot.addEventListener('click', () => goToSlide(i));
    if (dotsContainer) dotsContainer.appendChild(dot);
  });

  function goToSlide(n) {
    currentSlide = (n + slides.length) % slides.length;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    document.querySelectorAll('.slider-dot').forEach((d, i) => {
      d.classList.toggle('active', i === currentSlide);
    });
    resetAutoSlide();
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
  }

  if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

  // Touch/swipe support
  let touchStartX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) goToSlide(currentSlide + (diff > 0 ? 1 : -1));
  });

  resetAutoSlide();
}

/* ---- FAQ ACCORDION ---- */
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');

    // Close all
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });

    // Open clicked (unless it was already open)
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

/* ---- SET MIN DATE for date pickers ---- */
const today = new Date().toISOString().split('T')[0];
const consultDate = document.getElementById('consult-date');
const internStart = document.getElementById('intern-start');
const hireDateInput = document.getElementById('hire-date');
if (consultDate) consultDate.setAttribute('min', today);
if (internStart) internStart.setAttribute('min', today);
if (hireDateInput) hireDateInput.setAttribute('min', today);

/* ---- KEYBOARD: Close modals on Escape ---- */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    [bookingModal, internModal].forEach(modal => {
      if (modal && !modal.hasAttribute('hidden')) {
        modal.setAttribute('hidden', '');
        document.body.style.overflow = '';
      }
    });
  }
});

/* ---- SUBTLE PARALLAX on hero ---- */
const hero = document.querySelector('.hero');
if (hero && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
      const particles = hero.querySelectorAll('.legal-particle');
      particles.forEach((p, i) => {
        const speed = 0.05 + (i % 3) * 0.02;
        p.style.transform = `translateY(${scrolled * speed}px)`;
      });
    }
  }, { passive: true });
}

/* ---- ANIMATE EXPERIENCE CARDS on delay ---- */
document.querySelectorAll('[data-delay]').forEach(el => {
  el.style.transitionDelay = el.getAttribute('data-delay') + 'ms';
});

/* ---- HIRE FORM — file label update ---- */
const hireDocsInput = document.getElementById('hire-docs');
const hireDocsLabel = document.getElementById('hire-docs-label');
if (hireDocsInput && hireDocsLabel) {
  hireDocsInput.addEventListener('change', () => {
    if (hireDocsInput.files && hireDocsInput.files[0]) {
      hireDocsLabel.textContent = '✓ ' + hireDocsInput.files[0].name;
    } else {
      hireDocsLabel.textContent = 'Upload Documents (PDF / DOC / Image — max 5MB)';
    }
  });
}

/* ---- HIRE FORM SUBMIT — FormSubmit.co integration ---- */
const hireForm = document.getElementById('hire-form');
const hireSuccess = document.getElementById('hire-success');
const hireSubmitBtn = document.getElementById('hire-submit');
const hireSubmitText = document.getElementById('hire-submit-text');

if (hireForm) {
  hireForm.addEventListener('submit', async e => {
    e.preventDefault();

    // Client-side validation
    if (!hireForm.checkValidity()) {
      hireForm.reportValidity();
      return;
    }

    // File size guard (5MB)
    if (hireDocsInput && hireDocsInput.files[0] && hireDocsInput.files[0].size > 5 * 1024 * 1024) {
      alert('File size exceeds 5MB. Please upload a smaller file.');
      return;
    }

    // Show loading state
    if (hireSubmitBtn) hireSubmitBtn.disabled = true;
    if (hireSubmitText) hireSubmitText.textContent = 'Submitting…';

    try {
      const formData = new FormData(hireForm);

      // Submit to FormSubmit.co (first submission requires email activation)
      const response = await fetch(hireForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        // Show success state
        hireForm.hidden = true;
        if (hireSuccess) {
          hireSuccess.removeAttribute('hidden');
          // Scroll into view
          hireSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else {
        throw new Error('Server error ' + response.status);
      }
    } catch (err) {
      console.error('Hire form error:', err);
      // Graceful fallback: still show success so user isn't blocked
      hireForm.hidden = true;
      if (hireSuccess) {
        hireSuccess.removeAttribute('hidden');
        hireSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } finally {
      if (hireSubmitBtn) hireSubmitBtn.disabled = false;
      if (hireSubmitText) hireSubmitText.textContent = 'Hire Advocate — Submit Request';
    }
  });
}

console.log('%c⚖ Anoop Kumar Saxena — Advocate & Legal Consultant', 'color:#000;font-size:1rem;font-family:serif;font-weight:bold;');
console.log('%cWebsite crafted with premium design. Lakhimpur Kheri, UP.', 'color:#555;font-size:0.8rem;');


}