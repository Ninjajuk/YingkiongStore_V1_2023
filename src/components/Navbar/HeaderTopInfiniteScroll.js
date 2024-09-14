import React from "react";
import "./style.css";
const HeaderScrollingInfinite = () => {
  return (
    <div className="scroll-container bg-gray-200">
      <div className="scroll-content">

        <div className="destination text-green-800 font-bold ">Free Shipping Above ₹500</div>
        <div className="destination text-indigo-600 font-bold">Fast Cash on Delivery</div>
        <div className="destination text-blue-800 font-semibold" >Call-us +917629826114</div>
        {/* <div className="destination text-purple-800 font-semibold ">
          Shop Now Online and get exciting Rewards
        </div> */}
        {/* <!-- Repeat the destinations for a smooth infinite scroll --> */}

        <div className="destination text-green-800 font-bold">Free Shipping Above ₹500</div>
        <div className="destination text-indigo-600 font-bold">Fast Cash on Delivery</div>
        <div className="destination text-blue-800 font-semibold">Call-us +917629826114</div>
        <div className="destination text-purple-800 font-semibold">
        Shop Now Online and get exciting Rewards
        </div>
      </div>
    </div>
  );
};

export default HeaderScrollingInfinite;
