import { useEffect, useRef, useState } from "react";

export const usePosition = (
  animationRef,
  referencePosition,

  setIsName
) => {
  useEffect(() => {
    const handleScroll = () => {
      const { y } = animationRef.current.getBoundingClientRect();

      const flag = y >= referencePosition ? true : false;
      setIsName(flag);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return {
    name,
  };
};
