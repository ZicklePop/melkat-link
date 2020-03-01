import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const Tag = ({ tag }) => {
  if (!tag) return null
  return (
    <Link href={`/t/${tag}`}>
      <a>
        {`#${tag}`}
      </a>
    </Link>
  )
}

Tag.propTypes = {
  tag: PropTypes.string
}

export default Tag
