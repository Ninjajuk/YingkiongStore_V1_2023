import React from 'react';


const Skeleton = () => {
  return (
    <div className="p-4 max-w-2xl mx-auto bg-white shadow-lg rounded-md animate-pulse">
      <div className="bg-gray-300 h-4 mb-2 rounded w-3/4"></div>
      <div className="bg-gray-300 h-4 mb-2 rounded w-1/2"></div>
      <div className="bg-gray-300 h-4 mb-2 rounded w-2/3"></div>
    </div>
  );
};

export default Skeleton;