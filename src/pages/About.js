import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      This is the About Page
      <Link to="/">Back to Welcome page</Link>
    </div>
  )
}
