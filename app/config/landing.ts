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
    title: 'Instant startup',
    desc: 'Open the app and start querying in under 2 seconds. Scroll through millions of rows without a single stutter.',
    stat: '< 2s',
    statLabel: 'to query-ready',
    gradient: ['#0078d4', '#00b4d8'],
    icon: 'zap',
  },
  {
    title: 'Tiny footprint',
    desc: 'Just 15MB — smaller than most app updates. No hidden downloads, no waiting. Install once and you\'re done.',
    stat: '15 MB',
    statLabel: 'total app size',
    gradient: ['#7B3FA0', '#c084fc'],
    icon: 'feather',
  },
  {
    title: 'Secure by default',
    desc: 'Your passwords stay in your system\'s secure vault, never saved as files. Connect to production with confidence.',
    stat: 'Zero',
    statLabel: 'passwords on disk',
    gradient: ['#059669', '#4ec9b0'],
    icon: 'shield',
  },
  {
    title: 'Keyboard-first',
    desc: 'Switch databases, run queries, navigate cells — all from the keyboard. 30+ shortcuts so your hands never leave the keys.',
    stat: '30+',
    statLabel: 'shortcuts built in',
    gradient: ['#d97706', '#fbbf24'],
    icon: 'keyboard',
  },
  {
    title: 'Multi-engine support',
    desc: 'One app for MySQL, PostgreSQL, SQLite, and Redis. No need to juggle different tools for different databases.',
    stat: '4+',
    statLabel: 'engines supported',
    gradient: ['#dc2626', '#f87171'],
    icon: 'database',
  },
  {
    title: 'Smart query editor',
    desc: 'Syntax highlighting, autocomplete for table and column names, query history, and saved queries — all built in.',
    stat: '500+',
    statLabel: 'queries remembered',
    gradient: ['#0078d4', '#4ec9b0'],
    icon: 'code',
  },
  {
    title: 'Edit data visually',
    desc: 'Click any cell to edit, add or delete rows inline — no need to write UPDATE statements by hand. See changes before you commit.',
    stat: '1-click',
    statLabel: 'inline editing',
    gradient: ['#e855a0', '#fb7185'],
    icon: 'edit',
  },
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
