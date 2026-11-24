import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Shield, Users, Lightbulb, Target, TrendingUp, AlertCircle, PiggyBank, Building2, Home, Hammer } from 'lucide-react';
import Hero from '../components/Hero';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import Button from '../components/Button';
import FormField from '../components/FormField';
import Select from '../components/Select'
import Checkbox from '../components/Checkbox';
import { sendToFormspree } from '../services/formspreeService';
import { useForm } from '../hooks/useForm';
import { getFAQsByCategory } from '../data/faqs';
import { investmentStrategies } from '../config/siteConfig';

const investorFAQs = getFAQsByCategory('Property Investment').slice(0, 6);

const initialValues = {
  fullName: '',
  email: '',
  phone: '',
  preferredLocation: '',
  investmentBudget: '',
  preferredPropertyType: '',
  investmentStrategy: '',
  investmentExperience: '',
  additionalInfo: '',
  consent: false
};

const validationRules = {
  fullName: { required: true, requiredMessage: 'Full name is required' },
  email: { required: true, requiredMessage: 'Email is required', email: true, emailMessage: 'Please enter a valid email address' },
  phone: { required: true, requiredMessage: 'Phone number is required' },
  preferredLocation: { required: true, requiredMessage: 'Preferred location is required' },
  investmentBudget: { required: true, requiredMessage: 'Investment budget is required' },
  preferredPropertyType: { required: true, requiredMessage: 'Please select a property type' },
  investmentStrategy: { required: true, requiredMessage: 'Please select an investment strategy' },
  investmentExperience: { required: true, requiredMessage: 'Please select your experience level' },
  consent: { required: true, requiredMessage: 'You must agree to proceed' }
};

const whyChoose = [
  { icon: Shield, title: 'Vetted Opportunities', description: 'We pre-screen all investment opportunities and only present those meeting our quality criteria.' },
  { icon: Users, title: 'Exclusive Network', description: 'Access to off-market deals and opportunities not available on public property portals.' },
  { icon: Lightbulb, title: 'Market Intelligence', description: 'Regular insights on emerging hotspots, yield trends, and regulatory changes affecting investors.' },
  { icon: Target, title: 'Personalised Matching', description: 'We take time to understand your strategy and only send opportunities that genuinely fit.' },
  { icon: TrendingUp, title: 'Transparent Data', description: 'All available information provided upfront — yields, tenancy details, condition reports, and more.' },
  { icon: PiggyBank, title: 'Portfolio Support', description: 'Guidance on portfolio diversification, financing options, and tax-efficient structures.' }
];

const strategies = [
  { icon: Home, title: 'Buy-to-Let', description: 'Traditional rental investment with steady income and long-term capital growth potential.' },
  { icon: Hammer, title: 'Buy-to-Flip', description: 'Short-term value-add strategy through renovation and resale for capital profit.' },
  { icon: Users, title: 'HMO Investment', description: 'Higher yield multi-let properties with professional tenant management options.' },
  { icon: Building2, title: 'Commercial Property', description: 'Retail, office, and industrial units with longer leases and business tenants.' },
  { icon: PiggyBank, title: 'Discounted Properties', description: 'Below-market acquisitions offering immediate equity and strong return potential.' },
  { icon: TrendingUp, title: 'New Build & Off-Plan', description: 'Early access to development opportunities with staged payments and warranty protection.' }
];

const processSteps = [
  { number: '1', title: 'Register & Define Criteria', description: 'Complete our investor registration with your investment goals, budget, and preferences.' },
  { number: '2', title: 'Receive Tailored Opportunities', description: 'Get curated investment opportunities matching your criteria, often before public listing.' },
  { number: '3', title: 'Review & Due Diligence', description: 'Access information packs, arrange viewings, and conduct your own research with our support.' },
  { number: '4', title: 'Proceed to Completion', description: 'We facilitate introductions to sellers and connect you with recommended solicitors and surveyors.' }
];

const experienceLevels = [
  { value: 'beginner', label: 'New to Property Investment' },
  { value: 'some', label: '1-2 Properties Owned' },
  { value: 'experienced', label: '3+ Properties / Portfolio Landlord' },
  { value: 'professional', label: 'Professional Investor / Developer' }
];

export default function Investors() {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    submitStatus,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue
  } = useForm(initialValues, validationRules);

  const onSubmit = async (formData) => {
    const payload = {
      ...formData,
      consent: formData.consent ? 'Yes' : 'No'
    };

    try {
      await sendToFormspree(payload);
      return true;
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <Hero
        title="Join Our Investor Network"
        subtitle="Register free for early access to below-market investment properties. 1000+ investors trust us for 10-15% yields in North East & Midlands."
        ctaPrimary={{ label: 'Register Free as Investor', href: '#register-form' }}
        ctaSecondary={{ label: 'View Investment Opportunities', href: '/investment-opportunities' }}
        backgroundImage="https://images.unsplash.com/photo-1600585152220-90363fe4e1f5?w=1920&q=80"
      />

      <section className="section container" aria-labelledby="why-choose-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="why-choose-heading" className="heading-section mb-4">Why Invest Through Redbricks?</h2>
            <p className="text-lead">We focus on quality, transparency, and matching the right opportunities to the right investors.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((benefit, index) => (
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

      <section className="section bg-background container" aria-labelledby="strategies-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="strategies-heading" className="heading-section mb-4">Investment Strategies We Support</h2>
            <p className="text-lead">Whether you're building a rental portfolio or looking for short-term gains, we source opportunities across multiple strategies.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategies.map((strategy, index) => (
              <div key={index} className="p-6 bg-surface rounded-xl border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <strategy.icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{strategy.title}</h3>
                <p className="text-text-muted">{strategy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container" aria-labelledby="process-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="process-heading" className="heading-section mb-4">How Our Investor Sourcing Works</h2>
            <p className="text-lead">A streamlined journey from registration to completed investment.</p>
          </div>
          <div className="space-y-6">
            {processSteps.map((step, index) => (
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

      <section className="section bg-background container" aria-labelledby="register-form-heading" id="register-form">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="register-form-heading" className="heading-section mb-4">Become a Registered Investor</h2>
            <p className="text-lead">Complete the form below and our team will review your criteria and contact you with suitable opportunities.</p>
          </div>

          {submitStatus === 'success' && (
            <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-xl" role="alert">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-green-800">Registration Successful</h3>
                  <p className="text-green-700">Thank you for registering. Our acquisitions team will review your criteria and be in touch within 1-2 business days.</p>
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
              label="Preferred Investment Location(s)"
              name="preferredLocation"
              type="text"
              placeholder="e.g. Manchester, Liverpool, Leeds"
              value={values.preferredLocation}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.preferredLocation}
              touched={touched.preferredLocation}
              required
            />

            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                label="Investment Budget (£)"
                name="investmentBudget"
                type="number"
                placeholder="250000"
                value={values.investmentBudget}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.investmentBudget}
                touched={touched.investmentBudget}
                required
              />
              <Select
                label="Preferred Property Type"
                name="preferredPropertyType"
                placeholder="Select property type"
                options={[
                  { value: 'House', label: 'House' },
                  { value: 'Apartment', label: 'Apartment' },
                  { value: 'Commercial', label: 'Commercial' },
                  { value: 'Any', label: 'Any Type' }
                ]}
                value={values.preferredPropertyType}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.preferredPropertyType}
                touched={touched.preferredPropertyType}
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Select
                label="Investment Strategy"
                name="investmentStrategy"
                placeholder="Select strategy"
                options={investmentStrategies.map(s => ({ value: s, label: s }))}
                value={values.investmentStrategy}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.investmentStrategy}
                touched={touched.investmentStrategy}
                required
              />
              <Select
                label="Investment Experience"
                name="investmentExperience"
                placeholder="Select experience level"
                options={experienceLevels}
                value={values.investmentExperience}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.investmentExperience}
                touched={touched.investmentExperience}
                required
              />
            </div>

            <FormField
              label="Additional Information"
              name="additionalInfo"
              type="text"
              placeholder="Specific criteria, preferred tenants, financing preferences, etc."
              value={values.additionalInfo}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.additionalInfo}
              touched={touched.additionalInfo}
            />

            <Checkbox
              label="I agree to the Privacy Policy and consent to Redbricks contacting me about investment opportunities."
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
                Register as an Investor
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
            <h2 id="faq-heading" className="heading-section mb-4">Investor FAQs</h2>
            <p className="text-lead">Common questions from investors joining our network.</p>
          </div>
          <FAQAccordion faqs={investorFAQs} />
          <div className="text-center mt-8">
            <Link to="/faq">
              <Button variant="ghost" rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}>
                View All FAQs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Start Your Investment Journey Today"
        subtitle="Register now and let us bring the right opportunities to you."
        ctaPrimary={{ label: 'Register as an Investor', href: '#register-form' }}
        variant="primary"
      />
    </>
  );
}