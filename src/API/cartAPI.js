// export function addToCart(item) {
//     return new Promise(async (resolve) => {
//       const response = await fetch('/cart', {
//         method: 'POST',
//         body: JSON.stringify(item),
//         headers: { 'content-type': 'application/json' },
//       });
//       const data = await response.json();
//       resolve({ data });
//     });
//   }
import axios from 'axios';

  export async function addtoCart(item,user) {
    try {
      const response=await fetch('http://localhost:8000/cart',{
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
// cartAPI.js


export const fetchItemByUserID = async () => {
  const token = JSON.parse(localStorage.getItem('userData')).userToken;
  const response = await axios.get('http://localhost:8000/cart', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

  // export function fetchItemsByUserId() {
  //   return new Promise(async (resolve) => {
  //     const response = await fetch('/cart');
  //     const data = await response.json();
  //     resolve({ data });
  //   });
  // }
  
  // export function updateCart(update) {
  //   return new Promise(async (resolve) => {
  //     const response = await fetch('/cart/' + update.id, {
  //       method: 'PATCH',
  //       body: JSON.stringify(update),
  //       headers: { 'content-type': 'application/json' },
  //     });
  //     const data = await response.json();
  //     resolve({ data });
  //   });
  // }
  
  // export function deleteItemFromCart(itemId) {
  //   return new Promise(async (resolve) => {
  //     const response = await fetch('/cart/' + itemId, {
  //       method: 'DELETE',
  //       headers: { 'content-type': 'application/json' },
  //     });
  //     const data = await response.json();
  //     resolve({ data: { id: itemId } });
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