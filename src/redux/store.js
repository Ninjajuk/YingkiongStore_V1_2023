import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import authReducer from "./authSlice";
import cartReducer1 from "./cartSliceasyn";

export const store =configureStore({
  reducer: {
    cart: cartReducer,
    auth:authReducer,
    cart1:cartReducer1,
  }
});
