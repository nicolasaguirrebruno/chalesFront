import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "cart",
  initialState: {
    showCart: false,
    showWish: false,
    showUser: false,
    showEdit: false,
    showMessage: false,
    showConfirm: false,
    showConfirmState: false,
    showDiscard: false,
    showDiscardState: false,
    showConfirmEdit: false,
    showConfirmEditState: false,
    showDelete: false,
    showDeleteState: false,
    product: {},
    message: "",
  },
  reducers: {
    onOpenCart: (state) => {
      state.showCart = true;
    },
    onCloseCart: (state) => {
      state.showCart = false;
    },

    onOpenWish: (state) => {
      state.showWish = true;
    },
    onCloseWish: (state) => {
      state.showWish = false;
    },

    onOpenUser: (state) => {
      state.showUser = true;
    },
    onCloseUser: (state) => {
      state.showUser = false;
    },

    onOpenEdit: (state, { payload }) => {
      state.showEdit = true;
      state.product = payload;
    },
    onCloseEdit: (state) => {
      state.showEdit = false;
      state.product = {};
    },

    onOpenMessage: (state, { payload }) => {
      state.showMessage = true;
      state.message = payload;
    },
    onCloseMessage: (state) => {
      state.showMessage = false;
      state.message = "";
    },

    onOpenConfirm: (state) => {
      state.showConfirm = true;
      if ((state.showConfirmState = true)) {
        state.showConfirmState = false;
      }
    },
    onAcceptConfirm: (state) => {
      state.showConfirm = false;
      state.showConfirmState = true;
    },
    onRejectConfirm: (state) => {
      state.showConfirm = false;
      state.showConfirmState = false;
    },

    onOpenDiscard: (state) => {
      state.showDiscard = true;
      if ((state.showDiscardState = true)) {
        state.showDiscardState = false;
      }
    },
    onAcceptDiscard: (state) => {
      state.showDiscard = false;
      state.showDiscardState = true;
    },
    onRejectDiscard: (state) => {
      state.showDiscard = false;
      state.showDiscard = false;
    },

    onOpenConfirmEdit: (state) => {
      state.showConfirmEdit = true;
      if ((state.showConfirmEdit = true)) {
        state.showConfirmEditState = false;
      }
    },
    onAcceptEdit: (state) => {
      state.showConfirmEdit = false;
      state.showConfirmEditState = true;
    },
    onRejectEdit: (state) => {
      state.showConfirmEdit = false;
      state.showConfirmEditState = false;
    },

    onOpenDelete: (state) => {
      state.showDelete = true;
      if ((state.showDelete = true)) {
        state.showDeleteState = false;
      }
    },
    onAcceptDelete: (state) => {
      state.showDelete = false;
      state.showDeleteState = true;
    },
    onRejectDelete: (state) => {
      state.showDelete = false;
      state.showDeleteState = false;
    },
  },
});

export const {
  onCloseWish,
  onOpenWish,
  onCloseCart,
  onOpenCart,
  onOpenUser,
  onCloseUser,
  onOpenEdit,
  onCloseEdit,
  onOpenMessage,
  onCloseMessage,
  onOpenConfirm,
  onRejectConfirm,
  onAcceptConfirm,
  onOpenDiscard,
  onAcceptDiscard,
  onRejectDiscard,
  onOpenConfirmEdit,
  onAcceptEdit,
  onRejectEdit,
  onOpenDelete,
  onAcceptDelete,
  onRejectDelete,
} = modalSlice.actions;
