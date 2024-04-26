

import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";

// import { useRouter } from 'next/navigation'
import { useSelector,useDispatch  } from "react-redux";
// import Link from 'next/link';
import {increaseQuantity,decreaseQuantity,removeItem,clearCart,saveOrderItems} from "../../redux/cartSlice";
import { Circles } from "react-loader-spinner";
import useLoading from '../../customhooks/Loading';

import TotalPriceSummary from './TotalPriceSummary';
import Navbar1 from '../Navbar.js/NavbarDark';
import Footer1 from '../footer/Footer1';

const CheckoutPage = () => {
const loadingspinner=useLoading()
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
const navigate=useNavigate()
  const handleQuantityDecrease = (itemId) => {
    console.log("Decrease quantity for item:", itemId);
    dispatch(decreaseQuantity(itemId));
  };

  const handleQuantityIncrease = (itemId) => {
    console.log("Increase quantity for item:", itemId);
    dispatch(increaseQuantity(itemId));
  };




  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    district: '',
    state: '',
    pincode: '',
    country: '',
  });

  // const [orderItems, setOrderItems] = useState([
  //   {
  //     id: 1,
  //     title: 'Product 1',
  //     price: 50,
  //     quantity: 2,
  //     imageUrl: 'https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg',
  //   },
  //   {
  //     id: 2,
  //     title: 'Product 2',
  //     price: 75,
  //     quantity: 1,
  //     imageUrl: 'https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg',
  //   },
  // ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleQuantityChange = (itemId, newQuantity) => {
  //   setOrderItems((prevItems) =>
  //     prevItems.map((item) =>
  //       item.id === itemId ? { ...item, quantity: newQuantity } : item
  //     )
  //   );
  // };

  // const handleDeleteItem = (itemId) => {
  //   setOrderItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log form data and order items
    console.log('Form submitted:', formData);
    navigate('/order-success')



    //  // Generate a unique order ID (you might handle this on the backend)
    //  const orderId = generateUniqueId();

      // Prepare order data to submit
      // const orderData = {
      //   orderId,
      //   cartItems,
      //   quantity: calculateTotalQuantity(cartItems),
      //   address: formData,
      // };

    //       // Submit the order
    // await dispatch(submitOrder(orderData));

     // Clear the cart and remove it from local storage
    //  dispatch(clearCart());


    // Redirect to the ordersuccess page
    // Navigate('/order-success');

  
  };

  return (
    <>
      <Navbar1 />
      {loadingspinner ? (
        <div className="flex items-center justify-center h-screen">
          {" "}
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
        <div className="container mx-auto  lg:px-[4rem]">
          {cartItems.length > 0 ? (
            <>
              {" "}
              <h2 className="text-2xl lg:text-3xl font-bold my-4 px-4 text-gray-600">
                Shipped to below Address
              </h2>
              <div className="flex flex-col lg:flex-row gap-4 my-4 px-4">
                <div className="w-full lg:w-3/5 p-4 bg-gray-100 rounded-md shadow-md h-full overflow-y-auto">
                  <h2 className="text-2xl font-bold mb-4">
                    Contact information
                  </h2>
                  <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="mt-1 p-2 w-full border rounded-md"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="mt-1 p-2 w-full border rounded-md"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-600">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-600">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-600">
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="mt-1 p-2 w-full border rounded-md"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">
                          District
                        </label>
                        <input
                          type="text"
                          name="district"
                          value={formData.district}
                          onChange={handleChange}
                          className="mt-1 p-2 w-full border rounded-md"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">
                          State
                        </label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className="mt-1 p-2 w-full border rounded-md"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">
                          Pincode
                        </label>
                        <input
                          type="text"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleChange}
                          className="mt-1 p-2 w-full border rounded-md"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">
                          Country
                        </label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="mt-1 p-2 w-full border rounded-md"
                          required
                        />
                      </div>
                    </div>
                  </form>
                </div>
                {cartItems.length > 0 && (
                  <div className="w-full lg:w-2/5 p-4 rounded-md shadow-md flex flex-col">
                    <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                    <div className="w-full flex flex-col">
                      {cartItems.map((item) => (
                        <>
                          <div key={item._id} className="w-full flex mb-4 px-4 ">
                            <div className="w-1/2   overflow-hidden rounded-lg px-2">
                              <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="w-full h-full object-cover object-center"
                              />
                            </div>

                            <div className="w-1/2 px-2 flex flex-col ">
                              <div>
                                <p className="font-bold whitespace-nowrap">
                                  {item.title}
                                </p>
                                <p className="text-gray-600">
                                  ₹{item.price}/ <sub>each</sub>
                                </p>
                              </div>

                              {/* Quantity increase and decrease */}
                              <div className="flex flex-col pt-4 items-center justify-around">
                                <div className="flex items-center ">
                                  <button
                                    onClick={() => {
                                      handleQuantityDecrease(item._id);
                                    }}
                                    className="w-10 h-10 bg-gradient-to-b from-white to-[#f9f9f9] inline-block border border-gray-300 cursor-pointer text-base rounded-full leading-none"
                                  >
                                    –
                                  </button>
                                  <input
                                    type="text"
                                    className="w-10 text-center"
                                    value={item.quantity} // Display the item quantity
                                    readOnly
                                  />
                                  <button
                                    onClick={() =>
                                      handleQuantityIncrease(item._id)
                                    }
                                    className="w-10 h-10 bg-gradient-to-b from-white to-[#f9f9f9] inline-block border border-gray-300 cursor-pointer text-base rounded-full leading-none"
                                  >
                                    +
                                  </button>
                                </div>
                                <div className="flex items-center ml-auto pt-2">
                                  <button
                                    type="button"
                                    onClick={() =>
                                      dispatch(removeItem(item._id))
                                    }
                                    className="text-red-500 hover:text-red-700 "
                                  >
                                    <MdDelete />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      ))}
                    </div>
                    <div className="w-full">
                      <TotalPriceSummary cartItems={cartItems} handleSubmit={handleSubmit}/>
                    </div>
                    {/* <div className=" w-full py-4">
              <NavLink
                to="/order-success"
                className=" bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 "
              >
                Confirm Order
              </NavLink>
            </div> */}
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-screen">
              <p className="text-xl text-gray-600">
                Your cart is Empty Please add items to your cart.
              </p>
              <div className='my-2'>
                <button
                  type="button"
                  onClick={()=>navigate('/')}
                  className="font-bold text-red-800 hover:text-red-800 px-2 "
                >
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      <Footer1 />
    </>
  );
};

export default CheckoutPage;
