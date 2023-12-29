import React, { useState } from "react";
import UserDashboard from "./usercomponents/UserDashboard";




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
    <UserDashboard>
      <main className="w-full">
      <div className="w-full md:max-w-3xl  bg-white rounded-md shadow-md">
        <div className="w-full mx-auto md:flex">
          <div className="md:w-1/2 h-1/2 flex justify-center items-center">
            <div className="p-2">
              <img
                src={image}
                alt={name}
                className="w-full h-full  object-cover rounded-md"
              />
            </div>
          </div>
          <div className="p-4 md:w-2/3 ">
            <div>
              <h2 className="text-xl font-semibold">{name}</h2>
              <p className="text-gray-600">{phone}</p>
              <p className="text-gray-600">{email}</p>
              <p className="text-gray-600">{gender}</p>
              <p className="text-gray-600">{address}</p>
              <p className="text-gray-600">{memberRole}</p>
              <div className="mt-4 flex ">
                <button
                  className="mr-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                  // onClick={() => setIsModalOpen(!isModalOpen)}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
                  // onClick={() => setisdeleteModalOpen(!isdeleteModalOpen)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* {isModalOpen && <UserModal closeModal={closeModal} data={data} />}
      {isdeleteModalOpen && <DeleteUserModal closeModal={closeModal} />} */}
      </div>
      </main>


    </UserDashboard>
  );
};

export default PersonalInfoCard;
