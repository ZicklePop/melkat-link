import feed from '../__mocks__/feed'
import getDomain from '../utils/getDomain'

describe('util - getDomain', () => {
  it('should get the domain', () => {
    expect(getDomain(feed[0].link)).toMatchSnapshot()
  })
  it('should get the domain with subdomain', () => {
    expect(getDomain(feed[3].link)).toMatchSnapshot()
  })
  it('should fail gracefully when there is no domain for some reason', () => {
    expect(getDomain('')).toMatchSnapshot()
  })
})
