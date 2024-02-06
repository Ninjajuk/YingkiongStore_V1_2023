'use client'
import React, { useState } from "react";


const CustomerTable = ({customerTable,deleteCustomer,editCcustomer}) => {
  
  const handleDelete = (index) => {
    // Call the deleteCustomer function with the index of the customer to be deleted
    deleteCustomer(index);
  };

  const handleEdit = (item,index) => {
     console.log(item);
     editCcustomer(item,true)
  };
  
  return (
    <>
<section className="antialiased bg-gray-100 text-gray-600  ">
    <div className="flex flex-col justify-center h-full">
        {/* <!-- Table --> */}
        <div className="w-full max-w-2xl lg:max-w-7xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">Customers</h2>
            </header>
            <div className="p-3">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50 sticky top-0 ">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Name</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Email</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Phone</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Spent</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">City</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Actions</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                          {customerTable.map((item,index)=>
                            <tr key={index}>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        {/* <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Alex Shatov"/></div> */}
                                        <div className="font-medium text-gray-800">{item.name}</div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left">{item.email}</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left ">{item.phone}</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-lg text-left font-medium text-green-500">₹{item.totalSpent}</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-sm text-left">{item.city}</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-sm text-left flex gap-2">
                                      <span className="px-2 py-1 text-sky-600"><button type='button' onClick={()=>handleEdit(item,index)}>Edit</button></span>
                                      <span className="px-2 py-1 text-red-600"><button onClick={() => handleDelete(index)}>Delete</button></span>
                                      </div>
                                </td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    {/* {isModalOpen && (
          <CustomerForm
          // closeModal={closeModal}
          />
        )} */}
</section>

    </>
  );
};

export default CustomerTable;
