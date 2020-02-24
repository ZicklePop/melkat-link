import React from 'react'
import Bookmark from '../../../components/bookmark'
import Layout from '../../../components/layout'
import get from 'lodash/get'
import getLinks from '../../../utils/getLinks'
import filterByDomain from '../../../utils/filterByDomain'
import map from 'lodash/map'

const Index = ({ links, domain }) => {
  return (
    <Layout title={`melkat.link - links from ${domain}`}>
      {map(links, el => (
        <Bookmark key={el.guid} {...el} />
      ))}
    </Layout>
  )
}

Index.getInitialProps = async function ({ query }) {
  const domain = get(query, 'domain')
  let links = await getLinks()
  links = filterByDomain(links, domain)

  return {
    links,
    domain
  }
}

export default Index
