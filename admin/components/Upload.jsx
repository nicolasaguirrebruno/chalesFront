import { Pencil, PlusCircle, XCircle } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { useEditStore, useProductStore } from "../../hooks";
import { useModalStore } from "../../hooks/useModalStore";
import { Caracteristics } from "../../chales/components/modals/components";
import { DisplayMessage } from "../../chales/components/modals/DisplayMessage";
import { Images } from "../../chales/components/modals/components/message/Images";
import { Confirm } from "../../chales/components/modals";

export const Upload = ({ show }) => {
  const { stopEditing } = useEditStore();

  const {
    startOpenMessage,
    startClosingMessage,
    showConfirmState,
    startOpenConfirm,
    showConfirm,
    startRejectingConfirm,
  } = useModalStore();
  const [formValues, setformValues] = useState({
    chalName: "",
    chalCategory: "Vestir",
    chalCaracteristics: [],
    chalDescription: "",
    chalPrice: "",
    chalImages: [],
  });

  const { startSavingProduct } = useProductStore();

  const [editCar, seteditCar] = useState(true);
  const [editImg, seteditImg] = useState(true);

  const handleCategoryChange = ({ target }) => {
    const categoryValue = target.htmlFor === "vestir" ? "Vestir" : "Mantas";
    setformValues({
      ...formValues,
      chalCategory: categoryValue,
    });
  };
  const save = async () => {
    if (showConfirmState && !showConfirm) {
      console.log(showConfirmState);
      await startSavingProduct({
        nombre: formValues.chalName,
        categoria: formValues.chalCategory,
        caracteristicas: formValues.chalCaracteristics,
        descripcion: formValues.chalDescription,
        precio: formValues.chalPrice,
        image: formValues.chalImages,
      }).then(cleanFields());
    }
  };

  useEffect(() => {
    save();
  }, [showConfirmState]);

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
      startOpenConfirm();
    }
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

  const cleanFields = () => {
    setformValues({
      chalName: "",
      chalCategory: "Vestir",
      chalCaracteristics: [],
      chalDescription: "",
      chalPrice: "",
      chalImages: [],
    });

    setNewCaracteristic("");
    setNewImage("");
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

  return (
    <div
      className={`${
        show ? "uploadContainer" : "productsIndividual__notDisplay"
      }`}
    >
      <div className="editContainerUpload">
        <h2 className="heading__secondary">Agregar un Producto</h2>

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

              <label
                onClick={handleCategoryChange}
                className="editform__label label-radio"
                htmlFor="vestir"
              >
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
              <label
                onClick={handleCategoryChange}
                className="editform__label label-radio"
                htmlFor="mantas"
              >
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
          Subir el producto
        </button>
        <button onClick={cleanFields} className="login__button">
          LimpiarCampos
        </button>
      </div>
      <DisplayMessage />
      <Confirm />
    </div>
  );
};
