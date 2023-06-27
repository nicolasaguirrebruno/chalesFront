import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdminPage } from "../admin/pages";
import { AdminRoutes } from "../admin/routes/AdminRoutes";

export const PrivateRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminPage />} />
        {/* <Routes path="/*" element={<AdminRoutes />} /> */}
      </Routes>
    </>
  );
};
