import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";
import { MyTextInput } from "../components/MyTextInput";
import { useAuthStore } from "../../hooks/useAuthStore";
import { useNavigate } from "react-router-dom";

const registerFormFields = {
  registerFirstName: "",
  registerLastName: "",
  registerEmail: "",
  registerPassword: "",
  registerPassword2: "",
};

// const { status } = useAuthStore();

// const navigate = useNavigate();

// useEffect(() => {
//   if (status === "authenticated") {
//     navigate("/auth/login");
//   }
// }, [status, navigate]);

export const RegisterPage = () => {
  const [error, setError] = useState(false);
  const { startRegister, errorMessage, status } = useAuthStore();

  const [register, setRegister] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (errorMessage !== undefined) setError(true);
  }, [errorMessage]);

  useEffect(() => {
    if (status === "authenticated") {
      navigate("/");
    }
  }, [status, navigate]);
  return (
    <section className="login">
      <div className="login__form">
        <h1 className="login__heading">Registrarse</h1>
        {/* <hr className="login__hr" /> */}

        <Formik
          initialValues={registerFormFields}
          onSubmit={(values) => {
            startRegister({
              name: values.registerFirstName,
              email: values.registerEmail,
              password: values.registerPassword,
            });
          }}
          validationSchema={Yup.object({
            registerFirstName: Yup.string()
              .max(15, "Debe de tener 15 caracteres o menos")
              .min(2, "Debe de tener al menos 2 caracteres")
              .required("El campo nombre es obligatorio"),

            registerEmail: Yup.string()
              .email("El formato del mail no es valido")
              .required("El campo email es obligatorio"),
            registerPassword: Yup.string()
              .required("El campo contraseña es obligatorio")
              .min(6, "Minimo 6 letras"),
            registerPassword2: Yup.string()
              .oneOf(
                [Yup.ref("registerPassword")],
                "Las contraseñas no coinciden"
              )
              .required("Este campo es obligatoro"),
          })}
        >
          {({ handleReset }) => (
            <Form>
              <MyTextInput
                placeholder="Juan Perez"
                label="Nombre"
                name="registerFirstName"
              />

              <MyTextInput
                placeholder="juanperez@gmail.com"
                label="Email"
                name="registerEmail"
              />

              <MyTextInput
                placeholder=""
                label="Contraseña"
                name="registerPassword"
                type="password"
              />

              <MyTextInput
                placeholder=""
                label="Repetir Contraseña"
                name="registerPassword2"
                type="password"
              />

              <button type="submit" className="login__button">
                Crear cuenta
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="login__button"
              >
                Limpiar campos
              </button>

              {error && <span className="login__error"> {errorMessage}</span>}
            </Form>
          )}
        </Formik>
      </div>

      <div className="login__imgcont">
        <div className="login__images">
          <img
            className="login__img img__1"
            src="/src/img/login-1.jpeg"
            alt=""
          />
          <img
            className="login__img  img__2"
            src="/src/img/login-2.jpeg"
            alt=""
          />

          <img
            className="login__img  img__3"
            src="/src/img/login-3.jpeg"
            alt=""
          />

          <img
            className="login__img  img__4"
            src="/src/img/login-4.jpeg"
            alt=""
          />

          <img
            className="login__img  img__5"
            src="/src/img/login-5.jpeg"
            alt=""
          />

          <img
            className="login__img  img__6"
            src="/src/img/login-6.jpeg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
