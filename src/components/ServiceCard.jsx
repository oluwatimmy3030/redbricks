import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, href, variant = 'default' }) => {
  return (
    <article className={`card ${variant === 'featured' ? 'p-8' : 'p-6'}`}>
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 text-primary">
        <Icon className="w-6 h-6" aria-hidden="true" />
      </div>
      <h3 className="heading-card text-primary mb-3">{title}</h3>
      <p className="text-text-muted mb-6">{description}</p>
      <Link
        to={href}
        className="inline-flex items-center gap-2 text-secondary font-medium hover:text-secondary-light transition-colors"
        aria-label={`Learn more about ${title}`}
      >
        Learn more
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </article>
  );
};

export default ServiceCard;