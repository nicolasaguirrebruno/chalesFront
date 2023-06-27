import React, { useEffect, useState } from "react";
import { User } from "./User";

export const UserList = ({ show, users }) => {
  return (
    <div className={show ? "" : "invisible"}>
      <h2 style={{ padding: "2rem" }} className="heading__secondary">
        Usuarios
      </h2>
      <hr />
      <div className="user">
        {users.map((user) => (
          <User key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};
