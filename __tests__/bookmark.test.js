/** @jsx h */
import { h } from 'preact'
import render from 'preact-render-to-string'
import Bookmark from '../components/bookmark'

const MOCK = {
  title: 'Rae the Doe',
  link: 'https://www.raethedoe.com/',
  description: 'A webcomic about a gay disaster, a punk skunk, and lots and lots of puns. Created by Olive Rae Brinker. Updates Monday, Wednesday and Friday.',
  pubDate: 'Sun, 26 Jan 2020 21:18:37 GMT',
  category: ['link', 'webcomic']
}

describe('component - bookmark', () => {
  it('should render', () => {
    const component = render(<Bookmark {...MOCK} />)
    expect(component).toMatchSnapshot()
  })
})
