import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  onAddNewProduct,
  onDeleteProduct,
  onLoadProducts,
  onUpdateProduct,
} from "../store";
import { chalesApi } from "../api";
import { useWishesStore } from "./useWishesStore";
import { useFavoriteStore } from "./useFavoriteStore";

export const useProductStore = () => {
  const { products } = useSelector((state) => state.product);
  const { startDeletingWishes, wishes, startLoadinAllWishes } =
    useWishesStore();
  const { startDeleting, favorites, startLoadinAllFavorites } =
    useFavoriteStore();
  const dispatch = useDispatch();

  const startSavingProduct = async (product) => {
    try {
      if (product.id) {
        chalesApi.put(`/products/${product.id}`, product);
        if (startLoadinAllFavorites(product.id)) {
          await chalesApi.put(`events/update-all/${product.id}`, product);
        }

        if (startLoadinAllWishes(product.id)) {
          await chalesApi.put(`favorites/update-all/${product.id}`, product);
        }
        dispatch(onUpdateProduct({ ...product }));
        return;
      }
      const { data } = await chalesApi.post("/products", product);
      dispatch(onAddNewProduct({ ...product, id: data.producto.id }));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    console.log(id);
    try {
      await chalesApi.delete(`/products/${id}`, {});

      if (startLoadinAllWishes(id) === true) {
        await chalesApi.delete(`favorites/delete-all/${id}`, {});
      }

      if (startLoadinAllFavorites(id) === true) {
        await chalesApi.delete(`events/delete-all/${id}`, {});
      }

      dispatch(onDeleteProduct(id));
    } catch (error) {
      console.log("estoy fallando");
      console.log(error);
    }
  };

  const startLoadingProducts = async () => {
    try {
      const { data } = await chalesApi.get("/products", {});

      dispatch(onLoadProducts(data.productos));
    } catch (error) {
      console.log("Error cargando productos");
      console.log(error);
    }
  };

  return {
    //*Propiedades
    products,

    //*Metodos
    startSavingProduct,
    deleteProduct,
    startLoadingProducts,
  };
};
