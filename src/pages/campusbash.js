import React from 'react';
import Link from 'gatsby-link';


// For window and build
if (typeof window !== `undefined`) {
  const AOS = require("aos")
  AOS.init();
}
import '../layouts/casestudy.css';
import 'aos/dist/aos.css';


const CampusBash = () => (
    <div className="case-study-hero">
        This is CampusBash
    </div>

)

export default CampusBash