import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'AI Kit — Make AI Coding Assistants Actually Useful',
    template: '%s — AI Kit Docs',
  },
  description:
    'One command. AI Kit auto-detects your tech stack and generates tailored rules, skills, and agents for Claude Code, Cursor, Windsurf, Aider, and Cline. Zero config. Project-aware AI from the first conversation.',
  keywords: [
    'ai-kit',
    'claude-code',
    'cursor',
    'ai-coding-assistant',
    'developer-tools',
    'CLAUDE.md',
    'cursorrules',
    'ai-agents',
    'code-review',
    'security-audit',
  ],
  openGraph: {
    title: 'AI Kit — Make AI Coding Assistants Actually Useful',
    description:
      'One command. Auto-detect your stack. Generate tailored AI rules, 46 skills, and 10 agents for Claude Code, Cursor, and more.',
    type: 'website',
    url: 'https://ai-kit-docs-beta.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Kit — Make AI Coding Assistants Actually Useful',
    description:
      'One command. Auto-detect your stack. Generate tailored AI rules, 46 skills, and 10 agents.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300..700;1,9..40,300..700&family=Instrument+Sans:wght@400..700&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
