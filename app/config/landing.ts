export const ENGINES = [
  { abbr: 'Ms', name: 'MySQL', color: '#E6922E' },
  { abbr: 'Pg', name: 'PostgreSQL', color: '#336791' },
  { abbr: 'Re', name: 'Redis', color: '#8B1A1A' },
  { abbr: 'Sl', name: 'SQLite', color: '#7B3FA0' },
  { abbr: 'Mg', name: 'MongoDB', color: '#116149', soon: true },
  { abbr: 'Ss', name: 'SQL Server', color: '#9B9B9B', soon: true },
] as const

export const FEATURES = [
  {
    icon: '⚡',
    title: 'Instant startup',
    desc: 'Cold start in under 2 seconds. Scroll million-row result sets at 60fps. Rust gives you native speed without the native complexity.',
    stat: '< 2s',
    statLabel: 'Cold start',
  },
  {
    icon: '🪶',
    title: 'Tiny footprint',
    desc: 'The entire app is 15MB — smaller than a single DBeaver update. Uses your OS native webview instead of shipping a whole browser.',
    stat: '15 MB',
    statLabel: 'App size',
  },
  {
    icon: '🔐',
    title: 'Secure by default',
    desc: 'Credentials live in your OS keychain, never on disk. SSH tunnels built in. Connect to production without worrying about leaks.',
    stat: '0',
    statLabel: 'Passwords on disk',
  },
  {
    icon: '🎹',
    title: 'Keyboard-first',
    desc: 'Cmd+K to switch connections, Cmd+Enter to run queries, Tab through cells. 30+ shortcuts so you rarely need your mouse.',
    stat: '30+',
    statLabel: 'Shortcuts',
  },
] as const

export const COMPARISONS = [
  { name: 'Dibiku', price: 'Free / $8/mo', size: '~15 MB', ram: '~80 MB', speed: 'Instant', highlight: true },
  { name: 'Client T', price: '$89', size: '~30 MB', ram: '~120 MB', speed: 'Fast', highlight: false },
  { name: 'Client D', price: 'Free / $21/mo', size: '~400 MB', ram: '~800 MB', speed: 'Slow', highlight: false },
  { name: 'Client G', price: '$25/mo', size: '~900 MB', ram: '~1.2 GB', speed: 'Slow', highlight: false },
] as const

export const PRICING = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    desc: 'Everything you need for personal projects and local development',
    features: [
      'Up to 10 connections',
      'MySQL, PostgreSQL, SQLite, Redis',
      'Query editor with autocomplete',
      'Inline cell editing',
      'CSV export',
      'Dark & light themes',
    ],
    cta: 'Download Free',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$8',
    period: '/month',
    desc: 'For developers who work with multiple databases daily',
    features: [
      'Unlimited connections',
      'SSH tunnel & SSL support',
      'Export to CSV, JSON, SQL',
      'Full query history',
      'Unlimited tabs & saved queries',
      'Cloud sync across devices',
      'Priority support',
    ],
    cta: 'Start 14-day Free Trial',
    highlight: true,
  },
] as const

export const STATS = [
  { value: 15, suffix: 'MB', label: 'App size' },
  { value: 2, suffix: 's', label: 'Cold start' },
  { value: 60, suffix: 'fps', label: 'Scroll perf' },
  { value: 80, suffix: 'MB', label: 'RAM usage' },
] as const

export const DOWNLOAD_LINKS = {
  macArm: '#',
  macIntel: '#',
  windows: '#',
  linuxDeb: '#',
  linuxAppImage: '#',
} as const
