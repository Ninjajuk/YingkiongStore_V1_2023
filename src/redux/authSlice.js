import { createSlice } from "@reduxjs/toolkit";

// Check local storage for initial authentication state
let storedIsAuthenticated;
let storedUser;

if (typeof window !== 'undefined') {
  storedIsAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  storedUser = JSON.parse(localStorage.getItem("user")) || null;
}

const initialState = {
  isAuthenticated: storedIsAuthenticated,
  user: storedUser,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;

      // Save user information in local storage
      localStorage.setItem("user", JSON.stringify(action.payload));
      localStorage.setItem("isAuthenticated", "true");
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;

      // Clear user information from local storage
      localStorage.removeItem("user");
      localStorage.setItem("isAuthenticated", "false");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

// Redux/authSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   isAuthenticated: false,
//   user: null // Set the initial authentication state
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     login: (state, action) => {
//       state.isAuthenticated = true;
//       state.user = action.payload;
//     },
//     logout(state) {
//       state.isAuthenticated = false;
//       state.user = null;
//     }
//   }
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;

