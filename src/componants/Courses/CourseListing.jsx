import React from 'react';
import styled from 'styled-components';
import WindowIcon from '@mui/icons-material/Window';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CardPic from '../../assets/p1.jpg';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import GroupsIcon from '@mui/icons-material/Groups';
import AvatarImage from '../../assets/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
function CourseListing() {
  return (
    <Wrapper className='container-fuild'>
        <div className="container listing-wrapper mt-5 pt-4">
        <div className="sorting-wrapper py-4 px-3 row">
          <div className="col-md-6 d-flex align-items-center text-start">
          <WindowIcon style={{fontSize:"15px",color:"#5d5a6787"}}/>
            <h2 className="mb-0 heading_sorting">
               Courses Grid</h2>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
             <div className="d-flex search_feilds_wrapper">
             <input placeholder="Search by title" className="input" name="text" type="text" />
             </div>
             <div className="sortby_wrapper mx-2 d-flex">
              <div className="sortBy_inner_div w-100 p-3 align-items-center d-flex">
                <p className='sortBy_heading w-100 mb-0'>Sort by:</p>
                 <select name="sorting" id="sorting" className='form-control select_sorting border-0'>
                <option value="High to low">High to low</option>
                <option value="Newest">Newest</option>
                <option value="popular course">Popular Course</option>
                </select>
                <ArrowDropDownIcon/>
                
              </div>
             </div>
              </div>
               </div>
               
        </div>
        <div className="tabsContainer container">
          <div className="row w-100">
            <div className="col-12">
            <div className="card_custom my-4 bg-white row px-0">
              <div className="col-md-4 px-0 position-relative">
                <span className='position-absolute bg-warning m-3 px-3 py-2 rounded-3 text-light'>Software Engeering</span>
                <img src={CardPic} className="imgCard" alt="" />
              </div>
              <div className="card-body_custom col-md-8">
                <div className='card-content-container border-bottom pl-4'>
                  <div className="icons_div pb-4">
                    <span className='book_icon_wrapper'><LocalLibraryIcon style={{color:"#5838fc",fontSize:"16px"}}/> <span className='icon_title'>Lessons</span></span>
                    <span className='book_icon_wrapper' style={{marginLeft:"3%"}}><GroupsIcon style={{color:"#5838fc",fontSize:"16px"}}/> <span className='icon_title'>203</span></span>
                  </div>
                <a href='#'>
                  <h4 className="card-title mb-4">Special title treatment</h4>
                  </a>
                <p className="card-text mb-4">With supporting text below as a natural lead-in to additional content With supporting text below as a natural lead-in to additional content.</p>
                <a type="button" className="btn btn-primary px-4 mt-3 py-2 text-light">Enroll Now</a>
                </div>
                <div className="card-footer d-flex justify-content-between">
                  <div className="d-flex">
                    <div><img src={AvatarImage} className='avatar-image-card rounded-5' alt="" /><span className='avatar-name'>Maria Marcay</span></div>
                    
                  </div>
                  <div className="rating-course-card d-flex align-items-center">
                    <div className='stars-wrapper'> <StarIcon style={{color:"#fcca31",fontSize:"18px"}}/><StarIcon style={{color:"#fcca31",fontSize:"18px"}}/><StarIcon style={{color:"#fcca31",fontSize:"18px"}}/><StarHalfIcon style={{color:"#fcca31",fontSize:"18px"}}/><StarBorderIcon style={{color:"#fcca31",fontSize:"18px"}}/>
                    </div>
                    <p className='rating-text mb-0 mt-1'>Rating (4.5)</p>
                  </div>
                </div>
                </div>
                </div>
               </div>
               
               </div>
               </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
background-color: #f7f6fa;
font-family: "Open Sans";
.avatar-image-card{
  width: 35px;
  height: 35px;
}
.rating-text{
  color: #5d5a6796;
  font-size: 12px;
}
.avatar-name{
  font-size: 13px;
  margin-left: 14px;
  font-weight: 700;
  line-height: .8;
  color: #5d5a67d9;
}
.icon_title{
  font-size: 14px;
  color: #5d5a67;
  font-weight: 600;
  margin-left: 6px;
}
.imgCard{
  width: 100%;
    border-radius: 20px 0 0 20px;
    max-height: 400px;
}
.card-text{
  font-weight: 500;
  color: #5d5a67b5;
}
.card-content-container{
  padding: 50px 90px 0;
  height: 87%;
}
.card-content-container a{
text-decoration: none;
color: #000;
}
.card-footer{
  height: 13%;
  padding: 9px  90px;

}
.sortBy_inner_div{
  height: 44px;
    min-width: 250px;
    border-radius: 4px;
    background: #f2f2f2;
}
.card_custom{
  border-radius: 20px;
}
.sortBy_heading{
  font-weight:600;
  font-size: 14px;
}
.select_sorting:focus{
  border: 0;
  box-shadow: none !important;
  outline: none !important;
}
.select_sorting{
  background: #f2f2f2;
  min-width: 142px;
  font-size: 14px;
}

.sorting-wrapper{
    width: 100%;
    background: #fff;
    border-radius: 5px;
    position: relative;
    
    display: flex;
    justify-content: space-between;
    -webkit-box-shadow: 0px 2px 4px 0px rgba(11, 02, 55, 0.06);
    -moz-box-shadow: 0px 2px 4px 0px rgba(11, 02, 55, 0.06);
    box-shadow: 0px 2px 4px 0px rgba(11, 02, 55, 0.06);
}
.heading_sorting{
  margin-left: 10px;
  color: #5d5a6787;
      font-weight: 600;
      font-size: 15px;
}
.input {
  max-width: 380px;
  background-color: #f2f2f2;
  border: none;
  padding: 10px;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  color: #000;
}

.input:focus {
  animation: rotateShadow 2s infinite linear;
}

@keyframes rotateShadow {
  0% {
    box-shadow: -2px -2px 8px 1px #aa00ff, 2px 2px 8px 1px #3700ff;
  }
  25% {
    box-shadow: -2px 2px 8px 1px #aa00ff, 2px -2px 8px 1px #3700ff;
  }
  50% {
    box-shadow: 2px 2px 8px 1px #aa00ff, -2px -2px 8px 1px #3700ff;
  }
  75% {
    box-shadow: 2px -2px 8px 1px #aa00ff, -2px 2px 8px 1px #3700ff;
  }
  100% {
    box-shadow: -2px -2px 8px 1px #aa00ff, 2px 2px 8px 1px #3700ff;
  }
}

`;
export default CourseListing