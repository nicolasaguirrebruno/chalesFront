import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { Footer } from "../components/chalesPage";

import { ProductList } from "../components/shop";
import {
  AboutMe,
  ChalesPage,
  PrivacyPolitics,
  Refounds,
  Shop,
  TermsAndConditions,
} from "../pages";
import { ShopRoutes } from "./ShopRoutes";

export const ChalesRoutes = () => {
  return (
    <>
      <Navbar />;
      <Routes>
        <Route path="inicio" element={<ChalesPage />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="tienda" element={<Shop />} />

        <Route path="politica-privacidad" element={<PrivacyPolitics />} />
        <Route path="terminos-condiciones" element={<TermsAndConditions />} />
        <Route path="politicas-devolucion-reembolsos" element={<Refounds />} />

        <Route path="/*" element={<Navigate to="inicio" />} />
        <Route path="/tienda/*" element={<ShopRoutes />} />
      </Routes>
      <Footer />
    </>
  );
};
