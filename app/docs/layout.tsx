import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './custom.css'

const navbar = (
  <Navbar
    logo={
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <span
          style={{
            width: '26px',
            height: '26px',
            background: 'linear-gradient(135deg, #e8a84c, #c4883a)',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '13px',
            fontWeight: 700,
            color: '#0a0a0c',
            lineHeight: 1,
          }}
        >
          A
        </span>
        <span
          style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontWeight: 750,
            fontSize: '1.1rem',
            letterSpacing: '-0.02em',
          }}
        >
          AI Kit
        </span>
      </span>
    }
    projectLink="https://github.com/mikulgohil/ai-kit"
  />
)

const footer = (
  <Footer>
    <span
      style={{
        fontSize: '0.8rem',
        color: '#5c5c6a',
      }}
    >
      MIT {new Date().getFullYear()} &copy; Mikul Gohil
      &nbsp;&middot;&nbsp;
      <a
        href="https://www.npmjs.com/package/@mikulgohil/ai-kit"
        target="_blank"
        rel="noreferrer"
        style={{ color: '#9494a0', textDecoration: 'none' }}
      >
        npm
      </a>
      &nbsp;&middot;&nbsp;
      <a
        href="/"
        style={{ color: '#9494a0', textDecoration: 'none' }}
      >
        Home
      </a>
    </span>
  </Footer>
)

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Layout
      navbar={navbar}
      pageMap={await getPageMap('/docs')}
      docsRepositoryBase="https://github.com/mikulgohil/ai-kit-docs/tree/main/content"
      footer={footer}
      sidebar={{ defaultMenuCollapseLevel: 1 }}
      editLink="Edit this page on GitHub"
      darkMode={false}
      nextThemes={{ defaultTheme: 'dark', forcedTheme: 'dark' }}
    >
      {children}
    </Layout>
  )
}
