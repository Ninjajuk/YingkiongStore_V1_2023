import React, { useState } from "react";
import UserDashboard from "./usercomponents/UserDashboard";
import Navbar1 from "../Navbar.js/NavbarDark";




const PersonalInfoCard = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
//   const [isdeleteModalOpen, setisdeleteModalOpen] = useState(false); // State for modal visibility
//   const openModal = () => {
//     setIsModalOpen(true);
//     setisdeleteModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setisdeleteModalOpen(false);
//   };
  const data = {
    name: "Jane Cooper",
    jobProfile: "Paradigm Representative",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    email: "Jane@gmail.com",
    phone: "754206773",
    call: "Call",
    gender: "Female",
    address: "Delhi",
    memberRole: "User"
  };
  const { name, phone, email, gender, address, memberRole, image } = data;

  return (
    <>
      <Navbar1 />


      <div className="container mx-auto mt-8 md:px-[8rem]">

        <div className="p-4  w-full lg:max-w-lg  bg-gray-100 rounded-md shadow-md  mx-auto">
          <h2 className="text-2xl font-bold leading-6 pb-2">{name}</h2>
          <p className="text-gray-600 pb-1">{phone}</p>
          <p className="text-gray-600 pb-1">{email}</p>
          <p className="text-gray-600 pb-1">{gender}</p>
          <p className="text-gray-600 pb-1">{address}</p>
          <p className="text-gray-600 pb-1">{memberRole}</p>
          <div className="mt-4 flex items-center justify-center ">
            <button
              className=" bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
              // onClick={() => setIsModalOpen(!isModalOpen)}
            >
              Update
            </button>
          </div>
        </div>
        {/* {isModalOpen && <UserModal closeModal={closeModal} data={data} />} */}
      </div>

    </>
  );
};

export default PersonalInfoCard;
