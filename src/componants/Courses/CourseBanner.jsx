import React from 'react'
import styled from 'styled-components';
import backGroundPic from '../../assets/banner3.jpg';
function CourseBanner() {
  return (
    <Wrapper className='container-fuild position-relative'>
     <div className="cousre-listing" style={{backgroundImage: `url("${backGroundPic}")`}}>
        <div className="course-listing-heading-wrapper container">
            <h1 className='banner-title'>Explore Courses</h1>
        </div>

     </div>
    </Wrapper>

  )
}
const Wrapper = styled.section`
.cousre-listing{
padding: 200px 0;
background-repeat: no-repeat;
background-position: center;
}
.cousre-listing::after{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    content: '';
    background-image: linear-gradient(to right, #8638fc, #7c38fc, #7138fc, #6538fc, #5838fc);
    opacity: .9;
}

.banner-title{
    font-size: 53px;
    line-height: .8;
    color: #ffffff;
    position: relative;
    z-index: 3;
    font-family: 'Open Sans';
    margin: 0 0 13px;
}
`;
export default CourseBanner