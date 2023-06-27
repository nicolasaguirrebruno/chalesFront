import { useEffect } from "react";
import { Parallax } from "react-parallax";
import {
  Header,
  Questions,
  RecommendedProducts,
  Why,
} from "../components/chalesPage";
import { useProductStore } from "../../hooks";

export const ChalesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="chalesPage">
      <Parallax strength={500} bgImage="src/img/img/patagonia9.jpg">
        <Header />
      </Parallax>

      <Why />
      <Parallax strength={500} bgImage="src/img/img/ptagonia6.jpg">
        <RecommendedProducts />
      </Parallax>

      <Questions />
    </div>
  );
};
