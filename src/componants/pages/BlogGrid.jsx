import React from 'react';
import styled from 'styled-components';
import BlogCard from './BlogCard';

const GridContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const posts = [
  {
    id: 1,
    date: "April 22, 2020",
    comments: "6 Comments",
    title: "Build A Full Web Chat App From Scratch.",
    img: "image1_url", // Replace with the actual image URL or use local images
  },
  {
    id: 2,
    date: "January 24, 2020",
    comments: "4 Comments",
    title: "Insights on How to Improve Your Teaching.",
    img: "image2_url",
  },
  // Add more posts as per the grid you want to replicate
];

const BlogGrid = () => {
  return (
    <GridContainer>
      <h1>Blog Grid</h1>
      <Grid>
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </Grid>
    </GridContainer>
  );
};

export default BlogGrid;