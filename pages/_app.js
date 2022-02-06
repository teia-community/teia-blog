import dynamic from 'next/dynamic'
import { TinaEditProvider } from 'tinacms/dist/edit-state'
const TinaCMS = dynamic(() => import('tinacms'), { ssr: false })
import '@/css/tailwind.css'
import '@/css/prism.css'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

const branch = process.env.NEXT_PUBLIC_EDIT_BRANCH || 'main'
const apiURL = isDevelopment
  ? 'http://localhost:4001/graphql'
  : `https://content.tinajs.io/content/${process.env.NEXT_PUBLIC_TINA_CLIENT_ID}/github/${branch}`

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <LayoutWrapper>
        <TinaEditProvider
          editMode={
            <TinaCMS apiURL={apiURL}>
              <Component {...pageProps} />
            </TinaCMS>
          }
        >
          <Component {...pageProps} />
        </TinaEditProvider>
      </LayoutWrapper>
    </ThemeProvider>
  )
}

export default App
