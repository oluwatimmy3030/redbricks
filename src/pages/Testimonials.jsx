import { Link } from 'react-router-dom';
import { ArrowRight, Star, Filter, Building2, Home, Users, PiggyBank, Search, Building } from 'lucide-react';
import { useState, useMemo } from 'react';
import Hero from '../components/Hero';
import TestimonialCard from '../components/TestimonialCard';
import Button from '../components/Button';
import { getTestimonials, getTestimonialsByCategory } from '../data/testimonials';

const categories = [
  { id: 'all', label: 'All', icon: null },
  { id: 'seller', label: 'Sellers', icon: Home },
  { id: 'buyer', label: 'Buyers', icon: Search },
  { id: 'investor', label: 'Investors', icon: PiggyBank },
  { id: 'landlord', label: 'Landlords', icon: Building2 },
  { id: 'finder', label: 'Finders', icon: Users }
];

export default function Testimonials() {
  const [activeCategory, setActiveCategory] = useState('all');

  const testimonials = useMemo(() => {
    if (activeCategory === 'all') return getTestimonials();
    return getTestimonialsByCategory(activeCategory);
  }, [activeCategory]);

  return (
    <>
      <Hero
        title="Client Testimonials"
        subtitle="Real feedback from property owners, buyers, investors, landlords, and property finders we've worked with."
        backgroundImage="https://images.unsplash.com/photo-1600585152220-90363fe4e1f5?w=1920&q=80"
      />

      <section className="section container" aria-labelledby="testimonials-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="testimonials-heading" className="heading-section mb-4">What Our Clients Say</h2>
            <p className="text-lead">Genuine experiences from people across the property spectrum.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12" role="tablist" aria-label="Filter testimonials by category">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                role="tab"
                aria-selected={activeCategory === category.id}
                aria-controls={`panel-${category.id}`}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary text-surface'
                    : 'bg-surface text-text border border-border hover:bg-primary/5 hover:text-primary'
                }`}
              >
                {category.icon && <category.icon className="w-4 h-4" aria-hidden="true" />}
                {category.label}
              </button>
            ))}
          </div>

          {testimonials.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="tabpanel" id={`panel-${activeCategory}`} aria-label={`${categories.find(c => c.id === activeCategory)?.label} testimonials`}>
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-text-muted">No testimonials in this category yet.</p>
            </div>
          )}

          <div className="mt-12 text-center">
            <p className="text-text-muted mb-4">
              <strong>Note:</strong> The testimonials shown above are sample content for demonstration purposes.
              Replace with genuine client feedback before publication.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-background container" aria-labelledby="video-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="video-heading" className="heading-section mb-4">Video Testimonials</h2>
            <p className="text-lead">Hear directly from our clients about their experiences.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-surface rounded-xl border border-border overflow-hidden">
                <div className="aspect-video bg-primary/10 relative flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">Client Video Testimonial {index}</h3>
                  <p className="text-text-muted mb-4">[Video testimonial placeholder — replace with genuine client video]</p>
                  <Button variant="outline" size="sm" fullWidth>
                    Watch Video
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-text-muted text-sm">
              Video testimonial layout ready for integration. Replace placeholder content with genuine client videos.
            </p>
          </div>
        </div>
      </section>

      <section className="section container text-center" aria-labelledby="cta-heading">
        <h2 id="cta-heading" className="heading-section mb-4">Have an Experience to Share?</h2>
        <p className="text-lead mb-8 max-w-2xl mx-auto">We'd love to hear about your experience with Redbricks. Your feedback helps us improve and helps others make informed decisions.</p>
        <Link to="/contact">
          <Button variant="secondary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}>
            Share Your Feedback
          </Button>
        </Link>
      </section>
    </>
  );
}