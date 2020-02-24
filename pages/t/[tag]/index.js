import React from 'react'
import Bookmark from '../../../components/bookmark'
import Layout from '../../../components/layout'
import get from 'lodash/get'
import getLinks from '../../../utils/getLinks'
import filterByTag from '../../../utils/filterByTag'
import map from 'lodash/map'

const Index = ({ links, tag }) => {
  return (
    <Layout title={`melkat.link - links tagged #${tag}`}>
      {map(links, el => (
        <Bookmark key={el.guid} {...el} />
      ))}
    </Layout>
  )
}

Index.getInitialProps = async function ({ query }) {
  const tag = get(query, 'tag')
  let links = await getLinks()
  links = filterByTag(links, tag)

  return {
    links,
    tag
  }
}

export default Index
