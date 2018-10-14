import React from 'react';
import Link from 'gatsby-link';

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroText">
        <div className="HeroAnimate">
          <iframe width="300" height="300" src="https://lottiefiles.com/iframe/43-emoji-wink" frameBorder="0" allowFullScreen scrolling='no'></iframe>
        </div>
        <div className="HeroWords">
        {/* data-aos="fade-down" data-aos-easing="linear"
        data-aos-duration="1500" */}
          <h1>Hello there! <br></br>I<span>❤️</span>code just as much as I ❤️ pixels</h1>
          <p>My site is currently undergoing a redesign 🚀</p>
          <br></br>
          <p>You can catch my shenanigans on <a href="https://twitter.com/txluu">Twitter</a></p>
          <br></br>
          <p style={{paddingTop:"20px"}}>My latest case study: <a style={{color:"#00bd6e"}} href="https://uxplanet.org/designing-spotify-jamroom-f9f4ec9fd1a3">Spotify Jamroom</a></p>
        </div>
      </div>
    </div>
    <div className="case-study">
      <Link to="/spotifyjamroom">
      <article className="case-study-article" id="jamroom">
        <p>A case for the shared music experience</p>
      </article>
      </Link>
      <Link to="/campusbash">
      <article className="case-study-article" id="campusbash">
      </article>
      </Link>
      <Link to="/pilotinternship">
      <article className="case-study-article" id="pilotinternship">
      </article>
      </Link>
      <Link to="/otherworks">
      <article className="case-study-article" id="otherworks">
      </article>
      </Link>
    </div>
  </div>
)

export default IndexPage
