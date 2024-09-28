import React from 'react'

const VideoCard = ({ image, title, description, alt }) => {
    return (
      <div className="flex items-start space-x-4">
        <img src={image} alt={alt} className="w-24 h-24 object-cover rounded-lg" />
        <div>
          <h4 className="font-semibold text-lg">{title}</h4>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
      </div>
    );
  };
  

export default VideoCard