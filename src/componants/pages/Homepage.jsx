import React from 'react';
import Banner from '../Home/BannerHome';
import ExploreSection from '../Home/ExploreSection';
import CoursesListing from '../Home/CoursesListing';
import CategoriesSection from '../Home/CategoriesSection';
import BlogsSection from '../Home/BlogsSection';
import { Footer } from '../common/Footer';
function Homepage() {
  return (
    <section className='bg-white'>
        <Banner/>
        <ExploreSection/>
        <CoursesListing/>
        <CategoriesSection/>
        <BlogsSection/>
        <Footer/>
    </section>
  )
}

export default Homepage;