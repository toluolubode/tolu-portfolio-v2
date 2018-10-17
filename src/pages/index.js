import React from 'react';
import Link from 'gatsby-link';


// For window and build
if (typeof window !== `undefined`) {
  const AOS = require("aos")
  AOS.init();
}
import 'aos/dist/aos.css';

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroText">
      <div className="HeroWords"  data-aos="fade-in" data-aos-duration="1200">
          <h1 id="hellothere">HELLO THERE!<span id="waving-hand">👋🏿</span></h1>
          <h1>I<span> ❤️ </span>design just as much as I<span> ❤️ </span>code.</h1>
        </div>
        <div className="HeroAnimate" data-aos="fade-in">
          <iframe width="300" height="300" src="https://lottiefiles.com/iframe/43-emoji-wink" frameBorder="0" allowFullScreen scrolling='no'></iframe>
        </div>
      </div>
    </div>
    <div className="case-study">
      <Link to="/spotifyjamroom">
      <article className="case-study-article" id="jamroom" data-aos="fade-right">
        <p>A case for the shared music experience</p>
      </article>
      </Link>
      <Link to="/campusbash">
      <article className="case-study-article" id="campusbash" data-aos="fade-left">
      </article>
      </Link>
      <Link to="/pilotinternship">
      <article className="case-study-article" id="pilotinternship" data-aos="fade-right">
      </article>
      </Link>
      <Link to="/otherworks">
      <article className="case-study-article" id="otherworks" data-aos="fade-left">
      </article>
      </Link>
    </div>
  </div>
)
    

export default IndexPage
