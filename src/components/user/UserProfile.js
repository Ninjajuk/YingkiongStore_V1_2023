import React, { useEffect, useState } from "react";
import UserDashboard from "./usercomponents/UserDashboard";
import Navbar1 from "../Navbar/NavbarDark";
import { fetchUserProfile } from "../../API/userAPI";
import { selectLoggedInUser } from "../../redux/authSlice";
import { useSelector } from "react-redux";
import UserForm from "./usercomponents/UserForm";
import AddressUserModal from "../modal/AddressUserModal";





const PersonalInfoCard = () => {

  const userLoggedin=useSelector(selectLoggedInUser)
  const [user, setUser] = useState()
  const userdata = JSON.parse(localStorage.getItem('userData'));
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  
  };

  const closeModal = () => {
    setIsModalOpen(false);

  };


  useEffect(()=>{
  const fethuser=async()=>{
    try {
      const resp=await fetchUserProfile()
      const data=await resp.json()
    
      if (data) {
        setUser(data);
      }
    } catch (error) {
      console.error(error)
    }
  }
  fethuser()

  },[])
console.log('user.use,addressesr',user)

// console.log('addresses',addresses)

  return (
    <>
      <Navbar1 />

      <div className=" flex flex-col items-center justify-center h-48">
        {user && (
          <div className="p-4  w-full max-w-lg  max-h-80  bg-gray-100 rounded-md shadow-md  ">
            <h2 className="text-2xl font-bold leading-6 pb-2">
              <span>Name:-</span>
              <span className="px-2"> {user.user.name}</span>
            </h2>
            <p className="text-gray-600 pb-1">
              <span>Email:-</span>
              <span className="px-2">{user.user.email}</span>
            </p>
            <p className="text-gray-600 pb-1">
              <span>Phone:-</span>
              <span className="px-2">{user.user.phone}</span>
            </p>
            {user.user.role === "admin" && (
              <h3 className="text-xl my-1 font-bold tracking-tight text-red-900">
                role :{user.user.role}
              </h3>
            )}
            <div className="mt-4 flex items-center justify-center ">
              {user.user.addresses.length > 0 ? (
                // <button
                //   className=" bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
                //   onClick={openModal}
                // >
                //   Update
                // </button>
                null
              ) : (
                <button
                  className=" bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
                  onClick={openModal}
                >
                  Add Delivery Address
                </button>
              )}
            </div>
          </div>
        )}

        {isModalOpen && (
          <AddressUserModal closeModal={closeModal} user={user} />
        )}
      </div>
      {user && (
        <div className="flex items-center justify-center">
          <div className="p-4  w-full max-w-lg  max-h-80  bg-purple-100 rounded-md shadow-md  ">
            <h1 className="text-center font-bold text-lg"> Delivery Address</h1>
            {user.user.addresses.map((item)=>(
            <>
            <p className="flex justify-between"><span>Name:-</span><span>{item.name}</span></p>
            <p className="flex justify-between"><span>email:-</span><span>{item.email}</span></p>
            <p className="flex justify-between"><span>phone:-</span><span>{item.phone}</span></p>
            <p className="flex justify-between"><span>street:-</span><span>{item.street}</span></p>
            <p className="flex justify-between"><span>pinCode:-</span><span>{item.pinCode}</span></p>
            <p className="flex justify-between"><span>city:-</span><span>{item.city}</span></p>
            <p className="flex justify-between"><span>state:-</span><span>{item.state}</span></p>

            </>
          ))}
          </div>
        </div>
      )}
    </>
  );
};

export default PersonalInfoCard;
