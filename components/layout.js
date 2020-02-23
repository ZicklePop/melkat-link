import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

const cx = {
  main: 'measure center sans-serif ph2',
  header: 'lh-title fw1 f2',
  headerLink: 'no-underline',
  logo: 'mr2 h3 w3 v-mid',
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
      </Head>
      <style global jsx>
        {`
          body {
            color: #fff;
            background: #000;
          }
          a, a.link {
            color: #0096DB;
          }
          h1 a {
            color: #fff;
          }
          @media (prefers-color-scheme: light) {
            body {
              color: #111;
              background: #fff;
            }
            h1 a {
              color: #111;
            }
        `}
      </style>
      <h1 className={cx.header}>
        <a href='/' className={cx.headerLink}>
          <img src='/static/logo.png' alt='illustration by supasavina' className={cx.logo} />
          {'melkat.link'}
        </a>
      </h1>
      {children}
      <footer className={cx.footer}>
        <p>
          {'a link blog by '}
          <a href='https://melaniekat.com' rel='me'>
            {'melanie kat'}
          </a>
          {' <3'}
        </p>
        <p>
          {'logo by '}
          <a href='https://savinaxu.com'>
            {'savina xu'}
          </a>
          {' • '}
          {'links from '}
          <a href='https://raindrop.io/collection/9554731' rel='me'>
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
  title: 'melkat.link - a link blog by Melanie Kat',
  description: 'a link blog by Melanie Kat',
  className: ''
}

export default Layout
