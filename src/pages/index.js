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
          <span id="pointer">🚀</span><p>My site is currently under construction. Here's what I've worked on recently <a href="https://uxplanet.org/designing-spotify-jamroom-f9f4ec9fd1a3">recently</a></p>
        </div>
      </div>
    </div>
    {/* <div className="case-study">
      <Link to="/spotifyjamroom">
      <article className="case-study-article" id="jamroom">
        <p>A case for the shared music experience</p>
      </article>
      </Link>
      <Link to="/pilotinternship">
      <article className="case-study-article" id="pilotinternship">
      </article>
      </Link>
      <Link to="/campusbash">
      <article className="case-study-article" id="campusbash">
      </article>
      </Link>
      <Link to="/otherworks">
      <article className="case-study-article" id="otherworks">
      </article>
      </Link>
    </div> */}
  </div>
)

export default IndexPage
