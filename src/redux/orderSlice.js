// orderSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createOrder, fetchAllOrder, updateOrder } from '../API/orderAPI';


export const createOrderAsync = createAsyncThunk(
  "order/createorder",
  async (order) => {
    const response = await createOrder(order);
    return response.data;
  }
);
export const fetchAllOrdersAsync=createAsyncThunk(
  'order/fetchallorder',
  async(page,sort)=>{
    const response=await fetchAllOrder(page,sort)
    console.log('in async thunk after api call',response)
    return response
  }
)
export const updateOrderAsync=createAsyncThunk(
  'order/orderupdate',
  async(order)=>{
    const resp=await updateOrder(order)
    return resp.data;
  }
)


const initialState = {
  orders:[],
  status:'idle',
  currentOrder: null,
  totalOrders: 0,
  totalPages:0
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    // setOrderDetails: (state, action) => {
    //   state.orderDetails = action.payload;
    // },
    // clearOrderDetails: (state) => {
    //   state.orderDetails = null;
    // },
    resetOrder: (state) => {
      state.currentOrder = null;
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(createOrderAsync.pending, (state) => {
      state.status = 'loading';
    })
    builder.addCase(createOrderAsync.fulfilled, (state,action) => {
      state.status = 'idle';
      state.currentOrder=action.payload
      console.log('createorderasync thuk ',action.payload)
      state.orders.push(action.payload)
     
    })
    .addCase(fetchAllOrdersAsync.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchAllOrdersAsync.fulfilled, (state, action) => {
      state.status = 'idle';
      state.orders = action.payload.orders
      console.log('in async slice',action.payload.orders)
      state.totalPages = action.payload.totalPages
      state.totalOrders = action.payload.totalOrders

    })
    .addCase(updateOrderAsync.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(updateOrderAsync.fulfilled, (state, action) => {
      state.status = 'idle';
      const index =  state.orders.findIndex(order=>order._id===action.payload._id)
      state.orders[index] = action.payload;
    })

  }
});

export const { resetOrder, } = orderSlice.actions;
export const selectOrders = (state) => state.order.orders;
export const selectTotalPages = (state) => state.order.totalPages;
export const selectCurrentOrder = (state) => state.order.currentOrder;
export const selectTotalOrders = (state) => state.order.totalOrders;
export const selectStatus = (state) => state.order.status;


export default orderSlice.reducer;