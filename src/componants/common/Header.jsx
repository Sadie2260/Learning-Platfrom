import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import ArticleIcon from '@mui/icons-material/Article';
import PsychologyIcon from '@mui/icons-material/Psychology';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import { useState , useEffect } from 'react';
export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Wrapper>
    <Navbar collapseOnSelect expand="lg" fixed="top" className={`${scrolled ? 'scrolled' : 'bg-body-transparent'}`}>
    <Container className='py-3'>
      <Navbar.Brand href="#home"><svg width="40" height="40" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M44 22C44 34.1 34.1 44 22 44C9.9 44 0 34.1 0 22C0 9.9 9.9 0 22 0C34.1 0 44 9.9 44 22Z" fill="black"/>
<path d="M14 12H24C29.5228 12 34 16.4772 34 22C34 27.5228 29.5228 32 24 32H14V12Z" stroke="url(#paint0_linear)" strokeWidth="1.11111"/>
<path d="M30.3581 14.3347C28.6503 12.9333 26.6553 12.0237 24.2764 12L14.2469 22L24.2764 32C26.6552 31.9762 28.6503 31.041 30.3581 29.6397C30.3166 29.5982 27.6374 27.0121 26.6669 26.0446C25.6965 25.0772 23.2779 22.7255 22.5501 22C22.5501 22 30.3166 14.3762 30.3581 14.3347Z" stroke="url(#paint1_linear)" strokeWidth="1.11111"/>
<defs>
<linearGradient id="paint0_linear" x1="14" y1="12" x2="14" y2="32" gradientUnits="userSpaceOnUse">
<stop stopColor="#9EE1EC"/>
<stop offset="1" stopColor="#E5A7E0"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="14.2469" y1="12" x2="14.2469" y2="32" gradientUnits="userSpaceOnUse">
<stop stopColor="#9EE1EC"/>
<stop offset="1" stopColor="#E5A7E0"/>
</linearGradient>
</defs>
</svg>
</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="d-flex w-100 justify-content-end">
      <li className='mx-lg-2'><a className='link-header' href="#home"><ArticleIcon style={{ fontSize: "16px", marginRight:"8px"}}/><span>Home </span></a></li>
      <li className='mx-lg-2'><a className='link-header' href="#features"><PsychologyIcon  style={{ fontSize: "16px", marginRight:"8px"}}/><span>Courses</span></a></li>
      <li className='mx-lg-2'><a className='link-header' href="#lectures"><FeaturedPlayListIcon  style={{ fontSize: "16px", marginRight:"8px"}}/><span>Blogs</span></a></li>
      <div className="wrapper_btn">  <button className='btn btn-lg btn-navbar'>Join for free</button></div>

          </Nav>
      </Navbar.Collapse>

    </Container>

  </Navbar>
  </Wrapper>
  )
}
const Wrapper = styled.section`
z-index: 99;
  .link-header{
    padding:0.7rem 1.3rem!important;
    font-family: 'Segoe UI';
    line-height: 15px;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    text-decoration: none;
    color: #fdfdfdcf;
    margin: auto 0.6rem;
    align-items: center;
    border-radius: 15px;
    transition: all 0.6s ease-in-out;
  };
  .link-header:hover{
    background: rgba(255, 255, 255, 0.2) !important;
    color: #fff;
    box-shadow: rgba(31, 47, 71, 0.25) 0px 20px 40px, rgba(0, 0, 0, 0.1) 0px 1px 5px, rgba(255, 255, 255, 0.4) 0px 0px 0px 0.5px inset !important;
  }
  .navbar-collapse.collapse.show{
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.4s ease 0s;

  }
  .navbar-collapse.collapse.show .link-header{
  color: #00000093 !important;
  width: fit-content;
  font-size: 14px;
  padding: 15px 30px !important;
  }
  .navbar-collapse.collapse.show .navbar-nav{
  padding: 30px 0;
  }
  .navbar-collapse.collapse.show .btn-navbar{

background-color:  #5838fc;
font-size: 14px;
  }
  .navbar-toggler{
   background: #fff !important ;
  }
  .navbar-collapse.collapse.show .wrapper_btn{
display: flex;
align-items: center;
justify-content: start;
margin-left: 38px;
margin-top: 10px;
  }

  .navbar-collapse.collapse{
    transition: all 0.4s ease 0s;
    background: transparent !important;
  }
  .scrolled{
    background: #5838fc;
  }
  .btn-navbar{
    color: #fff;
    border: #ffffff9f solid 1px;
    font-size: 15px;
    font-weight: 600;
    padding: 8px 23px;
    border-radius: 3px;
    transition: all 0.4s ease;
  }
  .btn-navbar:hover{
    background: #fff;
    color: #000;
    /* border: 0; */
  }

`;
