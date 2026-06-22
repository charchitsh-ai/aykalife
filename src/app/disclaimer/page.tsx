import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Disclaimer | Ayka Alliance',
  description: 'Disclaimer of AYKA CLYVORA PRIVATE LIMITED',
}

export default function DisclaimerPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12 border-b border-outline-variant/30 pb-8">
            <h1 className="text-4xl font-bold text-primary mb-4">Disclaimer</h1>
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
              <h2 className="text-2xl font-bold text-primary mb-4">1. Nature of Platform</h2>
              <p className="leading-relaxed mb-4">
                AYKA CLYVORA PRIVATE LIMITED, operating under the brand name AYKA Care (hereinafter referred to as &quot;AYKA&quot;, &quot;Company&quot;, &quot;We&quot;, &quot;Us&quot;, or &quot;Our&quot;), is a technology-driven aggregator platform registered and operating under the laws of India. AYKA solely acts as an intermediary marketplace that connects independent service providers, healthcare professionals, establishments, vendors, and third-party partners (collectively &quot;Service Providers&quot;) with end-users, patients, and buyers (collectively &quot;Users&quot;).
              </p>
              <p className="leading-relaxed">
                AYKA does not itself provide any medical, healthcare, diagnostic, insurance, pharmaceutical, recruitment, or any other professional service. All services listed, offered, or facilitated through the AYKA platform are rendered exclusively by independent Service Providers who are solely responsible for the quality, accuracy, legality, and outcome of their respective services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">2. No Medical Advice</h2>
              <p className="leading-relaxed mb-4 font-bold text-secondary-fixed uppercase tracking-wider text-sm">
                CRITICAL NOTICE: AYKA is NOT a medical service provider, hospital, clinic, or healthcare institution.
              </p>
              <p className="leading-relaxed mb-4">
                Nothing on the AYKA platform — including but not limited to content, doctor profiles, service listings, consultation summaries, or any information shared through the platform — constitutes, or should be construed as, medical advice, diagnosis, treatment recommendation, or a substitute for professional medical consultation.
              </p>
              <p className="leading-relaxed">
                Users must consult a qualified and licensed healthcare professional for any medical concerns. AYKA expressly disclaims all liability arising from reliance on any information obtained through the platform for medical decision-making.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">3. Medical Emergency Notice</h2>
              <p className="leading-relaxed mb-4 font-bold text-secondary-fixed uppercase tracking-wider text-sm">
                AYKA IS NOT AN EMERGENCY SERVICE.
              </p>
              <p className="leading-relaxed mb-4">
                In the event of a medical emergency, life-threatening condition, or any situation requiring immediate medical attention, Users must immediately contact:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4 font-semibold">
                <li>National Emergency Number: Dial 112</li>
                <li>Ambulance: Dial 108</li>
                <li>Your nearest hospital emergency department</li>
              </ul>
              <p className="leading-relaxed">
                Do not attempt to use the AYKA platform for emergency medical situations. AYKA shall bear no liability for any harm, injury, or loss resulting from the use of the platform instead of emergency services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Aggregator Liability Disclaimer</h2>
              <p className="leading-relaxed mb-4">
                AYKA operates strictly as a technology aggregator and intermediary platform under the provisions of the Information Technology Act, 2000, and the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021. As an aggregator:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>AYKA does not initiate, select, modify, or control the content of transactions between Users and Service Providers.</li>
                <li>AYKA does not verify, guarantee, warrant, or endorse the accuracy, completeness, quality, or legality of any service, product, profile, listing, or information provided by any Service Provider.</li>
                <li>AYKA is not a party to any contract, agreement, or transaction entered into between Users and Service Providers.</li>
                <li>All disputes regarding the quality, delivery, outcome, or any aspect of services rendered are strictly between the User and the respective Service Provider. AYKA bears no liability in such disputes.</li>
                <li>AYKA is not responsible for any false commitments, misrepresentation, fraud, negligence, malpractice, or misconduct by any Service Provider or User on the platform.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">5. &quot;As Is&quot; and &quot;As Available&quot; Disclaimer</h2>
              <p className="leading-relaxed mb-4">
                The AYKA platform, its content, features, and all services accessible through it are provided strictly on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis, without any warranty of any kind, either express or implied, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Implied warranties of merchantability or fitness for a particular purpose</li>
                <li>Warranties of non-infringement of third-party rights</li>
                <li>Warranties regarding security, accuracy, reliability, completeness, or uninterrupted availability of the platform</li>
              </ul>
              <p className="leading-relaxed font-semibold">
                AYKA expressly disclaims all such warranties to the fullest extent permitted by applicable Indian law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">6. Limitation of Liability</h2>
              <p className="leading-relaxed mb-4">
                To the maximum extent permitted by applicable law, AYKA, its directors, officers, employees, affiliates, agents, and licensors shall not be liable for any direct, indirect, incidental, special, consequential, exemplary, or punitive damages arising from:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Your use of, or inability to use, the AYKA platform or its services</li>
                <li>Any service rendered or not rendered by any Service Provider through the platform</li>
                <li>Any unauthorized access to, or alteration of, your transmissions or data</li>
                <li>Any errors, omissions, interruptions, or defects in the platform&apos;s content or services</li>
                <li>Any loss of data, revenue, profits, business, or goodwill</li>
                <li>Any conduct or content of any third party on the platform</li>
              </ul>
              <p className="leading-relaxed">
                This limitation applies regardless of the theory of liability (contract, tort, negligence, or otherwise) and even if AYKA has been advised of the possibility of such damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">7. Third-Party Content and Links</h2>
              <p className="leading-relaxed">
                The AYKA platform may contain links to, or integrations with, third-party websites, applications, or services. AYKA does not control, endorse, or assume responsibility for any third-party content, privacy practices, or services. Users access such third-party resources entirely at their own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">8. No Guarantee of Service Availability</h2>
              <p className="leading-relaxed">
                AYKA does not guarantee continuous, uninterrupted, or error-free operation of the platform. The platform may be temporarily unavailable due to maintenance, technical issues, or circumstances beyond AYKA&apos;s reasonable control. AYKA shall not be liable for any losses arising from such unavailability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">9. Changes to This Disclaimer</h2>
              <p className="leading-relaxed">
                AYKA reserves the right to modify, update, or replace this Disclaimer at any time without prior individual notice. The updated Disclaimer will be posted on the AYKA platform and shall be effective from the date of posting. Continued use of the platform after any such update constitutes your acceptance of the revised Disclaimer. Users are responsible for periodically reviewing all legal documents on the AYKA platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">10. Governing Law</h2>
              <p className="leading-relaxed">
                This Disclaimer is governed by and shall be construed in accordance with the laws of India. Any disputes arising in connection with this Disclaimer shall be subject to the exclusive jurisdiction of the courts of Saharanpur, Uttar Pradesh, India.
              </p>
            </section>

            <div className="pt-8 border-t border-outline-variant/30 text-center text-sm font-bold text-primary">
              <p>For any queries regarding this Disclaimer, please contact us at: support@aykacare.in</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
