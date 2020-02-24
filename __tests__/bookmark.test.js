import React from 'react'
import renderer from 'react-test-renderer'
import Bookmark from '../components/bookmark'
import feed from '../__mocks__/feed'

describe('component - bookmark', () => {
  it('should render', () => {
    const component = renderer.create(<Bookmark {...feed[0]} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should fail gracefully', () => {
    const component = renderer.create(<Bookmark />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
