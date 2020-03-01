import React from 'react'
import Bookmark from '../../../components/bookmark'
import Layout from '../../../components/layout'
import fetch from 'isomorphic-unfetch'
import get from 'lodash/get'
import map from 'lodash/map'
import { links as API } from '../../../utils/api'

const Index = ({ data, domain }) => (
  <Layout title={`melkat.link - links from ${domain}`}>
    {map(data, el => (
      <Bookmark key={el._id} {...el} />
    ))}
  </Layout>
)

Index.getInitialProps = async function ({ query }) {
  const domain = get(query, 'domain')
  const res = await fetch(`${API}?domain=${domain}`)
  const data = await res.json()

  return {
    domain,
    data
  }
}

export default Index
