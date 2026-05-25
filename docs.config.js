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
      .sd-card, .sd-card * {
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

      /* Landing: replace headline text with capsule logo */
      .sd-landing-title {
        font-size: 0 !important;
        color: transparent !important;
        line-height: 0 !important;
        margin-bottom: 24px !important;
      }
      .sd-landing-title::before {
        content: '';
        display: block;
        width: 56px;
        height: 56px;
        margin: 0 auto 16px;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cg transform='rotate(90 256 256)'%3E%3Cpath fill='%23808080' d='M256 512c-96.495 0-175-78.505-175-175V175C81 78.505 159.505 0 256 0s175 78.505 175 175v162c0 96.495-78.505 175-175 175zm0-422c-46.869 0-85 38.131-85 85v162c0 46.869 38.131 85 85 85s85-38.131 85-85V175c0-46.869-38.131-85-85-85z'/%3E%3Cpath fill='%23505050' d='M256 0v90c46.869 0 85 38.131 85 85v162c0 46.869-38.131 85-85 85v90c96.495 0 175-78.505 175-175V175C431 78.505 352.495 0 256 0z'/%3E%3C/g%3E%3C/svg%3E");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }

      /* Landing cards */
      .sd-landing-cards {
        display: grid !important;
        grid-template-columns: repeat(4, 1fr) !important;
        gap: 10px !important;
        max-width: 600px !important;
        margin: 0 auto !important;
      }
      .sd-landing-card:last-child {
        grid-column: 1 / -1;
        border: none !important;
        background: none !important;
        box-shadow: none !important;
        padding: 0 !important;
        margin-top: 40px !important;
        justify-content: center;
      }
      .sd-landing-card:last-child .sd-landing-card-icon {
        display: none !important;
      }
      .sd-landing-card:last-child .sd-landing-card-title {
        font-size: 12px !important;
        font-weight: 500 !important;
        color: var(--sd-text-muted) !important;
      }
      .sd-landing-card:last-child .sd-landing-card-desc {
        display: none !important;
      }
      .sd-landing-card:last-child:hover {
        background: none !important;
        transform: none !important;
        border-color: transparent !important;
      }
      .sd-landing-card:last-child .sd-landing-card-title:hover {
        color: var(--sd-accent) !important;
      }
      .sd-landing-card {
        text-align: center !important;
        align-items: center !important;
        padding: 16px 12px !important;
      }
      .sd-landing-card-title {
        font-size: 13px !important;
      }
      .sd-landing-card-desc {
        font-size: 11px !important;
        opacity: 0.7 !important;
      }
      @media (max-width: 600px) {
        .sd-landing-cards {
          grid-template-columns: repeat(2, 1fr) !important;
        }
      }
    `,
  },

  landing: {
    headline: '0cmplx',
    description: 'Upload your API spec or database schema. Generate MCP servers or execute LLM-written scripts in a secure sandbox. Any LLM. OWASP traps included.',
    primaryAction: { label: 'Get Started', href: '/introduction' },
    secondaryAction: { label: 'What is 0cmplx?', href: '/concepts/what-is-0cmplx' },
    cards: [
      { title: 'MCP', description: 'Test agents', icon: 'plug', href: '/concepts/what-is-mcp' },
      { title: 'API', description: 'Execute scripts', icon: 'zap', href: '/concepts/programmatic-tools' },
      { title: 'SQL', description: 'Query sandbox', icon: 'database', href: '/concepts/programmatic-tools' },
      { title: 'Security', description: 'OWASP traps', icon: 'shield', href: '/concepts/security-testing' },
      { title: '0cmplx vs hosted sandboxes \u2192', description: '', href: '/concepts/0cmplx-vs-code-execution' },
    ],
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
        'concepts/what-is-mcp',
        'concepts/programmatic-tools',
        'concepts/query-composition',
        'concepts/anatomy-of-a-tool',
        'concepts/security-testing',
        'concepts/owasp-for-mcp',
        'concepts/0cmplx-vs-code-execution',
      ],
    },
    {
      group: 'Guides',
      pages: [
        'guides/your-first-mcp',
        'guides/from-openapi-spec',
        'guides/running-security-tests',
        'guides/common-vulnerabilities',
        'guides/going-to-production',
      ],
    },
    {
      group: 'Reference',
      pages: [
        'reference/cli',
        'reference/configuration',
        'reference/sandbox',
        'reference/security-traps',
      ],
    },
  ],

  tabs: [
    { label: 'Documentation', href: '/introduction' },
    { label: 'Guides', href: '/guides/your-first-mcp' },
    { label: 'Reference', href: '/reference/cli' },
  ],

  links: [],
};
