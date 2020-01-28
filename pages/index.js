/** @jsx h */
import { h } from 'preact'
import Bookmark from '../components/bookmark'
import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'
import get from 'lodash/get'
import map from 'lodash/map'
import parser from 'fast-xml-parser'

const classnames = {
  h1: 'lh-title fw1 f2',
}

const Index = ({ links }) => {
  return (
    <Layout>
      <h1 className={classnames.h1}>
        {'melkat.link'}
      </h1>
      {map(links, el => (
        <Bookmark key={el.guid} {...el} />
      ))}
    </Layout>
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
