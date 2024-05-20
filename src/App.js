
import React, { useEffect, useState } from "react";


import ProducList from "./components/product/componentsProducts/ProducList";
import Product from "./components/product";
import Footer from "./components/footer/Footer";
import ShoppingCart from "./components/cart/Cart";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import Navbar1 from "./components/Navbar.js/NavbarDark";
import Incentive from "./components/product/componentsProducts/Incentive";
import Footer1 from "./components/footer/Footer1";
import { useDispatch, useSelector } from "react-redux";
import { setUserToken } from "./redux/authSlice";
import { fetchItemsByUserIdAsync } from "./redux/cartSliceasyn";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App() {
  // const token = useSelector(setUserToken );
  // console.log('Token from Redux:', token);
  // // const token = getToken(); // Retrieve the token from local storage
  // console.log(token)
  const [data,setData]=useState(null)

  const userData = localStorage.getItem('userData');
  const token = userData ? JSON.parse(userData).userToken : null;

  console.log('Token from localStorage:', token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(fetchItemsByUserIdAsync());
    } else {
      console.log("No token available");
    }
  }, [dispatch]);

  // useEffect(() => {
  //   async function fetchItemByUserID() {
  //     try {
  //       const response = await fetch('http://localhost:8000/cart', {
  //         method: 'GET',
  //         headers: {
  //           Authorization: `Bearer ${token}`
  //         }
  //       });

  //       if (!response.ok) {
  //         const errorDetails = await response.json();
  //         throw new Error(`Error: ${response.status} ${response.statusText}, ${errorDetails.message || ''}`);
  //       }

  //       const data = await response.json();
  //       console.log(data, 'Frontend data while success');
  //       setData(data);
  //     } catch (error) {
  //       console.log('Error Occured while fetching data', error);
  //     }
  //   }

  //   if (token) {
  //     fetchItemByUserID();
  //   } else {
  //     console.log('No token available');
  //   }
  // }, [token]);


  return (
    <>

        <Navbar1 />

        <Product />
        <ShoppingCart />
        {/* <OrderSuccessPage/> */}
        {/* <Incentive/> */}
        <Footer1 />
        {/* <Footer/> */}

      <ToastContainer />
    </>
  );
}

export default App;
