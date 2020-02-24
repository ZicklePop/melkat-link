import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import getDate from '../utils/getDate'
import getDescription from '../utils/getDescription'
import getDomain from '../utils/getDomain'
import getTags from '../utils/getTags'
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

const Bookmark = ({ title, link, description, pubDate, category }) => {
  if (!title || !link) return null
  const domain = getDomain(link)
  const tags = getTags(category)
  const { body, image } = getDescription(description)
  const { isoDate, prettyDate } = getDate(pubDate)

  return (
    <article className={cx.article}>
      {image && (
        <div className={cx.imgWrap}>
          <div
            className={cx.img}
            role='img'
            aria-label='Preview image'
            style={{ backgroundImage: `url(${image})` }}
          />
        </div>
      )}
      <h2 className={cx.h2}>
        <a href={link} className={cx.a}>
          {title}
        </a>
      </h2>
      <p className={cx.details}>
        <Link href={`/d/${domain}`}>
          <a>
            {domain}
          </a>
        </Link>
        {' • '}
        <time dateTime={isoDate}>
          {prettyDate}
        </time>
      </p>
      <p className={cx.p}>
        {body}
      </p>

      <ul className={cx.ul}>
        {map(tags, el => (
          <li key={`${pubDate}${el}`} className={cx.li}>
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
  title: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.string,
  pubDate: PropTypes.string,
  category: PropTypes.arrayOf(PropTypes.string)
}

Bookmark.defaultProps = {
  title: '',
  link: '',
  description: '',
  pubDate: '',
  category: []
}

export default Bookmark
