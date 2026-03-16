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
    title: 'Blazing fast',
    desc: 'Built with Rust. Sub-second startup, 60fps scrolling on million-row tables. No Java, no Electron bloat.',
    stat: '< 2s',
    statLabel: 'Cold start',
  },
  {
    icon: '🪶',
    title: 'Featherweight',
    desc: '15MB binary. Uses your OS native webview — not a bundled browser. Runs cool on your laptop.',
    stat: '15 MB',
    statLabel: 'App size',
  },
  {
    icon: '🔐',
    title: 'Secure by default',
    desc: 'Credentials stored in macOS Keychain. Passwords never touch disk. SSH tunnel support built in.',
    stat: '0',
    statLabel: 'Passwords on disk',
  },
  {
    icon: '🎹',
    title: 'Keyboard-first',
    desc: '30 shortcuts. Cmd+K to switch database, Cmd+Enter to execute, Tab to navigate cells. Never touch your mouse.',
    stat: '30',
    statLabel: 'Shortcuts',
  },
] as const

export const COMPARISONS = [
  { name: 'Dibiku', price: 'Free / $8/mo', size: '~15 MB', ram: '~80 MB', speed: 'Instant', highlight: true },
  { name: 'TablePlus', price: '$89', size: '~30 MB', ram: '~120 MB', speed: 'Fast', highlight: false },
  { name: 'DBeaver', price: 'Free / $21/mo', size: '~400 MB', ram: '~800 MB', speed: 'Slow', highlight: false },
  { name: 'DataGrip', price: '$25/mo', size: '~900 MB', ram: '~1.2 GB', speed: 'Slow', highlight: false },
] as const

export const PRICING = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    desc: 'For personal projects and local development',
    features: [
      '10 connections',
      'All 4 database engines',
      'Query editor with autocomplete',
      'Inline data editing',
      'CSV export',
      'Light & dark themes',
    ],
    cta: 'Download Free',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$8',
    period: '/month',
    desc: 'For professional developers and teams',
    features: [
      'Unlimited connections',
      'SSH tunnel support',
      'Export CSV, JSON, SQL',
      'Unlimited query history',
      'Unlimited tabs & saved queries',
      'Cloud sync across devices',
      'Priority support',
    ],
    cta: 'Start Free Trial',
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
