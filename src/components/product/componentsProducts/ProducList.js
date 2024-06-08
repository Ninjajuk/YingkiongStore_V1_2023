import React, { useEffect, useState } from 'react'

import InfiniteScroll from "react-infinite-scroll-component";
import { NavLink } from 'react-router-dom';
import {addOrRemoveFromCart,isItemInCart} from '../../../utility/cartUtils'
import { useDispatch, useSelector } from 'react-redux';
import LoaderCircle from '../../common/LoaderCircle';

import useProductData from '../../../customhooks/UseProductData';
import SkeletonProduct from '../../skeleton/SkeletonProdct';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { toast } from 'react-toastify';
import { selectLoggedInUser } from '../../../redux/authSlice';
import { getallProducts } from '../../../API/productAPI';
import DummySkeletonCategoryCard from '../../skeleton/DummySkeletonCategoryCard';




const categoryOptionsMap = {
  vegetables: [1, 2, 3, 5],
  grocery: [0.5, 1, 2],
};

const ProducList = ({ category }) => {


  const [searchTerm, setSearchTerm] = useState('');
  const [product, setProduct] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filtercategory, setFilterCategory] = useState([]);
  const [error, setError] = useState('');

  const user=useSelector(selectLoggedInUser)
  
  const { items, hasMore, fetchData, } = useProductData();



  const handleFilter = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterSelect = (e) => {
    setSortBy(e.target.value);
  };


    // Filter products based on the selected category and search term
    const filteredProducts = product.filter((product) =>
    (selectedCategory ? product.category === selectedCategory : true) 
    &&
    (searchTerm ? product.title.toLowerCase().includes(searchTerm.toLowerCase()) : true)
  );
  
//   const notifyAdd = () => toast.success("Added to cart!");
// const notifyRemove = () => toast.info("Removed from cart!");


    // const handleAddToCart = async(product) => {
    //   const isProductInCart = cartItems.some(item => item._id === product._id);
    //   const newItem = {
    //     product: product._id,
    //     quantity: 1,
    //     user: user ? user._id : null 

    // }
    //       console.log(newItem)

    // };

    useEffect(()=>{
      const fetchCategory = async () => {
        try {
          const products = await getallProducts();
          setProduct(products);
  
          // Extract unique categories
          const categories = [...new Set(products.map((item) => item.category))];
          setFilterCategory(categories);
        } catch (error) {
          setError('Failed to fetch products or categories');
          // console.log('Error fetching products or categories:', error);
        }
      };
  
      fetchCategory();
    }, []);
 
  return (
    <>
          {error ? (
        <div className="text-red-800 flex items-center justify-center">Error: {error}</div>
      ) : (
      <InfiniteScroll
        dataLength={items.length}
        next={fetchData} // Call fetchData function when reaching bottom
        hasMore={hasMore}
        loader={<DummySkeletonCategoryCard/>}
      >
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6  lg:max-w-7xl lg:px-8">
          <div className="overflow-x-auto  bg-purple-800 rounded-lg shadow-lg">
            <ul className="flex items-center lg:justify-center whitespace-nowrap overflow-x-auto">
              <li
                className={`inline-block px-4 py-2  hover:bg-gray-600 cursor-pointer rounded-md text-gray-300 font-medium font-sans ${
                  !selectedCategory ? "bg-gray-600" : ""
                }`}
                onClick={() => setSelectedCategory("")}
              >
                All
              </li>
              {filtercategory.map((item, index) => (
                <li
                  key={index}
                  value={sortBy}
                  onClick={() => setSelectedCategory(item)}
                  className={`inline-block px-4 py-2  hover:bg-gray-600 cursor-pointer rounded-md text-gray-300 font-medium font-sans ${
                    selectedCategory === item ? "bg-gray-600" : ""
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-1 items-center justify-center  my-4 ">
                  <div className="w-full max-w-lg lg:max-w-xs">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        id="search"
                        name="search"
                        value={searchTerm}
                        onChange={handleFilter}
                        className="block w-full rounded-md border border-transparent bg-gray-200 py-2 pl-10 pr-3 leading-5 text-gray-300 placeholder-gray-400 focus:border-white focus:bg-purple-600 focus:text-white-900 focus:outline-none focus:ring-white sm:text-sm"
                        placeholder="Search"
                        type="search"
                      />
                    </div>
                  </div>
                  </div>

          <div className=" grid grid-cols-2 lg:grid-cols-4 gap-4 ">
            {filteredProducts&&filteredProducts.map((product) => (
              <div
                key={product._id}
                className=" group relative px-2 py-2 shadow-md rounded-md flex flex-col justify-between"
              >
                {/* <Link to={`/shop/${product.id}`}> */}
                <a  href={`/shop/${product._id}`} target='_blank'>
                  <div className="h-40  aspect-h-1 aspect-w-1  overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-48">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                </a>

                <div className="mt-4 flex flex-col">
                  <a href={`/shop/${product.id}`}>
                    <p className=" font-medium text-gray-900">
                      {product.title}
                    </p>
                  </a>
                  <p className="text-sm font-medium text-gray-900 flex items-center justify-between lg:px-2">
                    <span className="font-semibold text-lg sm:text-md">
                      ₹{product.price}
                    </span>
                    <span className="text-xs lg:text-sm line-through">
                      ₹{product.cuttedprice}
                    </span>
                    <span className="text-green-500 text-xs">
                    ₹{product.discount} Save
                    </span>
                  </p>
                  <div className="py-2">
                    {/* {["vegetables", "grocery"].includes(product.category) && (
                      <select className="block w-full p-2 border border-gray-300 rounded-md mt-1">
                        {weightOptions.map((weight, weightIndex) => (
                          <option key={weightIndex} value={weight}>
                            {weight} kg
                          </option>
                        ))}
                      </select>
                    )} */}
                    {/* {product.category in categoryOptionsMap && (
                      <select className="block w-full p-2 border border-gray-300 rounded-md mt-1">
                        {categoryOptionsMap[product.category].map(
                          (weight, weightIndex) => (
                            <option key={weightIndex} value={weight}>
                              {weight} kg
                            </option>
                          )
                        )}
                      </select>
                    )} */}
                  </div>
                </div>

                {/* <div className="text-center py-3 mb-3">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`w-full text-white bg-purple-700  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                  >
                    <span className={`inline-block w-18 `}>
                      {isItemInCart(product._id, cartItems)
                        ? "Remove"
                        : "Add to Cart"}
   
                    </span>
                  </button>
                </div> */}
                {/* </Link> */}
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
      )}
    </>
  );
};

export default ProducList