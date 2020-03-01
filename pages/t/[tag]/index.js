import React from 'react'
import Bookmark from '../../../components/bookmark'
import Layout from '../../../components/layout'
import fetch from 'isomorphic-unfetch'
import get from 'lodash/get'
import map from 'lodash/map'
import { links as API } from '../../../utils/api'

const Index = ({ data, tag }) => (
  <Layout title={`melkat.link - links tagged ${tag}`}>
    {map(data, el => (
      <Bookmark key={el._id} {...el} />
    ))}
  </Layout>
)

Index.getInitialProps = async function ({ query }) {
  const tag = get(query, 'tag')
  const res = await fetch(`${API}?tag=${tag}`)
  const data = await res.json()

  return {
    tag,
    data
  }
}

export default Index
