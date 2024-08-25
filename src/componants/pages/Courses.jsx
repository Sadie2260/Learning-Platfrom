import React from 'react'
import CourseBanner from '../Courses/CourseBanner';
import CourseListing from '../Courses/CourseListing';
import ParallarSection from '../Courses/parallarSection';
function Courses() {
  return (
    <section className='container-fuild position-relative' style={{background:"#f7f6fa"}}>
     <CourseBanner/>
     <CourseListing/>
     <ParallarSection/>
    </section>
  )
}
export default Courses;     