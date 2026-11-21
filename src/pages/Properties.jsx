import { Link } from 'react-router-dom';
import { ArrowRight, Search, Filter } from 'lucide-react';
import Hero from '../components/Hero';
import Button from '../components/Button';

export default function Properties() {
  return (
    <>
      <Hero
        title="Available Properties"
        subtitle="We don't list properties publicly. Register your requirements and we'll match you with suitable opportunities from our network — including off-market deals."
        backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
      />

      <section className="section container" aria-labelledby="properties-heading">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="properties-heading" className="heading-section mb-4">How We Help You Find Property</h2>
          <p className="text-lead mb-12">
            Instead of browsing endless listings, tell us exactly what you're looking for.
            Our team actively sources and matches properties to your specific criteria.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-surface rounded-xl border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                <Search className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">1. Register Your Criteria</h3>
              <p className="text-text-muted">Location, property type, budget, bedrooms, and any specific requirements.</p>
            </div>
            <div className="p-6 bg-surface rounded-xl border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                <Filter className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">2. We Source & Match</h3>
              <p className="text-text-muted">We search our network and off-market opportunities to find properties that fit.</p>
            </div>
            <div className="p-6 bg-surface rounded-xl border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                <ArrowRight className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">3. View & Decide</h3>
              <p className="text-text-muted">We present curated options with full details. You only see what matches.</p>
            </div>
          </div>

          <div className="p-8 bg-primary/5 rounded-2xl border border-primary/20">
            <h3 className="text-xl font-semibold text-primary mb-4">Ready to Find Your Property?</h3>
            <p className="text-text-muted mb-6">Join our Early Bird list for first access to off-market and discounted properties.</p>
            <Link to="/buy-property#register-form">
              <Button variant="secondary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}>
                Register as a Buyer
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}