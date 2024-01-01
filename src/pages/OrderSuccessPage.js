// import { useEffect } from "react";
// import { Link, Navigate, useParams } from "react-router-dom";



const OrderSuccessPage = () => {

  // const params = useParams() 

  const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
]


  return (
    <div className="container mx-auto mt-8 md:px-[8rem]">
      <h2 className="lg:text-3xl font-bold mb-4 text-green-600 lg:text-center">
        Order Successful! Thank you for your order!
      </h2>

      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2">Order Details</h3>

        {/* Product List */}
        <div className="flow-root">
          <ul  className="-my-6 divide-y divide-gray-200">
            {products.map((product) => (
              <li key={product.id} className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={product.imageSrc}
                    alt={product.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <a href={product.href}>{product.name}</a>
                      </h3>
                      <p className="ml-4">₹{product.price}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    {/* <p className="text-gray-500">Qty {product.quantity}</p> */}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Total Price */}

      {/* <TotalPriceSummary /> */}
      {/* Delivery Address */}
      {/* <div className="max-w-md mb-4 rounded-md shadow-md bg-white px-4 py-4">
        <h4 className="text-xl font-bold mb-2">Delivery Address</h4>
        <p>
          {order.deliveryAddress.firstName} {order.deliveryAddress.lastName}
        </p>
        <p>{order.deliveryAddress.address}</p>
        <p>
          {order.deliveryAddress.city}, {order.deliveryAddress.state}{" "}
          {order.deliveryAddress.pincode}
        </p>
        <p>{order.deliveryAddress.country}</p>
      </div> */}


      {/* Additional Information or Thank You Message */}
      {/* <p className="text-lg">Thank you for your order! Your items will be delivered soon.</p> */}
      <div className="border-b-2 border-gray-200"></div>
      <div className="my-6 flex justify-center text-center text-sm text-gray-500">
        <p className="ml-auto">
          or
          <button
            type="button"
            className="font-medium text-indigo-600 hover:text-indigo-500 "

          >
            Continue Shopping
            <span aria-hidden="true"> &rarr;</span>
          </button>
        </p>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
