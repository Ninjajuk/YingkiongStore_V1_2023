

import { useDispatch, useSelector } from "react-redux";
import { calculateSubtotal, calculateTotal, } from "../utility/cartUtils"; 
import Navbar1 from "../components/Navbar.js/NavbarDark";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { resetCartAsync, selectItems } from "../redux/cartSliceasyn";
import { selectCurrentOrder, selectOrders } from "../redux/orderSlice";



const OrderSuccessPage = ({expectedOrderId}) => {
  const location = useLocation();
  const selectedAddress = location.state?.selectedAddress;
  const order = location.state?.order
  const cartItems=useSelector(selectItems)
  const currentOrder = useSelector(selectCurrentOrder);

  console.log("currentOrder in ordersuccess page", currentOrder);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams() 
  // console.log(params)
useEffect(()=>{
   // reset cart
   dispatch(resetCartAsync())
},[dispatch])

// useEffect(() => {
//   if (!params.id || params.id !== expectedOrderId) {
//     navigate('/');
//   }
// }, [params.id, expectedOrderId, navigate]);




  return (
    <>
        {params.id === expectedOrderId  &&  navigate('/')}
      <Navbar1 />
      {/* {currentOrder? ( */}
        <div className="container mx-auto mt-8 md:px-[8rem]">
        <h2 className="lg:text-3xl font-bold mb-4 text-green-600 lg:text-center">
          Order Successful! Thank you for your order!
        </h2>
{/* 
        <h3 className="text-2xl font-bold mb-2">Order Details</h3> */}
        {/* <div className="font-bold text-lg flex justify-between">
        <h5>Order Number:-{currentOrder?._id}</h5>
        <h5>Total Amount:-₹{order?.totalAmount}</h5>
        </div> */}


        {/* <div className="flex flex-col lg:flex-row w-full ">
          <div className="w-full lg:w-3/4 ">
            <ul className="-my-6 divide-y divide-gray-200">
              {cartItems.items.map((product) => (
                <li key={product.id} className="flex py-6">
                  <div className="h-48 w-48 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 bg-white">
                    <img
                      src={product.product.thumbnail}
                      alt={product.product.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="ml-4 flex flex-1 flex-col">
                    <h3 className="text-gray-400 ">
                      <a href={product.href}>{product.product.title}</a>
                    </h3>
                    <p className="font-bold text-md">
                      ₹{product.product.price}
                    </p>
                    <p>
                      Quantity
                      <span className="font-semibold text-md px-2">
                        {product.quantity}
                      </span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

    
        </div> */}
        {/* Total Price */}

        {/* <TotalPriceSummary /> */}
              {/* <div className="w-full lg:w-1/4 flex flex-col ">
            <h1 className="text-center font-bold text-lg">Order Total</h1>
            <p className="flex justify-between">
              <span>Sub-Total</span>
              <span>50</span>
            </p>
            <p className="flex justify-between">
              <span>Shipping</span>
              <span>50</span>
            </p>
            <p className="flex justify-between">
              <span>Tax</span>
              <span>50</span>
            </p>
            <p className="flex justify-between font-bold text-md">
              <span>Total Amount</span>
              <span>50</span>
            </p>
          </div> */}


        {/* Delivery Address */}
        <div className="mb-4  bg-white px-4 py-4">
          <h4 className="text-xl font-bold mb-2">Delivery Address</h4>
          {selectedAddress && (
            <>
              <p>{selectedAddress.firstName} {selectedAddress.lastName}</p>
              <p>{selectedAddress.colony}</p>
              <p>{selectedAddress.landmark}</p>
              {/* <p>{selectedAddress.pincode}</p>
              <p>{selectedAddress.country}</p> */}
            </>
          )}
          {/* <p className="lg:text-base text-gray-600">{currentOrder?.selectedAddress?.firstName} {currentOrder?.selectedAddress?.lastName}</p>
                <p className="lg:text-base text-gray-600">{currentOrder?.selectedAddress?.email}</p>
                <p className="lg:text-base text-gray-600">{currentOrder?.selectedAddress?.phone}</p>
                <p className="lg:text-base text-gray-600">{currentOrder?.selectedAddress?.address}</p>
                <p className="lg:text-base text-gray-600">{currentOrder?.selectedAddress?.city}</p>
                <p className="lg:text-base text-gray-600">{currentOrder?.selectedAddress?.state}</p>
                <p className="lg:text-base text-gray-600">{currentOrder?.selectedAddress?.country}</p>
                <p className="lg:text-base text-gray-600">{currentOrder?.selectedAddress?.pincode}</p> */}
          {/* <p>Samsuddin Ansari</p>
          <p>Delhi</p>
          <p>110092</p>
          <p>India</p> */}
        </div>

        {/* Additional Information or Thank You Message */}
        {/* <p className="text-lg">Thank you for your order! Your items will be delivered soon.</p> */}
        <div className="border-b-2 border-gray-200"></div>
        <div className="my-6 flex justify-center text-center text-sm text-gray-500">
          <p className="ml-auto">
           
            <button
              type="button"
              onClick={()=>navigate('/')}
              className="w-full rounded-full bg-purple-600 font-bold text-white hover:bg-purple-800 px-4 py-4 "
            >
              Continue Shopping
            </button>
          </p>
        </div>
      </div>
      {/* ):( */}
{/* <p>Back to Shoppping</p> */}
      {/* )} */}

      {/* <Footer1/> */}
    </>
  );
};

export default OrderSuccessPage;
