import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore, useFavoriteStore } from "../../../hooks";
import { useModalStore } from "../../../hooks/useModalStore";
import { CartList, Text } from "./components";

export const UserModal = ({ show }) => {
  const { showUser, startUserClose } = useModalStore();

  const { user, startLogout, status } = useAuthStore();

  const navigate = useNavigate();

  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    if (status === "authenticated" && user.uid === "6434687bd50ad4092357571d")
      setAdmin(true);
  }, [status]);

  const logout = () => {
    startLogout();
    startUserClose();
    navigate("/inicio");
    window.location.reload(true);
  };

  return (
    <div className={`${showUser ? "userModal" : "cart--invisible"}`}>
      <h3 className="userModal__heading">{user.name}</h3>
      <hr />
      <div>
        <Link to="/tienda/carrito" className="userModal__link">
          Mi carrito
        </Link>
        <Link to="/tienda/lista-deseos" className="userModal__link">
          Mis favoritos
        </Link>
        {admin ? (
          <Link to="/dashboard" className="userModal__link">
            Panel de administrador
          </Link>
        ) : (
          ""
        )}
      </div>
      <button onClick={logout} className="login__button">
        Cerrar Sesion
      </button>
    </div>
  );
};
