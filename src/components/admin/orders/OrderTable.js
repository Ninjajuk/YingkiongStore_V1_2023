'use client'
import React, { useState } from "react";

import { orderData } from "./orderdata";
import { DeleteModal } from "@/app/Components/Modal/DeleteModal";
import { OrderModal } from "@/app/Components/Modal/orderModal";
import { paginate, } from '../../utility/utilitypagination';
import Pagination from "@/app/Components/Pagination";
import { toggleSortDirection, sortItems, searchItems } from '../../utility/sortingFiltering';
import {openEditModal,closeEditModal,submitEditChanges,handleMouseEnterRow,handleMouseLeaveRow,openDeleteModal,handleCheckboxChange} from '../../utility/modalutility';
const OrdersTable = ({searchTerm,sortBy,}) => {
  const [orders, setOrders] = useState(orderData);
  const [isEditModalOpen, setisEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedOrderForEdit, setSelectedOrderForEdit] = useState(null);
  const itemsPerPage = 10;
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [hoveredRow, setHoveredRow] = useState(null);
  const [checkboxStates, setCheckboxStates] = useState({});


 

  const [currentPage, setCurrentPage] = useState(1);
  
  const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  const currentOrders = paginate(orders, currentPage, itemsPerPage);


  const handleEditClick = (order) => {
    openEditModal(order, setisEditModalOpen, setSelectedOrderForEdit);
  };
  
  const handleModalClose = () => {
    closeEditModal(setisEditModalOpen, setSelectedOrderForEdit);
  };
  
  const onSubmit = (editedOrder) => {
    submitEditChanges(editedOrder, setisEditModalOpen, setSelectedOrderForEdit);
  };
  
  const handleMouseEnter = (index) => {
    handleMouseEnterRow(index, setHoveredRow);
  };
  
  const handleMouseLeave = () => {
    handleMouseLeaveRow(setHoveredRow);
  };
  
  const handleDelete = (index) => {
    openDeleteModal(setIsModalOpened, setIsDeleteModalOpen, setHoveredRow);
  };

  const handleCheckboxChange = (index) => {
    setCheckboxStates((prevState) => {
      return { ...prevState, [index]: !prevState[index] };
    });
  };


  const handleConfirmDelete = () => {
    if (isModalOpened && hoveredRow !== null) {
      setIsModalOpened(false);
  
      // Use filter to create a new array excluding the element at hoveredRow
      const updatedOrders = orders.filter((_, index) => index !== hoveredRow);
      
      console.log("Updated orders after deletion:", updatedOrders);
      setOrders(updatedOrders);
      setIsDeleteModalOpen(false);
    }
  };
  

  const handleDeleteAndConfirm = async () => {
    if (hoveredRow !== null) {
      await handleDelete(hoveredRow); // Wait for handleDelete to complete
      handleConfirmDelete();
    }
  };
  

  const handleCancelDelete = (index) => {
    setIsDeleteModalOpen(false);
  };
  return (
    <>
      <div className="flex flex-col w-full h-full">
        <div className="flex-grow overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className=" bg-black text-white sticky top-0 z-10">
              <tr className="">
                <th className="border border-gray-300 p-2 text-left whitespace-nowrap">
                  {/* <input type="checkbox" /> */}
                  SL.No
                </th>
                <th
                  className=" p-2 cursor-pointer text-left whitespace-nowrap"
                  // onClick={() => {
                  //   setSortField("orderNumber");
                  //   toggleSortDirection();
                  // }}
                >
                  ORDER
                  {/* {sortField === "orderNumber" && (
                    <span
                      className={`ml-2 ${
                        sortDirection === "asc" ? "rotate-180" : ""
                      }`}
                    >
                      &#8593;
                    </span>
                  )} */}
                </th>
                <th
                  className="border border-gray-300 p-2 cursor-pointer text-left whitespace-nowrap"
                  // onClick={() => {
                  //   setSortField("total");
                  //   toggleSortDirection();
                  // }}
                >
                  TOTAL
                  {/* {sortField === "total" && (
                    <span
                      className={`ml-2 ${
                        sortDirection === "asc" ? "rotate-180" : ""
                      }`}
                    >
                      &#8593;
                    </span>
                  )} */}
                </th>
                <th
                  className="border border-gray-300 p-2 cursor-pointer text-left whitespace-nowrap"
                  // onClick={() => {
                  //   setSortField("customer");
                  //   toggleSortDirection();
                  // }}
                >
                  CUSTOMER
                  {/* {sortField === "customer" && (
                    <span
                      className={`ml-2 ${
                        sortDirection === "asc" ? "rotate-180" : ""
                      }`}
                    >
                      &#8593;
                    </span>
                  )} */}
                </th>
                <th className="border border-gray-300 p-2 text-left whitespace-nowrap">
                  PAYMENT STATUS
                </th>
                <th className="border border-gray-300 p-2 text-left whitespace-nowrap">
                  FULFILMENT STATUS
                </th>
                <th className="border border-gray-300 p-2 text-left whitespace-nowrap">
                  DELIVERY TYPE
                </th>
                <th
                  className="border border-gray-300 p-2 cursor-pointer text-left"
                  // onClick={() => {
                  //   setSortField("date");
                  //   toggleSortDirection();
                  // }}
                >
                  DATE
                  {/* {sortField === "date" && (
                    <span
                      className={`ml-2 ${
                        sortDirection === "asc" ? "rotate-180" : ""
                      }`}
                    >
                      &#8593;
                    </span>
                  )} */}
                </th>
              </tr>
            </thead>
            <tbody className="-z-10">
              {currentOrders.map((order, index) => (
                <tr
                  key={order.id}
                  className={
                    checkboxStates[index]
                      ? "bg-green-200 hover:bg-green-400 shadow-lg"
                      : index % 2 === 0
                      ? "bg-gray-100 hover:bg-gray-400 shadow-lg"
                      : "bg-sky-100 hover:bg-gray-400 shadow-lg"
                  }
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  style={{ position: "relative", cursor: "pointer" }}
                >
                  <td
                    className={`border border-gray-300 p-2 'bg-green-500 text-white' : ''}`}
                  >
                    {/* <input
                      type="checkbox"
                      checked={checkboxStates[index]}
                      onChange={() => handleCheckboxChange(index)}
                    /> */}
                    {order.id}
                  </td>
                  <td className="border border-gray-300 p-2 whitespace-nowrap">
                    {order.orderNumber}
                  </td>
                  <td className="border border-gray-300 p-2 whitespace-nowrap">₹{order.total}</td>
                  <td className="border border-gray-300 p-2 whitespace-nowrap">
                    {order.customer}
                  </td>
                  <td className="border border-gray-300 p-2 whitespace-nowrap">
                    {order.paymentStatus}
                  </td>
                  <td className="border border-gray-300 p-2 whitespace-nowrap">
                    {order.fulfilmentStatus}
                  </td>
                  <td className="border border-gray-300 p-2 whitespace-nowrap">
                    {order.deliveryType}
                  </td>
                  <td className="border border-gray-300 p-2 whitespace-nowrap">{order.date}</td>
                  <td
                    className={` p-2 absolute right-0 top-0 ${
                      hoveredRow === index ? "block" : "hidden"
                    }`}
                  >
                    <button
                      onClick={() => handleEditClick(order)}
                      className="mr-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-2 rounded "
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(index)}
                      className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full h-1/6">
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(orderData.length / itemsPerPage)}
            handlePageChange={handlePageChange}
            totalnumber={orderData.length }
            
          />
        </div>
      </div>

      {isEditModalOpen && (
        <OrderModal
          order={selectedOrderForEdit}
          onSubmit={onSubmit}
          closeModal={() => {
            setisEditModalOpen(false);
            setSelectedOrderForEdit(null);
          }}
        />
      )}

      {isDeleteModalOpen && (
        <DeleteModal
          closeModal={handleCancelDelete}
          onDelete={handleDeleteAndConfirm}
        />
      )}
    </>
  );
};

export default OrdersTable;
