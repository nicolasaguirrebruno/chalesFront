import React from "react";
import {
  ArrowFatUp,
  Drop,
  Fire,
  Leaf,
  Recycle,
  ThermometerHot,
} from "phosphor-react";

export const Perk = () => {
  return (
    <div className="perks">
      <div className="perk">
        <Recycle className="perk__icon" />
        <h3 className="perk__heading">100% biodegradable</h3>
        <p className="perk__paragraph">
          Los productos de lana son 100% biodegradables, por lo que al final de
          su vida útil liberan sus valiosos nutrientes de vuelta a la tierra en
          pocos años. Contiene queratina, que la protege de los rayos
          ultravioletas, lo que confiere una alta durabilidad a las prendas
          elaboradas con lana Merina.
        </p>
      </div>

      <div className="perk">
        <Leaf className="perk__icon" />
        <h3 className="perk__heading">100% Natural</h3>
        <p className="perk__paragraph">
          Todos los años las ovejas producen una nueva capa de lana haciendo de
          esta una fibra totalmente renovable. Al ser una fibra 100% natural, es
          100% ecológica y 100% biodegradable, no como sus competidoras
          artificiales, derivadas del petróleo, que dejan un impacto negativo en
          el entorno.
        </p>
      </div>

      <div className="perk">
        <Drop className="perk__icon" />
        <h3 className="perk__heading">Resiste manchas y olores</h3>
        <p className="perk__paragraph">
          La lana bien lavada se ensucia mínimamente, lo cual no ocurre con las
          fibras sintéticas, que necesitan tratamientos especiales. Retrasa o
          elimina la aparición de olores. La lana Merina tiene propiedades
          antibacterianas naturales, impidiendo que
        </p>
      </div>

      <div className="perk">
        <ThermometerHot className="perk__icon" />
        <h3 className="perk__heading">Aislante frío / calor</h3>
        <p className="perk__paragraph">
          La lana es una fibra natural que protege a la oveja del frío y del
          calor excesivo, esta propiedad se mantiene en todos los productos de
          lana. Repele el agua, puede estar en contacto con niebla o con poca
          lluvia sin que absorba el agua, gracias a su grasa natural
        </p>
      </div>

      <div className="perk">
        <ArrowFatUp className="perk__icon" />
        <h3 className="perk__heading">Suave y elástica</h3>
        <p className="perk__paragraph">
          La lana tiene una gran elasticidad gracias al elevado número de
          ondulaciones o rizos de sus fibras. Esto hace que las prendas
          recuperen fácilmente su forma, y se adapten como una segunda piel a
          nuestro cuerpo facilitando así nuestro movimiento.
        </p>
      </div>

      <div className="perk">
        <Fire className="perk__icon" />
        <h3 className="perk__heading">Resistencia ignífuga</h3>
        <p className="perk__paragraph">
          La lana no se deteriora con el calor, no se quema, su llama se apaga.
          En un incendio, el fuego avanza lentamente y sus gases no son tóxicos,
          como con las fibras sintéticas. Al trabajarse con tanta fibra, se
          consigue una flexibilidad y resistencia máximas, entre otros al fuego.
        </p>
      </div>
    </div>
  );
};
