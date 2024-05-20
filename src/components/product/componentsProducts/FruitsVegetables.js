

import { FaAngleLeft,FaAngleRight } from "react-icons/fa";
import React, { useEffect, useState } from 'react';

import {fetchDataFromAPI} from '../../../API/productAPI'
import CategoryCard from "./CardVeg";

 const categories = [
  {
    id: 101,
    title: "Carrots",
    description: "Explore the latest additions to our collection.",
    thumbnail: "https://www.bigbasket.com/media/uploads/p/l/10000070_15-fresho-carrot-orange.jpg?tr=w-640,q=80",
    price: 25,
    TotalPrice: 35,
    brand: "yinkiong",
    category: "vegetables"
  },
  {
    id: 102,
    title: "Capsicum",
    description: "Boost your productivity with these essentials.",
    thumbnail: "https://www.bigbasket.com/media/uploads/p/m/10000067_23-fresho-capsicum-green.jpg?tr=w-1920,q=80",
    price: 36,
    TotalPrice: 50,
    brand: "yinkiong",
    category: "vegetables"
  },
  {
    id: 103,
    title: "Tomato",
    description: "Create your ideal workspace with our curated selection.",
    thumbnail: "https://www.bigbasket.com/media/uploads/p/m/10000203_16-fresho-tomato-local.jpg?tr=w-3840,q=80",
    price: 45,
    TotalPrice: 70,
    brand: "yinkiong",
    category: "vegetables"
  },
  {
    id: 104,
    title: "Potato",
    description: "Fresho Potato",
    thumbnail: "https://www.bigbasket.com/media/uploads/p/l/40048459_8-fresho-potato-new-crop.jpg?tr=w-640,q=80",
    price: 15,
    TotalPrice: 35,
    brand: "yinkiong",
    category: "vegetables"
  },
  {
    id: 105,
    title: "Onion",
    description: "Add a flavorful twist to your dishes with our premium onions.",
    thumbnail: "https://www.bigbasket.com/media/uploads/p/m/1201414_1-fresho-onion.jpg?tr=w-2048,q=80",
    price: 20,
    TotalPrice: 30,
    brand: "yinkiong",
    category: "vegetables"
  },
  {
    id: 106,
    title: "Cucumber",
    description: "Stay cool and refreshed with our crisp cucumbers.",
    thumbnail: "https://www.bigbasket.com/media/uploads/p/m/40077518_1-fresho-cucumber.jpg?tr=w-2048,q=80",
    price: 18,
    TotalPrice: 25,
    brand: "yinkiong",
    category: "vegetables"
  },
  {
    id: 107,
    title: "Cauliflower",
    description: "Enhance your meals with our fresh and tender cauliflower.",
    thumbnail: "https://www.bigbasket.com/media/uploads/p/m/10000074_19-fresho-cauliflower.jpg?tr=w-2048,q=80",
    price: 30,
    TotalPrice: 45,
    brand: "yinkiong",
    category: "vegetables"
  },
  {
    id: 108,
    title: "Lady's Finger",
    description: "Experience the goodness of lady's finger in every bite.",
    thumbnail: "https://www.bigbasket.com/media/uploads/p/m/10000142_17-fresho-ladies-finger.jpg?tr=w-2048,q=80",
    price: 22,
    TotalPrice: 32,
    brand: "yinkiong",
    category: "vegetables"
  }
];


const FruitsVegetables = () => {

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
      <div className="mx-auto max-w-2xl px-4  sm:px-6  lg:max-w-7xl lg:px-8">

        <div className="flex justify-between ">
          <h1 className="text-xl lg:text-2xl font-bold py-4   text-blue-800">
           Vegetables
          </h1>
         
          <div className='flex items-center space-x-4'>
            <a href='' className="hover:underline text-slate-900 font-semibold text-lg">View All</a>
            <button disabled={currentindex === 0} onClick={handlePrev} className={` hover:rounded-full  ${currentindex===0?'opacity-25 pointer-events-none':'opacity-1 hover:bg-gray-400 cursor-pointer'}`}><FaAngleLeft className="w-6 h-6"/></button>
            <button onClick={handleNext} disabled={currentindex + itemsPerpage >= data.length} className={`cursor-pointer hover:rounded-full ${currentindex + itemsPerpage >= data.length?'opacity-25 pointer-events-none':'opacity-1 hover:bg-gray-400 cursor-pointer'} `}><FaAngleRight className="w-6 h-6"/></button>

          </div>
        </div>
        <p>Find fresh and organic vegetables for your meals.</p>

        <div>
          <CategoryCard visibleCards={visibleCards}/>
        </div>
      </div>
    </section>
  );
};

export default FruitsVegetables;
