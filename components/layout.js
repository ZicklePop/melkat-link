import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

const cx = {
  main: 'measure center sans-serif ph2',
  header: 'lh-title fw1 f2',
  footer: 'lh-copy tc'
}

const Layout = ({ title, description, children, className }) => {
  return (
    <main className={`${cx.main} ${className}`}>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta property='og:description' content={description} />
        <meta property='og:title' content={title} />
        <link rel='alternate' type='application/rss+xml' title='melkat.link' href='https://raindrop.io/collection/9554731/feed' />
        <style global jsx>
          {`
            body, a {
              color: #fff;
              background: #000;
            }

            @media (prefers-color-scheme: light) {
              body, a {
                color: #111;
                background: #fff;
              }
            }
          `}
        </style>
      </Head>
      <h1 className={cx.header}>
        {'melkat.link'}
      </h1>
      {children}
      <footer className={cx.footer}>
        <p>
          {'a link blog from '}
          <a href='https://melaniekat.com' rel='me'>
            {'melanie kat'}
          </a>
          {' <3'}
        </p>
        <p>
          {'powered by '}
          <a href='https://raindrop.io'>
            {'raindrop.io'}
          </a>
        </p>
      </footer>
    </main>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
}

Layout.defaultProps = {
  title: 'melkat.link - a link blog from Melanie Kat',
  description: 'a link blog from Melanie Kat',
  className: ''
}

export default Layout
