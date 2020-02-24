import feed from '../__mocks__/feed'
import getDescription from '../utils/getDescription'

describe('util - getDescription', () => {
  it('should get the body and image', () => {
    expect(getDescription(feed[0].description)).toMatchSnapshot()
  })
  it('should get the body when there is no image', () => {
    expect(getDescription(feed[8].description)).toMatchSnapshot()
  })
  it('should fail gracefully when there is no body or image', () => {
    expect(getDescription('')).toMatchSnapshot()
  })
})
