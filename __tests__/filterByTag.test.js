import feed from '../__mocks__/feed'
import filterByTag from '../utils/filterByTag'

describe('util - filterByTag', () => {
  it('should filter by tag', () => {
    expect(filterByTag(feed, 'games')).toMatchSnapshot()
  })
  it('should fail gracefully when there is nothing to filter', () => {
    expect(filterByTag('', '')).toMatchSnapshot()
  })
})
