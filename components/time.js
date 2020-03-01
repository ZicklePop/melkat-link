import React from 'react'
import PropTypes from 'prop-types'
import formatDate from '../utils/formatDate'

const Time = ({ created }) => {
  if (!created) return null
  return (
    <time dateTime={created}>
      {formatDate(created)}
    </time>
  )
}

Time.propTypes = {
  created: PropTypes.string
}

export default Time
