import React, { useState } from "react";


const CustomerForm = ({ closeModal, customerTable, updateCustomerTable,editCcustomer ,addCustomer}) => {

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    totalSpent: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission (e.g., send data to backend)
    console.log("Form submitted:", customer);
    addCustomer(customer)
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
         <form
      className=" w-full max-w-lg bg-white p-6 rounded-lg shadow-lg "
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Customer Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={customer.name}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={customer.email}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="orders"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Phone
        </label>
        <input
          type="number"
          id="phone"
          name="phone"
          value={customer.phone}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="totalSpent"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Total Spent
        </label>
        <input
          type="number"
          id="totalSpent"
          name="totalSpent"
          value={customer.totalSpent}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="city"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          City
        </label>
        <input
          type="text"
          id="city"
          name="city"
          value={customer.city}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-between"> <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
      <button type="button"onClick={closeModal}className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Close</button></div>

    </form>
    </div>
 
  );
};

export default CustomerForm;
