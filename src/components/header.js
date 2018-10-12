import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
  <div className="HeaderImage">
    <Link to="/">TOLU OLUBODE</Link>
  </div>
  <div className="HeaderGroup">
    <Link to="/">work</Link>
    <Link to="/code">code</Link>
    <Link to="/play">play</Link>
    <Link to="/about">about</Link>
  </div>
</div>
)

export default Header
