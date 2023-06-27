import { Pencil, Trash } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { Message } from "../../chales/components/modals/Message";
import { useEditStore, useProductStore } from "../../hooks";
import { useModalStore } from "../../hooks/useModalStore";
import { Delete } from "../../chales/components/modals";

export const ProductsInfo = ({ product }) => {
  const [hover, setHover] = useState(false);
  const { startEditing, stopEditing } = useEditStore();
  const { deleteProduct } = useProductStore();
  const { showDeleteState, startOpenDelete, startRejectingDelete, showDelete } =
    useModalStore();

  const handleMouseEnter = () => {
    setHover(true);
    startEditing();
  };

  const handleMouseLeave = () => {
    setHover(false);
    stopEditing();
  };

  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    startOpenDelete();
  };

  const delProd = async () => {
    if (showDeleteState && !showDelete && isDeleting === true) {
      await deleteProduct(product.id).then(setIsDeleting(false));
    }
  };

  useEffect(() => {
    delProd();
  }, [showDeleteState]);

  return (
    <>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`productsIndividual `}
      >
        <div
          className={`${
            hover
              ? "productsIndividual__hover"
              : "productsIndividual__notDisplay"
          }`}
        ></div>
        <div
          className={`${
            hover
              ? "productsIndividual__options"
              : "productsIndividual__notDisplay"
          }`}
        >
          <Pencil
            onClick={() => startEditing(product)}
            className="edit-icon"
            size={24}
            weight="fill"
          />
          <Trash
            onClick={handleDelete}
            className="delete-icon"
            size={24}
            weight="fill"
          />
        </div>
        <img src={product.image[0]} />
        <h3 className="productsIndividual__title">{product.nombre}</h3>
        <div className="productsIndividual__container">
          <p>{product.categoria}</p>
          <p>€{product.precio}</p>
        </div>
      </div>
      <Delete />
    </>
  );
};
