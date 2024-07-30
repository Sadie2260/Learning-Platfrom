import React from 'react';
import styled from 'styled-components';
import bookImg from '../../assets/book.png';
import CardImage from '../../assets/course-card-image.png';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
function CoursesListing() {
  return (
    <Wrapper className='container-fluid py-4'>
      <section className='container py-3'>
        <div className="row">
          <div className="col-md-6">
          <h3 className="w-50 courses_heading">Find the Right
          Online Course for you</h3></div>
          <div className="col-md-6 d-flex justify-content-start align-items-center">
            <div className="tabs w-100 d-flex justify-content-between align-items-center">
           <li><a className="a-tag-course" href='#'>All</a></li>
           <li><a className="a-tag-course" href='#'>Web Development</a></li>
           <li><a className="a-tag-course" href='#'>AI</a></li>
           <li><a className="a-tag-course" href='#'>UI/UX Design</a></li>
           <li><a className="a-tag-course" href='#'>Geography</a></li>
           <li><a className="a-tag-course" href='#'>Mathematics</a></li>
            </div>
            </div>
          </div> 
          <div className='container pt-5'>
            <div className='row'>
              <div className="col-md-4 course-card-wrapper px-3">
                <div className="feature-card-item card-flip">
                  <div className="front-of-card front pt-5 pb-2 shadow-lg bg-white d-flex flex-column align-items-center justify-content-center">
                    <div className='py-3'> <img src={CardImage} className='course-card-image'/></div>
                    <div className="content-card text-start pt-3">
                      <span className='tag-course'><a href='#'>Arts & Science</a></span>
                       <h4 className='tag-heading'>Using Creative Problem Solving</h4>
                    </div>
                    <div className='rating-section d-flex justify-content-between'>
                        <div className="book-container">
                        <img src={bookImg} className='cat-image' alt='course image'/>
                        <span class="lessons-count"> 10 Lessons</span>
                        </div>
                    </div>
                  </div>
                  <div className="back-of-card back bg-dark">
                  </div>
                </div>
              </div>
            </div>
          </div>
          </section>
    </Wrapper>
  )
}
const Wrapper = styled.section`
background-color: #f7f6fa;
.tag-heading{
  color: #2C234D;
  line-height: 40px;
}
.rating-section{
  border-top: 2px dotted #c3c2c8;
} 
.tabs li{
  text-decoration: none;
  list-style: none;

}
.cat-image{
  width: 25px;
}
.tag-course{
  display: inline-block;
    height: 26px;
    background: rgba(252, 46, 144, .1);
    font-size: 13px;
    line-height: .8;
    
    font-weight: 600;
    text-align: center;
    border-radius: 3px;
    padding: 7px 11px;
    margin: 0 0 14px;
}
.tag-course a{
  color: #fc2e90;
  text-decoration: none;
}
.course-card-image{
  width: 200px;
}
.courses_heading{
  font-size: 40px;
  font-family: 'Open Sans';
  width: 85%;
}
.tabs li a{
 text-decoration: none;
color: #0404047a;
font-size: 18px;
transition: ease all 0.4s;
font-family: 'Open Sans';
}
.lessons-count{
  color: #5838fc;
  font-size: 14px;
} 
.a-tag-course:hover{
  color: #5838fc;
}
.card-flip {
  color: inherit;
  cursor: pointer;
  /* width: calc(33% - 2rem);
  min-width: calc(33% - 2rem); */
  min-height: 500px;
  perspective: 1000px;
  position: relative;
}
@media screen and (max-width: 800px) {
  .card-flip {
    width: calc(50% - 2rem);
  }
}
@media screen and (max-width: 500px) {
  .card-flip {
    width: 100%;
  }
}

.front,
.back {
  display: flex;
  border-radius: 6px;
  background-position: center;
  background-size: cover;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: ease-in-out 600ms;
}

.front {
  background-size: cover;
  padding: 2rem;
  font-size: 1.618rem;
  font-weight: 600;
  color: #fff;
  overflow: hidden;
  font-family: Poppins, sans-serif;
}
.front:before {
  position: absolute;
  display: block;
  content: "";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f7f6fa;
  opacity: 0.25;
  z-index: -1;
}
.card-flip:hover .front {
  transform: rotateY(180deg);
}
.card-flip:nth-child(even):hover .front {
  transform: rotateY(-180deg);
}

.back {
  background: #fff;
  transform: rotateY(-180deg);
  padding: 0 2em;
}
.back .button {
  background: linear-gradient(135deg, #1a9be6, #1a57e6);
}
.back .button:before {
  box-shadow: 0 0 10px 10px rgba(26, 87, 230, 0.25);
  background-color: rgba(26, 87, 230, 0.25);
}
.card-flip:hover .back {
  transform: rotateY(0deg);
}
.card-flip:nth-child(even) .back {
  transform: rotateY(180deg);
}
.card-flip:nth-child(even) .back .button {
  background: linear-gradient(135deg, #e61a80, #e61a3c);
}
.card-flip:nth-child(even) .back .button:before {
  box-shadow: 0 0 10px 10px rgba(230, 26, 60, 0.25);
  background-color: rgba(230, 26, 60, 0.25);
}
.card-flip:nth-child(even):hover .back {
  transform: rotateY(0deg);
}

.button {
  transform: translateZ(40px);
  cursor: pointer;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  font-weight: bold;
  color: #fff;
  padding: 0.5em 1em;
  border-radius: 100px;
  font: inherit;
  border: none;
  position: relative;
  transform-style: preserve-3d;
  transition: 300ms ease;
}
.button:before {
  transition: 300ms ease;
  position: absolute;
  display: block;
  content: "";
  transform: translateZ(-40px);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  height: calc(100% - 20px);
  width: calc(100% - 20px);
  border-radius: 100px;
  left: 10px;
  top: 16px;
}
.button:hover {
  transform: translateZ(55px);
}
.button:hover:before {
  transform: translateZ(-55px);
}
.button:active {
  transform: translateZ(20px);
}
.button:active:before {
  transform: translateZ(-20px);
  top: 12px;
}
`;
export default CoursesListing;