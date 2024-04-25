// apiFunctions.js

async function fetchDataFromAPI(category) {
    try {
      const resp = await fetch(`https://yingkiongstore.onrender.com/products/category/${category}`);
      const data = await resp.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Re-throw the error to handle it in the component
    }
  }
  


  async function getallProducts(){
    try {
      const resp=await fetch('https://kalingbackstorelatest.onrender.com/products?all=true')
      // const resp=await fetch(`http://localhost:8000/products?all=true`)
      const data=await resp.json()
      console.log(data.products)
      return data.products
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Re-throw the error to handle it in the component
    }
  }

  export const PAGE_SIZE = 12; // Number of products to load per page
  export let page = 1; // Initial page value

  // const urlbac='https://yingkiongstore.onrender.com'
  export async function getProducts() {
    try {
      const resp = await fetch(`https://kalingbackstorelatest.onrender.com/products?limit=${PAGE_SIZE}&skip=${(page - 1) * PAGE_SIZE}`);
      const products = await resp.json();
      return products;
    } catch (error) {
      console.log("Error fetching data:", error);
      throw error;
    }
  }
  



//addProduct
async function addProduct(product) {
  try {
    const response = await fetch('http://localhost:8000/products/addproduct', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });

    if (!response.ok) {
      throw new Error('Failed to add product');
    }

    const data = await response.json();
    console.log('Product added successfully:', data);
    return data;
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
}

//Edit Product function here
async function editProduct(productId, updatedData) {
  try {
    const resp = await fetch(`http://localhost:8000/products/editproduct/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });

    const data = await resp.json();
    return data;
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
}


//Delete Product function here
async function deleteProduct(productId) {
  try {
    const resp = await fetch(`http://localhost:8000/products/deleteproduct/${productId}`, {
      method: 'DELETE',
    });

    if (resp.ok) { 
      return { success: true, message: 'Product deleted successfully' };
    } else {
 
      const errorData = await resp.json();
      const errorMessage = errorData ? errorData.message : 'Unknown error';
      throw new Error(`Error deleting product: ${errorMessage}`);
    }
  } catch (error) {
    console.error('Error deleting product:Sam', error);
    throw error;
  }
}



  export { fetchDataFromAPI,getallProducts,addProduct,editProduct,deleteProduct };