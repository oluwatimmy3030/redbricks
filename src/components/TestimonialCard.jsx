import { Quote, Star } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <article className="card p-6 relative">
      <Quote className="w-10 h-10 text-secondary/20 absolute top-6 right-6" aria-hidden="true" />
      <div className="flex gap-1 mb-4" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < testimonial.rating ? 'fill-secondary text-secondary' : 'text-border'}`}
            aria-hidden="true"
          />
        ))}
      </div>
      <blockquote className="text-text mb-6 relative z-10">
        &ldquo;{testimonial.content}&rdquo;
      </blockquote>
      <footer>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <p className="font-medium text-text">{testimonial.name}</p>
            <p className="text-sm text-text-muted">{testimonial.role}</p>
            {testimonial.company && (
              <p className="text-sm text-text-light">{testimonial.company}</p>
            )}
          </div>
        </div>
        {testimonial.isSample && (
          <p className="text-xs text-text-light mt-3 italic">Sample testimonial - replace with genuine feedback</p>
        )}
      </footer>
    </article>
  );
};

export default TestimonialCard;