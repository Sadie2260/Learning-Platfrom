import React from 'react'
import styled from 'styled-components';
import parallexBG from '../../assets/students-1807505_1280.jpg';
function parallarSection() {
  return (
 <Wrapper className='container-fluid px-0 position-relative' >
      <div className='container-fluid parallax_effect' style={{ "backgroundImage": `url("${parallexBG}")` }}>
       <div className='container'>
        <div className="row pb-3">
          <div className="col text-center wrapper-text d-flex flex-column justify-content-center align-items-center">
            <h4 className='heading_blue_banner pt-5'>Make the most of your<br/> Online learning experience</h4>
            <p className='p_blue_banner mb-3 px-lg-5 px-md-4 px-2 pt-4 text-white'>

            Our Online Learning Resource Center has tips, tricks and inspiring stories to help you            </p>
            <a href='#' className='btn btn-white mt-5 custom-white-btn bg-white' role='button'>Explore Resources</a>
          </div>
        </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
margin: 80px 0 0 0;
  .parallax_effect{min-height: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 100px 0;
  z-index: 1; }
  .wrapper-text{
z-index: 2;
  }
  .parallax_effect::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Adjust the alpha value for more or less darkness */
    z-index: 1; /* Ensure it overlays the background but stays behind text */
}
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
export default parallarSection