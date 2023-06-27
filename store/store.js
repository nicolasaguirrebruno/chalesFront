import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { favoritesSlice } from "./favorites/favoritesSlice";
import { modalSlice } from "./modals/modalSlice";
import { wishesSlice } from "./wishes/wishesSlice";
import { productSlice } from "./products/productSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    modal: modalSlice.reducer,
    favorites: favoritesSlice.reducer,
    wishes: wishesSlice.reducer,
    product: productSlice.reducer,
  },
});
