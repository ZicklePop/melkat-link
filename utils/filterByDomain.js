import filter from 'lodash/filter'
import get from 'lodash/get'
import getDomain from './getDomain'

const filterByDomain = (collection, query) => {
  if (!collection || !query) return []

  return filter(collection, el =>
    getDomain(get(el, 'link', '')).indexOf(query) >= 0
  )
}

export default filterByDomain
