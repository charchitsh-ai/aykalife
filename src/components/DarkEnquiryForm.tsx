'use client'

import { useState } from 'react'
import { submitApplication } from '@/lib/actions'

export default function DarkEnquiryForm() {
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
    })
    setPending(false)
    if (result.success) setSuccess(true)
    else setError(result.error || 'Something went wrong. Please try again.')
  }

  if (success) {
    return (
      <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 text-center">
        <span className="material-symbols-outlined text-5xl text-secondary-fixed mb-4 block">check_circle</span>
        <h3 className="text-2xl font-bold text-on-primary mb-2">Enquiry Submitted!</h3>
        <p className="text-on-primary/80">Our team will contact you within 24–48 hours.</p>
      </div>
    )
  }

  return (
    <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-on-primary/60 uppercase mb-2 tracking-wider">First Name</label>
            <input
              name="first_name"
              required
              type="text"
              className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white placeholder-white/30 focus:border-secondary-fixed focus:outline-none focus:ring-0 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-on-primary/60 uppercase mb-2 tracking-wider">Last Name</label>
            <input
              name="last_name"
              required
              type="text"
              className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white placeholder-white/30 focus:border-secondary-fixed focus:outline-none focus:ring-0 transition-colors"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-on-primary/60 uppercase mb-2 tracking-wider">Email</label>
          <input
            name="email"
            required
            type="email"
            className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white placeholder-white/30 focus:border-secondary-fixed focus:outline-none focus:ring-0 transition-colors"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-on-primary/60 uppercase mb-2 tracking-wider">Contact Number</label>
            <input
              name="phone"
              required
              type="tel"
              className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white placeholder-white/30 focus:border-secondary-fixed focus:outline-none focus:ring-0 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-on-primary/60 uppercase mb-2 tracking-wider">City / State</label>
            <input
              name="city_state"
              required
              type="text"
              className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white placeholder-white/30 focus:border-secondary-fixed focus:outline-none focus:ring-0 transition-colors"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-on-primary/60 uppercase mb-2 tracking-wider">Franchise Model</label>
          <select
            name="franchise_model"
            required
            className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:border-secondary-fixed focus:outline-none focus:ring-0 appearance-none transition-colors"
          >
            <option value="" className="text-primary bg-white">Select a model</option>
            <option value="City Flagship" className="text-primary bg-white">City Flagship Franchise</option>
            <option value="District Franchise" className="text-primary bg-white">District Franchise</option>
            <option value="State Franchise" className="text-primary bg-white">State Franchise</option>
          </select>
        </div>
        {error && <p className="text-red-300 text-sm">{error}</p>}
        <button
          type="submit"
          disabled={pending}
          className="w-full bg-secondary text-on-secondary py-4 rounded-lg font-bold text-sm uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all mt-4 flex items-center justify-center gap-2 disabled:opacity-60"
        >
          {pending ? 'Submitting...' : 'Submit Enquiry'}
          {!pending && <span className="material-symbols-outlined text-base">send</span>}
        </button>
      </form>
    </div>
  )
}
