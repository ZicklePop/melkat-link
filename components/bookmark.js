import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import formatDate from '../utils/formatDate'
import map from 'lodash/map'

const cx = {
  article: 'measure pb2 bb b--dark-gray',
  h2: 'lh-title fw3 f4 mb3',
  p: 'lh-copy f5',
  a: 'link underline',
  ul: 'list lh-copy pl0 mt0 f6',
  li: 'dib pr1 ttu',
  img: 'aspect-ratio--object cover bg-center h3 w3 br2',
  imgWrap: 'aspect-ratio aspect-ratio--1x1 h3 w3 pa0 ma0 ml2 mb2 fr',
  details: 'ttu lh-copy f6 mb3'
}

const Bookmark = ({ _id, cover, created, domain, excerpt, link, tags, title, type }) => {
  if (!title || !link) return null

  return (
    <article className={cx.article}>
      {cover && (
        <div className={cx.imgWrap}>
          <div
            className={cx.img}
            role='img'
            aria-label='Preview image'
            style={{ backgroundImage: `url(${cover})` }}
          />
        </div>
      )}
      <h2 className={cx.h2}>
        <a href={link} className={cx.a}>
          {title}
        </a>
      </h2>
      <p className={cx.details}>
        <Link href={`/p/${_id}`}>
          <a>
            {'★'}
          </a>
        </Link>
        {' • '}
        <Link href={`/d/${domain}`}>
          <a>
            {domain}
          </a>
        </Link>
        {' • '}
        <time dateTime={created}>
          {formatDate(created)}
        </time>
      </p>
      <p className={cx.p}>
        {excerpt}
      </p>

      <ul className={cx.ul}>
        <li className={cx.li}>
          <Link href={`/c/${type}`}>
            <a>
              {`#${type} `}
            </a>
          </Link>
        </li>
        {map(tags, el => (
          <li key={`${created}${el}`} className={cx.li}>
            <Link href={`/t/${el}`}>
              <a>
                {`#${el} `}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  )
}

Bookmark.propTypes = {
  _id: PropTypes.string,
  cover: PropTypes.string,
  created: PropTypes.string,
  domain: PropTypes.string,
  excerpt: PropTypes.string,
  link: PropTypes.string,
  tags: PropTypes.string,
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
