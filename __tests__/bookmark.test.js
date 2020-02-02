import React from 'react'
import renderer from 'react-test-renderer'
import Bookmark from '../components/bookmark'

const MOCK = {
  title: 'Rae the Doe',
  link: 'https://www.raethedoe.com/',
  description: 'A webcomic about a gay disaster, a punk skunk, and lots and lots of puns. Created by Olive Rae Brinker. Updates Monday, Wednesday and Friday.',
  pubDate: 'Sun, 26 Jan 2020',
  category: ['link', 'webcomic']
}

describe('component - bookmark', () => {
  it('should render', () => {
    const component = renderer.create(<Bookmark {...MOCK} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
