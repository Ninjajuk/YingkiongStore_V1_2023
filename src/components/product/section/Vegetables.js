

import { FaAngleLeft,FaAngleRight } from "react-icons/fa";
import React, { useEffect, useState } from 'react';
import { fetchDataFromAPI } from "../../../API/productAPI";
import CategoryCard from "../componentsProducts/CardCategoryProduct";
import LoaderCircle from "../../common/LoaderCircle";




const Vegetables = () => {

  const [currentindex,setCurrentindex]=useState(0)
  const [data,setData]=useState([])

  const itemsPerpage=4

  useEffect(()=>{
    async function getData() {
      try {
        const vegData = await fetchDataFromAPI('vegetables');
                // Check if the data length is greater than 8 and slice it accordingly
                // if (vegData.length > 8) {
                //   setData(vegData.slice(0, 8));
                // } else {
                //   setData(vegData);
                // }
        setData(vegData);
      } catch (error) {
        console.log('Error in fetching data:', error);
     
      }
    }

    getData();
  },[])

  const weightOptions = [1, 2, 3, 5];

 // Change from 'data.length' to 'categories.length'
const handleNext = () => {
  const newIndex = currentindex + itemsPerpage;
  if (newIndex < data.length) {
    setCurrentindex(newIndex);
  }
};

const handlePrev = () => {
  const newIndex = currentindex - itemsPerpage;
  if (newIndex >= 0) {
    setCurrentindex(newIndex);
  }
};

  const visibleCards = data.slice(currentindex, currentindex + itemsPerpage);



  return (
    <section className="w-full bg-gray-100">
      <div className="mx-auto max-w-2xl px-4  sm:px-6  lg:max-w-7xl lg:px-8 pb-4">

        <div className="flex justify-between ">
          <h1 className="text-xl lg:text-2xl px-2 font-bold py-4   text-purple-800">
           Vegetables
          </h1>
         
          <div className='flex items-center space-x-4'>
            {/* <a href='' className="hover:underline text-slate-900 font-semibold text-lg">View All</a> */}
            <button disabled={currentindex === 0} onClick={handlePrev} className={` hover:rounded-full  ${currentindex===0?'opacity-25 pointer-events-none':'opacity-1 hover:bg-gray-400 cursor-pointer'}`}><FaAngleLeft className="w-6 h-6"/></button>
            <button onClick={handleNext} disabled={currentindex + itemsPerpage >= data.length} className={`cursor-pointer hover:rounded-full ${currentindex + itemsPerpage >= data.length?'opacity-25 pointer-events-none':'opacity-1 hover:bg-gray-400 cursor-pointer'} `}><FaAngleRight className="w-6 h-6"/></button>

          </div>
        </div>
        <p>Find fresh and organic vegetables for your meals.</p>

        <div className="my-4">
          {visibleCards?(<CategoryCard visibleCards={visibleCards}/>
        ):(
          <LoaderCircle/>
        )}

        </div>
      </div>
    </section>
  );
};

export default Vegetables;
