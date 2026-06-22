import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary">
      <div className="max-w-container-max mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-on-primary/10 flex items-center justify-center">
              <span className="text-on-primary font-bold text-sm">A</span>
            </div>
            <span className="font-bold text-on-primary text-lg">Ayka Alliance</span>
          </div>
          <p className="text-base text-on-primary/70 mb-6 leading-relaxed">
            Building a connected healthcare ecosystem for Bharat. Expert care made accessible.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-sm">share</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-sm">public</span>
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-secondary-fixed">Core Solutions</h4>
          <ul className="space-y-4">
            <li><Link href="/franchise" className="text-on-primary/80 hover:text-secondary-fixed transition-colors underline text-sm">Franchise ROI</Link></li>
            <li><Link href="/technology" className="text-on-primary/80 hover:text-secondary-fixed transition-colors underline text-sm">Operational Support</Link></li>
            <li><Link href="/technology" className="text-on-primary/80 hover:text-secondary-fixed transition-colors underline text-sm">Tech Ecosystem</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-secondary-fixed">Partner Portal</h4>
          <ul className="space-y-4">
            <li><Link href="/#specialties" className="text-on-primary/80 hover:text-secondary-fixed transition-colors underline text-sm">Doctor Network</Link></li>
            <li><a href="#" className="text-on-primary/80 hover:text-secondary-fixed transition-colors underline text-sm">Operational Guide</a></li>
            <li><a href="tel:+919211825264" className="text-on-primary/80 hover:text-secondary-fixed transition-colors underline text-sm">Contact Support</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-secondary-fixed">Legal</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-on-primary/80 hover:text-secondary-fixed transition-colors underline text-sm">Privacy Policy</a></li>
            <li><a href="#" className="text-on-primary/80 hover:text-secondary-fixed transition-colors underline text-sm">Terms &amp; Conditions</a></li>
            <li><a href="#" className="text-on-primary/80 hover:text-secondary-fixed transition-colors underline text-sm">Disclaimer</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-8 px-6">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-on-primary/60">© 2024 Ayka Alliance. All rights reserved. Healthcare Franchise Excellence.</p>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary-fixed text-base">verified</span>
            <span className="font-bold text-sm text-secondary-fixed">ISO 9001:2015 Certified Organization</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
