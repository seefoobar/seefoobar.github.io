import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { useRouter } from 'next/router'

interface Props {
  title: string
  description: string
}

const Seo: React.VFC<Props> = ({ title, description }) => {
  const router = useRouter()
  const offsetTitle = `${title} | ${process.env.NEXT_PUBLIC_SITE_NAME}`

  return (
    <Head>
      <meta charSet='utf-8' />
      <title>{offsetTitle}</title>
      <meta name='description' content={description} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />

      <meta property='og:url' content={process.env.NEXT_PUBLIC_PATH + router.asPath} />
      <meta property='og:type' content={router.pathname === '/' ? 'website' : 'article'} />
      <meta property='og:title' content={offsetTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:site_name' content={process.env.NEXT_PUBLIC_SITE_NAME} />

      <link rel='apple-touch-icon' sizes='180x180' href='/favicons/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='194x194' href='/favicons/favicon-194x194.png' />
      <link rel='icon' type='image/png' sizes='192x192' href='/favicons/android-chrome-192x192.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' />
      <link rel='manifest' href='/favicons/site.webmanifest' />
      <link rel='shortcut icon' href='/favicons/favicon.ico' />
      <meta name='msapplication-TileColor' content='#da532c' />
      <meta name='msapplication-TileImage' content='/favicons/mstile-144x144.png' />
      <meta name='msapplication-config' content='/favicons/browserconfig.xml' />
      <meta name='theme-color' content='#f4a460' />
    </Head>
  )
}

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Seo