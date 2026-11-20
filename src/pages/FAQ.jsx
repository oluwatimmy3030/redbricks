import { useState } from 'react';
import { ChevronDown, Search, Filter } from 'lucide-react';
import Hero from '../components/Hero';
import FAQAccordion from '../components/FAQAccordion';
import { getAllFAQs, getAllFAQCategories, getFAQsByCategory } from '../data/faqs';

const categoryIcons = {
  'Selling a Property': 'Home',
  'Buying a Property': 'Key',
  'Property Investment': 'PiggyBank',
  'Landlord Solutions': 'Building2',
  'Property Finders': 'Users',
  'General Questions': 'HelpCircle'
};

const allFAQs = getAllFAQs();
const categories = getAllFAQCategories();

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState(
    categories.reduce((acc, cat) => ({ ...acc, [cat]: true }), {})
  );

  const filteredFAQs = allFAQs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const faqsByCategory = categories.reduce((acc, category) => {
    const faqs = getFAQsByCategory(category).filter(faq =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (faqs.length > 0) {
      acc[category] = faqs;
    }
    return acc;
  }, {});

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({ ...prev, [category]: !prev[category] }));
  };

  return (
    <>
      <Hero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services. Can't find what you're looking for? <a href='/contact' className='underline hover:text-secondary'>Contact us</a>."
        backgroundImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
      />

      <section className="section container" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <label htmlFor="faq-search" className="sr-only">Search FAQs</label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-light" aria-hidden="true" />
              <input
                id="faq-search"
                type="search"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-lg border border-border bg-surface text-text placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                aria-label="Search FAQs"
              />
            </div>
          </div>

          {searchQuery ? (
            <div>
              <p className="text-text-muted mb-6">
                Showing {filteredFAQs.length} result{filteredFAQs.length !== 1 ? 's' : ''} for &ldquo;{searchQuery}&rdquo;
              </p>
              <FAQAccordion faqs={filteredFAQs} allowMultiple />
            </div>
          ) : (
            <div className="space-y-6">
              {categories.map((category) => {
                const faqs = faqsByCategory[category];
                if (!faqs) return null;

                return (
                  <details
                    key={category}
                    className="bg-surface rounded-xl border border-border overflow-hidden"
                    open={expandedCategories[category]}
                    onToggle={() => toggleCategory(category)}
                  >
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                          <ChevronDown className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-primary">{category}</h3>
                          <p className="text-sm text-text-muted">{faqs.length} question{faqs.length !== 1 ? 's' : ''}</p>
                        </div>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-text-muted transition-transform ${expandedCategories[category] ? 'rotate-180' : ''}`} aria-hidden="true" />
                    </summary>
                    <div className="px-5 pb-5 animate-slide-down">
                      <FAQAccordion faqs={faqs} allowMultiple />
                    </div>
                  </details>
                );
              })}
            </div>
          )}

          <div className="mt-12 text-center">
            <p className="text-text-muted mb-4">
              Didn't find the answer you were looking for?
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 text-secondary font-medium hover:text-secondary-light transition-colors">
              Contact Our Team
              <ChevronDown className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}