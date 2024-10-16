import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f8f9fa',
    },
    content: {
      textAlign: 'center',
      color: '#333',
    },
    title: {
      fontSize: '8rem',
      fontWeight: '900',
      color: '#ff6b6b',
    },
    subtitle: {
      fontSize: '2rem',
      margin: '10px 0',
    },
    description: {
      fontSize: '1.2rem',
      marginBottom: '20px',
    },
    link: {
      padding: '10px 20px',
      backgroundColor: '#5cb85c',
      color: 'white',
      textDecoration: 'none',
      fontSize: '1rem',
      borderRadius: '5px',
      transition: 'background-color 0.3s',
    },
    linkHover: {
      backgroundColor: '#4cae4c',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>404</h1>
        <h2 style={styles.subtitle}>Page Not Found</h2>
        <p style={styles.description}>
          Oops! The page you are looking for does not exist!!
        </p>
        <Link
          to="/"
          style={styles.link}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.linkHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.link.backgroundColor)}
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
