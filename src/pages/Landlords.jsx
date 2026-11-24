import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Shield, Users, Home, Key, Building2, AlertCircle, Mail, Phone, MapPin, Bed, Tag, AlertTriangle } from 'lucide-react';
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
import { propertyTypes } from '../config/siteConfig';

const landlordFAQs = getFAQsByCategory('Landlord Solutions');

const initialValues = {
  fullName: '',
  email: '',
  phone: '',
  propertyAddress: '',
  propertyType: '',
  numberOfProperties: '',
  currentStatus: '',
  additionalInfo: '',
  consent: false
};

const validationRules = {
  fullName: { required: true, requiredMessage: 'Full name is required' },
  email: { required: true, requiredMessage: 'Email is required', email: true, emailMessage: 'Please enter a valid email address' },
  phone: { required: true, requiredMessage: 'Phone number is required' },
  propertyAddress: { required: true, requiredMessage: 'Property address is required' },
  propertyType: { required: true, requiredMessage: 'Please select a property type' },
  numberOfProperties: { required: true, requiredMessage: 'Number of properties is required' },
  currentStatus: { required: true, requiredMessage: 'Please select current status' },
  consent: { required: true, requiredMessage: 'You must agree to proceed' }
};

const benefits = [
  { icon: Users, title: 'Quality Tenant Matching', description: 'We connect you with pre-qualified tenants who match your property and requirements.' },
  { icon: Shield, title: 'Compliance Support', description: 'Guidance on landlord obligations, safety certificates, and regulatory requirements.' },
  { icon: Home, title: 'Market Rent Assessment', description: 'Accurate rental valuations based on current local market data and comparable properties.' },
  { icon: Key, title: 'Efficient Void Management', description: 'Quick turnaround between tenancies to minimise loss of rental income.' }
];

const propertyTypesSupported = [
  'Single Family Homes',
  'Apartments & Flats',
  'Houses in Multiple Occupation (HMO)',
  'Student Accommodation',
  'Professional Lets',
  'Corporate Lets'
];

const processSteps = [
  { number: '1', title: 'Property Assessment', description: 'We assess your property and provide a rental valuation with market insights.' },
  { number: '2', title: 'Tenant Sourcing', description: 'We market your property to our network of registered tenants and applicants.' },
  { number: '3', title: 'Referencing & Checks', description: 'Comprehensive tenant referencing including credit, employment, and landlord references.' },
  { number: '4', title: 'Tenancy Setup', description: 'We facilitate the tenancy agreement, deposit protection, and compliance documentation.' },
  { number: '5', title: 'Ongoing Support', description: 'Available for renewal negotiations, rent reviews, and tenancy management queries.' }
];

const currentStatusOptions = [
  { value: 'vacant', label: 'Vacant - Ready to Let' },
  { value: 'tenanted', label: 'Currently Tenanted' },
  { value: 'needs_work', label: 'Needs Refurbishment' },
  { value: 'planning', label: 'Planning to Let in Future' }
];

export default function Landlords() {
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
        title="Landlord Solutions"
        subtitle="Whether you have one property or a portfolio, we help landlords find quality tenants and navigate the letting process with confidence."
        ctaPrimary={{ label: 'Submit Property Details', href: '#enquiry-form' }}
        ctaSecondary={{ label: 'View Tenant Requirements', href: '/buy-property' }}
        backgroundImage="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80"
      />

      <section className="section container" aria-labelledby="intro-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="intro-heading" className="heading-section mb-4">Supporting Landlords at Every Stage</h2>
            <p className="text-lead">
              Redbricks connects landlords with prospective tenants and provides support throughout the letting process.
              From initial valuation to tenancy setup, we're here to make letting your property straightforward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                  <benefit.icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{benefit.title}</h3>
                  <p className="text-text-muted">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="heading-card text-primary mb-6">Property Types We Support</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {propertyTypesSupported.map((type, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-surface rounded-lg border border-border">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0" aria-hidden="true" />
                  <span className="text-text">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-background container" aria-labelledby="process-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="process-heading" className="heading-section mb-4">How the Letting Process Works</h2>
            <p className="text-lead">A structured approach to finding the right tenant for your property.</p>
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

      <section className="section container" aria-labelledby="guaranteed-rent-heading">
        <div className="max-w-3xl mx-auto">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <AlertTriangle className="w-5 h-5 text-amber-600" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-amber-900 mb-2">Important: Guaranteed Rent Schemes</h3>
                <p className="text-amber-800">
                  Any guaranteed rent or rent guarantee schemes mentioned are <strong>subject to specific contractual terms, eligibility criteria, and availability</strong>.
                  Redbricks does not directly offer guaranteed rent schemes. Any such arrangements would be with third-party providers and subject to their terms and conditions.
                  Please speak with our team for current options and full details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-background container" aria-labelledby="enquiry-form-heading" id="enquiry-form">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="enquiry-form-heading" className="heading-section mb-4">Landlord Enquiry Form</h2>
            <p className="text-lead">Tell us about your property and we'll be in touch to discuss how we can help.</p>
          </div>

          {submitStatus === 'success' && (
            <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-xl" role="alert">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-green-800">Enquiry Submitted</h3>
                  <p className="text-green-700">Thank you for your enquiry. Our lettings team will review your property details and contact you within 1-2 business days.</p>
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
                  <h3 className="font-semibold text-red-800">Submission Failed</h3>
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
              label="Property Address"
              name="propertyAddress"
              type="text"
              placeholder="123 Property Street, London, SW1A 1AA"
              value={values.propertyAddress}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.propertyAddress}
              touched={touched.propertyAddress}
              required
            />

            <div className="grid md:grid-cols-3 gap-6">
              <Select
                label="Property Type"
                name="propertyType"
                placeholder="Select property type"
                options={propertyTypes.map(type => ({ value: type, label: type }))}
                value={values.propertyType}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.propertyType}
                touched={touched.propertyType}
                required
              />
              <FormField
                label="Number of Properties"
                name="numberOfProperties"
                type="number"
                placeholder="1"
                value={values.numberOfProperties}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.numberOfProperties}
                touched={touched.numberOfProperties}
                required
                min="1"
              />
              <Select
                label="Current Property Status"
                name="currentStatus"
                placeholder="Select status"
                options={currentStatusOptions}
                value={values.currentStatus}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.currentStatus}
                touched={touched.currentStatus}
                required
              />
            </div>

            <FormField
              label="Additional Information"
              name="additionalInfo"
              type="text"
              placeholder="Current rent, tenancy details, specific requirements, etc."
              value={values.additionalInfo}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.additionalInfo}
              touched={touched.additionalInfo}
            />

            <Checkbox
              label="I agree to the Privacy Policy and consent to Redbricks contacting me regarding my landlord enquiry."
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
                Submit Enquiry
              </Button>
              <p className="text-center text-sm text-text-light mt-4">
                By submitting, you agree to our <Link to="/privacy-policy" className="underline hover:text-primary">Privacy Policy</Link> and <Link to="/terms-and-conditions" className="underline hover:text-primary">Terms & Conditions</Link>.
              </p>
            </div>
          </form>
        </div>
      </section>

      <section className="section container" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="faq-heading" className="heading-section mb-4">Landlord FAQs</h2>
            <p className="text-lead">Common questions from landlords using our services.</p>
          </div>
          <FAQAccordion faqs={landlordFAQs} />
        </div>
      </section>

      <CTASection
        title="Ready to Let Your Property?"
        subtitle="Submit your property details and we'll start finding the right tenant for you."
        ctaPrimary={{ label: 'Submit Property Details', href: '#enquiry-form' }}
        ctaSecondary={{ label: 'Contact Us', href: '/contact' }}
        variant="primary"
      />
    </>
  );
}