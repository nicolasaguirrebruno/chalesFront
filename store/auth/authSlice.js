import { createSlice } from "@reduxjs/toolkit";
import { Password } from "phosphor-react";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated",
    user: {},
    errorMessage: undefined,
    allUsers: [],
  },
  reducers: {
    onChecking: (state) => {
      state.status = "checking";
      state.user = {};
      state.errorMessage = undefined;
    },
    onLogin: (state, { payload }) => {
      state.status = "authenticated";
      state.user = payload;
      state.errorMessage = undefined;
    },
    onLogout: (state, { payload }) => {
      state.status = "not-authenticated";
      state.user = {};
      state.errorMessage = payload;
    },

    onRemove: (state, { payload }) => {
      state.allUsers = state.allUsers.filter(
        (user) => user.email !== payload.email
      );
    },
    clearErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
    onLoadUsers: (state, { payload }) => {
      state.allUsers = payload;
    },
  },
});

export const {
  onChecking,
  onLogin,
  onLogout,
  clearErrorMessage,
  onLoadUsers,
  onRemove,
} = authSlice.actions;
