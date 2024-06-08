import React from 'react'

const DummySkeletonCategoryCard = () => {
  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6  lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="animate-pulse group relative px-2 py-2 shadow-md rounded-md flex flex-col justify-between"
            >
              <div className="h-40 aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-48"></div>

              <div className="mt-4 flex flex-col">
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="text-sm font-medium text-gray-900 flex items-center justify-between px-2">
                  <div className="h-6 bg-gray-300 rounded w-1/4"></div>
                  <div className="h-6 bg-gray-300 rounded w-1/4 line-through"></div>
                  <div className="h-6 bg-gray-300 rounded w-1/4 text-green-500"></div>
                </div>
                <div className="py-2">
                  {/* Placeholder for future select options */}
                  <div className="h-10 bg-gray-300 rounded w-full mt-1"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DummySkeletonCategoryCard