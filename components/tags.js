import React from 'react'
import PropTypes from 'prop-types'
import Category from './category'
import Permalink from './permalink'
import Tag from './tag'
import map from 'lodash/map'

const cx = {
  li: 'dib pr1 ttu',
  ul: 'list lh-copy pl0 mt0 f6'
}

const Tags = ({ id, tags, type }) => {
  if (!id || !tags || !type) return null
  return (
    <ul className={cx.ul}>
      <li className={cx.li}>
        <Permalink id={id} />
      </li>
      <li className={cx.li}>
        <Category type={type} />
      </li>
      {map(tags, el => (
        <li key={`${id}${el}`} className={cx.li}>
          <Tag tag={el} />
        </li>
      ))}
    </ul>
  )
}

Tags.propTypes = {
  id: PropTypes.number,
  tags: PropTypes.arrayOf(PropTypes.string),
  type: PropTypes.string
}

export default Tags
