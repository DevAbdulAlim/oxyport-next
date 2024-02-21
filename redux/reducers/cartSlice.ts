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

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const { id, name, price } = action.payload;
      const existingItem = state.items.find((item: CartItem) => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ id, name, price, quantity: 1 });
      }
    },

    removeFromCart(state, action: PayloadAction<number>) {
      const idToRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== idToRemove);
    },

    increaseQuantity(state, action: PayloadAction<number>) {
      const idToIncrease = action.payload;
      state.items = state.items.map((item) =>
        item.id === idToIncrease
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    },

    decreaseQuantity(state, action: PayloadAction<number>) {
      const idToDecrease = action.payload;
      state.items = state.items.map((item) =>
        item.id === idToDecrease
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
