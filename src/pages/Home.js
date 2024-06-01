

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import App from "../App";
import Navbar1 from "../components/Navbar.js/NavbarDark";
import ShoppingCart from "../components/cart/Cart";
import Footer1 from "../components/footer/Footer1";
import Product from "../components/product";
import Incentive from "../components/product/componentsProducts/Incentive";




function HomePage() {
    return (
      <>

        <Navbar1 />

        <Product />
        <ShoppingCart />

        <Incentive/>
        <Footer1 />


      </>
    );
}

export default HomePage;