import formatDate from '../utils/formatDate'

describe('util - formatDate', () => {
  it('should fail gracefully when there is no date for some reason', () => {
    expect(formatDate('')).toMatchSnapshot()
  })
})
