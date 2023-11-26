import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartSate {
  items: CartItem[];
}

const initialState: CartSate = {
  items: [],
};

const loadCartFromLocalStorage = ():CartSate => {
  const storedCart = localStorage.getItem('cart');
  return storedCart ? JSON.parse(storedCart) : initialState;
}

const saveCartToLocalStorage = (state: CartSate):void => {
  localStorage.setItem('cart', JSON.stringify(state));
}

const cartSlice = createSlice({
  name: "cart",
  initialState: loadCartFromLocalStorage(),
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const { id, name, price } = action.payload;
      const existingItem = state.items.find((item: CartItem) => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ id, name, price, quantity: 1 });
      }

      saveCartToLocalStorage(state)
    },

    removeFromCart(state, action:PayloadAction<number>) {
      const idToRemove = action.payload;
      state.items = state.items.filter(item => item.id !== idToRemove)

      saveCartToLocalStorage(state)
    },

    increaseQuantity(state, action: PayloadAction<number>){
      const idToIncrease = action.payload;
      state.items = state.items.map(item => item.id === idToIncrease? {...item, quantity: item.quantity + 1}: item);

      saveCartToLocalStorage(state)
    },

    decreaseQuantity(state, action: PayloadAction<number>) {
      const idToDecrease = action.payload;
      state.items = state.items.map(item => item.id === idToDecrease? {...item, quantity: item.quantity - 1}: item);

      saveCartToLocalStorage(state)
    },

  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
