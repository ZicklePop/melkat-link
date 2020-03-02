import fetch from 'isomorphic-unfetch'
import get from 'lodash/get'
import reduceDrops from '../../utils/reduceDrops'

const COLLECTION_ID = 9554731
const API = 'https://api.raindrop.io/rest/v1/raindrop/'
const headers = {
  Authorization: `Bearer ${get(process, 'env.RAINDROP_TOKEN', '')}`
}

export default async (req, res) => {
  const id = get(req, 'query.id')
  const apiResponse = await fetch(
    `${API}${id}`,
    { headers }
  )
  const data = await apiResponse.json()
  const out = reduceDrops([get(data, 'item', {})])
  if (get(data, `item.collection['$id']`) !== COLLECTION_ID) {
    res.status(404).json([])
  } else {
    res.status(200).json(out)
  }
}
