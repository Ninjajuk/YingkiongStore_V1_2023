import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addtoCart, deleteItemFromCart, fetchItemByUserID, resetCart, updateCart } from '../API/cartAPI';


const initialState = {
  status: 'idle',
  items: [],
  cartLoaded: false
};

export const addToCartAsync = createAsyncThunk(
  'cart/addToCart',
  async ({item,user}) => {
    const response = await addtoCart(item);
    // alert.success('Item Added to Cart');

// console.log("item is after addtoCart in createAsyncThink",item)
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

// cartSlice.js
export const fetchItemsByUserIdAsync = createAsyncThunk(
  'cart/fetchItemsByUserId',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchItemByUserID();
      // console.log('succes response in asyncthunk api',response.data)
      return response.data;
    } catch (error) {
      return rejectWithValue('Failure response in asyncthunk api',error.response.data);
    }
  }
);


export const updateCartAsync = createAsyncThunk(
  'cart/updateCart',
  async (update) => {
    const response = await updateCart(update);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const deleteItemFromCartAsync = createAsyncThunk(
  'cart/deleteItemFromCart',
  async (itemId) => {
    const response = await deleteItemFromCart(itemId);
    // The value we return becomes the `fulfilled` action payload
    console.log(response)
    return response.data;
  }
);

export const resetCartAsync = createAsyncThunk(
  'cart/resetCart',
  async () => {
    const response = await resetCart();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items.push(action.payload);
        console.log(state.items)
        state.cartLoaded = true;
        // localStorage.setItem('cartItems', JSON.stringify(state.items)); // Save items to local storage
      })
      .addCase(fetchItemsByUserIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItemsByUserIdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        // state.items = [...action.payload];
        state.items = action.payload.map(item => ({
          ...item,
          product: item.product || {}, // Ensure product is always an object
          quantity: item.quantity || 0, // Ensure quantity is always defined
        }));
        console.log('items',action.payload)
        // localStorage.setItem('cartItems', JSON.stringify(state.items)); // Save fetched items to local storage
        state.cartLoaded = true;
      })
      .addCase(fetchItemsByUserIdAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.cartLoaded = true;
      })
      .addCase(updateCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index =  state.items.findIndex(item=>item._id===action.payload._id)
        // state.items[index] = action.payload;
        if (index !== -1) {
          state.items = [
            ...state.items.slice(0, index),
            action.payload,
            ...state.items.slice(index + 1),
          ];
        }
      })
      .addCase(deleteItemFromCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteItemFromCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index =  state.items.findIndex(item=>item._id===action.payload._id)
        state.items.splice(index,1);
        // state.items = state.items.filter(item => item._id !== action.payload._id);
      })
      .addCase(resetCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(resetCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = [];
      })
  },
});



export const selectItems = (state) => state.cart.items;
export const selectCartStatus = (state) => state.cart.status;
export const selectCartLoaded = (state) => state.cart.cartLoaded;

export default cartSlice.reducer;