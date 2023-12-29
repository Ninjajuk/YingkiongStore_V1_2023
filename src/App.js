
import React from "react";


import ProducList from "./components/product/componentsProducts/ProducList";
import Product from "./components/product";
import Footer from "./components/footer/Footer";
import ShoppingCart from "./components/cart/Cart";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import Navbar1 from "./components/Navbar.js/NavbarDark";
import Incentive from "./components/product/componentsProducts/Incentive";
import Footer1 from "./components/footer/Footer1";



function App() {
  return (
    <>
<Navbar1/>

 <Product/>
 <ShoppingCart/>
 {/* <OrderSuccessPage/> */}
 {/* <Incentive/> */}
 <Footer1/>
 {/* <Footer/> */}

    </>
  );
}

export default App;
