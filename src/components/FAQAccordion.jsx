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
        <div key={faq.id} className="group bg-surface rounded-xl border border-border overflow-hidden">
          <button
            onClick={() => toggleItem(faq.id)}
            className="flex items-center justify-between w-full p-6 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
            aria-expanded={isOpen(faq.id)}
            aria-controls={`faq-panel-${faq.id}`}
          >
            <h3 className="text-lg font-semibold text-text pr-10">{faq.question}</h3>
            <ChevronDown className={`w-5 h-5 text-text-muted flex-shrink-0 transition-transform duration-200 ${isOpen(faq.id) ? 'rotate-180' : ''}`} aria-hidden="true" />
          </button>
          <div
            id={`faq-panel-${faq.id}`}
            className={`px-6 pb-6 ${isOpen(faq.id) ? 'animate-slide-down' : 'hidden'}`}
            role="region"
          >
            <p className="text-text-muted leading-relaxed">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
