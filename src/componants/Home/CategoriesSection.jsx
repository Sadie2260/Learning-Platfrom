import React from 'react';
import styled from 'styled-components';
import parallexBG from '../../assets/cta-bg.jpg';
import Video from '../../assets/Video.mp4';

function CategoriesSection() {
  return (
    <Wrapper className='container-fluid px-0 parallax_effect py-5 position-relative' style={{ "backgroundImage": `url("${parallexBG}")` }}>
      <div className='container mt-5 pt-5'>
        <div className="row">
          <div className="col text-center d-flex flex-column justify-content-center align-items-center">
            <h4 className='heading_blue_banner pt-5'>Join us for new journey</h4>
            <p className='p_blue_banner mb-3 px-lg-5 px-md-4 px-2 pt-4 text-white'>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
            </p>
            <a href='#' className='btn btn-white mt-5 custom-white-btn bg-white' role='button'>Start Now</a>
          </div>
        </div>
      </div>
      <div className='container w-100'>
        <div className="video_img position-relative">
          <video src={Video} className='videoTag d-lg-block d-md-block d-none' controls loop/>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 25% !important;
  .videoTag{
    width: 74%;
    height: auto;
    position: absolute;
    left: 13%;
    margin-top: 55px;
    box-shadow: 0px 40px 70px 0px rgba(11, 2, 55, 0.23);
    top: auto;
    border-radius: 15px;
}
  .heading_blue_banner {
    color: #fff;
    font-size: 2.5rem;
    font-weight: 600;
    font-family: 'Open Sans';
  }

  .p_blue_banner {
    font-family: 'Open Sans';
  }

  .custom-white-btn{
    color: #5838fc;
    background: #fff;
    border: none;
    font-size: 17px !important;
    font-weight: 500;
    padding: 18px 37px;
    text-align: center;
    display: inline-block;
    line-height: .8;
    letter-spacing: 0;
    position: relative;
    border-radius: 3px;
    z-index: 1;
    cursor: pointer;
    outline: none;

  }
  .custom-white-btn:hover{
    box-shadow: 0px 20px 30px 0px rgba(26, 8, 119, 0.24);
  }
`;

export default CategoriesSection;
