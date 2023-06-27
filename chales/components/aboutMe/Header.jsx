import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { usePosition } from "../../../hooks/usePosition";

export const Header = () => {
  const [isSheepAnimated, setisSheepAnimated] = useState(false);
  const sheep = useRef();
  usePosition(sheep, 300, setisSheepAnimated);
  return (
    <header className="headerAbout">
      <div className="headerAbout__container">
        <h2 className="headerAbout__title">
          La magia de las culturas ancestrales tejidas en un trabajo de arte
          proveniente de la Patagonia Argentina
        </h2>

        <motion.img
          ref={sheep}
          animate={{
            y: 0,
            opacity: 1,
          }}
          initial={{
            opacity: 0.1,
            y: 200,
          }}
          transition={{
            type: "spring",
            duration: 3,
          }}
          className="headerAbout__img"
          src="./public/oveja.jpg"
          alt=""
        />
      </div>
    </header>
  );
};
