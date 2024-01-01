// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const PriceSidebar = ({ cartItems }) => {
//   const { cart } = useSelector((state) => state.cart);
//   const navigate = useNavigate();

//   // Calculate the total price and total discount amount
//   const { totalPrice, totalDiscount, totalQuantity } = cartItems.reduce(
//     (acc, item) => {
//       const itemPrice = item.price * item.quantity;
//       const discountAmount = Math.round(
//         (itemPrice * item.discountPercentage) / 100
//       );

//       return {
//         totalPrice: acc.totalPrice + itemPrice,
//         totalDiscount: acc.totalDiscount + discountAmount,
//         totalQuantity: acc.totalQuantity + item.quantity
//       };
//     },
//     { totalPrice: 0, totalDiscount: 0, totalQuantity: 0 }
//   );

//   // Calculate the final price after applying discounts
//   const finalPrice = totalPrice - totalDiscount;

//   // // Calculate the total price from cartItems
//   // const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

//   return (
//     <div className="flex flex-col sticky  top-0  right-0 w-full mr-4 self-start  md:w-1/4 md:ml-4">
//       {/* <!-- nav tiles --> */}
//       <div className="flex flex-col  bg-white rounded-sm shadow">
//         <h1 className="px-6 py-3 border-b font-medium text-gray-500">
//           PRICE DETAILS
//         </h1>

//         <div className="flex flex-col gap-4 p-6 pb-3">
//           <p className="flex justify-between items-center">
//             <span className="flex-shrink-0">
//               Price item<span>({totalQuantity})</span>
//             </span>
//             <span>₹{totalPrice}</span>
//           </p>
//           <p className="flex justify-between items-center">
//             <span className="flex-shrink-0">Discount</span>
//             <span className="font-medium text-green-500">
//               - ₹{totalDiscount.toFixed(2)}
//             </span>
//           </p>
//           <p className="flex justify-between items-center">
//             <span className="flex-shrink-0">Delivery Charges</span>
//             <span className="font-medium text-green-500">FREE</span>
//           </p>

//           <div className="border border-dashed"></div>
//           <p className="flex justify-between items-center text-lg font-medium">
//             <span className="flex-shrink-0">Total Amount</span>
//             <span>₹{finalPrice}</span>
//           </p>
//           <div className="border border-dashed"></div>

//           <p className="font-medium text-green-500">
//             You will save ₹{totalDiscount.toFixed(2)}on this order
//           </p>
//           {/* <p className="font-medium ">Total items in cart {totalQuantity}</p> */}
//         </div>
//         <button
//           className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4"
//           onClick={() => navigate("/checkout1")}
//         >
//           Place Order
//         </button>
//       </div>
//       {/* <!-- nav tiles --> */}
//     </div>
//   );
// };

// export default PriceSidebar;
