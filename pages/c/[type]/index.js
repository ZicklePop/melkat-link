import React from 'react'
import Bookmark from '../../../components/bookmark'
import Layout from '../../../components/layout'
import fetch from 'isomorphic-unfetch'
import get from 'lodash/get'
import map from 'lodash/map'
import { links as API } from '../../../utils/api'

const Index = ({ data, type }) => (
  <Layout title={`melkat.link - links of type ${type}`}>
    {map(data, el => (
      <Bookmark key={el._id} {...el} />
    ))}
  </Layout>
)

Index.getInitialProps = async function ({ query }) {
  const type = get(query, 'type')
  const res = await fetch(`${API}?type=${type}`)
  const data = await res.json()

  return {
    type,
    data
  }
}

export default Index
