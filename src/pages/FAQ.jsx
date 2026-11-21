import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import Hero from '../components/Hero';
import FAQAccordion from '../components/FAQAccordion';
import { getAllFAQs, getAllFAQCategories, getFAQsByCategory } from '../data/faqs';

const allFAQs = getAllFAQs();
const categories = getAllFAQCategories();

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');

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

  return (
    <>
      <Hero
        title="Frequently Asked Questions"
        backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
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
                  <div key={category} className="bg-surface rounded-xl border border-border overflow-hidden">
                    <FAQAccordion faqs={faqs} allowMultiple categoryTitle={category} />
                  </div>
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