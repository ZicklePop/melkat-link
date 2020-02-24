import React from 'react'
import renderer from 'react-test-renderer'
import Bookmark from '../components/bookmark'

describe('component - bookmark', () => {
  it('should fail gracefully', () => {
    const component = renderer.create(<Bookmark />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
