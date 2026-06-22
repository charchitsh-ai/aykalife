import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFAB from '@/components/WhatsAppFAB'
import ApplicationForm from '@/components/ApplicationForm'

export const metadata = {
  title: 'Apply for a Franchise | Ayka Alliance',
  description: 'Submit your franchise application and secure your exclusive territory. Our team will contact you within 24-48 hours.',
}

export default function ApplyPage() {
  return (
    <>
      <Navbar />

      {/* Page Header */}
      <div className="max-w-container-max mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left: info */}
          <div className="lg:col-span-5">
            <span className="text-primary font-bold text-sm uppercase tracking-widest">Partner Application</span>
            <h1 className="text-5xl font-bold text-primary mt-4 mb-6 leading-tight tracking-tight">
              Join the AYKA Alliance
            </h1>
            <p className="text-lg text-on-surface-variant mb-10 leading-relaxed">
              Fill out this form to start your journey as an AYKA Care franchise partner. All franchise territories are allocated on a first-come, first-served basis.
            </p>

            {/* Trust Markers */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { icon: 'verified', stat: '2,500+', label: 'Verified Experts' },
                { icon: 'location_on', stat: '15+', label: 'Active Franchises' },
                { icon: 'medical_services', stat: '40+', label: 'Partner Clinics' },
                { icon: 'groups', stat: '30k+', label: 'Patient Reach' },
              ].map((s) => (
                <div key={s.label} className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/30">
                  <span className="material-symbols-outlined text-primary mb-3 block">{s.icon}</span>
                  <div className="text-3xl font-bold tracking-tight text-primary">{s.stat}</div>
                  <div className="text-sm font-bold text-on-surface-variant mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <a href="tel:+919211825264" className="flex items-center gap-4 text-primary hover:text-secondary transition-colors">
                <span className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-sm text-on-primary-fixed">call</span>
                </span>
                <span className="font-bold">+91 92118 25264</span>
              </a>
              <a href="mailto:alliance@aykacare.in" className="flex items-center gap-4 text-primary hover:text-secondary transition-colors">
                <span className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-sm text-on-primary-fixed">mail</span>
                </span>
                <span className="font-bold">alliance@aykacare.in</span>
              </a>
            </div>

            {/* Testimonial Inlay */}
            <div className="mt-10 bg-primary-container/30 p-6 rounded-xl border border-primary-fixed/30">
              <p className="text-base italic text-on-surface leading-relaxed mb-4">
                &ldquo;Becoming an AYKA Care franchise partner has been one of the best decisions for my career and community.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold text-sm">AP</div>
                <div>
                  <div className="font-bold text-sm text-primary">Abhishek Pal</div>
                  <div className="text-xs text-on-surface-variant">District Franchise · Saharanpur</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7 mt-10 lg:mt-0">
            <ApplicationForm />
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppFAB />
    </>
  )
}
