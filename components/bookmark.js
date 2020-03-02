import React from 'react'
import PropTypes from 'prop-types'
import Details from './details'
import Excerpt from './excerpt'
import Image from './image'
import Tags from './tags'
import Title from './title'

const cx = {
  article: 'measure pb2 bb'
}

const Bookmark = ({ _id, cover, created, domain, excerpt, link, tags, title, type }) => {
  if (!title || !link) return null
  return (
    <article className={cx.article}>
      <Image cover={cover} />
      <Title title={title} link={link} />
      <Details domain={domain} created={created} />
      <Excerpt excerpt={excerpt} />
      <Tags id={_id} tags={tags} type={type} />
    </article>
  )
}

Bookmark.propTypes = {
  _id: PropTypes.number,
  cover: PropTypes.string,
  created: PropTypes.string,
  domain: PropTypes.string,
  excerpt: PropTypes.string,
  link: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  type: PropTypes.string
}

Bookmark.defaultProps = {
  created: '',
  domain: '',
  excerpt: '',
  tags: [],
  type: ''
}

export default Bookmark
