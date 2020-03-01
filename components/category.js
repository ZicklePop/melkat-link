import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const Category = ({ type }) => {
  if (!type) return null
  return (
    <Link href={`/c/${type}`}>
      <a>
        {`#${type} `}
      </a>
    </Link>
  )
}

Category.propTypes = {
  type: PropTypes.string
}

export default Category
