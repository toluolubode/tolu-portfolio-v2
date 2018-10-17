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
          <h1>What happens when a<span> ❤️ </span>of design meets a<span> ❤️ </span>of code?</h1>
          <h1 id="hover-text" className="cool-link">HOVER OVER ME TO FIND OUT</h1>
          <h1 id="hover-text-1" data-aos="fade-in">YOU GET THIS GUY WITH TWO THUMBS!🙈</h1>

        </div>
        <div className="HeroAnimate" data-aos="fade-in" data-aos-duration="1500"
    data-aos-easing="ease-in-out">
          <div id="tolu-pic">
          </div>
          {/* <iframe width="300" height="300" src="https://lottiefiles.com/iframe/43-emoji-wink" frameBorder="0" allowFullScreen scrolling='no'></iframe> */}
        </div>
      </div>
    </div>
    <div className="case-study">
      <Link to="/spotifyjamroom">
      <article className="case-study-article" id="jamroom" data-aos="fade-in">
        <p>A case for the shared music experience</p>
      </article>
      </Link>
      <Link to="/campusbash">
      <article className="case-study-article" id="campusbash" data-aos="fade-in">
      </article>
      </Link>
      <Link to="/pilotinternship">
      <article className="case-study-article" id="pilotinternship" data-aos="fade-in">
      </article>
      </Link>
      <Link to="/otherworks">
      <article className="case-study-article" id="otherworks" data-aos="fade-in">
      </article>
      </Link>
    </div>
  </div>
)
    

export default IndexPage
