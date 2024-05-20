import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addtoCart, fetchItemByUserID } from '../API/cartAPI';
import { saveCartToLocalStorage } from '../utility/cartUtils';

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
      console.log('succes response in asyncthunk api',response.data)
      return response.data;
    } catch (error) {
      return rejectWithValue('Failure response in asyncthunk api',error.response.data);
    }
  }
);


// export const updateCartAsync = createAsyncThunk(
//   'cart/updateCart',
//   async (update) => {
//     const response = await updateCart(update);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

// export const deleteItemFromCartAsync = createAsyncThunk(
//   'cart/deleteItemFromCart',
//   async (itemId) => {
//     const response = await deleteItemFromCart(itemId);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

// export const resetCartAsync = createAsyncThunk(
//   'cart/resetCart',
//   async () => {
//     const response = await resetCart();
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

export const cartSlice = createSlice({
  name: 'cart1',
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
        localStorage.setItem('cartItems', JSON.stringify(state.items)); // Save items to local storage
      })
      .addCase(fetchItemsByUserIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItemsByUserIdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = [...action.payload];
        console.log('items',action.payload)
        localStorage.setItem('cartItems', JSON.stringify(state.items)); // Save fetched items to local storage
        state.cartLoaded = true;
      })
      .addCase(fetchItemsByUserIdAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.cartLoaded = true;
      })
    //   .addCase(updateCartAsync.pending, (state) => {
    //     state.status = 'loading';
    //   })
    //   .addCase(updateCartAsync.fulfilled, (state, action) => {
    //     state.status = 'idle';
    //     const index =  state.items.findIndex(item=>item.id===action.payload.id)
    //     state.items[index] = action.payload;
    //   })
    //   .addCase(deleteItemFromCartAsync.pending, (state) => {
    //     state.status = 'loading';
    //   })
    //   .addCase(deleteItemFromCartAsync.fulfilled, (state, action) => {
    //     state.status = 'idle';
    //     const index =  state.items.findIndex(item=>item.id===action.payload.id)
    //     state.items.splice(index,1);
    //   })
    //   .addCase(resetCartAsync.pending, (state) => {
    //     state.status = 'loading';
    //   })
    //   .addCase(resetCartAsync.fulfilled, (state, action) => {
    //     state.status = 'idle';
    //     state.items = [];
    //   })
  },
});



export const selectItems = (state) => state.cart1.items;
export const selectCartStatus = (state) => state.cart.status;
export const selectCartLoaded = (state) => state.cart.cartLoaded;

export default cartSlice.reducer;