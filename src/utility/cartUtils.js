// cartUtils.js
import { addtoCart, deleteItemFromCart } from "../API/cartAPI";


export const isItemInCart = (itemId, cartItems) => {
  return Array.isArray(cartItems) && cartItems.some(item => item._id === itemId);
};

export const addOrRemoveFromCart = (dispatch, product, cartItems) => {
  const isAlreadyInCart = isItemInCart(product._id, cartItems);
  
  isAlreadyInCart?dispatch(deleteItemFromCart(product.id)):dispatch(addtoCart(product))
  if (isAlreadyInCart) {
    dispatch(deleteItemFromCart(product._id));
  } else {
    dispatch(addtoCart(product));
  }
};



export const calculateSubtotal = (cartItems) => {
    if (!cartItems || cartItems.length === 0) {
      return 0;
    }
  // console.log('inside calculateSubtotal',cartItems)
  const subTotal=cartItems.items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
   console.log('calculateSubtotal',subTotal)
  return subTotal
  };
  
  export const calculateTotal = (cartItems) => {

    const subtotal = calculateSubtotal(cartItems);
    const shipping = subtotal>500 ? 0 : 20;
    // const taxes = 0.08 * subtotal;
    return subtotal + shipping 
  };
  
//Save to Local Storage
 export const saveCartToLocalStorage = (cart) => {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem("cart", JSON.stringify(cart) || []);
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
  };