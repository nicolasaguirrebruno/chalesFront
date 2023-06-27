import { Trash } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { useAuthStore } from "../../hooks";
import { useModalStore } from "../../hooks/useModalStore";
import { Delete } from "../../chales/components/modals";
import { DisplayMessage } from "../../chales/components/modals/DisplayMessage";

export const User = ({ user }) => {
  const [hover, setHover] = useState(false);

  const { startDeleting, startLoadingUsers } = useAuthStore();
  const {
    startOpenDelete,
    startRejectingDelete,
    showDeleteState,
    startOpenMessage,
    showDelete,
  } = useModalStore();

  const handleMouseEnter = () => {
    setHover(true);
  };

  const { email } = user;

  const handleMouseLeave = () => {
    setHover(false);
  };

  const [deleting, setIsDeleting] = useState(false);

  const handleDeleteUser = () => {
    if (user._id === "6434687bd50ad4092357571d") {
      startOpenMessage("No puedes eliminar al administrador");
    } else {
      setIsDeleting(true);
      startOpenDelete();
    }
  };

  const delUser = async () => {
    if (
      showDeleteState === true &&
      !showDelete &&
      user._id !== "6434687bd50ad4092357571d" &&
      deleting === true
    ) {
      startDeleting({ email: user.email })
        .then(setIsDeleting(false))
        .then(() => startLoadingUsers())
        .catch((error) => console.error(error));
      startRejectingDelete();
    }
  };

  useEffect(() => {
    delUser();
  }, [showDeleteState]);

  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="user__container"
      >
        <div className="user__texts">
          <p className="user__text">Nombre: {user.name}</p>
          <p className="user__text">Email: {user.email}</p>
          <p className="user__text">Id: {user._id}</p>
        </div>

        <div className={hover ? "user__icon" : "invisible"}>
          <Trash
            onClick={() => handleDeleteUser()}
            className="delete-icon delete-user"
          />
        </div>
      </div>
      <Delete />
      <DisplayMessage />
    </>
  );
};
