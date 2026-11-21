import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Hero = ({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  backgroundImage,
  className = '',
  children,
  showPhone,
  phoneNumber
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className={`relative overflow-hidden ${className}`} aria-labelledby="hero-title">
      {backgroundImage && !imageError && (
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
            onError={() => setImageError(true)}
          />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
      )}
      {(imageError || !backgroundImage) && (
        <div className="absolute inset-0 bg-primary z-0" aria-hidden="true" />
      )}
      
      <div className="relative z-10 container py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {children ? (
            children
          ) : (
            <>
              <h1 id="hero-title" className="heading-display text-surface mb-6 animate-fade-in">
                {title}
              </h1>
              {subtitle && (
                <p className="text-lead text-surface/90 mb-10 animate-slide-up">
                  {subtitle}
                </p>
              )}
              {showPhone && phoneNumber && (
                <p className="text-surface/80 mb-6 animate-slide-up flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} className="underline hover:text-secondary transition-colors">
                    {phoneNumber}
                  </a>
                </p>
              )}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
                {ctaPrimary && (
                  <Link to={ctaPrimary.href} className="w-full sm:w-auto">
                    <Button variant="secondary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" aria-hidden="true" />} fullWidth>
                      {ctaPrimary.label}
                    </Button>
                  </Link>
                )}
                {ctaSecondary && (
                  <Link to={ctaSecondary.href} className="w-full sm:w-auto">
                    <Button variant="ghost" size="lg" fullWidth className="text-surface border-2 border-surface/50 hover:bg-surface/10 hover:border-surface">
                      {ctaSecondary.label}
                    </Button>
                  </Link>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;