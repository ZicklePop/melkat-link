import React from 'react'
import Bookmark from '../../../components/bookmark'
import Layout from '../../../components/layout'
import fetch from 'isomorphic-unfetch'
import get from 'lodash/get'
import map from 'lodash/map'
import { link as API } from '../../../utils/api'

const Index = ({ data, id }) => (
  <Layout
    title={`melkat.link - ${get(data, '[0].title', '')}`}
    description={get(data, '[0].excerpt', '')}
  >
    {map(data, el => (
      <Bookmark key={el.guid} {...el} />
    ))}
  </Layout>
)

Index.getInitialProps = async function ({ query }) {
  const id = get(query, 'id')
  const res = await fetch(`${API}?id=${id}`)
  const data = await res.json()

  return {
    id,
    data
  }
}

export default Index
