import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import styled from 'styled-components';

export default function BlogCard() {
    const categories = [
        { name: 'Web Design', count: 24 },
        { name: 'Marketing', count: 15 },
        { name: 'Frontend', count: 8 },
        { name: 'IT & Software', count: 13 },
        { name: 'Photography', count: 4 },
        { name: 'Technology', count: 16 },
        { name: 'General', count: 12 },
      ];
  return (
    <Wapper>
    <div class="container">
  <div class="row">
    <div class="col-sm-4">
    <div className="post-card">
      <div className="post-image">
        <img src="https://img.freepik.com/premium-psd/discount-3d-podium-product-display-social-media-instagram-story-template-flash-sale-super-sale_125322-160.jpg?uid=R134543391&ga=GA1.1.1753247489.1710237827&semt=ais_hybrid" alt="Post" />
      </div>
      <div className="post-info">
        <div className="post-meta">
          <span><i className="fas fa-calendar-alt"></i> January 24, 2020</span>
          <span><i className="fas fa-comments"></i> 4 Comments</span>
        </div>
        <h3 className="post-title">Insights on How to Improve Your Teaching.</h3>
        <a href="#" className="read-more">Read More <i className="fas fa-arrow-right"></i></a>
      </div>
    </div>
    </div>
    <div class="col-sm-4">
    <div className="post-card">
      <div className="post-image">
        <img src="https://img.freepik.com/premium-psd/discount-3d-podium-product-display-social-media-instagram-story-template-flash-sale-super-sale_125322-160.jpg?uid=R134543391&ga=GA1.1.1753247489.1710237827&semt=ais_hybrid" alt="Post" />
      </div>
      <div className="post-info">
        <div className="post-meta">
          <span><i className="fas fa-calendar-alt"></i> January 24, 2020</span>
          <span><i className="fas fa-comments"></i> 4 Comments</span>
        </div>
        <h3 className="post-title">Insights on How to Improve Your Teaching.</h3>
        <a href="#" className="read-more">Read More <i className="fas fa-arrow-right"></i></a>
      </div>
    </div>
    </div>
    <div class="col-sm-4">
    <div className="category-container">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <i className="fas fa-search"></i>
      </div>
      <div className="categories">
        <h3>Categories</h3>
        <ul>
          {categories.map((category) => (
            <li key={category.name}>
              {category.name} <span>({category.count})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  </div>
</div>
<br/><br/><br/>
<div class="container">
  <div class="row">
    <div class="col">
    <div className="post-card">
      <div className="post-image">
        <img src="https://img.freepik.com/premium-psd/discount-3d-podium-product-display-social-media-instagram-story-template-flash-sale-super-sale_125322-160.jpg?uid=R134543391&ga=GA1.1.1753247489.1710237827&semt=ais_hybrid" alt="Post" />
      </div>
      <div className="post-info">
        <div className="post-meta">
          <span><i className="fas fa-calendar-alt"></i> January 24, 2020</span>
          <span><i className="fas fa-comments"></i> 4 Comments</span>
        </div>
        <h3 className="post-title">Insights on How to Improve Your Teaching.</h3>
        <a href="#" className="read-more">Read More <i className="fas fa-arrow-right"></i></a>
      </div>
    </div>
    </div>
    <div class="col">
    <div className="post-card">
      <div className="post-image">
        <img src="https://img.freepik.com/premium-psd/discount-3d-podium-product-display-social-media-instagram-story-template-flash-sale-super-sale_125322-160.jpg?uid=R134543391&ga=GA1.1.1753247489.1710237827&semt=ais_hybrid" alt="Post" />
      </div>
      <div className="post-info">
        <div className="post-meta">
          <span><i className="fas fa-calendar-alt"></i> January 24, 2020</span>
          <span><i className="fas fa-comments"></i> 4 Comments</span>
        </div>
        <h3 className="post-title">Insights on How to Improve Your Teaching.</h3>
        <a href="#" className="read-more">Read More <i className="fas fa-arrow-right"></i></a>
      </div>
    </div>
    </div>
    <div class="col">
    <div class="popular-posts">
    <h3>Popular Posts</h3>
    <ul>
        <li>
            <img src="https://img.freepik.com/free-photo/thinking-young-student-boy-sitting-desk-with-school-tools-holding-book-his-thumb-up-yellow_141793-74786.jpg?ga=GA1.1.1753247489.1710237827&semt=ais_hybrid" alt="Post Image"/>
            <div class="post-info">
                <h4>Using creative problem Solving</h4>
                <p>March 18, 2020</p>
            </div>
        </li>
        <li>
            <img src="https://img.freepik.com/free-photo/thinking-young-student-boy-sitting-desk-with-school-tools-holding-book-his-thumb-up-yellow_141793-74786.jpg?ga=GA1.1.1753247489.1710237827&semt=ais_hybrid" alt="Post Image"/>
            <div class="post-info">
                <h4>Fundamentals of UI Design</h4>
                <p>Jan 14, 2020</p>
            </div>
        </li>
        <li>
            <img src="https://img.freepik.com/free-photo/thinking-young-student-boy-sitting-desk-with-school-tools-holding-book-his-thumb-up-yellow_141793-74786.jpg?ga=GA1.1.1753247489.1710237827&semt=ais_hybrid" alt="Post Image"/>
            <div class="post-info">
                <h4>Making music with Other people</h4>
                <p>April 17, 2020</p>
            </div>
        </li>
        <li>
            <img src="https://img.freepik.com/free-photo/thinking-young-student-boy-sitting-desk-with-school-tools-holding-book-his-thumb-up-yellow_141793-74786.jpg?ga=GA1.1.1753247489.1710237827&semt=ais_hybrid" alt="Post Image"/>
            <div class="post-info">
                <h4>Brush strokes energize Trees in paintings</h4>
                <p>July 4, 2020</p>
            </div>
        </li>
    </ul>
</div>

    </div>
  </div>
</div>
<br/><br/><br/>
<div class="container">
  <div class="row">
    <div class="col">
    <div className="post-card">
      <div className="post-image">
        <img src="https://img.freepik.com/premium-psd/discount-3d-podium-product-display-social-media-instagram-story-template-flash-sale-super-sale_125322-160.jpg?uid=R134543391&ga=GA1.1.1753247489.1710237827&semt=ais_hybrid" alt="Post" />
      </div>
      <div className="post-info">
        <div className="post-meta">
          <span><i className="fas fa-calendar-alt"></i> January 24, 2020</span>
          <span><i className="fas fa-comments"></i> 4 Comments</span>
        </div>
        <h3 className="post-title">Insights on How to Improve Your Teaching.</h3>
        <a href="#" className="read-more">Read More <i className="fas fa-arrow-right"></i></a>
      </div>
    </div>
    </div>
    <div class="col">
    <div className="post-card">
      <div className="post-image">
        <img src="https://img.freepik.com/premium-psd/discount-3d-podium-product-display-social-media-instagram-story-template-flash-sale-super-sale_125322-160.jpg?uid=R134543391&ga=GA1.1.1753247489.1710237827&semt=ais_hybrid" alt="Post" />
      </div>
      <div className="post-info">
        <div className="post-meta">
          <span><i className="fas fa-calendar-alt"></i> January 24, 2020</span>
          <span><i className="fas fa-comments"></i> 4 Comments</span>
        </div>
        <h3 className="post-title">Insights on How to Improve Your Teaching.</h3>
        <a href="#" className="read-more">Read More <i className="fas fa-arrow-right"></i></a>
      </div>
    </div>
    </div>
    <div class="col">
    <div class="popular-tags">
    <h3>Popular Tags</h3>
    <div class="tags">
        <span>Blog IMS</span>
        <span>Design</span>
        <span>General</span>
        <span>Online</span>
        <span>Innovation</span>
        <span>Artist</span>
        <span>Education</span>
        <span>Motivation</span>
        <span>Politics</span>
        <span>Live Cases</span>
        <span>Live Cases</span>
    </div>
</div>

    </div>
  </div>
</div>
  </Wapper>

 
  )
}
 const Wapper=styled.section`
 .category-container {
  width: 80%; /* Adjust width as needed */
  margin: 0 auto;
  padding: 15px;
  border-radius: 10px;
  background-color: white; /* Adjust background color as needed */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  height:410px;
}

.search-bar {
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
}

.search-bar input {
  border: none;
  outline: none;
  background: none;
  width: 100%;
  font-size: 16px;
}

.search-bar i {
  margin-left: 10px;
  color: #999;
}

.categories h3 {
  font-size: 18px;
  margin-bottom: 15px;
}

.categories ul {
  list-style: none;
  padding: 0;
}

.categories li {
  margin: 10px 0;
  font-size: 16px;
  color: #555;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.categories li::before {
  content: '›';
  margin-right: 10px;
  color: #555;
}
/* ******************cards csss start***************************** */
.post-card {
  width: 90%; /* Adjust the width as needed */
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 0 auto;
}

.post-image img {
  width: 100%;
  height: auto;
}

.post-info {
  padding: 15px;
}

.post-meta {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #999;
  margin-bottom: 10px;
}

.post-meta i {
  margin-right: 5px;
}

.post-title {
  font-size: 18px;
  color: #333;
  margin-bottom: 15px;
}

.read-more {
  font-size: 14px;
  color: #333;
  text-decoration: none;
  display: flex;
  align-items: center;
}

.read-more i {
  margin-left: 5px;
  transition: transform 0.3s ease;
}

.read-more:hover i {
  transform: translateX(5px);
}
/* ******************cards csss end***************************** */


/* *****************************post card**************************** */
.popular-posts {
  width: 90%;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: 450px;
}

.popular-posts h3 {
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #333;
}

.popular-posts ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.popular-posts li {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.popular-posts li img {
  width: 50px;
  height: 50px;
  border-radius: 5px;
  object-fit: cover;
  margin-right: 15px;
}

.popular-posts .post-info h4 {
  margin: 0;
  font-size: 1em;
  color: #333;
}

.popular-posts .post-info p {
  margin: 5px 0 0;
  font-size: 0.85em;
  color: #888;
}

.popular-posts li:last-child {
  margin-bottom: 0;
}

/* ******************************Popular Tags************************* */
.popular-tags {
  width: 100%;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.popular-tags h3 {
  font-size: 1.5em;
  margin-bottom: 20px;
  color: #333;
}

.popular-tags .tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.popular-tags .tags span {
  background-color: #f0f0f0;
  padding: 8px 15px;
  border-radius: 5px;
  font-size: 0.9em;
  color: #555;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.popular-tags .tags span:hover {
  background-color: #e0e0e0;
}


`;