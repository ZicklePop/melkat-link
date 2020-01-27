/** @jsx h */
import { h } from 'preact'
import PropTypes from 'prop-types'
import omit from 'lodash/omit'
import map from 'lodash/map'

const Bookmark = ({ title, link, description, pubDate, category }) => {
  return (
    <article>
      <h2>
        <a href={link}>
          {title}
        </a>
      </h2>
      <p>{description}</p>
      <time datetime={pubDate}>{pubDate}</time>
      <ul>
        {map(omit(category, 'link'), el => (
          <li key={`${pubDate}${el}`}>{el}</li>
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
