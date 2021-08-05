import React from 'react'
import { Link } from 'react-router-dom'
import Page from '../components/Page'

export default function About() {
  return (
    <Page>
      <div>
        This is the About Page
      </div>
      <Link to="/">Back to Welcome page</Link>
    </Page>
  )
}
