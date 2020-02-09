import React from 'react'
import PropTypes from 'prop-types'
import pull from 'lodash/pull'
import map from 'lodash/map'
import unescape from 'lodash/unescape'
import trim from 'lodash/trim'
import get from 'lodash/get'
import split from 'lodash/split'
import uniq from 'lodash/uniq'

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
  const desc = split(description, '&lt;br/&gt;')
  const image = get(desc, '[0]', '')
    .replace('&lt;img src=&quot;', '')
    .replace('&quot; /&gt;', '')
  const body = get(desc, '[1]', unescape(description))

  const domain = link
    .replace(/.*:\/\//gi, '')
    .replace('www.', '')
    .split('/')[0]

  const date = new Date(pubDate)
  const isoDate = date.toISOString()
  const prettyDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).format(date)

  return (
    <article className={cx.article}>
      {image !== '&lt;screenshot&gt;' && (
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
        {domain}
        {' • '}
        <time dateTime={isoDate}>
          {prettyDate}
        </time>
      </p>
      <p className={cx.p}>
        {body}
      </p>

      <ul className={cx.ul}>
        {uniq(map(pull(category, 'link'), el => (
          <li key={`${pubDate}${el}`} className={cx.li}>
            {`#${trim(el)} `}
          </li>
        )))}
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

export default Bookmark
