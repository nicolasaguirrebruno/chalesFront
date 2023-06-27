import { useDispatch, useSelector } from "react-redux";
import { chalesApi } from "../api";
import {
  onAddWish,
  onCloseEdit,
  onLoadWishes,
  onOpenEdit,
  onRemoveWish,
} from "../store";

export const useEditStore = () => {
  const { showEdit, product } = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  const startEditing = (product) => {
    dispatch(onOpenEdit(product));
  };

  const stopEditing = () => {
    dispatch(onCloseEdit());
  };

  return {
    //* Properties
    showEdit,
    product,
    //* Methods
    startEditing,
    stopEditing,
  };
};
