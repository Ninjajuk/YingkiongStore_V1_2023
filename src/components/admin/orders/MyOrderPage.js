import React, { useState,  } from 'react';
import { orderData } from "./orderdata";
import Lightsidebarwithheader from '../componentsAdmin/AdminDashLayout'
import OrdersTable from './OrderTable';
import Pagination from '../../common/Pagination';

const MyOrderPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [hoveredRow, setHoveredRow] = useState(null);
  const [checkboxStates, setCheckboxStates] = useState({});
  const filterOptions = ['name', 'price']; 

  const handleFilter = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterSelect = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <Lightsidebarwithheader>
      <section className="w-full   h-full bg-white ">
        <div className="w-full flex-flex-col h-full">
          {/* Product Headline */}
          <div className="w-full lg:h-1/6 bg-white flex flex-col">
            <h1 className="px-6 py-1 md:text-3xl font font-semibold  text-sky-600">
              Order Management
            </h1>
            {/* <p className="px-6">Navigating Orders with Confidence</p> */}
            <div className="py-1 px-6 mx-auto flex flex-col md:flex-row items-center gap-1">
              <input
                type="text"
                placeholder="Search"
                className="block flex-1 border-2 hover:border-blue-500 bg-gray-100 rounded-md py-1.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                value={searchTerm}
                onChange={handleFilter}
              />
              <div className="flex">
                {" "}
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
          </div>
          {/* Product Headline */}

          <div className="h-5/6  overflow-y-auto ">
            <OrdersTable searchTerm={searchTerm} sortBy={sortBy} />
          </div>

          {/* <div className='h-1/6'><Pagination currentPage={currentPage} totalPages={Math.ceil(products.length / itemsPerPage)} onPageChange={handlePageChange}/></div> */}
        </div>
      </section>
    </Lightsidebarwithheader>
  );
}

export default MyOrderPage