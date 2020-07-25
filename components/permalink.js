import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const Permalink = ({ id }) => {
  if (!id) return null
  return (
    <Link href='/p/[id]' as={`/p/${id}`}>
      <a title='permalink'>
        {'★'}
      </a>
    </Link>
  )
}

Permalink.propTypes = {
  id: PropTypes.number
}

export default Permalink
