import React from 'react'
import { render, cleanup } from 'react-testing-library'

import Header from '../header'

afterEach(cleanup)

describe(`Header`, () => {
  it(`renders siteTitle`, () => {
    const siteTitle = `Hello World`
    const { getByText } = render(<Header siteTitle={siteTitle} />)

    const title = getByText(siteTitle)

    expect(title).toBeInTheDocument()
  })
})