import { useState } from 'react';
import { Mail, Phone, MapPin, Link, MessageSquare, Users, Home, ArrowRight, Check, AlertCircle, Send } from 'lucide-react';
import Hero from '../components/Hero';
import CTASection from '../components/CTASection';
import Button from '../components/Button';
import FormField from '../components/FormField';
import Textarea from '../components/Textarea'
import Select from '../components/Select'
import Checkbox from '../components/Checkbox';
import { sendToFormspree } from '../services/formspreeService';
import { useForm } from '../hooks/useForm';
import { siteConfig } from '../config/siteConfig';

const initialValues = {
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  consent: false
};

const validationRules = {
  fullName: { required: true, requiredMessage: 'Full name is required' },
  email: { required: true, requiredMessage: 'Email is required', email: true, emailMessage: 'Please enter a valid email address' },
  phone: { required: false },
  subject: { required: true, requiredMessage: 'Please select a subject' },
  message: { required: true, requiredMessage: 'Message is required', minLength: 10, minLengthMessage: 'Message must be at least 10 characters' },
  consent: { required: true, requiredMessage: 'You must agree to proceed' }
};

const subjects = [
  { value: 'general', label: 'General Enquiry' },
  { value: 'sell', label: 'Sell My Property' },
  { value: 'buy', label: 'Buy a Property' },
  { value: 'invest', label: 'Investment Opportunities' },
  { value: 'landlord', label: 'Landlord Services' },
  { value: 'finder', label: 'Property Finder Programme' },
  { value: 'press', label: 'Press & Media' },
  { value: 'careers', label: 'Careers' },
  { value: 'other', label: 'Other' }
];

export default function Contact() {
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
        title="Contact Redbricks"
        subtitle="Have a question or want to discuss a property opportunity? We'd love to hear from you. Call 0161 531 7013."
        backgroundImage="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&q=80"
      />

      <section className="section container" aria-labelledby="contact-heading">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 id="contact-heading" className="heading-section mb-6">Get in Touch</h2>
              <p className="text-lead mb-8">
                Whether you're looking to sell, buy, invest, or have a general enquiry, our team is here to help.
                Choose the most convenient way to reach us below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 bg-surface rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                    <Mail className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Email Us</h3>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-text-muted hover:text-primary transition-colors">
                      {siteConfig.contact.email}
                    </a>
                    <p className="text-sm text-text-light mt-1">We aim to respond within 1 business day</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-surface rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                    <Phone className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Call Us</h3>
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-text-muted hover:text-primary transition-colors">
                      {siteConfig.contact.phone}
                    </a>
                    <p className="text-sm text-text-light mt-1">Monday–Friday, 9am–6pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-surface rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                    <MapPin className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Visit Us</h3>
                    <address className="text-text-muted not-italic">
                      <p>{siteConfig.contact.address.line1}</p>
                      <p>{siteConfig.contact.address.line2}</p>
                      <p>{siteConfig.contact.address.city} {siteConfig.contact.address.postcode}</p>
                      <p>{siteConfig.contact.address.country}</p>
                    </address>
                    <p className="text-sm text-text-light mt-1">By appointment only</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="font-semibold text-primary mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {siteConfig.social.linkedin && (
                    <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text-muted hover:bg-primary hover:text-surface hover:border-primary transition-all" aria-label="LinkedIn">
                      <Link className="w-5 h-5" aria-hidden="true" />
                    </a>
                  )}
                  {siteConfig.social.twitter && (
                    <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text-muted hover:bg-primary hover:text-surface hover:border-primary transition-all" aria-label="Twitter">
                      <MessageSquare className="w-5 h-5" aria-hidden="true" />
                    </a>
                  )}
                  {siteConfig.social.facebook && (
                    <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text-muted hover:bg-primary hover:text-surface hover:border-primary transition-all" aria-label="Facebook">
                      <Users className="w-5 h-5" aria-hidden="true" />
                    </a>
                  )}
                  {siteConfig.social.instagram && (
                    <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text-muted hover:bg-primary hover:text-surface hover:border-primary transition-all" aria-label="Instagram">
                      <Home className="w-5 h-5" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-surface rounded-2xl border border-border p-8">
              <h3 className="heading-card text-primary mb-6">Send Us a Message</h3>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg" role="alert">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800">Message Sent Successfully</h4>
                      <p className="text-green-700">Thank you for contacting us. We'll get back to you within 1 business day.</p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg" role="alert">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                      <AlertCircle className="w-4 h-4 text-red-600" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-800">Message Failed to Send</h4>
                      <p className="text-red-700">Please check the errors below and try again.</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <div className="grid md:grid-cols-2 gap-5">
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
                  label="Phone Number (Optional)"
                  name="phone"
                  type="tel"
                  placeholder="+44 20 7123 4567"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.phone}
                  touched={touched.phone}
                />

                <Select
                  label="Subject"
                  name="subject"
                  placeholder="Select a subject"
                  options={subjects}
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.subject}
                  touched={touched.subject}
                  required
                />

                <Textarea
                  label="Message"
                  name="message"
                  placeholder="Tell us about your enquiry..."
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.message}
                  touched={touched.message}
                  required
                  rows={5}
                />

                <Checkbox
                  label="I agree to the Privacy Policy and consent to Redbricks contacting me regarding my enquiry."
                  name="consent"
                  value={values.consent}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.consent}
                  touched={touched.consent}
                  required
                />

                <Button type="submit" variant="secondary" size="lg" fullWidth loading={isSubmitting} rightIcon={<Send className="w-5 h-5" aria-hidden="true" />}>
                  Send Message
                </Button>
                <p className="text-center text-sm text-text-light">
                  By sending, you agree to our <a href="/privacy-policy" className="underline hover:text-primary">Privacy Policy</a> and <a href="/terms-and-conditions" className="underline hover:text-primary">Terms & Conditions</a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-background container" aria-labelledby="business-heading">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="business-heading" className="heading-section mb-4">Business Enquiries</h2>
          <p className="text-lead mb-8">
            For partnership proposals, media enquiries, or other business matters, please email us directly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:info@redbricks.co.uk" className="text-secondary hover:underline flex items-center gap-2">
              <Mail className="w-4 h-4" aria-hidden="true" />
              info@redbricks.co.uk
            </a>
          </div>
          <p className="text-text-muted mt-2">Call us during business hours</p>
          <a href="tel:01615317013" className="text-secondary hover:underline flex items-center justify-center gap-2 mt-1">
            <Phone className="w-4 h-4" aria-hidden="true" />
            0161 531 7013
          </a>
        </div>
      </section>

      <CTASection
        title="Prefer to Talk?"
        subtitle="Call us during business hours for an immediate conversation about your property needs."
        ctaPrimary={{ label: 'Call 0161 531 7013', href: 'tel:01615317013' }}
        variant="primary"
      />
    </>
  );
}