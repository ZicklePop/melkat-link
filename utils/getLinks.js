import fetch from 'isomorphic-unfetch'
import get from 'lodash/get'
import parser from 'fast-xml-parser'

async function getLinks () {
  const res = await fetch('https://raindrop.io/collection/9554731/feed')
  const data = await res.text()
  const xml = parser.validate(data) ? parser.parse(data) : {}
  return get(xml, 'rss.channel.item', [])
}

export default getLinks
