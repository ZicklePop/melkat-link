/** @jsx h */
import { h } from 'preact'
import render from 'preact-render-to-string'
import Layout from '../components/layout'

const MOCK = {
  title: 'Rae the Doe',
  description: 'A webcomic about a gay disaster, a punk skunk, and lots and lots of puns. Created by Olive Rae Brinker. Updates Monday, Wednesday and Friday.'
}

describe('component - layout', () => {
  it('should render', () => {
    const component = render(<Layout />)
    expect(component).toMatchSnapshot()
  })
  it('should render with props', () => {
    const component = render(<Layout {...MOCK}><b>#content</b></Layout>)
    expect(component).toMatchSnapshot()
  })
})
