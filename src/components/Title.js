import React from 'react';

const Title = ({ text, span }) => {
  return (
    <div className='section-title'>
      <h2>
        {text} <span>{span}</span>
      </h2>
    </div>
  );
};

export default Title;
