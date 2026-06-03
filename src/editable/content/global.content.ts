import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const globalContent = {
  site: {
    name: slot4BrandConfig.siteName,
    tagline: slot4BrandConfig.tagline || 'Independent reading platform',
    domain: slot4BrandConfig.domain,
    baseUrl: slot4BrandConfig.baseUrl,
  },
  nav: {
    tagline: 'Independent article magazine',
    primaryLinks: [
      { label: 'Articles', href: '/article' },
      { label: 'Search', href: '/search' },
      { label: 'Create', href: '/create' },
      { label: 'Contact', href: '/contact' },
    ],
    actions: {
      primary: { label: 'Start exploring', href: '/' },
      secondary: { label: 'Submit', href: '/contact' },
    },
  },
  footer: {
    tagline: 'Articles, features, opinion, and useful reads',
    description: 'A compact article publication for latest stories, thoughtful features, topic collections, reader notes, and contributor submissions.',
    columns: [
      {
        title: 'Explore',
        links: [
          { label: 'Latest Articles', href: '/article' },
          { label: 'Search Archive', href: '/search' },
          { label: 'Submit Article', href: '/create' },
          { label: 'Editorial Contact', href: '/contact' },
        ],
      },
      {
        title: 'Site',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
    bottomNote: 'Built for clean discovery and connected publishing.',
  },
  commonLabels: {
    readMore: 'Read more',
    viewAll: 'View all',
    explore: 'Explore',
    latest: 'Latest',
    related: 'Related',
    published: 'Published',
  },
} as const
