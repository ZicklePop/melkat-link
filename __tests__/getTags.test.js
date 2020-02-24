import feed from '../__mocks__/feed'
import getTags from '../utils/getTags'

describe('util - getTags', () => {
  it('should get the tags', () => {
    expect(getTags(feed[0].category)).toMatchSnapshot()
  })
  it('should fail gracefully when there are no tags', () => {
    expect(getTags([])).toMatchSnapshot()
  })
})
