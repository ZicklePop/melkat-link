import React from 'react'
import Bookmark from '../components/bookmark'
import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'
import filter from 'lodash/filter'
import forEach from 'lodash/forEach'
import get from 'lodash/get'
import lowerCase from 'lodash/lowerCase'
import map from 'lodash/map'
import parser from 'fast-xml-parser'
import pull from 'lodash/pull'
import sortedUniq from 'lodash/sortedUniq'
import trim from 'lodash/trim'

const Index = ({ links, tags }) => {
  return (
    <Layout>
      {map(links, el => (
        <Bookmark key={el.guid} {...el} />
      ))}
    </Layout>
  )
}

Index.getInitialProps = async function ({ query }) {
  const res = await fetch('https://raindrop.io/collection/9554731/feed')
  const data = await res.text()
  const xml = parser.validate(data) ? parser.parse(data) : {}
  let links = get(xml, 'rss.channel.item', [])

  const search = lowerCase(get(query, 'q'))
  if (search) {
    links = filter(links, el => (
      lowerCase(
        `${get(el, 'title', '')}${get(el, 'description', '')}`
      ).indexOf(search) >= 0
    ))
  }

  const tagFilter = lowerCase(get(query, 't'))
  if (tagFilter) {
    links = filter(links, el =>
      get(el, 'category', []).join('').indexOf(tagFilter) >= 0
    )
  }

  let tags = []
  forEach(links, el => (
    forEach(
      pull(el.category, 'link'),
      el => tags.push(trim(el))
    )
  ))
  tags = sortedUniq(tags)

  return {
    links,
    search,
    tags
  }
}

export default Index
