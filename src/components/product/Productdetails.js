

import Skeleton from '../skeleton/Skeleton1';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const ProductDetails = ({ params }) => {
  const [product, setProduct] = useState(null);

  const { productId } = useParams();


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Fetch product details from the API based on the productId
        const res = await fetch(`https://yingkiongstore.onrender.com/products/${productId}`);
        
        if (!res.ok) {
          throw new Error(`Failed to fetch product with ID ${productId}`);
        }

        const productData = await res.json();
        setProduct(productData);
      } catch (error) {
        console.error(error);
        // Handle error, e.g., set an error state
      }
    };

    fetchProduct();
  }, [params.productId]);

  if (!product) {
    // Render loading state, or handle differently
    return <Skeleton/>;
  }

  return (


    <div className=" w-full h-full flex flex-col lg:flex-row  px-[8rem] ">
      {/* Product info */}
      <div className=" lg:w-2/3 h-full flex flex-col bg-white px-[4rem] py-[4rem]">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl pb-2">{product.title}</h1>
          <div className="w-full h-full overflow-hidden rounded-lg shadow-lg mb-2">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-md font-bold tracking-tight text-slate-600  py-2">{product.title}</h1>
            <p className="text-sm text-gray-600 pb-2">{product.description}</p>
            <p className="text-sm text-gray-600 font-bold ">₹{product.price}<span className='text-green-500 px-4'>{product.discountPercentage} off</span></p>
            {/* <p className="text-sm text-gray-600">{product.description}</p> */}
  
      </div>

      <div className=" lg:w-1/3  h-full py-[4rem] bg-white">
        <div className='w-[300px] h-[300px] flex flex-col  rounded-lg shadow-lg px-4 py-4 '>
        <div className="overflow-hidden  rounded-lg">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-3xl tracking-tight text-gray-900 py-4">₹{product.price}</p>
        <div className="w-full ">
          <button 
        //   onClick={() => handleAddToCart(product)} 
          className="w-full px-4 py-2 bg-sky-600 rounded-md">
            {/* {isItemInCart(product.id, cartItems) ? 'Remove' : 'Add to Cart'} */}
            Add
          </button>
        </div>
        </div>

 
      </div>

    </div>
  );
};

export default ProductDetails;
