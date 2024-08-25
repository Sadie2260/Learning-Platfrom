import React from 'react';
import styled from 'styled-components';
import blogsBg from '../../assets/blog-bg.png';
import itemImg from '../../assets/Untitled.png';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
function BlogsSection() {
  return (
    <Wrapper className='container-fluid' style={{backgroundImage:`url("${blogsBg}")`}}>
<div className="container pt-3">
    <h5 className='text-center heading_main'>Secrets of<br/> 
    <b>Learning Revealed in Blogs</b>
</h5>
<div className='cards-container row pt-3'>
<div className="col-lg-4 col-md-6 px-4">
<div className='card-item'>
    <div className="img-card-item">
    <img src={itemImg}  className='card-item-image w-100' />
    </div>
    <div className='content-card-item pb-3 px-4'>
        <div className='d-flex flex-row py-2 justify-content-between align-items-center'>
            <span className='tag'>General Knowledge</span>
            <span className='date-card'>12/23/2024</span>
        </div>
        <div>
        <h6 className='blog-section-card-heading'>Build A Full Web Chat App From Scratch.</h6>
        <a className='btn btn-card-blog px-0' href='#'>Read more <ArrowRightAltIcon/></a>
        </div>
    </div>
</div>
</div>
<div className="col-lg-4 col-md-6 px-4">
<div className='card-item'>
    <div className="img-card-item">
    <img src={itemImg}  className='card-item-image w-100' />
    </div>
    <div className='content-card-item pb-3 px-4'>
        <div className='d-flex flex-row py-2 justify-content-between align-items-center'>
            <span className='tag'>General Knowledge</span>
            <span className='date-card'>12/23/2024</span>
        </div>
        <div>
        <h6 className='blog-section-card-heading'>Build A Full Web Chat App From Scratch.</h6>
        <a className='btn btn-card-blog px-0' href='#'>Read more <ArrowRightAltIcon/></a>
        </div>
    </div>
</div>
</div>
<div className="col-lg-4 col-md-6 px-4">
<div className='card-item'>
    <div className="img-card-item">
    <img src={itemImg}  className='card-item-image w-100' />
    </div>
    <div className='content-card-item pb-3 px-4'>
        <div className='d-flex flex-row py-2 justify-content-between align-items-center'>
            <span className='tag'>General Knowledge</span>
            <span className='date-card'>12/23/2024</span>
        </div>
        <div>
        <h6 className='blog-section-card-heading'>Build A Full Web Chat App From Scratch.</h6>
        <a className='btn btn-card-blog px-0' href='#'>Read more <ArrowRightAltIcon/></a>
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
padding: 25% 0 7% 0;
background-position: left;
    background-size: cover;
    background-repeat: no-repeat;
.card-item-image{
    border-radius: 10px 10px 0 0;
}
    .tag{
    background: rgba(252, 46, 144, .1);
    color: red;
    padding: 5px 7px;
    margin: 10px 0;
    border-radius: 20px;
    font-size: 12px;
}
.blog-section-card-heading{
    font-size: 1.4rem;
    line-height: 28px;
    font-weight: 500;
    font-family: 'Open Sans';
}
.date-card{
    font-size: 13px;
    font-weight: 600;
}

.heading_main{
    font-size: 34px;
    line-height: 44px;
    color: #2c234d;
    margin: 0 0 61px;
    font-weight: 400;
    font-family: 'Open Sans';
}
.card-item{
    position: relative;
    background: #fff;
    border-radius: 10px;
    margin-bottom: 30px;
    -webkit-transition: all 0.4s ease;
    -o-transition: all 0.4s ease;
    transition: all 0.4s ease;
    -webkit-box-shadow: 0px 2px 4px 0px rgba(21, 14, 56, 0.08);
    -moz-box-shadow: 0px 2px 4px 0px rgba(21, 14, 56, 0.08);
    box-shadow: 0px 2px 4px 0px rgba(21, 14, 56, 0.08);
}
.btn-card-blog:hover{
    color: #5838fc;
}
`;
export default BlogsSection;