import { useDispatch, useSelector } from "react-redux";
import { chalesApi } from "../api";

import { getEnvVariables } from "../helpers/getEnvVariables";
import {
  onLogin,
  onLogout,
  clearErrorMessage,
  onChecking,
  onLoadUsers,
  onRemove,
} from "../store";
import { useModalStore } from "./useModalStore";

export const useAuthStore = () => {
  const {
    startOpenDelete,
    startRejectingDelete,
    showDeleteState,
    startOpenMessage,
    showDelete,
  } = useModalStore();
  const { status, user, errorMessage, allUsers } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await chalesApi.post("/auth", { email, password });

      if (data.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("token-init-date", new Date().getTime());
        dispatch(onLogin({ name: data.name, uid: data.uid }));
      } else {
        dispatch(onLogout("Credenciales incorrectas"));
        setTimeout(() => {
          dispatch(clearErrorMessage());
        }, 10000);
      }
    } catch (error) {
      dispatch(onLogout(error.response.data?.msg));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10000);
    }
  };

  const startRegister = async ({ email, password, name }) => {
    dispatch(onChecking());
    try {
      const { data } = await chalesApi.post("/auth/new", {
        name,
        email,
        password,
      });

      if (data.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("token-init-date", new Date().getTime());
        dispatch(onLogin({ name: data.name, uid: data.uid }));
      } else {
        dispatch(onLogout("Credenciales incorrectas"));
        setTimeout(() => {
          dispatch(clearErrorMessage());
        }, 10000);
      }
    } catch (error) {
      dispatch(onLogout(error.response.data?.msg));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10000);
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) return dispatch(onLogout());

    try {
      const { data } = await chalesApi.get("auth/renew");
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      console.log(error);
      localStorage.clear();
      dispatch(onLogout());
    }
  };

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
  };

  const startLoadingUsers = async () => {
    try {
      if (status == "authenticated") {
        const { data } = await chalesApi.get("/auth/users");

        dispatch(onLoadUsers(data));
      }
    } catch (error) {
      console.log("Error cargando eventos");
      console.log(error);
    }
  };

  const startDeleting = async ({ email }) => {
    try {
      await chalesApi.delete(`/auth/delete/${email}`, {});
      dispatch(onRemove(email));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    //* Properties
    status,
    user,
    errorMessage,
    allUsers,
    //* Methods
    startLogin,
    startRegister,
    checkAuthToken,
    startLogout,
    startLoadingUsers,
    startDeleting,
  };
};
