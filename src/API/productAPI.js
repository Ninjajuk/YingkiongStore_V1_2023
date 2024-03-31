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
      const resp=await fetch('https://yingkiongstore.onrender.com/products?all=true')
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
  
  export async function getProducts() {
    try {
      const resp = await fetch(`https://yingkiongstore.onrender.com/products?limit=${PAGE_SIZE}&skip=${(page - 1) * PAGE_SIZE}`);
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
    const resp=await fetch('https://yingkiongstore.onrender.com/products/addproduct',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(product)
    })
    if (resp.ok) {
      const data = await resp.json();
      console.log('Product added successfully:', data);
      return data;
    } else {
      const errorData = await resp.json();
      console.error('Error adding product:', errorData);
      throw new Error(errorData.message);
    }
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
}

//Edit Product function here
async function editProduct(productId, updatedData) {
  try {
    const resp = await fetch(`https://yingkiongstore.onrender.com/products/editproduct/${productId}`, {
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
    const resp = await fetch(`https://yingkiongstore.onrender.com/products/deleteproduct/${productId}`, {
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
    console.error('Error deleting product:', error);
    throw error;
  }
}



  export { fetchDataFromAPI,getallProducts,addProduct,editProduct,deleteProduct };