import React from "react";


import { MdFacebook, MdOutlineMail } from "react-icons/md";
import { FaLinkedin, FaTwitterSquare } from "react-icons/fa";

import Lightsidebarwithheader from "./AdminDashLayout";

const CustomerDetails = () => {
  // Dummy customer data (you can replace this with actual data)
  const customer = {
    id: 1,
    name: "Sai Pallavi",
    email: "saipallavi@example.com",
    address: "123 Main St, Hyderabad, India",
    joinDate: "2023-09-05", 
    phone: "123-456-7890", 
    saipallavi:
      "https://www.filmibeat.com/wimgm/1366x70/desktop/2019/07/sai-pallavi_9.jpg",
    img:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    img:
      "https://www.filmibeat.com/wimgm/1366x70/desktop/2019/04/sai-pallavi_155409760700.jpg"
  };

  return (
    <Lightsidebarwithheader>
      <div className="min-w-md h-1/2 mx-auto mt-8 flex flex-col md:flex-row gap-4">
        {/* First Div - Customer Image and Name/Date/Social Icons */}
        <div className="bg-white p-6 rounded-lg shadow-md md:w-1/2 flex">
          {/* Left Child - Customer Image */}
          <div className="w-1/2 py-2 px-2">
            <img
              src="https://www.filmibeat.com/wimgm/1366x70/desktop/2019/07/sai-pallavi_9.jpg"
              alt="Customer Image"
              className="rounded-md w-full h-full mx-auto object-cover"
            />
          </div>

          {/* Right Child - Customer Name and Date */}
          <div className="flex-grow px-2">
            <h1 className="text-2xl font-bold text-sky-700 mb-2">{customer.name}</h1>
            <p className="text-gray-600">Join Date: {customer.joinDate}</p>

            {/* Social Icons */}
            <div className="flex items-center mt-2">
              <span className="w-10 h-10 text-blue-600 text-xl">
                <MdFacebook />
              </span>
              <span className="w-10 h-10 text-red-600 text-xl">
                <MdOutlineMail />
              </span>
              <span className="w-10 h-10 text-blue-600 text-xl">
                <FaLinkedin />
              </span>
            </div>
          </div>
        </div>

        {/* Second Div - Customer Info */}
        <div className="bg-white p-6 rounded-lg shadow-md md:w-1/2">
          <div className="mb-4">
            <label className="text-purple-600 font-bold text-2xl">
              Default Address:
            </label>
            <p className="text-gray-800">{customer.address}</p>
          </div>
          <div className="mb-4">
            <label className="text-gray-600 font-semibold">Email:</label>
            <p className="text-gray-800">{customer.email}</p>
          </div>
          <div className="mb-4">
            <label className="text-gray-600 font-semibold">Phone:</label>
            <p className="text-gray-800">{customer.phone}</p>
          </div>
        </div>
      </div>
    </Lightsidebarwithheader>
  );
};

export default CustomerDetails;
