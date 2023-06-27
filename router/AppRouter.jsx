import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AdminPage } from "../admin/pages";
import { LoginPage, RegisterPage } from "../auth";
import { ChalesRoutes } from "../chales/routes/ChalesRoutes";

import { useAuthStore, useProductStore } from "../hooks";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = () => {
  const { checkAuthToken, status, user } = useAuthStore();

  let isAdmin = user?.uid === "6434687bd50ad4092357571d";

  useEffect(() => {
    isAdmin = user?.uid === "6434687bd50ad4092357571d";
  }, [status]);

  useEffect(() => {
    checkAuthToken();
  }, []);

  const { startLoadingProducts } = useProductStore();

  useEffect(() => {
    startLoadingProducts();
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/dashboard"
          element={isAdmin ? <AdminPage /> : <Navigate to="inicio" />}
        />
        <Route path="auth/register" element={<RegisterPage />} />
        <Route path="auth/login" element={<LoginPage />} />

        <Route path="*" element={<ChalesRoutes />} />
      </Routes>
    </>
  );
};
