import React, { useEffect, useState } from "react";
import { Message } from "../../chales/components/modals/Message";
import { ProductCard } from "../../chales/components/shop";
import { data } from "../../data/data";
import { useEditStore } from "../../hooks";
import { ProductsInfo } from "./ProductsInfo";

export const Products = ({ show }) => {
  const { startEditing, stopEditing, showEdit } = useEditStore();
  const [chales, setChales] = useState(data());

  const [editChal, seteditChal] = useState(true);

  const newData = data();

  useEffect(() => {
    seteditChal(false);

    setTimeout(() => {
      seteditChal(true);
    }, 0);
    setChales(newData);
  }, [newData]);

  return (
    <div className={`${show ? "productsView" : "invisible"}`}>
      <h1 className="productsView__heading">Todos los productos</h1>

      <div className="productContainer">
        {editChal &&
          chales.map((product) => {
            return <ProductsInfo key={product.id} product={product} />;
          })}
      </div>

      <Message show={showEdit} />
    </div>
  );
};
