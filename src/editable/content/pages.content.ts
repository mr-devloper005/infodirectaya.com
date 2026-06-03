import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Fresh articles, sharp reads, and daily ideas',
      description: 'Read latest articles, editor picks, topic collections, and thoughtful commentary in a clean magazine-style experience.',
      openGraphTitle: 'Fresh articles and daily reads',
      openGraphDescription: 'A clean article-first publication for latest stories, features, opinion, guides, and reader-friendly archives.',
      keywords: ['article site', 'online magazine', 'latest articles', 'editorial archive'],
    },
    hero: {
      badge: 'Independent article desk',
      title: ['Read deeper.', 'Find sharper stories.'],
      description: 'Browse latest articles, editor selections, topic-led features, and useful perspectives in a compact publication layout built for reading.',
      primaryCta: { label: 'Read latest articles', href: '/article' },
      secondaryCta: { label: 'Pitch a story', href: '/contact' },
      searchPlaceholder: 'Search articles, authors, topics, and categories',
      focusLabel: 'Focus',
      featureCardBadge: 'today on the desk',
      featureCardTitle: 'Featured articles lead the reading experience.',
      featureCardDescription: 'Recent stories, thoughtful summaries, and clear paths into the archive keep the homepage focused.',
    },
    intro: {
      badge: 'About the platform',
      title: 'Built for reading, browsing, and connecting different kinds of content.',
      paragraphs: [
        'This site brings together timely articles, topic collections, and contributor submissions so readers can move naturally from one useful piece to the next.',
        'Instead of burying articles in oversized layouts, the platform keeps headlines, summaries, images, and archive paths close together for faster browsing.',
        'Whether someone starts with a featured article, a search result, or a related post, they can keep discovering written work without friction.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Reading-first homepage with stronger emphasis on stories and imagery.',
        'Connected sections for latest articles, editor picks, and topic-led reading.',
        'Cleaner browsing rhythm designed to make exploration feel easier.',
        'Lightweight interactions that keep the experience fast and readable.',
      ],
      primaryLink: { label: 'Browse articles', href: '/article' },
      secondaryLink: { label: 'Search archive', href: '/search' },
    },
    cta: {
      badge: 'Start exploring',
      title: 'Explore articles through one connected reading experience.',
      description: 'Move between latest articles, topic collections, related posts, and search through one clear visual system.',
      primaryCta: { label: 'Browse Articles', href: '/article' },
      secondaryCta: { label: 'Contact Sales', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'About the publication',
    title: 'A focused article publication for curious readers.',
    description: `${slot4BrandConfig.siteName} publishes clear, useful articles for readers who want context, perspective, and a smoother way to move through the archive.`,
    paragraphs: [
      'The site is organized like a modern magazine: strong headlines, compact cards, topic sections, readable article pages, and search that helps visitors find the next useful read.',
      'Our editorial experience is built for articles first. Every page supports browsing, publishing, and discovering written pieces without unnecessary clutter.',
      'Readers can move from a featured story to related posts, category collections, and search results while keeping the same visual rhythm across the site.',
    ],
    values: [
      {
        title: 'Article-first structure',
        description: 'Headlines, summaries, image ratios, and article bodies are arranged to make reading and scanning feel natural.',
      },
      {
        title: 'Editorial discovery',
        description: 'Topic cards, search, related posts, and home sections help readers continue from one article to the next.',
      },
      {
        title: 'Clean publishing flow',
        description: 'Logged-in contributors can draft article submissions with title, category, image, summary, and body content.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Pitch an article, ask a question, or reach the editorial desk.',
    description: 'Use this page for article pitches, contributor questions, corrections, partnerships, and reader feedback. Share the angle, deadline, or topic and we will route it to the right person.',
    formTitle: 'Message the editorial team',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search posts, topics, categories, and content across the site.',
    },
    hero: {
      badge: 'Search the article archive',
      title: 'Find the article you need without wandering.',
      description: 'Search by headline, keyword, topic, category, or summary to move quickly through the publication archive.',
      placeholder: 'Search articles by keyword, topic, category, or title',
    },
    resultsTitle: 'Latest articles in the archive',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit new content for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to submit an article.',
      description: 'Use your account to open the article workspace and prepare a clean submission for review.',
    },
    hero: {
      badge: 'Article publishing workspace',
      title: 'Draft a clear article submission.',
      description: 'Add a headline, category, featured image, summary, source link, and full article body for editorial review.',
    },
    formTitle: 'Article details',
    submitLabel: 'Submit article',
    successTitle: 'Article submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Reader and contributor access',
      title: 'Welcome back to your article desk.',
      description: 'Login to continue reading, submit article drafts, and keep your publishing workspace close at hand.',
      formTitle: 'Login to continue',
      submitLabel: 'Login',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Join the publication',
      title: 'Create an account for article submissions.',
      description: 'Sign up to access the article workspace, send story drafts, and keep contributor details ready for future posts.',
      formTitle: 'Create your contributor account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
