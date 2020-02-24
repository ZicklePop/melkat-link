import filter from 'lodash/filter'
import get from 'lodash/get'
import lowerCase from 'lodash/lowerCase'

const filterByTag = (collection, query) => {
  if (!collection || !query) return []
  const tag = lowerCase(query)
  return filter(collection, el => {
    const tags = lowerCase(get(el, 'category', []).join(''))
    return tags.indexOf(tag) >= 0
  })
}

export default filterByTag
