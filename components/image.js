import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer'

const cx = {
  img: 'cover bg-center h3 w3 w4-l br2 pa0 ma0 ml2 mb2 fr'
}

const Image = ({ alt, cover }) => {
  const { ref, inView } = useInView({ triggerOnce: true })
  if (!cover) return null
  return (
    <div
      alt={alt}
      aria-label='Preview image'
      className={cx.img}
      ref={ref}
      role='img'
      style={inView ? { backgroundImage: `url(${cover})` } : {}}
    />
  )
}

Image.propTypes = {
  cover: PropTypes.string
}

export default Image
