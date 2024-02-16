import React, { useState, useEffect, Suspense,lazy } from 'react';
// import ProducList from './componentsProducts/ProducList'
import { Circles } from "react-loader-spinner";
import {getallProducts} from '../../API/productAPI'

// const ProducList = React.lazy(() => import('./componentsProducts/ProducList'));

const ProducList = lazy(() => import('./componentsProducts/ProducList'));



const Product = () => {
  const [data, setData] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);


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


  return (
    <>
      <Suspense
        fallback={
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
        }
      >
        <ProducList data={data} uniqueCategories={uniqueCategories} />
      </Suspense>
    </>
  );
}

export default Product