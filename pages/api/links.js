import fetch from 'isomorphic-unfetch'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import reduceDrops from '../../utils/reduceDrops'

const COLLECTION_ID = get(process, 'env.RAINDROP_COLLECTION_ID', '')
const API = `https://api.raindrop.io/rest/v1/raindrops/${COLLECTION_ID}?perpage=50`
const headers = {
  Authorization: `Bearer ${get(process, 'env.RAINDROP_TOKEN', '')}`
}

async function links (req, res) {
  const page = get(req, 'query.page', 0)

  const domain = get(req, 'query.domain')
  const tag = get(req, 'query.tag')
  const type = get(req, 'query.type')
  const word = get(req, 'query.word')

  let searchQuery = ''
  const searchParameter = []
  if (domain) {
    searchParameter.push({ key: 'domain', val: domain })
  }
  if (tag) {
    searchParameter.push({ key: 'tag', val: tag })
  }
  if (type) {
    searchParameter.push({ key: 'type', val: type })
  }
  if (word) {
    searchParameter.push({ key: 'word', val: word })
  }
  if (!isEmpty(searchParameter)) {
    searchQuery = `&search=${JSON.stringify(searchParameter)}`
  }

  const apiResponse = await fetch(
    `${API}&page=${page}${searchQuery}`,
    { headers }
  )
  const data = await apiResponse.json()
  const out = reduceDrops(get(data, 'items', []))
  res.status(200).json(out)
}

export default links

