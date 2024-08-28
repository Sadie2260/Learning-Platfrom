import React, { useState } from "react";
import styled from "styled-components";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import teacherAvatar from "../../assets/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import courseImage from "../../assets/undraw_Online_learning_re_qw08.png";
import Accordion from "react-bootstrap/Accordion";
import Table from "react-bootstrap/Table";
import LockIcon from "@mui/icons-material/Lock";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import { CommentSection } from "react-comments-section";
import "react-comments-section/dist/index.css";
function AboutCourse() {
	const now = 60;
	const now1 = 90;
	const now2 = 40;
    const data =[
        {
          userId: '02b',
          comId: '017',
          fullName: 'Lily',
          userProfile: teacherAvatar,
          text: 'I think you have a point🤔',
          avatarUrl: teacherAvatar,
          replies: []
        }
      ];
	return (
		<Wrapper className='container-fluid'>
			<div className='container'>
				<div className='row w-100  py-5'>
					<div className='col-8'>
						<div className='cousre-details-container py-5 d-flex justify-content-between'>
							<div className='title-container'>
								<h2 className='text-dark heading_course_detail'>
									Learn Website Development
								</h2>
								<div className='small-intro py-3 d-flex'>
									<div className='avatar-container d-flex'>
										<div>
											<img
												src={teacherAvatar}
												alt='...'
												className='rounded-circle'
												style={{ width: "45px" }}
											/>
										</div>
										<div className='name-container'>
											<h6 className='text-opacity-75 mb-0 text-secondary'>
												Instructor
											</h6>
											<p className='text-danger-emphasis mb-0 text-opacity-25'>
												Anthoy
											</p>
										</div>
									</div>
									<div className='vr mx-3'></div>
									<div className='review-container d-flex'>
										<div className='stars-wrapper'>
											{" "}
											<StarIcon
												style={{ color: "#fcca31", fontSize: "18px" }}
											/>
											<StarIcon
												style={{ color: "#fcca31", fontSize: "18px" }}
											/>
											<StarIcon
												style={{ color: "#fcca31", fontSize: "18px" }}
											/>
											<StarHalfIcon
												style={{ color: "#fcca31", fontSize: "18px" }}
											/>
											<StarBorderIcon
												style={{ color: "#fcca31", fontSize: "18px" }}
											/>
										</div>
										<p className='rating-text mb-0 mt-1 px-2'>Rating (4.5)</p>
									</div>
								</div>
								<div className='image-container'>
									<img src={courseImage} className='w-100' alt='...' />
								</div>
							</div>
						</div>
						<div className='tabs-container'>
							<Tabs
								defaultActiveKey='overview'
								transition={false}
								id='noanim-tab-example'
								className='mb-3'
							>
								<Tab eventKey='overview' title='Overview'>
									<h4 className='py-3'>Course Description:</h4>
									<p>
										On the other hand, we denounce with righteous indignation
										and dislike men who are so beguiled and demoralized by the
										charms of pleasure of the moment, so blinded by desire, that
										they cannot foresee the pain and trouble that are bound to
										ensue; and equal blame belongs to those who fail in their
										duty through weakness of will, which is the same as saying
										through shrinking from toil and pain. These cases are
										perfectly simple and easy to distinguish. In a free hour,
										when our power of choice is untrammelled and when nothing
										prevents our being able to do what we like best, every
										pleasure is to be welcomed and every pain avoided. But in
										certain circumstances and owing to the claims of duty or the
										obligations of business it will frequently occur that
										pleasures have to be repudiated and annoyances accepted. The
										wise man therefore always holds in these matters to this
										principle of selection: he rejects pleasures to secure other
										greater pleasures, or else he endures pains to avoid worse
										pains.
									</p>
								</Tab>
								<Tab eventKey='lectures' title='Lectures'>
									<Accordion defaultActiveKey='0'>
										<Accordion.Item eventKey='0'>
											<Accordion.Header>
												Chapter 1 (What is internet?)
											</Accordion.Header>
											<Accordion.Body className='p-0'>
												<Table striped bordered hover>
													<tbody>
														<tr>
															<td>1</td>
															<td>whats an internet and how it works?</td>
															<td>
																<span className='p-1 rounded-1 time-course'>
																	2 hours
																</span>
															</td>
															<td>
																<LockIcon
																	style={{ color: "#5838fc", fontSize: "15px" }}
																/>
															</td>
														</tr>
														<tr>
															<td>2</td>
															<td>
																whats is web development and how it works?
															</td>
															<td>
																<span className='p-1 rounded-1 time-course'>
																	3 hours
																</span>
															</td>
															<td>
																<LockIcon
																	style={{ color: "#5838fc", fontSize: "15px" }}
																/>
															</td>
														</tr>
														<tr>
															<td>3</td>
															<td>Larry the Bird</td>
															<td>
																<span className='p-1 rounded-1 time-course'>
																	2 hours
																</span>
															</td>
															<td>
																<LockIcon
																	style={{ color: "#5838fc", fontSize: "15px" }}
																/>
															</td>
														</tr>
													</tbody>
												</Table>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey='1'>
											<Accordion.Header>Chapter 2</Accordion.Header>
											<Accordion.Body className='p-0'>
												<Table striped bordered hover>
													<tbody>
														<tr>
															<td>1</td>
															<td>whats an internet and how it works?</td>
															<td>
																<span className='p-1 rounded-1 time-course'>
																	2 hours
																</span>
															</td>
															<td>
																<LockIcon
																	style={{ color: "#5838fc", fontSize: "15px" }}
																/>
															</td>
														</tr>
														<tr>
															<td>2</td>
															<td>
																whats is web development and how it works?
															</td>
															<td>
																<span className='p-1 rounded-1 time-course'>
																	3 hours
																</span>
															</td>
															<td>
																<LockIcon
																	style={{ color: "#5838fc", fontSize: "15px" }}
																/>
															</td>
														</tr>
														<tr>
															<td>3</td>
															<td>Larry the Bird</td>
															<td>
																<span className='p-1 rounded-1 time-course'>
																	2 hours
																</span>
															</td>
															<td>
																<LockIcon
																	style={{ color: "#5838fc", fontSize: "15px" }}
																/>
															</td>
														</tr>
													</tbody>
												</Table>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey='2'>
											<Accordion.Header>Chapter 3</Accordion.Header>
											<Accordion.Body className='p-0'>
												<Table striped bordered hover>
													<tbody>
														<tr>
															<td>1</td>
															<td>whats an internet and how it works?</td>
															<td>
																<span className='p-1 rounded-1 time-course'>
																	2 hours
																</span>
															</td>
															<td>
																<LockIcon
																	style={{ color: "#5838fc", fontSize: "15px" }}
																/>
															</td>
														</tr>
														<tr>
															<td>2</td>
															<td>
																whats is web development and how it works?
															</td>
															<td>
																<span className='p-1 rounded-1 time-course'>
																	3 hours
																</span>
															</td>
															<td>
																<LockIcon
																	style={{ color: "#5838fc", fontSize: "15px" }}
																/>
															</td>
														</tr>
														<tr>
															<td>3</td>
															<td>Larry the Bird</td>
															<td>
																<span className='p-1 rounded-1 time-course'>
																	2 hours
																</span>
															</td>
															<td>
																<LockIcon
																	style={{ color: "#5838fc", fontSize: "15px" }}
																/>
															</td>
														</tr>
													</tbody>
												</Table>
											</Accordion.Body>
										</Accordion.Item>
									</Accordion>
								</Tab>

								<Tab eventKey='reviews' title='Reviews'>
									<h4 className='py-3'>Course Reviews:</h4>
									<div className='row'>
										<Card className='bg-opacity-10 bg-secondary border-0 p-4 col-3'>
											<Card.Body>
												<Card.Title className='card-title text-center fw-bolder h5'>
													Card Title
												</Card.Title>
												<Card.Text className='text-center'>
													<div className='stars-wrapper'>
														{" "}
														<StarIcon
															style={{ color: "#fcca31", fontSize: "18px" }}
														/>
														<StarIcon
															style={{ color: "#fcca31", fontSize: "18px" }}
														/>
														<StarIcon
															style={{ color: "#fcca31", fontSize: "18px" }}
														/>
														<StarHalfIcon
															style={{ color: "#fcca31", fontSize: "18px" }}
														/>
														<StarBorderIcon
															style={{ color: "#fcca31", fontSize: "18px" }}
														/>
													</div>
													<div className='reviews-count text-opacity-75 text-secondary py-2'>
														4 reviews
													</div>
												</Card.Text>
											</Card.Body>
										</Card>
										<Card className='bg-opacity-10 bg-secondary d-flex flex-column border-0 mx-2 p-4 col-8'>
											<div className='ratingNames py-2 w-100 row'>
												<div className='col-3'>Motivation</div>
												<div className='col-9'>
													<ProgressBar
														now={now}
														className='w-100'
														animated
														label={`${now}%`}
													/>
												</div>
											</div>
											<div className='ratingNames py-2 w-100 row'>
												<div className='col-3'>Motivation</div>
												<div className='col-9'>
													<ProgressBar
														now={now1}
														className='w-100'
														animated
														label={`${now1}%`}
													/>
												</div>
											</div>
											<div className='ratingNames py-2 w-100 row'>
												<div className='col-3'>Motivation</div>
												<div className='col-9'>
													<ProgressBar
														now={now2}
														className='w-100'
														animated
														label={`${now2}%`}
													/>
												</div>
											</div>
										</Card>
                                        <CommentSection 
    currentUser={{
      userId: '01',
      avatarUrl: teacherAvatar,
      fullName: 'Guest User'
    }}
    logIn={{
      loginLink: 'http://localhost:3000/login',
      signupLink: 'http://localhost:3000/signup'
    }}
    commentData={data}
  />
           
									</div>
								</Tab>
							</Tabs>
						</div>
					</div>
					<div className='col-3'>
						<aside className='widget py-3'>
							<div className='info-course'>
								<ul>
									<li>
										<i className='icon_house_alt'></i>
										<span>Instructor: </span> Justin Case
									</li>
									<li>
										<i className='icon_document_alt'></i>
										<span>Lectures: </span> 14
									</li>
									<li>
										<i className='icon_clock_alt'></i>
										<span>Duration: </span> 10 weeks
									</li>
									<li>
										<i className='icon_profile'></i>
										<span>Enrolled: </span> 75 students
									</li>
									<li>
										<i className='icon_cog'></i>
										<span>Language: </span> English
									</li>	
								</ul>
								<a className='bisylms-btn' href='#'>
									Enroll Course
								</a>
							</div>
						</aside>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}
const Wrapper = styled.section`
	font-family: "Open sans";
	.name-container {
		padding-left: 20px;
	}
	.card-title {
		color: #5838fc;
	}
	.time-course {
		font-size: 13px;
		background: #5838fc24;
		color: #5838fc;
	}
	td {
		font-size: 13px;
	}
	.bisylms-btn {
		border: none;
		font-size: 15px;
		width: 80%;
		font-weight: 600;
		color: #fff;
		background: #5838fc;
		height: 50px;
		padding: 17px 35px;
		margin-left: 32px;
		text-align: center;
		display: inline-block;
		text-decoration: none;
		line-height: 0.8;
		letter-spacing: 0;
		position: relative;
		border-radius: 3px;
		z-index: 1;
		cursor: pointer;
		outline: none;
		-webkit-transition: all 0.4s ease;
		-o-transition: all 0.4s ease;
		transition: all 0.4s ease;
	}
	.widget {
		background: #fff;
		-webkit-box-shadow: 0px 20px 50px 0px rgba(11, 02, 55, 0.1);
		-moz-box-shadow: 0px 20px 50px 0px rgba(11, 02, 55, 0.1);
		box-shadow: 0px 20px 50px 0px rgba(11, 02, 55, 0.1);
	}
	.widget ul {
		list-style: none;
	}
	.widget ul li {
		width: 100%;
		font-size: 14px;
		line-height: 40px;
		color: #5d5a6796;
		font-weight: 400;
		border-bottom: 1px solid #eceef3;
		margin: 0;
		padding: 0 0 1px;
	}
`;
export default AboutCourse;
