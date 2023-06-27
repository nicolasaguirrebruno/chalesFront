import { Pencil, PlusCircle, XCircle } from "phosphor-react";
import React, { useEffect, useState } from "react";

import { useEditStore, useProductStore } from "../../../hooks";
import { Caracteristics } from "./components";
import { Images } from "./components/message/Images";
import { useModalStore } from "../../../hooks/useModalStore";
import { DisplayMessage } from "./DisplayMessage";
import { Confirm } from "./Confirm";
import { Discard } from "./Discard";
import { ConfirmEdit } from "./ConfirmEdit";

export const Message = ({ show }) => {
  const { stopEditing, product } = useEditStore();
  const { startSavingProduct } = useProductStore();

  const {
    startOpenMessage,
    startClosingMessage,
    startOpenConfirm,
    showConfirm,
    showConfirmState,
    startOpenDiscard,
    showDiscardState,
    startOpenEdit,
    showConfirmEditState,
    showConfirmEdit,
    startRejectingEdit,
  } = useModalStore();
  const [formValues, setformValues] = useState({
    chalId: "",
    chalName: "",
    chalCategory: "",
    chalCaracteristics: [],
    chalDescription: "",
    chalPrice: "",
    chalImages: [],
  });

  const [editCar, seteditCar] = useState(true);
  const [editImg, seteditImg] = useState(true);
  const handleCategoryChange = ({ target }) => {
    const categoryValue = target.id === "vestir" ? "Vestir" : "Mantas";
    setformValues({
      ...formValues,
      chalCategory: categoryValue,
    });
  };

  const addCategory = () => {
    if (newCaracteristic != "") {
      if (
        formValues.chalCaracteristics.find(
          (carac) =>
            carac.trim().toLowerCase() === newCaracteristic.trim().toLowerCase()
        )
      ) {
        startOpenMessage(
          "No es posible agregar esa caracteristica puesto que ya existe."
        );
        return;
      }

      if (newCaracteristic.length <= 3) {
        startOpenMessage(
          "La caracteristica debe al menos tener cuatro letras."
        );
      }

      setformValues({
        ...formValues,
        chalCaracteristics: [
          ...formValues.chalCaracteristics,
          newCaracteristic,
        ],
      });

      setNewCaracteristic("");
    } else {
      startOpenMessage(
        "Este campo no puede estar vacio. Si desea agregar una caracteristica debe por lo menos suministrar alguna."
      );
    }
  };

  const addImage = () => {
    const match = newImage.match(
      /https:\/\/drive\.google\.com\/file\/d\/(.+?)\/view/
    );

    if (newImage != "" && match) {
      const fileId = match[1];
      const newLink = `https://drive.google.com/uc?export=view&id=${fileId}`;

      if (formValues.chalImages.length === 3) {
        startOpenMessage(
          "Limite de imagenes excedido. Solo se admiten hasta 3 fotografias del producto."
        );
        return;
      }

      if (formValues.chalImages.find((link) => link === newLink)) {
        startOpenMessage(
          "No es posible agregar dicha imagen puesto que la misma ya existe."
        );
        return;
      }

      setformValues({
        ...formValues,
        chalImages: [...formValues.chalImages, newLink],
      });
      setNewImage("");
    } else {
      if (newImage == "") {
        startOpenMessage(
          "Este campo no puede estar vacio. Si desea agregar una imagen debe por lo menos suministrar un link valido."
        );
        return;
      }
      if (!match) {
        startOpenMessage(
          "El link ingresado no es valido. Solo de admiten fotos provenientes del servidor Google Drive."
        );
      }
    }
  };

  useEffect(() => {
    setformValues((prev) => ({
      ...prev,
      chalCaracteristics: formValues.chalCaracteristics,
    }));

    seteditCar(false);

    setTimeout(() => {
      seteditCar(true);
    }, 0);
  }, [formValues.chalCaracteristics]);

  const onInputChange = ({ target }) => {
    setformValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  useEffect(() => {
    setformValues((prev) => ({
      ...prev,
      chalImages: formValues.chalImages,
    }));

    seteditImg(false);

    setTimeout(() => {
      seteditImg(true);
    }, 0);
  }, [formValues.chalImages]);

  const [newCaracteristic, setNewCaracteristic] = useState("");
  const [newImage, setNewImage] = useState("");

  useEffect(() => {
    if (product) {
      setformValues({
        chalId: product.id,
        chalName: product.nombre,
        chalCategory: product.categoria,
        chalCaracteristics: product.caracteristicas,
        chalDescription: product.descripcion,
        chalPrice: product.precio,
        chalImages: product.image,
      });
    }
  }, [product]);

  const save = async () => {
    if (showConfirmEditState && !showConfirmEdit) {
      await startSavingProduct({
        id: formValues.chalId,
        nombre: formValues.chalName,
        categoria: formValues.chalCategory,
        caracteristicas: formValues.chalCaracteristics,
        descripcion: formValues.chalDescription,
        precio: formValues.chalPrice,
        image: formValues.chalImages,
      });
    }
  };

  useEffect(() => {
    save();
    startRejectingEdit();
    stopEditing();
  }, [showConfirmEditState]);

  const onSubmit = async () => {
    const {
      chalName,
      chalCategory,
      chalCaracteristics,
      chalDescription,
      chalPrice,
      chalImages,
    } = formValues;

    if (
      chalName === "" ||
      chalCategory === "" ||
      chalCaracteristics === [] ||
      chalDescription === "" ||
      chalPrice === "" ||
      chalImages === []
    ) {
      startOpenMessage(
        "Hay campos incompletos, para subir un producto debe completar todos."
      );
      return;
    } else {
      startOpenEdit();
    }
  };

  const [discard, setDiscard] = useState(false);

  const handleDiscard = () => {
    startOpenDiscard();
    setDiscard(true);
  };

  useEffect(() => {
    if (showDiscardState == true && discard == true) {
      stopEditing();
      setDiscard(false);
    }
  }, [showDiscardState]);

  return (
    <div className={`${show ? "editmodal" : "productsIndividual__notDisplay"}`}>
      <div className="editContainer">
        <h2 className="heading__secondary">Editar Producto</h2>

        <form className="editform">
          <label className="editform__label" htmlFor="title">
            Nombre de producto
          </label>
          <input
            className="editform__input"
            type="text"
            placeholder="Poncho Azul"
            name="chalName"
            id="title"
            value={formValues.chalName}
            onChange={onInputChange}
          />

          <label className="editform__label">Categoria</label>
          <div className="editform__categories">
            <div className="editform__categories--category">
              <input
                className="editform__radio--input"
                type="radio"
                id="vestir"
                name="chalCategory"
                checked={formValues.chalCategory === "Vestir" ? true : false}
                onChange={handleCategoryChange}
              />

              <label className="editform__label label-radio" htmlFor="vestir">
                <span className="editform__radio-button"></span>
                Vestir
              </label>
            </div>

            <div className="editform__categories--category">
              <input
                className="editform__radio--input"
                type="radio"
                id="mantas"
                name="chalCategory"
                checked={formValues.chalCategory === "Mantas" ? true : false}
                onChange={handleCategoryChange}
              />
              <label className="editform__label label-radio" htmlFor="mantas">
                <span className="editform__radio-button"></span>
                Mantas
              </label>
            </div>
          </div>

          <div className="caracteristics--group">
            <label className="editform__label">Caracteristicas</label>
            {editCar &&
              formValues.chalCaracteristics?.map((caracteristic, index) => (
                <Caracteristics
                  key={index}
                  i={index}
                  caracteristic={caracteristic}
                  setformValues={setformValues}
                  formValues={formValues}
                />
              ))}
          </div>

          <label className="editform__label" htmlFor="new">
            Agregar una caracteristica
          </label>

          <div
            style={{ display: "flex", gap: "2rem", alignItems: "center" }}
            className="div"
          >
            <input
              className="editform__input"
              type="text"
              placeholder="Hecho en lana natural..."
              name="chalName"
              style={{ width: "93%" }}
              id="new"
              value={newCaracteristic}
              onChange={({ target }) => setNewCaracteristic(target.value)}
            />
            <PlusCircle
              onClick={addCategory}
              className="edit-icon"
              size={24}
              weight="fill"
            />
          </div>

          <label className="editform__label" htmlFor="description">
            Descripcion
          </label>

          <textarea
            className="editform__textarea"
            id="description"
            name="chalDescription"
            rows={10}
            style={{
              maxWidth: "100%",
              width: "100%",
              padding: "10px",
              fontFamily: "inherit",
            }}
            value={formValues.chalDescription}
            onChange={onInputChange}
          />

          <label className="editform__label" htmlFor="title">
            Precio del producto
          </label>
          <input
            className="editform__input"
            type="text"
            placeholder="€250"
            name="chalPrice"
            id="title"
            onChange={onInputChange}
            value={formValues.chalPrice}
          />

          <div className="caracteristics--group">
            <label className="editform__label">Imagenes del producto</label>
            {editImg &&
              formValues.chalImages?.map((image, index) => (
                <Images
                  key={index}
                  i={index}
                  image={image}
                  setformValues={setformValues}
                  formValues={formValues}
                />
              ))}
          </div>

          <label className="editform__label" htmlFor="newImage">
            Agregar una imagen (solo enlaces)
          </label>

          <div
            style={{ display: "flex", gap: "2rem", alignItems: "center" }}
            className="div"
          >
            <input
              className="editform__input"
              type="text"
              name="chalName"
              style={{ width: "93%" }}
              id="newImage"
              value={newImage}
              onChange={({ target }) => setNewImage(target.value)}
            />
            <PlusCircle
              onClick={addImage}
              className="edit-icon"
              size={24}
              weight="fill"
            />
          </div>
        </form>

        <button onClick={onSubmit} className="login__button">
          Guardar Cambios
        </button>
        <button onClick={handleDiscard} className="login__button">
          Descartar Cambios
        </button>
      </div>
      <DisplayMessage />
      <Confirm />
      <Discard />
      <ConfirmEdit />
    </div>
  );
};
