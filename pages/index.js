import React from 'react'
import Bookmark from '../components/bookmark'
import Layout from '../components/layout'
import getLinks from '../utils/getLinks'
import map from 'lodash/map'

const Index = ({ links }) => {
  return (
    <Layout>
      {map(links, el => (
        <Bookmark key={el.guid} {...el} />
      ))}
    </Layout>
  )
}

Index.getInitialProps = async function () {
  const links = await getLinks()

  return {
    links
  }
}

export default Index
