import React from 'react';

const features = [
  {
    icon: 'fa-solid fa-users',
    title: 'Intuitive Patient Management',
    items: [
      { bold: 'Comprehensive Profiles:', text: 'Securely store demographics, medical history, dental records (X-rays/images), and treatment plans.' },
      { bold: 'Digital Consent:', text: 'Electronic forms to reduce paperwork and improve accuracy.' },
      { bold: 'Automated Reminders:', text: 'SMS/Email alerts to reduce no-shows and manage recalls.' },
    ],
  },
  {
    icon: 'fa-regular fa-calendar-check',
    title: 'Efficient Scheduling',
    items: [
      { bold: 'Interactive Calendar:', text: 'View appointments across all practitioners and rooms.' },
      { bold: 'Drag-and-Drop:', text: 'Easily adjust and reschedule appointments intuitively.' },
      { bold: 'Availability Tracking:', text: 'Quickly identify open slots and manage staff schedules.' },
    ],
  },
  {
    icon: 'fa-solid fa-tooth',
    title: 'Streamlined Charting',
    items: [
      { bold: 'Digital Charting:', text: 'Quick, accurate recording of exams, diagnoses, and notes.' },
      { bold: 'Visual Plans:', text: 'Present clear treatment plans to enhance patient acceptance.' },
      { bold: 'Imaging Integration:', text: 'Link X-rays and intraoral photos directly to records.' },
    ],
  },
  {
    icon: 'fa-solid fa-file-invoice-dollar',
    title: 'Optimized Billing',
    items: [
      { bold: 'Automated Invoices:', text: 'Generate bills automatically upon treatment completion.' },
      { bold: 'Insurance Management:', text: 'Track claims, payments, and balances with ease.' },
      { bold: 'Payment Gateways:', text: 'Seamless online payment integrations.' },
    ],
  },
  {
    icon: 'fa-solid fa-boxes-stacked',
    title: 'Robust Inventory',
    badge: 'Recommended',
    items: [
      { bold: 'Track Supplies:', text: 'Monitor stock of essential materials and equipment.' },
      { bold: 'Reorder Alerts:', text: 'Automated notifications to prevent unexpected shortages.' },
    ],
  },
  {
    icon: 'fa-solid fa-chart-pie',
    title: 'Analytics & Reporting',
    items: [
      { bold: 'Custom Reports:', text: 'Metrics on growth, revenue, and appointment stats.' },
      { bold: 'Data-Driven Decisions:', text: 'Actionable insights for marketing and expansion.' },
    ],
  },
];

const advantages = [
  { icon: 'fa-solid fa-bullseye', title: 'Tailored to Your Workflow', desc: 'Designed specifically to align with your unique processes rather than forcing adaptation to a generic system.' },
  { icon: 'fa-solid fa-arrow-trend-up', title: 'Scalability', desc: 'Grows with your clinic, accommodating future expansion and increased patient volume without limitations.' },
  { icon: 'fa-solid fa-shield-halved', title: 'Enhanced Security', desc: 'Built with robust security to protect sensitive patient data, ensuring compliance with privacy regulations.' },
  { icon: 'fa-solid fa-trophy', title: 'Competitive Advantage', desc: 'Positions your clinic at the forefront of innovation, reflecting a commitment to modern, patient-centric care.' },
];

const timeline = [
  { title: '1. Discovery & Requirements', desc: 'A detailed discussion to understand your workflows, pain points, and desired functionalities.' },
  { title: '2. Design & Prototyping', desc: 'Creation of wireframes and interactive prototypes for your review and feedback.' },
  { title: '3. Development & Iteration', desc: 'Agile development cycles with regular updates and opportunities for input.' },
  { title: '4. Testing & QA', desc: 'Rigorous testing to ensure a stable, secure, and bug-free application.' },
  { title: '5. Deployment & Training', desc: 'Seamless deployment and comprehensive training for your staff.' },
  { title: '6. Ongoing Support', desc: 'Continued maintenance to ensure optimal performance and future enhancements.', last: true },
];

export default function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="font-sans text-gray-800 antialiased min-h-screen px-4 py-8 md:py-16 print:py-0 print:px-0 print:bg-white">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden no-print" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float delay-300" style={{ animationDuration: '8s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float delay-600" style={{ animationDuration: '12s' }} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Main Card */}
        <div className="proposal-container bg-white rounded-3xl overflow-hidden print-container print:rounded-none animate-scale-in">

          {/* === TOP BAR === */}
          <div className="top-bar px-6 md:px-12 py-5 flex justify-between items-center">
            <div className="h-16 md:h-20 flex items-center animate-fade-in-left">
              <img
                src="/assets/logo.png"
                alt="Eben Dev Solutions Logo"
                className="h-12 md:h-16 object-contain drop-shadow-sm mr-4"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes('src/assets')) {
                    target.src = '/src/assets/logo.png';
                  }
                }}
              />
              <h1 className="text-xl md:text-2xl font-bold text-primary tracking-tight">
                Eben Dev Solutions
              </h1>
            </div>
            <div className="hidden md:flex items-center gap-3 animate-fade-in-right">
              <span className="gold-badge">
                <i className="fa-solid fa-file-lines mr-2 text-[10px]" />
                Proposal Document
              </span>
            </div>
          </div>

          {/* === HERO SECTION === */}
          <header className="hero-section text-white p-8 md:p-14 lg:p-16">
            {/* Decorative grid pattern overlay */}
            <div className="absolute inset-0 dot-pattern opacity-30" aria-hidden="true" />

            {/* Decorative floating shapes */}
            <div className="absolute top-6 right-8 w-20 h-20 border border-secondary/20 rounded-2xl rotate-12 animate-float no-print" aria-hidden="true" />
            <div className="absolute bottom-8 right-1/4 w-12 h-12 border border-white/10 rounded-full animate-float delay-500 no-print" aria-hidden="true" />

            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
              <div className="animate-fade-in-up">
                <div className="mb-5 animate-fade-in-down delay-200">
                  <span className="gold-badge">
                    <i className="fa-solid fa-sparkles mr-2 text-[10px]" />
                    Tailored Solution
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 leading-tight">
                  Custom Web Application
                  <br />
                  <span className="gradient-text">Proposal</span>
                </h1>
                <p className="text-lg md:text-xl text-blue-200/80 font-light max-w-lg leading-relaxed">
                  Enhancing Efficiency at Senako Specialty Dental Clinic
                </p>
              </div>

              <div className="glass rounded-2xl p-5 md:p-6 w-full md:w-auto md:min-w-[260px] animate-fade-in-right delay-300">
                <p className="text-xs text-secondary uppercase tracking-[0.15em] font-semibold mb-2 flex items-center">
                  <i className="fa-solid fa-user-tie mr-2 text-secondary/70" />
                  Prepared For
                </p>
                <p className="font-bold text-xl mb-0.5">Dr. Tsadik</p>
                <p className="text-sm text-blue-200/80">Senako Specialty Dental Clinic</p>
                <div className="mt-3 pt-3 border-t border-white/10 flex items-center text-sm text-blue-200/60">
                  <i className="fa-regular fa-calendar mr-2" />
                  March 11, 2026
                </div>
              </div>
            </div>
          </header>

          {/* === CONTENT BODY === */}
          <div className="p-6 md:p-12 lg:p-14">

            {/* --- Introduction --- */}
            <section className="mb-12 md:mb-16 animate-fade-in-up delay-200">
              <p className="text-lg md:text-xl text-primary font-medium mb-5">Dear Dr. Tsadik,</p>
              <div className="space-y-4 text-gray-600 leading-relaxed text-[15px] md:text-base">
                <p>
                  Thank you for considering{' '}
                  <strong className="text-primary font-semibold relative">
                    Eben Dev Solutions
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-secondary/30 rounded" />
                  </strong>{' '}
                  to develop a custom web application for Senako Specialty Dental
                  Clinic. I'm excited to present a solution designed to significantly
                  streamline your clinic's operations and elevate patient care.
                </p>
                <p>
                  As the Founder and CEO of Eben Dev Solutions, I am confident that a
                  tailored web application can achieve these goals, providing a
                  significant advantage in today's dynamic healthcare landscape.
                </p>
              </div>
            </section>

            {/* --- The Vision --- */}
            <section className="mb-14 md:mb-18 animate-fade-in-up delay-300">
              <div className="vision-box">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-secondary-light flex items-center justify-center shadow-lg shadow-secondary/20">
                    <i className="fa-solid fa-eye text-white text-sm" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-primary">
                    The Vision: A Centralized Hub
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed italic text-base md:text-lg relative z-10 pl-1">
                  "Imagine a seamless system where every aspect of your clinic's daily
                  operations is integrated, accessible, and optimized. This proposed
                  web application is designed to be that central hub, empowering your
                  team to deliver exceptional service while maximizing efficiency and
                  reducing administrative burden."
                </p>
              </div>
            </section>

            {/* --- Divider --- */}
            <div className="section-divider" />

            {/* --- Key Features --- */}
            <section className="mb-14 md:mb-18">
              <div className="text-center mb-10 md:mb-12 animate-fade-in-up">
                <div className="mb-4">
                  <span className="gold-badge inline-flex">
                    <i className="fa-solid fa-star mr-2 text-[10px]" />
                    Core Capabilities
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mt-4 section-title mx-auto">
                  Key Features & Benefits
                </h2>
                <div className="flex justify-center mt-3">
                  <div className="w-16 h-1 bg-gradient-to-r from-secondary to-secondary/30 rounded-full" />
                </div>
                <p className="text-gray-500 mt-5 max-w-2xl mx-auto text-[15px] leading-relaxed">
                  Here's how a custom web application can revolutionize Senako
                  Specialty Dental Clinic:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className={`feature-card animate-fade-in-up delay-${(idx + 1) * 100}`}
                  >
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-5">
                        <div className="feature-icon bg-accent/8">
                          <i className={`${feature.icon} text-accent text-lg relative z-10`} />
                        </div>
                        {feature.badge && (
                          <span className="text-[10px] font-semibold text-secondary bg-secondary/8 px-2.5 py-1 rounded-full uppercase tracking-wider">
                            {feature.badge}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg md:text-xl font-bold text-primary mb-4">
                        {feature.title}
                      </h3>

                      <div className="space-y-2.5">
                        {feature.items.map((item, i) => (
                          <div key={i} className="check-item">
                            <div className="check-icon">
                              <i className="fa-solid fa-check" />
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              <strong className="text-gray-700">{item.bold}</strong>{' '}
                              {item.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="page-break" />

            {/* --- Divider --- */}
            <div className="section-divider" />

            {/* --- Why Custom & Approach Two-Column --- */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 mb-14 md:mb-18">

              {/* Why Custom */}
              <div className="animate-fade-in-left">
                <div className="mb-4">
                  <span className="gold-badge inline-flex">
                    <i className="fa-solid fa-gem mr-2 text-[10px]" />
                    The Edge
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mt-4 mb-2 section-title">
                  Why a Custom Web App?
                </h2>
                <div className="w-12 h-1 bg-gradient-to-r from-secondary to-secondary/30 rounded-full mb-6" />
                <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                  While off-the-shelf solutions exist, a custom application offers
                  unparalleled advantages:
                </p>
                <div className="space-y-4 pt-2">
                  {advantages.map((a, idx) => (
                    <div key={idx} className={`advantage-item animate-fade-in-up delay-${(idx + 1) * 100}`}>
                      <div className="advantage-icon">
                        <i className={`${a.icon} text-secondary text-sm`} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-[15px]">{a.title}</h4>
                        <p className="text-sm text-gray-500 mt-1 leading-relaxed">{a.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline / Approach */}
              <div className="animate-fade-in-right">
                <div className="mb-4">
                  <span className="gold-badge inline-flex">
                    <i className="fa-solid fa-route mr-2 text-[10px]" />
                    Roadmap
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mt-4 mb-2 section-title">
                  Our Collaborative Approach
                </h2>
                <div className="w-12 h-1 bg-gradient-to-r from-secondary to-secondary/30 rounded-full mb-8" />

                <div className="relative ml-3">
                  <div className="timeline-line hidden md:block" />
                  {timeline.map((step, idx) => (
                    <div
                      key={idx}
                      className={`timeline-item animate-fade-in-up delay-${(idx + 1) * 100} ${step.last ? 'pb-0' : ''}`}
                    >
                      <div className={`timeline-dot ${step.last ? '!bg-gradient-to-br !from-primary !to-primary-light' : ''}`} />
                      <h4 className="font-bold text-gray-800 text-[15px]">{step.title}</h4>
                      <p className="text-sm text-gray-500 mt-1 leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* --- Divider --- */}
            <div className="section-divider" />

            {/* --- Next Steps & Sign-off --- */}
            <section className="signoff-section rounded-3xl p-7 md:p-10 animate-fade-in-up">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-lg shadow-primary/20">
                  <i className="fa-solid fa-rocket text-white text-sm" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-primary">
                  Next Steps
                </h2>
              </div>

              <div className="space-y-4 text-gray-600 text-sm md:text-[15px] leading-relaxed mb-8">
                <p>
                  I am incredibly eager to discuss this proposal with you in more
                  detail and explore how a custom web application can significantly
                  benefit Senako Specialty Dental Clinic. I am available at your
                  earliest convenience for a meeting to demonstrate some of my
                  previous work and outline a more detailed project timeline and cost
                  estimate.
                </p>
                <p>
                  Thank you for your time and consideration. I look forward to the
                  possibility of working with you to bring this transformative
                  solution to life.
                </p>
              </div>

              {/* Signature */}
              <div className="pt-6 border-t border-gray-200/60">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                  <div className="order-2 md:order-1">
                    <p className="text-gray-400 italic mb-2 text-sm">Sincerely,</p>
                    <h3 className="text-2xl font-bold text-primary mb-0.5">
                      Hundefra Nassir
                    </h3>
                    <p className="text-sm font-semibold gradient-text mb-4" style={{ WebkitTextFillColor: 'unset', color: '#c99f45', background: 'none' }}>
                      Founder & CEO, Eben Dev Solutions
                    </p>

                    <div className="space-y-1">
                      <a href="tel:+251925526298" className="contact-link">
                        <span className="contact-icon">
                          <i className="fa-solid fa-phone text-sm text-gray-400" />
                        </span>
                        <span className="text-sm">+251 92 552 6298</span>
                      </a>
                      <a href="mailto:hudefra@gmail.com" className="contact-link">
                        <span className="contact-icon">
                          <i className="fa-solid fa-envelope text-sm text-gray-400" />
                        </span>
                        <span className="text-sm">hudefra@gmail.com</span>
                      </a>
                      <a
                        href="https://hundefran.github.io/Eben-Dev-solutions/"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-link"
                      >
                        <span className="contact-icon">
                          <i className="fa-solid fa-globe text-sm text-gray-400" />
                        </span>
                        <span className="text-sm">Eben Dev Solutions Portfolio</span>
                      </a>
                    </div>
                  </div>

                  <div className="order-1 md:order-2 flex justify-start md:justify-end">
                    <div className="relative">
                      <div className="absolute -inset-3 bg-gradient-to-br from-secondary/10 to-primary/5 rounded-2xl blur-lg print:hidden" aria-hidden="true" />
                      <img
                        src="/assets/logo.png"
                        alt="Eben Dev Solutions"
                        className="h-20 md:h-24 object-contain relative z-10 drop-shadow-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* === FOOTER BAR === */}
          <div className="footer-bar text-center p-5 no-print">
            <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 gap-4">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-circle-check text-secondary/60 text-xs" />
                <p className="text-blue-200/60 text-sm">
                  Preview of the digital proposal
                </p>
              </div>
              <button
                onClick={handlePrint}
                className="btn-primary w-full md:w-auto text-sm"
              >
                <i className="fa-solid fa-print mr-2" />
                Print / Save as PDF
              </button>
            </div>
          </div>
        </div>

        {/* Subtle branding below card */}
        <div className="text-center mt-6 no-print animate-fade-in-up delay-500">
          <p className="text-white/20 text-xs tracking-widest uppercase">
            Crafted with care by Eben Dev Solutions
          </p>
        </div>
      </div>
    </div>
  );
}
