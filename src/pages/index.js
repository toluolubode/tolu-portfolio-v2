import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroText">
        <div className="HeroAnimate">
          <iframe width="300" height="300" src="https://lottiefiles.com/iframe/43-emoji-wink" frameBorder="0" allowFullScreen scrolling='no'></iframe>
        </div>
        <div className="HeroWords">
          <h1>Hello there! <br></br>I <span>❤️</span>code just as much as I ❤️ pixels</h1>
          <span id="pointer">👉🏿</span><p>To get you started, here's what I've done <Link to="/about">recently</Link></p>
        </div>
      </div>
    </div>
    <div className="case-study">
      <Link to="/spotifyjamroom">
      <article className="case-study-article">
        <h2>Spotify Jamroom</h2>
      </article>
      </Link>
      <Link to="/spotifyjamroom">
      <article className="case-study-article">
        <h2>Pilot Interactive Internship</h2>
      </article>
      </Link>
      <Link to="/spotifyjamroom">
      <article className="case-study-article">
        <h2>CampusBash</h2>
      </article>
      </Link>
      <Link to="/spotifyjamroom">
      <article className="case-study-article">
        <h2>Other Works</h2>
      </article>
      </Link>
    </div>
  </div>
)

export default IndexPage
