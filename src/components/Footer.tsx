import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary">
      <div className="max-w-container-max mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="inline-block mb-6 bg-white rounded-lg p-2">
            <Image src="/logo.jpg" alt="AYKA LIFE" width={100} height={40} className="h-10 w-auto object-contain" />
          </Link>
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
            <li><Link href="/franchise" className="text-on-primary/80 hover:text-secondary-fixed transition-colors text-sm">Franchise ROI</Link></li>
            <li><Link href="/technology" className="text-on-primary/80 hover:text-secondary-fixed transition-colors text-sm">Operational Support</Link></li>
            <li><Link href="/technology" className="text-on-primary/80 hover:text-secondary-fixed transition-colors text-sm">Tech Ecosystem</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-secondary-fixed">Partner Portal</h4>
          <ul className="space-y-4">
            <li><Link href="/#specialties" className="text-on-primary/80 hover:text-secondary-fixed transition-colors text-sm">Doctor Network</Link></li>
            <li><a href="#" className="text-on-primary/80 hover:text-secondary-fixed transition-colors text-sm">Operational Guide</a></li>
            <li><a href="tel:+919211825264" className="text-on-primary/80 hover:text-secondary-fixed transition-colors text-sm">Contact Support</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-secondary-fixed">Legal</h4>
          <ul className="space-y-4">
            <li><Link href="/privacy-policy" className="text-on-primary/80 hover:text-secondary-fixed transition-colors text-sm">Privacy Policy</Link></li>
            <li><Link href="/terms-and-conditions" className="text-on-primary/80 hover:text-secondary-fixed transition-colors text-sm">Terms &amp; Conditions</Link></li>
            <li><Link href="/disclaimer" className="text-on-primary/80 hover:text-secondary-fixed transition-colors text-sm">Disclaimer</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-8 px-6">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-on-primary/60">
          <p>© 2025 AYKA Clyvora Pvt Ltd · All rights reserved</p>
          
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-base">lock</span>
              <span>Secure Platform</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-base">flag</span>
              <span>Made in India</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-base">rocket_launch</span>
              <span>Startup India Recognised Brand</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
