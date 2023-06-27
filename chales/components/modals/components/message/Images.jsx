import { CheckCircle, Pencil, Trash, XCircle } from "phosphor-react";
import React, { useState } from "react";

export const Images = ({ image, setformValues, formValues }) => {
  const [disabled, setdisabled] = useState(true);
  const [imageValue, setImageValue] = useState(image || "");
  const [show, setShow] = useState(true);

  const change = ({ target }) => {
    setformValues({
      ...formValues,
      chalImages: formValues.chalImages.map((c) => {
        if (c === image) {
          setdisabled(true);
          return imageValue;
        }
        return c;
      }),
    });
  };

  const deleteImage = () => {
    const newImages = formValues.chalImages.filter((item) => item !== image);

    setformValues({
      ...formValues,
      chalImages: newImages,
    });
  };

  const cancel = () => {
    setImageValue(image);
    setdisabled(true);
  };

  const onInputChange = ({ target }) => {
    setImageValue(target.value);
  };

  return (
    <>
      {show ? (
        <div key={image} className="caracteristics--group-individual">
          <input
            className={`editform__input input--caracteristics ${
              disabled ? "disabled" : ""
            }`}
            type="text"
            placeholder="Poncho Azul"
            name="chalName"
            value={imageValue}
            onChange={onInputChange}
            disabled={disabled}
            data-name={image}
          />
          <Pencil
            onClick={() => setdisabled(false)}
            className={`${disabled ? "edit-icon" : "not-visible"}`}
            size={20}
            weight="bold"
          />
          <Trash
            onClick={() => deleteImage()}
            className={`${disabled ? "delete-icon" : "not-visible"}`}
            size={20}
            weight="fill"
          />

          <CheckCircle
            onClick={change}
            size={20}
            weight="bold"
            className={`${disabled ? "not-visible" : "edit-icon"}`}
          />

          <XCircle
            className={`${disabled ? "not-visible" : "delete-icon"}`}
            size={20}
            weight="fill"
            onClick={cancel}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};
