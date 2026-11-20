import { Link } from 'react-router-dom';
import { ArrowRight, Check, Users, Shield, Lightbulb, Target, Home as HomeIcon, Building2, PiggyBank, Key, Search } from 'lucide-react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import PropertyCard from '../components/PropertyCard';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import Button from '../components/Button';
import { getFeaturedProperties } from '../data/properties';
import { getFeaturedTestimonials } from '../data/testimonials';
import { getFAQsByCategory } from '../data/faqs';

const services = [
  {
    icon: HomeIcon,
    title: 'Sell Your Property',
    description: 'Connect with serious buyers and investors through our extensive network. We market your property to the right audience.',
    href: '/sell-property'
  },
  {
    icon: Key,
    title: 'Buy A Property',
    description: 'Discover curated properties matching your criteria. From family homes to investment opportunities, we help you find the right property.',
    href: '/buy-property'
  },
  {
    icon: PiggyBank,
    title: 'Property Investment',
    description: 'Access exclusive investment opportunities including buy-to-let, HMO, renovation projects, and discounted properties.',
    href: '/investment-opportunities'
  },
  {
    icon: Building2,
    title: 'Landlord Solutions',
    description: 'Find reliable tenants and explore property management options. We connect landlords with quality tenants.',
    href: '/landlords'
  },
  {
    icon: Search,
    title: 'Property Finders',
    description: 'Join our property finder programme and earn referral fees for introducing quality property opportunities.',
    href: '/property-finders'
  }
];

const steps = [
  {
    number: '01',
    title: 'Connect With Us',
    description: 'Tell us about your property goals. Whether you\'re selling, buying, or investing, we listen first.'
  },
  {
    number: '02',
    title: 'Discover The Right Opportunity',
    description: 'We match you with suitable properties, buyers, or investors from our curated network.'
  },
  {
    number: '03',
    title: 'Move Forward With Confidence',
    description: 'We facilitate introductions and support you through the process to a successful outcome.'
  }
];

const features = [
  { icon: Users, title: 'Extensive Network', description: 'Access to a wide network of property owners, buyers, and investors across the UK.' },
  { icon: Shield, title: 'Transparent Process', description: 'Clear communication at every stage. No hidden fees or surprises.' },
  { icon: Lightbulb, title: 'Expert Guidance', description: 'Our team understands the property market and helps you make informed decisions.' },
  { icon: Target, title: 'Tailored Matches', description: 'We take time to understand your specific requirements for better outcomes.' }
];

const faqs = [
  ...getFAQsByCategory('Selling a Property').slice(0, 2),
  ...getFAQsByCategory('Buying a Property').slice(0, 2),
  ...getFAQsByCategory('Property Investment').slice(0, 2)
];

export default function Home() {
  return (
    <>
      <Hero
        title="Connecting Property Owners With The Right Opportunities"
        subtitle="At Redbricks, we bring property owners, buyers and investors together through smarter property sourcing and investment opportunities."
        ctaPrimary={{ label: 'Sell Your Property', href: '/sell-property' }}
        ctaSecondary={{ label: 'Explore Investment Opportunities', href: '/investment-opportunities' }}
        backgroundImage="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
      />

      <section className="section container" aria-labelledby="intro-heading">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 id="intro-heading" className="heading-section mb-4">About Redbricks</h2>
          <p className="text-lead">
            Redbricks operates as a property sourcing and investment intermediary, connecting property owners with interested buyers and investors.
            We don't buy or sell properties ourselves — we facilitate connections between the right people to create successful property transactions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="text-left">
            <h3 className="text-xl font-semibold text-primary mb-4">Our Role</h3>
            <p className="text-text-muted mb-4">
              We help property owners reach qualified buyers and investors through our established network and marketing channels.
            </p>
            <p className="text-text-muted">
              For buyers and investors, we source and present opportunities that match specific criteria, saving time and effort in property search.
            </p>
          </div>
          <div className="text-left">
            <h3 className="text-xl font-semibold text-primary mb-4">What We Don't Do</h3>
            <p className="text-text-muted mb-4">
              We do not buy or sell land. Our focus is exclusively on buildings and properties — residential and commercial.
            </p>
            <p className="text-text-muted">
              We are not a traditional estate agent. We operate as an intermediary, facilitating introductions and connections.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-background container" aria-labelledby="services-heading">
        <div className="text-center mb-16">
          <h2 id="services-heading" className="heading-section mb-4">Our Services</h2>
          <p className="text-lead">Explore the ways Redbricks can help you achieve your property goals.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      <section className="section container" aria-labelledby="how-it-works-heading">
        <div className="text-center mb-16">
          <h2 id="how-it-works-heading" className="heading-section mb-4">How Redbricks Works</h2>
          <p className="text-lead">A simple, transparent process designed around your property goals.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary font-bold text-2xl">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{step.title}</h3>
              <p className="text-text-muted">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 w-full h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-background container" aria-labelledby="featured-heading">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
          <div>
            <h2 id="featured-heading" className="heading-section mb-2">Featured Properties</h2>
            <p className="text-text-muted">A selection of properties currently available through our network.</p>
          </div>
          <Link to="/properties" className="mt-4 sm:mt-0">
            <Button variant="outline" rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}>
              View All Properties
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFeaturedProperties(6).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      <section className="section container" aria-labelledby="why-choose-heading">
        <div className="text-center mb-16">
          <h2 id="why-choose-heading" className="heading-section mb-4">Why Choose Redbricks?</h2>
          <p className="text-lead">We're committed to delivering value through expertise, transparency, and genuine connections.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                <feature.icon className="w-7 h-7" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
              <p className="text-text-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Are You an Investor Looking for Opportunities?"
        subtitle="Join our network of registered investors and get early access to curated investment opportunities."
        ctaPrimary={{ label: 'Register as an Investor', href: '/investors' }}
        ctaSecondary={{ label: 'View Investment Opportunities', href: '/investment-opportunities' }}
        variant="primary"
      />

      <section className="section bg-background container" aria-labelledby="testimonials-heading">
        <div className="text-center mb-12">
          <h2 id="testimonials-heading" className="heading-section mb-4">What Our Clients Say</h2>
          <p className="text-lead">Feedback from property owners, buyers, and investors we've worked with.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {getFeaturedTestimonials(3).map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/testimonials">
            <Button variant="outline" rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}>
              Read All Testimonials
            </Button>
          </Link>
        </div>
      </section>

      <section className="section container" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="faq-heading" className="heading-section mb-4">Frequently Asked Questions</h2>
            <p className="text-lead">Quick answers to common questions about our services.</p>
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
        title="Ready to Get Started?"
        subtitle="Whether you're selling, buying, or investing, Redbricks is here to connect you with the right opportunities."
        ctaPrimary={{ label: 'Submit Your Property', href: '/sell-property' }}
        ctaSecondary={{ label: 'Contact Us', href: '/contact' }}
        variant="secondary"
      />
    </>
  );
}