import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy | Ayka Alliance',
  description: 'Privacy Policy of AYKA CLYVORA PRIVATE LIMITED',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12 border-b border-outline-variant/30 pb-8">
            <h1 className="text-4xl font-bold text-primary mb-4">Privacy Policy</h1>
            <p className="text-sm text-on-surface-variant uppercase tracking-widest font-bold">AYKA CLYVORA PRIVATE LIMITED</p>
            <div className="mt-6 flex flex-col sm:flex-row sm:gap-8 gap-2 text-sm text-on-surface-variant">
              <p><strong>Effective Date:</strong> 11th May 2025</p>
              <p><strong>Last Updated:</strong> 11th May 2025</p>
              <p><strong>Governed by:</strong> Laws of India</p>
            </div>
            <p className="mt-2 text-sm text-on-surface-variant"><strong>Contact:</strong> support@aykacare.in</p>
          </div>

          <div className="prose prose-primary max-w-none text-on-surface space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
              <p className="leading-relaxed mb-4">
                AYKA CLYVORA PRIVATE LIMITED (&quot;AYKA&quot;, &quot;Company&quot;, &quot;We&quot;, &quot;Us&quot;, or &quot;Our&quot;), operating the AYKA Care platform at www.aykacare.in, is committed to protecting the privacy, confidentiality, and security of all personal data collected through its platforms, services, and establishments. This Privacy Policy is formulated in compliance with the Digital Personal Data Protection Act, 2023 (&quot;DPDP Act&quot;), the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and all other applicable Indian laws and regulations.
              </p>
              <p className="leading-relaxed mb-4">
                This Privacy Policy governs the collection, processing, storage, use, disclosure, and protection of personal data of all users of the AYKA platform, including Experts, Establishments, Patients, Alliance Partners, Third-Party Partners, and Visitors.
              </p>
              <p className="leading-relaxed">
                By accessing or using any AYKA platform or service, you consent to the collection and use of your information as described in this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">2. Scope of Application</h2>
              <p className="leading-relaxed mb-4">This Privacy Policy applies to all AYKA platforms and services, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>AYKA Website: www.aykacare.in</li>
                <li>AYKA Mobile Applications (Android and iOS)</li>
                <li>AYKA CRM and Administrative Systems</li>
                <li>AYKA Establishments: AYKA Life (Alliance Offices), AYKA Clinic, AYKA Hospital</li>
                <li>All third-party integrations and tools used by AYKA</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">3. Categories of Data Collected</h2>
              
              <h3 className="text-xl font-bold text-primary mt-6 mb-3">3.1 Personal and Professional Information</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Full name, date of birth, gender, nationality</li>
                <li>Contact details: mobile number, email address, residential/business address</li>
                <li>Government-issued identity documents (Aadhaar, PAN, Passport, etc.) where required</li>
                <li>Professional credentials, medical registration numbers, and certifications (for Experts and Establishments)</li>
                <li>Business registration details, GST number (for Establishments and Alliance Partners)</li>
                <li>Profile photographs and identity verification documents</li>
              </ul>

              <h3 className="text-xl font-bold text-primary mt-6 mb-3">3.2 Health and Medical Information (Sensitive Personal Data)</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Medical history, current health conditions, prescriptions</li>
                <li>Consultation notes, diagnostic reports, lab test results</li>
                <li>Health insurance details and claims information</li>
                <li>Appointment records and treatment history</li>
              </ul>
              <p className="leading-relaxed mb-6 italic text-sm">
                Health and medical information is classified as Sensitive Personal Data under Indian law and is collected only with your explicit informed consent and processed with the highest standards of security and confidentiality.
              </p>

              <h3 className="text-xl font-bold text-primary mt-6 mb-3">3.3 Financial Information</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Payment method details (processed through secure, PCI-DSS compliant gateways)</li>
                <li>Transaction history, subscription details, invoice records</li>
                <li>Bank account details for expert/establishment payouts (encrypted storage)</li>
              </ul>

              <h3 className="text-xl font-bold text-primary mt-6 mb-3">3.4 Technical and Usage Data</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address, device ID, operating system, browser type</li>
                <li>Location data (only when explicitly permitted by the user)</li>
                <li>Platform usage patterns, session data, interaction logs</li>
                <li>Cookies and tracking technologies data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Purpose of Data Collection and Use</h2>
              <p className="leading-relaxed mb-4">AYKA processes personal data strictly for the following lawful purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Facilitating healthcare service connections between Users and Service Providers</li>
                <li>Account registration, identity verification, and profile management</li>
                <li>Processing payments, managing subscriptions, and administering payouts</li>
                <li>Sending appointment confirmations, reminders, and service notifications</li>
                <li>Improving platform functionality, user experience, and technical performance</li>
                <li>Conducting fraud prevention, security monitoring, and compliance checks</li>
                <li>Fulfilling legal and regulatory obligations under applicable Indian law</li>
                <li>Sending marketing communications and promotional offers (with explicit consent; opt-out available at any time)</li>
                <li>Career and job placement services for registered Experts</li>
                <li>Generating aggregated, anonymized analytical reports for platform improvement</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Legal Basis for Processing</h2>
              <p className="leading-relaxed mb-4">AYKA processes personal data on the following legal bases under the DPDP Act, 2023:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Consent:</strong> Where you have provided explicit, informed, and free consent</li>
                <li><strong>Contract:</strong> Where processing is necessary to provide services you have requested</li>
                <li><strong>Legal Obligation:</strong> Where processing is required by applicable Indian law or court order</li>
                <li><strong>Legitimate Interest:</strong> Where processing serves a legitimate business interest that does not override your rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">6. Sharing of Personal Data</h2>
              <p className="leading-relaxed mb-6">AYKA does not sell, rent, or trade your personal data. Personal data may be shared in the following limited circumstances:</p>
              
              <h3 className="text-xl font-bold text-primary mt-4 mb-2">6.1 With Service Providers on the Platform</h3>
              <p className="leading-relaxed mb-6">Healthcare professionals, clinics, hospitals, labs, pharmacies, and other registered Service Providers receive only the data necessary to render the specific service requested by the User.</p>

              <h3 className="text-xl font-bold text-primary mt-4 mb-2">6.2 With Authorized Third-Party Technology Partners</h3>
              <p className="leading-relaxed mb-6">Payment gateways, cloud hosting providers, analytics platforms, and communication service providers — all bound by strict data processing agreements ensuring compliance with applicable law.</p>

              <h3 className="text-xl font-bold text-primary mt-4 mb-2">6.3 With Legal and Regulatory Authorities</h3>
              <p className="leading-relaxed mb-6">Disclosure may be made to government bodies, law enforcement agencies, courts, or regulatory authorities when required by applicable law, court order, or to protect AYKA&apos;s legal rights.</p>

              <h3 className="text-xl font-bold text-primary mt-4 mb-2">6.4 Business Transfers</h3>
              <p className="leading-relaxed">In the event of a merger, acquisition, or restructuring of AYKA, personal data may be transferred as part of that transaction, subject to equivalent privacy protections.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">7. Data Security</h2>
              <p className="leading-relaxed mb-4">AYKA implements industry-standard technical and organizational security measures, including:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>End-to-end encryption of sensitive personal and medical data</li>
                <li>Role-based access control limiting data access to authorized personnel only</li>
                <li>Regular security audits, vulnerability assessments, and penetration testing</li>
                <li>Secure, encrypted cloud storage with data backup protocols</li>
                <li>Multi-factor authentication for platform access</li>
              </ul>
              <p className="leading-relaxed italic text-sm">
                Despite these measures, no digital platform can guarantee absolute security. Users are advised to maintain strong passwords, not share login credentials, and report any suspicious activity to support@aykacare.in immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">8. Data Retention</h2>
              <p className="leading-relaxed mb-4">AYKA retains personal data for the duration necessary to fulfil the purposes outlined in this Policy and as required under applicable Indian law, including:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Medical records:</strong> As mandated by applicable Indian healthcare regulations</li>
                <li><strong>Financial and transaction records:</strong> As required under the Income Tax Act and GST laws</li>
                <li><strong>Account data:</strong> For the duration of active account and a reasonable period thereafter for legal compliance</li>
                <li><strong>Legal hold data:</strong> For the duration of any pending legal proceedings or regulatory investigations</li>
              </ul>
              <p className="leading-relaxed">Upon expiry of the applicable retention period, data will be securely deleted or irreversibly anonymized.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">9. Your Rights Under the DPDP Act, 2023</h2>
              <p className="leading-relaxed mb-4">As a Data Principal under the DPDP Act, 2023, you have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Right to Access:</strong> Request information about what personal data we hold about you</li>
                <li><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal data, subject to legal retention obligations</li>
                <li><strong>Right to Grievance Redressal:</strong> Raise complaints regarding data processing with our Grievance Officer</li>
                <li><strong>Right to Nominate:</strong> Nominate another individual to exercise your rights in case of your incapacity or death</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for data processing at any time (subject to impact on service availability)</li>
              </ul>
              <p className="leading-relaxed font-semibold">To exercise any of the above rights, contact our Grievance Officer at: support@aykacare.in</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">10. Grievance Officer</h2>
              <p className="leading-relaxed mb-4">In accordance with the Information Technology Act, 2000, and the DPDP Act, 2023, AYKA has appointed a Grievance Officer for data protection matters:</p>
              <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/30 mb-4">
                <ul className="space-y-2 font-semibold">
                  <li>Organization: AYKA CLYVORA PRIVATE LIMITED</li>
                  <li>Email: support@aykacare.in</li>
                  <li>Website: www.aykacare.in</li>
                  <li>Jurisdiction: Saharanpur, Uttar Pradesh, India</li>
                </ul>
              </div>
              <p className="leading-relaxed italic text-sm">All grievances will be acknowledged within 48 hours and resolved within 30 days of receipt.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">11. Cookies and Tracking Technologies</h2>
              <p className="leading-relaxed mb-4">AYKA uses cookies and similar tracking technologies to enhance user experience. Types of cookies used:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Essential Cookies:</strong> Required for core platform functionality — cannot be disabled</li>
                <li><strong>Analytical Cookies:</strong> Used to understand usage patterns and improve performance</li>
                <li><strong>Marketing Cookies:</strong> Used for personalized communication (with consent; can be opted out)</li>
              </ul>
              <p className="leading-relaxed">Users may manage cookie preferences through their browser settings. Disabling certain cookies may affect platform functionality.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">12. Data of Minors</h2>
              <p className="leading-relaxed">
                The AYKA platform is intended for users aged 18 years and above. AYKA does not knowingly collect personal data of individuals below 18 years of age without verified parental or guardian consent. If AYKA discovers that data of a minor has been collected without such consent, it will be promptly deleted.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">13. Changes to This Privacy Policy</h2>
              <p className="leading-relaxed">
                AYKA reserves the right to update this Privacy Policy at any time. Material changes will be communicated via email notification or a prominent notice on the platform. Continued use of the platform after the effective date of any update constitutes acceptance of the revised policy. Users are advised to periodically review this Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">14. Governing Law</h2>
              <p className="leading-relaxed">
                This Privacy Policy is governed by the laws of India, including the DPDP Act, 2023, and the Information Technology Act, 2000. Disputes shall be subject to the exclusive jurisdiction of the courts of Saharanpur, Uttar Pradesh, India.
              </p>
            </section>
            
            <div className="pt-8 border-t border-outline-variant/30 text-center text-sm font-bold text-primary">
              <p>For privacy-related inquiries: support@aykacare.in</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
