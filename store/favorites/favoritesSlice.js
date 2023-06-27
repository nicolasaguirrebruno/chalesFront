import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    isLoadingEvents: true,
    favorites: [],
  },
  reducers: {
    onAddFavorite: (state, { payload }) => {
      state.favorites.push(payload);
    },
    onRemoveFavorite: (state, { payload }) => {
      state.favorites = state.favorites.filter(
        (favorite) => favorite.id !== payload.id
      );
    },
    onLoadEvents: (state, { payload }) => {
      (state.isLoadingEvents = false),
        payload.userEvents.forEach((favorite) => {
          const exists = state.favorites.some(
            (dbEvent) => dbEvent.id === favorite.id
          );

          if (!exists) {
            state.favorites.push(favorite);
          }
        });
    },
  },
});

export const { onAddFavorite, onRemoveFavorite, onLoadEvents } =
  favoritesSlice.actions;
