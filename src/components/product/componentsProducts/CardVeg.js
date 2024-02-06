


import {addOrRemoveFromCart,isItemInCart} from '../../../utility/cartUtils'
import { useDispatch, useSelector } from "react-redux";

const weightOptions = [1, 2, 3, 5]; 

function CategoryCard({visibleCards}) {
const cartItems=useSelector((state=>state.cart))
const dispatch=useDispatch()


  const handleAddCart = (item) => {
     addOrRemoveFromCart(dispatch, item, cartItems);
    console.log(item._id)
  };

  
  return (
    <>
       <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-4">
      {visibleCards.map(item => 
        <div key={item._id} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
          <div className="mb-4 aspect-w-1 aspect-h-1">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="rounded-md w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col flex-grow justify-between">
            <p className="text-md text-slate-800 font-semibold">Fresh</p>
            <h2 className="text-xl font-semibold mb-2 ">{item.title}</h2>
            <div className="py-2">
              <select
                id={`${item.title}-weight`}
                className="block w-full p-2 border border-gray-300 rounded-md mt-1"
              >
                {weightOptions.map((weight, weightIndex) => (
                  <option key={weightIndex} value={weight}>
                    {weight} kg
                  </option>
                ))}
              </select>
            </div>
            <p className="text-gray-700 flex items-center py-2">
              <span className="text-lg font-bold">
                ₹{item.price}
                <sub>/kg</sub>
              </span>
              <span className="ml-2 line-through">₹{item.TotalPrice}</span>
            </p>
          </div>

          <div className="flex items-center justify-center mt-auto ring-1 rounded-md text-white bg-purple-700 hover:bg-purple-900 cursor-pointer">
          <button
                  onClick={() => handleAddCart(item)}
                  className={`w-full text-white bg-purple-700 hover:bg-purple-900  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                >
                  <span className={`inline-block w-18 `}>
                    {isItemInCart(item._id, cartItems)
                        ? "Remove"
                        : "Add"}
                    {/* Add to Cart */}
                  </span>
                </button>
          </div>

        </div>
                
      )}
    </div>
    
    </>
 
  );
}

export default CategoryCard;


