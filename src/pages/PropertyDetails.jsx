import { useParams, Link } from 'react-router-dom';
import { useMemo } from 'react';
import { MapPin, Bed, Bath, Tag, ArrowLeft, Heart, Share2, Calendar, Phone, Mail, Check, ExternalLink } from 'lucide-react';
import Hero from '../components/Hero';
import PropertyGallery from '../components/PropertyGallery';
import PropertyCard from '../components/PropertyCard';
import Button from '../components/Button';
import { getPropertyBySlug, getRelatedProperties } from '../data/properties';

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export default function PropertyDetails() {
  const { slug } = useParams();
  const property = useMemo(() => getPropertyBySlug(slug), [slug]);
  const relatedProperties = useMemo(() => getRelatedProperties(slug, property?.category), [slug, property?.category]);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center p-8">
          <h1 className="heading-section mb-4">Property Not Found</h1>
          <p className="text-text-muted mb-8">The property you're looking for doesn't exist or has been removed.</p>
          <Link to="/properties">
            <Button variant="primary" rightIcon={<ArrowLeft className="w-4 h-4" aria-hidden="true" />}>
              Back to Properties
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const pageTitle = `${property.title} | Redbricks`;
  document.title = pageTitle;

  return (
    <>
      <section className="relative h-60 lg:h-80" aria-labelledby="property-title">
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src={property.images[0]}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
        </div>
        <div className="relative h-full container flex items-end pb-8">
          <div className="max-w-4xl">
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 text-surface/80 hover:text-surface mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Back to Properties
            </Link>
            <h1 id="property-title" className="text-3xl lg:text-4xl font-bold text-surface mb-2">{property.title}</h1>
            <div className="flex items-center gap-4 text-surface/90">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-5 h-5" aria-hidden="true" />
                {property.location}
              </span>
              <span className="text-2xl font-bold text-secondary">{formatPrice(property.price)}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section container" aria-labelledby="details-heading">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <PropertyGallery images={property.images} alt={property.title} />
            </div>

            <div className="bg-surface rounded-xl border border-border p-6">
              <h2 id="details-heading" className="heading-section mb-6">Property Details</h2>
              <div className="prose text-text-muted max-w-none">
                <p className="mb-4 leading-relaxed">{property.description}</p>
              </div>

              <h3 className="text-lg font-semibold text-primary mb-4">Key Features</h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {property.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-text">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {property.yield && (
              <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                  <ExternalLink className="w-5 h-5" aria-hidden="true" />
                  Investment Information
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-text-muted">Projected Gross Yield</p>
                    <p className="text-2xl font-bold text-secondary">{property.yield}</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Property Status</p>
                    <p className="font-semibold text-text">{property.status}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-surface rounded-xl border border-border p-6">
                <h3 className="heading-card text-primary mb-4">Property Summary</h3>
                <dl className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <dt className="text-text-muted">Price</dt>
                    <dd className="text-xl font-bold text-primary">{formatPrice(property.price)}</dd>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <dt className="text-text-muted">Type</dt>
                    <dd className="font-medium text-text">{property.type}</dd>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <dt className="text-text-muted">Bedrooms</dt>
                    <dd className="font-medium text-text">{property.bedrooms}</dd>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <dt className="text-text-muted">Bathrooms</dt>
                    <dd className="font-medium text-text">{property.bathrooms}</dd>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <dt className="text-text-muted">Status</dt>
                    <dd className="font-medium text-text">{property.status}</dd>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <dt className="text-text-muted">Category</dt>
                    <dd className="font-medium text-text capitalize">{property.category}</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-primary rounded-xl p-6 text-surface">
                <h3 className="text-lg font-semibold mb-4">Interested in This Property?</h3>
                <p className="text-surface/80 mb-6">Get in touch to arrange a viewing or request more information.</p>
                <Link to="/contact" className="block">
                  <Button variant="secondary" fullWidth size="lg" rightIcon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}>
                    Enquire Now
                  </Button>
                </Link>
                <div className="mt-6 pt-6 border-t border-surface/20 space-y-3">
                  <a href={`tel:+442071234567`} className="flex items-center gap-3 text-surface/80 hover:text-surface transition-colors">
                    <Phone className="w-5 h-5" aria-hidden="true" />
                    <span>Call: +44 (0) 20 7123 4567</span>
                  </a>
                  <a href={`mailto:hello@redbricks.co.uk?subject=Enquiry: ${encodeURIComponent(property.title)}`} className="flex items-center gap-3 text-surface/80 hover:text-surface transition-colors">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                    <span>Email Us</span>
                  </a>
                </div>
              </div>

              <div className="bg-surface rounded-xl border border-border p-6">
                <h3 className="heading-card text-primary mb-4">Share This Property</h3>
                <div className="flex gap-3">
                  <button className="flex-1 py-2.5 rounded-lg border border-border text-text-muted hover:bg-primary/5 hover:text-primary transition-colors flex items-center justify-center gap-2" aria-label="Share on LinkedIn">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </button>
                  <button className="flex-1 py-2.5 rounded-lg border border-border text-text-muted hover:bg-primary/5 hover:text-primary transition-colors flex items-center justify-center gap-2" aria-label="Share on Twitter">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-9.839L0 2.25h3.26l6.613 8.314L20.77 2.25z"/></svg>
                  </button>
                  <button className="flex-1 py-2.5 rounded-lg border border-border text-text-muted hover:bg-primary/5 hover:text-primary transition-colors flex items-center justify-center gap-2" aria-label="Share via Email">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {relatedProperties.length > 0 && (
        <section className="section bg-background container" aria-labelledby="related-heading">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
            <div>
              <h2 id="related-heading" className="heading-section mb-2">Related Properties</h2>
              <p className="text-text-muted">Similar properties you might be interested in.</p>
            </div>
            <Link to="/properties" className="mt-4 sm:mt-0">
              <Button variant="outline" rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}>
                View All Properties
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedProperties.map((prop) => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>
        </section>
      )}

      <section className="section container text-center" aria-labelledby="cta-heading">
        <h2 id="cta-heading" className="heading-section mb-4">Ready to Take the Next Step?</h2>
        <p className="text-lead mb-8 max-w-2xl mx-auto">Contact our team to arrange a viewing or discuss this property further.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact">
            <Button variant="secondary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}>
              Enquire About This Property
            </Button>
          </Link>
          <Link to="/properties">
            <Button variant="outline" size="lg">
              Continue Browsing
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}