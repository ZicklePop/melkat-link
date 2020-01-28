/** @jsx h */
import { h } from 'preact'
import PropTypes from 'prop-types'
import pull from 'lodash/pull'
import map from 'lodash/map'
import unescape from 'lodash/unescape'
import trim from 'lodash/trim'

const classnames = {
  article: 'measure pb3 bb b--white-10',
  h2: 'lh-title fw1 f3',
  p: 'lh-copy f5',
  a: 'link underline',
  time: 'lh-copy f6',
  ul: 'list lh-copy pl0 mt0 f6',
  li: 'dib pr1'
}

const Bookmark = ({ title, link, description, pubDate, category }) => {
  return (
    <article className={classnames.article}>
      <h2 className={classnames.h2}>
        <a href={link} className={classnames.a}>
          {title}
        </a>
      </h2>
      <p className={classnames.p}>
        {unescape(description)}
      </p>
      <time datetime={pubDate} className={classnames.time}>
        {pubDate}
      </time>
      <ul className={classnames.ul}>
        {map(pull(category, 'link'), el => (
          <li key={`${pubDate}${el}`} className={classnames.li}>
            {`#${trim(el)} `}
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

export default Bookmark
