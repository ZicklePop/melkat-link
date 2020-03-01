import { PHASE_DEVELOPMENT_SERVER as isDev } from 'next/constants'

export const host = isDev ? 'http://localhost:56375' : 'https://melkat.link'
export const links = `${host}/api/links`
export const link = `${host}/api/link`

export default {
  host,
  links,
  link
}
