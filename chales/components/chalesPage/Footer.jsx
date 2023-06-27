import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__options">
        <Link to="politica-privacidad" className="footer__link">
          Politica de <br /> Privacidad
        </Link>
        <Link to="terminos-condiciones" className="footer__link">
          {" "}
          Terminos y <br /> condiciones
        </Link>
        <Link to="politicas-devolucion-reembolsos" className="footer__link">
          Politica de devolucion <br /> y reembolsos
        </Link>
        <Link
          to="https://www.facebook.com/profile.php?id=100088197553150"
          className="footer__link"
        >
          {" "}
          Contactanos en <br /> nuestro Facebook
        </Link>
      </div>
      <p className="footer__author">
        Copyrigth &copy; Nicolas Aguirre, todos los derechos reservados 2023
      </p>
    </footer>
  );
};
