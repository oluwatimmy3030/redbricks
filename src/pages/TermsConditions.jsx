import { Link } from 'react-router-dom';
import { ArrowRight, Shield, AlertTriangle, FileText } from 'lucide-react';
import Hero from '../components/Hero';
import Button from '../components/Button';

const lastUpdated = new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });

export default function TermsConditions() {
  return (
    <>
      <Hero
        title="Terms & Conditions"
        subtitle={`Terms of use for the Redbricks website and services. Last updated: ${lastUpdated}`}
        backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
      />

      <section className="section container" aria-labelledby="terms-heading">
        <div className="max-w-4xl mx-auto">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-12" role="alert">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <AlertTriangle className="w-5 h-5 text-amber-600" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-amber-900 mb-2">Legal Review Required</h3>
                <p className="text-amber-800">
                  <strong>This document is a template placeholder and must be reviewed by a qualified legal professional before publication.</strong>
                  It does not constitute legal advice. Terms and conditions should reflect your actual business model, regulatory obligations,
                  and risk management requirements. Ensure all sections are accurate and enforceable under UK law.
                </p>
              </div>
            </div>
          </div>

          <article className="prose text-text-muted max-w-none space-y-10">
            <section>
              <h2 className="heading-section text-primary mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using the Redbricks website (<strong>redbricks.co.uk</strong>) and our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions ("Terms") and our <a href="/privacy-policy" className="underline hover:text-primary">Privacy Policy</a>. If you do not agree, please do not use our Site or services.</p>
              <p>We reserve the right to modify these Terms at any time. Changes take effect immediately upon posting. Your continued use constitutes acceptance of the revised Terms.</p>
            </section>

            <section>
              <h2 className="heading-section text-primary mb-4">2. Description of Services</h2>
              <p>Redbricks operates as a <strong>property sourcing and investment intermediary</strong>. We connect:</p>
              <ul className="list-disc list-inside space-y-2 my-4">
                <li>Property owners with potential buyers and investors</li>
                <li>Buyers with suitable properties</li>
                <li>Investors with investment opportunities</li>
                <li>Landlords with prospective tenants</li>
                <li>Property finders with referral opportunities</li>
              </ul>
              <p><strong>We do not:</strong> buy, sell, or own properties; act as a traditional estate agent; provide legal, financial, or tax advice; guarantee property values, rental income, or investment returns; or offer regulated mortgage or financial advice.</p>
            </section>

            <section>
              <h2 className="heading-section text-primary mb-4">3. User Registrations and Enquiries</h2>
              <p>When you register or submit an enquiry, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 my-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Update your information promptly if it changes</li>
                <li>Not impersonate any person or entity or misrepresent your affiliation</li>
                <li>Use our services only for lawful purposes</li>
              </ul>
              <p>We reserve the right to refuse, suspend, or terminate any registration at our discretion.</p>
            </section>

            <section>
              <h2 className="heading-section text-primary mb-4">4. Property Information</h2>
              <p>Property details, images, prices, and descriptions on our Site are provided by property owners or sourced from third parties.
              While we endeavour to ensure accuracy, we <strong>do not guarantee</strong> the completeness, accuracy, or timeliness of any property information.</p>
              <p>All property viewings, due diligence, surveys, and legal checks are the responsibility of the interested party.
              We strongly recommend independent verification of all material facts before proceeding with any transaction.</p>
            </section>

            <section>
              <h2 className="heading-section text-primary mb-4">5. No Investment or Financial Advice</h2>
              <p><strong>Redbricks is not authorised by the Financial Conduct Authority (FCA) to provide investment advice.</strong>
              Any information on our Site or in our communications is for general informational purposes only and does not constitute
              financial, investment, legal, or tax advice.</p>
              <p>You should seek independent professional advice from qualified advisers before making any property investment decisions.
              Past performance is not indicative of future results. Property values can go down as well as up.</p>
            </section>

            <section>
              <h2 className="heading-section text-primary mb-4">6. Fees and Charges</h2>
              <p>Our fee structure varies by service and is agreed in writing before engagement. Typical arrangements include:</p>
              <ul className="list-disc list-inside space-y-2 my-4">
                <li>Introduction fees payable on successful completion</li>
                <li>Referral fees for property finders (subject to programme terms)</li>
                <li>No upfront fees for buyer/investor registration</li>
              </ul>
              <p>All fees are exclusive of VAT (where applicable) and any third-party costs (legal, survey, mortgage, stamp duty).</p>
            </section>

            <section>
              <h2 className="heading-section text-primary mb-4">7. Intellectual Property</h2>
              <p>All content on this Site (text, graphics, logos, images, software) is the property of Redbricks or its licensors
              and is protected by UK and international copyright laws. You may not reproduce, distribute, modify, or create
              derivative works without our prior written consent, except for personal, non-commercial use.</p>
            </section>

            <section>
              <h2 className="heading-section text-primary mb-4">8. User Conduct</h2>
              <p>You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 my-4">
                <li>Use the Site for any unlawful purpose</li>
                <li>Interfere with or disrupt the Site or servers</li>
                <li>Attempt to gain unauthorised access to any systems or data</li>
                <li>Use automated tools to scrape, crawl, or extract data without permission</li>
                <li>Transmit viruses, malware, or harmful code</li>
                <li>Defame, harass, or threaten others</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-section text-primary mb-4">9. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law:</p>
              <ul className="list-disc list-inside space-y-2 my-4">
                <li>Redbricks is not liable for any indirect, incidental, special, consequential, or punitive damages</li>
                <li>Our total liability for any claim shall not exceed the fees paid by you in the 12 months preceding the claim</li>
                <li>We are not liable for any property decisions made based on information from our Site</li>
                <li>We are not liable for actions of third parties (property owners, buyers, investors, service providers)</li>
              </ul>
              <p>Nothing in these Terms excludes liability for death or personal injury caused by negligence, fraud, or any liability that cannot be excluded under UK law.</p>
            </section>

            <section>
              <h2 className="heading-section text-primary mb-4">10. Indemnification</h2>
              <p>You agree to indemnify and hold Redbricks harmless from any claims, losses, damages, liabilities, and expenses
              (including legal fees) arising from your use of the Site, breach of these Terms, or violation of any third-party rights.</p>
            </section>

            <section>
              <h2 className="heading-section text-primary mb-4">11. Third-Party Services</h2>
              <p>We may introduce you to third-party service providers (solicitors, surveyors, mortgage brokers, contractors).
              These introductions are for convenience only and do not constitute endorsement. Any engagement is directly between you
              and the provider. We accept no liability for their services.</p>
            </section>

            <section>
              <h2 className="heading-section text-primary mb-4">12. Termination</h2>
              <p>We may suspend or terminate your access to our services at any time, with or without cause, including for breach of these Terms.
              Upon termination, your right to use the Site ceases immediately. Surviving provisions include liability limitations,
              indemnification, intellectual property, and governing law.</p>
            </section>

            <section>
              <h2 className="heading-section text-primary mb-4">13. Governing Law and Jurisdiction</h2>
              <p>These Terms are governed by the laws of <strong>England and Wales</strong>. Any disputes shall be subject to the
              exclusive jurisdiction of the courts of England and Wales, except where consumer protection laws provide otherwise.</p>
            </section>

            <section>
              <h2 className="heading-section text-primary mb-4">14. General Provisions</h2>
              <ul className="list-disc list-inside space-y-2 my-4">
                <li><strong>Entire Agreement:</strong> These Terms, together with our Privacy Policy, constitute the entire agreement between you and Redbricks.</li>
                <li><strong>Severability:</strong> If any provision is found unenforceable, the remaining provisions continue in effect.</li>
                <li><strong>Waiver:</strong> Failure to enforce a right does not constitute a waiver.</li>
                <li><strong>Assignment:</strong> We may assign our rights and obligations. You may not assign without our consent.</li>
                <li><strong>Force Majeure:</strong> We are not liable for delays due to events beyond our reasonable control.</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-section text-primary mb-4">15. Contact Information</h2>
              <p>For questions about these Terms, contact:</p>
              <address className="not-italic my-4">
                <p>Redbricks Property</p>
                <p>123 Property Street</p>
                <p>London EC1A 1BB</p>
                <p>United Kingdom</p>
                <p>Email: <a href="mailto:legal@redbricks.co.uk" className="underline hover:text-primary">legal@redbricks.co.uk</a></p>
              </address>
            </section>
          </article>
        </div>
      </section>
    </>
  );
}