// ShopHover.jsx
import React from "react";

const ShopHover = () => {

    const categories=[
        {title:'Electronics'},
        {title:'Grocery'},
        {title:'Vegetables'},
        {title:'Meat'},
    ]
  return (
    <div className="max-w-[24rem] absolute left-0 top-full mt-1 bg-white p-2 rounded-md shadow-md flex gap-2">
      <div className="w-1/2 overflow-hidden rounded-lg">
        <img src='https://www.bigbasket.com/media/uploads/p/m/10000263_12-fresho-strawberry.jpg?tr=w-1200,q=80' alt='hi' className="w-full h-full object-cover"/>

      </div>
      <div className="w-1/2">
        <p className="text-gray-800 font-semibold mb-2">Categories</p>
        <ul>
          {categories.map((category) => (
            <li
              key={category}
              className="text-gray-600 hover:text-red-600 py-2 px-2 rounded-md cursor-pointer"
            >
              {category.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShopHover;
