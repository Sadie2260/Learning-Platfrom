import React from 'react';
import CourseDetailBanner from '../CourseDetail/CourseDetailBanner';
import AboutCourse from '../CourseDetail/AboutCourse';
import styled from 'styled-components';
function CourseDetail() {
  return (
    <Wrapper className='container-fluid px-0'>
        <CourseDetailBanner/>
        <AboutCourse/>
    </Wrapper>
  )
}
const Wrapper = styled.section`

`;
export default CourseDetail