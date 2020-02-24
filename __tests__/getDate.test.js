import feed from '../__mocks__/feed'
import getDate from '../utils/getDate'

describe('util - getDate', () => {
  it('should fail gracefully when there is no date for some reason', () => {
    expect(getDate('')).toMatchSnapshot()
  })
})
