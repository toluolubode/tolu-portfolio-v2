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
          <span id="pointer">🚀</span><p style={{fontWeight:"bold"}}>My site is currently under construction.</p>
          <br></br>
          <p>Here's my most recent case study: <a style={{color:"#00bd6e"}} target="_blank" href="https://uxplanet.org/designing-spotify-jamroom-f9f4ec9fd1a3">Spotify Jamroom</a></p>
          <br></br>
          <p>You can catch my shenanigans on <a  target="_blank" href="https://twitter.com/txluu">Twitter</a></p>
          <br></br>
          <p>I sling some code on <a style={{color:"black"}} target="_blank" href="https://twitter.com/txluu">Github</a></p>
          <br></br>
          <p>...and</p>
          <br></br>
          <p>I'm super professional on <a style={{color:"darkslategray"}} target="_blank" href="https://www.linkedin.com/in/toluolubode/">Linkedin</a></p>
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
