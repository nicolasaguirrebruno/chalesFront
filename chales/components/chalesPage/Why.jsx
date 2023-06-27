import React from "react";
import { Background, Parallax } from "react-parallax";

import { Perk } from "./subcomponents";

export const Why = () => {
  return (
   
      <section className="why">
        <p className="why__section__name">
          ¿Por qué elegir Patagonia Infinity?
        </p>
        <h2 className="why__heading__secondary">
          En Patagonia Infinity elegimos la lana por sus increíbles cualidades{" "}
          <br />
          estéticas y funcionales como las siguientes
        </h2>
        <Perk />
      </section>
    
  );
};
