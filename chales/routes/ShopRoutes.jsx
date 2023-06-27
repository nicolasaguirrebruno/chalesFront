import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Cart, Product, ProductList, Wishes } from "../components/shop";

export const ShopRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="coleccion-vestir"
          element={<ProductList categoria="vestir" />}
        />
        <Route
          path="coleccion-mantas"
          element={<ProductList categoria="mantas" />}
        />

        <Route path="coleccion-vestir/product/:name" element={<Product />} />
        <Route path="coleccion-mantas/product/:name" element={<Product />} />
        <Route path="carrito" element={<Cart />} />
        <Route path="lista-deseos" element={<Wishes />} />
      </Routes>
    </>
  );
};
