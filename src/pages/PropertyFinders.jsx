import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Shield, Users, Home, Target, Lightbulb, AlertCircle, Search, PiggyBank, Building2, Handshake } from 'lucide-react';
import Hero from '../components/Hero';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import Button from '../components/Button';
import FormField from '../components/FormField';
import Select from '../components/Select'
import Checkbox from '../components/Checkbox';
import { useForm } from '../hooks/useForm';
import { getFAQsByCategory } from '../data/faqs';

const finderFAQs = getFAQsByCategory('Property Finders');

const initialValues = {
  fullName: '',
  email: '',
  phone: '',
  location: '',
  experience: '',
  additionalInfo: '',
  consent: false
};

const validationRules = {
  fullName: { required: true, requiredMessage: 'Full name is required' },
  email: { required: true, requiredMessage: 'Email is required', email: true, emailMessage: 'Please enter a valid email address' },
  phone: { required: true, requiredMessage: 'Phone number is required' },
  location: { required: true, requiredMessage: 'Location is required' },
  experience: { required: true, requiredMessage: 'Please select your experience level' },
  consent: { required: true, requiredMessage: 'You must agree to proceed' }
};

const whatIsFinder = [
  { icon: Search, title: 'Source Property Opportunities', description: 'Identify potential investment properties, motivated sellers, or development opportunities in your area.' },
  { icon: Handshake, title: 'Refer to Redbricks', description: 'Submit the opportunity details through our Property Finder portal for our acquisitions team to review.' },
  { icon: PiggyBank, title: 'Earn Referral Fees', description: 'If the property leads to a successful transaction, you may receive a referral fee subject to our programme terms.' }
];

const howItWorks = [
  { number: '1', title: 'Register as a Finder', description: 'Complete our registration form with your details and areas of operation.' },
  { number: '2', title: 'Receive Guidance', description: 'Access our Property Finder guide covering what makes a good opportunity and how to submit referrals.' },
  { number: '3', title: 'Source Opportunities', description: 'Use your local knowledge, network, and research to identify potential property deals.' },
  { number: '4', title: 'Submit Referrals', description: 'Submit property details through our secure portal. Our team reviews every submission.' },
  { number: '5', title: 'Earn on Success', description: 'If a referred property completes, you receive a referral fee as per our programme terms.' }
];

const goodOpportunity = [
  'Motivated sellers (probate, divorce, relocation, financial pressure)',
  'Properties needing renovation with clear value-add potential',
  'Landlords looking to exit their portfolio',
  'Development sites with planning permission or potential',
  'Commercial properties suitable for residential conversion',
  'Auction properties with strong fundamentals',
  'Off-market opportunities through personal networks'
];

const benefits = [
  { icon: Shield, title: 'No Upfront Costs', description: 'Free to join. No subscription fees or hidden charges.' },
  { icon: Users, title: 'Flexible Commitment', description: 'Work at your own pace. No minimum referral quotas or exclusivity requirements.' },
  { icon: Lightbulb, title: 'Training & Support', description: 'Access to our Property Finder guide, market insights, and dedicated support.' },
  { icon: Target, title: 'Transparent Process', description: 'Clear referral terms, tracking, and payment structure. You always know where you stand.' },
  { icon: Home, title: 'Local Knowledge Valued', description: 'Your area expertise is exactly what we need. No prior property experience required.' },
  { icon: PiggyBank, title: 'Additional Income Stream', description: 'Earn referral fees alongside your current work or business.' }
];

const experienceLevels = [
  { value: 'none', label: 'No Experience - New to Property Finding' },
  { value: 'some', label: 'Some Experience - Found Deals Before' },
  { value: 'experienced', label: 'Experienced - Regular Property Sourcer' },
  { value: 'professional', label: 'Professional - Full-Time Property Professional' }
];

export default function PropertyFinders() {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    submitStatus,
    handleChange,
    handleBlur,
    handleSubmit
  } = useForm(initialValues, validationRules);

  const onSubmit = async (formData) => {
    console.log('Property Finder registration submitted:', formData);
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  return (
    <>
      <Hero
        title="Property Finder Programme"
        subtitle="Earn referral fees by introducing property opportunities to Redbricks. Use your local knowledge and network to source deals — we handle the rest."
        ctaPrimary={{ label: 'Join as a Property Finder', href: '#register-form' }}
        ctaSecondary={{ label: 'Learn More About the Programme', href: '#how-it-works' }}
        backgroundImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
      />

      <section className="section container" aria-labelledby="what-is-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="what-is-heading" className="heading-section mb-4">What is a Property Finder?</h2>
            <p className="text-lead">
              A Property Finder (also known as a property sourcer or deal sourcer) identifies property opportunities
              and refers them to investment companies like Redbricks. When a referred property leads to a successful
              transaction, the finder receives a referral fee.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {whatIsFinder.map((item, index) => (
              <div key={index} className="text-center p-6 bg-surface rounded-xl border border-border">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                  <item.icon className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-text-muted">{item.description}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="heading-card text-primary mb-6">What Makes a Good Property Opportunity?</h3>
            <p className="text-text-muted mb-6">We look for properties with clear investment potential. Here are typical examples:</p>
            <ul className="space-y-3">
              {goodOpportunity.map((item, index) => (
                <li key={index} className="flex items-start gap-3 p-4 bg-surface rounded-lg border border-border">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-background container" id="how-it-works" aria-labelledby="how-it-works-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="how-it-works-heading" className="heading-section mb-4">How the Programme Works</h2>
            <p className="text-lead">A simple, transparent process from registration to referral fees.</p>
          </div>
          <div className="space-y-6">
            {howItWorks.map((step, index) => (
              <div key={index} className="flex gap-4 p-6 bg-surface rounded-xl border border-border">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-surface font-bold">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-1">{step.title}</h3>
                  <p className="text-text-muted">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container" aria-labelledby="benefits-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="benefits-heading" className="heading-section mb-4">Benefits of Joining</h2>
            <p className="text-lead">Why property finders choose to work with Redbricks.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 bg-surface rounded-xl border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <benefit.icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{benefit.title}</h3>
                <p className="text-text-muted">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-background container" aria-labelledby="earnings-notice-heading">
        <div className="max-w-3xl mx-auto">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <AlertTriangle className="w-5 h-5 text-amber-600" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-amber-900 mb-2">Important: Referral Fees & Earnings</h3>
                <p className="text-amber-800">
                  <strong>Redbricks does not promise or guarantee specific earnings, commissions, or referral fees.</strong>
                  Any referral payment is subject to our Property Finder programme terms and conditions, successful completion
                  of the transaction, and compliance with all regulatory requirements. Referral fees vary depending on the
                  property type, transaction value, and specific terms agreed. This is not an offer of employment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section container" aria-labelledby="register-form-heading" id="register-form">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="register-form-heading" className="heading-section mb-4">Join as a Property Finder</h2>
            <p className="text-lead">Register your interest and we'll send you our Property Finder guide and next steps.</p>
          </div>

          {submitStatus === 'success' && (
            <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-xl" role="alert">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-green-800">Registration Successful</h3>
                  <p className="text-green-700">Thank you for registering. Our team will review your application and be in touch with your Property Finder welcome pack.</p>
                </div>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-8 p-6 bg-red-50 border border-red-200 rounded-xl" role="alert">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-red-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-red-800">Registration Failed</h3>
                  <p className="text-red-700">Please check the errors below and try again.</p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                label="Full Name"
                name="fullName"
                type="text"
                placeholder="John Smith"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.fullName}
                touched={touched.fullName}
                required
              />
              <FormField
                label="Email Address"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email}
                touched={touched.email}
                required
              />
            </div>

            <FormField
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="+44 20 7123 4567"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.phone}
              touched={touched.phone}
              required
            />

            <FormField
              label="Your Location / Area of Operation"
              name="location"
              type="text"
              placeholder="e.g. Greater Manchester, South London, West Midlands"
              value={values.location}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.location}
              touched={touched.location}
              required
            />

            <Select
              label="Property Finding Experience"
              name="experience"
              placeholder="Select experience level"
              options={experienceLevels}
              value={values.experience}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.experience}
              touched={touched.experience}
              required
            />

            <FormField
              label="Additional Information"
              name="additionalInfo"
              type="text"
              placeholder="Your background, network, specific areas of focus, etc."
              value={values.additionalInfo}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.additionalInfo}
              touched={touched.additionalInfo}
            />

            <Checkbox
              label="I agree to the Privacy Policy and consent to Redbricks contacting me about the Property Finder programme."
              name="consent"
              value={values.consent}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.consent}
              touched={touched.consent}
              required
            />

            <div className="pt-4">
              <Button type="submit" variant="secondary" size="lg" fullWidth loading={isSubmitting} rightIcon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}>
                Join as a Property Finder
              </Button>
              <p className="text-center text-sm text-text-light mt-4">
                By registering, you agree to our <Link to="/privacy-policy" className="underline hover:text-primary">Privacy Policy</Link> and <Link to="/terms-and-conditions" className="underline hover:text-primary">Terms & Conditions</Link>.
              </p>
            </div>
          </form>
        </div>
      </section>

      <section className="section container" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="faq-heading" className="heading-section mb-4">Property Finder FAQs</h2>
            <p className="text-lead">Common questions about our Property Finder programme.</p>
          </div>
          <FAQAccordion faqs={finderFAQs} />
        </div>
      </section>

      <CTASection
        title="Ready to Start Finding Properties?"
        subtitle="Join our network of property finders and turn your local knowledge into referral income."
        ctaPrimary={{ label: 'Join as a Property Finder', href: '#register-form' }}
        variant="primary"
      />
    </>
  );
}