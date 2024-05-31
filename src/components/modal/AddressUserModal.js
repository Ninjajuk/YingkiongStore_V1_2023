import React from 'react'
import UserForm from '../user/usercomponents/UserForm'

const AddressUserModal = ({closeModal}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 h-auto">
      <div className="absolute inset-0 bg-gray-700 opacity-75 "> </div>
      <div className="relative z-10 bg-white p-4 max-w-md rounded-lg my-4 overflow-y-auto max-h-full">
        <UserForm closeModal={closeModal}/>

      </div>
    </div>
  );
}

export default AddressUserModal