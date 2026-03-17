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
    title: 'Pro-grade SQL editor',
    desc: 'CodeMirror-powered editor with autocomplete for tables and columns, multi-statement execution, SQL formatter, query history per connection, and saved queries.',
    stat: 'Full',
    statLabel: 'SQL IDE built in',
    gradient: ['#0078d4', '#00b4d8'],
    icon: 'code',
  },
  {
    title: 'Virtual scrolling data grid',
    desc: 'Scroll through millions of rows at 60fps. Click any cell to edit inline, add or delete rows visually — no UPDATE statements needed.',
    stat: '60fps',
    statLabel: 'with 100K+ rows',
    gradient: ['#7B3FA0', '#c084fc'],
    icon: 'edit',
  },
  {
    title: 'Secure by default',
    desc: 'Passwords stay in your system keychain, never saved as plain files. SSH tunnel support for production access. Connection grouping with import/export.',
    stat: 'Zero',
    statLabel: 'passwords on disk',
    gradient: ['#059669', '#4ec9b0'],
    icon: 'shield',
  },
  {
    title: 'Keyboard-first workflow',
    desc: '30+ shortcuts, Cmd+P command palette, multi-connection tabs, and a multi-database sidebar — your hands never leave the keyboard.',
    stat: '30+',
    statLabel: 'shortcuts built in',
    gradient: ['#d97706', '#fbbf24'],
    icon: 'keyboard',
  },
  {
    title: '4 engines, one app',
    desc: 'MySQL, PostgreSQL, SQLite, and Redis with type-specific viewers for STRING, HASH, LIST, SET, and ZSET. No more juggling tools.',
    stat: '4',
    statLabel: 'engines supported',
    gradient: ['#dc2626', '#f87171'],
    icon: 'database',
  },
  {
    title: 'Visualize & analyze',
    desc: 'ERD/relationship diagrams, slow query detection, table structure viewer, and data generator for testing — all built in.',
    stat: 'ERD',
    statLabel: '& slow query tools',
    gradient: ['#0078d4', '#4ec9b0'],
    icon: 'zap',
  },
  {
    title: 'Import & export everything',
    desc: 'CSV import/export, JSON and SQL export, dark & light themes, auto-update system, and a full settings/preferences panel.',
    stat: '3+',
    statLabel: 'export formats',
    gradient: ['#e855a0', '#fb7185'],
    icon: 'feather',
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
  { value: 4, suffix: '+', label: 'DB engines' },
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
