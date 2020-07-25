import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const Domain = ({ domain }) => {
  if (!domain) return null
  return (
    <Link href='/d/[domain]' as={`/d/${domain}`}>
      <a>
        {domain.replace('www.', '')}
      </a>
    </Link>
  )
}

Domain.propTypes = {
  domain: PropTypes.string
}

export default Domain
