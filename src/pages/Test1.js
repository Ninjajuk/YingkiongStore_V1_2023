// import React, { useState, useEffect } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
// import axios from "axios";
// import { Circles } from "react-loader-spinner";

// const InfiniteScrollExample1 = () => {
//   const [items, setItems] = useState([]);
//   const [hasMore, setHasMore] = useState(true);
//   const [index, setIndex] = useState(1);

//   useEffect(() => {
//     axios
//       .get("https://api.escuelajs.co/api/v1/products?offset=0&limit=12")
//       .then((res) => setItems(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   const fetchMoreData = () => {
//     axios
//       .get(`https://api.escuelajs.co/api/v1/products?offset=${index}0&limit=12`)
//       .then((res) => {
//         setItems((prevItems) => [...prevItems, ...res.data]);

//         res.data.length > 0 ? setHasMore(true) : setHasMore(false);
//       })
//       .catch((err) => console.log(err));

//     setIndex((prevIndex) => prevIndex + 1);
//   };

//   return (
//     <InfiniteScroll
//       dataLength={items.length}
//       next={fetchMoreData}
//       hasMore={hasMore}
//       loader={        <div className="flex items-center justify-center h-screen">
//       <Circles
//         height="80"
//         width="80"
//         color="#7b09e7"
//         ariaLabel="circles-loading"
//         wrapperStyle={{}}
//         wrapperClass=""
//         visible={true}
//       />
//     </div>}
//     >
//       <div className='container'>

//         <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
//           {items &&
//             items.map((item) => <>
//               <div
            
//                 className=" group relative px-2 py-2 shadow-md rounded-md flex flex-col justify-between"
//               >
//                 {/* <Link to={`/shop/${product.id}`}> */}
//                 <a href={`/shop/${item.id}`}>
//                   <div className="h-40 w-40 aspect-h-1 aspect-w-1  overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-48">
//                     <img
//                       src={item.images[0]}
//                       alt={item.title}
//                       className="h-full w-full object-cover object-center lg:h-full lg:w-full"
//                     />
//                   </div>
//                 </a>

//                 <div className="mt-4 flex flex-col">
//                   <a href={`/shop/${item.id}`}>
//                     <p className=" font-medium text-gray-900">
//                       {item.title}
//                     </p>
//                   </a>
//                   <p className="text-sm font-medium text-gray-900 flex items-center justify-between">
//                     <span className="font-semibold text-lg">
//                       ₹{item.price}
//                     </span>
//                     <span className="text-green-500">
//                       {item.discountPercentage}% off
//                     </span>
//                   </p>
//                   <div className="py-2">
//                     {/* {product.category in categoryOptionsMap && (
//                       <select className="block w-full p-2 border border-gray-300 rounded-md mt-1">
//                         {categoryOptionsMap[product.category].map(
//                           (weight, weightIndex) => (
//                             <option key={weightIndex} value={weight}>
//                               {weight} kg
//                             </option>
//                           )
//                         )}
//                       </select>
//                     )} */}
//                   </div>
//                 </div>

//                 <div className="text-center py-3 mb-3">
//                   <button
//                     // onClick={() => handleAddToCart(product)}
//                     className={`w-full text-white bg-purple-700  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
//                   >
//                     <span className={`inline-block w-18 `}>
//                       {/* {isItemInCart(product._id, cartItems)
//                         ? "Remove"
//                         : "Add to Cart"} */}
//                       Add
//                     </span>
//                   </button>
//                 </div>
//                 {/* </Link> */}
//               </div>
//             </>)}
//         </div>
//       </div>
//     </InfiniteScroll>
//   );
// };

// export default InfiniteScrollExample1;

// import React, { useEffect, useState } from 'react'
// import {getallProducts} from '../../../API/productAPI'



import React from 'react'
import MyOrderPage from '../components/admin/orders/MyOrderPage'

const InfiniteScrollExample1 = () => {
  return (
    <>
    <MyOrderPage/>
    </>
  )
}

export default InfiniteScrollExample1;