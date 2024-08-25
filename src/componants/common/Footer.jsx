import React from 'react';
import styled from 'styled-components';
import LogoExampleImg from '../../assets/shape-2.png';
export const Footer = () => {
  return (
    <Wrapper className='container-fluid'>
      <div className="container">
         <div className="footer-container row">
          <div className="col-lg-3 text-lg-start text-center col-md-4"> <div className="footer-logo-container"><img className='footer-logo' src={LogoExampleImg}/></div>
          <p className='footer-para pt-4'>Lost the plot Richard you mug cup of tea knackered boot bender.</p>
          <div className="social-buttons px-2">
      <a href="#" className="social-button github">
        <svg className="cf-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="-2.5 0 19 19">
          <path d="M9.464 17.178a4.506 4.506 0 0 1-2.013.317 4.29 4.29 0 0 1-2.007-.317.746.746 0 0 1-.277-.587c0-.22-.008-.798-.012-1.567-2.564.557-3.105-1.236-3.105-1.236a2.44 2.44 0 0 0-1.024-1.348c-.836-.572.063-.56.063-.56a1.937 1.937 0 0 1 1.412.95 1.962 1.962 0 0 0 2.682.765 1.971 1.971 0 0 1 .586-1.233c-2.046-.232-4.198-1.023-4.198-4.554a3.566 3.566 0 0 1 .948-2.474 3.313 3.313 0 0 1 .091-2.438s.773-.248 2.534.945a8.727 8.727 0 0 1 4.615 0c1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529a.694.694 0 0 1-.272.587z"></path>
        </svg>
      </a>
      <a href="#" className="social-button linkedin">
        <svg viewBox="0 -2 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g stroke="none" strokeWidth="1">
            <g transform="translate(-702.000000, -265.000000)">
              <path d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z" />
            </g>
          </g>
        </svg>
      </a>
      <a href="#" className="social-button facebook">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310">
          <g id="XMLID_834_">
            <path id="XMLID_835_" d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"></path>
          </g>
        </svg>
      </a>
      
      <a href="#" className="social-button twitter">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 248 204">
          <path d="M248,24.713c-9.132,4.05-18.95,6.795-29.247,8.03c10.508-6.295,18.572-16.27,22.355-28.153c-9.836,5.83-20.72,10.065-32.304,12.36C198.446,6.497,185.597,0,171.209,0c-27.944,0-50.605,23.09-50.605,51.56c0,4.04,0.441,7.97,1.29,11.74C79.957,61.982,42.362,41.25,17.662,9.12c-4.45,7.71-7.008,16.65-7.008,26.22c0,18.1,8.957,34.08,22.565,43.44c-8.314-0.274-16.13-2.576-22.973-6.43v0.647c0,25.3,17.614,46.41,40.98,51.19c-4.29,1.185-8.81,1.82-13.48,1.82c-3.3,0-6.51-0.321-9.636-0.915c6.52,20.68,25.44,35.77,47.88,36.19c-17.534,14.1-39.642,22.51-63.665,22.51c-4.14,0-8.25-0.243-12.28-0.712c22.67,14.89,49.605,23.58,78.56,23.58c94.28,0,145.84-79.31,145.84-148.08c0-2.26-0.048-4.52-0.152-6.76C233.14,43.67,241.317,34.59,248,24.713"></path>
        </svg>
      </a>
    </div>
          </div>
          <div className="col-lg-3 col-md-4  text-lg-start text-center px-4">
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
          <div className="col-lg-3 col-md-4  text-lg-start text-center px-4">
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
          <div className="col-lg-3 col-md-4 px-4 text-lg-start text-center">
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
.social-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  padding: 15px 10px;
  border-radius: 5em;
}

.social-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 0 4px;
  background-color: #fff;
  box-shadow: 0px 0px 4px #00000027;
  transition: 0.3s;
}

.social-button:hover {
  background-color: #f2f2f2;
  box-shadow: 0px 0px 6px 3px #00000027;
}

.social-buttons svg {
  transition: 0.3s;
  height: 20px;
}

.facebook {
  background-color: #3b5998;
}

.facebook svg {
  fill: #f2f2f2;
}

.facebook:hover svg {
  fill: #3b5998;
}

.github {
  background-color: #333;
}

.github svg {
  width: 25px;
  height: 25px;
  fill: #f2f2f2;
}

.github:hover svg {
  fill: #333;
}

.linkedin {
  background-color: #0077b5;
}

.linkedin svg {
  fill: #f2f2f2;
}

.linkedin:hover svg {
  fill: #0077b5;
}

.instagram {
  background-color: #c13584;
}

.instagram svg {
  fill: #f2f2f2;
}

.instagram:hover svg {
  fill: #c13584;
}

`;
