import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    detailId: "",
    cartItems: [],
    total: 0,
  },
  reducers: {
    adddetailId(state, actions) {
      state.detailId = actions.payload;
    },
    AddToCart(state, actions) {
      let existingItem = state.cartItems.find(
        (ele) => ele.item_id == actions.payload.item_id
      );

      if (!existingItem) {
        const objCopy = { ...actions.payload };
        objCopy.totalItems = 1;
        objCopy.totalprice = actions.payload.price.base_unit;
        state.total = state.total + actions.payload.price.base_unit;

        state.cartItems.push(objCopy);
      } else {
        existingItem.totalItems++;
        existingItem.totalprice =
          existingItem.totalprice + actions.payload.price.base_unit;

        state.total = state.total + actions.payload.price.base_unit;
      }
    },
    removeFromCart(state, actions) {
      let existingItem = state.cartItems.find(
        (ele) => ele.item_id == actions.payload.item_id
      );

      if (existingItem.totalItems == 1) {
        state.cartItems = state.cartItems.filter(
          (ele) => ele.item_id != actions.payload.item_id
        );

        state.total = state.total - actions.payload.price.base_unit;
      } else {
        existingItem.totalItems--;
        existingItem.totalprice =
          existingItem.totalprice - actions.payload.price.base_unit;

        state.total = state.total - actions.payload.price.base_unit;
      }
    },
  },
});

export const appActions = appSlice.actions;

export default appSlice;
