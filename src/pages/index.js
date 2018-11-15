import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroText">
        <div className="HeroWords">
          <h1>🙈 Hello there! <br></br>I'm a digital product designer</h1>
          <h1>I <span>❤️ </span>code just as much as I ❤️ pixels</h1>
          <p style={{fontWeight:"bold"}}>Soo...my site is currently under construction </p><span id="pointer">🚀</span>
          <br></br>
          <p>Here's my most recent case study: <a style={{color:"#00bd6e"}} target="_blank" href="https://uxplanet.org/designing-spotify-jamroom-f9f4ec9fd1a3">Spotify Jamroom</a></p>
          <br></br>
          <p>You can catch my online shenanigans and gif bufoonery on <a  target="_blank" href="https://twitter.com/txluu">Twitter</a></p>
          <br></br>
          <p>I sling some code on <a style={{color:"black"}} target="_blank" href="https://github.com/toluolubode">Github</a></p>
          <br></br>
          <p>...and</p>
          <br></br>
          <p>I'm super professional on <a style={{color:"darkslategray"}} target="_blank" href="https://www.linkedin.com/in/toluolubode/">Linkedin</a>...aren't we all</p>
          <br></br>
          <p><a style={{color:"dodgerblue"}} target="_blank" href="https://www.dropbox.com/s/4z63ub8wwyibm6g/Tolu%20Resume.pdf?dl=0">Resume</a></p>
        </div>
        <div className="HeroAnimate">
          <iframe width="300" height="300" src="https://lottiefiles.com/iframe/43-emoji-wink" frameBorder="0" allowFullScreen scrolling='no'></iframe>
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
