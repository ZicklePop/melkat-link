const getDomain = (link) => (
  link
    .replace(/.*:\/\//gi, '')
    .replace('www.', '')
    .split('/')[0]
)

export default getDomain
