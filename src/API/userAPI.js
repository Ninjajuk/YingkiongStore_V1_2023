import axios from "axios";
import { json } from "react-router-dom";
import { BASE_URL } from "../constants";

export const fetchUserProfile= async () =>{

    const token = JSON.parse(localStorage.getItem('userData')).userToken;
  
      const response = await fetch(`${BASE_URL}/users/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
}

export async function updateUser(update) {
  console.log('in update user api call',update._id)
  try {
    const response = await fetch(`${BASE_URL}/auth/${update._id}`, {
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

}

  