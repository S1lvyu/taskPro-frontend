import React from 'react';
import { Link } from 'react-router-dom';
import notFoundPage from '../../assets/img/notFoundImg/pngwing-min.png';

const NotFoundPage = () => {

  return (
    <div    >
      <img
        src={notFoundPage}
        alt="funny monster"
        style={{
          width: '250px',
          height: '300px',
        }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <p>
          The page you`re looking for is now beyond our reach.
        </p>
        <p style={{ textAlign: 'center' }}>
          <Link
            style={{
              cursor: 'pointer',
              color: '#DE3163',
              textDecoration: 'underline',
              fontSize: '14px',
            }}
            to="/home"
          >
            Go to Home Page
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
