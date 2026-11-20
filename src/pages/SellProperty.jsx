import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Home, Users, Shield, Clock, Mail, Phone, MapPin, Bed, Tag, Upload, AlertCircle } from 'lucide-react';
import Hero from '../components/Hero';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import Button from '../components/Button';
import FormField from '../components/FormField';
import Textarea from '../components/Textarea';
import Select from '../components/Select';
import Checkbox from '../components/Checkbox';
import FileInput from '../components/FileInput';
import { useForm } from '../hooks/useForm';
import { getFAQsByCategory } from '../data/faqs';
import { propertyTypes, propertyConditions } from '../config/siteConfig';

const sellFAQs = getFAQsByCategory('Selling a Property');

const initialValues = {
  fullName: '',
  email: '',
  phone: '',
  propertyAddress: '',
  propertyType: '',
  bedrooms: '',
  propertyCondition: '',
  expectedPrice: '',
  additionalInfo: '',
  propertyImages: null,
  consent: false
};

const validationRules = {
  fullName: { required: true, requiredMessage: 'Full name is required' },
  email: { required: true, requiredMessage: 'Email is required', email: true, emailMessage: 'Please enter a valid email address' },
  phone: { required: true, requiredMessage: 'Phone number is required' },
  propertyAddress: { required: true, requiredMessage: 'Property address is required' },
  propertyType: { required: true, requiredMessage: 'Please select a property type' },
  bedrooms: { required: true, requiredMessage: 'Number of bedrooms is required' },
  propertyCondition: { required: true, requiredMessage: 'Please select property condition' },
  expectedPrice: { required: true, requiredMessage: 'Expected price is required' },
  consent: { required: true, requiredMessage: 'You must agree to proceed' }
};

const benefits = [
  { icon: Users, title: 'Qualified Buyer Network', description: 'Access to pre-qualified buyers and investors actively looking for properties like yours.' },
  { icon: Shield, title: 'Transparent Process', description: 'Clear communication at every stage with no hidden fees or surprises.' },
  { icon: Clock, title: 'Faster Connections', description: 'Our targeted approach connects you with serious enquiries faster than traditional channels.' },
  { icon: Home, title: 'Expert Guidance', description: 'Support throughout the process from initial enquiry to successful completion.' }
];

const propertyTypesAccepted = [
  'Residential Houses (Detached, Semi-Detached, Terraced)',
  'Apartments & Flats',
  'Commercial Properties',
  'Investment Portfolios',
  'HMO Properties',
  'Development Opportunities'
];

const processSteps = [
  { number: '1', title: 'Submit Your Property', description: 'Complete our property submission form with details and photos.' },
  { number: '2', title: 'Property Assessment', description: 'Our team reviews your submission and assesses suitability for our network.' },
  { number: '3', title: 'Marketing & Matching', description: 'We present your property to relevant buyers and investors in our network.' },
  { number: '4', title: 'Viewings & Offers', description: 'We coordinate viewings and communicate offers from interested parties.' },
  { number: '5', title: 'Completion', description: 'We facilitate the connection through to a successful transaction.' }
];

export default function SellProperty() {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    submitStatus,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    setFieldValue
  } = useForm(initialValues, validationRules);

  const onSubmit = async (formData) => {
    console.log('Form submitted:', formData);
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  const handleFileChange = (name, file) => {
    setFieldValue(name, file);
  };

  return (
    <>
      <Hero
        title="Sell Your Property With Redbricks"
        subtitle="Connect with serious buyers and investors through our extensive network. We help property owners reach the right audience efficiently."
        ctaPrimary={{ label: 'Submit Your Property', href: '#submit-form' }}
        backgroundImage="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1920&q=80"
      />

      <section className="section container" aria-labelledby="how-it-works-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="how-it-works-heading" className="heading-section mb-4">How Redbricks Connects Owners With Buyers</h2>
            <p className="text-lead">
              We act as an intermediary, marketing your property to our network of pre-qualified buyers and investors.
              Our targeted approach means your property reaches people actively looking for what you're offering.
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
            <h3 className="heading-card text-primary mb-6">Types of Properties We Accept</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {propertyTypesAccepted.map((type, index) => (
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
            <h2 id="process-heading" className="heading-section mb-4">The Selling Process</h2>
            <p className="text-lead">A straightforward journey from submission to completion.</p>
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

      <section className="section container" aria-labelledby="submit-form-heading">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="submit-form-heading" className="heading-section mb-4">Submit Your Property</h2>
            <p className="text-lead">Provide details about your property and we'll be in touch to discuss next steps.</p>
          </div>

          {submitStatus === 'success' && (
            <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-xl" role="alert">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-green-800">Form Submitted Successfully</h3>
                  <p className="text-green-700">Thank you for your submission. Our team will review your property details and contact you within 1-2 business days.</p>
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
                  <p className="text-red-700">There was an issue submitting your form. Please check the errors below and try again.</p>
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
                label="Number of Bedrooms"
                name="bedrooms"
                type="number"
                placeholder="3"
                value={values.bedrooms}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.bedrooms}
                touched={touched.bedrooms}
                required
                min="0"
              />
              <Select
                label="Property Condition"
                name="propertyCondition"
                placeholder="Select condition"
                options={propertyConditions.map(cond => ({ value: cond, label: cond }))}
                value={values.propertyCondition}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.propertyCondition}
                touched={touched.propertyCondition}
                required
              />
            </div>

            <FormField
              label="Expected Selling Price (£)"
              name="expectedPrice"
              type="number"
              placeholder="500000"
              value={values.expectedPrice}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.expectedPrice}
              touched={touched.expectedPrice}
              required
            />

            <FileInput
              label="Property Images"
              name="propertyImages"
              value={values.propertyImages}
              onChange={handleFileChange}
              onBlur={handleBlur}
              error={errors.propertyImages}
              touched={touched.propertyImages}
              accept="image/*"
              multiple
              helperText="Upload up to 10 photos (max 5MB each). JPG, PNG formats accepted."
            />

            <Textarea
              label="Additional Information"
              name="additionalInfo"
              placeholder="Any other details about the property, recent renovations, unique features, etc."
              value={values.additionalInfo}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.additionalInfo}
              touched={touched.additionalInfo}
              rows={4}
            />

            <Checkbox
              label="I agree to the Privacy Policy and consent to Redbricks contacting me regarding my property submission."
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
                Submit Property for Review
              </Button>
              <p className="text-center text-sm text-text-light mt-4">
                By submitting, you agree to our <Link to="/privacy-policy" className="underline hover:text-primary">Privacy Policy</Link> and <Link to="/terms-and-conditions" className="underline hover:text-primary">Terms & Conditions</Link>.
              </p>
            </div>
          </form>
        </div>
      </section>

      <section className="section bg-background container" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="faq-heading" className="heading-section mb-4">Frequently Asked Questions</h2>
            <p className="text-lead">Common questions about selling your property through Redbricks.</p>
          </div>
          <FAQAccordion faqs={sellFAQs} />
        </div>
      </section>

      <CTASection
        title="Have Questions Before Submitting?"
        subtitle="Our team is here to help. Get in touch for a no-obligation discussion about your property."
        ctaPrimary={{ label: 'Contact Us', href: '/contact' }}
        variant="primary"
      />
    </>
  );
}