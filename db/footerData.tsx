import { useRef } from 'react';

export const footerSections = [
  {
    name: 'Sections',
    a: {
      name: 'About',
      path: '/',
    },
    b: {
      name: 'Services',
      path: '/',
    },
    c: {
      name: 'FAQs',
      path: 'faq',
    },
  },
  {
    name: 'Industries',

    a: {
      name: 'Transport',
      path: '/',
    },
    b: {
      name: 'Education',
      path: '/',
    },
    c: {
      name: 'Hospitality',
      path: '/',
    },
  },

  {
    name: 'Legal',

    a: {
      name: 'Consent & Cookies',
      path: '/',
    },
    b: {
      name: 'Privacy Policy',
      path: 'privacypolicy',
    },
    c: {
      name: 'Terms of Service',
      path: '/',
    },
  },
];

export const FooterLinks = () => {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const transportRef = useRef<HTMLDivElement | null>(null);
  const educationRef = useRef<HTMLDivElement | null>(null);
  const hospitalityRef = useRef<HTMLDivElement | null>(null);

  const footerSections = [
    {
      name: 'Sections',
      a: {
        name: 'About',
        path: '',
        refType: homeRef,
      },
      b: {
        name: 'Services',
        path: '',
        refType: servicesRef,
      },
      c: {
        name: 'FAQs',
        path: '/faq',
        refType: null,
      },
    },
    {
      name: 'Industries',

      a: {
        name: 'Transport',
        path: '',
        refType: transportRef,
      },
      b: {
        name: 'Education',
        path: '',
        refType: educationRef,
      },
      c: {
        name: 'Hospitality',
        path: '',
        refType: hospitalityRef,
      },
    },

    {
      name: 'Legal',

      a: {
        name: 'Consent & Cookies',
        path: '',
        refType: null,
      },
      b: {
        name: 'Privacy Policy',
        path: '/privacypolicy',
        refType: null,
      },
      c: {
        name: 'Terms of Service',
        path: '',
        refType: null,
      },
    },
  ];

  return {
    footerSections,
    homeRef,
    servicesRef,
    transportRef,
    educationRef,
    hospitalityRef,
  };
};
