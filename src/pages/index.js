import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroText">
        <div className="HeroAnimate">
          <iframe width="300" height="300" src="https://lottiefiles.com/iframe/43-emoji-wink" frameBorder="0" allowFullScreen scrolling='no'></iframe>
        </div>
        <h1>Hello there! <br></br>I <span>❤️</span>code just as much as I ❤️ pixels</h1>
        <span id="pointer">👉🏿</span><p>To get you started, here's what I've done <Link to="/about">recently</Link></p>
      </div>
    </div>
    <div className="case-study">
      <article className="case-study-article">
        1
      </article>
      <article className="case-study-article">
        2
      </article>
      <article className="case-study-article">
        3
      </article>
      <article className="case-study-article">
        4
      </article>
    </div>
  </div>
)

export default IndexPage
