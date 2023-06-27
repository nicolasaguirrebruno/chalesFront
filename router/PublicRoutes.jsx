import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { LoginPage, RegisterPage } from "../auth";
import { ChalesRoutes } from "../chales/routes/ChalesRoutes";

export const PublicRoutes = () => {
  return (
    <>
      {/* <Routes>
        <Route path="auth/register" element={<RegisterPage />} />
        <Route path="auth/login" element={<LoginPage />} />
        <Route path="inicio" element={<ChalesRoutes />} />
        <Route path="/*" element={<ChalesRoutes />} />
      </Routes> */}
    </>
  );
};
