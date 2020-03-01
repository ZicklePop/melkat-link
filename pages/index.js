import React from 'react'
import Bookmark from '../components/bookmark'
import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'
import map from 'lodash/map'
import { links as API } from '../utils/api'

const Index = ({ data }) => (
  <Layout>
    {map(data, el => (
      <Bookmark key={el._id} {...el} />
    ))}
  </Layout>
)

Index.getInitialProps = async function () {
  const res = await fetch(API)
  const data = await res.json()
  return {
    data
  }
}

export default Index
