import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import CheckoutPage from "../components/checkout/Checkout";
import AboutUs from "../pages/AboutUs";
import ErrorPage from "../pages/404Page";

import OrderSuccessPage from "../pages/OrderSuccessPage";
import AdminProductList from "../components/admin/ProductsAdmin";
import TeamPage from "../components/admin/componentsAdmin/TeamAdmin";
import HomeAdmin from "../components/admin/componentsAdmin/HomeAdmin";
import PersonalInfoCard from "../components/user/UserProfile";
import Shop from "../pages/Shop";
import CustomerDetails from "../components/admin/componentsAdmin/CustomerDetails";
import LoginForm from "../components/auth/componentsAuth/Login";
import RegistrationForm from "../components/auth/componentsAuth/SignUp";
import OrderHistoryInvoicePanel from "../components/user/UserOrders";
import ContactUs from "../pages/ContactUs";
import Protected from "./Protected";
import ProtectedAdmin from "./ProtectedAdmin";
import ForgotPassword from "../components/auth/componentsAuth/ForgotPassword";
import ResetPassword from "../components/auth/componentsAuth/ResetPassword";
import ProductDetails from "../components/product/Productdetails";

import VerifyEmail from "../components/auth/componentsAuth/VerifyEmail";
import EmailVerificationPage from "../pages/EmailVerificationPage";
import SkeletonCard from "../components/skeleton/Skeleton1";
import ProductForm from "../components/Form/ProductForm";
import ProductAddForm from "../components/Form/ProductFormAdd";
import TestProduct from "../components/product/TestProduct";
import InfiniteScrollExample1 from "../pages/Test1";
import MyOrderPage from "../components/admin/orders/MyOrderPage";
import Customers from "../components/admin/customers/Customers";



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/testproduct",
    element: <TestProduct/>,
  },

  {
    path: "/test1",
    element: <InfiniteScrollExample1/>,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  // {
  //   path: "/shop/:productId",
  //   element: <ProductDetails/>,
  // },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/signup",
    element: <RegistrationForm />,
  },
  {
    path: "/signup/user",
    element: <EmailVerificationPage/>,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: '/reset-password',
    element: <ResetPassword></ResetPassword>,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/profile",
    element: (
      <Protected>
        <PersonalInfoCard />
      </Protected>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Protected>
        <CheckoutPage />
      </Protected>
    ),
  },

  {
    path: "/order-success/",
    element: (
      <Protected>
        <OrderSuccessPage />
      </Protected>
    ),
  },

  {
    path: "/my-order",
    element: (
      <Protected>
        <OrderHistoryInvoicePanel />
      </Protected>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedAdmin>
        <HomeAdmin />
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin/products",
    element: (
      <ProtectedAdmin>
        <AdminProductList />
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin/addproducts",
    element: (
      <ProtectedAdmin>
        <ProductAddForm />
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin/orders",
    element: (
      <ProtectedAdmin>
        <MyOrderPage />
      </ProtectedAdmin>
    ),
  },

  {
    path: "/customers",
    element: (
      <ProtectedAdmin>
        <Customers />
      </ProtectedAdmin>
    ),
  },
  {
    path: "/customer-details",
    element: (
      <ProtectedAdmin>
        <CustomerDetails />
      </ProtectedAdmin>
    ),
  },

  {
    path: "/team",
    element: (
      <ProtectedAdmin>
        <TeamPage />
      </ProtectedAdmin>
    ),
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/skeleton",
    element: <SkeletonCard />,
  },
]);

export default router;