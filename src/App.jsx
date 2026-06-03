
import React, { useEffect } from 'react';
import './index.css';
import { initApp } from './script.js';

function App() {
  useEffect(() => {
    initApp();
  }, []);

  return (
    <>
      

  {/* ========== PRELOADER ========== */}
  <div id="preloader">
    <div className="preloader-inner">
      <div className="scales-icon">⚖</div>
      <div className="preloader-bar">
        <div className="preloader-fill"></div>
      </div>
      <p>Anoop Kumar Saxena &nbsp;|&nbsp; Advocate</p>
    </div>
  </div>

  {/* ========== WHATSAPP FLOATING BUTTON ========== */}
  <a href="https://wa.me/919415194180" target="_blank" id="whatsapp-btn" aria-label="Chat on WhatsApp">
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  </a>

  {/* ========== NAVIGATION ========== */}
  <nav id="navbar">
    <div className="nav-container">
      <a href="#home" className="nav-logo">
        <span className="logo-scales">⚖</span>
        <div className="logo-text">
          <span className="logo-name">Anoop Kumar Saxena</span>
          <span className="logo-title">Advocate &amp; Legal Consultant</span>
        </div>
      </a>
      <button className="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <ul className="nav-links" id="nav-links">
        <li><a href="#home" className="nav-link active">Home</a></li>
        <li><a href="#about" className="nav-link">About</a></li>
        <li><a href="#experience" className="nav-link">Experience</a></li>
        <li><a href="#practice" className="nav-link">Practice</a></li>
        <li><a href="#consultation" className="nav-link">Consultation</a></li>
        <li><a href="#hire" className="nav-link">Hire Advocate</a></li>
        <li><a href="#internship" className="nav-link">Internship</a></li>
        <li><a href="#contact" className="nav-link">Contact</a></li>
        <li><a href="#hire" className="nav-cta-btn">Hire Now</a></li>
      </ul>
    </div>
  </nav>

  {/* ========== HERO SECTION ========== */}
  <section id="home" className="hero">
    <div className="hero-bg-animation">
      <div className="legal-particle" style={{"--x":"10%","--y":"20%","--d":"6s"}}>⚖</div>
      <div className="legal-particle" style={{"--x":"85%","--y":"15%","--d":"8s"}}>§</div>
      <div className="legal-particle" style={{"--x":"5%","--y":"70%","--d":"7s"}}>⚖</div>
      <div className="legal-particle" style={{"--x":"90%","--y":"75%","--d":"5s"}}>§</div>
      <div className="legal-particle" style={{"--x":"30%","--y":"85%","--d":"6.5s"}}>§</div>
    </div>
    <div className="hero-grid-overlay"></div>
    <div className="hero-container">
      <div className="hero-content" data-animate="fade-left">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Available for Consultation
        </div>
        <h1 className="hero-name">Anoop Kumar<br /><em>Saxena</em></h1>
        <p className="hero-designation">Advocate &nbsp;|&nbsp; LL.M. &nbsp;|&nbsp; Legal Consultant</p>
        <p className="hero-tagline">20+ Years of Excellence in Criminal, Family<br />&amp; Juvenile Justice Law</p>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number" data-count="20">0</span><span className="stat-plus">+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number" data-count="1500">0</span><span className="stat-plus">+</span>
            <span className="stat-label">Cases Handled</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number" data-count="500">0</span><span className="stat-plus">+</span>
            <span className="stat-label">Clients Served</span>
          </div>
        </div>
        <div className="hero-buttons">
          <a href="#hire" className="btn btn-primary" id="hero-hire-btn">
            <span>Hire Advocate Now</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#consultation" className="btn btn-secondary" id="hero-book-btn">
            <span>Book Consultation</span>
          </a>
          <a href="#contact" className="btn btn-outline" id="hero-contact-btn">
            <span>Contact Now</span>
          </a>
        </div>
        <div className="hero-reg">
          <span>Bar Council Reg. No. <strong>9952/2002</strong></span>
          <span className="sep">|</span>
          <span>COP No. <strong>R1-000698</strong></span>
        </div>
      </div>
      <div className="hero-image-wrap" data-animate="fade-right">
        <div className="hero-image-frame">
          <img src="advocate.png" alt="Advocate Anoop Kumar Saxena — Senior Advocate, Lakhimpur Kheri"
            className="hero-photo" />
          <div className="hero-image-badge">
            <span>⚖</span>
            <div>
              <strong>Senior Advocate</strong>
              <small>Civil Court, Lakhimpur Kheri</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="hero-scroll-indicator">
      <span>Scroll to Explore</span>
      <div className="scroll-arrow"></div>
    </div>
  </section>

  {/* ========== ABOUT SECTION ========== */}
  <section id="about" className="about section">
    <div className="container">
      <div className="section-header" data-animate="fade-up">
        <span className="section-tag">About</span>
        <h2 className="section-title">A Legacy of <em>Justice &amp; Integrity</em></h2>
        <div className="section-line"></div>
      </div>
      <div className="about-grid">
        <div className="about-text" data-animate="fade-left">
          <p className="about-lead">For over two decades, Advocate Anoop Kumar Saxena has stood as a pillar of legal
            excellence in Lakhimpur Kheri, Uttar Pradesh — a trusted name in criminal litigation, family law, and
            juvenile justice.</p>
          <p>Holding an LL.B. from the University of Lucknow and an LL.M. from Dr. Ram Manohar Lohiya National Law
            University, Advocate Saxena brings exceptional academic credentials combined with deep courtroom experience.
            Enrolled with the Bar Council since 2002, he has navigated thousands of complex legal matters with
            precision, empathy, and unwavering commitment.</p>
          <p>His distinguished service as a Member of the Child Welfare Committee (CWC) from 2016 to 2021 reflects his
            profound dedication to child rights and juvenile justice. As Visiting Faculty at Manu Law College since
            2013, he continues to shape the next generation of legal minds.</p>
          <div className="about-highlights">
            <div className="highlight-item">
              <div className="highlight-icon">🎓</div>
              <div>
                <strong>LL.M. — Dr. RML National Law University</strong>
                <small>Master of Laws — Specialized Legal Education</small>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">⚖</div>
              <div>
                <strong>Criminal, Family &amp; Juvenile Justice Law</strong>
                <small>20+ Years of Specialized Practice</small>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🏛</div>
              <div>
                <strong>Child Welfare Committee Member</strong>
                <small>Statutory Role — 2016 to 2021</small>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">📚</div>
              <div>
                <strong>Visiting Faculty — Manu Law College</strong>
                <small>Teaching &amp; Mentoring Since 2013</small>
              </div>
            </div>
          </div>
        </div>
        <div className="about-timeline-wrap" data-animate="fade-right">
          <h3 className="timeline-heading">Career Timeline</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2002</div>
              <div className="timeline-content">
                <h4>Enrolled as Advocate</h4>
                <p>Bar Council Registration No. 9952/2002. Commenced legal practice at Civil Court, Lakhimpur Kheri with
                  a focus on criminal litigation and family disputes.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2013</div>
              <div className="timeline-content">
                <h4>Visiting Faculty — Manu Law College</h4>
                <p>Appointed as Visiting Faculty, imparting criminal law knowledge, legal drafting skills, and practical
                  courtroom guidance to aspiring advocates.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2016</div>
              <div className="timeline-content">
                <h4>Member — Child Welfare Committee</h4>
                <p>Appointed as statutory member of the CWC under the Juvenile Justice Act, 2015. Served with
                  distinction for five years, protecting child rights and overseeing rehabilitation.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2021</div>
              <div className="timeline-content">
                <h4>Continued Practice &amp; Mentorship</h4>
                <p>Concluded CWC tenure and continued advancing his legal practice while actively mentoring law students
                  and serving clients across all courts in Lakhimpur Kheri.</p>
              </div>
            </div>
            <div className="timeline-item timeline-current">
              <div className="timeline-year">2024+</div>
              <div className="timeline-content">
                <h4>Online Legal Consultations</h4>
                <p>Expanded services to include online legal consultations via video conferencing, making justice
                  accessible to clients across India.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* ========== EXPERIENCE SECTION ========== */}
  <section id="experience" className="experience section section-dark">
    <div className="container">
      <div className="section-header" data-animate="fade-up">
        <span className="section-tag light">Professional Experience</span>
        <h2 className="section-title light">Decades of <em>Dedicated Practice</em></h2>
        <div className="section-line light"></div>
      </div>

      <div className="exp-cards">
        {/* Card 1: Practicing Advocate */}
        <div className="exp-card" data-animate="fade-up" data-delay="0">
          <div className="exp-card-header">
            <div className="exp-icon">⚖</div>
            <div className="exp-meta">
              <h3>Practicing Advocate</h3>
              <span className="exp-duration">Since 2002 &nbsp;|&nbsp; 20+ Years</span>
            </div>
          </div>
          <p className="exp-intro">A highly experienced courtroom advocate with over two decades of practice across
            criminal, civil, and family law matters at the Civil Court, Lakhimpur Kheri, and higher courts across Uttar
            Pradesh.</p>
          <ul className="exp-list">
            <li><strong>Criminal Litigation</strong> — Trial court representation in sessions cases, bail hearings,
              appeals, and revisions under IPC, CrPC, and special statutes.</li>
            <li><strong>Family Law Disputes</strong> — Divorce proceedings, maintenance, child custody, matrimonial
              property disputes, and domestic violence cases.</li>
            <li><strong>Juvenile Justice Matters</strong> — Representation before Juvenile Justice Boards and Child
              Welfare Committees in care and protection cases.</li>
            <li><strong>Bail Applications</strong> — Regular, anticipatory, and interim bail applications with strong
              track record.</li>
            <li><strong>Legal Notices</strong> — Drafting and responding to legal notices under civil and criminal law.
            </li>
            <li><strong>Court Representation</strong> — Full representation from filing to final arguments in trial and
              appellate courts.</li>
            <li><strong>Client Counseling</strong> — Empathetic and practical legal guidance tailored to client
              circumstances.</li>
            <li><strong>Legal Drafting</strong> — Petitions, plaints, written statements, affidavits, agreements, and
              conveyance deeds.</li>
          </ul>
        </div>

        {/* Card 2: CWC Member */}
        <div className="exp-card exp-card-featured" data-animate="fade-up" data-delay="100">
          <div className="exp-card-header">
            <div className="exp-icon">🏛</div>
            <div className="exp-meta">
              <h3>Member — Child Welfare Committee (CWC)</h3>
              <span className="exp-duration">2016 – 2021 &nbsp;|&nbsp; 5 Years</span>
            </div>
          </div>
          <div className="cwc-info-box">
            <h4>What is the Child Welfare Committee?</h4>
            <p>The <strong>Child Welfare Committee (CWC)</strong> is a statutory body constituted under the <em>Juvenile
                Justice (Care and Protection of Children) Act, 2015</em>. It works for the care, protection, treatment,
              development, and rehabilitation of children in need of care and protection — including abandoned,
              neglected, trafficked, and abused children.</p>
          </div>
          <p className="exp-intro">Advocate Saxena served as an active member of the CWC, contributing his legal expertise
            to safeguard the rights and welfare of vulnerable children across Lakhimpur Kheri district.</p>
          <ul className="exp-list">
            <li><strong>Decision Making in Child Welfare Cases</strong> — Adjudicating matters involving children in
              need of care and protection under JJ Act, 2015.</li>
            <li><strong>Rehabilitation Support</strong> — Directing rehabilitation, adoption, foster care, and
              sponsorship for children without families.</li>
            <li><strong>Coordination with Police &amp; NGOs</strong> — Working alongside law enforcement and civil
              society organizations for child rescue and protection.</li>
            <li><strong>Protection of Children's Rights</strong> — Ensuring constitutional and statutory rights of
              children are upheld in every proceeding.</li>
            <li><strong>Counseling &amp; Legal Guidance</strong> — Providing legal and emotional counseling to children
              and their families.</li>
            <li><strong>Welfare Supervision</strong> — Monitoring care institutions and ensuring compliance with child
              welfare norms.</li>
          </ul>
        </div>

        {/* Card 3: Visiting Faculty */}
        <div className="exp-card" data-animate="fade-up" data-delay="200">
          <div className="exp-card-header">
            <div className="exp-icon">📚</div>
            <div className="exp-meta">
              <h3>Visiting Faculty — Manu Law College</h3>
              <span className="exp-duration">Since 2013 &nbsp;|&nbsp; 10+ Years</span>
            </div>
          </div>
          <p className="exp-intro">As a Visiting Faculty at Manu Law College, Advocate Saxena bridges the gap between legal
            theory and courtroom reality, equipping law students with the skills they need to thrive in their legal
            careers.</p>
          <ul className="exp-list">
            <li><strong>Teaching Criminal Law</strong> — Delivering comprehensive lectures on IPC, CrPC, Evidence Act,
              and special criminal legislation.</li>
            <li><strong>Guiding Law Students</strong> — Providing personalized career mentorship and academic guidance
              to LL.B. students.</li>
            <li><strong>Moot Court Mentorship</strong> — Preparing students for moot court competitions, building
              advocacy skills and legal confidence.</li>
            <li><strong>Legal Drafting Education</strong> — Teaching the art of precise legal writing, petition
              drafting, and document preparation.</li>
            <li><strong>Practical Courtroom Guidance</strong> — Offering real-world insights into courtroom dynamics,
              client interaction, and professional conduct.</li>
            <li><strong>Career Counseling</strong> — Mentoring students on bar enrollment, practice areas, and
              professional development.</li>
          </ul>
          <a href="https://udrc.lkouniv.ac.in/College/ViewCollege?q=9BP+1eRdlE8=" target="_blank" rel="noopener" className="btn btn-outline-dark exp-btn"
            id="manu-college-btn">
            Visit Manu Law College ↗
          </a>
        </div>
      </div>
    </div>
  </section>

  {/* ========== QUALIFICATIONS SECTION ========== */}
  <section id="qualifications" className="qualifications section">
    <div className="container">
      <div className="section-header" data-animate="fade-up">
        <span className="section-tag">Qualifications</span>
        <h2 className="section-title">Academic &amp; Professional <em>Credentials</em></h2>
        <div className="section-line"></div>
      </div>
      <div className="qual-grid">
        <div className="qual-card" data-animate="fade-up" data-delay="0">
          <div className="qual-icon">🎓</div>
          <h3>LL.B.</h3>
          <p className="qual-institute">University of Lucknow</p>
          <p className="qual-desc">Bachelor of Laws — Foundation in legal theory, jurisprudence, constitutional law, and
            procedural law from one of India's most prestigious universities.</p>
        </div>
        <div className="qual-card qual-card-featured" data-animate="fade-up" data-delay="100">
          <div className="qual-icon">🏆</div>
          <h3>LL.M.</h3>
          <p className="qual-institute">Dr. Ram Manohar Lohiya National Law University</p>
          <p className="qual-desc">Master of Laws — Advanced specialization in legal subjects from a leading National Law
            University, reflecting superior academic achievement and legal scholarship.</p>
        </div>
        <div className="qual-card" data-animate="fade-up" data-delay="200">
          <div className="qual-icon">⚖</div>
          <h3>Bar Council Registration</h3>
          <p className="qual-institute">Bar Council of Uttar Pradesh</p>
          <p className="qual-desc">Enrolled as Advocate since 2002 with an unblemished professional record spanning over two
            decades of dedicated legal service.</p>
          <div className="qual-reg">
            <div className="reg-item">
              <span className="reg-label">Registration No.</span>
              <span className="reg-value">9952/2002</span>
            </div>
            <div className="reg-item">
              <span className="reg-label">COP No.</span>
              <span className="reg-value">R1-000698</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* ========== AREAS OF PRACTICE SECTION ========== */}
  <section id="practice" className="practice section section-gray">
    <div className="container">
      <div className="section-header" data-animate="fade-up">
        <span className="section-tag">Expertise</span>
        <h2 className="section-title">Areas of <em>Legal Practice</em></h2>
        <div className="section-line"></div>
      </div>
      <div className="practice-grid">
        <div className="practice-card" data-animate="fade-up" data-delay="0">
          <div className="practice-icon-wrap"><span className="picon">⚖</span></div>
          <h3>Criminal Law</h3>
          <p>Expert representation in criminal trials, sessions court matters, bail applications, anticipatory bail,
            appeals, and revisions under IPC, CrPC, and special criminal statutes.</p>
        </div>
        <div className="practice-card" data-animate="fade-up" data-delay="80">
          <div className="practice-icon-wrap"><span className="picon">👨‍👩‍👧</span></div>
          <h3>Juvenile Justice</h3>
          <p>Specialized practice before Juvenile Justice Boards and Child Welfare Committees. Experienced in care,
            protection, rehabilitation, and juvenile trial matters under JJ Act, 2015.</p>
        </div>
        <div className="practice-card" data-animate="fade-up" data-delay="160">
          <div className="practice-icon-wrap"><span className="picon">🏠</span></div>
          <h3>Family Law</h3>
          <p>Comprehensive family law practice including divorce, maintenance, child custody, guardianship, matrimonial
            property disputes, and protection under domestic violence laws.</p>
        </div>
        <div className="practice-card" data-animate="fade-up" data-delay="240">
          <div className="practice-icon-wrap"><span className="picon">💬</span></div>
          <h3>Legal Counseling</h3>
          <p>Professional legal counseling with a focus on practical solutions. Helping clients understand their rights,
            options, and best course of action in complex legal situations.</p>
        </div>
        <div className="practice-card" data-animate="fade-up" data-delay="320">
          <div className="practice-icon-wrap"><span className="picon">🏛</span></div>
          <h3>Court Litigation</h3>
          <p>Full-spectrum litigation services from filing to final hearing in civil courts, family courts, sessions
            courts, and high court proceedings across Uttar Pradesh.</p>
        </div>
        <div className="practice-card" data-animate="fade-up" data-delay="400">
          <div className="practice-icon-wrap"><span className="picon">📝</span></div>
          <h3>Legal Drafting</h3>
          <p>Expert drafting of legal documents including petitions, plaints, written statements, agreements, deeds,
            affidavits, legal notices, and court submissions.</p>
        </div>
        <div className="practice-card" data-animate="fade-up" data-delay="480">
          <div className="practice-icon-wrap"><span className="picon">🛡</span></div>
          <h3>Child Welfare Matters</h3>
          <p>Deep expertise in child protection matters, child rights advocacy, adoption procedures, foster care
            regulations, and representation before child welfare authorities.</p>
        </div>
      </div>
    </div>
  </section>

  {/* ========== LEGAL QUOTE SECTION ========== */}
  <section className="quote-section">
    <div className="container">
      <div className="quote-carousel" id="quote-carousel">
        <blockquote className="legal-quote active">
          <span className="quote-mark">"</span>
          The first duty of society is justice.
          <footer>— Alexander Hamilton</footer>
        </blockquote>
        <blockquote className="legal-quote">
          <span className="quote-mark">"</span>
          Justice is the constant and perpetual will to allot to every man his due.
          <footer>— Justinian I</footer>
        </blockquote>
        <blockquote className="legal-quote">
          <span className="quote-mark">"</span>
          In law, justice is never given; it has to be won through perseverance and integrity.
          <footer>— Legal Maxim</footer>
        </blockquote>
      </div>
    </div>
  </section>

  {/* ========== PAID COUNSELING SECTION ========== */}
  <section id="consultation" className="consultation section">
    <div className="container">

      {/* Section Header */}
      <div className="section-header" data-animate="fade-up">
        <span className="section-tag">Online Services</span>
        <h2 className="section-title">Online Legal &amp; <em>Career Counseling</em></h2>
        <div className="section-line"></div>
        <p className="section-subtitle">Professional Guidance for Law Students, Parents &amp; Individuals</p>
      </div>

      {/* Comparison Card */}
      <div className="compare-card" data-animate="fade-up">
        <div className="compare-col compare-paid">
          <div className="compare-badge">💳 Paid</div>
          <h4>Career &amp; Legal Counseling</h4>
          <ul>
            <li>✓ Career Guidance in Law</li>
            <li>✓ Student Mentorship</li>
            <li>✓ Juvenile &amp; Family Counseling</li>
            <li>✓ Internship Guidance</li>
            <li>✓ Personal Guidance Sessions</li>
            <li>✓ Google Meet / Zoom Session</li>
            <li>✓ Confirmation after Payment</li>
          </ul>
          <div className="compare-fee">₹1,000 – ₹2,000</div>
          <a href="#paid-counseling-form" className="btn btn-primary compare-btn">Book Paid Session</a>
        </div>
        <div className="compare-divider">
          <span>VS</span>
        </div>
        <div className="compare-col compare-free">
          <div className="compare-badge free-badge">🆓 Free</div>
          <h4>Case Discussion &amp; Hire Advocate</h4>
          <ul>
            <li>✓ Criminal Case Discussion</li>
            <li>✓ Bail Application Inquiry</li>
            <li>✓ Family / Divorce Matters</li>
            <li>✓ Juvenile Justice Cases</li>
            <li>✓ Court Representation Request</li>
            <li>✓ No Charges for Initial Inquiry</li>
            <li>✓ Call / WhatsApp / Form</li>
          </ul>
          <div className="compare-fee free-fee">100% Free</div>
          <a href="#hire" className="btn btn-outline-dark compare-btn">Free Case Discussion</a>
        </div>
      </div>

      {/* Confidential Badge */}
      <div className="confidential-bar" data-animate="fade-up">
        <span>🔒</span>
        <strong>100% Confidential &amp; Professional</strong>
        <span className="conf-sep">|</span>
        <span>All sessions and case details are strictly protected under attorney-client privilege.</span>
      </div>

      {/* Join Session Panel — Post-Payment Access */}
      <div className="join-session-panel" data-animate="fade-up">
        <div className="join-session-inner" id="join-form-wrap">
          <div className="join-session-header">
            <h4>Access Your Session</h4>
            <p>Join your scheduled premium video consultation securely.</p>
          </div>
          <form className="join-session-form" id="join-session-form" novalidate>
            <div className="join-fields">
              <div className="form-group">
                <input type="email" id="join-email" placeholder="Enter your registered email" required autoComplete="email" />
              </div>
              <div className="form-group">
                <input type="text" id="join-code" placeholder="Enter meeting ID or access code" required />
              </div>
            </div>
            <button type="submit" className="btn" id="join-session-btn">
              JOIN SESSION
            </button>
          </form>
        </div>
      </div>

      {/* Paid Counseling Layout */}
      <div className="consultation-layout" id="paid-counseling-form">

        {/* Plans */}
        <div className="consult-pricing" data-animate="fade-left">
          <h3>Counseling Plans</h3>

          <div className="price-card" id="price-basic">
            <div className="price-icon">📋</div>
            <h4>Basic Counseling Session</h4>
            <div className="price-amount">₹1,000</div>
            <p>One focused session covering career options, legal awareness, student guidance or personal legal queries.</p>
            <ul className="price-features">
              <li>✓ 30-minute Google Meet / Zoom</li>
              <li>✓ Career path in law</li>
              <li>✓ Legal awareness queries</li>
              <li>✓ Student mentorship</li>
              <li>✓ Confirmation after payment</li>
            </ul>
            <button className="btn btn-outline-dark price-select" data-plan="Basic Counseling — ₹1,000" data-fee="1000">Select Plan</button>
          </div>

          <div className="price-card price-card-premium" id="price-detailed">
            <div className="price-badge">Recommended</div>
            <div className="price-icon">⚖</div>
            <h4>Detailed Professional Guidance</h4>
            <div className="price-amount">₹2,000</div>
            <p>In-depth session with comprehensive guidance — ideal for law graduates, aspirants, families &amp; individuals needing detailed legal clarity.</p>
            <ul className="price-features">
              <li>✓ 60-minute dedicated session</li>
              <li>✓ Detailed career roadmap</li>
              <li>✓ Juvenile &amp; family counseling</li>
              <li>✓ Internship &amp; bar enrollment guidance</li>
              <li>✓ Written summary shared post-session</li>
              <li>✓ Confirmation after payment</li>
            </ul>
            <button className="btn btn-primary price-select" data-plan="Detailed Guidance — ₹2,000" data-fee="2000">Select Plan</button>
          </div>

          {/* Services list */}
          <div className="counsel-services">
            <h4>Available Counseling Topics</h4>
            <div className="counsel-tags">
              <span>Career in Law</span><span>Legal Awareness</span><span>Student Mentorship</span>
              <span>Juvenile Counseling</span><span>Family Counseling</span><span>Internship Guidance</span>
              <span>Bar Enrollment</span><span>Personal Guidance</span>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="consult-form-wrap" data-animate="fade-right">
          <form id="consultation-form" className="consult-form"
            action="https://formsubmit.co/advanoopsaxena@gmail.com"
            method="POST" novalidate>

            <input type="hidden" name="_subject" value="New Paid Counseling Booking" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_autoresponse" value="Thank you for booking a counseling session with Advocate Anoop Kumar Saxena. Your request has been received. After payment confirmation, your meeting link and schedule will be shared. For queries call +91 9415194180." />

            <h3>Book Paid Counseling Session</h3>
            <div className="selected-plan-display">
              Selected Plan: <strong id="plan-name-display">Please select a plan →</strong>
            </div>
            <input type="hidden" name="Selected Plan" id="selected-plan" value="" />

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="consult-name">Full Name *</label>
                <input type="text" id="consult-name" name="Full Name" placeholder="Your full name" required autoComplete="name" />
              </div>
              <div className="form-group">
                <label htmlFor="consult-phone">Mobile Number *</label>
                <input type="tel" id="consult-phone" name="Mobile Number" placeholder="+91 XXXXX XXXXX" required autoComplete="tel" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="consult-email">Email Address *</label>
              <input type="email" id="consult-email" name="Email Address" placeholder="your@email.com" required autoComplete="email" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="consult-type">Counseling Type *</label>
                <select id="consult-type" name="Counseling Type" required>
                  <option value="" disabled selected>Select type</option>
                  <option>Career Guidance in Law</option>
                  <option>Legal Awareness Session</option>
                  <option>Student Mentorship</option>
                  <option>Juvenile Counseling</option>
                  <option>Family Counseling</option>
                  <option>Internship Guidance</option>
                  <option>Bar Enrollment Guidance</option>
                  <option>Personal Guidance Session</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="consult-date">Preferred Date *</label>
                <input type="date" id="consult-date" name="Preferred Date" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="consult-time">Preferred Time Slot *</label>
                <select id="consult-time" name="Time Slot" required>
                  <option value="" disabled selected>Select time slot</option>
                  <option>10:00 AM – 11:00 AM</option>
                  <option>11:00 AM – 12:00 PM</option>
                  <option>12:00 PM – 01:00 PM</option>
                  <option>02:00 PM – 03:00 PM</option>
                  <option>03:00 PM – 04:00 PM</option>
                  <option>04:00 PM – 05:00 PM</option>
                  <option>06:00 PM – 07:00 PM</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="consult-platform">Platform</label>
                <select id="consult-platform" name="Platform">
                  <option>Google Meet</option>
                  <option>Zoom</option>
                  <option>Phone Call</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="consult-message">Your Query / Message *</label>
              <textarea id="consult-message" name="Query Message" rows="4" placeholder="Briefly describe what you need guidance on..." required></textarea>
            </div>

            <div className="payment-note" id="payment-note">
              <span>💳</span>
              <div>
                <strong>Payment Required Before Confirmation</strong>
                <p>After submitting this form, you will receive UPI / bank payment details via email or WhatsApp. Your session will be confirmed only after payment is verified.</p>
              </div>
            </div>

            <div className="consult-cta-row">
              <button type="submit" className="btn btn-primary btn-full" id="consult-submit-btn">
                <span id="consult-submit-text">Book Paid Counseling Session</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
            <p style={{"text-align":"center","font-size":"0.75rem","color":"var(--gray-400)","margin-top":"0.5rem"}}>
              🔒 Secure &amp; Confidential. Payment details sent after form submission.
            </p>
          </form>

          {/* Consultation Success */}
          <div id="consult-success" className="hire-success" hidden>
            <div className="hire-success-icon">✓</div>
            <h3>Booking Request Received!</h3>
            <p>Your counseling booking has been submitted. Payment details will be sent to your email/WhatsApp shortly.</p>
            <p className="hire-success-sub">Session will be confirmed after payment. Call <strong>+91 9415194180</strong> for urgent queries.</p>
            <div className="hire-success-btns">
              <a href="tel:+919415194180" className="btn btn-primary">📞 Call Now</a>
              <a href="https://wa.me/919415194180" target="_blank" className="btn btn-wa">💬 WhatsApp</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
  {/* ========== END PAID COUNSELING SECTION ========== */}


  {/* ========== INTERNSHIP SECTION ========== */}
  <section id="internship" className="internship section section-dark">
    <div className="container">
      <div className="section-header" data-animate="fade-up">
        <span className="section-tag light">Internship</span>
        <h2 className="section-title light">Shape Your Legal <em>Career</em></h2>
        <div className="section-line light"></div>
        <p className="section-subtitle light">Intern under a seasoned advocate with 20+ years of courtroom experience and
          academic mentorship.</p>
      </div>

      <div className="internship-layout">
        <div className="internship-benefits" data-animate="fade-left">
          <h3>Why Intern with Advocate Saxena?</h3>
          <div className="benefit-list">
            <div className="benefit-item">
              <span className="benefit-num">01</span>
              <div>
                <h4>Real Courtroom Experience</h4>
                <p>Attend live court proceedings, observe trial advocacy, cross-examination techniques, and argument
                  presentation in actual criminal and family law cases.</p>
              </div>
            </div>
            <div className="benefit-item">
              <span className="benefit-num">02</span>
              <div>
                <h4>Legal Drafting Mastery</h4>
                <p>Learn to draft bail applications, petitions, plaints, written statements, affidavits, and legal
                  notices under expert supervision.</p>
              </div>
            </div>
            <div className="benefit-item">
              <span className="benefit-num">03</span>
              <div>
                <h4>Client Handling Skills</h4>
                <p>Understand client counseling, intake procedures, case assessment, and building attorney-client trust
                  — essential skills not taught in law schools.</p>
              </div>
            </div>
            <div className="benefit-item">
              <span className="benefit-num">04</span>
              <div>
                <h4>Criminal Litigation Expertise</h4>
                <p>Gain hands-on exposure to criminal litigation from FIR to final judgment — bail hearings, charge
                  framing, trial, and appeal stages.</p>
              </div>
            </div>
            <div className="benefit-item">
              <span className="benefit-num">05</span>
              <div>
                <h4>Family Law Procedures</h4>
                <p>Learn family court procedures, matrimonial law practice, custody hearings, maintenance proceedings,
                  and mediation techniques.</p>
              </div>
            </div>
            <div className="benefit-item">
              <span className="benefit-num">06</span>
              <div>
                <h4>Academic Mentorship</h4>
                <p>Benefit from guidance of a faculty member who understands both the academic and practical dimensions
                  of law — exam preparation, career planning, and professional development.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="internship-form-wrap" data-animate="fade-right">
          <form className="internship-form" id="internship-form" 
            action="https://formsubmit.co/narainshivansh4@gmail.com"
            method="POST"
            encType="multipart/form-data"
            novalidate>
            <input type="hidden" name="_subject" value="New Internship Application Received" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_autoresponse" value="Thank you for applying for an internship with Advocate Anoop Kumar Saxena. We have received your application and will review your profile. We will contact you within 3–5 business days if your profile matches our requirements." />
            <h3>Apply for Internship</h3>
            <p className="form-intro">Open for LL.B. students (1st–5th year) and fresh law graduates. Limited seats — Apply
              now.</p>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="intern-name">Full Name *</label>
                <input type="text" id="intern-name" name="name" placeholder="Your full name" required
                  autoComplete="name" />
              </div>
              <div className="form-group">
                <label htmlFor="intern-phone">Phone Number *</label>
                <input type="tel" id="intern-phone" name="phone" placeholder="+91 XXXXX XXXXX" required
                  pattern="^(?:\+91|91)?[6-9]\d{9}$"
                  title="Please enter a valid 10-digit Indian phone number"
                  autoComplete="tel" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="intern-email">Email Address *</label>
              <input type="email" id="intern-email" name="email" placeholder="your@email.com" required
                autoComplete="email" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="intern-college">Law College / University *</label>
                <input type="text" id="intern-college" name="college" placeholder="Your college name" required />
              </div>
              <div className="form-group">
                <label htmlFor="intern-year">Year of Study *</label>
                <select id="intern-year" name="year" required>
                  <option value="" disabled selected>Select year</option>
                  <option>1st Year LL.B.</option>
                  <option>2nd Year LL.B.</option>
                  <option>3rd Year LL.B.</option>
                  <option>4th Year LL.B.</option>
                  <option>5th Year LL.B.</option>
                  <option>LL.B. Graduate</option>
                  <option>LL.M. Student</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="intern-duration">Internship Duration *</label>
                <select id="intern-duration" name="duration" required>
                  <option value="" disabled selected>Select duration</option>
                  <option>2 Weeks</option>
                  <option>1 Month</option>
                  <option>2 Months</option>
                  <option>3 Months</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="intern-start">Preferred Start Date</label>
                <input type="date" id="intern-start" name="startDate" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="intern-message">Why do you want to intern here?</label>
              <textarea id="intern-message" name="message" rows="3"
                placeholder="Tell us about your interest areas and career goals..."></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="intern-resume" className="file-label">
                <span className="file-icon">📄</span>
                <span id="resume-label-text">Upload Resume (Optional, PDF)</span>
                <input type="file" id="intern-resume" name="attachment" accept=".pdf" className="file-input" />
              </label>
            </div>
            <button type="submit" className="btn btn-outline-light btn-full" id="internship-submit">
              <span id="intern-submit-text">Apply for Internship →</span>
            </button>
          </form>
        </div>
      </div>
    </div>

    {/* Internship confirmation modal */}
    <div id="intern-modal" className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="intern-modal-title"
      hidden>
      <div className="modal-box modal-box-dark">
        <div className="modal-icon">✓</div>
        <h3 id="intern-modal-title">Application Received!</h3>
        <p>Thank you for applying! Your internship application has been submitted. We will review your profile and reach
          out within 3–5 business days.</p>
        <button className="btn btn-outline-light" id="close-intern-modal">Close</button>
      </div>
    </div>
  </section>

  {/* ========== TESTIMONIALS SECTION ========== */}
  <section id="testimonials" className="testimonials section">
    <div className="container">
      <div className="section-header" data-animate="fade-up">
        <span className="section-tag">Testimonials</span>
        <h2 className="section-title">What Clients <em>Say</em></h2>
        <div className="section-line"></div>
      </div>
      <div className="testimonial-slider" id="testimonial-slider" data-animate="fade-up">
        <div className="testimonial-track" id="testimonial-track">
          <div className="testimonial-card">
            <div className="testimonial-quote-icon">"</div>
            <p>"Highly experienced advocate with excellent courtroom knowledge. Advocate Saxena handled my criminal case
              with exceptional skill and dedication. His deep understanding of law and strategic thinking made all the
              difference."</p>
            <div className="testimonial-author">
              <div className="author-avatar">R</div>
              <div>
                <strong>Ramesh Kumar</strong>
                <span>Criminal Case Client</span>
              </div>
              <div className="stars">★★★★★</div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-quote-icon">"</div>
            <p>"Very supportive and professional legal guidance. He understood my family dispute situation with great
              empathy and provided clear, practical advice. My custody case was resolved favorably thanks to his
              expertise."</p>
            <div className="testimonial-author">
              <div className="author-avatar">P</div>
              <div>
                <strong>Priya Sharma</strong>
                <span>Family Law Client</span>
              </div>
              <div className="stars">★★★★★</div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-quote-icon">"</div>
            <p>"Excellent counseling and practical legal advice. Advocate Saxena's expertise in juvenile justice matters
              is unmatched. He navigated the complex JJ proceedings with great competence and compassion."</p>
            <div className="testimonial-author">
              <div className="author-avatar">A</div>
              <div>
                <strong>Anil Verma</strong>
                <span>Juvenile Justice Client</span>
              </div>
              <div className="stars">★★★★★</div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-quote-icon">"</div>
            <p>"As a law student who interned under Advocate Saxena, I can say it was the most transformative experience
              of my legal education. The practical knowledge I gained is invaluable for my career."</p>
            <div className="testimonial-author">
              <div className="author-avatar">S</div>
              <div>
                <strong>Sneha Tiwari</strong>
                <span>Intern, LL.B. 4th Year</span>
              </div>
              <div className="stars">★★★★★</div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-quote-icon">"</div>
            <p>"Outstanding bail advocacy. He obtained anticipatory bail in a very complex matter that others said was
              impossible. His knowledge of criminal law and court procedures is extraordinary."</p>
            <div className="testimonial-author">
              <div className="author-avatar">M</div>
              <div>
                <strong>Mahesh Singh</strong>
                <span>Criminal Case Client</span>
              </div>
              <div className="stars">★★★★★</div>
            </div>
          </div>
        </div>
        <div className="slider-controls">
          <button className="slider-btn" id="prev-testimonial" aria-label="Previous testimonial">‹</button>
          <div className="slider-dots" id="slider-dots"></div>
          <button className="slider-btn" id="next-testimonial" aria-label="Next testimonial">›</button>
        </div>
      </div>
    </div>
  </section>

  {/* ========== FREE CASE DISCUSSION / HIRE SECTION ========== */}
  <section id="hire" className="hire section section-gray">
    <div className="container">

      {/* Section Header */}
      <div className="section-header" data-animate="fade-up">
        <span className="section-tag">Legal Representation</span>
        <h2 className="section-title">Discuss Your <em>Legal Case</em></h2>
        <div className="section-line"></div>
        <p className="section-subtitle">Free Initial Discussion for Legal Cases — No Charges for Inquiry or Hiring</p>
      </div>

      {/* Free Notice Banner */}
      <div className="free-notice-banner" data-animate="fade-up">
        <div className="free-notice-left">
          <span className="free-pill">🆓 FREE</span>
          <div>
            <strong>Case Discussion &amp; Initial Legal Inquiry are Completely Free</strong>
            <span>No counseling charges apply for discussing or hiring legal services. Call, WhatsApp, or fill the form below.</span>
          </div>
        </div>
        <div className="free-notice-right">
          <a href="tel:+919415194180" className="emergency-call-btn" id="free-call-top">📞 +91 9415194180</a>
          <a href="https://wa.me/919415194180?text=I%20want%20to%20discuss%20my%20legal%20case" target="_blank" className="emergency-wa-btn" id="free-wa-top">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp
          </a>
        </div>
      </div>

      {/* Services Grid */}
      <div className="hire-services-grid" data-animate="fade-up">
        <div className="hire-service-card">
          <div className="hsc-icon">⚖</div>
          <h4>Criminal Cases</h4>
          <p>IPC offences, sessions trials, High Court matters, appeals &amp; revisions.</p>
          <span className="hsc-tag">Criminal Law</span>
        </div>
        <div className="hire-service-card">
          <div className="hsc-icon">🔓</div>
          <h4>Bail Matters</h4>
          <p>Regular bail, anticipatory bail, interim bail &amp; surety matters before all courts.</p>
          <span className="hsc-tag">Bail &amp; Custody</span>
        </div>
        <div className="hire-service-card">
          <div className="hsc-icon">🏠</div>
          <h4>Family Disputes</h4>
          <p>Divorce, maintenance, child custody, guardianship &amp; domestic violence cases.</p>
          <span className="hsc-tag">Family Law</span>
        </div>
        <div className="hire-service-card hire-service-card-featured">
          <div className="hsc-badge">Most Sought</div>
          <div className="hsc-icon">👶</div>
          <h4>Juvenile Justice</h4>
          <p>JJ Board appearances, care &amp; protection proceedings, CWC matters.</p>
          <span className="hsc-tag">Juvenile Justice</span>
        </div>
        <div className="hire-service-card">
          <div className="hsc-icon">🏛</div>
          <h4>Court Representation</h4>
          <p>Full representation from filing to final hearing in all courts.</p>
          <span className="hsc-tag">Litigation</span>
        </div>
        <div className="hire-service-card">
          <div className="hsc-icon">📝</div>
          <h4>Legal Drafting</h4>
          <p>Petitions, affidavits, legal notices, agreements &amp; court submissions.</p>
          <span className="hsc-tag">Drafting</span>
        </div>
        <div className="hire-service-card">
          <div className="hsc-icon">💬</div>
          <h4>Legal Inquiry</h4>
          <p>Get answers to your legal questions — free, confidential and professional.</p>
          <span className="hsc-tag">Free Inquiry</span>
        </div>
      </div>

      {/* Two-column layout: Why Hire + Free Form */}
      <div className="hire-layout">

        {/* Why Hire / Quick CTAs */}
        <div className="why-hire-panel" data-animate="fade-left">
          <h3 className="why-hire-title">Why Choose Advocate Saxena?</h3>
          <div className="why-hire-list">
            <div className="why-item"><div className="why-num">01</div><div><h4>20+ Years of Experience</h4><p>Continuous legal practice across criminal, family and juvenile matters in UP courts.</p></div></div>
            <div className="why-item"><div className="why-num">02</div><div><h4>Practical Courtroom Knowledge</h4><p>Deep familiarity with court procedures and judicial temperament at all levels.</p></div></div>
            <div className="why-item"><div className="why-num">03</div><div><h4>Child Welfare Committee Member</h4><p>5 years as CWC Member — unmatched expertise in juvenile justice matters.</p></div></div>
            <div className="why-item"><div className="why-num">04</div><div><h4>Personalised Client Approach</h4><p>Every client gets dedicated attention and an honest assessment of their case.</p></div></div>
            <div className="why-item"><div className="why-num">05</div><div><h4>Strict Confidentiality</h4><p>All case details are protected under attorney-client privilege. Your privacy is guaranteed.</p></div></div>
          </div>

          <div className="confidential-notice">
            <span className="lock-icon">🔒</span>
            <div>
              <strong>Secure &amp; Confidential</strong>
              <p>All client information is protected under Bar Council of India professional ethics rules.</p>
            </div>
          </div>

          <div className="hire-quick-btns">
            <a href="tel:+919415194180" className="btn btn-primary" id="hire-call-btn">📞 Call Now</a>
            <a href="https://wa.me/919415194180?text=I%20want%20to%20hire%20Advocate%20Anoop%20Kumar%20Saxena" target="_blank" className="btn btn-wa" id="hire-wa-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
            <a href="#consultation" className="btn btn-outline-dark" id="hire-consult-btn">💳 Paid Counseling</a>
          </div>
        </div>

        {/* Free Case Inquiry Form */}
        <div className="hire-form-wrap" data-animate="fade-right">
          <div className="hire-form-header">
            <div className="hire-form-icon">⚖</div>
            <div>
              <h3>Free Case Discussion Form</h3>
              <p>Submit your case details — our office will contact you shortly. No charges apply.</p>
            </div>
          </div>

          <form
            id="hire-form"
            className="hire-form"
            action="https://formsubmit.co/advanoopsaxena@gmail.com"
            method="POST"
            enctype="multipart/form-data"
            novalidate>

            <input type="hidden" name="_subject" value="New Legal Case Inquiry" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_autoresponse" value="Thank you for contacting Advocate Anoop Kumar Saxena. We have received your legal case inquiry. Our office will contact you shortly. This initial inquiry is completely FREE. For urgent matters, please call +91 9415194180." />

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="hire-name">Full Name *</label>
                <input type="text" id="hire-name" name="Full Name" placeholder="Your full name" required autoComplete="name" />
              </div>
              <div className="form-group">
                <label htmlFor="hire-phone">Phone Number *</label>
                <input type="tel" id="hire-phone" name="Phone Number" placeholder="+91 XXXXX XXXXX" required autoComplete="tel" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="hire-email">Email Address *</label>
              <input type="email" id="hire-email" name="Email Address" placeholder="your@email.com" required autoComplete="email" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="hire-case-type">Case Type *</label>
                <select id="hire-case-type" name="Case Type" required>
                  <option value="" disabled selected>Select case type</option>
                  <option>Criminal Case (IPC/CrPC)</option>
                  <option>Bail Application (Regular)</option>
                  <option>Anticipatory Bail</option>
                  <option>Family Dispute / Divorce</option>
                  <option>Child Custody</option>
                  <option>Maintenance / Alimony</option>
                  <option>Juvenile Justice Matter</option>
                  <option>Child Welfare / CWC</option>
                  <option>Domestic Violence</option>
                  <option>Legal Notice</option>
                  <option>Legal Drafting</option>
                  <option>Other Civil Matter</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="hire-court">Court Name</label>
                <input type="text" id="hire-court" name="Court Name" placeholder="e.g. Civil Court Lakhimpur Kheri" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="hire-description">Brief Case Details *</label>
              <textarea id="hire-description" name="Case Details" rows="4" placeholder="Describe your case briefly — what happened, current status, what help you need..." required></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="hire-contact-method">Preferred Contact Method *</label>
              <select id="hire-contact-method" name="Preferred Contact Method" required>
                <option value="" disabled selected>Select preferred method</option>
                <option>Phone Call</option>
                <option>WhatsApp</option>
                <option>Email</option>
                <option>Chamber Visit</option>
              </select>
            </div>

            <div className="hire-secure-row">
              <span>🔒</span>
              <p>Your information is strictly confidential and protected under attorney-client privilege. This inquiry is completely FREE.</p>
            </div>

            <button type="submit" className="btn btn-primary btn-full hire-submit-btn" id="hire-submit">
              <span id="hire-submit-text">Submit Free Case Inquiry →</span>
            </button>
            <div style={{"display":"flex","gap":"0.75rem","margin-top":"0.75rem"}}>
              <a href="tel:+919415194180" className="btn btn-outline-dark" style={{"flex":"1","text-align":"center"}} id="case-call-btn">📞 Call Now</a>
              <a href="https://wa.me/919415194180?text=I%20want%20free%20case%20discussion" target="_blank" className="btn btn-wa" style={{"flex":"1","text-align":"center"}} id="case-wa-btn">💬 WhatsApp Now</a>
            </div>
            <p className="hire-form-note">Your request has been submitted successfully. Our legal team will contact you shortly.</p>
          </form>

          {/* Success State */}
          <div id="hire-success" className="hire-success" hidden>
            <div className="hire-success-icon">✓</div>
            <h3>Inquiry Submitted Successfully!</h3>
            <p>Your legal inquiry has been submitted successfully. Our office will contact you shortly.</p>
            <p className="hire-success-sub">For urgent matters, call <strong>+91 9415194180</strong> or WhatsApp us directly.</p>
            <div className="hire-success-btns">
              <a href="tel:+919415194180" className="btn btn-primary" id="hire-success-call">📞 Call Now</a>
              <a href="https://wa.me/919415194180" target="_blank" className="btn btn-wa" id="hire-success-wa">💬 WhatsApp</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>

  {/* ========== FAQ SECTION ========== */}
  {/* ========== FAQ SECTION ========== */}
  <section id="faq" className="faq section section-gray">
    <div className="container">
      <div className="section-header" data-animate="fade-up">
        <span className="section-tag">FAQ</span>
        <h2 className="section-title">Frequently Asked <em>Questions</em></h2>
        <div className="section-line"></div>
      </div>
      <div className="faq-list" data-animate="fade-up">
        <div className="faq-item">
          <button className="faq-question" aria-expanded="false">
            How do I book an online consultation?
            <span className="faq-arrow">+</span>
          </button>
          <div className="faq-answer">
            <p>Simply fill out the consultation booking form on this website, select your preferred plan (General at
              ₹1,000 or Detailed Counseling at ₹2,000), choose a date and time slot, and submit. You will receive a
              confirmation and meeting link via email and WhatsApp within 2 hours.</p>
          </div>
        </div>
        <div className="faq-item">
          <button className="faq-question" aria-expanded="false">
            What platforms are used for online consultations?
            <span className="faq-arrow">+</span>
          </button>
          <div className="faq-answer">
            <p>We use Google Meet and Zoom for online consultations. You will receive a meeting link in advance. The
              consultation can be attended from any device — smartphone, tablet, or computer — with an internet
              connection.</p>
          </div>
        </div>
        <div className="faq-item">
          <button className="faq-question" aria-expanded="false">
            What is the difference between General Consultation and Detailed Legal Counseling?
            <span className="faq-arrow">+</span>
          </button>
          <div className="faq-answer">
            <p>General Consultation (₹1,000) is a 30–45 minute session for single legal queries with immediate
              actionable guidance. Detailed Legal Counseling (₹2,000) is a 60–90 minute in-depth session that includes
              document review (up to 5 documents), comprehensive legal strategy, and a follow-up query window within 48
              hours.</p>
          </div>
        </div>
        <div className="faq-item">
          <button className="faq-question" aria-expanded="false">
            How do I make the consultation payment?
            <span className="faq-arrow">+</span>
          </button>
          <div className="faq-answer">
            <p>Payment can be made via UPI or bank transfer. After you submit your booking, we will send UPI payment
              details to your email and WhatsApp. Your consultation slot will be confirmed upon payment receipt.</p>
          </div>
        </div>
        <div className="faq-item">
          <button className="faq-question" aria-expanded="false">
            Who can apply for internship?
            <span className="faq-arrow">+</span>
          </button>
          <div className="faq-answer">
            <p>The internship is open to LL.B. students in any year (1st to 5th), fresh LL.B. graduates, and LL.M.
              students. We have limited seats each month, so early applications are encouraged. Priority is given to
              students with genuine interest in criminal and family law.</p>
          </div>
        </div>
        <div className="faq-item">
          <button className="faq-question" aria-expanded="false">
            In which courts does Advocate Saxena practice?
            <span className="faq-arrow">+</span>
          </button>
          <div className="faq-answer">
            <p>Advocate Saxena primarily practices at the Civil Court, Lakhimpur Kheri, including Sessions Court and
              Family Court. He also appears before the Allahabad High Court in appropriate matters. He is empaneled with
              Chamber No. 13, Netaji Subhash Chandra Bose Adhivakta Chamber, Civil Court, Lakhimpur Kheri.</p>
          </div>
        </div>
        <div className="faq-item">
          <button className="faq-question" aria-expanded="false">
            What languages does Advocate Saxena practice in?
            <span className="faq-arrow">+</span>
          </button>
          <div className="faq-answer">
            <p>Advocate Saxena practices in Hindi and English. He communicates with clients in Hindi and delivers court
              submissions in both Hindi and English as required by the court.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* ========== CONTACT SECTION ========== */}
  <section id="contact" className="contact section">
    <div className="container">
      <div className="section-header" data-animate="fade-up">
        <span className="section-tag">Contact</span>
        <h2 className="section-title">Get in <em>Touch</em></h2>
        <div className="section-line"></div>
        <p className="section-subtitle">Reach out for legal assistance, consultations, or to visit the chamber.</p>
      </div>

      <div className="contact-layout">
        <div className="contact-info" data-animate="fade-left">
          <div className="contact-card">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <h4>Email</h4>
                <a href="mailto:advanoopsaxena@gmail.com" id="contact-email-link">advanoopsaxena@gmail.com</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h4>Phone</h4>
                <a href="tel:+919415194180" id="contact-phone-1">+91 9415194180</a><br />
                <a href="tel:+919236070769" id="contact-phone-2">+91 9236070769</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🏠</div>
              <div>
                <h4>Office Address</h4>
                <address>
                  Mamta Hotel Building,<br />
                  Mishrana Chauraha,<br />
                  Lakhimpur Kheri,<br />
                  Uttar Pradesh – 262701
                </address>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🏛</div>
              <div>
                <h4>Chamber</h4>
                <address>
                  Chamber No. 13,<br />
                  Netaji Subhash Chandra Bose<br />
                  Adhivakta Chamber,<br />
                  Civil Court, Lakhimpur Kheri
                </address>
              </div>
            </div>
          </div>

          <div className="contact-quick-btns">
            <a href="tel:+919415194180" className="quick-btn quick-call" id="quick-call-btn">
              <span>📞</span> Call Now
            </a>
            <a href="https://wa.me/919415194180" target="_blank" className="quick-btn quick-whatsapp"
              id="quick-whatsapp-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <a href="mailto:advanoopsaxena@gmail.com" className="quick-btn quick-email" id="quick-email-btn">
              <span>✉</span> Email
            </a>
          </div>
        </div>

        {/* Google Map embed */}
        <div className="contact-map" data-animate="fade-right">
          <iframe title="Civil Court Lakhimpur Kheri Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.1388059754086!2d80.77917!3d27.9467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3997a14f8c4f5b4d%3A0x7b5c1e0a0a0a0a0a!2sCivil%20Court%2C%20Lakhimpur%20Kheri%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
            width="100%" height="100%" style={{"border":"0"}} allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
          <div className="map-overlay-badge">
            <span>📍</span>
            <div>
              <strong>Civil Court, Lakhimpur Kheri</strong>
              <small>Chamber No. 13</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* ========== FOOTER ========== */}
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <span>⚖</span>
            <div>
              <strong>Anoop Kumar Saxena</strong>
              <small>Advocate &amp; Legal Consultant</small>
            </div>
          </div>
          <p className="footer-tagline">Justice &nbsp;•&nbsp; Integrity &nbsp;•&nbsp; Commitment</p>
          <p className="footer-desc">Senior Advocate specializing in Criminal Law, Family Law &amp; Juvenile Justice with
            20+ years of excellence at Civil Court, Lakhimpur Kheri, Uttar Pradesh.</p>
        </div>

        <div className="footer-links-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#practice">Areas of Practice</a></li>
            <li><a href="#consultation">Book Consultation</a></li>
            <li><a href="#internship">Internship</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4>Practice Areas</h4>
          <ul>
            <li><a href="#practice">Criminal Law</a></li>
            <li><a href="#practice">Family Law</a></li>
            <li><a href="#practice">Juvenile Justice</a></li>
            <li><a href="#practice">Child Welfare</a></li>
            <li><a href="#practice">Legal Drafting</a></li>
            <li><a href="#practice">Court Litigation</a></li>
            <li><a href="#practice">Legal Counseling</a></li>
          </ul>
        </div>

        <div className="footer-contact-col">
          <h4>Contact</h4>
          <p>📧 <a href="mailto:advanoopsaxena@gmail.com">advanoopsaxena@gmail.com</a></p>
          <p>📞 <a href="tel:+919415194180">+91 9415194180</a></p>
          <p>📞 <a href="tel:+919236070769">+91 9236070769</a></p>
          <p>📍 Lakhimpur Kheri, UP – 262701</p>
          <div className="footer-social">
            <a href="https://wa.me/919415194180" target="_blank" aria-label="WhatsApp"
              className="social-icon social-whatsapp">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <a href="mailto:advanoopsaxena@gmail.com" aria-label="Email" className="social-icon social-email">✉</a>
            <a href="tel:+919415194180" aria-label="Phone" className="social-icon social-phone">📞</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Advocate Anoop Kumar Saxena, LL.M. All Rights Reserved.</p>
        <p>Bar Council Reg. No. 9952/2002 &nbsp;|&nbsp; COP No. R1-000698 &nbsp;|&nbsp; Civil Court, Lakhimpur Kheri, UP
        </p>
        <p className="footer-disclaimer">This website is for informational purposes only and does not constitute legal
          advice. Consulting an advocate does not establish an attorney-client relationship unless formally agreed upon.
        </p>
      </div>
    </div>
  </footer>


  {/* ===================================================
       PAYMENT MODAL — 4-Step Secure Booking Flow
       =================================================== */}
  <div id="payment-modal" className="pay-overlay" hidden role="dialog" aria-modal="true" aria-labelledby="pay-modal-title">
    <div className="pay-modal">

      {/* Header */}
      <div className="pay-modal-header">
        <div className="pay-modal-logo">⚖</div>
        <div>
          <h3 id="pay-modal-title">Secure Payment Portal</h3>
          <p>Advocate Anoop Kumar Saxena — Counseling</p>
        </div>
        <button className="pay-modal-close" id="close-payment-modal" aria-label="Close payment modal">✕</button>
      </div>

      {/* Step Indicators */}
      <div className="pay-steps-bar">
        <div className="pay-step-dot active" data-step="1"><span className="step-num">1</span><span className="step-label">Plan</span></div>
        <div className="pay-step-line"></div>
        <div className="pay-step-dot" data-step="2"><span className="step-num">2</span><span className="step-label">Pay</span></div>
        <div className="pay-step-line"></div>
        <div className="pay-step-dot" data-step="3"><span className="step-num">3</span><span className="step-label">Confirm</span></div>
        <div className="pay-step-line"></div>
        <div className="pay-step-dot" data-step="4"><span className="step-num">4</span><span className="step-label">Done</span></div>
      </div>

      {/* STEP 1: Plan Review */}
      <div className="pay-step-body" id="pay-step-1">
        <div className="pay-plan-card">
          <div className="pay-plan-icon-lg" id="pay-plan-icon">📋</div>
          <h4 id="pay-plan-name">Basic Counseling Session</h4>
          <div className="pay-big-amount"><span id="pay-amount-display">₹1,000</span></div>
          <ul className="pay-plan-perks" id="pay-plan-perks">
            <li>✓ 30-minute Google Meet / Zoom session</li>
            <li>✓ Career guidance &amp; legal awareness</li>
            <li>✓ Confirmation sent after payment</li>
          </ul>
          <div className="pay-secure-badge">🔒 Payment verified before meeting link is shared</div>
        </div>
        <button className="btn btn-primary btn-full" id="proceed-to-pay-btn">Proceed to Payment →</button>
      </div>

      {/* STEP 2: UPI Payment */}
      <div className="pay-step-body" id="pay-step-2" hidden>
        <p className="pay-instruction">Scan QR code or use the UPI ID below to complete payment:</p>
        <div className="pay-qr-container">
          <div className="pay-qr-frame">
            <div id="upi-qr-code"></div>
          </div>
          <div className="pay-qr-meta">
            <div className="pay-qr-amount"><strong id="qr-amount-label">₹1,000</strong><span>Counseling Session</span></div>
            <div className="pay-upi-id-row">
              <span className="pay-upi-label">UPI ID</span>
              <span className="pay-upi-value" id="upi-id-text">saxenaanoop11@okaxis</span>
              <button className="pay-copy-btn" id="copy-upi-btn">Copy</button>
            </div>
            <div className="pay-apps-row">
              <span>Pay via:</span>
              <span className="pay-app">PhonePe</span>
              <span className="pay-app">GPay</span>
              <span className="pay-app">Paytm</span>
              <span className="pay-app">BHIM</span>
            </div>
            <div className="pay-amount-note">Amount: <strong id="amount-reminder">₹1,000</strong></div>
          </div>
        </div>
        <button className="btn btn-primary btn-full" id="paid-confirm-btn" style={{"margin-top":"1.5rem"}}>✓ I Have Paid — Enter Details</button>
        <button className="btn btn-ghost btn-full" onclick="goToPayStep(1)" style={{"margin-top":"0.5rem"}}>← Back</button>
      </div>

      {/* STEP 3: Submit UTR / Reference */}
      <div className="pay-step-body" id="pay-step-3" hidden>
        <div className="pay-confirm-note">
          <div className="pay-check-circle">✓</div>
          <p>Great! Now enter your details and <strong>UTR / Transaction Reference Number</strong> so we can verify your payment quickly.</p>
        </div>
        <form id="utr-form" className="utr-form" novalidate>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="utr-name">Full Name *</label>
              <input type="text" id="utr-name" placeholder="Your full name" required autoComplete="name" />
            </div>
            <div className="form-group">
              <label htmlFor="utr-phone">Phone / WhatsApp *</label>
              <input type="tel" id="utr-phone" placeholder="+91 XXXXX XXXXX" required autoComplete="tel" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="utr-email">Email Address *</label>
            <input type="email" id="utr-email" placeholder="your@email.com" required autoComplete="email" />
          </div>
          <div className="form-group">
            <label htmlFor="utr-ref">UTR / Transaction Reference Number *</label>
            <input type="text" id="utr-ref" placeholder="e.g. 423891234567" required />
            <small className="utr-hint">📍 Found in your UPI app → Transaction History → Reference ID / UTR</small>
          </div>
          <div className="utr-info-box">
            <span>⏱</span>
            <p>After submission, your payment is verified within <strong>2–4 hours</strong>. Your <strong>Access Code</strong> and <strong>Meeting Link</strong> will be sent to your email &amp; WhatsApp.</p>
          </div>
          <button type="submit" className="btn btn-primary btn-full" id="utr-submit-btn">
            <span id="utr-submit-text">Submit Payment for Verification</span>
          </button>
          <button type="button" className="btn btn-ghost btn-full" onclick="goToPayStep(2)" style={{"margin-top":"0.5rem"}}>← Back</button>
        </form>
      </div>

      {/* STEP 4: Verification Pending */}
      <div className="pay-step-body" id="pay-step-4" hidden>
        <div className="pay-pending-wrap">
          <div className="pay-pending-anim">⏳</div>
          <h4>Payment Submitted for Verification</h4>
          <p>Thank you! Your payment details have been received. Our team will verify and send your <strong>Access Code</strong> + <strong>Meeting Link</strong> within 2–4 hours.</p>

          <div className="pay-summary-grid">
            <div className="pay-summary-row"><span>Plan</span><strong id="pending-plan">—</strong></div>
            <div className="pay-summary-row"><span>Amount</span><strong id="pending-amount">—</strong></div>
            <div className="pay-summary-row"><span>Sent To</span><strong id="pending-email">—</strong></div>
          </div>

          <div className="pay-progress-steps">
            <div className="pps done">✓ Payment Received</div>
            <div className="pps-line"></div>
            <div className="pps current">⏳ Verification in Progress</div>
            <div className="pps-line"></div>
            <div className="pps">📧 Access Code → Email &amp; WhatsApp</div>
            <div className="pps-line"></div>
            <div className="pps">🎥 Join Your Session</div>
          </div>

          <div className="pay-urgent-wa">
            <p>For faster verification — share UTR on WhatsApp:</p>
            <a href="https://wa.me/919415194180?text=Hello%2C%20I%20have%20completed%20the%20payment%20for%20my%20counseling%20session.%20Please%20verify%20my%20payment." target="_blank" className="btn btn-wa" id="wa-verify-btn">
              💬 WhatsApp for Quick Verification
            </a>
          </div>
          <button className="btn btn-outline-dark btn-full" style={{"margin-top":"1rem"}} onclick="closePaymentModal()">Close</button>
        </div>
      </div>

    </div>
  </div>

  {/* ===================================================
       MEETING MODAL — Post-Payment Session Access
       =================================================== */}
  <div id="meeting-modal" className="pay-overlay" hidden role="dialog" aria-modal="true" aria-labelledby="meeting-modal-title">
    <div className="pay-modal meeting-modal-inner">

      <div className="meeting-success-header">
        <div className="meeting-check-anim">✓</div>
        <div>
          <h3 id="meeting-modal-title">Session Confirmed — Access Granted</h3>
          <p>Your counseling session is ready. Your meeting link is below.</p>
        </div>
        <button className="pay-modal-close" id="close-meeting-modal" aria-label="Close">✕</button>
      </div>

      <div className="meeting-detail-cards">
        <div className="mdc"><span className="mdc-label">Session Type</span><strong className="mdc-val" id="md-type">—</strong></div>
        <div className="mdc"><span className="mdc-label">Date</span><strong className="mdc-val" id="md-date">—</strong></div>
        <div className="mdc"><span className="mdc-label">Time</span><strong className="mdc-val" id="md-time">—</strong></div>
        <div className="mdc"><span className="mdc-label">Platform</span><strong className="mdc-val" id="md-platform">—</strong></div>
      </div>

      <div className="meeting-link-block">
        <div className="mlb-title">
          <span id="md-platform-icon">🎥</span>
          <span id="md-link-title">Meeting Link</span>
          <span className="mlb-secure-tag">🔒 Secure</span>
        </div>
        <div className="mlb-link-row">
          <input type="text" id="md-link-display" className="mlb-link-input" readonly />
          <button className="pay-copy-btn" onclick="copyMeetingLink()">Copy</button>
        </div>
        <div id="md-id-row" className="mlb-id-row" hidden>
          <span>Meeting ID:</span><strong id="md-meeting-id">—</strong>
        </div>
      </div>

      <div className="meeting-action-row">
        <a href="#" className="btn btn-primary" id="join-meeting-btn" target="_blank" rel="noopener">
          🎥 Join Meeting Now
        </a>
        <button className="btn btn-outline-dark" onclick="downloadMeetingDetails()">📄 Download Details</button>
        <button className="btn btn-outline-dark" onclick="addToCalendar()">📅 Add to Calendar</button>
      </div>

      <div className="meeting-expire-note">
        <strong>⚠ Confidential:</strong> This link is exclusive to your session. Do not share. It expires after your session ends.
        <br />Support: <a href="tel:+919415194180">+91 9415194180</a> | <a href="mailto:advanoopsaxena@gmail.com">advanoopsaxena@gmail.com</a>
      </div>

    </div>
  </div>

  {/* ===================================================
       ADMIN PANEL — Hidden (Ctrl+Shift+A)
       Password: AdvSaxena@2024
       =================================================== */}
  <div id="admin-panel" className="pay-overlay" hidden role="dialog" aria-modal="true" aria-labelledby="admin-panel-title">
    <div className="pay-modal admin-modal-inner">

      <div className="admin-modal-header">
        <div className="admin-gear-icon">⚙</div>
        <div>
          <h3 id="admin-panel-title">Session Admin Panel</h3>
          <p>Advocate Anoop Kumar Saxena — Counseling Management</p>
        </div>
        <button className="pay-modal-close" id="close-admin-panel" aria-label="Close admin">✕</button>
      </div>

      {/* Login Gate */}
      <div id="admin-login-area">
        <div className="admin-login-box">
          <div className="admin-lock-icon">🔑</div>
          <h4>Admin Access Required</h4>
          <p>Enter the admin password to manage sessions.</p>
          <div className="admin-pass-row">
            <input type="password" id="admin-password" placeholder="Admin password" autoComplete="new-password" />
            <button className="btn btn-primary" id="admin-login-btn">Login</button>
          </div>
          <p id="admin-error" className="admin-error" hidden>❌ Incorrect password. Please try again.</p>
        </div>
      </div>

      {/* Dashboard (shown after login) */}
      <div id="admin-dashboard" hidden>

        {/* Create Session */}
        <div className="admin-section">
          <h4 className="admin-section-title">➕ Create New Session</h4>
          <div className="admin-form-grid">
            <div className="form-row">
              <div className="form-group">
                <label>Client Email *</label>
                <input type="email" id="admin-client-email" placeholder="client@email.com" />
              </div>
              <div className="form-group">
                <label>Session Plan</label>
                <select id="admin-plan">
                  <option>Basic Counseling — ₹1,000</option>
                  <option>Detailed Guidance — ₹2,000</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Session Date *</label>
                <input type="date" id="admin-date" />
              </div>
              <div className="form-group">
                <label>Session Time</label>
                <select id="admin-time">
                  <option>10:00 AM – 11:00 AM</option>
                  <option>11:00 AM – 12:00 PM</option>
                  <option>12:00 PM – 01:00 PM</option>
                  <option>02:00 PM – 03:00 PM</option>
                  <option>03:00 PM – 04:00 PM</option>
                  <option>04:00 PM – 05:00 PM</option>
                  <option>06:00 PM – 07:00 PM</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Platform</label>
                <select id="admin-platform">
                  <option>Google Meet</option>
                  <option>Zoom</option>
                </select>
              </div>
              <div className="form-group">
                <label>Meeting ID (optional)</label>
                <input type="text" id="admin-meeting-id" placeholder="xxx-xxxx-xxx" />
              </div>
            </div>
            <div className="form-group">
              <label>Meeting / Join Link *</label>
              <input type="url" id="admin-meeting-link" placeholder="https://meet.google.com/xxx-xxx-xxx" />
            </div>
            <div className="form-group">
              <label>Access Code (leave blank to auto-generate)</label>
              <div className="admin-code-row">
                <input type="text" id="admin-access-code" placeholder="e.g. AB12CD34" style={{"text-transform":"uppercase"}} />
                <button className="btn btn-outline-dark" id="gen-code-btn" type="button">⟳ Generate</button>
              </div>
            </div>
          </div>
          <button className="btn btn-primary" id="create-session-btn">✓ Create Session &amp; Generate Access Code</button>
          <div id="create-session-result" className="admin-result" hidden></div>
        </div>

        {/* Active Sessions */}
        <div className="admin-section">
          <h4 className="admin-section-title">📋 Active Sessions
            <span className="admin-session-count" id="session-count-badge">0</span>
          </h4>
          <div id="admin-sessions-list" className="admin-sessions-list">
            <p className="admin-empty">No sessions yet. Create one above.</p>
          </div>
          <button className="btn btn-ghost" id="clear-sessions-btn" style={{"margin-top":"1rem","font-size":"0.8rem","color":"#999"}}>🗑 Clear All Sessions</button>
        </div>

      </div>

    </div>
  </div>

  


    </>
  );
}

export default App;
