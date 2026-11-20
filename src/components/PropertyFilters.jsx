import { useMemo } from 'react';
import { X } from 'lucide-react';
import Select from './Select';
import FormField from './FormField';
import Button from './Button';

const PropertyFilters = ({ properties, onFilter, className = '' }) => {
  const locations = useMemo(() => {
    const locs = new Set();
    properties.forEach(p => {
      const city = p.location.split(',')[0].trim();
      locs.add(city);
    });
    return Array.from(locs).sort();
  }, [properties]);

  const types = useMemo(() => {
    const t = new Set(properties.map(p => p.type));
    return Array.from(t).sort();
  }, [properties]);

  const minPrice = useMemo(() => Math.min(...properties.map(p => p.price)), [properties]);
  const maxPrice = useMemo(() => Math.max(...properties.map(p => p.price)), [properties]);
  const maxBedrooms = useMemo(() => Math.max(...properties.map(p => p.bedrooms)), [properties]);

  const formatPrice = (price) => {
    if (price >= 1000000) return `£${(price / 1000000).toFixed(1)}M`;
    if (price >= 1000) return `£${(price / 1000).toFixed(0)}K`;
    return `£${price}`;
  };

  return (
    <div className={`bg-surface rounded-xl border border-border p-6 ${className}`} role="search" aria-label="Property filters">
      <div className="flex items-center justify-between mb-6">
        <h3 className="heading-card text-primary">Filters</h3>
        <Button variant="ghost" size="sm" onClick={() => onFilter({})}>
          <X className="w-4 h-4 mr-1" aria-hidden="true" />
          Clear All
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <Select
          label="Location"
          name="location"
          placeholder="All locations"
          options={locations.map(loc => ({ value: loc, label: loc }))}
          onChange={(name, value) => onFilter({ location: value })}
        />
        <Select
          label="Property Type"
          name="type"
          placeholder="All types"
          options={types.map(type => ({ value: type, label: type }))}
          onChange={(name, value) => onFilter({ type: value })}
        />
        <FormField
          label="Min Price"
          name="minPrice"
          type="number"
          placeholder={formatPrice(minPrice)}
          onChange={(name, value) => onFilter({ minPrice: value ? parseInt(value) : undefined })}
        />
        <FormField
          label="Max Price"
          name="maxPrice"
          type="number"
          placeholder={formatPrice(maxPrice)}
          onChange={(name, value) => onFilter({ maxPrice: value ? parseInt(value) : undefined })}
        />
        <Select
          label="Min Bedrooms"
          name="bedrooms"
          placeholder="Any"
          options={Array.from({ length: maxBedrooms }, (_, i) => ({
            value: String(i + 1),
            label: `${i + 1}+`
          }))}
          onChange={(name, value) => onFilter({ bedrooms: value ? parseInt(value) : undefined })}
        />
      </div>
    </div>
  );
};

export default PropertyFilters;