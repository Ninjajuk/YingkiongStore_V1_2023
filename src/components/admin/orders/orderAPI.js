

export async function createOrder(order) {
    try {
      const response = await fetch('/orders', {
        method: 'POST',
        body: JSON.stringify(order),
        headers: { 'content-type': 'application/json' },
      });
  
      const data = await response.json();
      return { data };
    } catch (error) {
      console.error('Error creating order:', error);
      throw error; // Re-throw the error to handle it elsewhere if needed
    }
  }
  
  
  // export function updateOrder(order) {
  //   return new Promise(async (resolve) => {
  //     const response = await fetch('/orders/'+order.id, {
  //       method: 'PATCH',
  //       body: JSON.stringify(order),
  //       headers: { 'content-type': 'application/json' },
  //     });
  //     const data = await response.json();
  //     resolve({ data });
  //   });
  // }
  
  // export function fetchAllOrders(sort, pagination) {
  //  let queryString = '';
  
  //  for (let key in sort) {
  //   queryString += `${key}=${sort[key]}&`;
  // }
  //   for (let key in pagination) {
  //     queryString += `${key}=${pagination[key]}&`;
  //   }
  
  //   return new Promise(async (resolve) => {
  //     const response = await fetch(
  //       '/orders?' + queryString
  //     );
  //     const data = await response.json();
  //     const totalOrders = await response.headers.get('X-Total-Count');
  //     resolve({ data: { orders: data, totalOrders: +totalOrders } });
  //   });
  // }