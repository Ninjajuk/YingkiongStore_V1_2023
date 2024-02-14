'use client'
import React, { useState } from "react";

const OrderForm = ({ closeModal, initialOrder, onSubmit  }) => {
  const [orderData, setOrderData] = useState(initialOrder || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData((prevOrderData) => ({
      ...prevOrderData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(orderData);
    closeModal();
    onSubmit(orderData);
  
  };

  return (
    <form
      className=" w-full max-w-lg bg-white p-6 rounded-lg shadow-lg overflow-y-auto "
    //   style={{ maxHeight: "70vh", overflowY: "auto" }}
      onSubmit={handleSubmit}
    >
      <h1 className="text-xl text-center font-medium text-gray-600 p-2"> Add order Form </h1>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Payment Status
        </label>
        <input
          type="text"
          id="paymentStatus"
          name="paymentStatus"
          value={orderData.paymentStatus || ""}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Delivery Type
        </label>
        <input
          type="text"
          id="deliveryType"
          name="deliveryType"
          value={orderData.deliveryType || ""}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="lastSeen"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={orderData.date || ""}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
      <button
        onClick={closeModal}
        className="float-right bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Cancel
      </button>
    </form>
  );
};

export default OrderForm;
