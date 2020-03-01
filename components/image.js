import React from 'react'
import PropTypes from 'prop-types'

const cx = {
  img: 'aspect-ratio--object cover bg-center h3 w3 br2',
  imgWrap: 'aspect-ratio aspect-ratio--1x1 h3 w3 pa0 ma0 ml2 mb2 fr'
}

const Image = ({ cover }) => {
  if (!cover) return null
  return (
    <div className={cx.imgWrap}>
      <div
        className={cx.img}
        role='img'
        aria-label='Preview image'
        style={{ backgroundImage: `url(${cover})` }}
      />
    </div>
  )
}

Image.propTypes = {
  cover: PropTypes.string
}

export default Image
