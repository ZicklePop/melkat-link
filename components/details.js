import React from 'react'
import PropTypes from 'prop-types'
import Domain from './domain'
import Time from './time'

const cx = {
  details: 'ttu lh-copy f6 mb3'
}

const Details = ({ created, domain, seperator }) => {
  if (!created || !domain) return null
  return (
    <p className={cx.details}>
      <Domain domain={domain} />
      {seperator}
      <Time created={created} />
    </p>
  )
}

Details.propTypes = {
  created: PropTypes.string,
  domain: PropTypes.string,
  seperator: PropTypes.string
}

Details.defaultProps = {
  seperator: ' • '
}

export default Details
