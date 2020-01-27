/** @jsx h */
import { h } from 'preact'
import { shallowRender } from 'preact-render-to-string'
import Index from '../pages/index'

describe('component - bookmark', () => {
  it('should render', () => {
    const component = shallowRender(<Index />)
    expect(component).toMatchSnapshot()
  })
})
