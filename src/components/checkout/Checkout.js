

import React, { memo, useEffect, useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { useSelector,useDispatch  } from "react-redux";
import { Circles } from "react-loader-spinner";
import useLoading from '../../customhooks/Loading';

import TotalPriceSummary from './TotalPriceSummary';
import Navbar1 from '../Navbar/NavbarDark';
import Footer1 from '../footer/Footer1';
import { deleteItemFromCartAsync, fetchItemsByUserIdAsync, selectCartLoaded, selectItems, updateCartAsync } from '../../redux/cartSliceasyn';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { selectLoggedInUser } from '../../redux/authSlice';
import { createOrder, creteOrder } from '../../API/orderAPI';
import { createOrderAsync, selectOrders, selectStatus } from '../../redux/orderSlice';
import { validateForm, validateFormData } from '../../utility/validationAuth';



const CheckoutPage = () => {
  const {
    register,
    // handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

const loadingspinner=useLoading()
  const cartItems = useSelector(selectItems);
  const user = useSelector(selectLoggedInUser);
  const cartLoaded = useSelector(selectCartLoaded);
  const currentOrder = useSelector(selectOrders);
  const orderStatus = useSelector(selectStatus);
  // console.log(cartItems)
  const dispatch = useDispatch();
const navigate=useNavigate()

const intialstateForm={
  firstName: '',
  lastName: '',
  // email: '',
  phone: '',
  colony:'',
  landmark:'',
  // address: '',
  // city: '',
  // district: '',
  // state: '',
  // pincode: '',
  // country: '',
}

const [formData, setFormData] = useState(intialstateForm);

const [error, setError] = useState(intialstateForm);
const handleQuantityDecrease = (item) => {
  console.log(item.quantity)
  if (item.quantity > 1) {
    const updatedItem = { ...item, quantity: item.quantity - 1 };
    dispatch(updateCartAsync(updatedItem));
  }
  
};

const handleQuantityIncrease = (item) => {
  // console.log(item.quantity)
  console.log('previous item quantity:-',item.quantity)
  const updatedItem = { ...item, quantity: item.quantity + 1 };
  dispatch(updateCartAsync(updatedItem));
  console.log('updated item quantity after dispatch:-',updatedItem.quantity)
};

const notifyRemove = () => toast.info('Removed from cart!');

const removeFromCart =async(cartItemId) => {
  console.log('Removing cart item ID:', cartItemId);
  dispatch(deleteItemFromCartAsync(cartItemId));
  notifyRemove();
};

// useEffect(() => {
//   if (!cartLoaded) {
//     dispatch(fetchItemsByUserIdAsync());
//   }
// }, [dispatch, cartLoaded,]);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError({ ...error, [name]: "" }); // Clear error for the specific field
  };


  const totalItems = cartItems.reduce((total, item) => item.quantity + total, 0);
  // const totalAmount=calculateTotal(cartItems)

  const calculateTotal =() => {
    console.log('cartItems calculateTotal:', cartItems);
    if (!cartItems || cartItems.length === 0) {
      return 0;
    }
    const subTotal= cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    console.log(subTotal,'subtotal')
    const shipping = subTotal>1000?0:20;
    // const taxes = 0.08 * subTotal;
    const totalsum=subTotal + shipping 
    // console.log(totalsum)
    return totalsum
  };
  const notifyAdd = () => toast.success("Order Placed Successfully!");
  const handleSubmit = async(e) => {
    e.preventDefault();


    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length > 0) {
      setError(formErrors);
      return;
    }
    const order = {
      items:cartItems,
      totalAmount:calculateTotal(),
      totalItems,
      user: user._id,
      selectedAddress:formData,
      status: 'pending', // other status can be delivered, received.
    };
    // Log form data and order items
    console.log('order submitted:', order);

    const resultAction = await dispatch(createOrderAsync(order));
    if (createOrderAsync.fulfilled.match(resultAction)) {
      notifyAdd()
      navigate(`/order-success/${order.id}`, { state: { selectedAddress: formData,order: order} });
      // alert('order success')
    }

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
                          Full Name
                        </label>
                        <input
                        type='text'
                          id="firstName"
                          name='firstName'
                          value={formData.firstName}
                          onChange={handleChange}
                          className="mt-1 p-2 w-full border rounded-md"
                          required
                        />
                                 {error.firstName && <p className="text-red-500">{error.firstName}</p>}
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
                        {error.lastName && <p className="text-red-500">{error.lastName}</p>}
                      </div>
                    </div>

                    {/* <div className="mb-4">
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
                    </div> */}

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
                      {error.phone && <p className="text-red-500">{error.phone}</p>}
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-600">
                       Full Address/Colony
                      </label>
                      <input
                        type="text"
                        name="colony"
                        value={formData.colony}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                      />
                        {error.colony && <p className="text-red-500">{error.colony}</p>}
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-600">
                        LandMark
                      </label>
                      <input
                        type="text"
                        name="landmark"
                        value={formData.landmark}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                      />
                        {error.landmark && <p className="text-red-500">{error.landmark}</p>}
                    </div>

                    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                         {error.city && <p className="text-red-500">{error.city}</p>}
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
                          {error.district && <p className="text-red-500">{error.district}</p>}
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
                        {error.state && <p className="text-red-500">{error.state}</p>}
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
                         {error.pincode && <p className="text-red-500">{error.pincode}</p>}
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
                        {error.country && <p className="text-red-500">{error.country}</p>}
                      </div>
                    </div> */}
                  </form>

                  <div className="mt-10 space-y-10">
                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-gray-600">
                    Payment Methods
                  </legend>
                  {/* <p className="mt-1 text-sm leading-6 text-gray-600">
                    Choose One
                  </p> */}
                  <div className="mt-6 space-y-6">
                    <div className="flex items-center gap-x-3">
                      <input
                        id="cash"
                        name="payments"
                        // onChange={handlePayment}
                        value="cash"
                        type="radio"
                        // checked={paymentMethod === 'cash'}
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="cash"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Cash
                      </label>
                    </div>
                    {/* <div className="flex items-center gap-x-3">
                      <input
                        id="card"
                        onChange={handlePayment}
                        name="payments"
                        checked={paymentMethod === 'card'}
                        value="card"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="card"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Card Payment
                      </label>
                    </div> */}
                  </div>
                </fieldset>
              </div>
                </div>
                {cartItems.length > 0 && (
                  <div className="w-full lg:w-2/5 p-4 rounded-md shadow-md flex flex-col">
                    <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                    <div className="w-full flex flex-col">
                      {cartItems.map((item) => (
     
                          <div
                            key={item._id}
                            className="w-full flex mb-4 px-4 "
                          >
                            <div className="w-1/2   overflow-hidden rounded-lg px-2">
                              <img
                                src={item.product.thumbnail}
                                alt={item.product.title}
                                className="w-full h-full object-cover object-center"
                              />
                            </div>

                            <div className="w-1/2 px-2 flex flex-col ">
                              <div>
                                <p className=" whitespace-nowrap">
                                  <span className='font-semibold pr-2'>{item.product.title} </span>
                                  {/* <span className='font-bold'>Qty {item.quantity}</span> */}
                                </p>
                                <p className="text-gray-600">
                                  <span>
                                    ₹{item.product.price}/{" "}
                                    <sub>{item.product.unit}</sub>
                                  </span>
                                  <span></span>
                                </p>
                              </div>

                              {/* Quantity increase and decrease */}
                              <div className="flex flex-col pt-4 items-center justify-around">
                                <div className="flex items-center ">
                                  <button
                                    onClick={() => {
                                      handleQuantityDecrease(item);
                                    }}
                                    disabled={item.quantity === 1}
                         
                                    className={`w-10 h-10 bg-gradient-to-b from-white to-[#f9f9f9] inline-block border border-gray-300 ${item.quantity === 1  ? 'cursor-not-allowed' : 'cursor-pointer'} text-base rounded-full leading-none`}
                                  >
                                    –
                                  </button>
                                  <input
                                    type="text"
                                    className="w-10 font-bold text-center text-purple-800"
                                    value={item.quantity} // Display the item quantity
                                    readOnly
                                  />
                                  <button
                                    onClick={() =>
                                      handleQuantityIncrease(item)
                                    }
                        
                                    className="w-10 h-10 bg-gradient-to-b from-white to-[#f9f9f9] inline-block border border-gray-300 cursor-pointer text-base rounded-full leading-none"
                                  >
                                    +
                                  </button>
                                </div>
                                <div className="flex items-center ml-auto pt-2">
                                  <button
                                    type="button"
                                    onClick={
                                      () => removeFromCart(item._id)
                                    }
                                    className="text-red-500 hover:text-red-700 "
                                  >
                                    <MdDelete />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
  
                      ))}
                    </div>
                    <div className="w-full">
                      <TotalPriceSummary
                        cartItems={cartItems}
                        handleSubmit={handleSubmit}
                        isLoading={orderStatus === 'loading'}
                      />
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
              <div className="my-2">
                <button
                  type="button"
                  onClick={() => navigate("/")}
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
      {/* <Footer1 /> */}
    </>
  );
};

export default memo(CheckoutPage);
