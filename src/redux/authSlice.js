




import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  loginUser,
  signOut,
  createUser,
  waitForVerificationOrTokenExpiration
} from '../API/authAPI';

export const createUserAsync = createAsyncThunk(
  "user/createUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await createUser(userData);
      console.log('authslice async thunk', response);
      return {response}; // Return the entire response object
    } catch (error) {
      console.log(
        "Rejected value: in (before returning) rejectWithValue Createsyncthunkfunction",
        error
      );
      return rejectWithValue(error);
    }
  }
);

export const loginUserAsync = createAsyncThunk(
  'user/loginUser',
  async (loginInfo, {rejectWithValue} ) => {
    try {
      const response = await loginUser(loginInfo);
      console.log('response is being sent to redux throuh asyncthunk',response.data.user.name)
      return {response}
    } catch (error) {
      // console.error('Unexpected error during login:', error,'in loginsyncthunkfunction');
      console.log('Rejected value: in (before returning) rejectWithValue loginsyncthunkfunction', error); 
      return rejectWithValue(error);
    }
  }
);
export const signOutAsync = createAsyncThunk("user/signOut", async () => {
  try {
    localStorage.removeItem("userData"); // Reset local storage

    return { data: {} };
  } catch (error) {
    console.error("Unexpected error during logout", error, "Logout");
    throw error;
  }
});





//Check local storage for initial authentication state Retrieve the stored data from localStorage
const storedDataString = localStorage.getItem("userData");


const storedData = storedDataString ? JSON.parse(storedDataString) : {};// Parse the JSON string into a JavaScript object or use default values

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
  successMessage: null,
  successFlag:false
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSuccessMessage: (state, action) => {
      state.successMessage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(createUserAsync.pending, (state) => {
      state.loading = true;
    })
    .addCase(createUserAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.response.userdata.user
      console.log("Signup User", action.payload.response, "Ansari");
      state.successFlag = true;
      console.log(state.successFlag)
       localStorage.setItem('user',    JSON.stringify({
        user: action.payload.response.userdata.user,
        successFlag: true,
        // token: action.payload
      }));    // Store user information in localStorage
    })
    .addCase(createUserAsync.rejected, (state, action) => {
      state.loading = false;
      state.error=action.payload.error
      console.log('Rejected value:', action.payload.error);

    })
    
      .addCase(loginUserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.response.data.user
        state.successFlag = true;
        // state.userToken = action.payload
        console.log("Login successful:", action.payload.response.data.user, "Samsu");
        console.log("isAuthenticated",state.isAuthenticated);
        console.log(state.successFlag)
        // console.log("isAuthenticated", action.payload.data.user.isVerified);
        state.loading = false;
        // Save user data to local storage
        localStorage.setItem(
          "userData",
          JSON.stringify({
            user: action.payload.response.data.user,
            isAuthenticated: true,
            userToken: action.payload.response.data.token
          })
        );
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
        console.log("Rejected value:", action.payload.error, "Rejected valueSamsu");
      })
      .addCase(signOutAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(signOutAsync.fulfilled, (state, action) => {
        // Clear local storage on successful sign out
        localStorage.removeItem("userData");
      })
      .addCase(signOutAsync.rejected, (state) => {
        console.log("Sign out rejected");
      });
  },
});
export const setLoading=(state)=>state.auth.loading
export const selectLoggedInUser = (state) => state.auth.user;
export const setIsauthenticated=(state)=>state.auth.isAuthenticated;
export const setUserToken=(state)=>state.auth.userToken;
export const selectError = (state) => state.auth.error;
export const selectsuccessFlag = (state) => state.auth.successFlag;
export const selectUserChecked = (state) => state.auth.userChecked;
export const selectMailSent = (state) => state.auth.mailSent;
export const selectPasswordReset = (state) => state.auth.passwordReset;

// export const { } = authSlice.actions;

export default authSlice.reducer;