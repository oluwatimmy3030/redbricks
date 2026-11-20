import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Tag, ExternalLink, Star } from 'lucide-react';

const PropertyCard = ({ property, variant = 'default' }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getStatusBadge = (status) => {
    const badges = {
      Available: 'badge-primary',
      Let: 'badge-secondary',
      Tenanted: 'badge-secondary',
      'Under Offer': 'badge bg-amber-100 text-amber-800',
      Sold: 'badge bg-gray-100 text-gray-600'
    };
    return badges[status] || 'badge-primary';
  };

  return (
    <article className={`card-hover ${variant === 'featured' ? 'lg:col-span-2' : ''}`}>
      <Link to={`/properties/${property.slug}`} className="block" aria-label={`View details for ${property.title}`}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={property.images[0]}
            alt={`${property.title} in ${property.location}`}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            <span className={getStatusBadge(property.status)}>
              {property.status}
            </span>
            {property.category === 'investment' && property.yield && (
              <span className="badge-secondary">
                {property.yield} Yield
              </span>
            )}
            {property.discount && (
              <span className="bg-red-600 text-surface px-2 py-1 rounded-full text-sm font-medium">
                {property.discount}
              </span>
            )}
          </div>
          {property.isFeatured && (
            <div className="absolute top-3 right-3">
              <span className="bg-secondary text-surface px-2 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <Star className="w-3 h-3" aria-hidden="true" />
                Featured
              </span>
            </div>
          )}
        </div>
        <div className="p-5">
          <div className="flex items-center gap-2 text-sm text-text-muted mb-2">
            <MapPin className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
            <span className="truncate">{property.location}</span>
          </div>
          <h3 className="heading-card text-primary mb-2 line-clamp-1">{property.title}</h3>
          <p className="text-2xl font-bold text-primary mb-4">{formatPrice(property.price)}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted border-t border-border pt-4">
            {property.bedrooms > 0 && (
              <span className="flex items-center gap-1.5">
                <Bed className="w-4 h-4" aria-hidden="true" />
                {property.bedrooms} Bed
              </span>
            )}
            {property.bathrooms > 0 && (
              <span className="flex items-center gap-1.5">
                <Bath className="w-4 h-4" aria-hidden="true" />
                {property.bathrooms} Bath
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <Tag className="w-4 h-4" aria-hidden="true" />
              {property.type}
            </span>
          </div>
          {property.yield && (
            <p className="text-sm text-secondary font-medium mt-3 flex items-center gap-1.5">
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
              Projected Yield: {property.yield}
            </p>
          )}
        </div>
      </Link>
    </article>
  );
};

export default PropertyCard;