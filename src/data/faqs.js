export const faqs = [
  // Selling a Property
  {
    id: 'sell-1',
    category: 'Selling a Property',
    question: 'How does Redbricks help me sell my property?',
    answer: 'Redbricks connects property owners with our network of pre-qualified buyers and investors. We market your property through our channels, arrange viewings, and facilitate the negotiation process. Our role is to get you the right buyers efficiently.',
    order: 1
  },
  {
    id: 'sell-2',
    category: 'Selling a Property',
    question: 'What types of properties do you accept?',
    answer: 'We work with residential properties including houses, apartments, and flats. We also handle commercial properties and investment portfolios. Each property is assessed on its individual merits and suitability for our buyer network.',
    order: 2
  },
  {
    id: 'sell-3',
    category: 'Selling a Property',
    question: 'How long does it take to sell through Redbricks?',
    answer: 'Timescales vary depending on property type, location, price, and market conditions. Some properties attract interest within days, while others may take longer. We provide realistic expectations based on current market data for your property type and area.',
    order: 3
  },
  {
    id: 'sell-4',
    category: 'Selling a Property',
    question: 'Are there any upfront fees?',
    answer: 'No. We operate on a success basis - our fee is typically payable on completion. There are no upfront marketing costs or hidden fees. Full details are provided in our terms of engagement before we begin.',
    order: 4
  },

  // Buying a Property
  {
    id: 'buy-1',
    category: 'Buying a Property',
    question: 'How does the buying process work with Redbricks?',
    answer: 'Register your requirements with us, and we\'ll match you with suitable properties from our portfolio and network. We arrange viewings, provide property information, and assist with the offer and purchase process through to completion.',
    order: 1
  },
  {
    id: 'buy-2',
    category: 'Buying a Property',
    question: 'Is there a fee for buyers?',
    answer: 'Our buyer registration and property matching service is typically free for buyers. Our fees are usually paid by the seller or through the transaction structure. Any costs specific to your purchase (survey, legal fees, stamp duty) are the standard costs associated with any property purchase.',
    order: 2
  },
  {
    id: 'buy-3',
    category: 'Buying a Property',
    question: 'What areas do you cover?',
    answer: 'We operate across major UK cities and towns including London, Manchester, Birmingham, Leeds, Liverpool, Bristol, Edinburgh, Glasgow, and many other locations. Our network continues to expand. Contact us to discuss your preferred areas.',
    order: 3
  },

  // Property Investment
  {
    id: 'invest-1',
    category: 'Property Investment',
    question: 'What investment opportunities does Redbricks offer?',
    answer: 'We source various investment opportunities including buy-to-let properties, HMOs, renovation projects, discounted properties, and commercial investments. Each opportunity is presented with available information on rental income, yields, and potential returns.',
    order: 1
  },
  {
    id: 'invest-2',
    category: 'Property Investment',
    question: 'Do you guarantee investment returns?',
    answer: 'No. We do not guarantee or promise specific investment returns, yields, or capital growth. All investments carry risk. We provide available information to help you make informed decisions, but you should conduct your own due diligence and seek independent financial advice.',
    order: 2
  },
  {
    id: 'invest-3',
    category: 'Property Investment',
    question: 'What is the minimum investment amount?',
    answer: 'Investment amounts vary significantly depending on the property type, location, and strategy. We work with investors across different budget ranges. Contact us to discuss your specific investment budget and goals.',
    order: 3
  },

  // General Questions
  {
    id: 'general-1',
    category: 'General Questions',
    question: 'Is Redbricks an estate agent?',
    answer: 'Redbricks operates as a property solutions and investment firm. We connect property owners with buyers and investors, and we also invest in and hold our own property portfolio. We are not a traditional high-street estate agent.',
    order: 1
  },
  {
    id: 'general-2',
    category: 'General Questions',
    question: 'Are you regulated?',
    answer: 'We operate in compliance with relevant UK property legislation and regulations. Our activities are conducted in accordance with current legal requirements for property sourcing and introduction services.',
    order: 2
  },
  {
    id: 'general-3',
    category: 'General Questions',
    question: 'How can I contact Redbricks?',
    answer: 'You can contact us through the Contact page on our website, by email at info@redbricks.co.uk, or by phone at 0161 531 7013. We aim to respond to all enquiries within one business day.',
    order: 3
  }
];

export const getFAQsByCategory = (category) => {
  return faqs.filter(f => f.category === category).sort((a, b) => a.order - b.order);
};

export const getAllFAQCategories = () => {
  const categories = [...new Set(faqs.map(f => f.category))];
  return categories;
};

export const getAllFAQs = () => faqs;