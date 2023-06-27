import { useDispatch, useSelector } from "react-redux";
import {
  onAcceptConfirm,
  onAcceptDelete,
  onAcceptDiscard,
  onAcceptEdit,
  onCloseCart,
  onCloseMessage,
  onCloseUser,
  onCloseWish,
  onOpenCart,
  onOpenConfirm,
  onOpenConfirmEdit,
  onOpenDelete,
  onOpenDiscard,
  onOpenEdit,
  onOpenMessage,
  onOpenUser,
  onOpenWish,
  onRejectConfirm,
  onRejectDelete,
  onRejectDiscard,
  onRejectEdit,
} from "../store";

export const useModalStore = () => {
  const {
    showCart,
    showWish,
    showUser,
    showMessage,
    showConfirm,
    showConfirmState,
    showDiscard,
    showDiscardState,
    showConfirmEdit,
    showConfirmEditState,
    showDelete,
    showDeleteState,
    message,
  } = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  const startDisplay = (displayed) => {
    displayed == "wish" ? dispatch(onOpenWish()) : dispatch(onOpenCart());
  };

  const startClose = (displayed) => {
    displayed == "cart" ? dispatch(onCloseCart()) : dispatch(onCloseWish());
  };

  const startUserDisplay = () => {
    dispatch(onOpenUser());
  };

  const startUserClose = () => {
    dispatch(onCloseUser());
  };

  const startOpenMessage = (message) => {
    dispatch(onOpenMessage(message));
  };

  const startClosingMessage = () => {
    dispatch(onCloseMessage());
  };

  const startOpenConfirm = () => {
    dispatch(onOpenConfirm());
  };

  const startAcceptingConfirm = () => {
    dispatch(onAcceptConfirm());
  };
  const startRejectingConfirm = () => {
    dispatch(onRejectConfirm());
  };

  const startOpenDiscard = () => {
    dispatch(onOpenDiscard());
  };

  const startAcceptingDiscard = () => {
    dispatch(onAcceptDiscard());
  };
  const startRejectingDiscard = () => {
    dispatch(onRejectDiscard());
  };

  const startOpenEdit = () => {
    dispatch(onOpenConfirmEdit());
  };

  const startAcceptingEdit = () => {
    dispatch(onAcceptEdit());
  };
  const startRejectingEdit = () => {
    dispatch(onRejectEdit());
  };

  const startOpenDelete = () => {
    dispatch(onOpenDelete());
  };

  const startAcceptingDelete = () => {
    dispatch(onAcceptDelete());
  };
  const startRejectingDelete = () => {
    dispatch(onRejectDelete());
  };
  return {
    //* Properties
    showCart,
    showWish,
    showUser,
    showMessage,
    showDiscard,
    showDiscardState,
    showConfirmEditState,
    showConfirmEdit,
    showDelete,
    showDeleteState,
    message,
    //* Methods
    startDisplay,
    startClose,
    startUserDisplay,
    startUserClose,
    startOpenMessage,
    startClosingMessage,
    startOpenConfirm,
    startAcceptingConfirm,
    startRejectingConfirm,
    showConfirm,
    showConfirmState,
    startOpenDiscard,
    startAcceptingDiscard,
    startRejectingDiscard,
    startOpenEdit,
    startAcceptingEdit,
    startRejectingEdit,
    startOpenDelete,
    startAcceptingDelete,
    startRejectingDelete,
  };
};
