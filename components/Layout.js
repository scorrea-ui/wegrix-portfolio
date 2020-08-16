import Head from 'next/head'
import Header from '../components/global/Header'
import Footer from '../components/global/Footer'

export default function Layout({
  children,
  title = 'Santiago Correa | Front End Developer | Portfolio',
  description = "Santiago Correa | Front End Developer | Here's a couple projects that I've worked on and what I find super important.",
  url = 'https://www.wegrix.com',
  image = 'https://cdn2.hubspot.net/hubfs/7562645/Portfolio/projects/portfolio.png',
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content={description} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={url} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={image} />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content={url} />
        <meta property='twitter:title' content={title} />
        <meta property='twitter:description' content={description} />
        <meta property='twitter:image' content={image} />
        <meta name='theme-color' content='#000000' />
        <link rel='manifest' href='/images/icons/site.webmanifest' />
        <link rel='icon' type='image/png' href='/images/icons/favicon.ico' />
        <link
          rel='icon'
          type='image/png'
          href='/images/icons/favicon-16x16.png'
          sizes='16x16'
        />
        <link
          rel='icon'
          type='image/png'
          href='/images/icons/favicon-32x32.png'
          sizes='32x32'
        />
        <link
          rel='icon'
          type='image/png'
          href='/images/icons/android-chrome-192x192.png'
          sizes='192x192'
        />
        <link
          rel='icon'
          type='image/png'
          href='/images/icons/android-chrome-512x512.png'
          sizes='512x512'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/images/icons/apple-touch-icon.png'
        />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
