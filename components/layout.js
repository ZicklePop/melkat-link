/** @jsx h */
import { h } from 'preact'
import Head from 'next/head'
import PropTypes from 'prop-types'

const classnames = {
  main: 'measure center sans-serif',
}

const Layout = ({ title, description, children }) => {
  return (
    <main className={classnames.main}>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta property='og:description' content={description} />
        <meta property='og:title' content={title} />
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
      {children}
    </main>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node
}

Layout.defaultProps = {
  title: 'melkat.link - a link blog from Melanie Kat',
  description: 'a link blog from Melanie Kat'
}

export default Layout
