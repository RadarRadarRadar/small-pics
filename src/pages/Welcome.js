import React from 'react'
import { Link } from 'react-router-dom'
import Page from '../components/Page'

export default function Welcome() {
  return (
    <Page>
      Welcome Page!
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/imgcomupload">Image Compressor</Link>
        </li>
        <li>
          <Link to="/randompic">Random Pic</Link>
        </li>
      </ul>
    </Page>
  )
}
