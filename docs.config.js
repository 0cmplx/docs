export default {
  name: '0cmplx',
  logo: { light: '/logo/light.svg', dark: '/logo/dark.svg' },
  docsDir: '.',
  favicon: '/favicon.svg',

  theme: {
    accent: '#a0a0a0',
    accentHover: '#c0c0c0',
    font: "'Geist Mono', -apple-system, BlinkMacSystemFont, system-ui, monospace",
    fontHeading: "'Geist Mono', -apple-system, BlinkMacSystemFont, system-ui, monospace",
    fontMono: "'Geist Mono', 'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
    fontUrls: [
      "https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;600;700;800&display=swap",
    ],
    customCss: `
      :root, [data-theme="dark"] {
        --sd-bg: #0a0a0a;
        --sd-bg-card: #141414;
        --sd-bg-surface: #1a1a1a;
        --sd-bg-hover: rgba(255, 255, 255, 0.06);
        --sd-bg-code: #111111;
        --sd-text: #a0a0a0;
        --sd-text-heading: #e5e5e5;
        --sd-text-muted: #606060;
        --sd-text-faint: #404040;
        --sd-border: #1e1e1e;
        --sd-border-light: #2a2a2a;
        --sd-accent-subtle: rgba(255, 255, 255, 0.05);
        --sd-accent-border: rgba(255, 255, 255, 0.15);
        --sd-success: #34d399;
        --sd-success-bg: rgba(52, 211, 153, 0.1);
        --sd-success-border: rgba(52, 211, 153, 0.2);
        --sd-warning: #fbbf24;
        --sd-warning-bg: rgba(251, 191, 36, 0.1);
        --sd-warning-border: rgba(251, 191, 36, 0.2);
        --sd-danger: #f87171;
        --sd-danger-bg: rgba(248, 113, 113, 0.1);
        --sd-danger-border: rgba(248, 113, 113, 0.2);
        --sd-info: #60a5fa;
        --sd-info-bg: rgba(96, 165, 250, 0.1);
        --sd-info-border: rgba(96, 165, 250, 0.2);
        --sd-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
        --sd-shadow: 0 1px 3px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.3);
        --sd-shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.5);
      }

      [data-theme="light"] {
        --sd-bg: #f5f5f5 !important;
        --sd-bg-card: #ffffff !important;
        --sd-bg-surface: #ebebeb !important;
        --sd-bg-hover: rgba(0, 0, 0, 0.04) !important;
        --sd-bg-code: #f0f0f0 !important;
        --sd-text: #404040 !important;
        --sd-text-heading: #171717 !important;
        --sd-text-muted: #737373 !important;
        --sd-text-faint: #a3a3a3 !important;
        --sd-border: #e0e0e0 !important;
        --sd-border-light: #eaeaea !important;
        --sd-accent: #525252 !important;
        --sd-accent-hover: #404040 !important;
        --sd-accent-subtle: rgba(0, 0, 0, 0.04) !important;
        --sd-accent-border: rgba(0, 0, 0, 0.12) !important;
        --sd-success: #059669 !important;
        --sd-success-bg: rgba(5, 150, 105, 0.08) !important;
        --sd-success-border: rgba(5, 150, 105, 0.2) !important;
        --sd-warning: #d97706 !important;
        --sd-warning-bg: rgba(217, 119, 6, 0.08) !important;
        --sd-warning-border: rgba(217, 119, 6, 0.2) !important;
        --sd-danger: #dc2626 !important;
        --sd-danger-bg: rgba(220, 38, 38, 0.08) !important;
        --sd-danger-border: rgba(220, 38, 38, 0.2) !important;
        --sd-info: #2563eb !important;
        --sd-info-bg: rgba(37, 99, 235, 0.08) !important;
        --sd-info-border: rgba(37, 99, 235, 0.2) !important;
        --sd-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05) !important;
        --sd-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04) !important;
        --sd-shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.1) !important;
      }

      pre, .sd-code-block {
        background: var(--sd-bg-code) !important;
        border: 1px solid var(--sd-border-light);
      }
      .sd-prose .shiki span,
      .sd-prose .shiki {
        background-color: transparent !important;
        --shiki-light-bg: transparent !important;
        --shiki-dark-bg: transparent !important;
      }
      code:not(pre code) {
        background: var(--sd-accent-subtle);
        color: var(--sd-accent);
        border-radius: 4px;
        padding: 2px 6px;
      }
      .sd-card:hover {
        border-color: rgba(255, 255, 255, 0.2);
        text-decoration: none !important;
      }
      a[class*="card"],
      a[class*="card"]:hover,
      a[class*="card"] *,
      a[class*="card"]:hover * {
        text-decoration: none !important;
      }
      [data-theme="light"] .sd-card:hover {
        border-color: rgba(0, 0, 0, 0.15);
      }
      ::selection {
        background: rgba(160, 160, 160, 0.3);
      }
      * {
        scrollbar-width: thin;
        scrollbar-color: var(--sd-border) transparent;
      }

    `,
  },

  navigation: [
    {
      group: 'Getting Started',
      pages: ['introduction', 'quickstart'],
    },
    {
      group: 'Concepts',
      pages: [
        'concepts/what-is-0cmplx',
        'concepts/query-composition',
        'concepts/sandbox',
        'concepts/security-testing',
      ],
    },
    {
      group: 'Guides',
      pages: [
        'guides/running-security-tests',
        'guides/going-to-production',
      ],
    },
    {
      group: 'CLI',
      pages: [
        'cli/overview',
        'cli/authentication',
        'cli/connect-schema',
        'cli/context',
        'cli/managing-apps',
        'cli/executing-tools',
        'cli/commands',
        'cli/ci-pipelines',
      ],
    },
    {
      group: 'Reference',
      pages: [
        'reference/security-traps',
      ],
    },
  ],

  tabs: [
    { label: 'Documentation', href: '/introduction' },
    { label: 'Guides', href: '/guides/running-security-tests' },
    { label: 'CLI', href: '/cli/overview' },
    { label: 'Reference', href: '/reference/security-traps' },
  ],

  links: [],
};
