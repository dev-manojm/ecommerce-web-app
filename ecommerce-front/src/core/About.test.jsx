import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { expect, test } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import About from './About'

test('renders the existing About page', () => {
  const html = ReactDOMServer.renderToStaticMarkup(
    <MemoryRouter>
      <About />
    </MemoryRouter>
  )

  expect(html).toContain('FullStack MERN Ecommerce App')
})
