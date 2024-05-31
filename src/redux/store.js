import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./cartSlice";
import authReducer from "./authSlice";
import cartReducer1 from "./cartSliceasyn";
import orderReducer from "./orderSlice";

export const store =configureStore({
  reducer: {
    // cart: cartReducer,
    auth:authReducer,
    cart:cartReducer1,
    order:orderReducer,
  }
});
