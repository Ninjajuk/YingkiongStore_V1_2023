
import axios from 'axios';
import { BASE_URL } from '../constants';

  export async function addtoCart(item,user) {
    try {
      const response=await fetch(`${BASE_URL}/cart`,{
        method:'POST',
        body:JSON.stringify(item),
        headers:{'content-type':'application/json'}
      })
      const data=await response.json()
      return data
    } catch (error) {
      console.error('error adding to cart',error)
    }
  }


  export async function deleteItemFromCart(itemId) {
    try {
      const response = await fetch(`${BASE_URL}/cart/${itemId}`, {
        method: 'DELETE',
        headers: { 'content-type': 'application/json' }
      });
      const data = await response.json();
      console.log('deleted successfully in api call')
      return { data: { id: itemId }  }; // Ensure the format matches the expected payload
    } catch (error) {
      console.error('Error deleting from cart', error);
      throw error;
    }
  }

  export function updateCart(update) {
    return new Promise(async (resolve) => {
      const response = await fetch(`${BASE_URL}/cart/${update._id}`, {
        method: 'PATCH',
        body: JSON.stringify(update),
        headers: { 'content-type': 'application/json' },
      });
      const data = await response.json();
      resolve({ data });
    });
  }

export const fetchItemByUserID = async () => {
  const token = JSON.parse(localStorage.getItem('userData')).userToken;
  const response = await axios.get(`${BASE_URL}/cart`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const resetCart=async()=>{
  try {
    const resp=await fetchItemByUserID()
    const data=resp.data
    for(let item of data){
      await deleteItemFromCart(item._id);
    }
    return data
  } catch (error) {
    console.error('Error resetting cart after order success')
  }
}

  // export function fetchItemsByUserId() {
  //   return new Promise(async (resolve) => {
  //     const response = await fetch('/cart');
  //     const data = await response.json();
  //     resolve({ data });
  //   });
  // }


  
  // export function resetCart() {
  //   // get all items of user's cart - and then delete each
  //   return new Promise(async (resolve) => {
  //     const response = await fetchItemsByUserId();
  //     const items = response.data;
  //     for (let item of items) {
  //       await deleteItemFromCart(item.id);
  //     }
  //     resolve({ status: 'success' });
  //   });
  // }