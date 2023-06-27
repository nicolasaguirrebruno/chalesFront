import { useProductStore } from "../hooks";
import poncho from "../img/poncho-azul.jpg";

import React from "react";

export const data = () => {
  const { products } = useProductStore();

  return products;
};
