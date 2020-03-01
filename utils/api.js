export const host = process.env.NODE_ENV !== 'production' ? 'http://localhost:56375' : 'https://melkat.link'
export const links = `${host}/api/links`
export const link = `${host}/api/link`

export default {
  host,
  links,
  link
}
