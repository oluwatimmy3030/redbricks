export const siteConfig = {
  name: 'Redbricks',
  tagline: 'Connecting Property Owners With The Right Opportunities',
  description: 'At Redbricks, we bring property owners, buyers and investors together through smarter property sourcing and investment opportunities.',
  
  contact: {
    email: 'hello@redbricks.co.uk',
    phone: '+44 (0) 20 7123 4567',
    address: {
      line1: 'Redbricks Property',
      line2: '123 Property Street',
      city: 'London',
      postcode: 'EC1A 1BB',
      country: 'United Kingdom'
    }
  },

  social: {
    linkedin: 'https://linkedin.com/company/redbricks',
    twitter: 'https://twitter.com/redbricks',
    facebook: 'https://facebook.com/redbricks',
    instagram: 'https://instagram.com/redbricks'
  },

  navigation: {
    main: [
      { label: 'Home', href: '/' },
      { 
        label: 'Sell Property', 
        href: '/sell-property',
        dropdown: [
          { label: 'Sell Your Property', href: '/sell-property' },
          { label: 'Property Valuation', href: '/sell-property#valuation' },
          { label: 'Why Sell With Us', href: '/sell-property#why-us' }
        ]
      },
      { 
        label: 'Buy Property', 
        href: '/buy-property',
        dropdown: [
          { label: 'Buy A Property', href: '/buy-property' },
          { label: 'Available Properties', href: '/properties' },
          { label: 'Buyer Registration', href: '/buy-property#register' }
        ]
      },
      { 
        label: 'Investment', 
        href: '/investment-opportunities',
        dropdown: [
          { label: 'Investment Opportunities', href: '/investment-opportunities' },
          { label: 'For Investors', href: '/investors' },
          { label: 'Investment Strategies', href: '/investment-opportunities#strategies' }
        ]
      },
      { 
        label: 'Services', 
        href: '/landlords',
        dropdown: [
          { label: 'Landlord Solutions', href: '/landlords' },
          { label: 'Property Finders', href: '/property-finders' }
        ]
      },
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' }
    ],
    cta: { label: 'Submit Your Property', href: '/sell-property' }
  },

  footer: {
    quickLinks: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'FAQ', href: '/faq' }
    ],
    services: [
      { label: 'Sell Your Property', href: '/sell-property' },
      { label: 'Buy A Property', href: '/buy-property' },
      { label: 'Investment Opportunities', href: '/investment-opportunities' },
      { label: 'For Investors', href: '/investors' },
      { label: 'Landlord Solutions', href: '/landlords' },
      { label: 'Property Finders', href: '/property-finders' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/terms-and-conditions' }
    ]
  },

  seo: {
    defaultTitle: 'Redbricks | Property Sourcing & Investment',
    titleTemplate: '%s | Redbricks',
    defaultDescription: 'Connecting property owners with buyers and investors through smarter property sourcing and investment opportunities.',
    ogImage: '/og-image.jpg',
    twitterHandle: '@redbricks'
  }
};

export const propertyTypes = [
  'House',
  'Apartment',
  'Commercial',
  'Land',
  'Other'
];

export const propertyConditions = [
  'Excellent',
  'Good',
  'Fair',
  'Needs Renovation'
];

export const investmentStrategies = [
  'Buy-to-Let',
  'Buy-to-Flip',
  'HMO (House in Multiple Occupation)',
  'Renovation Projects',
  'Discounted Properties',
  'Rental Investment'
];

export const purchasePurposes = [
  'Home to Live In',
  'Buy-to-Let Investment',
  'Buy-to-Flip',
  'Commercial Use',
  'Other'
];