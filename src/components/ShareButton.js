import React from 'react';

const ShareButton = ({ shareFunction }) => {
  return (
    <button onClick={shareFunction}>Share</button>
  );
};

export default ShareButton;
