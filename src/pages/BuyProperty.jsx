import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Home, Users, Shield, Clock, Mail, Phone, MapPin, Bed, Tag, Search, AlertCircle, Key } from 'lucide-react';
import Hero from '../components/Hero';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import Button from '../components/Button';
import FormField from '../components/FormField';
import Select from '../components/Select'
import Checkbox from '../components/Checkbox';
import PropertyCard from '../components/PropertyCard';
import { useForm } from '../hooks/useForm';
import { getFAQsByCategory } from '../data/faqs';
import { propertyTypes, purchasePurposes } from '../config/siteConfig';
import { getPropertiesByCategory } from '../data/properties';

const buyFAQs = getFAQsByCategory('Buying a Property');
const featuredProperties = getPropertiesByCategory('buy').slice(0, 3);

const initialValues = {
  fullName: '',
  email: '',
  phone: '',
  preferredLocation: '',
  propertyType: '',
  budget: '',
  bedrooms: '',
  purchasePurpose: '',
  additionalRequirements: '',
  consent: false
};

const validationRules = {
  fullName: { required: true, requiredMessage: 'Full name is required' },
  email: { required: true, requiredMessage: 'Email is required', email: true, emailMessage: 'Please enter a valid email address' },
  phone: { required: true, requiredMessage: 'Phone number is required' },
  preferredLocation: { required: true, requiredMessage: 'Preferred location is required' },
  propertyType: { required: true, requiredMessage: 'Please select a property type' },
  budget: { required: true, requiredMessage: 'Budget is required' },
  bedrooms: { required: true, requiredMessage: 'Number of bedrooms is required' },
  purchasePurpose: { required: true, requiredMessage: 'Please select purchase purpose' },
  consent: { required: true, requiredMessage: 'You must agree to proceed' }
};

const benefits = [
  { icon: Search, title: 'Curated Property Matching', description: 'We match you with properties that fit your specific criteria, saving you time viewing unsuitable options.' },
  { icon: Users, title: 'Access to Off-Market Opportunities', description: 'Some of the best properties never reach public portals. Our network gives you early access.' },
  { icon: Shield, title: 'Transparent Information', description: 'We provide all available property details upfront so you can make informed decisions.' },
  { icon: Clock, title: 'Efficient Process', description: 'From viewing to offer, we streamline the journey with clear communication throughout.' }
];

const propertyCategories = [
  { title: 'Family Homes', description: 'Spacious houses in desirable residential areas with good schools and amenities.', icon: Home },
  { title: 'City Apartments', description: 'Modern apartments in central locations, ideal for professionals and investors.', icon: Key },
  { title: 'Investment Properties', description: 'Buy-to-let, HMO, and renovation opportunities with strong rental potential.', icon: Tag },
  { title: 'Commercial Premises', description: 'Retail, office, and mixed-use properties for business or investment.', icon: Key }
];

const buyerProcessSteps = [
  { number: '1', title: 'Register Your Requirements', description: 'Tell us what you\'re looking for — location, type, budget, and preferences.' },
  { number: '2', title: 'Receive Curated Matches', description: 'We send you properties that match your criteria, including off-market opportunities.' },
  { number: '3', title: 'Arrange Viewings', description: 'We coordinate viewings at convenient times and provide full property information packs.' },
  { number: '4', title: 'Make an Offer', description: 'We facilitate the offer process and negotiate on your behalf where appropriate.' },
  { number: '5', title: 'Complete Purchase', description: 'We support you through to completion with recommended solicitors and surveyors.' }
];

export default function BuyProperty() {
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
    console.log('Buyer registration submitted:', formData);
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  return (
    <>
      <Hero
        title="Find Your Next Property With Redbricks"
        subtitle="Looking to buy? We source and match properties to your exact requirements — from family homes to investment opportunities."
        ctaPrimary={{ label: 'Register as a Buyer', href: '#register-form' }}
        ctaSecondary={{ label: 'Browse Available Properties', href: '/properties' }}
        backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
      />

      <section className="section container" aria-labelledby="how-we-help-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="how-we-help-heading" className="heading-section mb-4">How Redbricks Helps Buyers</h2>
            <p className="text-lead">
              We don't just list properties — we actively source and match opportunities to your specific criteria.
              Our network includes properties that may not be publicly advertised.
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
            <h3 className="heading-card text-primary mb-6">Property Categories We Source</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {propertyCategories.map((category, index) => (
                <div key={index} className="p-6 bg-surface rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    <category.icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-2">{category.title}</h4>
                  <p className="text-text-muted">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-background container" aria-labelledby="featured-heading">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
            <div>
              <h2 id="featured-heading" className="heading-section mb-2">Featured Properties for Sale</h2>
              <p className="text-text-muted">A selection of properties currently available through our network.</p>
            </div>
            <Link to="/properties" className="mt-4 sm:mt-0">
              <Button variant="outline" rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}>
                View All Properties
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      <section className="section container" aria-labelledby="buying-process-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="buying-process-heading" className="heading-section mb-4">The Buying Process</h2>
            <p className="text-lead">We make finding and purchasing your property straightforward.</p>
          </div>
          <div className="space-y-6">
            {buyerProcessSteps.map((step, index) => (
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
            <h2 id="register-form-heading" className="heading-section mb-4">Register as a Buyer</h2>
            <p className="text-lead">Tell us what you're looking for and we'll match you with suitable properties.</p>
          </div>

          {submitStatus === 'success' && (
            <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-xl" role="alert">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-green-800">Registration Successful</h3>
                  <p className="text-green-700">Thank you for registering. Our team will review your requirements and contact you with matching properties.</p>
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
              label="Preferred Location(s)"
              name="preferredLocation"
              type="text"
              placeholder="e.g. London, Manchester, Birmingham"
              value={values.preferredLocation}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.preferredLocation}
              touched={touched.preferredLocation}
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
                label="Budget (£)"
                name="budget"
                type="number"
                placeholder="500000"
                value={values.budget}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.budget}
                touched={touched.budget}
                required
              />
              <FormField
                label="Min Bedrooms"
                name="bedrooms"
                type="number"
                placeholder="2"
                value={values.bedrooms}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.bedrooms}
                touched={touched.bedrooms}
                required
                min="0"
              />
            </div>

            <Select
              label="Purpose of Purchase"
              name="purchasePurpose"
              placeholder="Select purpose"
              options={purchasePurposes.map(purpose => ({ value: purpose, label: purpose }))}
              value={values.purchasePurpose}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.purchasePurpose}
              touched={touched.purchasePurpose}
              required
            />

            <FormField
              label="Additional Requirements"
              name="additionalRequirements"
              type="text"
              placeholder="e.g. Garden, parking, near station, specific school catchment"
              value={values.additionalRequirements}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.additionalRequirements}
              touched={touched.additionalRequirements}
            />

            <Checkbox
              label="I agree to the Privacy Policy and consent to Redbricks contacting me about property opportunities."
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
                Register as a Buyer
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
            <h2 id="faq-heading" className="heading-section mb-4">Frequently Asked Questions</h2>
            <p className="text-lead">Common questions about buying property through Redbricks.</p>
          </div>
          <FAQAccordion faqs={buyFAQs} />
        </div>
      </section>

      <CTASection
        title="Ready to Find Your Property?"
        subtitle="Register your requirements today and let us do the searching for you."
        ctaPrimary={{ label: 'Register as a Buyer', href: '#register-form' }}
        ctaSecondary={{ label: 'Browse Properties', href: '/properties' }}
        variant="primary"
      />
    </>
  );
}