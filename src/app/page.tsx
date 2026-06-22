import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFAB from '@/components/WhatsAppFAB'
import DarkEnquiryForm from '@/components/DarkEnquiryForm'

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden bg-background">
        <div className="max-w-container-max mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <div className="inline-flex items-center gap-2 bg-primary-fixed text-on-primary-fixed px-4 py-1.5 rounded-full mb-6">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              <span className="text-sm font-bold tracking-wider">India&apos;s Fastest-Growing Network</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-primary mb-6">
              Your Vision +{' '}
              <br />Our Brand ={' '}
              <br />
              <span className="text-secondary">A Winning Alliance</span>
            </h1>
            <p className="text-lg text-on-surface-variant mb-8 max-w-xl leading-relaxed">
              Partner with AYKA Care and lead the future of healthcare excellence. Join 2,500+ experts and 40+ partner clinics in making expert healthcare accessible, available, and affordable.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/apply"
                className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider flex items-center gap-2 hover:bg-primary-container transition-colors"
              >
                Apply Now
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
              <a
                href="tel:+919211825264"
                className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:brightness-105 transition-all"
              >
                Talk to Support
              </a>
            </div>
          </div>

          {/* Stats Bento */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: 'groups', stat: '2,500+', label: 'Verified Experts' },
                { icon: 'location_on', stat: '15', label: 'Franchises', offset: true },
                { icon: 'medical_services', stat: '40+', label: 'Partner Clinics' },
                { icon: 'patient_list', stat: '30,000+', label: 'Patient Reach', offset: true },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`bg-surface-container-lowest p-8 rounded-xl card-shadow border border-outline-variant/30 ${item.offset ? 'mt-8' : ''}`}
                >
                  <span className="material-symbols-outlined text-primary mb-4 block" style={{ fontSize: 32 }}>
                    {item.icon}
                  </span>
                  <div className="text-4xl font-bold tracking-tight text-primary">{item.stat}</div>
                  <div className="text-sm font-bold uppercase tracking-wider text-on-surface-variant mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Models */}
      <section className="py-20 bg-surface-muted">
        <div className="max-w-container-max mx-auto px-6">
          <div className="mb-12">
            <span className="text-primary font-bold text-sm uppercase tracking-widest">Franchise Models</span>
            <h2 className="text-4xl font-bold text-primary mt-4">Choose your territory.<br />Choose your scale.</h2>
            <p className="text-base text-on-surface-variant mt-4 max-w-2xl leading-relaxed">
              Three models designed for different levels of commitment and growth ambition — all with exclusive territorial rights.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {/* City */}
            <div className="bg-white p-8 rounded-xl card-shadow flex flex-col h-full border border-outline-variant/20 hover:border-primary transition-all">
              <div className="mb-6">
                <span className="text-on-surface-variant font-bold text-sm">City Level</span>
                <h3 className="text-2xl font-bold text-primary mt-2">City Flagship</h3>
              </div>
              <div className="mb-8">
                <div className="text-4xl font-bold tracking-tight text-primary">₹50,000</div>
                <p className="text-sm text-on-surface-variant mt-1">One-time fee · 3-year tenure</p>
              </div>
              <ul className="space-y-4 mb-12 flex-grow">
                {['Exclusive city-level rights', 'OPD & Telemedicine revenue', 'Full marketing & tech support'].map(f => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                    <span className="text-base">{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/apply?model=City+Flagship" className="w-full border-2 border-primary text-primary py-3 rounded-lg font-bold text-sm uppercase tracking-wider text-center hover:bg-primary hover:text-on-primary transition-all block">
                Claim City Territory
              </Link>
            </div>

            {/* District — Featured */}
            <div className="bg-primary text-on-primary p-8 rounded-xl shadow-2xl flex flex-col h-full relative overflow-hidden transform scale-105 z-10">
              <div className="absolute top-4 right-4 bg-secondary text-on-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Most Popular
              </div>
              <div className="mb-6">
                <span className="text-on-primary/80 font-bold text-sm">District Level</span>
                <h3 className="text-2xl font-bold text-on-primary mt-2">District Franchise</h3>
              </div>
              <div className="mb-8">
                <div className="text-4xl font-bold tracking-tight text-secondary-fixed">₹9,00,000</div>
                <p className="text-sm text-on-primary/80 mt-1">Fee: ₹3.5 Lacs one-time</p>
              </div>
              <ul className="space-y-4 mb-12 flex-grow">
                {['Exclusive district-level rights', 'Revenue from all city franchises', 'Direct District Flagship revenue'].map(f => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-fixed text-lg">check_circle</span>
                    <span className="text-base">{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/apply?model=District+Franchise" className="w-full bg-secondary text-on-secondary py-3 rounded-lg font-bold text-sm uppercase tracking-wider text-center hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-all block">
                Claim District Territory
              </Link>
            </div>

            {/* State */}
            <div className="bg-white p-8 rounded-xl card-shadow flex flex-col h-full border border-outline-variant/20 hover:border-primary transition-all">
              <div className="mb-6">
                <span className="text-on-surface-variant font-bold text-sm">State Level</span>
                <h3 className="text-2xl font-bold text-primary mt-2">State Franchise</h3>
              </div>
              <div className="mb-8">
                <div className="text-4xl font-bold tracking-tight text-primary">₹20,00,000</div>
                <p className="text-sm text-on-surface-variant mt-1">Fee: ₹8 Lacs one-time</p>
              </div>
              <ul className="space-y-4 mb-12 flex-grow">
                {['Exclusive state master rights', 'Override from all districts', 'Strategic leadership role'].map(f => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                    <span className="text-base">{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/apply?model=State+Franchise" className="w-full border-2 border-primary text-primary py-3 rounded-lg font-bold text-sm uppercase tracking-wider text-center hover:bg-primary hover:text-on-primary transition-all block">
                Claim State Territory
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="py-20 bg-primary-container text-on-primary">
        <div className="max-w-container-max mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
            <div>
              <span className="text-on-primary-container font-bold text-sm uppercase tracking-widest">Revenue Model</span>
              <h2 className="text-4xl font-bold mt-4">Multiple income streams.<br />One business.</h2>
            </div>
            <p className="text-lg text-on-primary-container max-w-md leading-relaxed">
              Unlike traditional franchises, AYKA generates recurring revenue across 6 categories — not just one-time sales.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: '01', icon: 'computer', title: 'Clinic SaaS', desc: 'Monthly & annual software fees from clinics using the AYKA Expert platform.' },
              { num: '02', icon: 'person_add', title: 'Doctor Subs', desc: 'Revenue from doctors registered and active on the AYKA platform.' },
              { num: '03', icon: 'video_call', title: 'Telemedicine', desc: 'Commission from online consultations and remote healthcare services.' },
              { num: '04', icon: 'health_and_safety', title: 'Patient Programs', desc: 'OPD bookings, health subscriptions, and preventive care packages.' },
              { num: '05', icon: 'school', title: 'Student Excellence', desc: 'Training & career programs for medical students in your territory.' },
              { num: '06', icon: 'hub', title: 'Network Expansion', desc: 'Override and referral income as your franchise network grows.' },
            ].map((s) => (
              <div key={s.num} className="bg-primary-fixed/10 p-8 rounded-xl border border-primary-fixed/20 hover:bg-primary-fixed/20 transition-all">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-on-primary-container text-xs font-bold uppercase tracking-wider">Stream {s.num}</span>
                  <span className="material-symbols-outlined text-secondary-fixed">{s.icon}</span>
                </div>
                <h4 className="text-xl font-bold mb-2">{s.title}</h4>
                <p className="text-base text-on-primary-container/80 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-secondary">payments</span>
              </div>
              <div>
                <div className="text-xl font-bold">6 Revenue Streams. One Franchise.</div>
                <div className="text-sm text-on-primary-container/60 mt-1">All recurring. All compounding. All under your territory.</div>
              </div>
            </div>
            <div className="flex gap-4 flex-wrap">
              <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary-fixed/20 text-secondary-fixed text-sm font-bold">
                <span className="material-symbols-outlined text-xs">sync</span> Recurring Income
              </span>
              <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary-fixed/20 text-secondary-fixed text-sm font-bold">
                <span className="material-symbols-outlined text-xs">auto_graph</span> Growth
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Specialty Grid */}
      <section id="specialties" className="py-20 bg-surface">
        <div className="max-w-container-max mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold text-sm uppercase tracking-widest">Network Breadth</span>
            <h2 className="text-5xl font-bold text-primary mt-4">
              Browse by <em className="font-light italic">Medical Specialty</em>
            </h2>
            <p className="text-base text-on-surface-variant mt-4 max-w-2xl mx-auto leading-relaxed">
              Our platform supports a diverse range of medical fields, ensuring comprehensive care across all territories.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: 'stethoscope', name: 'General Physician', meta: '340 Doctors · from ₹200' },
              { icon: 'monitor_heart', name: 'Cardiology', meta: '82 Doctors · from ₹500' },
              { icon: 'child_care', name: 'Pediatrics', meta: '88 Doctors · from ₹300' },
              { icon: 'visibility', name: 'Ophthalmology', meta: '47 Doctors · from ₹350' },
              { icon: 'face', name: 'Dermatology', meta: '104 Doctors · from ₹400' },
              { icon: 'hearing', name: 'ENT', meta: '62 Doctors · from ₹300' },
              { icon: 'dentistry', name: 'Dental', meta: '115 Doctors · from ₹250' },
              { icon: 'neurology', name: 'Neurology', meta: '54 Doctors · from ₹600' },
              { icon: 'psychiatry', name: 'Psychiatry', meta: '52 Doctors · from ₹500' },
              { icon: 'female', name: 'Gynaecology', meta: '96 Doctors · from ₹400' },
              { icon: 'radiology', name: 'Radiology', meta: '32 Doctors · from ₹400' },
              { icon: 'orthopedics', name: 'Orthopaedics', meta: '78 Doctors · from ₹450' },
            ].map((sp) => (
              <div key={sp.name} className="bg-white p-6 rounded-xl border border-outline-variant/30 text-center flex flex-col items-center group hover:border-primary transition-all card-shadow cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center mb-4 text-primary group-hover:bg-primary-fixed transition-colors">
                  <span className="material-symbols-outlined">{sp.icon}</span>
                </div>
                <h4 className="font-bold text-primary text-sm mb-1">{sp.name}</h4>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">{sp.meta}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="text-primary font-bold text-sm border-b-2 border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors uppercase tracking-wider">
              View All 24+ Specialties
            </button>
          </div>
        </div>
      </section>

      {/* Who Can Join */}
      <section id="why-join" className="py-20 bg-surface-muted">
        <div className="max-w-container-max mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold text-sm uppercase tracking-widest">Who can join</span>
            <h2 className="text-4xl font-bold text-primary mt-4">Medical background? Optional.</h2>
            <p className="text-base text-on-surface-variant mt-4 max-w-2xl mx-auto leading-relaxed">
              AYKA provides complete training, SOPs, and operational support. What matters is your commitment and execution.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'stethoscope', title: 'Doctors & Specialists', desc: 'Expand your practice, brand visibility, and patient reach.' },
              { icon: 'business_center', title: 'Healthcare Entrepreneurs', desc: 'People with experience looking to scale a city or district.' },
              { icon: 'rocket_launch', title: 'Non-Medical Entrepreneurs', desc: 'First-time entrepreneurs entering healthcare with full backing.' },
              { icon: 'savings', title: 'Investors', desc: 'Partners seeking stable, impact-driven businesses with long-term returns.' },
              { icon: 'home_health', title: 'Home Care & Wellness', desc: 'Manage nursing, physiotherapy, and allied healthcare offerings.' },
              { icon: 'biotech', title: 'Diagnostics & Lab Partners', desc: 'Pathology and radiology providers aiming to expand reach.' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-xl border border-outline-variant/30 flex gap-6 group hover:border-secondary transition-all">
                <span className="material-symbols-outlined text-primary text-3xl shrink-0">{item.icon}</span>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-primary mb-2">{item.title}</h4>
                  <p className="text-base text-on-surface-variant leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Provide / Tech Sidebar */}
      <section className="py-20">
        <div className="max-w-container-max mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-primary font-bold text-sm uppercase tracking-widest">What we provide</span>
              <h2 className="text-4xl font-bold text-primary mt-4 mb-8">
                You lead the territory.<br />We run the backend.
              </h2>
              <div className="space-y-8">
                {[
                  { num: '01', title: 'AYKA Expert SaaS Platform', desc: 'Ready-to-use clinic management software for all partner clinics you onboard.' },
                  { num: '02', title: 'CRM & Lead Management', desc: 'Full pipeline visibility, doctor onboarding tracking, and patient acquisition tools.' },
                  { num: '03', title: 'Marketing & Brand Support', desc: 'National-level collaterals, digital assets, and territory-specific guidance.' },
                ].map((item, i, arr) => (
                  <div key={item.num} className={`flex gap-6 pb-8 ${i < arr.length - 1 ? 'border-b border-outline-variant/50' : ''}`}>
                    <span className="text-4xl font-bold text-secondary/30 shrink-0">{item.num}</span>
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-2">{item.title}</h4>
                      <p className="text-base text-on-surface-variant leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Card */}
            <div className="bg-primary p-12 rounded-3xl text-on-primary lg:sticky top-28">
              <div className="mb-12">
                <h3 className="text-3xl font-bold mb-4">
                  Technology<br />built for <em className="italic text-secondary-fixed">scale.</em>
                </h3>
                <p className="text-on-primary-container">Access the full AYKA digital ecosystem from day one.</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: 'video_call', label: 'Video Telemedicine' },
                  { icon: 'groups', label: 'Multi-Doctor Support' },
                  { icon: 'history_edu', label: 'EMR / Patient History' },
                  { icon: 'chat', label: 'WhatsApp Reminders' },
                  { icon: 'dashboard', label: 'Analytics Dashboard' },
                  { icon: 'medical_services', label: 'OPD Management' },
                  { icon: 'event_available', label: 'Smart Booking' },
                  { icon: 'receipt_long', label: 'E-Prescriptions' },
                ].map((f) => (
                  <div key={f.label} className="bg-white/10 p-3 rounded-lg border border-white/10 text-[11px] font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-xs">{f.icon}</span>
                    {f.label}
                  </div>
                ))}
                <div className="bg-white/10 p-3 rounded-lg border border-white/10 text-[11px] font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 col-span-2">
                  <span className="material-symbols-outlined text-xs">receipt</span>
                  Auto GST Billing
                </div>
              </div>
              <Link
                href="/technology"
                className="mt-12 w-full bg-secondary-fixed text-on-secondary-fixed py-4 rounded-xl font-bold text-sm uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                View Demo Ecosystem
                <span className="material-symbols-outlined">play_circle</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Stories */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold text-sm uppercase tracking-widest">Partner Stories</span>
            <h2 className="text-4xl font-bold text-primary mt-4">Trusted by franchise partners across India.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: 'Becoming an AYKA Care franchise partner has been one of the best decisions for my career and community. The team\'s guidance in setup, marketing, and daily operations made the journey seamless.',
                initials: 'AP',
                name: 'Abhishek Pal',
                role: 'District Franchise · Saharanpur',
                bg: 'bg-primary-fixed',
                tc: 'text-primary',
              },
              {
                quote: 'The investment was reasonable, and the returns have exceeded my expectations. The technology platforms and marketing support make operations smooth — allowing me to focus on expanding healthcare access.',
                initials: 'SY',
                name: 'Sanjay Yadav',
                role: 'District Franchise · Muzaffarnagar',
                bg: 'bg-secondary-container',
                tc: 'text-secondary',
              },
            ].map((t) => (
              <div key={t.name} className="bg-white p-8 rounded-2xl card-shadow">
                <p className="text-lg text-primary italic mb-8 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full ${t.bg} flex items-center justify-center ${t.tc} font-bold`}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-sm uppercase tracking-wider text-primary">{t.name}</div>
                    <div className="text-xs text-on-surface-variant mt-0.5">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="max-w-container-max mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            <div>
              <span className="text-primary font-bold text-sm uppercase tracking-widest">FAQs</span>
              <h2 className="text-4xl font-bold text-primary mt-4">Common questions, direct answers.</h2>
              <p className="text-base text-on-surface-variant mt-6 leading-relaxed">
                Can&apos;t find what you&apos;re looking for? Reach out to our franchise support team directly.
              </p>
              <button className="mt-8 flex items-center gap-2 text-primary font-bold hover:underline text-sm uppercase tracking-wider">
                Download Franchise Prospectus
                <span className="material-symbols-outlined">download</span>
              </button>
            </div>
            <div className="lg:col-span-2 space-y-4">
              {[
                {
                  q: 'What is the minimum investment required?',
                  a: 'The minimum investment starts at ₹50,000 for the City Flagship Franchise. District Franchise requires ₹9,00,000 and State Franchise requires ₹20,00,000. Each model includes franchise fee, setup costs, and working capital.',
                },
                {
                  q: 'Do I need medical qualifications to own a franchise?',
                  a: 'No. AYKA Care welcomes both medical and non-medical partners. We provide comprehensive training, SOPs, technology platforms, and ongoing support to ensure your success regardless of background.',
                },
                {
                  q: 'How do I earn revenue as a franchise partner?',
                  a: 'Revenue streams include doctor subscription fees, patient consultation commissions, diagnostic partnerships, clinic onboarding fees, home healthcare services, and telemedicine platform revenue sharing based on your territory.',
                },
                {
                  q: 'Are territories exclusive?',
                  a: 'Yes. All franchise models come with exclusive territorial rights. Once allocated, no other franchise will be awarded in your designated city, district, or state — fully protecting your market opportunity.',
                },
              ].map((faq) => (
                <details key={faq.q} className="group bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30">
                  <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-primary">
                    {faq.q}
                    <span className="material-symbols-outlined group-open:rotate-180 transition-transform shrink-0">expand_more</span>
                  </summary>
                  <p className="mt-4 text-on-surface-variant leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Apply CTA */}
      <section className="py-20 bg-primary-container relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-on-primary-container font-bold text-sm uppercase tracking-widest">Apply Now</span>
              <h2 className="text-5xl font-bold text-on-primary mt-4 mb-8 leading-tight">
                Secure your territory before someone{' '}
                <span className="text-secondary-fixed">else does.</span>
              </h2>
              <p className="text-lg text-on-primary-container/80 mb-12 max-w-lg leading-relaxed">
                Franchise rights are allocated on a first-come, first-served basis. Our team will contact you within 24–48 hours of your enquiry.
              </p>
              <div className="space-y-6">
                <a href="tel:+919211825264" className="flex items-center gap-4 text-white hover:text-secondary-fixed transition-colors">
                  <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">call</span>
                  </span>
                  <span className="text-xl font-bold">+91 92118 25264</span>
                </a>
                <a href="mailto:alliance@aykacare.in" className="flex items-center gap-4 text-white hover:text-secondary-fixed transition-colors">
                  <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">mail</span>
                  </span>
                  <span className="text-xl font-bold">alliance@aykacare.in</span>
                </a>
              </div>
            </div>
            <DarkEnquiryForm />
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFAB />
    </>
  )
}
