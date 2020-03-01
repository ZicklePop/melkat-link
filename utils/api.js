export const devPort = parseInt(process.env.PORT, 10) || 3000
export const host = process.env.NODE_ENV !== 'production' ? `http://localhost:${devPort}` : 'https://melkat.link'
export const links = `${host}/api/links`
export const link = `${host}/api/link`

export default {
  host,
  links,
  link
}
