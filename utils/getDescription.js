import get from 'lodash/get'
import split from 'lodash/split'

const getDescription = (description) => {
  const desc = split(description, '&lt;br/&gt;')
  const body = get(desc, '[1]', unescape(description))
  const image = get(desc, '[0]', '')
    .replace('&lt;img src=&quot;', '')
    .replace('&quot; /&gt;', '')
    .replace('&lt;screenshot&gt;', '')
  return { body, image }
}

export default getDescription
