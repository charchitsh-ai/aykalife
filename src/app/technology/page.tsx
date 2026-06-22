import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFAB from '@/components/WhatsAppFAB'

export const metadata = {
  title: 'Technology & Support Ecosystem | Ayka Alliance',
  description: 'Access the full AYKA digital ecosystem from day one. Our unified SaaS platform empowers partners to manage patient lifecycles, doctor operations, and marketing growth.',
}

export default function TechnologyPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20 pb-20 overflow-hidden bg-background">
        <div className="relative z-10 max-w-container-max mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="hero-badge inline-block bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full font-bold text-sm mb-6 uppercase tracking-wider float-anim">
              Scalable Ecosystem
            </span>
            <h1 className="hero-h1 text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight tracking-tight">
              Technology built{' '}
              <br />
              <em className="italic text-primary-container">for scale.</em>
            </h1>
            <p className="hero-sub text-lg text-on-surface-variant mb-10 max-w-xl leading-relaxed">
              Access the full AYKA digital ecosystem from day one. Our unified SaaS platform empowers partners to manage patient lifecycles, doctor operations, and marketing growth with medical precision.
            </p>
            <div className="hero-btns flex flex-col sm:flex-row flex-wrap gap-4">
              <Link href="/apply" className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all btn-hover pulse-cta w-full sm:w-auto text-center">
                Explore Platform
              </Link>
              <a href="tel:+919211825264" className="bg-secondary-fixed text-on-secondary-fixed px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-secondary-fixed-dim transition-colors btn-hover w-full sm:w-auto text-center">
                Talk to Support
              </a>
            </div>
          </div>

          {/* Real App Screenshot */}
          <div className="hero-visual relative">
            <div className="transform lg:rotate-2 hover:rotate-0 transition-transform duration-700 float-anim-slow">
              <img
                src="/ayka-app-mockup.png"
                alt="AYKA Care App — Multi-device telemedicine platform"
                className="w-full h-auto rounded-2xl drop-shadow-2xl"
              />
            </div>
            {/* Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-primary-container text-on-primary-container p-6 rounded-2xl shadow-xl hidden md:block anim anim-scale">
              <div className="text-4xl font-bold mb-1">30k+</div>
              <div className="font-bold text-sm text-on-primary-container/80 uppercase tracking-wider">Patient Reach</div>
            </div>
          </div>
        </div>
      </section>

      {/* AYKA Expert SaaS Platform Bento */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="anim anim-up text-4xl font-bold text-primary mb-4">AYKA Expert SaaS Platform</h2>
            <p className="anim anim-up d1 text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              A proprietary operational hub designed for clinic efficiency and medical excellence.
            </p>
          </div>
          <div className="stagger-container grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* CRM — Featured, wide */}
            <div className="stagger-child hover-lift md:col-span-8 bg-white rounded-3xl p-8 shadow-card border border-outline-variant/20 relative overflow-hidden group">
              <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">hub</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">CRM &amp; Lead Management</h3>
              <p className="text-base text-on-surface-variant mb-8 max-w-md leading-relaxed">
                Full pipeline visibility, doctor onboarding tracking, and patient acquisition tools. Manage your territory&apos;s growth with data-driven insights.
              </p>
              <ul className="space-y-3">
                {['Territory Pipeline', 'Onboarding Workflows', 'Revenue Forecasting'].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-bold text-sm text-primary">
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Doctor Portal */}
            <div className="stagger-child hover-lift md:col-span-4 bg-primary text-on-primary rounded-3xl p-8 shadow-2xl">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-on-primary text-3xl">person_add</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Doctor Portal</h3>
              <p className="text-base text-white/80 leading-relaxed">
                Seamless onboarding for partner specialists. Identity verification, specialty mapping, and slot management.
              </p>
            </div>

            {/* Analytics */}
            <div className="stagger-child hover-lift md:col-span-4 bg-secondary-fixed text-on-secondary-fixed rounded-3xl p-8 shadow-card border border-secondary/10">
              <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-on-secondary-fixed text-3xl">insights</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Analytics</h3>
              <p className="text-base text-on-secondary-fixed-variant leading-relaxed">
                Deep-dive into performance metrics. Monitor patient reach, subscription growth, and territory ROI in real-time.
              </p>
            </div>

            {/* Patient Care */}
            <div className="stagger-child hover-lift md:col-span-4 bg-white rounded-3xl p-8 shadow-card border border-outline-variant/20">
              <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">clinical_notes</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Patient Care</h3>
              <p className="text-base text-on-surface-variant leading-relaxed">
                Centralized electronic health records, appointment bookings, and preventive care package management.
              </p>
            </div>

            {/* Marketing Toolkit */}
            <div className="stagger-child hover-lift md:col-span-4 bg-white rounded-3xl p-8 shadow-card border border-outline-variant/20 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">campaign</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Marketing Toolkit</h3>
                <p className="text-base text-on-surface-variant leading-relaxed">
                  Automated campaign tools and white-label collaterals to scale your brand presence instantly.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-outline-variant/10">
                <div className="flex -space-x-2">
                  {['FB', 'IG', 'WA'].map((s, i) => (
                    <div key={s} className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold ${i === 0 ? 'bg-primary/10' : i === 1 ? 'bg-secondary/10' : 'bg-amber-accent/10'}`}>
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Feature Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-container-max mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="anim anim-left text-4xl font-bold text-primary mb-4">A unified digital layer.</h2>
              <p className="anim anim-left d1 text-lg text-on-surface-variant leading-relaxed">
                One platform, infinite possibilities. Every tool you need to run your healthcare franchise successfully.
              </p>
            </div>
            <div className="anim anim-right flex gap-4">
              <div className="flex flex-col items-center p-4 bg-surface-container rounded-2xl min-w-[120px] hover-lift">
                <span className="text-4xl font-bold text-primary">06+</span>
                <span className="font-bold text-sm text-on-surface-variant mt-1">Tools</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-primary text-on-primary rounded-2xl min-w-[120px] hover-lift">
                <span className="text-4xl font-bold">24/7</span>
                <span className="font-bold text-sm opacity-80 mt-1">Support</span>
              </div>
            </div>
          </div>
          <div className="stagger-container grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'Telemedicine platform',
                desc: 'Commission-ready online consultations and remote healthcare delivery services.',
              },
              {
                num: '02',
                title: 'Appointment booking',
                desc: 'Real-time scheduling for OPD and home healthcare services across your territory.',
              },
              {
                num: '03',
                title: 'Reporting suite',
                desc: 'Automated daily, weekly, and monthly operational reports for audit and compliance.',
              },
            ].map((f) => (
              <div key={f.num} className="stagger-child hover-lift p-8 rounded-2xl border border-outline-variant/30 hover:border-primary/30 transition-all group">
                <span className="font-bold text-sm text-primary/40 block mb-4">{f.num}</span>
                <h4 className="text-xl font-bold text-primary mb-3">{f.title}</h4>
                <p className="text-base text-on-surface-variant mb-6 leading-relaxed">{f.desc}</p>
                <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-surface-muted">
        <div className="max-w-container-max mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="anim anim-up text-4xl font-bold text-primary mb-4">Trusted by franchise partners.</h2>
            <p className="anim anim-up d1 text-base text-on-surface-variant">Hear from the entrepreneurs leading the alliance across India.</p>
          </div>
          <div className="stagger-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
            {[
              {
                quote: "Becoming an AYKA Care franchise partner has been one of the best decisions for my career and community. The team's guidance in setup, marketing, and daily operations made the journey seamless.",
                initials: 'AP',
                name: 'Abhishek Pal',
                role: 'District Franchise · Saharanpur',
                bg: 'bg-primary/10',
                tc: 'text-primary',
                featured: false,
              },
              {
                quote: "The investment was reasonable, and the returns have exceeded my expectations. The technology platforms and marketing support make operations smooth — allowing me to focus on expanding healthcare access.",
                initials: 'SY',
                name: 'Sanjay Yadav',
                role: 'District Franchise · Muzaffarnagar',
                bg: 'bg-secondary/20',
                tc: 'text-secondary',
                featured: true,
              },
              {
                quote: "Partnering with AYKA Care has transformed how healthcare reaches people in Dehradun. The comprehensive support system and strong brand reputation helped me build a thriving healthcare network.",
                initials: 'MP',
                name: 'Mahesh Patel',
                role: 'District Franchise · Dehradun',
                bg: 'bg-amber-accent/20',
                tc: 'text-amber-accent',
                featured: false,
              },
            ].map((t) => (
              <div
                key={t.name}
                className={`stagger-child hover-lift bg-white p-8 rounded-3xl shadow-card flex flex-col justify-between border relative ${
                  t.featured ? 'border-primary/20 scale-105 z-10' : 'border-outline-variant/10'
                }`}
              >
                {t.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    Featured Story
                  </div>
                )}
                <p className="text-base text-on-surface italic mb-10 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full ${t.bg} flex items-center justify-center ${t.tc} font-bold`}>
                    {t.initials}
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-primary uppercase tracking-wider">{t.name}</h5>
                    <p className="text-xs text-on-surface-variant mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="anim anim-scale max-w-container-max mx-auto bg-primary rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-on-primary mb-8 leading-tight">
              Ready to scale your territory?
            </h2>
            <p className="text-lg text-on-primary-container mb-10 max-w-2xl mx-auto leading-relaxed">
              Secure your exclusive rights today and leverage India&apos;s fastest-growing medical technology ecosystem.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link
                href="/apply"
                className="bg-secondary-fixed text-on-secondary-fixed px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-wider hover:scale-105 transition-transform shadow-lg btn-hover pulse-cta w-full md:w-auto text-center"
              >
                Claim My Territory Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
