import React from "react";
import { data } from "../../../../data/data";
import { ChalCard } from "./ChalCard";

export const RecommendedList = () => {
  const chales = data();

  return (
    <div className="chales">
      {chales.map((chal, index) => {
        if (index < 4) {
          return <ChalCard key={chal.nombre} chal={chal} />;
        }
      })}
    </div>
  );
};
