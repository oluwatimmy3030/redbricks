import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Filter, X, Loader2 } from 'lucide-react';
import Hero from '../components/Hero';
import PropertyCard from '../components/PropertyCard';
import PropertyFilters from '../components/PropertyFilters';
import Button from '../components/Button';
import { properties, filterProperties } from '../data/properties';
import { propertyTypes } from '../config/siteConfig';

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

const getUniqueLocations = (props) => {
  const locations = new Set();
  props.forEach(p => {
    const parts = p.location.split(',');
    parts.forEach(part => locations.add(part.trim()));
  });
  return Array.from(locations).sort();
};

const getUniqueTypes = (props) => {
  return [...new Set(props.map(p => p.type))].sort();
};

const priceRanges = [
  { label: 'Any', min: undefined, max: undefined },
  { label: 'Up to £250K', min: 0, max: 250000 },
  { label: '£250K - £500K', min: 250000, max: 500000 },
  { label: '£500K - £750K', min: 500000, max: 750000 },
  { label: '£750K - £1M', min: 750000, max: 1000000 },
  { label: '£1M+', min: 1000000, max: undefined },
];

const bedroomOptions = [
  { label: 'Any', value: undefined },
  { label: '1+', value: 1 },
  { label: '2+', value: 2 },
  { label: '3+', value: 3 },
  { label: '4+', value: 4 },
  { label: '5+', value: 5 },
];

export default function Properties() {
  const [filters, setFilters] = useState({
    location: '',
    type: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: ''
  });
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState('grid');

  const filteredProperties = useMemo(() => {
    return filterProperties({
      location: filters.location || undefined,
      type: filters.type || undefined,
      minPrice: filters.minPrice ? parseInt(filters.minPrice) : undefined,
      maxPrice: filters.maxPrice ? parseInt(filters.maxPrice) : undefined,
      bedrooms: filters.bedrooms ? parseInt(filters.bedrooms) : undefined
    });
  }, [filters]);

  const activeFilterCount = Object.values(filters).filter(v => v).length;

  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const clearFilters = () => {
    setFilters({
      location: '',
      type: '',
      minPrice: '',
      maxPrice: '',
      bedrooms: ''
    });
  };

  const hasActiveFilters = activeFilterCount > 0;

  return (
    <>
      <Hero
        title="Available Properties"
        subtitle="Browse our curated selection of properties for sale and investment. Use the filters to find properties matching your criteria."
        backgroundImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
      />

      <section className="section container" aria-labelledby="properties-heading">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
          <div>
            <h2 id="properties-heading" className="heading-section mb-2">
              Properties <span className="text-secondary">({filteredProperties.length})</span>
            </h2>
            <p className="text-text-muted">
              {hasActiveFilters
                ? `Showing ${filteredProperties.length} of ${properties.length} properties`
                : `Showing all ${properties.length} properties`}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border font-medium transition-colors ${
                showFilters
                  ? 'bg-primary text-surface border-primary'
                  : 'bg-surface text-text border-border hover:bg-primary/5'
              }`}
            >
              <Filter className="w-5 h-5" aria-hidden="true" />
              Filters {hasActiveFilters && <span className="bg-secondary text-surface text-xs px-2 py-0.5 rounded-full">{activeFilterCount}</span>}
            </button>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border text-text hover:bg-primary/5 transition-colors"
              >
                <X className="w-4 h-4" aria-hidden="true" />
                Clear All
              </button>
            )}

            <div className="flex items-center gap-2 border border-border rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-colors ${viewMode === 'grid' ? 'bg-primary text-surface' : 'text-text-muted hover:text-text'}`}
                aria-label="Grid view"
                aria-pressed={viewMode === 'grid'}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-colors ${viewMode === 'list' ? 'bg-primary text-surface' : 'text-text-muted hover:text-text'}`}
                aria-label="List view"
                aria-pressed={viewMode === 'list'}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          <aside className="w-full lg:w-64 lg:flex-shrink-0" aria-label="Property filters">
            {showFilters && (
              <PropertyFilters
                properties={properties}
                onFilter={handleFilterChange}
                className="sticky top-24"
              />
            )}
          </aside>

          <div className="flex-1 min-w-0">
            {filteredProperties.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                  <Loader2 className="w-8 h-8" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">No Properties Found</h3>
                <p className="text-text-muted mb-6">Try adjusting your filters to see more results.</p>
                <Button variant="outline" onClick={clearFilters}>
                  <X className="w-4 h-4 mr-2" aria-hidden="true" />
                  Clear All Filters
                </Button>
              </div>
            ) : (
              <>
                <div className={`grid gap-6 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                  {filteredProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <Link to="/contact">
                    <Button variant="outline" rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}>
                      Can't Find What You're Looking For? Contact Us
                    </Button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="section bg-background container" aria-labelledby="cta-heading">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="cta-heading" className="heading-section mb-4">Looking for Something Specific?</h2>
          <p className="text-lead mb-8">
            Can't find the right property? Register your requirements and we'll notify you when matching opportunities become available.
          </p>
          <Link to="/buy-property#register-form">
            <Button variant="secondary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}>
              Register Your Requirements
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}