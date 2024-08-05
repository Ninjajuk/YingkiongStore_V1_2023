
import React, { useState } from "react";
import {
  PencilIcon,

} from '@heroicons/react/24/outline';
import { MdDelete } from "react-icons/md";

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
  

          {/* <!-- Table --> */}
       

              <div className="w-full max-h-full  overflow-x-auto overflow-y-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs sticky top-0 z-10 font-bold uppercase bg-purple-800 text-white  ">
                    <tr className="">
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Name</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Email</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Phone</div>
                      </th>
                      {/* <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Address</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Pin Code</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">District</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">State</div>
                      </th> */}
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Role</div>
                      </th>
                      {/* <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">total</div>
                                </th> */}
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Actions</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {customerTable &&customerTable.map((item, index) => (
                      <tr key={index}>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            {/* <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Alex Shatov"/></div> */}
                            <div className=" text-gray-800">{item.name}</div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{item.email}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left ">{item.phone}</div>
                        </td>
                        {/* <td className="p-2 whitespace-nowrap">
                                    <div className="text-lg text-left font-medium text-green-500">₹{item.address}</div>
                                </td> */}
                        {/* <td className="p-2 whitespace-nowrap">
                          <div className="text-sm text-left">
                            {item.address}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-sm text-left">
                            {item.pinCode}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-sm text-left">
                            {item.district}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-sm text-left">{item.state}</div>
                        </td> */}
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-sm text-left">{item.role}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-sm text-left flex gap-2">
                            <span className="px-2 py-1 text-sky-600">
                              <button
                                type="button"
                                // onClick={() => handleEdit(item, index)}
                              >
                                Edit
                              </button>
                            </span>
                            {/* <span><PencilIcon className="w-4 h-4"/></span> */}
                            <span className="px-2 py-1 text-red-600">
                              <button 
                              // onClick={() => handleDelete(index)}
                              >
                                Delete
                              </button>
                              {/* <span><MdDelete/></span> */}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>


        {/* {isModalOpen && (
          <CustomerForm
          // closeModal={closeModal}
          />
        )} */}

    </>
  );
};

export default CustomerTable;
