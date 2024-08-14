import React from 'react'
import styled from 'styled-components';
import LogoExampleImg from '../../assets/shape-2.png';
export const Footer = () => {
  return (
    <Wrapper className='container-fluid'>
      <div className="container">
         <div className="footer-container row">
          <div className="col-3"> <div className="footer-logo-container"><img className='footer-logo' src={LogoExampleImg}/></div>
          <p className='footer-para pt-4'>Lost the plot Richard you mug cup of tea knackered boot bender.</p>

          </div>
          <div className="col-3 px-4">
            <aside className='footer-items-wrapper'>
              <h3 className='footer-heading-item'>
                Explore
              </h3>
              <ul className='footer-listing-ul'>
            <li><a href='#'>Courses</a></li>
            <li><a href='#'>Blogs</a></li>
            <li><a href='#'>Contact us</a></li>
            <li><a href='#'>Login</a></li>
            <li><a href='#'>Register</a></li>
          </ul>
            </aside>
          </div>
          <div className="col-3 px-4">
            <aside className='footer-items-wrapper'>
              <h3 className='footer-heading-item'>
                Explore
              </h3>
              <ul className='footer-listing-ul'>
            <li><a href='#'>Courses</a></li>
            <li><a href='#'>Blogs</a></li>
            <li><a href='#'>Contact us</a></li>
            <li><a href='#'>Login</a></li>
            <li><a href='#'>Register</a></li>
          </ul>
            </aside>
          </div>
          <div className="col-3 px-4">
            <aside className='footer-items-wrapper'>
              <h3 className='footer-heading-item'>
                Explore
              </h3>
              <ul className='footer-listing-ul'>
            <li><a href='#'>Courses</a></li>
            <li><a href='#'>Blogs</a></li>
            <li><a href='#'>Contact us</a></li>
            <li><a href='#'>Login</a></li>
            <li><a href='#'>Register</a></li>
          </ul>
            </aside>
          </div>
         </div>
         <div className="row">
          <div className="col-12 copyright"><p className='text-center'>© 2024 Copy right all Right Reserved by Learning Platfrom</p></div>
         </div>
      </div>
      </Wrapper>
  )
};
const Wrapper = styled.section`
  background-color: #f7f6fa;
  font-family: 'Open Sans';
  padding: 7% 0 0 0;
.footer-listing-ul{
  list-style: none;
  padding: 0;
}
.copyright{
  position: relative;
    border-top: 1px solid rgba(14, 14, 55, .08);
    margin-top: 90px;
    padding: 22px 0 40px;
}
.copyright p {
  font-size: 13px;
    line-height: 26px;
    color: #767480;
}
.footer-logo{
  width: 16%;
}
.footer-para{
  width: 84%;
  font-size: 16px;
    margin-bottom: 33px;
}
.footer-listing-ul li{
  list-style: none;
    display: block;
}
.footer-listing-ul li a{
  text-decoration: none;
  font-size: 13px;
    line-height: 32px;
    color: #76747f;
    font-weight: 600;
}
.footer-heading-item{
  font-size: 20px;
    line-height: 30px;
    color: #2c234d;
    margin-bottom: 20px;
}
`;
