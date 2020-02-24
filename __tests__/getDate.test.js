import feed from '../__mocks__/feed'
import getDate from '../utils/getDate'

describe('util - getDate', () => {
  it('should get the date', () => {
    expect(getDate(feed[0].pubDate)).toMatchSnapshot()
  })
  it('should get the date in different format', () => {
    expect(getDate('january 19 1990')).toMatchSnapshot()
  })
  it('should fail gracefully when there is no date for some reason', () => {
    expect(getDate('')).toMatchSnapshot()
  })
})
