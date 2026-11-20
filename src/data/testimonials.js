export const testimonials = [
  {
    id: 1,
    name: 'Sample Customer',
    role: 'Property Seller',
    company: 'London',
    content: 'Redbricks made selling our property straightforward and stress-free. Their team connected us with serious buyers quickly and handled all the communication professionally. We achieved a great price and the process was smooth from start to finish.',
    rating: 5,
    isSample: true
  },
  {
    id: 2,
    name: 'Sample Investor',
    role: 'Property Investor',
    company: 'Manchester',
    content: 'As an investor, I\'ve worked with several sourcing agents but Redbricks stands out for their transparency and quality of opportunities. They take time to understand your criteria and only present deals that match. The HMO property they sourced for us has performed excellently.',
    rating: 5,
    isSample: true
  },
  {
    id: 3,
    name: 'Sample Buyer',
    role: 'First-Time Buyer',
    company: 'Birmingham',
    content: 'Buying my first home felt overwhelming until I spoke with Redbricks. They listened to what I needed, showed me properties that actually matched my criteria, and guided me through every step. I\'m now settled in a home I love.',
    rating: 5,
    isSample: true
  },
  {
    id: 4,
    name: 'Sample Landlord',
    role: 'Portfolio Landlord',
    company: 'Leeds',
    content: 'Redbricks have helped me expand my portfolio with three properties over the past two years. Their market knowledge is impressive and they\'re always upfront about the numbers. The tenanted investment they found in Headingley has been a great addition.',
    rating: 5,
    isSample: true
  },
  {
    id: 5,
    name: 'Sample Finder',
    role: 'Property Finder',
    company: 'Bristol',
    content: 'The Property Finder programme has been a fantastic way to earn additional income alongside my full-time job. Redbricks provide excellent support and training, and their referral process is transparent. I\'ve referred several properties that have gone on to complete.',
    rating: 5,
    isSample: true
  },
  {
    id: 6,
    name: 'Sample Client',
    role: 'Overseas Investor',
    company: 'Singapore',
    content: 'Investing in UK property from overseas can be daunting, but Redbricks made it seamless. They handled viewings virtually, provided detailed due diligence packs, and coordinated everything with solicitors. The buy-to-let in Birmingham they recommended has exceeded expectations.',
    rating: 5,
    isSample: true
  },
  {
    id: 7,
    name: 'Sample Vendor',
    role: 'Property Owner',
    company: 'Edinburgh',
    content: 'We needed to sell quickly due to relocation and Redbricks delivered. They had interested buyers within the first week and managed the whole process efficiently. Their communication was excellent throughout and we completed within our tight timeframe.',
    rating: 5,
    isSample: true
  },
  {
    id: 8,
    name: 'Sample Investor',
    role: 'Experienced Investor',
    company: 'Liverpool',
    content: 'The discounted property opportunity Redbricks presented in Liverpool was exactly what I was looking for. They provided full transparency on the works needed and the potential uplift. Six months post-refurbishment and the property has already increased significantly in value.',
    rating: 5,
    isSample: true
  }
];

export const getTestimonials = () => testimonials;

export const getFeaturedTestimonials = (limit = 3) => {
  return testimonials.slice(0, limit);
};

export const getTestimonialsByCategory = (category) => {
  const categoryMap = {
    seller: ['Property Seller', 'Property Owner'],
    buyer: ['First-Time Buyer'],
    investor: ['Property Investor', 'Experienced Investor', 'Overseas Investor', 'Portfolio Landlord'],
    landlord: ['Portfolio Landlord'],
    finder: ['Property Finder']
  };
  
  const roles = categoryMap[category] || [];
  return testimonials.filter(t => roles.includes(t.role));
};