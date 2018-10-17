import React from 'react'
import Link from 'gatsby-link'
import './Footer.css'

const Footer = ({ siteTitle }) => (
  <footer className="Footer">
  <div className="FooterGroup" >
    <a target="/_blank" href="https://twitter.com/txluu" className="footer-link">Twitter</a>
    <a target="/_blank" href="https://www.linkedin.com/in/toluolubode/" className="footer-link">Linkedin</a>
    <a target="/_blank" href="https://github.com/toluolubode" className="footer-link">Github</a>
    <a target="/_blank" href="https://twitter.com/txluu"className="footer-link">Spotify</a>
    <a target="/_blank" href="https://bit.ly/2yl6r8G" className="footer-link">Resume</a>
  </div>
  </footer>
)

export default Footer