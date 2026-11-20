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
  children
}) => {
  return (
    <section className={`relative overflow-hidden ${className}`} aria-labelledby="hero-title">
      {backgroundImage && (
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
      )}
      {!backgroundImage && (
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
                    <Button variant="outline" size="lg" fullWidth>
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