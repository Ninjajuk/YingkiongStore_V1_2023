'use client'
import React, { useState,useReducer } from 'react';

import CustomerTable from './CustomerTable';
import CustomerForm from './CustomerForm';
import {customerData} from './customerdata'

const CustomersPage = () => {


  const [isModalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState(''); // 'name', 'price', etc.
  const filterOptions = ['name', 'price']; // Add more filter options as needed

  const[customerTable,setCustomerTable]=useState(customerData)
  const [editedCustomer, setEditedCustomer] = useState(null);
  const [isEditing, setIsEditing] = useState(false);



  const addCustomer = (newCustomer) => {
    // Use the spread operator to create a new array with the existing customers and the new customer
    const updatedCustomerTable = [newCustomer,...customerTable];
    // Update the state with the modified customerTable
    setCustomerTable(updatedCustomerTable);
    closeModal(); // Close the modal after adding a customer
  };
  
  const updateCustomerTable = (newCustomerTable) => {
    setCustomerTable(newCustomerTable);
 };

 const deleteCustomer = (index) => {
  // Use the filter method to create a new array excluding the customer at the specified index
  const updatedCustomerTable = customerTable.filter((_, i) => i !== index);
  // Update the state with the modified customerTable
  setCustomerTable(updatedCustomerTable);
};




  const handleFilter = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleFilterSelect = (e) => {
    setSortBy(e.target.value);
  };
  const openModal = () => {
    setModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

    // Function to edit 
    const editCcustomer = (stateFromTable,state) => {
      setModalOpen(state)
      setIsEditing(stateFromTable)
    };

  return (
    <section className="w-full   h-full bg-white ">
      <div className="w-full flex-flex-col h-full">
        {/* Product Headline */}
        <div className="h-1/3 bg-white flex flex-col">
          <h1 className="px-6 py-2 md:text-3xl font font-semibold text-center text-sky-600">
            Customers Management
          </h1>
          <p className="px-6">Elevate Customer Engagement</p>
          <div className="flex px-6 py-2">
            <button
              type="button"
              onClick={openModal}
              className="px-4 py-2 bg-gray-400 hover:bg-gray-600 rounded-md cursor-pointer"
            >
              Add Customer
            </button>
          </div>
          <div className="py-2 px-6 mx-auto flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="block flex-1 border-2 hover:border-blue-500 bg-gray-100 rounded-md py-1.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              value={searchTerm}
              onChange={handleFilter}
            />
            <label className="ml-4">Filter By:</label>
            <select
              className="ml-2 border-2 bg-gray-100 rounded-md py-1.5 px-2 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
              value={sortBy}
              onChange={handleFilterSelect}
            >
              <option value="">Select...</option>
              {filterOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Product Headline */}
        <div className="h-2/3 overflow-y-auto flex-grow">
          <div className="max-h-full">
            <CustomerTable
              customerTable={customerTable}
              deleteCustomer={deleteCustomer}
              isModalOpen={isModalOpen}
              editCcustomer={editCcustomer}
            />
          </div>
        </div>
        {isModalOpen && (
          <CustomerForm
            closeModal={closeModal}
            customerTable={customerTable}
            updateCustomerTable={updateCustomerTable}
            addCustomer={addCustomer}  // Pass the addCustomer function to the CustomerForm
          />
        )}
      </div>
    </section>
  );
};

export default CustomersPage;
