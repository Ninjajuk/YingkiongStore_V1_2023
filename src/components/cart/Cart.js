
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

import EmptyCart from './EmptyCart';
import { useDispatch, useSelector } from 'react-redux';

import {calculateSubtotal,} from '../../utility/cartUtils'
import {removeItem} from '../../redux/cartSlice'
import { fetchItemsByUserIdAsync, selectCartLoaded, selectCartStatus, selectItems } from '../../redux/cartSliceasyn';
import { setUserToken } from '../../redux/authSlice';


export default function ShoppingCart({isCartOpen}) {
  const [data,setData]=useState(null)
  const productsArray = useSelector(selectItems);
  const cartStatus = useSelector(selectCartStatus);
  const cartLoaded = useSelector(selectCartLoaded);
  const [open, setOpen] = useState(true)
  // const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
// console.log(Items)

  // useEffect(() => {
  //   if (!cartLoaded) {
  //     dispatch(fetchItemsByUserIdAsync());
  //   }
  // }, [dispatch, cartLoaded]);

  // console.log(Itemsincart)

  // const cartItems = productsArray.map(item => item.product);
  // const productsArray = cartItems.map(item => item.product);

  const cartItems = productsArray.map(item => {
    const product = item.product;
    const quantity = item.quantity;
    return { ...product, quantity: quantity }; // Add quantity property to each product
});


  const subtotal = calculateSubtotal(cartItems);
  // const dispatch = useDispatch();

  const removeFromCArt = (itemid) => {
    dispatch(removeItem(itemid));
  };




  return (
    <>
      {cartStatus === "loading" && <div>Loading...</div>}
      {cartItems.length === 0 && open === true ? (
        <EmptyCart />
      ) : (
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                      <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                          <div className="flex items-start justify-between">
                            <Dialog.Title className="text-lg font-medium text-gray-900">
                              Shopping cart
                            </Dialog.Title>
                            <div className="ml-3 flex h-7 items-center">
                              <button
                                type="button"
                                className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                onClick={() => setOpen(false)}
                              >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Close panel</span>
                                <XMarkIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </button>
                            </div>
                          </div>

                          <div className="mt-8">
                            <div className="flow-root">
                              <ul
                                role="list"
                                className="-my-6 divide-y divide-gray-200"
                              >
                                {cartItems.map((product) => (
                                  <li key={product.id} className="flex py-6">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                      <img
                                        src={product.thumbnail}
                                        alt={product.title}
                                        className="h-full w-full object-cover object-center"
                                      />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                      <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                          <h3>
                                            <a href={product.href}>
                                              {product.title}
                                            </a>
                                          </h3>
                                          <p>
                                            <span>
                                              Qty {product.quantity}
                                            </span>
                                          </p>
                                          <p className="ml-4">
                                            ₹{product.price * product.quantity}
                                          </p>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500">
                                          {product.color}
                                        </p>
                                      </div>
                                      <div className="flex flex-1 items-end justify-between text-sm">
                                        <p className="text-gray-500">
                                          {/* <span>
                                            {" "}
                                            Qty {product.quantity}/
                                            <sub>
                                              {product.category === "vegetables"
                                                ? "kg"
                                                : "items"}
                                            </sub>
                                          </span> */}
                                          <span>
                                            Price ₹{product.price} per{" "}
                                            <sub>
                                              {product.category === "vegetables"
                                                ? "kg"
                                                : "items"}
                                            </sub>{" "}
                                          </span>
                                        </p>

                                        <div className="flex">
                                          <button
                                            type="button"
                                            onClick={() =>
                                              dispatch(removeItem(product._id))
                                            }
                                            className="font-medium text-red-500 hover:text-red-700"
                                          >
                                            Remove
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p>₹{subtotal}</p>
                          </div>
                          <p className="mt-0.5 text-sm text-gray-500">
                            Shipping and taxes calculated at checkout.
                          </p>
                          <div className="mt-6">
                            {/* {isLoggedIn.isAuthenticated ? ( */}
                            <a
                              href="/checkout"
                              // onClick={handleCheckout}
                              className="flex items-center justify-center rounded-md border border-transparent bg-purple-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-purple-900"
                            >
                              Checkout
                            </a>
                            {/* ) : (   
                         <a href="/login" onClick={() => setOpen(false)} className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Please login</a>
                            )} */}
                          </div>
                          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                            <p>
                              or
                              <button
                                type="button"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                // onClick={() => setOpen(false)}
                              >
                                Continue Shopping
                                <span aria-hidden="true"> &rarr;</span>
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      )}
    </>
  );
}
