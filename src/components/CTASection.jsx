import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from './Button';

const CTASection = ({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  className = '',
  variant = 'primary'
}) => {
  const backgrounds = {
    primary: 'bg-primary text-surface',
    secondary: 'bg-secondary text-surface',
    light: 'bg-background text-text border border-border'
  };

  return (
    <section className={`${backgrounds[variant]} rounded-2xl p-8 lg:p-16 ${className}`} aria-labelledby="cta-title">
      <div className="max-w-3xl mx-auto text-center">
        <h2 id="cta-title" className="heading-section mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lead mb-8 opacity-90">
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {ctaPrimary && (
            <Link to={ctaPrimary.href}>
              <Button
                variant={variant === 'primary' ? 'secondary' : variant === 'secondary' ? 'primary' : 'outline'}
                size="lg"
                rightIcon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
              >
                {ctaPrimary.label}
              </Button>
            </Link>
          )}
          {ctaSecondary && (
            <Link to={ctaSecondary.href}>
              <Button
                variant={variant === 'light' ? 'outline' : 'ghost'}
                size="lg"
              >
                {ctaSecondary.label}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;