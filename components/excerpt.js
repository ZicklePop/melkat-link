import React from 'react'
import PropTypes from 'prop-types'

const cx = {
  p: 'lh-copy f5'
}

const Excerpt = ({ excerpt }) => {
  if (!excerpt) return null
  return (
    <p className={cx.p}>
      {excerpt}
    </p>
  )
}

Excerpt.propTypes = {
  excerpt: PropTypes.string
}

export default Excerpt
