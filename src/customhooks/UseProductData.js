// useProductData.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useProductData = () => {
  const [items, setItems] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(1); 

  useEffect(() => {
    axios
      .get("http://localhost:8000/products?skip=0&limit=12")
      .then((res) => {
        setItems(res.data.products);
        // Extract unique categories
        const categories = [...new Set(res.data.products.map((item) => item.category))];
        setUniqueCategories(categories);
      })
      .catch((err) => console.log(err));
  }, []);

  const fetchData = () => {
    axios
      .get(`http://localhost:8000/products?skip=${index * 12}&limit=12`)
      .then((res) => {
        const newItems = res.data.products;
        setItems((prevItems) => [...prevItems, ...newItems]);
        res.data.products.length > 0 ? setHasMore(true) : setHasMore(false);
      })
      .catch((err) => console.log(err));
      setIndex((prevIndex) => prevIndex + 1);
  };

  return { items, uniqueCategories, hasMore, fetchData };
};

export default useProductData;
