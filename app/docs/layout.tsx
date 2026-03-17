import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

const navbar = (
  <Navbar
    logo={
      <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>
        AI Kit
      </span>
    }
    projectLink="https://github.com/mikulgohil/ai-kit"
  />
)

const footer = (
  <Footer>
    <span>
      MIT {new Date().getFullYear()} &copy; Horizontal Digital. Built with{' '}
      <a href="https://nextra.site" target="_blank" rel="noreferrer">
        Nextra
      </a>
      .
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
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {children}
    </Layout>
  )
}
