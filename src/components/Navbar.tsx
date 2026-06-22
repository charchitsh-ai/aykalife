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
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-on-primary font-bold text-sm">A</span>
          </div>
          <span className="font-bold text-primary text-lg hidden sm:block">Ayka Alliance</span>
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
          <button className="hidden lg:block text-primary font-bold text-sm hover:underline">
            Login
          </button>
          <Link
            href="/apply"
            className="bg-primary text-on-primary px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-primary-container transition-colors"
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
        <div className="md:hidden bg-surface border-t border-outline-variant/30 px-6 py-4 space-y-4">
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
        </div>
      )}
    </nav>
  )
}
