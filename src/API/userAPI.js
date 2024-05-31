import axios from "axios";
import { json } from "react-router-dom";

export const fetchUserProfile= async () =>{

    const token = JSON.parse(localStorage.getItem('userData')).userToken;
  
      const response = await fetch("http://localhost:8000/users/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
}

export async function updateUser(update) {
  console.log('in update user api call',update._id)
  try {
    const response = await fetch('http://localhost:8000/auth/'+update._id, {
      method: 'PATCH',
      body: JSON.stringify(update),
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    console.log('data after userupdate',data)
    return data
  } catch (error) {
    console.error('Error updating user address',error.message)
  }
  // return new Promise(async (resolve) => {
  //   const response = await fetch('http://localhost:8000/auth/user/'+update._id, {
  //     method: 'PATCH',
  //     body: JSON.stringify(update),
  //     headers: { 'content-type': 'application/json' },
  //   });
  //   const data = await response.json();
  //   resolve({ data });
  // });
}

  