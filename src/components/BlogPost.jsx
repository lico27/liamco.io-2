// import React from 'react';
// import Card from 'react-bootstrap/Card';

// const BlogPost = ({ title, description, date, image, url }) => {
//   return (
//     <Card className="mb-4 p-3 bg-dark text-light" style={{ width: '100%' }}>
//       <Card.Body className="text-center">
//       <a href={url}>
//         <h3>{title}</h3>
//         </a>
//         <h5>{date}</h5>
//         <div className="blog-image-preview">
//             <img src={image} alt={title} className="blog-preview-image" />
//         </div>
//         <p>{description}</p>
//       </Card.Body>
//     </Card>
//   );
// };

// export default BlogPost;

import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

const BlogPost = ({ title, description, date, image, url }) => {
  const [showIframe, setShowIframe] = useState(false);

  return (
    <Card className="mb-4 p-3 bg-dark text-light" style={{ width: '100%' }}>
      <Card.Body className="text-center">
        <h3 style={{ cursor: "pointer" }} onClick={() => setShowIframe(true)}>{title}</h3>
        <h5>{date}</h5>

        {!showIframe ? (
          <>
            <div className="blog-image-preview">
              <img 
                src={image} 
                alt={title} 
                className="blog-preview-image" 
                onClick={() => setShowIframe(true)} 
                style={{ cursor: "pointer" }} 
              />
            </div>
            <p className="mt-3">{description}</p>
          </>
        ) : (
          <iframe 
            src={url} 
            title={title} 
            className="blog-iframe"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        )}
      </Card.Body>
    </Card>
  );
};

export default BlogPost;
