import { Link } from 'react-router-dom';
import { ArrowRight, Check, Users, Lightbulb, Target, Home as HomeIcon, Building2, PiggyBank, Key, Clock } from 'lucide-react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import Button from '../components/Button';
import FormField from '../components/FormField';
import Checkbox from '../components/Checkbox';
import { useForm } from '../hooks/useForm';
import { sendToFormSubmit } from '../services/formspreeService';
import { getFAQsByCategory } from '../data/faqs';

const services = [
  {
    icon: HomeIcon,
    title: 'Sell Your Property',
    description: 'Get a fair cash offer within 24 hours. No fees, no chains, complete in 14-28 days.',
    href: '/sell-property',
    cta: 'Get Your Offer'
  },
  {
    icon: Key,
    title: 'Buy A Property',
    description: 'Access off-market and discounted properties. Join our Early Bird list for first look.',
    href: '/buy-property',
    cta: 'View Properties'
  },
  {
    icon: PiggyBank,
    title: 'Property Investment',
    description: 'Join 1000+ investors. Below-market deals with 10-15% yields in North East & Midlands.',
    href: '/investment-opportunities',
    cta: 'See Opportunities'
  }
];

const steps = [
  {
    number: '01',
    title: 'Talk To Us',
    description: 'Tell us about your property goals. Whether you\'re selling, buying, or investing, we listen first.'
  },
  {
    number: '02',
    title: 'Get Your Offer',
    description: 'We assess and present a fair offer or matching properties within 24-48 hours.'
  },
  {
    number: '03',
    title: 'Complete Fast',
    description: 'We handle everything. Typical completion in 14-28 days, or on your timeline.'
  }
];

const contactFormInitial = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  consent: false
};

const contactValidation = {
  firstName: { required: true, requiredMessage: 'First name is required' },
  lastName: { required: true, requiredMessage: 'Last name is required' },
  email: { required: true, requiredMessage: 'Email is required', email: true, emailMessage: 'Valid email required' },
  phone: { required: true, requiredMessage: 'Phone is required' },
  consent: { required: true, requiredMessage: 'You must agree' }
};

const faqs = [
  ...getFAQsByCategory('Selling a Property').slice(0, 2),
  ...getFAQsByCategory('Buying a Property').slice(0, 2),
  ...getFAQsByCategory('Property Investment').slice(0, 2)
];

export default function Home() {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    submitStatus,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm
  } = useForm(contactFormInitial, contactValidation);

  const onSubmit = async (formData) => {
    const payload = {
      ...formData,
      consent: formData.consent ? 'Yes' : 'No',
      _subject: 'Redbricks Contact Form Submission',
      _template: 'table'
    };

    try {
      await sendToFormSubmit(payload);
      return true;
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <Hero
        title="Unlocking Property Opportunities - Sell Faster, Buy Smarter with RedBricks"
        subtitle="We connect property sellers with buyers through smart sourcing and open doors to exceptional residential and investment opportunities across the UK."
        backgroundImage="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&q=80"
        ctaPrimary={{ label: 'Sell Your Property', href: '/sell-property' }}
        ctaSecondary={{ label: 'Buy A Property', href: '/buy-property' }}
        ctaTertiary={{ label: 'Explore Investment Opportunities', href: '/investment-opportunities' }}
      />

      <section id="contact-form" className="section bg-primary/5 container" aria-labelledby="contact-heading">
        <div className="max-w-3xl mx-auto">
          <div className="bg-surface rounded-2xl p-6 md:p-8 shadow-lg border border-border">
            <div className="text-center mb-6">
              <h2 id="contact-heading" className="heading-section mb-2">Selling or Buying?</h2>
              <p className="text-text-muted">Get in touch through the form below. We're here to help</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  label="First Name"
                  name="firstName"
                  type="text"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.firstName && errors.firstName}
                  placeholder="John"
                  required
                />
                <FormField
                  label="Last Name"
                  name="lastName"
                  type="text"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.lastName && errors.lastName}
                  placeholder="Smith"
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  label="Email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && errors.email}
                  placeholder="john@email.com"
                  required
                />
                <FormField
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.phone && errors.phone}
                  placeholder="07xxx xxxxxx"
                  required
                />
              </div>
              <Checkbox
                name="consent"
                label="I agree to be contacted about my enquiry and accept the Privacy Policy"
                checked={values.consent}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.consent && errors.consent}
                required
              />
              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
              {submitStatus === 'success' && (
                <p className="text-sm text-center text-green-600 mt-2">
                  Thank you! Your message has been sent successfully. We'll be in touch soon.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-sm text-center text-red-600 mt-2">
                  Something went wrong. Please try again or call us directly.
                </p>
              )}
              <p className="text-xs text-center text-text-muted">
                By submitting, you agree to our <Link to="/privacy" className="underline hover:text-primary">Privacy Policy</Link> and <Link to="/terms" className="underline hover:text-primary">Terms & Conditions</Link>.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="section bg-background container" aria-labelledby="how-it-works-heading">
        <div className="text-center mb-16">
          <h2 id="how-it-works-heading" className="heading-section mb-4">How RedBricks Works</h2>
          <p className="text-lead">Three simple steps to sell, buy, or invest with confidence.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative p-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary font-bold text-2xl">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{step.title}</h3>
              <p className="text-text-muted">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 right-0 w-full h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="section container" aria-labelledby="services-heading">
        <div className="text-center mb-16">
          <h2 id="services-heading" className="heading-section mb-4">How Can We Help You?</h2>
          <p className="text-lead">Choose the path that matches your property goals.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      <CTASection
        title="Are You an Investor Looking for Discounted Deals?"
        subtitle="Join our Early Bird list for first access to below-market investment properties with 10-15% yields."
        ctaPrimary={{ label: 'Register Free as Investor', href: '/investors' }}
        ctaSecondary={{ label: 'View Current Deals', href: '/investment-opportunities' }}
        variant="primary"
      />

      <section className="section bg-background container" aria-labelledby="why-choose-heading">
        <div className="text-center mb-16">
          <h2 id="why-choose-heading" className="heading-section mb-4">Why Choose RedBricks?</h2>
          <p className="text-lead">We're not estate agents. We're property people who deliver results.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="text-center p-6">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
              <Clock className="w-7 h-7" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">Fast Completion</h3>
            <p className="text-text-muted">Typically 14-28 days. We work to your timeline, not ours.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
              <Users className="w-7 h-7" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">1000+ Investors</h3>
            <p className="text-text-muted">Ready buyers for every property type. Your sale is our priority.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
              <Lightbulb className="w-7 h-7" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">Any Condition</h3>
            <p className="text-text-muted">We buy probate, renovation, tenanted, problem properties. As-is.</p>
          </div>
        </div>
      </section>

      <section className="section container" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="faq-heading" className="heading-section mb-4">Common Questions</h2>
            <p className="text-lead">Quick answers about how we work.</p>
          </div>
          <FAQAccordion faqs={faqs} />
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
        title="Ready to Move Forward?"
        subtitle="Whether selling, buying, or investing — we're here to help. No pressure, just honest advice."
        ctaPrimary={{ label: 'Get My Cash Offer', href: '/sell-property' }}
        ctaSecondary={{ label: 'Call 0161 531 7013', href: 'tel:01615317013' }}
        variant="secondary"
      />
    </>
  );
}