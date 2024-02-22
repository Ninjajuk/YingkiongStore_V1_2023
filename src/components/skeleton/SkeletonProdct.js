import React from 'react';


const SkeletonProduct = () => {
  return (

    <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6  lg:max-w-7xl lg:px-8">
    <div className="overflow-x-auto  bg-black rounded-lg shadow-lg">
      <ul className="flex items-center lg:justify-center whitespace-nowrap overflow-x-auto">
        <li
          className={`inline-block px-4 py-2  hover:bg-gray-600 cursor-pointer rounded-md text-gray-300 font-medium font-sans `}
        >
        </li>

      </ul>
    </div>

    <div className=" grid grid-cols-2 lg:grid-cols-4 gap-4 ">

        <div
          className=" group relative px-2 py-2 shadow-md rounded-md flex flex-col justify-between"
        >
          {/* <Link to={`/shop/${product.id}`}> */}
          <a href={`/shop/`}>
            <div className="h-40 w-full aspect-h-1 aspect-w-1  overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-48">
              <img
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
          </a>

          <div className="mt-4 flex flex-col">
            <a href={`/shop/`}>
              <p className=" font-medium text-gray-900">

              </p>
            </a>
            <p className="text-sm font-medium text-gray-900 flex items-center justify-between">
              <span className="font-semibold text-lg">
            
              </span>
              <span className="text-green-500">
               
              </span>
            </p>
            <div className="py-2">
            </div>
          </div>

          <div className="text-center py-3 mb-3">
            <button

              className={`w-full text-white bg-purple-700  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
            >
              <span className={`inline-block w-18 `}>
  
     
              </span>
            </button>
          </div>
  
        </div>

        <div
          className=" group relative px-2 py-2 shadow-md rounded-md flex flex-col justify-between"
        >
          {/* <Link to={`/shop/${product.id}`}> */}
          <a href={`/shop/`}>
            <div className="h-40 w-full aspect-h-1 aspect-w-1  overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-48">
              <img
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
          </a>

          <div className="mt-4 flex flex-col">
            <a href={`/shop/`}>
              <p className=" font-medium text-gray-900">

              </p>
            </a>
            <p className="text-sm font-medium text-gray-900 flex items-center justify-between">
              <span className="font-semibold text-lg">
            
              </span>
              <span className="text-green-500">
               
              </span>
            </p>
            <div className="py-2">
            </div>
          </div>

          <div className="text-center py-3 mb-3">
            <button

              className={`w-full text-white bg-purple-700  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
            >
              <span className={`inline-block w-18 `}>
  
     
              </span>
            </button>
          </div>
  
        </div>

        <div
          className=" group relative px-2 py-2 shadow-md rounded-md flex flex-col justify-between"
        >
          {/* <Link to={`/shop/${product.id}`}> */}
          <a href={`/shop/`}>
            <div className="h-40 w-full aspect-h-1 aspect-w-1  overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-48">
              <img
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
          </a>

          <div className="mt-4 flex flex-col">
            <a href={`/shop/`}>
              <p className=" font-medium text-gray-900">

              </p>
            </a>
            <p className="text-sm font-medium text-gray-900 flex items-center justify-between">
              <span className="font-semibold text-lg">
            
              </span>
              <span className="text-green-500">
               
              </span>
            </p>
            <div className="py-2">
            </div>
          </div>

          <div className="text-center py-3 mb-3">
            <button

              className={`w-full text-white bg-purple-700  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
            >
              <span className={`inline-block w-18 `}>
  
     
              </span>
            </button>
          </div>
  
        </div>

        <div
          className=" group relative px-2 py-2 shadow-md rounded-md flex flex-col justify-between"
        >
          {/* <Link to={`/shop/${product.id}`}> */}
          <a href={`/shop/`}>
            <div className="h-40 w-full aspect-h-1 aspect-w-1  overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-48">
              <img
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
          </a>

          <div className="mt-4 flex flex-col">
            <a href={`/shop/`}>
              <p className=" font-medium text-gray-900">

              </p>
            </a>
            <p className="text-sm font-medium text-gray-900 flex items-center justify-between">
              <span className="font-semibold text-lg">
            
              </span>
              <span className="text-green-500">
               
              </span>
            </p>
            <div className="py-2">
            </div>
          </div>

          <div className="text-center py-3 mb-3">
            <button

              className={`w-full text-white bg-purple-700  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
            >
              <span className={`inline-block w-18 `}>
  
     
              </span>
            </button>
          </div>
  
        </div>


    </div>
  </div>

  );
};

export default SkeletonProduct;
