import React from 'react'
import Bookmark from '../components/bookmark'
import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'
import get from 'lodash/get'
import map from 'lodash/map'
import parser from 'fast-xml-parser'

const Index = ({ links }) => {
  return (
    <Layout>
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
