// src/Card1.jsx
import React from 'react';

const Card1 = ({ number, info, svg }) => {
  return (
    <div className="   ">
                {svg}
      <div className="text-3xl font-bold text-gray-900">{number}</div>
   
        <p className="text-sm text-gray-500">{info}</p>

   
    </div>
  );
};

export default Card1;
