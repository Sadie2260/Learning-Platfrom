import React from 'react'
import styled from 'styled-components'
function ExploreSection() {
  return (
    <Wrapper className='container'>
        <div className='row'>
            <div className='col-md-8'>
        <h3 className='w-50 explore_heading'>Explore
         <br/><b> Our Popular Courses </b></h3>
         </div>
         <div className='col-md-4 d-flex justify-content-end align-items-center'>
         <button class="cta">
  <span>Hover me</span>
  <svg width="15px" height="10px" viewBox="0 0 13 10">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button>

         </div>
         </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
.explore_heading{
    font-size: 34px;
    line-height: 44px;
    font-family: 'Open Sans';
    font-weight: 400;
}
.cta {
  position: relative;
  padding: 2px 18px;
  transition: all 0.2s ease;
  border: none;
  background: none;
  cursor: pointer;
}

.cta:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  border-radius: 50px;
  background: #5838fc69;
  width: 30px;
  height: 30px;
  transition: all 0.4s ease;
}

.cta span {
  position: relative;
  font-family: "Open Sans", sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #5d5a67;
}

.cta svg {
  position: relative;
  top: -2px;
  margin-left: 10px;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: #5d5a67;
  stroke-width: 2;
  transform: translateX(-5px);
  transition: all 0.3s ease;
}

.cta:hover:before {
  width: 100%;
  background: #5838fc69;
}

.cta:hover svg {
  transform: translateX(0);
  stroke: #fff;
}
.cta:hover span {
 color: #fff;
}

.cta:active {
  transform: scale(0.95);
}


`;

export default ExploreSection