
import React, { useState,useReducer, useEffect } from 'react';

import CustomerTable from './CustomerTable';
import CustomerForm from './CustomerForm';

import { fetchUserProfile } from '../../../API/userAPI';
import useLoading from '../../../customhooks/Loading';
import { Circles } from 'react-loader-spinner';
import { BASE_URL } from '../../../constants';

const CustomersPage = () => {
  const [user, setUser] = useState()


  const [isModalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState(''); // 'name', 'price', etc.
  const filterOptions = ['name', 'price']; // Add more filter options as needed

  // const[customerTable,setCustomerTable]=useState(customerData)
  const [editedCustomer, setEditedCustomer] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const loading = useLoading();






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
          const resp=await fetch(`${BASE_URL}/auth/user`)
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
    <section style={{ height: "calc(100vh - 4rem)" }}>
      <div className="w-full h-full flex-flex-col  bg-white">
        <div className="h-16 flex justify-between bg-gray-200">
          <header className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">Customers</h2>
          </header>
          <div className="flex items-center px-6 py-2">
             <button
               type="button"
               onClick={openModal}
               className="px-4 py-2 text-gray-900 bg-green-600 hover:bg-green-800 rounded-md cursor-pointer"
             >
               Add Customer
             </button>
           </div>
        </div>

        {/* Customer Table Headline */}
        <div className="h-4/5 overflow-y-auto flex-grow">
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
            <CustomerTable
              customerTable={user}
              // deleteCustomer={deleteCustomer}
              isModalOpen={isModalOpen}
              editCcustomer={editCcustomer}
            />
          )}
        </div>
      </div>

    </section>
  );
};

export default CustomersPage;
