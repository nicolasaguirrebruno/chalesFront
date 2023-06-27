import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    isLoadingProducts: true,
    products: [],
  },
  reducers: {
    onAddNewProduct: (state, { payload }) => {
      state.products.push(payload);
    },
    onUpdateProduct: (state, { payload }) => {
      state.products = state.products.map((product) => {
        if (product.id === payload.id) {
          return payload;
        }
        return product;
      });
    },

    onDeleteProduct: (state, { payload }) => {
      state.products = state.products.filter(
        (product) => product.id != payload
      );
    },

    onLoadProducts: (state, { payload = [] }) => {
      state.isLoadingProducts = false;
      // state.products = payload
      payload.forEach((product) => {
        const exist = state.products.some(
          (dbEvent) => dbEvent.id === product.id
        );
        if (!exist) {
          state.products.push(product);
        }
      });
    },
  },
});

export const {
  increment,
  onAddNewProduct,
  onUpdateProduct,
  onDeleteProduct,
  onLoadProducts,
} = productSlice.actions;
