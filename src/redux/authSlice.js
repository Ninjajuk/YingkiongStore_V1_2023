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
  async (loginInfo, thunkAPI) => {
    try {
      const response = await loginUser(loginInfo);
      return response.data;
    } catch (error) {
      console.error('Unexpected error during login:', error);
      console.log('Rejected value:', error.data); // Log the rejected value
      return thunkAPI.rejectWithValue(error.data);
    }
  }
);





const initialState = {
  loading:false,
  user: null,
  userToken: null, // for storing the JWT
  status: 'idle',
  error: null,
  userChecked: false,
  mailSent: false,
  passwordReset:false,
  success: false, // for monitoring the registration process.
  
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.user = action.payload?.message || null;
        console.log('Login successful:', action.payload.message);
        state.loading = false;

      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        console.error('Login failed:', action.payload);
        state.loading = false;
        console.log('Rejected value:', action.payload); // Log the rejected value
        state.error = action.payload.message || "Login failed. Please try again.";
      });

  },
});
export const setLoading=(state)=>state.auth.loading
export const selectLoggedInUser = (state) => state.auth.loggedInUserToken;
export const selectError = (state) => state.auth.error;
export const selectUserChecked = (state) => state.auth.userChecked;
export const selectMailSent = (state) => state.auth.mailSent;
export const selectPasswordReset = (state) => state.auth.passwordReset;

// export const { } = authSlice.actions;

export default authSlice.reducer;