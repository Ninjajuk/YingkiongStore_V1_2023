import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {getallProducts} from '../API/productAPI'
import Navbar1 from '../components/Navbar/NavbarDark';
import { Circles } from "react-loader-spinner";
import useLoading from '../customhooks/Loading';
import Footer1 from '../components/footer/Footer1';
import ProductWithFilterCateogrySidebar from '../components/product/componentsProducts/FilterProductsSidebar';
import useProductData from '../customhooks/UseProductData';
import InfiniteScroll from "react-infinite-scroll-component";
import LoaderCircle from '../components/common/LoaderCircle';
import DummySkeletonCategoryCard from '../components/skeleton/DummySkeletonCategoryCard';
import HeaderScrollingInfinite from '../components/Navbar/HeaderTopInfiniteScroll';

const Shop = () => {
  const loading = useLoading();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState(['All']);

  const categoryOptionsMap = {
    vegetables: [1, 2, 3, 5],
    grocery: [0.5, 1, 2],
    // Add more categories and their options as needed
  };

  const { items, uniqueCategories, hasMore, fetchData } = useProductData();
  console.log('items', items);

  // Filter products based on the selected category and search term
  const filteredProducts = items.filter((product) =>
    (selectedCategories.includes('All') || selectedCategories.includes(product.category)) &&
    (searchTerm
      ? product.title.toLowerCase().includes(searchTerm.toLowerCase())
      : true)
  );

  const handleFilter = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterSelect = (e) => {
    const value = e.target.value;
    console.log(value,'FilterChecked')
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((category) => category !== value)
        : [...prevSelected, value]
    );
  };
  return (
    <>
     <HeaderScrollingInfinite/>
      <Navbar1 />
      {loading ? (
        <div className="flex items-center justify-center h-screen">

          <Circles
            height="80"
            width="80"
            color="#7b09e7"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />

        </div>
      ) : (
        <ProductWithFilterCateogrySidebar handleFilterSelect={handleFilterSelect}>
          <InfiniteScroll
            dataLength={items.length}
            next={fetchData} // Call fetchData function when reaching bottom
            hasMore={hasMore}
            loader={<DummySkeletonCategoryCard/>}
          >
            <div className=" grid grid-cols-2 lg:grid-cols-4 gap-4 ">
            {filteredProducts.map((product) => (
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
                  <p className="text-sm font-medium text-gray-900 flex items-center justify-between px-2">
                    <span className="font-semibold text-lg">
                      ₹{product.price}
                    </span>
                    <span className="font-semibold text-sm line-through">
                      ₹{product.cuttedprice}
                    </span>
                    <span className="text-green-500">
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
          </InfiniteScroll>
        </ProductWithFilterCateogrySidebar>
      )}
      <Footer1 />
    </>
  );
}

export default Shop;