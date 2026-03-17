import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'AI Kit — Knowledge Hub',
    template: '%s — AI Kit Docs',
  },
  description:
    'Documentation and knowledge hub for ai-kit — auto-generate AI assistant configs tailored to your tech stack.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
