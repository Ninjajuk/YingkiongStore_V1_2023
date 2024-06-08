
import React, { useEffect, useState } from "react";
import Pagination from "../../common/Pagination";
import {
  PencilIcon,
  EyeIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from '@heroicons/react/24/outline';

import { fetchAllOrdersAsync, selectOrders, selectTotalOrders, selectTotalPages, updateOrderAsync } from "../../../redux/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import { getDate } from "../../../utility/orderhelper";
const OrdersTable = ({searchTerm,sortBy,}) => {


  const [checkboxStates, setCheckboxStates] = useState({});
  const [editableOrderId, setEditableOrderId] = useState(-1);
  const [editPaymentStatus, setEditPaymentStatus] = useState(-1);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);
  const totalOrders = useSelector(selectTotalOrders);
  const totalOrdersPage = useSelector(selectTotalPages);
  const [sort, setSort] = useState({ sortBy: 'createdAt', order: 'desc' }); // Manage sorting criteria

  // const sort = { sortBy: 'date', order: 'desc' }; 
  const pagination = { limit: 10 }; 
  // console.log('order data length from backend',orders)
  // console.log('currentPage',page)

const handleEdit = (order) => {
  setEditableOrderId(order._id);
  // console.log('order._id',order._id)
};
const handleEditPaymentStatus = (order) => {
  setEditPaymentStatus(order._id);

};
const handleSort = (sortOption) => {
  setSort(sortOption);
  console.log(sortOption,'by Date')

};
const handleShow = () => {
  console.log('handleShow');
};
const handleOrderStatus =(e, order) => {
  const updatedOrder = { ...order, status: e.target.value };
   dispatch(updateOrderAsync(updatedOrder));
//  console.log('updatedOrder',updatedOrder)
    setEditableOrderId(-1);
};
const handleOrderPaymentStatus = (e, order) => {
  const updatedOrder = { ...order, paymentStatus: e.target.value };
   dispatch(updateOrderAsync(updatedOrder));
   setEditPaymentStatus(-1);
};
const handlePageChange = (page) => {
  setPage(page);
};
const chooseColor = (status) => {
  switch (status) {
    case 'pending':
      return 'bg-purple-200 text-purple-600';
    case 'dispatched':
      return 'bg-yellow-200 text-yellow-600';
    case 'delivered':
      return 'bg-green-200 text-green-600';
    case 'received':
      return 'bg-green-200 text-green-600';
    case 'cancelled':
      return 'bg-red-200 text-red-600';
    default:
      return 'bg-purple-200 text-purple-600';
  }
};
const sortedOrders = [...orders].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

useEffect(()=>{
  dispatch(fetchAllOrdersAsync(page,sort))
}, [dispatch,page,sort])
  return (
    <>
      <div className="flex flex-col w-full h-full">
        <div className="flex-grow overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className=" bg-gray-400 text-white sticky top-0 z-10">
              <tr className="">
                {/* <th className="border border-gray-300 p-2 text-left whitespace-nowrap">
                  <input type="checkbox" />
                  SL.No
                </th> */}
                <th
                  className=" p-2 cursor-pointer text-left whitespace-nowrap"
                  // onClick={() => {
                  //   setSortField("orderNumber");
                  //   toggleSortDirection();
                  // }}
                >
                  Order Id
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
                 className="border border-gray-300 p-2 text-left whitespace-nowrap"
                 onClick={() => handleSort({ sortBy: 'createdAt', order: sort.order === 'asc' ? 'desc' : 'asc' })} // Toggle sorting order
                 >
                  Order Date
                  {sort.sortBy === "createdAt" && 
                    (sort.order === "asc" ? (
                      <ArrowUpIcon className="w-4 h-4 inline text-red-700" />
                    ) : (
                      <ArrowDownIcon className="w-4 h-4 inline text-red-700" />
                    ))}
                </th>
                <th
                  className="border border-gray-300 p-2 cursor-pointer text-left whitespace-nowrap"
                  // onClick={() => {
                  //   setSortField("total");
                  //   toggleSortDirection();
                  // }}
                >
                  Items
                </th>
                <th
                  className="border border-gray-300 p-2 cursor-pointer text-left whitespace-nowrap"
                  // onClick={() => {
                  //   setSortField("customer");
                  //   toggleSortDirection();
                  // }}
                >
                  totalAmount
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
                  totalItems
                </th>
                <th className="border border-gray-300 p-2 text-left whitespace-nowrap">
                  Shipping Address
                </th>
                <th className="border border-gray-300 p-2 text-left whitespace-nowrap">
                  Order Status
                  {sort._sort === "id" &&
                    (sort._order === "asc" ? (
                      <ArrowUpIcon className="w-4 h-4 inline"></ArrowUpIcon>
                    ) : (
                      <ArrowDownIcon className="w-4 h-4 inline"></ArrowDownIcon>
                    ))}
                </th>
                {/* <th className="border border-gray-300 p-2 text-left whitespace-nowrap">
                  Payment Method
                </th> */}
                <th
                  className="border border-gray-300 p-2 cursor-pointer text-left"
                  // onClick={() => {
                  //   setSortField("date");
                  //   toggleSortDirection();
                  // }}
                >
                  Payment Status
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
                {/* <th className="border border-gray-300 p-2 text-left whitespace-nowrap">
                  Actions
                </th> */}
              </tr>
            </thead>
            <tbody className="">
              {orders.map((order, index) => (
                <tr
                  key={order.id}
                  className={
                    checkboxStates[index]
                      ? "bg-green-200 hover:bg-green-400 shadow-lg"
                      : index % 2 === 0
                      ? "bg-gray-50 hover:bg-green-100 shadow-lg hover:cursor-pointer"
                      : "bg-gray-200 hover:bg-green-100 shadow-lg hover:cursor-pointer"
                  }
                  // onMouseEnter={() => handleMouseEnter(index)}
                  // onMouseLeave={() => handleMouseLeave(index)}
                  style={{ position: "relative" }}
                >
                  {/* <td
                    className={`border border-gray-300 p-2 'bg-green-500 text-white' : ''}`}
                  >
                    <input
                      type="checkbox"
                      checked={checkboxStates[index]}
                      onChange={() => handleCheckboxChange(index)}
                    />
                    {order.orderId}
                  </td> */}
                  <td className="border border-gray-300 p-2 whitespace-nowrap">
                    {order.orderId}
                  </td>
                  <td className="border border-gray-300 p-2 whitespace-nowrap">
                    {getDate(order.createdAt)}
                  </td>
                  <td className="border border-gray-300 p-2 whitespace-nowrap">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <div className="mr-2">
                          <img
                            className="w-6 h-6 rounded-full"
                            src={item.product.thumbnail}
                            alt={item.product.title}
                          />
                        </div>
                        <span>
                          {item.product.title} - #{item.quantity} - ₹
                          {item.product.price}
                        </span>
                      </div>
                    ))}
                  </td>
                  <td className="border border-gray-300 p-2 whitespace-nowrap">
                    <div className="flex items-center justify-center">
                      ₹{order.totalAmount}
                    </div>
                  </td>
                  <td className="border border-gray-300 p-2 whitespace-nowrap">
                    <div className="flex items-center justify-center">
                      {order.totalItems}
                    </div>
                  </td>
                  <td className="border border-gray-300 p-2 whitespace-nowrap">
                    <div className="">
                      <div>
                        <strong>
                          <span>{order.selectedAddress.firstName}</span>
                          <span className="pl-2">
                            {order.selectedAddress.lastName}
                          </span>
                        </strong>
                        ,
                      </div>
                      <div>{order.selectedAddress.phone},</div>
                      <div>{order.selectedAddress.email}, </div>
                      <div>{order.selectedAddress.address}, </div>
                      <div>{order.selectedAddress.district}</div>
                      <div>{order.selectedAddress.pincode}, </div>
                    </div>
                  </td>
                  <td className="border border-gray-300 p-2 whitespace-nowrap">
                    {order._id === editableOrderId ? (
                      <select
                        value={order.status}
                        onChange={(e) => handleOrderStatus(e, order)}
                      >
                        <option value="pending">Pending</option>
                        <option value="dispatched">Dispatched</option>
                        <option value="delivered">Delivered</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    ) : (
                      // <span
                      //   className={`${chooseColor(
                      //     order.status
                      //   )} py-1 px-3 rounded-full text-xs`}
                      // >
                      //   {order.status}
                      // </span>
                      <div className="flex item-center justify-center">
                        <span
                          className={`${chooseColor(
                            order.status
                          )} py-1 px-3 rounded-full text-xs`}
                        >
                          {order.status}
                        </span>
                        <span>
                          <PencilIcon
                            className="w-6 h-6 py-1 cursor-pointer hover:text-green-700 hover:scale-120"
                            onClick={(e) => handleEdit(order)}
                          ></PencilIcon>
                        </span>
                      </div>
                    )}
                  </td>
                  {/* <td className="border border-gray-300 p-2 whitespace-nowrap">
                    <div className="flex items-center justify-center">
                    {order.paymentMethod}
                    </div>
                  </td> */}
                  <td className="border border-gray-300 p-2 whitespace-nowrap">
                    {order._id === editPaymentStatus ? (
                      <select
                        value={order.paymentStatus}
                        onChange={(e) => handleOrderPaymentStatus(e, order)}
                      >
                        <option value="pending">Pending</option>
                        <option value="received">Received</option>
                      </select>
                    ) : (
                      <div className="flex item-center justify-center">
                        <span
                          className={`${chooseColor(
                            order.paymentStatus
                          )} py-1 px-3 rounded-full text-xs`}
                        >
                          {order.paymentStatus}
                        </span>
                        <span>
                          <PencilIcon
                            className="w-6 h-6 py-1 cursor-pointer hover:text-green-700 hover:scale-120"
                            onClick={(e) => handleEditPaymentStatus(order)}
                          ></PencilIcon>
                        </span>
                      </div>
                    )}
                  </td>
                  {/* <td className="border border-gray-300 p-2 whitespace-nowrap">
                    <div className="flex item-center justify-center">
                      <div className="w-6 mr-4 transform hover:text-purple-500 hover:scale-120">
                        <EyeIcon
                          className="w-4 h48"
                          onClick={(e) => handleShow(order)}
                        ></EyeIcon>
                      </div>
                      <div className="w-6 mr-2 transform hover:text-purple-500 hover:scale-120">
                        <PencilIcon
                          className="w-4 h-4"
                          onClick={(e) => handleEdit(order)}
                        ></PencilIcon>
                      </div>
                    </div>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full h-1/6">
          <Pagination
            totalPages={totalOrdersPage}
            handlePageChange={setPage}
            currentPage={page}
            // totalnumber={ordertableData.length}
          />
        </div>
      </div>
    </>
  );
};

export default OrdersTable;
