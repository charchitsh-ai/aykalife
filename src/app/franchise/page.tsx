import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFAB from '@/components/WhatsAppFAB'
import DarkEnquiryForm from '@/components/DarkEnquiryForm'

export const metadata = {
  title: 'Franchise Models & ROI | Ayka Alliance',
  description: 'Choose your territory and scale. Three AYKA Alliance franchise models with exclusive territorial rights and high-recurring revenue potential.',
}

const faqs = [
  {
    q: 'What is the minimum investment required?',
    a: 'The minimum investment starts at ₹50,000 for the City Flagship Franchise. District Franchise requires ₹9,00,000 and State Franchise requires ₹20,00,000. Each model includes franchise fee, setup costs, and working capital.',
  },
  {
    q: 'Do I need medical qualifications to own a franchise?',
    a: 'No. AYKA Care welcomes both medical and non-medical partners. We provide comprehensive training, SOPs, technology platforms, and ongoing support to ensure your success regardless of background.',
  },
  {
    q: 'What kind of support will I receive?',
    a: "You'll receive complete operational support including national branding, marketing materials, technology platforms, business development assistance, training programs, and dedicated relationship management from our central team.",
  },
  {
    q: 'What is the franchise tenure?',
    a: 'City and District Franchises have a 3-year tenure, while State Franchise has a 2-year tenure. Renewal terms are based on performance metrics and mutual agreement.',
  },
  {
    q: 'Are territories exclusive?',
    a: 'Yes. All franchise models come with exclusive territorial rights. Once allocated, no other franchise will be awarded in your designated city, district, or state — fully protecting your market opportunity.',
  },
]

export default function FranchisePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden bg-background">
        <div className="max-w-container-max mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-bold text-sm mb-6">
            <span className="material-symbols-outlined text-lg">verified</span>
            India&apos;s Fastest-Growing Network
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-primary max-w-4xl mx-auto mb-6 leading-tight tracking-tight">
            Choose your territory.{' '}
            <span className="text-secondary">Choose your scale.</span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Three models designed for different levels of commitment and growth ambition — all with exclusive territorial rights and high-recurring revenue potential.
          </p>
        </div>
      </section>

      {/* Franchise Models Grid */}
      <section className="py-20 bg-surface-muted">
        <div className="max-w-container-max mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* City */}
            <div className="bg-white p-8 rounded-xl card-shadow border border-outline-variant flex flex-col hover:-translate-y-2 transition-all hover:border-primary">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="font-bold text-sm text-on-surface-variant uppercase tracking-widest">City Level</span>
                  <h3 className="text-2xl font-bold text-primary mt-2">City Flagship</h3>
                </div>
                <div className="p-3 rounded-full bg-primary/5 text-primary">
                  <span className="material-symbols-outlined">location_city</span>
                </div>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-bold tracking-tight text-primary">₹50,000</span>
                <p className="font-bold text-sm text-on-surface-variant mt-1">One-time franchise fee · 3-year tenure</p>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {[
                  { icon: 'check_circle', text: 'Exclusive city-level rights' },
                  { icon: 'check_circle', text: 'OPD, telemedicine & revenue' },
                  { icon: 'check_circle', text: 'Full marketing & tech support' },
                  { icon: 'schedule', text: 'Breakeven: 6–12 months', bold: true },
                ].map((f) => (
                  <li key={f.text} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary">{f.icon}</span>
                    <span className={`text-base ${f.bold ? 'font-semibold' : ''}`}>{f.text}</span>
                  </li>
                ))}
              </ul>
              <Link href="/apply?model=City+Flagship" className="w-full py-4 px-6 border-2 border-primary text-primary font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-primary hover:text-on-primary transition-all text-center block">
                Claim City Territory
              </Link>
            </div>

            {/* District — Featured */}
            <div className="bg-white p-8 rounded-xl card-shadow border-2 border-primary flex flex-col relative overflow-hidden hover:-translate-y-2 transition-all">
              <div className="absolute top-0 right-0 bg-primary text-on-primary px-6 py-2 rounded-bl-xl font-bold text-sm">
                MOST POPULAR
              </div>
              <div className="flex justify-between items-start mb-6 pt-4">
                <div>
                  <span className="font-bold text-sm text-on-surface-variant uppercase tracking-widest">District Level</span>
                  <h3 className="text-2xl font-bold text-primary mt-2">District Franchise</h3>
                </div>
                <div className="p-3 rounded-full bg-primary/5 text-primary">
                  <span className="material-symbols-outlined">map</span>
                </div>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-bold tracking-tight text-primary">₹9,00,000</span>
                <p className="font-bold text-sm text-on-surface-variant mt-1">Fee: ₹3.5 Lacs one-time · 3-year tenure</p>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {[
                  { icon: 'check_circle', text: 'Exclusive district-level rights' },
                  { icon: 'check_circle', text: 'Revenue from all city franchises' },
                  { icon: 'check_circle', text: 'Direct District Flagship Clinic' },
                  { icon: 'schedule', text: 'Breakeven: 12–18 months', bold: true },
                ].map((f) => (
                  <li key={f.text} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary">{f.icon}</span>
                    <span className={`text-base ${f.bold ? 'font-semibold' : ''}`}>{f.text}</span>
                  </li>
                ))}
              </ul>
              <Link href="/apply?model=District+Franchise" className="w-full py-4 px-6 bg-primary text-on-primary font-bold text-sm uppercase tracking-wider rounded-lg hover:shadow-lg transition-all text-center block">
                Claim District Territory
              </Link>
            </div>

            {/* State */}
            <div className="bg-white p-8 rounded-xl card-shadow border border-outline-variant flex flex-col hover:-translate-y-2 transition-all hover:border-primary">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="font-bold text-sm text-on-surface-variant uppercase tracking-widest">State Level</span>
                  <h3 className="text-2xl font-bold text-primary mt-2">State Franchise</h3>
                </div>
                <div className="p-3 rounded-full bg-primary/5 text-primary">
                  <span className="material-symbols-outlined">public</span>
                </div>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-bold tracking-tight text-primary">₹20,00,000</span>
                <p className="font-bold text-sm text-on-surface-variant mt-1">Fee: ₹8 Lacs one-time · 3-year tenure</p>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {[
                  { icon: 'check_circle', text: 'Master rights for entire state' },
                  { icon: 'check_circle', text: 'Override on all districts & cities' },
                  { icon: 'check_circle', text: 'Strategic leadership role' },
                  { icon: 'schedule', text: 'Breakeven: 18–24 months', bold: true },
                ].map((f) => (
                  <li key={f.text} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary">{f.icon}</span>
                    <span className={`text-base ${f.bold ? 'font-semibold' : ''}`}>{f.text}</span>
                  </li>
                ))}
              </ul>
              <Link href="/apply?model=State+Franchise" className="w-full py-4 px-6 border-2 border-primary text-primary font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-primary hover:text-on-primary transition-all text-center block">
                Claim State Territory
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Model Bento */}
      <section className="py-20 bg-white">
        <div className="max-w-container-max mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Multiple income streams. One business.</h2>
            <p className="text-lg text-on-surface-variant">Unlike traditional franchises, AYKA generates recurring revenue across 6 categories.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            <div className="md:col-span-2 bg-surface-container p-8 rounded-xl">
              <span className="material-symbols-outlined text-primary mb-4 block">analytics</span>
              <h4 className="text-xl font-bold text-primary mb-2">Clinic SaaS</h4>
              <p className="text-base leading-relaxed">Monthly software fees from partner clinics in your territory.</p>
            </div>
            <div className="md:col-span-2 bg-surface-container p-8 rounded-xl">
              <span className="material-symbols-outlined text-primary mb-4 block">person_add</span>
              <h4 className="text-xl font-bold text-primary mb-2">Doctor Network</h4>
              <p className="text-base leading-relaxed">Revenue from doctors registered and active on the platform.</p>
            </div>
            <div className="md:col-span-2 bg-surface-container p-8 rounded-xl">
              <span className="material-symbols-outlined text-primary mb-4 block">videocam</span>
              <h4 className="text-xl font-bold text-primary mb-2">Telemedicine</h4>
              <p className="text-base leading-relaxed">Commissions from online consultations and remote healthcare.</p>
            </div>
            <div className="md:col-span-3 bg-secondary-container p-10 rounded-xl flex items-center gap-8">
              <div className="p-5 rounded-full bg-on-secondary-container/10 shrink-0">
                <span className="material-symbols-outlined text-on-secondary-container" style={{ fontSize: 40 }}>refresh</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-on-secondary-container mb-2">Compounding Revenue</h4>
                <p className="text-base text-on-secondary-container/80 leading-relaxed">Every new doctor or clinic increases the long-term asset value of your territory.</p>
              </div>
            </div>
            <div className="md:col-span-3 bg-primary text-on-primary p-10 rounded-xl flex items-center gap-8">
              <div className="p-5 rounded-full bg-white/10 shrink-0">
                <span className="material-symbols-outlined text-white" style={{ fontSize: 40 }}>shield</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Exclusive Rights</h4>
                <p className="text-base text-white/80 leading-relaxed">Zero internal competition. Your territory is strictly your own growth playground.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-surface-muted">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Common questions, direct answers.</h2>
            <p className="text-lg text-on-surface-variant">Everything you need to know about starting your healthcare journey.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-white rounded-lg border border-outline-variant overflow-hidden">
                <summary className="w-full px-6 py-5 text-left flex justify-between items-center cursor-pointer list-none font-bold text-primary">
                  {faq.q}
                  <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180 shrink-0">expand_more</span>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-base text-on-surface-variant leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary overflow-hidden relative">
        <div className="max-w-container-max mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-white mb-6 leading-tight">Secure your territory before someone else does.</h2>
              <p className="text-lg text-white/80 mb-8 max-w-lg leading-relaxed">
                Franchise rights are allocated on a first-come, first-served basis. Our team will contact you within 24–48 hours of your enquiry.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-white">
                  <span className="material-symbols-outlined">call</span>
                  <span className="font-bold">+91 92118 25264</span>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <span className="material-symbols-outlined">mail</span>
                  <span className="font-bold">alliance@aykacare.in</span>
                </div>
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
