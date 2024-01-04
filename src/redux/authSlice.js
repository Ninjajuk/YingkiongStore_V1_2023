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
  // signOut,
  // checkAuth,
  // resetPasswordRequest,
  // resetPassword,
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

export const loginUserAsync = createAsyncThunk(
  'user/loginUser',
  async (loginInfo, { rejectWithValue }) => {
    try {
      const response = await loginUser(loginInfo);
      console.log(response.data.message)
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);



const initialState = {
  loading:false,
  user: null,
  userToken: null, // for storing the JWT
  status: 'idle',
  error: '',
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
    .addCase(createUserAsync.pending, async (state, action) => {
      state.status = 'loading';
      state.mailSent = true;
      state.loading = true;

      try {
        // wait for verification or token expiration
        await waitForVerificationOrTokenExpiration();

        await new Promise(resolve => setTimeout(resolve, 300000));
        // Continue with the API call
        const response = await createUser(action.payload);
        state.status = 'idle';
        state.loggedInUserToken = response.data;
      } catch (error) {
        state.status = 'idle';
        state.error = error.message;
      } finally {
        // Reset mailSent after verification or token expiration
        state.mailSent = false;
        state.loading = false;
      }
    })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUserToken = action.payload;
      })
      .addCase(loginUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user = action.payload;
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.payload;
      })

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