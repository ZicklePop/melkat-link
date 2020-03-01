import get from 'lodash/get'
import map from 'lodash/map'

const reduceDrops = (items) => map(items, el => {
  return {
    _id: get(el, '_id'),
    cover: get(el, 'cover'),
    created: get(el, 'created'),
    domain: get(el, 'domain'),
    excerpt: get(el, 'excerpt'),
    link: get(el, 'link'),
    tags: get(el, 'tags'),
    title: get(el, 'title'),
    type: get(el, 'type')
  }
})

export default reduceDrops
