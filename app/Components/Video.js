import React from 'react';

const Video = () => {
  return (
    <div>
      <video controls loop={true}>
        <source src="assets/RAVERS_SITE_DEMO.mov" />
      </video>
    </div>
  );
};

export default Video;
