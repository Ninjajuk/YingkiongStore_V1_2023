import React, { useState, useEffect, Suspense } from 'react';
// import ProducList from './componentsProducts/ProducList'

import {getallProducts} from '../../API/productAPI'
const ProducList = React.lazy(() => import('./componentsProducts/ProducList'));
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
     <Suspense fallback={<div>Loading...</div>}>
  
     <ProducList data={data} uniqueCategories={uniqueCategories} />
     </Suspense>
 
 
    </>
  )
}

export default Product