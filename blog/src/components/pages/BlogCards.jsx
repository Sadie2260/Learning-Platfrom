import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CardImage = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  height: 200px;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h2`
  font-size: 18px;
  color: #333;
`;

const CardMeta = styled.div`
  font-size: 14px;
  color: #777;
  margin-top: 10px;
`;

const BlogCard = ({ post }) => {
  return (
    <Card>
      <CardImage img={post.img} />
      <CardContent>
        <CardMeta>
          <span>{post.date}</span> &middot; <span>{post.comments}</span>
        </CardMeta>
        <CardTitle>{post.title}</CardTitle>
      </CardContent>
    </Card>
  );
};

export default BlogCard;