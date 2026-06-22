'use server'

import { createClient } from '@supabase/supabase-js'
import nodemailer from 'nodemailer'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Initialize Supabase only if keys are present to prevent server crash on startup
const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null


const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: 'hello@aykacare.co.in',
    pass: 'Ayka@1640',
  },
})

export type ApplicationData = {
  first_name: string
  last_name: string
  email: string
  phone: string
  city_state: string
  franchise_model: string
  occupation?: string
  message?: string
}

export async function submitApplication(data: ApplicationData) {
  // 1. Save to Supabase (if configured)
  if (supabase) {
    const { error } = await supabase
      .from('franchise_applications')
      .insert([{
        ...data,
        submitted_at: new Date().toISOString(),
        status: 'new',
      }])

    if (error) {
      console.error('Supabase error:', error)
      return { success: false, error: error.message }
    }
  } else {
    console.warn('⚠️ Supabase is not configured. Form data will not be saved to database, but emails will still be sent.')
  }

  // 2. Send email to customer
  const customerHtml = `
<div style="font-family: Arial, sans-serif; font-size: 15px; line-height: 1.8; color: #222;">

<p>Dear ${data.first_name} ${data.last_name},</p>

<p>Greetings from AYKA Care.</p>

<p>Thank you for expressing interest in partnering with AYKA Care for <strong>${data.franchise_model}</strong>.</p>

<p>As part of our national expansion strategy, we are pleased to introduce exclusive franchise opportunities across India for entrepreneurs, healthcare professionals, investors, and business leaders who wish to participate in the rapidly growing healthcare sector.</p>

<p>AYKA Care is a healthcare technology and services platform focused on making expert healthcare accessible, available, and affordable through a connected ecosystem of patients, doctors, clinics, healthcare institutions, and technology solutions.</p>

<p><strong>Today, AYKA Care is building one of India's fastest-growing healthcare networks with:</strong><br/>
• 2,500+ Verified Medical Experts<br/>
• 30+ Partner Clinics<br/>
• Presence across multiple states and districts<br/>
• Integrated Patient, Doctor &amp; Clinic CRM Platform<br/>
• Mobile Applications for Patients and Healthcare Professionals<br/>
• Telemedicine &amp; OPD Services<br/>
• Subscription-Based Healthcare Programs<br/>
• Medical Student Excellence Program<br/>
• Healthcare SaaS &amp; Digital Solutions</p>

<p>To support our next phase of growth, AYKA Care has opened franchise opportunities at State, District, and City levels, allowing partners to establish and scale healthcare services within their territories while leveraging AYKA Care's technology, brand, operational support, and business ecosystem.</p>

<p><strong>As an AYKA Care Franchise Partner, you gain access to:</strong><br/>
✓ Multiple Revenue Streams<br/>
✓ Healthcare Technology Platform<br/>
✓ Doctor &amp; Clinic Network Development<br/>
✓ Telemedicine Services<br/>
✓ Patient Subscription Programs<br/>
✓ Healthcare SaaS Solutions<br/>
✓ Marketing &amp; Brand Support<br/>
✓ Business Development Assistance<br/>
✓ Training &amp; Operational Guidance<br/>
✓ Scalable Territory-Based Growth Model</p>

<p>Whether you are looking to start a healthcare business in your city, build a district-wide healthcare network, or lead healthcare expansion across an entire state, AYKA Care offers a structured partnership model designed for long-term growth and recurring revenue generation.</p>

<p><strong>Please find the detailed Franchise Information Kit attached with this email, which includes:</strong><br/>
• Franchise Models &amp; Investment Details<br/>
• Territory Structure<br/>
• Revenue Opportunities<br/>
• Business Support Framework<br/>
• Technology Ecosystem<br/>
• Growth Potential &amp; Expansion Roadmap<br/>
• Onboarding Process</p>

<p>Our Franchise Development Team will be happy to discuss the opportunity, answer your questions, and help you evaluate the most suitable franchise model based on your goals and preferred territory.</p>

<p>To schedule a discussion, simply reply to this email or contact us directly:<br/>
📞 +91 93151 95736<br/>
📧 <a href="mailto:alliance@aykacare.in">alliance@aykacare.in</a></p>

<p><strong>Explore Our Ecosystem:</strong><br/>
Patients Platform — <a href="https://aykacare.in">https://aykacare.in</a><br/>
Medical Professionals Platform — <a href="https://aykaexpert.in">https://aykaexpert.in</a><br/>
Alliance Partner Network — <a href="https://aykaalliance.in">https://aykaalliance.in</a></p>

<p>Thank you for considering AYKA Care as your healthcare business partner. We look forward to exploring this opportunity with you and building the future of healthcare together.</p>

<p>Warm Regards,<br/>
<strong>Franchise Development Team</strong><br/>
<strong>AYKA Care</strong><br/>
<em>"Making Expert Healthcare Accessible, Available &amp; Affordable"</em></p>

</div>
`

  try {
    await transporter.sendMail({
      from: '"AYKA Care Franchise" <hello@aykacare.co.in>',
      to: data.email,
      cc: 'hello@aykaalliance.in, alliance@aykacare.in',
      bcc: 'noreplyayka@gmail.com',
      subject: 'AYKA Care Franchise Opportunity | Build the Future of Healthcare in Your Territory ' + data.franchise_model,
      html: customerHtml,
    })
  } catch (err) {
    console.error('Error sending customer email:', err)
  }

  // 3. Send internal notification email
  const internalHtml = '<h2>New Franchise Enquiry Received</h2>' +
    '<p><strong>Name:</strong> ' + data.first_name + ' ' + data.last_name + '</p>' +
    '<p><strong>Email:</strong> ' + data.email + '</p>' +
    '<p><strong>Phone:</strong> ' + data.phone + '</p>' +
    '<p><strong>City / State:</strong> ' + data.city_state + '</p>' +
    '<p><strong>Franchise Model:</strong> ' + data.franchise_model + '</p>' +
    (data.occupation ? '<p><strong>Occupation:</strong> ' + data.occupation + '</p>' : '') +
    (data.message ? '<p><strong>Message:</strong> ' + data.message + '</p>' : '') +
    '<p><strong>Submitted At:</strong> ' + new Date().toLocaleString() + '</p>'

  try {
    await transporter.sendMail({
      from: '"AYKA Website Bot" <hello@aykacare.co.in>',
      to: 'iaykacare@gmail.com',
      subject: 'New Franchise Enquiry: ' + data.franchise_model + ' - ' + data.first_name + ' ' + data.last_name,
      html: internalHtml,
    })
  } catch (err) {
    console.error('Error sending internal notification email:', err)
  }

  return { success: true }
}
