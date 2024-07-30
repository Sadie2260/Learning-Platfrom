import React from 'react';
import styled from 'styled-components';
import ScienceImg from '../../assets/science.png';
import ImageTutor from '../../assets/undraw_Online_learning_re_qw08.png';
function ExploreSection() {
  return (
    <Wrapper className='container mb-4'>
        <div className='row'>
            <div className='col-md-8'>
        <h3 className='w-50 explore_heading'>Explore
         <br/><b> Our Popular Courses </b></h3>
         </div>
         <div className='col-md-4 d-flex justify-content-end align-items-center'>
         <button className="cta">
  <span>Browser all courses</span>
  <svg width="15px" height="10px" viewBox="0 0 13 10">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button>

         </div>
         </div>
         <section className='container px-0 pt-5'>
         <div className='row'>
          <div className='col-md-3 d-flex align-items-center mb-3 justify-content-center'>
            <div className='course-card'>
                <div className='card-img-wrapper'><img src={ScienceImg} className='cousre-card-img' alt="card"/></div>
                <div className='card-content-wrapper pt-3'>
                  <h4><a href='#'>Computer Science</a></h4>
                </div>
            </div>
          </div>
          <div className='col-md-3 d-flex align-items-center mb-3 justify-content-center'>
            <div className='course-card'>
                <div className='card-img-wrapper'><img src={ScienceImg} className='cousre-card-img' alt="card"/></div>
                <div className='card-content-wrapper pt-3'>
                  <h4><a href='#'>Computer Science</a></h4>
                </div>
            </div>
          </div>
          <div className='col-md-3 d-flex align-items-center mb-3 justify-content-center'>
            <div className='course-card'>
                <div className='card-img-wrapper'><img src={ScienceImg} className='cousre-card-img' alt="card"/></div>
                <div className='card-content-wrapper pt-3'>
                  <h4><a href='#'>Computer Science</a></h4>
                </div>
            </div>
          </div>
          <div className='col-md-3 d-flex align-items-center mb-3 justify-content-center'>
            <div className='course-card'>
                <div className='card-img-wrapper'><img src={ScienceImg} className='cousre-card-img' alt="card"/></div>
                <div className='card-content-wrapper pt-3'>
                  <h4><a href='#'>Computer Science</a></h4>
                </div>
            </div>
          </div>
          <div className='col-md-3 d-flex align-items-center mb-3 justify-content-center'>
            <div className='course-card'>
                <div className='card-img-wrapper'><img src={ScienceImg} className='cousre-card-img' alt="card"/></div>
                <div className='card-content-wrapper pt-3'>
                  <h4><a href='#'>Computer Science</a></h4>
                </div>
            </div>
          </div>
         </div>
         </section>
         <section className='container pt-5 mt-3'>
          <div className="row"> 
            <div className="col-md-6">
              <div className="teacher-img-wrapper">
               <img src={ImageTutor} className="teacher_image" alt='teacher image'/>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="teacher-content-wrapper">
                <h5 className='teacher-heading'>Want to join over community as a tutor?</h5>
                <p className='teacher-sub-heading'>Who else do you know who'll do that for you?</p>
                <p className='teacher-content'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
              <button className='btn-purple btn'> Sign up Now</button>
              </div>
            </div>
          </div>
         </section>
    </Wrapper>
  )
}
const Wrapper = styled.section`
.teacher_image{
  width: 100%;
}
.btn-purple{
  border: transparent 2px solid;
    font-size: 17px;
    font-weight: 600;
    color: #fff;
    background: #5838fc;
   padding: 20px 35px;
    text-align: center;
    display: inline-block;
    line-height: .8;
    letter-spacing: 0;
    position: relative;
    border-radius: 3px;
    z-index: 1;
    cursor: pointer;
    outline: none;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
}
.btn-purple:hover{
  background: transparent;
  color: #5838fc;
  border: #5838fc 2px solid;
}
.teacher-heading{
  font-family: 'Open Sans';
    font-size: 35px;
    font-weight: 700;
    color: #2c234d;
}
.teacher-sub-heading{
  font-family: 'Open Sans';
  font-size: 20px;
  color: #5838fc;
}
.teacher-content{
  font-size: 18px;
    font-weight: 300;
    color: #00000085; 
}
.card-content-wrapper h4{
  font-size: 18px;
}
.card-content-wrapper h4 a{
  text-decoration: none;
  color: #2c234d;
}
.course-card{
width: 230px;
background: #f3f1f8;
padding: 50px 0px;
display: flex;
cursor: pointer;
border-radius: 45px;
align-items: center;
justify-content: center;
flex-direction: column;
}
.course-card img{
  width: 100px;
}
.course-card:hover{
  background: #fff;
  box-shadow: 0px 30px 50px 0px rgba(11, 02, 55, 0.10);
  transition:all 0.5s ease;
}
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
  font-family: "Open Sans";
  font-size: 13px;
  font-weight: 500;
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
@media (min-width: 768px) {
    .col-md-3 {
        flex: 0 0 auto;
        width: 20% !important;
    }
}

`;

export default ExploreSection