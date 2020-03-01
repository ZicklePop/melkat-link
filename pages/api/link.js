import fetch from 'isomorphic-unfetch'
import get from 'lodash/get'
import reduceDrops from '../../utils/reduceDrops'

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
  res.status(200).json(out)
}
