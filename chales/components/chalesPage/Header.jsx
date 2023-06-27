export const Header = () => {
  return (
    <header className="header">
      <div className="header__titles">
        <h1 className="header__titles__h1">
          Una <span className="header__titles__span">caricia</span> al alma,{" "}
          <br /> de la Patagonia al <br />
          <span className="header__titles__span"> mundo</span> entero
        </h1>
      </div>

      <div className=" header__images">
        <img
          className="header__images--img-1"
          src="./public/img/chal-header-1.png"
          alt="chal"
        />

        <img
          className="header__images--img-2"
          src="./public/img/chal-header-2.png"
          alt="chal"
        />

        <img
          className="header__images--img-3"
          src="./public/img/chal-header-3.png"
          alt="chal"
        />

        <img
          className="header__images--img-4"
          src="./public/img/chal-header-4.png"
          alt="chal"
        />

        <img
          className="header__images--img-5"
          src="./public/img/chal-header-5.png"
          alt="chal"
        />
      </div>
    </header>
  );
  r;
};
