import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
  <div className="HeaderImage">
    <Link to="/">TOLU OLUBODE</Link>
  </div>
  <div className="HeaderGroup">
    <Link className="cool-link" to="/">work</Link>
    <Link className="cool-link" to="/code">code</Link>
    <Link className="cool-link" to="/play">play</Link>
    <Link className="cool-link" to="/about">about</Link>
    <a className="cool-link" to="/about">resume</a>
  </div>
</div>
)

export default Header
