import { createSlice } from "@reduxjs/toolkit";

export const wishesSlice = createSlice({
  name: "wishes",
  initialState: { isLoadingEvents: true, wishes: [] },
  reducers: {
    onAddWish: (state, { payload }) => {
      state.wishes.push(payload);
    },
    onRemoveWish: (state, { payload }) => {
      state.wishes = state.wishes.filter((wish) => wish.id !== payload.id);
    },
    onLoadWishes: (state, { payload }) => {
      (state.isLoadingEvents = false),
        payload.userWishes.forEach((wish) => {
          const exists = state.wishes.some((dbEvent) => dbEvent.id === wish.id);

          if (!exists) {
            state.wishes.push(wish);
          }
        });
    },
  },
});

export const { onAddWish, onRemoveWish, onLoadWishes } = wishesSlice.actions;
