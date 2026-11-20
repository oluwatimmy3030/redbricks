import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Home, Hammer, PiggyBank, TrendingUp, Target, Check, Shield, Users, Lightbulb } from 'lucide-react';
import Hero from '../components/Hero';
import CTASection from '../components/CTASection';
import PropertyCard from '../components/PropertyCard';
import Button from '../components/Button';
import { getPropertiesByCategory, getFeaturedProperties } from '../data/properties';

const investmentCategories = [
  {
    id: 'buy-to-let',
    icon: Home,
    title: 'Buy-to-Let',
    description: 'Residential properties purchased specifically to rent out. Steady monthly income with potential for capital appreciation.',
    benefits: ['Regular rental income', 'Capital growth potential', 'Tax advantages available', 'High tenant demand']
  },
  {
    id: 'buy-to-flip',
    icon: Hammer,
    title: 'Buy-to-Flip',
    description: 'Properties purchased below market value, renovated, and sold for profit. Short-term investment strategy.',
    benefits: ['Quick returns possible', 'Value add through renovation', 'Market timing opportunities', 'Hands-on investment']
  },
  {
    id: 'hmo',
    icon: Users,
    title: 'HMO (House in Multiple Occupation)',
    description: 'Properties let to 3+ tenants forming separate households. Higher yields but more regulation.',
    benefits: ['Higher rental yields', 'Multiple income streams', 'Reduced void risk', 'Strong student/professional demand']
  },
  {
    id: 'renovation',
    icon: Hammer,
    title: 'Renovation Opportunities',
    description: 'Properties needing work, offering significant value-add potential through refurbishment or extension.',
    benefits: ['Below market purchase', 'Significant uplift potential', 'Creative control', 'Various exit strategies']
  },
  {
    id: 'discounted',
    icon: PiggyBank,
    title: 'Discounted Properties',
    description: 'Properties available below market value due to motivated sellers, probate, or distressed situations.',
    benefits: ['Immediate equity', 'Lower entry cost', 'Higher potential returns', 'Less competition']
  },
  {
    id: 'rental',
    icon: TrendingUp,
    title: 'Rental Investment Properties',
    description: 'Properties with existing tenancies in place, providing immediate rental income from day one.',
    benefits: ['Immediate income', 'Proven rental history', 'Tenant in situ', 'Lower initial risk']
  }
];

const featuredInvestments = getPropertiesByCategory('investment').slice(0, 6);

const benefits = [
  { icon: Shield, title: 'Curated Opportunities', description: 'We pre-screen properties and only present opportunities that meet our criteria.' },
  { icon: Users, title: 'Investor Network', description: 'Access to a network of fellow investors and industry professionals.' },
  { icon: Lightbulb, title: 'Market Insights', description: 'Regular updates on market trends, hotspots, and emerging opportunities.' },
  { icon: Target, title: 'Tailored Matching', description: 'We understand your strategy and match opportunities to your specific criteria.' }
];

const howItWorks = [
  { number: '1', title: 'Register Your Criteria', description: 'Tell us your investment goals, budget, preferred locations, and strategy.' },
  { number: '2', title: 'Receive Curated Deals', description: 'We send you opportunities matching your criteria, often before they hit the open market.' },
  { number: '3', title: 'Due Diligence Support', description: 'We provide available information packs and can connect you with surveyors and solicitors.' },
  { number: '4', title: 'Move Forward', description: 'We facilitate the introduction and support you through to completion.' }
];

export default function InvestmentOpportunities() {
  return (
    <>
      <Hero
        title="Property Investment Opportunities"
        subtitle="Discover curated investment opportunities across the UK. From buy-to-let and HMO to renovation projects and discounted properties."
        ctaPrimary={{ label: 'Register as an Investor', href: '/investors' }}
        ctaSecondary={{ label: 'View All Opportunities', href: '/properties' }}
        backgroundImage="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
      />

      <section className="section container" aria-labelledby="categories-heading">
        <div className="text-center mb-16">
          <h2 id="categories-heading" className="heading-section mb-4">Investment Categories</h2>
          <p className="text-lead">Explore different property investment strategies to match your goals and risk profile.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {investmentCategories.map((category) => (
            <article key={category.id} className="card p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <category.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="heading-card text-primary mb-2">{category.title}</h3>
              <p className="text-text-muted mb-4">{category.description}</p>
              <ul className="space-y-2 mb-6">
                {category.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-text">
                    <Check className="w-4 h-4 text-secondary flex-shrink-0" aria-hidden="true" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <Link to={`/investment-opportunities#${category.id}`} className="text-secondary font-medium hover:text-secondary-light transition-colors inline-flex items-center gap-1">
                Learn more
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section bg-background container" aria-labelledby="featured-investments-heading">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
          <div>
            <h2 id="featured-investments-heading" className="heading-section mb-2">Featured Investment Opportunities</h2>
            <p className="text-text-muted">A selection of current investment properties in our network.</p>
          </div>
          <Link to="/properties" className="mt-4 sm:mt-0">
            <Button variant="outline" rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}>
              View All Investments
            </Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredInvestments.map((property) => (
            <PropertyCard key={property.id} property={property} variant="featured" />
          ))}
        </div>
      </section>

      <section className="section container" aria-labelledby="benefits-heading">
        <div className="text-center mb-16">
          <h2 id="benefits-heading" className="heading-section mb-4">Why Source Investments Through Redbricks?</h2>
          <p className="text-lead">We focus on quality over quantity, presenting only opportunities that meet our standards.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                <benefit.icon className="w-7 h-7" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">{benefit.title}</h3>
              <p className="text-text-muted">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-background container" aria-labelledby="process-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="process-heading" className="heading-section mb-4">How Redbricks Connects Investors With Opportunities</h2>
            <p className="text-lead">A streamlined process from registration to investment.</p>
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

      <CTASection
        title="Ready to Explore Investment Opportunities?"
        subtitle="Join our investor network and get early access to curated property deals."
        ctaPrimary={{ label: 'Register as an Investor', href: '/investors' }}
        ctaSecondary={{ label: 'Browse Current Opportunities', href: '/properties' }}
        variant="primary"
      />

      <section className="section container text-center" aria-labelledby="disclaimer-heading">
        <h2 id="disclaimer-heading" className="text-lg font-semibold text-primary mb-4">Important Notice</h2>
        <div className="max-w-3xl mx-auto text-text-muted space-y-4">
          <p>
            <strong>Redbricks does not guarantee investment returns, yields, or capital growth.</strong> All property investments carry risk.
            The information provided is for introductory purposes only and does not constitute financial advice.
          </p>
          <p>
            You should conduct your own due diligence, seek independent financial and legal advice, and carefully consider your investment objectives before proceeding.
            Past performance is not indicative of future results.
          </p>
        </div>
      </section>
    </>
  );
}