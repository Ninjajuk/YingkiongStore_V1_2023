import React, { useState, useEffect, Suspense } from 'react';
// import ProducList from './componentsProducts/ProducList'
import { Circles } from "react-loader-spinner";
import {getallProducts} from '../../API/productAPI'

const ProducList = React.lazy(() => import('./componentsProducts/ProducList'));


const Product = () => {
  const [data, setData] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const product = await getallProducts();
        setData(product);

        // Extract unique categories
        const categories = [...new Set(product.map((item) => item.category))];
        setUniqueCategories(categories);
      } catch (error) {
        console.log("Error in fetching data:", error);
      }
    }

    getData();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 2 seconds
    }, 3000);

    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, []);
  return (
    <>
      <Suspense
        fallback={
          isLoading ? (
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
          ) : null
        }
      >
       {!isLoading && <ProducList data={data} uniqueCategories={uniqueCategories} />}
      </Suspense>
    </>
  );
}

export default Product