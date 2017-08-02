import * as React from 'react'
import * as ReactDOM from 'react-dom'

import * as renderer from 'react-test-renderer'

import App from './App'

it('renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(<App />, div)
})

it('renders expected things', () => {
    const tree = renderer.create(
       <App />,
    ).toJSON()

    expect(tree).toMatchSnapshot()
})
