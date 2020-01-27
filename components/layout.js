/** @jsx h */
import { h } from 'preact'
import Head from 'next/head'
import PropTypes from 'prop-types'

const Layout = ({ title, description, Children }) => {
  return (
    <main>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta property='og:description' content={description} />
        <meta property='og:title' content={title} />
      </Head>
      {Children}
    </main>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  Children: PropTypes.node
}

Layout.defaultProps = {
  title: 'melkat.link - a link blog from Melanie Kat',
  description: 'a link blog from Melanie Kat'
}

export default Layout
