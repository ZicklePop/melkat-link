import feed from '../__mocks__/feed'
import filterByDomain from '../utils/filterByDomain'

describe('util - filterByDomain', () => {
  it('should filter by domain', () => {
    expect(filterByDomain(feed, 'itch.io')).toMatchSnapshot()
  })
  it('should fail gracefully when there is nothing to filter', () => {
    expect(filterByDomain('', '')).toMatchSnapshot()
  })
})
