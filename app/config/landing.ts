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
    desc: 'Schema-aware autocomplete, multi-statement execution, SQL formatter, query variables with :placeholders, EXPLAIN visualizer, and saved snippets per engine.',
    stat: 'Full',
    statLabel: 'SQL IDE built in',
    gradient: ['#0078d4', '#00b4d8'],
    icon: 'code',
    highlights: ['Autocomplete', 'Formatter', 'EXPLAIN', 'Snippets'],
  },
  {
    title: 'Blazing-fast data grid',
    desc: 'Virtual-scrolled grid that renders millions of rows at 60fps. Inline editing, drag-to-select, sticky columns, column stats, row comparison, and copy-paste.',
    stat: '60',
    statLabel: 'fps with 100K+ rows',
    gradient: ['#7B3FA0', '#c084fc'],
    icon: 'edit',
    highlights: ['Virtual scroll', 'Inline edit', 'Drag select', 'Stats'],
  },
  {
    title: 'Secure by default',
    desc: 'OS keychain credential storage, SSH tunnels with key auth, SSL/TLS, and built-in data masking to auto-hide PII columns like email and passwords.',
    stat: 'Zero',
    statLabel: 'passwords on disk',
    gradient: ['#059669', '#4ec9b0'],
    icon: 'shield',
    highlights: ['Keychain', 'SSH tunnel', 'SSL/TLS', 'Data masking'],
  },
  {
    title: 'Keyboard-first workflow',
    desc: '36 keyboard shortcuts, command palette, multi-connection tabs, session restore — hands never leave the keyboard.',
    stat: '36',
    statLabel: 'shortcuts',
    gradient: ['#d97706', '#fbbf24'],
    icon: 'keyboard',
    highlights: ['Cmd+P palette', 'Tab restore', 'Quick switch'],
  },
  {
    title: '4 engines, one app',
    desc: 'MySQL, PostgreSQL, SQLite, and Redis with unified UI. Schema diff, foreign key viewer, and engine-specific query support built in.',
    stat: '4',
    statLabel: 'engines',
    gradient: ['#dc2626', '#f87171'],
    icon: 'database',
    highlights: ['MySQL', 'PostgreSQL', 'SQLite', 'Redis'],
  },
  {
    title: 'Import & export everything',
    desc: 'Export to CSV, JSON, SQL. Import CSV with column mapping. Copy rows as PHP, Python, Go, Ruby, YAML. Full database backup & restore.',
    stat: '6+',
    statLabel: 'export formats',
    gradient: ['#e855a0', '#fb7185'],
    icon: 'feather',
    highlights: ['CSV', 'JSON', 'SQL', 'Code copy'],
  },
  {
    title: 'Metrics Board',
    desc: 'Write SQL, pick a chart type, and see live visualizations on a dashboard. Bar, line, pie, and doughnut charts with auto-refresh — your data, always up to date.',
    stat: '5',
    statLabel: 'chart types',
    gradient: ['#06b6d4', '#22d3ee'],
    icon: 'chart',
    highlights: ['Bar', 'Line', 'Pie', 'Auto-refresh'],
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
      'Metrics Board with auto-refresh',
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
