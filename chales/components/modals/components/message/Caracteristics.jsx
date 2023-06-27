import { CheckCircle, Pencil, Trash, XCircle } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { useCallback } from "react";

export const Caracteristics = ({
  caracteristic,
  setformValues,
  formValues,
  deleteOne,
}) => {
  const [disabled, setdisabled] = useState(true);
  const [caracteristicValue, setCaracteristicValue] = useState(
    caracteristic || ""
  );
  const [show, setShow] = useState(true);

  const change = ({ target }) => {
    setformValues({
      ...formValues,
      chalCaracteristics: formValues.chalCaracteristics.map((c) => {
        if (c === caracteristic) {
          setdisabled(true);
          return caracteristicValue;
        }
        return c;
      }),
    });
  };

  const deleteCaracteristic = () => {
    const newCaracteristics = formValues.chalCaracteristics.filter(
      (item) => item !== caracteristic
    );

    setformValues({
      ...formValues,
      chalCaracteristics: newCaracteristics,
    });
  };

  const cancel = () => {
    setCaracteristicValue(caracteristic);
    setdisabled(true);
  };

  const onInputChange = ({ target }) => {
    setCaracteristicValue(target.value);
  };

  return (
    <>
      {show ? (
        <div key={caracteristic} className="caracteristics--group-individual">
          <input
            className={`editform__input input--caracteristics ${
              disabled ? "disabled" : ""
            }`}
            type="text"
            placeholder="Poncho Azul"
            name="chalName"
            value={caracteristicValue}
            onChange={onInputChange}
            disabled={disabled}
            data-name={caracteristic}
          />
          <Pencil
            onClick={() => setdisabled(false)}
            className={`${disabled ? "edit-icon" : "not-visible"}`}
            size={20}
            weight="bold"
          />
          <Trash
            onClick={() => deleteCaracteristic()}
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
