import React from 'react';
import Card from 'react-bootstrap/Card';

const BlogPost = ({ title, description, date, image, url }) => {
  return (
    <Card className="mb-4 p-3 bg-dark text-light" style={{ width: '100%' }}>
      <Card.Body className="text-center">
      <a href={url}  target="_blank" rel="noopener noreferrer">
        <h3>{title}</h3>
        </a>
        <h5>{date}</h5>
        <div className="blog-image-preview">
            <img src={image} alt={title} className="blog-preview-image" />
        </div>
        <p 
          className="mt-3" 
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </Card.Body>
    </Card>
  );
};

export default BlogPost;