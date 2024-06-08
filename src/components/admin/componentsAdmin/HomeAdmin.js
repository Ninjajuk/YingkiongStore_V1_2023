import React from 'react'



import { data } from "./data";
import { FaAngleRight, FaChartLine, FaRegHeart } from "react-icons/fa";

import {
  MdOutlineShowChart,
  MdOutlineBarChart,
  MdOutlineAdd
} from "react-icons/md";
import ChartComponent from './chart/ChartComponent';
import BarChartComponents from './chart/BarChart';
import Lightsidebarwithheader from './AdminDashLayout';


const cardSales = [
  { title: "Total Earnings", price: "₹124500", path: "" },
  { title: "Total Sales", price: "147", path: "" },
  { title: "Total Orders", price: "85", path: "" }
];
const awesomeBackgroundColors = [
  "bg-blue-200",
  "bg-green-200",
  "bg-purple-200"
];
const awesomeBackgroundColorsHover = [
  "hover:bg-blue-600",
  "hover:bg-green-600",
  "hover:bg-purple-600"
];

const orderData = [10, 25, 15, 30, 20, 35, 45]; // Replace with your actual order data
const xAxisLabels = ["Mon", "Tue", "wed", "Thu", "Fri", "Sat", "Sun"];
const yAxisInterval = 10;
const HomeAdmin = () => {
  return (

        <div
        className=" md:w-full h-full flex-grow   md:px-4 py-2"

      >
        {/* <div className=' mx-2 p-4 bg-gray-200 rounded-md mb-2 text-lg text-sky-500 font-bold'>
            Welcome Admin
        </div> */}
        <div className=" w-full flex flex-col md:flex-row ">
          {/* Left column */}
          <div className=" w-full md:w-3/5">
            <div className="h-1/4  bg-white px-2 py-2 rounded-md">
              <div className="h-full grid grid-cols-1 md:grid-cols-3 gap-2">
                {" "}
                {/* Grid layout */}
                {/* Card component for total earning data */}
                {cardSales.map((item, index) => (
                  <div
                    key={index}
                    className={`bg-white p-4 rounded-md shadow ${
                      awesomeBackgroundColors[
                        index % awesomeBackgroundColors.length
                      ]
                    } hover:${
                      awesomeBackgroundColorsHover[
                        index % awesomeBackgroundColorsHover.length
                      ]
                    } transform hover:scale-105 hover:shadow-xl transition-transform duration-300`}
                  >
                    <h2 className="text-l font-semibold">{item.title}</h2>
                    <p className="text-black-500 text-center font-medium text-xl">
                      {item.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className=" px-2 py-2 bg-gray-200 mt-2 mb-2 rounded-md ">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl px-2">
                  Regular Sell
                </h2>
                <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
                  Export
                </button>
              </div>

              <div className="flex flex-col md:flex-row gap-2 w-full md:w-7/10  mb-4 md:mb-0">
                <div className="md:w-8/12 px-2 bg-white rounded-md shadow-md">
                  <BarChartComponents
                    data={orderData}
                    xAxisLabels={xAxisLabels}
                    yAxisInterval={yAxisInterval}
                  />
                </div>

                <div className=" md:w-4/12 px-2 py-2 flex flex-col bg-yellow-200 rounded-md shadow-md hover:bg-yellow-600 hover:cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                  <h3 className="text-lg font-semibold mb-2 text-center">
                    More Analysis
                  </h3>
                  <p>there is more to view</p>
                  <div className="flex flex-col mt-4">
                    <button className="flex items-center justify-center bg-blue-500 hover:bg-blue-700  text-white px-4 py-2 rounded mb-2">
                      <span>
                        <MdOutlineBarChart />
                      </span>
                      <span className="px-2">Store Sell ratio</span>
                    </button>
                    <button className="flex items-center justify-center bg-red-400 hover:bg-red-700 text-white px-4 py-2 rounded">
                      <span>
                        <FaRegHeart />
                      </span>
                      <span className="px-2">Top Item Sold</span>
                    </button>
                  </div>
                  <p className="py-2">Another Paragraph for Div 2</p>
                </div>
              </div>
            </div>
          </div>
          {/* Right column */}
          <div className="md:w-2/5 px-2">
            <div className=" bg-yellow-200 p-2 mb-2 rounded-md shadow-md">
              <div className="flex bg-green-700 rounded-lg p-4 hover:bg-green-900 transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div>
                  <h3 className="text-lg text-white font-semibold mb-2">
                    Upgrade to Pro
                  </h3>
                  <p className="text-lg text-white">
                    ₹300<sub>/Month</sub>
                  </p>
                  <p className=" text-white">₹3600 Anually</p>
                  <div className="pt-4">
                    {" "}
                    <button className="flex items-center justify-center bg-blue-400 hover:bg-blue-700 text-white px-4 py-2 rounded">
                      <span>
                        <FaRegHeart />
                      </span>
                      <span className="px-2">Upgrade Now</span>
                    </button>{" "}
                  </div>
                </div>
              </div>
            </div>

            {/* Daily Meeting starts here */}
            <div className=" bg-purple-200 p-2 mb-2 rounded-md shadow-md">
              <h3 className="text-lg font-semibold mb-2">Daily Meeting</h3>
              <div className="flex bg-green-300 rounded-lg p-4 hover:bg-green-500 transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                {/* One div with the image */}
                <div className="w-1/2 h-1/2 pr-2 bg-white  rounded-md p-2">
                  <img
                    className="h-full rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                    alt="Card Image"
                  />
                </div>

                <div className="w-1/2 h-1/2 pl-2 flex items-center ">
                  {/* <p>hi three</p> */}

                  <button className="flex items-center justify-center bg-blue-400 hover:bg-blue-700 text-white px-1 py-2 rounded">
                    <span>
                      <FaRegHeart />
                    </span>
                    <span className="pl-2 ">Meet Now</span>
                  </button>
                </div>
              </div>
            </div>
            {/* Daily Meeting starts here */}
          </div>
          {/* Right column ends here */}
        </div>
        <div className="w-full flex flex-col md:flex-row gap-2">
          {/* Table Starts here */}
          <div className="w-full md:w-3/5 bg-blue-200 px-2 py-2 rounded-md mb-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Top Store</h2>
              <button className=" flex items-center bg-blue-400 hover:bg-blue-700 text-white px-4 py-2 rounded">
                <span>
                  <MdOutlineAdd />
                </span>
                <span>Add</span>
              </button>
            </div>

            <div className="overflow-x-auto ">
              <table className="w-full border-collapse">
                <thead className=" md:table-header-group">
                  <tr>
                    <th className="border px-2 md:px-4 py-1 md:py-2 text-xs font-medium md:font-normal bg-gray-300 text-left">
                      Store Name
                    </th>
                    <th className="border px-2 md:px-4 py-1 md:py-2 text-xs font-medium md:font-normal bg-gray-300 text-left">
                      Location
                    </th>
                    <th className="border px-2 md:px-4 py-1 md:py-2 text-xs font-medium md:font-normal bg-gray-300 text-left">
                      Sell
                    </th>
                    <th className="border px-2 md:px-4 py-1 md:py-2 text-xs font-medium md:font-normal bg-gray-300 text-left">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.slice(0, 5).map((item, index) => (
                    <tr
                      key={index}
                      className={
                        index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                      }
                    >
                      <td className="border px-1 md:px-4 py-1 md:py-2 text-xs">
                        {item.name}
                      </td>
                      <td className="border px-1 md:px-4 py-1 md:py-2 text-xs">
                        {item.location}
                      </td>
                      <td className="border px-1 md:px-4 py-1 md:py-2 text-xs">
                        {item.sell}
                      </td>
                      <td className="border px-1 md:px-4 py-1 md:py-2 text-xs">
                        {item.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* Table Ends here */}
          {/* Team Member */}
          <div className="w-full md:w-2/5  bg-pink-200 rounded-md shadow-md p-2 mb-2  ">
            <div className="w-full h-full hover:bg-pink-600 transform hover:scale-105 transition-all duration-300 hover:shadow-xl rounded-md shadow-md">
              <h1 className="text-center text-gray-600 font-medium text-xl">
                Team members
              </h1>
              <div className="grid gap-2 mt-2 px-4 py-2">
                <div className=" bg-white flex items-center rounded-md shadow-md   p-1 hover:bg-gray-400">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                    alt=""
                  />
                  <div className="flex flex-col pl-4 hover:bg-gray-400">
                    <p className="text-sm font-medium text-slate-900">Samsu</p>
                    <p className="text-sm text-slate-500 truncate">
                      Software developer
                    </p>
                  </div>
                  <FaAngleRight className="ml-auto h-6 w-6" />
                </div>

                <div className="bg-white flex items-center rounded-md shadow-md   p-1">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                    alt=""
                  />
                  <div className="pl-4">
                    <p className="text-sm font-medium text-slate-900">Samsu</p>
                    <p className="text-sm text-slate-500 truncate">
                      Software developer
                    </p>
                  </div>
                  <FaAngleRight className="ml-auto h-6 w-6" />
                </div>
                <div className=" bg-white flex items-center cursor-pointer rounded-md shadow-md  p-1">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                    alt=""
                  />
                  <div className="pl-4">
                    <p className="text-sm font-medium text-slate-900">Samsu</p>
                    <p className="text-sm text-slate-500 truncate">
                      Software developer
                    </p>
                  </div>
                  <FaAngleRight className="ml-auto h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
          {/* Team Member */}
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          <div className="w-full md:w-1/2 bg-gray-300 rounded-md shadow-md ">
            {" "}
            <ChartComponent />
          </div>
          <div className="w-full md:w-1/2 flex-grow bg-gray-400 rounded-md shadow-md ">
            {" "}
            <BarChartComponents />
          </div>
        </div>
        </div>

 
  )
}

export default HomeAdmin