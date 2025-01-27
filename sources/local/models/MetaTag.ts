import { Model } from '@stackbit/types';
export const metadata = {
  openGraph: {
    title: 'Next.js',
    description: 'The React Framework for the Web',
    url: 'https://nextjs.org',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
export const MetaTag: Model = {
  type: 'object',
  name: 'MetaTag',
  label: 'Meta Tag',
  labelField: 'content',
  ogImage: "https://www.hrinnovate.org/static/assets/images/SEO/hr_innovate.png",
  fields: [
    {
      type: 'enum',
      name: 'property',
      label: 'Property',
      required: false,
      hidden: false,
      localized: false,
      options: [
        'og:title',
        'og:type',
        'og:image',
        'og:url',
        'og:description',
        'og:locale',
        'og:site_name',
        'og:video',
        'twitter:card',
        'twitter:site',
        'twitter:creator',
        'twitter:description',
        'twitter:title',
        'twitter:image',
        'twitter:image:alt',
        'twitter:player'
      ]
    },
    {
      type: 'string',
      name: 'content',
      label: 'Content',
      required: false,
      hidden: false,
      localized: false
    }
  ]
};
