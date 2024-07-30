import React from 'react';
import Banner from '../Home/BannerHome';
import ExploreSection from '../Home/ExploreSection';
import CoursesListing from '../Home/CoursesListing';
function Homepage() {
  return (
    <div>
        <Banner/>
        <ExploreSection/>
        <CoursesListing/>
    </div>
  )
}

export default Homepage;