import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQAccordion = ({ faqs, className = '', allowMultiple = false }) => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (id) => {
    setOpenItems(prev => {
      if (allowMultiple) {
        if (prev.includes(id)) {
          return prev.filter(item => item !== id);
        }
        return [...prev, id];
      }
      return prev.includes(id) ? [] : [id];
    });
  };

  const isOpen = (id) => openItems.includes(id);

  return (
    <div className={`space-y-4 ${className}`} role="region" aria-label="Frequently asked questions">
      {faqs.map((faq) => (
        <details
          key={faq.id}
          className="group bg-surface rounded-xl border border-border overflow-hidden"
          open={isOpen(faq.id)}
          onToggle={() => toggleItem(faq.id)}
        >
          <summary className="flex items-center justify-between p-6 cursor-pointer list-none focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2">
            <h3 className="text-lg font-semibold text-text pr-10">{faq.question}</h3>
            <ChevronDown className={`w-5 h-5 text-text-muted flex-shrink-0 transition-transform duration-200 ${isOpen(faq.id) ? 'rotate-180' : ''}`} aria-hidden="true" />
          </summary>
          <div className="px-6 pb-6 animate-slide-down">
            <p className="text-text-muted leading-relaxed">{faq.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
};

export default FAQAccordion;