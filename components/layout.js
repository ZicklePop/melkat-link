import PropTypes from 'prop-types'
import Head from 'next/head'
import Link from 'next/link'

const cx = {
  main: 'measure measure-wide-l center sans-serif ph2',
  header: 'lh-title fw1 f2 pb3-l mb4-l',
  headerLink: 'no-underline',
  logo: 'mr2 h3 v-mid',
  footer: 'lh-copy tc'
}

const Layout = ({ title, description, children, className, cover }) => {
  return (
    <main className={`${cx.main} ${className}`}>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content={description} />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta property='og:description' content={description} />
        <meta property='og:title' content={title} />
        <meta name='twitter:image' content={cover} />
        <meta name='twitter:image:alt' content={description} />
        <meta property='og:image' content={cover} />
      </Head>
      <style global jsx>
        {`
          body {
            color: #fff;
            background: #000;
          }
          a {
            color: #0096DB;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          h1 a {
            color: #fff;
          }
          article {
            border-color: rgb(255,255,255,.25);
          }
          .cv-auto {
            content-visibility: auto;
          }
          @media (prefers-color-scheme: light) {
            body {
              color: #111;
              background: #fff;
            }
            h1 a {
              color: #111;
            }
            article {
              border-color: rgba(0,0,0,.12);
            }
        `}
      </style>
      <h1 className={cx.header}>
        <Link href='/'>
          <a className={cx.headerLink}>
            <img src='/logo.png' alt='illustration by supasavina' className={cx.logo} />
            melkat.link
          </a>
        </Link>
      </h1>
      {children}
      <footer className={cx.footer}>
        <p>
          {'a link blog by '}
          <a href='https://melaniekat.com' rel='me'>
            melanie kat
          </a>
          {' <3'}
        </p>
        <p>
          {'logo by '}
          <a href='https://www.savinaxu.com'>
            savina xu
          </a>
          {' • '}
          {'links from '}
          <a href='https://raindrop.io/collection/9554731' rel='me'>
            raindrop.io
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
  className: PropTypes.string,
  cover: PropTypes.string
}

Layout.defaultProps = {
  title: 'melkat.link - a link blog by Melanie Kat',
  description: 'a link blog by Melanie Kat',
  className: '',
  cover: '/cover.png'
}

export default Layout
