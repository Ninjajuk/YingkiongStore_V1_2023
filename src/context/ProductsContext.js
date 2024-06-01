import React, { createContext, useContext, useEffect, useState } from 'react';
import { BASE_URL } from '../constants';

// Create a context for the products
const ProductsContext = createContext();

// Provider component
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);

  // Function to fetch all products
  const getallProducts = async () => {
    try {
      const resp = await fetch(`${BASE_URL}/products?all=true`);
      const data = await resp.json();
      const products=data.products
      // Extract unique categories
      const categories = [
        ...new Set(resp.data.products.map((item) => item.category)),
      ];
      setUniqueCategories(categories);
      return { products, uniqueCategories: categories };
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

  // Load products when the component mounts
  useEffect(() => {
    getallProducts()
      .then((fetchedProducts) => {
        setProducts(fetchedProducts);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  // Provide the products and getallProducts function to the children components
  return (
    <ProductsContext.Provider value={{ products, getallProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

// Custom hook to consume the products context
export const useProducts = () => useContext(ProductsContext);
