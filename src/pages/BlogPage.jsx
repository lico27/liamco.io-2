import React from 'react';
import BlogPost from '../components/BlogPost';
import blogData from '../assets/js/blogData';

const BlogPage = () => {
  return (
    <div className='w-100 flex text-center pt-5'>
      <h1 className='mb-4 text-capitalize text-general'>Blog</h1>
      <div className='about-container mx-auto col-8 col-md-6 col-lg-4'>
      {blogData.map((post, index) => (
        <BlogPost 
          key={index}
          title={post.title}
          description={post.description}
          date={post.date}
          image={post.image}
          url={post.url}
        />
      ))}
    </div>
    </div>
  );
};

export default BlogPage;
