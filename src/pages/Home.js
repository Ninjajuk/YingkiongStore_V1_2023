

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import App from "../App";
import Navbar1 from "../components/Navbar.js/NavbarDark";
import ShoppingCart from "../components/cart/Cart";
import Footer1 from "../components/footer/Footer1";
import Product from "../components/product";




function HomePage() {
    return (
      <>

        <Navbar1 />

        <Product />
        <ShoppingCart />
        {/* <OrderSuccessPage/> */}
        {/* <Incentive/> */}
        <Footer1 />
        {/* <Footer/> */}
        {/* <div className="bg-gray-900 w-full">
         <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      
            <form className="hidden lg:block lg:flex-1">
               <div className="flex">
                  <label htmlFor="desktop-currency" className="sr-only">
                     Currency
                  </label>
                  <div
                     className="group relative -ml-2 rounded-md border-transparent bg-gray-900 focus-within:ring-2 focus-within:ring-white">
                     <p>Hi</p>
                     <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                        <ChevronDownIcon className="h-5 w-5 text-gray-300" aria-hidden="true" />
                     </div>
                  </div>
               </div>
            </form>
      
            <p className="flex-1 text-center text-sm font-medium text-white lg:flex-none">
               Get free delivery on orders over $100
            </p>
            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
               <a href="#" className="text-sm font-medium text-white hover:text-gray-100">
                  Create an account
               </a>
               <span className="h-6 w-px bg-gray-600" aria-hidden="true" />
               <a href="#" className="text-sm font-medium text-white hover:text-gray-100">
                  Sign in
               </a>
            </div>
         </div>
      </div> */}

      </>
    );
}

export default HomePage;