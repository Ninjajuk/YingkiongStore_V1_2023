// In your component file
'use client'
import  { useReducer } from 'react';




// Action types
const SET_CUSTOMER_TABLE = 'SET_CUSTOMER_TABLE';
const ADD_CUSTOMER = 'ADD_CUSTOMER';
const DELETE_CUSTOMER = 'DELETE_CUSTOMER';
const EDIT_CUSTOMER = 'EDIT_CUSTOMER';

// Reducer function
export const customerReducer = (state, action) => {
  switch (action.type) {
    case SET_CUSTOMER_TABLE:
      return action.payload;

    case ADD_CUSTOMER:
      return [...state, action.payload];

    case DELETE_CUSTOMER:
      return state.filter((_, index) => index !== action.payload);

    case EDIT_CUSTOMER:
      return state.map((customer, index) =>
        index === action.payload.index ? { ...customer, ...action.payload.editedValues } : customer
      );

    default:
      return state;
  }
};


//Dispatch actiions
// In your component file

// const updateCustomerTable = (newCustomerTable) => {
//     dispatch({ type: SET_CUSTOMER_TABLE, payload: newCustomerTable });
//   };
  
//   const addCustomer = (newCustomer) => {
//     dispatch({ type: ADD_CUSTOMER, payload: newCustomer });
//   };
  
//   const deleteCustomer = (index) => {
//     dispatch({ type: DELETE_CUSTOMER, payload: index });
//   };
  
//   const editCustomer = (index, editedValues) => {
//     dispatch({ type: EDIT_CUSTOMER, payload: { index, editedValues } });
//   };
  