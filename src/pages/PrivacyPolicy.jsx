import { Link } from 'react-router-dom';
import { ArrowRight, Shield, AlertTriangle } from 'lucide-react';
import Hero from '../components/Hero';
import Button from '../components/Button';

const lastUpdated = new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });

export default function PrivacyPolicy() {
  return (
    <>
      <Hero
        title="Privacy Policy"
        subtitle={`How we collect, use, and protect your personal information. Last updated: ${lastUpdated}`}
        backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
      />

      <section className="section container" aria-labelledby="policy-heading">
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
                  It does not constitute legal advice. GDPR, PECR, and UK data protection laws require specific disclosures
                  based on your actual data processing activities. Ensure all sections accurately reflect your practices.
                </p>
              </div>
            </div>
          </div>

          <article className="prose text-text-muted max-w-none space-y-10">
            <section>
              <h2 className="heading-section text-primary mb-4">1. Introduction</h2>
              <p>Redbricks ("we", "our", "us") is committed to protecting your personal information and your right to privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our
              website <strong>redbricks.co.uk</strong> (the "Site") and use our services.</p>
              <p>Please read this policy carefully. If you do not agree with the terms of this policy, please do not access the Site or use our services.</p>
            </section>

            <section>
              <h2 className="heading-section text-primary mb-4">2. Personal Data We Collect</h2>
              <p>We collect personal information that you voluntarily provide to us when:</p>
              <ul className="list-disc list-inside space-y-2 my-4">
                <li>Registering as a buyer, investor, landlord, or property finder</li>
                <li>Submitting a property for sale or let</li>
                <li>Contacting us through our contact forms</li>
                <li>Subscribing to our newsletter or property alerts</li>
                <li>Participating in surveys or feedback requests</li>
              </ul>
              <p>The categories of personal data we may collect include:</p>
              <ul className="list-disc list-inside space-y-2 my-4">
                <li><strong>Identity Data:</strong> Name, title, date of birth</li>
                <li><strong>Contact Data:</strong> Email address, telephone numbers, postal address</li>
                <li><strong>Property Data:</strong> Property address, type, bedrooms, condition, price expectations, images</li>
                <li><strong>Financial Data:</strong> Budget, investment criteria, expected prices, rental income (where provided)</li>
                <li><strong>Profile Data:</strong> Preferences, interests, investment strategy, experience level</li>
                <li><strong>Technical Data:</strong> IP address, browser type, operating system, device information, usage data</li>
                <li><strong>Marketing Data:</strong> Preferences in receiving marketing, communication preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-section text-primary mb-4">3. How We Use Your Data</h2>
              <p>We use your personal data for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 my-4">
                <li><strong>Service Provision:</strong> To match property owners with buyers/investors, facilitate introductions, and provide property sourcing services</li>
                <li><strong>Communication:</strong> To respond to enquiries, send property matches, updates, and service-related communications</li>
                <li><strong>Marketing:</strong> With your consent, to send marketing communications about property opportunities and our services</li>
                <li><strong>Legal Compliance:</strong> To comply with anti-money laundering (AML) regulations, Know Your Customer (KYC) requirements, and other legal obligations</li>
                <li><strong>Improvement:</strong> To analyse usage, improve our website, services, and user experience</li>
                <li><strong>Security:</strong> To protect our Site, prevent fraud, and ensure network security</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-section text-primary mb-4">4. Lawful Basis for Processing</h2>
              <p>Under UK GDPR, we rely on the following lawful bases:</p>
              <ul className="list-disc list-inside space-y-2 my-4">
                <li><strong>Contract:</strong> Processing necessary for the performance of a contract or to take steps at your request before entering a contract</li>
                <li><strong>Legitimate Interests:</strong> Our legitimate business interests in providing property sourcing services, improving our offerings, and marketing (where not overridden by your rights)</li>
                <li><strong>Consent:</strong> Where you have given clear consent for specific purposes (e.g., marketing communications)</li>
                <li><strong>Legal Obligation:</strong> Compliance with AML, KYC, and other regulatory requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-section text-primary mb-4">5. Data Sharing</h2>
              <p>We may share your personal data with:</p>
              <ul className="list-disc list-inside space-y-2 my-4">
                <li><strong>Property Buyers/Investors:</strong> When you submit a property, relevant details are shared with potential buyers/investors in our network</li>
                <li><strong>Property Owners:</strong> When you register as a buyer/investor, your criteria may be shared with property owners</li>
                <li><strong>Service Providers:</strong> Third parties who provide services on our behalf (IT, CRM, email, analytics, legal)</li>
                <li><strong>Professional Advisers:</strong> Solicitors, surveyors, mortgage brokers where you request introductions</li>
                <li><strong>Regulatory Bodies:</strong> Where required by law (e.g., HMRC, National Crime Agency for AML)</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
              <p>We do not sell your personal data to third parties.</p>
            </section>

            <section>
              <h2 className="heading-section text-primary mb-4">6. Data Storage and Security</h2>
              <p>We implement appropriate technical and organisational measures to protect your data:</p>
              <ul className="list-disc list-inside space-y-2 my-4">
                <li>Data is stored on secure servers within the UK/EEA</li>
                <li>Encryption in transit (TLS) and at rest where appropriate</li>
                <li>Access controls and authentication for staff</li>
                <li>Regular security assessments and staff training</li>
                <li>Data retention: We keep data only as long as necessary for the purposes collected, or as required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-section text-primary mb-4">7. International Transfers</h2>
              <p>Your data is primarily processed within the UK. If we transfer data outside the UK/EEA, we ensure adequate safeguards
              are in place, such as Standard Contractual Clauses or adequacy decisions.</p>
            </section>

            <section>
              <h2 className="heading-section text-primary mb-4">8. Your Rights (UK GDPR)</h2>
              <p>You have the following rights regarding your personal data:</p>
              <ul className="list-disc list-inside space-y-2 my-4">
                <li><strong>Right to be Informed:</strong> This policy fulfils that obligation</li>
                <li><strong>Right of Access:</strong> Request a copy of your personal data</li>
                <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</li>
                <li><strong>Right to Erasure:</strong> Request deletion (subject to legal obligations)</li>
                <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
                <li><strong>Right to Data Portability:</strong> Receive your data in a structured, commonly used format</li>
                <li><strong>Right to Object:</strong> Object to processing based on legitimate interests or direct marketing</li>
                <li><strong>Rights related to Automated Decision Making:</strong> Not currently applicable</li>
              </ul>
              <p>To exercise these rights, contact us at <a href="mailto:privacy@redbricks.co.uk" className="underline hover:text-primary">privacy@redbricks.co.uk</a>. We respond within one month.</p>
            </section>

            <section>
              <h2 className="heading-section text-primary mb-4">9. Cookies and Tracking</h2>
              <p>Our Site uses cookies and similar technologies:</p>
              <ul className="list-disc list-inside space-y-2 my-4">
                <li><strong>Essential Cookies:</strong> Required for site functionality (session, security)</li>
                <li><strong>Analytics Cookies:</strong> Help us understand site usage (Google Analytics, with IP anonymisation)</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                <li><strong>Marketing Cookies:</strong> For targeted advertising (only with consent)</li>
              </ul>
              <p>You can manage cookie preferences through our cookie banner or your browser settings. Disabling essential cookies may affect site functionality.</p>
            </section>

            <section>
              <h2 className="heading-section text-primary mb-4">10. Third-Party Links</h2>
              <p>Our Site may contain links to third-party websites (property portals, mortgage brokers, legal services).
              We are not responsible for their privacy practices. We encourage you to read their privacy policies.</p>
            </section>

            <section>
              <h2 className="heading-section text-primary mb-4">11. Children's Privacy</h2>
              <p>Our services are not directed to individuals under 18. We do not knowingly collect data from children.
              If you believe we have collected data from a minor, contact us immediately.</p>
            </section>

            <section>
              <h2 className="heading-section text-primary mb-4">12. Changes to This Policy</h2>
              <p>We may update this policy from time to time. The "Last Updated" date at the top indicates the latest revision.
              Material changes will be communicated via email or a prominent notice on our Site.</p>
            </section>

            <section>
              <h2 className="heading-section text-primary mb-4">13. Contact Us</h2>
              <p>If you have questions about this policy or our data practices, contact:</p>
              <address className="not-italic my-4">
                <p><strong>Data Protection Officer</strong></p>
                <p>Redbricks Property</p>
                <p>123 Property Street</p>
                <p>London EC1A 1BB</p>
                <p>United Kingdom</p>
                <p>Email: <a href="mailto:privacy@redbricks.co.uk" className="underline hover:text-primary">privacy@redbricks.co.uk</a></p>
              </address>
              <p>You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">ico.org.uk</a>.</p>
            </section>
          </article>
        </div>
      </section>
    </>
  );
}