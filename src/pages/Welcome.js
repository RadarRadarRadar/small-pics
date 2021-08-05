import React from 'react'
import { Link } from 'react-router-dom'

export default function Welcome() {
  return (
    <div>
      Welcome Page!
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/imgcomupload">Image Compressor</Link>
        </li>
      </ul>
    </div>
  )
}
