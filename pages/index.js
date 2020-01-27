/** @jsx h */
import { h } from 'preact'
import Bookmark from '../components/bookmark'
import fetch from 'isomorphic-unfetch'
import get from 'lodash/get'
import Head from 'next/head'
import map from 'lodash/map'
import parser from 'fast-xml-parser'

const Index = ({ links }) => {
  return (
    <main>
      <Head>
        <title>melkat.link - a link blog from Melanie Kat</title>
        <meta name='twitter:title' content='melkat.dev' />
        <meta name='twitter:description' content='melkat codes' />
        <meta property='og:description' content='melkat.dev' />
        <meta property='og:title' content='melkat.dev' />
        <meta name='description' content='a link blog from Melanie Kat' />
      </Head>

      <h1>melkat.link</h1>
      {map(links, el => (
        <Bookmark key={el.guid} {...el} />
      ))}
    </main>
  )
}

Index.getInitialProps = async function () {
  const res = await fetch('https://raindrop.io/collection/9554731/feed')
  const data = await res.text()
  const xml = parser.validate(data) ? parser.parse(data) : {}
  return {
    links: get(xml, 'rss.channel.item', [])
  }
}

export default Index
