// Loading.js
import React from 'react';
import '../css/loading.css'; // Create and style this CSS as needed

const Loading = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
