

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import App from "../App";
import Navbar1 from "../components/Navbar/NavbarDark";
import ShoppingCart from "../components/cart/Cart";
import Footer1 from "../components/footer/Footer1";
import Product from "../components/product";

import HeaderScrollingInfinite from "../components/Navbar/HeaderTopInfiniteScroll";




function HomePage() {
    return (
      <>
 <HeaderScrollingInfinite/>
        <Navbar1 />

        <Product />
        <ShoppingCart />
        <Footer1 />


      </>
    );
}

export default HomePage;