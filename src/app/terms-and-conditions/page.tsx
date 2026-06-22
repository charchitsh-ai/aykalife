import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Terms and Conditions | Ayka Alliance',
  description: 'Terms and Conditions of AYKA CLYVORA PRIVATE LIMITED',
}

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12 border-b border-outline-variant/30 pb-8">
            <h1 className="text-4xl font-bold text-primary mb-4">Terms and Conditions</h1>
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
              <h2 className="text-2xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed mb-4">
                These Terms and Conditions (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;User&quot;) and AYKA CLYVORA PRIVATE LIMITED (&quot;AYKA&quot;, &quot;Company&quot;, &quot;We&quot;, &quot;Us&quot;, or &quot;Our&quot;), governing your access to and use of the AYKA Care platform, including the website at www.aykacare.in, mobile applications (Android and iOS), CRM systems, electronic tools, and any other digital or physical service facilitated by AYKA.
              </p>
              <p className="leading-relaxed mb-4">
                By accessing or using the AYKA platform in any manner — including by registering an account, subscribing to a plan, using any service, browsing the platform, or clicking &quot;I Agree&quot; — you unconditionally accept and agree to be bound by these Terms, together with AYKA&apos;s Privacy Policy, Refund Policy, Payment Policy, Subscription Terms, Zero Tolerance Policy, Disclaimer, Delete My Account Terms, and all other policies published on the AYKA platform, all of which are incorporated herein by reference.
              </p>
              <p className="leading-relaxed font-semibold text-secondary-fixed">
                If you do not agree to these Terms, you must immediately cease all use of the AYKA platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">2. Nature of AYKA: Aggregator Platform</h2>
              <p className="leading-relaxed mb-4">
                AYKA operates exclusively as a technology-based aggregator and intermediary marketplace. AYKA does NOT itself provide any medical, healthcare, diagnostic, pharmaceutical, insurance, recruitment, or any other professional service.
              </p>
              <p className="leading-relaxed mb-4">
                All services available on the AYKA platform are provided by independent, third-party Service Providers including Experts (Doctors, Nurses, and Healthcare Professionals), Establishments (Clinics and Hospitals), Alliance Partners, and other registered vendors. AYKA&apos;s role is limited to facilitating connections between Users and Service Providers through its technology platform.
              </p>
              <p className="leading-relaxed">
                AYKA shall not be liable for the quality, safety, legality, accuracy, or any outcome of services rendered by any Service Provider. All contractual relationships for services are exclusively between the User and the respective Service Provider.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">3. Eligibility</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>The AYKA platform is available only to individuals who are at least 18 years of age and legally capable of entering into a binding contract under Indian law.</li>
                <li>Users below 18 years of age may access the platform only through an account held by a parent or legal guardian, who shall bear full responsibility for all activities and transactions on such account.</li>
                <li>By using the platform, you represent and warrant that you meet all applicable eligibility requirements.</li>
                <li>The platform is available only to users not subject to any sanctions, trade restrictions, or prohibitions imposed by any competent Indian governmental authority.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Definitions</h2>
              <ul className="space-y-3">
                <li><strong>&quot;AYKA&quot; / &quot;Company&quot; / &quot;We&quot; / &quot;Us&quot;:</strong> AYKA CLYVORA PRIVATE LIMITED and its brand AYKA Care.</li>
                <li><strong>&quot;User&quot; / &quot;You&quot;:</strong> Any individual or entity accessing or using the AYKA platform in any capacity.</li>
                <li><strong>&quot;Expert&quot;:</strong> A licensed healthcare professional registered on the AYKA platform (Doctor, Nurse, Therapist, etc.).</li>
                <li><strong>&quot;Establishment&quot;:</strong> A clinic, hospital, diagnostic center, or other healthcare facility registered on AYKA.</li>
                <li><strong>&quot;Alliance&quot; / &quot;Franchise Partner&quot;:</strong> An individual or business entity operating as an AYKA-affiliated franchise.</li>
                <li><strong>&quot;End User&quot; / &quot;Patient&quot;:</strong> An individual seeking or availing healthcare services through AYKA.</li>
                <li><strong>&quot;Service Provider&quot;:</strong> Any Expert, Establishment, Alliance, or Third-Party Partner offering services on AYKA.</li>
                <li><strong>&quot;Buyer&quot;:</strong> A User who purchases products or services through the AYKA platform.</li>
                <li><strong>&quot;Seller&quot; / &quot;Vendor&quot;:</strong> A User who lists and sells products or services through the AYKA platform.</li>
                <li><strong>&quot;Platform&quot;:</strong> The AYKA website, mobile applications, CRM, electronic tools, and all related digital systems.</li>
                <li><strong>&quot;Order&quot;:</strong> A confirmed transaction between a Buyer and a Seller through the AYKA platform.</li>
                <li><strong>&quot;Subscription&quot;:</strong> A paid or free plan providing access to specific AYKA platform features and services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Account Registration and Security</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Users must register an account to access most platform features. All registration information must be accurate, complete, and kept up to date.</li>
                <li>Each user is permitted to maintain only one active account per user category (Buyer/Seller/Expert/Establishment). Multiple accounts created to circumvent platform policies may be permanently banned.</li>
                <li>You are solely responsible for maintaining the confidentiality and security of your login credentials. AYKA shall not be liable for any unauthorized access to or use of your account.</li>
                <li>You must immediately notify AYKA at support@aykacare.in of any unauthorized use of your account.</li>
                <li>AYKA reserves the right to verify the identity and credentials of any User at any time and to reject or suspend accounts where verification cannot be completed or where false information is found.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">6. Services Available on AYKA</h2>
              <p className="leading-relaxed mb-4">AYKA facilitates access to the following categories of services through registered Service Providers:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Telemedicine and video consultations</li>
                <li>In-clinic and in-hospital appointments</li>
                <li>Home healthcare services</li>
                <li>Diagnostic and laboratory testing services</li>
                <li>Health insurance facilitation</li>
                <li>Healthcare career and recruitment services</li>
                <li>Medical room and facility rentals</li>
                <li>Healthcare training, events, and workshops</li>
                <li>Product listings by authorized healthcare vendors</li>
              </ul>
              <p className="leading-relaxed italic text-sm">
                The above list is indicative and subject to change. AYKA reserves the right to add, modify, or discontinue any service at any time without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">7. User Conduct</h2>
              <h3 className="text-xl font-bold text-primary mt-4 mb-3">7.1 Prohibited Conduct</h3>
              <p className="leading-relaxed mb-4">All Users must comply with the following conduct requirements:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Providing false, misleading, or fraudulent information on the platform</li>
                <li>Impersonating any person or entity or misrepresenting qualifications or identity</li>
                <li>Using the platform for any unlawful, fraudulent, or harmful purpose</li>
                <li>Circumventing the platform&apos;s payment system by transacting directly with Service Providers outside AYKA</li>
                <li>Posting abusive, defamatory, obscene, or offensive content on the platform</li>
                <li>Harassing, threatening, or discriminating against any User, Expert, or AYKA employee</li>
                <li>Introducing malware, viruses, or any destructive code to the platform</li>
                <li>Attempting unauthorized access to any AYKA system, account, or data</li>
                <li>Creating fake reviews or manipulating the AYKA rating system</li>
                <li>Buying or selling AYKA accounts</li>
                <li>Using automated bots, scrapers, or crawlers on the platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">8. Payments and Transactions</h2>
              <p className="leading-relaxed mb-4">
                All payments for services and subscriptions on the AYKA platform must be made exclusively through AYKA&apos;s integrated payment system. AYKA charges management fees and commissions as outlined in the Payment Policy and Subscription Terms, which are incorporated herein by reference.
              </p>
              <p className="leading-relaxed">
                Users may not offer, accept, or facilitate payments through any channel outside the AYKA platform for services obtained through the platform. Any such off-platform transaction will not be protected by AYKA&apos;s Terms and AYKA shall bear no responsibility for any resulting dispute or loss.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">9. No Refund Policy</h2>
              <p className="leading-relaxed mb-4">
                AYKA operates a strict No Refund Policy as detailed in the AYKA Refund Policy, which is incorporated herein by reference. All payments made on the AYKA platform — including subscription fees, service charges, commission payments, and any other transaction — are final and non-refundable, except in the specific limited circumstances expressly stated in the Refund Policy.
              </p>
              <p className="leading-relaxed font-semibold">
                By using the AYKA platform and making any payment, you expressly acknowledge and agree to this No Refund Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">10. Intellectual Property</h2>
              <p className="leading-relaxed mb-4">
                All content on the AYKA platform, including but not limited to the platform design, layout, code, trademarks, logos, text, graphics, and databases, is the exclusive intellectual property of AYKA CLYVORA PRIVATE LIMITED and is protected under applicable Indian intellectual property laws.
              </p>
              <p className="leading-relaxed">
                Users are granted a limited, non-exclusive, non-transferable license to access and use the platform solely for its intended purposes. No user shall copy, reproduce, distribute, modify, create derivative works of, or commercially exploit any AYKA intellectual property without prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">11. User-Generated Content</h2>
              <p className="leading-relaxed mb-4">
                Users retain ownership of content they submit to the platform. By submitting content (including reviews, profile information, images, and communications), Users grant AYKA a worldwide, royalty-free, non-exclusive, perpetual license to use, reproduce, display, modify, and distribute such content for platform operation and marketing purposes.
              </p>
              <p className="leading-relaxed">
                Users represent and warrant that their submitted content does not infringe any third-party rights and complies with all applicable laws and these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">12. Limitation of Liability</h2>
              <p className="leading-relaxed mb-4">
                To the maximum extent permitted by applicable Indian law, AYKA&apos;s total aggregate liability to any User for any claim arising from or related to these Terms or use of the platform shall not exceed the amount actually paid by the User to AYKA in the three months preceding the event giving rise to the claim.
              </p>
              <p className="leading-relaxed">
                AYKA shall not be liable for any indirect, incidental, special, exemplary, consequential, or punitive damages, regardless of the theory of liability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">13. Indemnification</h2>
              <p className="leading-relaxed">
                You agree to defend, indemnify, and hold harmless AYKA, its directors, officers, employees, affiliates, agents, and licensors from and against all claims, damages, losses, costs, and expenses (including reasonable legal fees) arising from: (i) your use of the platform; (ii) your violation of these Terms; (iii) your violation of any third-party right; or (iv) any dispute between you and any Service Provider or other User.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">14. Suspension and Termination</h2>
              <p className="leading-relaxed mb-4">
                AYKA reserves the right to suspend, restrict, or permanently terminate any User account, at its sole discretion, without prior notice, in cases including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Breach of these Terms or any AYKA policy</li>
                <li>Fraudulent, misleading, or illegal activity</li>
                <li>Non-payment of applicable fees</li>
                <li>Violation of the Zero Tolerance Policy</li>
                <li>Conduct harmful to other Users, Service Providers, or AYKA</li>
              </ul>
              <p className="leading-relaxed">
                Upon termination, all outstanding payment obligations remain enforceable. No refund shall be issued for any unused subscription period upon termination for policy violations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">15. Dispute Resolution</h2>
              <p className="leading-relaxed mb-4">Users are encouraged to resolve disputes amicably. In the event of any unresolved dispute:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Users must first contact AYKA&apos;s support team at support@aykacare.in with full details of the dispute.</li>
                <li>AYKA will endeavor to mediate and resolve the dispute within 30 days.</li>
                <li>If unresolved, disputes shall be referred to arbitration under the Arbitration and Conciliation Act, 1996.</li>
                <li>The seat and venue of arbitration shall be Saharanpur, Uttar Pradesh, India.</li>
                <li>The arbitration shall be conducted in English by a sole arbitrator appointed by AYKA.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">16. Governing Law and Jurisdiction</h2>
              <p className="leading-relaxed">
                These Terms are governed by and construed in accordance with the laws of India. Subject to the dispute resolution clause above, the courts of Saharanpur, Uttar Pradesh, India shall have exclusive jurisdiction over all disputes arising from these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">17. Severability</h2>
              <p className="leading-relaxed">
                If any provision of these Terms is found to be invalid, unlawful, or unenforceable, such provision shall be severed, and the remaining provisions shall continue in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">18. Entire Agreement</h2>
              <p className="leading-relaxed">
                These Terms, together with all AYKA policies referenced herein, constitute the entire agreement between you and AYKA with respect to the subject matter hereof and supersede all prior agreements, representations, or understandings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">19. Changes to Terms</h2>
              <p className="leading-relaxed">
                AYKA may amend these Terms at any time. Updated Terms will be posted on the platform. Continued use of the platform after the effective date of any amendment constitutes acceptance of the revised Terms.
              </p>
            </section>
            
            <div className="pt-8 border-t border-outline-variant/30 text-center text-sm font-bold text-primary space-y-2 flex flex-col items-center">
              <p>For inquiries: support@aykacare.in</p>
              <p>www.aykacare.in / www.aykaalliance.in</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
