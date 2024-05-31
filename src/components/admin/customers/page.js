
import React, { useState,useReducer, useEffect } from 'react';

import CustomerTable from './CustomerTable';
import CustomerForm from './CustomerForm';
import {customerData} from './customerdata'
import { fetchUserProfile } from '../../../API/userAPI';
import useLoading from '../../../customhooks/Loading';
import { Circles } from 'react-loader-spinner';

const CustomersPage = () => {
  const [user, setUser] = useState()


  const [isModalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState(''); // 'name', 'price', etc.
  const filterOptions = ['name', 'price']; // Add more filter options as needed

  const[customerTable,setCustomerTable]=useState(customerData)
  const [editedCustomer, setEditedCustomer] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const loading = useLoading();

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
    useEffect(()=>{
      const fethuser=async()=>{
        try {
          const resp=await fetch('http://localhost:8000/auth/user')
          const data=await resp.json()
        
          if (data) {
            setUser(data);
          }
        } catch (error) {
          console.error(error)
        }
      }
      fethuser()
    
      },[])
    console.log(user)

  return (

      <div className="w-full flex-flex-col h-full bg-white ">
        {/* Product Headline */}
        {/* <div className="h-1/3 bg-white flex flex-col">
          <h1 className="px-6 py-2 lg:text-xl font font-semibold  text-sky-600">
          Elevate Customer Engagement
          </h1>

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
        </div> */}
        <div className="h-12 flex justify-between bg-gray-200">
          <header className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">Customers</h2>
          </header>
          {/* <div className="flex items-center px-6 py-2">
            <button
              type="button"
              onClick={openModal}
              className="px-4 py-2 text-gray-900 bg-green-600 hover:bg-green-800 rounded-md cursor-pointer"
            >
              Add Customer
            </button>
          </div> */}
        </div>

        {/* Customer Table Headline */}
        {loading ? (
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
        <div className="h-2/3  flex-grow">
          <div className="overflow-y-auto max-h-full">
            <CustomerTable
              customerTable={user}
              deleteCustomer={deleteCustomer}
              isModalOpen={isModalOpen}
              editCcustomer={editCcustomer}
            />
          </div>
        </div>
            )}
        {isModalOpen && (
          <CustomerForm
            closeModal={closeModal}
            customerTable={customerTable}
            updateCustomerTable={updateCustomerTable}
            addCustomer={addCustomer} // Pass the addCustomer function to the CustomerForm
          />
        )}
      </div>

  );
};

export default CustomersPage;
