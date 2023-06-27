import React, { useEffect } from "react";
import { Header, Presentation } from "../components/aboutMe";

export const AboutMe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Presentation />
    </>
  );
};
