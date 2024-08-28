import React from 'react'; 
import styled from 'styled-components';
import image from '../../assets/course-card-image.png';

function CourseDetailBanner() {
  return (
    <Wrapper className='contaienr-fluid px-0'>
        <div className="container-fluid position-relative px-0 wrapper" style={{backgroundImage:`url('${image}')`}}>
            <div className="container wrapper-banner">
            <h1 className='text-light heading_course_detail'>Learn Website Development</h1>
            </div>
        </div>
        </Wrapper>
  )
}
const Wrapper = styled.section`
    font-family: 'Open Sans';
    .wrapper-banner{
         padding:220px 0;
         position: relative;
    }
    .heading_course_detail{
        font-size: 50px;
        font-weight: 600;
    }
    .wrapper{
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .wrapper::before{
        opacity: .9;
        position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    content: '';
        background: linear-gradient(to right, #8638fc, #7c38fc, #7138fc, #6538fc, #5838fc);
    }
`;
export default CourseDetailBanner