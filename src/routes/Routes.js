import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import CheckoutPage from "../components/checkout/Checkout";
import AboutUs from "../pages/AboutUs";
import ErrorPage from "../pages/404Page";

import OrderSuccessPage from "../pages/OrderSuccessPage";
import AdminProductList from "../components/admin/ProductsAdmin";
import TeamPage from "../components/admin/componentsAdmin/TeamAdmin";
import Customers from "../components/admin/componentsAdmin/Customers";
import MyOrderPage from "../components/admin/componentsAdmin/MyOrderPage";
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


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/signup",
    element: <RegistrationForm />,
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
]);

export default router;