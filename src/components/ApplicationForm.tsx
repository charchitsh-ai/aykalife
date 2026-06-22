'use client'

import { useState } from 'react'
import { submitApplication } from '@/lib/actions'

export default function ApplicationForm() {
  const [pending, setPending] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setPending(true)
    setError('')
    const fd = new FormData(e.currentTarget)
    const result = await submitApplication({
      first_name: fd.get('first_name') as string,
      last_name: fd.get('last_name') as string,
      email: fd.get('email') as string,
      phone: fd.get('phone') as string,
      city_state: fd.get('city_state') as string,
      franchise_model: fd.get('franchise_model') as string,
      occupation: fd.get('occupation') as string,
      message: fd.get('message') as string,
    })
    setPending(false)
    if (result.success) setSuccess(true)
    else setError(result.error || 'Something went wrong. Please try again.')
  }

  if (success) {
    return (
      <div className="bg-white p-12 rounded-2xl card-shadow text-center">
        <span className="material-symbols-outlined text-6xl text-secondary mb-4 block">check_circle</span>
        <h3 className="text-2xl font-bold text-primary mb-2">Application Submitted!</h3>
        <p className="text-on-surface-variant text-base">
          Our franchise team will contact you within 24–48 hours to discuss the next steps.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white p-8 rounded-2xl card-shadow border border-outline-variant/20">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-on-surface uppercase tracking-wider mb-2">First Name *</label>
            <input
              name="first_name"
              required
              type="text"
              className="w-full border border-outline-variant rounded-lg px-4 py-3 text-on-surface bg-surface-container-lowest focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-on-surface uppercase tracking-wider mb-2">Last Name *</label>
            <input
              name="last_name"
              required
              type="text"
              className="w-full border border-outline-variant rounded-lg px-4 py-3 text-on-surface bg-surface-container-lowest focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-bold text-on-surface uppercase tracking-wider mb-2">Email Address *</label>
          <input
            name="email"
            required
            type="email"
            className="w-full border border-outline-variant rounded-lg px-4 py-3 text-on-surface bg-surface-container-lowest focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-on-surface uppercase tracking-wider mb-2">Contact Number *</label>
            <input
              name="phone"
              required
              type="tel"
              className="w-full border border-outline-variant rounded-lg px-4 py-3 text-on-surface bg-surface-container-lowest focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-on-surface uppercase tracking-wider mb-2">City / State *</label>
            <input
              name="city_state"
              required
              type="text"
              className="w-full border border-outline-variant rounded-lg px-4 py-3 text-on-surface bg-surface-container-lowest focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-on-surface uppercase tracking-wider mb-2">Franchise Model *</label>
            <select
              name="franchise_model"
              required
              className="w-full border border-outline-variant rounded-lg px-4 py-3 text-on-surface bg-surface-container-lowest focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary appearance-none transition-colors"
            >
              <option value="">Select a model</option>
              <option value="City Flagship">City Flagship Franchise — ₹50,000</option>
              <option value="District Franchise">District Franchise — ₹9,00,000</option>
              <option value="State Franchise">State Franchise — ₹20,00,000</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold text-on-surface uppercase tracking-wider mb-2">Occupation</label>
            <select
              name="occupation"
              className="w-full border border-outline-variant rounded-lg px-4 py-3 text-on-surface bg-surface-container-lowest focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary appearance-none transition-colors"
            >
              <option value="">Select your background</option>
              <option value="Doctor/Specialist">Doctor / Specialist</option>
              <option value="Healthcare Entrepreneur">Healthcare Entrepreneur</option>
              <option value="Non-Medical Entrepreneur">Non-Medical Entrepreneur</option>
              <option value="Investor">Investor</option>
              <option value="Diagnostics/Lab">Diagnostics / Lab Partner</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-bold text-on-surface uppercase tracking-wider mb-2">Message (Optional)</label>
          <textarea
            name="message"
            rows={4}
            className="w-full border border-outline-variant rounded-lg px-4 py-3 text-on-surface bg-surface-container-lowest focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
            placeholder="Tell us about your interest or any questions..."
          />
        </div>
        {error && <p className="text-error text-sm bg-error-container px-4 py-3 rounded-lg">{error}</p>}
        <button
          type="submit"
          disabled={pending}
          className="w-full bg-primary text-on-primary py-4 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-primary-container transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
        >
          {pending ? 'Submitting Application...' : 'Submit Franchise Application'}
          {!pending && <span className="material-symbols-outlined text-base">arrow_forward</span>}
        </button>
        <p className="text-xs text-on-surface-variant text-center">
          Our team will contact you within 24–48 hours. Territories are allocated first-come, first-served.
        </p>
      </form>
    </div>
  )
}
