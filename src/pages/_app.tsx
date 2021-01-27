import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '@styles/theme'
import GlobalStyle from '@styles/GlobalStyle'
import Head from 'next/head'
import Container from '@components/atoms/Container'
import { PageProps } from '@interfaces/query'

interface AppCustomProps extends AppProps {
  footerProps: PageProps
}

function App({ Component, pageProps }: AppCustomProps) {
  return (
    <>
      <FirstHead />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container footerProps={pageProps.footerProps}>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  )
}

function FirstHead() {
  // TODO: FirstHead
  return (
    <Head>
      {/* FONTS */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;0,600;0,900;1,300;1,600;1,900&display=swap"
        rel="stylesheet"
      />
      {/* FAVICON */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="any" />
      <link rel="apple-touch-icon" href="/apple.png" />
      <link rel="manifest" href="/manifest.webmanifest"></link>
      {/* META */}
      {/* Primary Meta Tags */}
      <title key="title">FeGomes Podcast</title>
      <meta name="title" key="meta-title" content="FeGomes Podcast" />
      <meta
        name="description"
        key="meta-description"
        content="Tratamento, edição e sonorização de áudio"
      />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://fegomes.com.br" />
      <meta property="og:title" key="og:title" content="FeGomes Podcast" />
      <meta
        property="og:description"
        key="og:description"
        content="Tratamento, edição e sonorização de áudio"
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/femaxpe/image/upload/v1611773626/Novo_Projeto_zgbxuy.png"
      />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://fegomes.com.br" />
      <meta property="twitter:title" key="tw:title" content="FeGomes Podcast" />
      <meta
        property="twitter:description"
        key="tw:description"
        content="Tratamento, edição e sonorização de áudio"
      />
      <meta
        property="twitter:image"
        content="https://res.cloudinary.com/femaxpe/image/upload/v1611773626/Novo_Projeto_zgbxuy.png"
      />
      <meta name="keywords" content="portfolio, podcast, audio, editing" />
      <meta name="author" content="Angelo Dias <oiangelodias@gmail.com>" />
      <meta name="url" content="https://fegomes.com.br" />
    </Head>
  )
}

export default App
