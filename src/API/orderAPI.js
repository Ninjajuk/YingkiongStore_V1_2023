import { BASE_URL } from "../constants";

export const createOrder = async (order) => {
  try {
    const resp = await fetch(`${BASE_URL}/orders`,{
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body:JSON.stringify(order),
    });
    if (!resp.ok) {
        throw new Error('Failed to create order');
      }
    const data = await resp.json();
    console.log(data)
    return data;
  } catch (error) {
    console.log("Error creating order",error.message);
  }
};

export const fetchAllOrder= async(page)=>{
  
  // let queryString = '';

//   for (let key in sort) {
//    queryString += `${key}=${sort[key]}&`;
//  }
//    for (let key in pagination) {
//      queryString += `${key}=${pagination[key]}&`;
//    }
  try {
    // const response = await fetch(
    //   '/orders?' + queryString
    // );
    const resp = await fetch(`${BASE_URL}/orders/all?page=${page}&limit=10`);
    const data = await resp.json();
    return data
  } catch (error) {
    console.error('Error fetching order',error.message)
  }
}

export const updateOrder=async(order)=>{
  return new Promise(async (resolve) => {
    const resp=await fetch(`${BASE_URL}/orders/${order._id}`,{
      method: 'PATCH',
      body: JSON.stringify(order),
      headers: { 'content-type': 'application/json' },
    })
    const data = await resp.json()
    resolve({ data });
  })
}