

import Skeleton from '../skeleton/Skeleton1';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {addToCartAsync,selectCartLoaded,selectItems} from '../../redux/cartSliceasyn'
import { useDispatch ,useSelector} from 'react-redux';
import { selectLoggedInUser } from '../../redux/authSlice';
import Navbar1 from '../Navbar.js/NavbarDark';
import Footer1 from '../footer/Footer1';
import {addOrRemoveFromCart,isItemInCart} from '../../utility/cartUtils'
import { ToastContainer, toast } from 'react-toastify';

const ProductDetails = ({ params }) => {
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectItems);
  const user=useSelector(selectLoggedInUser)
  const cartLoaded = useSelector(selectCartLoaded);

  const { productId } = useParams();
  const navigate=useNavigate()
  // console.log("ProductId id will be added to database", productId);
  // console.log("User id :-", user ? user._id : null);
  // console.log('cartitems at product details',cartItems)
  // console.log('user at product details',user)
  const notifyAdd = () => toast.success("Added to cart!");
const notifyRemove = () => toast.info("Removed from cart!");

  useEffect(() => {
    const fetchProduct = async (req,res) => {
      try {
        // Fetch product details from the API based on the productId
        const res = await fetch(`http://localhost:8000/products/${productId}`);        
        if (!res.ok) {
          throw new Error(`Failed to fetch product with ID ${productId}`);
        }
        const productData = await res.json();
        setProduct(productData);
        // console.log(productData)
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };
 

    fetchProduct();
  }, [productId, cartLoaded]);

  if (!product) {
    // Render loading state, or handle differently
    return <Skeleton/>;
  }

  const handleAddToCart=async(product)=>{
  
      console.log('Add',product._id)
      const isProductInCart = cartItems.some(item => item.product === productId);
console.log(isProductInCart)
      const newItem = {
        product: product._id,
        quantity: 1,
        user: user ? user._id : null // If user is not logged in,
    }

       await dispatch(addToCartAsync({item:newItem,}));
          notifyAdd()

  }

  return (
    <>
      <Navbar1 />
      <div className=" w-full h-full flex flex-col lg:flex-row  lg:px-[4rem] ">
        {/* Product info */}
        <div className="w-full lg:w-2/3  h-full flex flex-col bg-white lg:px-[4rem] py-[4rem]">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl pb-2 px-2">
            {product.title}
          </h1>
          <div className="w-full h-full overflow-hidden rounded-lg shadow-lg mb-2">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-md font-bold tracking-tight text-slate-600  py-2 px-2">
            {product.title}
          </h1>
          <p className="text-sm text-gray-600 pb-2 px-2">
            {product.description}
          </p>
          <p className=" text-gray-600  px-2">
            <span className="text-lg font-bold"> ₹{product.price}</span>

            <span className="px-4 line-through text-sm">
              ₹{product.cuttedprice}
            </span>
            <span className="text-green-500 px-4 font-bold">
              ₹{product.discount} off
            </span>
          </p>
          
          {/* <div className="lg:hidden w-full px-2">
            {user ? (
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full px-4 py-2 bg-sky-600 rounded-md"
              >
                {isItemInCart(product._id, cartItems)
                  ? "Remove"
                  : "Add to Cart"}
              </button>
            ) : (
              <button
                onClick={() => console.log('product')}
                className="w-full px-4 py-2 bg-sky-600 rounded-md"
              >
                Please Login to Add
              </button>
            )}
          </div> */}
        </div>

        <div className="hidden lg:block lg:w-1/3  h-full lg:px-[4rem] py-[4rem] bg-white">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl pb-2">
            {product.title}
          </h1>
          {/* <p className=" text-gray-600  py-2">
            <span className="text-lg font-bold"> ₹{product.price}</span>

            <span className="px-4 line-through text-sm">
              ₹{product.cuttedprice}
            </span>
            <span className="text-green-500 px-4 font-bold">
              {product.discount} off
            </span>
          </p> */}
          <div className="w-full lg:w-[300px] lg:h-[300px] flex flex-col  rounded-lg shadow-lg px-4 py-4 ">
            <div className="overflow-hidden  rounded-lg">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-3xl tracking-tight text-gray-900 py-4">
              ₹{product.price}
              <span className="text-sm px-2">Per Kg</span>
            </p>
            <div className="w-full ">
            {/* <button
                onClick={() => handleAddToCart(product)}
                className="w-full px-4 py-2 bg-sky-600 rounded-md"
              >
                {isItemInCart(product._id, cartItems)
                  ? "Remove"
                  : "Add to Cart"}
                  Add
              </button> */}
              {user ? (
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full px-4 py-2 bg-sky-600 rounded-md"
                >
                  Add to Cart
                </button>
              ) : (
                <button onClick={()=>navigate('/login')} className="w-full px-4 py-2 bg-sky-600 rounded-md">
                  Please Login to Add
                </button>
              )}
            </div>
          </div>

          {/* <div className="w-full ">
        {user ? (
          <button onClick={() => handleAddToCart(product)} className="w-full px-4 py-2 bg-sky-600 rounded-md">
            Add to Cart
          </button>
        ) : (

          <button  className="w-full px-4 py-2 bg-sky-600 rounded-md">
          Please Login to Add
        </button>
        )}
        </div> */}
        </div>
      </div>
      <Footer1 />
      {/* <ToastContainer /> */}
    </>
  );
};

export default ProductDetails;
