import React from 'react';
import Link from 'gatsby-link';


// For window and build
if (typeof window !== `undefined`) {
  const AOS = require("aos")
  AOS.init();
}
import '../layouts/casestudy.css';
import 'aos/dist/aos.css';


const PilotInternship = () => (
    <div className="case-study-hero">
        This is Pilot Internship
    </div>

)

export default PilotInternship