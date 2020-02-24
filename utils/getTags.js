import map from 'lodash/map'
import pull from 'lodash/pull'
import trim from 'lodash/trim'
import uniq from 'lodash/uniq'

const getTags = (category) => (
  uniq(map(pull(category, 'link'), el => trim(el)))
)

export default getTags
