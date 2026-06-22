'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const links = [
    { href: '/franchise', label: 'Models' },
    { href: '/#why-join', label: 'Why Join' },
    { href: '/technology', label: 'Support' },
    { href: '/apply', label: 'Apply' },
  ]

  return (
    <nav className="bg-surface shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-6 max-w-container-max mx-auto h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/logo.jpg" alt="AYKA LIFE" className="h-12 w-auto object-contain mix-blend-multiply" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-label-bold font-bold text-sm tracking-wider uppercase hover:text-primary transition-colors ${
                pathname === link.href ? 'text-primary' : 'text-on-surface-variant'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/918077416998?text=LOOKING%20FOR%20FRANCHISE%20BUSINESS"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 text-primary font-bold text-sm hover:underline"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-green-500">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.849L.057 23.882a.5.5 0 0 0 .61.61l6.057-1.48A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.68-.51-5.21-1.4l-.37-.22-3.85.94.97-3.74-.24-.38A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            +91 8077416998
          </a>
          <Link
            href="/apply"
            className="hidden sm:inline-flex bg-primary text-on-primary px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-primary-container transition-colors"
          >
            Claim Territory
          </Link>
          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-primary">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-outline-variant/30 px-6 py-6 space-y-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-on-surface-variant font-bold text-sm uppercase tracking-wider hover:text-primary transition-colors py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/apply"
            className="block w-full bg-primary text-on-primary px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider text-center hover:bg-primary-container transition-colors mt-4"
            onClick={() => setMobileOpen(false)}
          >
            Claim Territory
          </Link>
        </div>
      )}
    </nav>
  )
}
