// import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

// // Check local storage for initial authentication state
// let storedIsAuthenticated;
// let storedUser;

// if (typeof window !== 'undefined') {
//   storedIsAuthenticated = localStorage.getItem("isAuthenticated") === "true";
//   storedUser = JSON.parse(localStorage.getItem("user")) || null;
// }

// const initialState = {
//   isAuthenticated: storedIsAuthenticated,
//   user: storedUser,
//   error: null,
//   mailSent: false,
//   passwordReset:false,
//   isTokenVerified:false
// };

// export const createUserAsync = createAsyncThunk(
//   'user/createUser',
//   async (userData) => {
//     const response = await createUser(userData);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );


// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     login: (state, action) => {
//       state.isAuthenticated = true;
//       state.user = action.payload;

//       // Save user information in local storage
//       localStorage.setItem("user", JSON.stringify(action.payload));
//       localStorage.setItem("isAuthenticated", "true");
//     },
//     logout(state) {
//       state.isAuthenticated = false;
//       state.user = null;

//       // Clear user information from local storage
//       localStorage.removeItem("user");
//       localStorage.setItem("isAuthenticated", "false");
//     },
//     createUser(state,action){
//       // state.mailSent=true
//       // state.user = action.payload;
//     }
//   },
// });

// export const { login, logout,createUser } = authSlice.actions;
// export const selectMailSent = (state) => state.auth.mailSent;
// export default authSlice.reducer;



import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  loginUser,
  createUser,
  waitForVerificationOrTokenExpiration
} from '../API/authAPI';

export const createUserAsync = createAsyncThunk(
  'user/createUser',
  async (userData) => {
    const response = await createUser(userData);

    return response.data;
  }
);

// export const resetPasswordRequestAsync = createAsyncThunk(
//   'user/resetPasswordRequest',
//   async (email,{rejectWithValue}) => {
//     try {
//       const response = await resetPasswordRequest(email);
//       return response.data;
//     } catch (error) {
//       console.log(error);
//       return rejectWithValue(error);

//     }
//   }
// );

// export const loginUserAsync = createAsyncThunk(
//   'user/loginUser',
//   async (loginInfo, thunkAPI) => {
//     try {
//       const response = await loginUser(loginInfo);
//       return response;
//     } catch (error) {
//       // Make sure the rejected value is an object
//       const rejectedValue = error.response ? error.response.data : { message: error.message };
//       return thunkAPI.rejectWithValue(rejectedValue);
//     }
//   }
// );


export const loginUserAsync = createAsyncThunk(
  'user/loginUser',
  async (loginInfo, {rejectWithValue} ) => {
    try {
      const response = await loginUser(loginInfo);
      return response.data;
    } catch (error) {
      // console.error('Unexpected error during login:', error,'in loginsyncthunkfunction');
      console.log('Rejected value: in (before returning) rejectWithValue loginsyncthunkfunction', error.message); 
      return rejectWithValue(error.message);
    }
  }
);



// Check local storage for initial authentication state
// Retrieve the stored data from localStorage
const storedDataString = localStorage.getItem("userData");

// Parse the JSON string into a JavaScript object or use default values
const storedData = storedDataString ? JSON.parse(storedDataString) : {};

// Extract the individual values with default values
const userLocal = storedData.user || null;
const tokenLocal = storedData.token || null;
const isAuthenticatedLocal = storedData.isAuthenticated || false;


const initialState = {
  isAuthenticated:isAuthenticatedLocal ,
  loading:false,
  user: userLocal,
  userToken: tokenLocal, // for storing the JWT
  error: null,
  userChecked: false,
  mailSent: false,
  passwordReset:false,
  success: false,
  
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.isAuthenticated = action.payload.data.user.isVerified;
        state.user = action.payload.data.user;
        state.success = true;
        state.userToken = action.payload.data.token;
        console.log("Login successful:", action.payload, "Samsu");
        console.log("User", action.payload.data.user);
        console.log("userToken", action.payload.data.token);
        // console.log("isAuthenticated", action.payload.data.user.isVerified);
        state.loading = false;
        // Save user data to local storage
        localStorage.setItem(
          "userData",
          JSON.stringify({
            user: action.payload.data.user,
            isAuthenticated: action.payload.data.user.isVerified,
            token: action.payload.data.token,
          })
        );
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        // console.log('Rejected action:', action);
        console.log("Rejected value:", action.payload, "Rejected valueSamsu");
      });
  },
});
export const setLoading=(state)=>state.auth.loading
export const selectLoggedInUser = (state) => state.auth.user;
export const setIsauthenticated=(state)=>state.auth.isAuthenticated;
export const selectError = (state) => state.auth.error;
export const selectUserChecked = (state) => state.auth.userChecked;
export const selectMailSent = (state) => state.auth.mailSent;
export const selectPasswordReset = (state) => state.auth.passwordReset;

// export const { } = authSlice.actions;

export default authSlice.reducer;