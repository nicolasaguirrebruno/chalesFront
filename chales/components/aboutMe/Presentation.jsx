import React, { useEffect, useRef, useState } from "react";
import "animate.css";
import { motion } from "framer-motion";
import { usePosition } from "../../../hooks/usePosition";
import { Parallax } from "@react-spring/parallax";

export const Presentation = () => {
  const animationPhoto = useRef();
  const animationPatagonia = useRef();
  const container1 = useRef();
  const container2 = useRef();
  const container3 = useRef();
  const container4 = useRef();

  const [isWomanAnimated, setIsWomanAnimated] = useState(false);

  usePosition(animationPhoto, 200, setIsWomanAnimated);

  const [isPatagoniaAnimated, setIsPatagoniaAnimated] = useState(false);
  usePosition(animationPatagonia, 300, setIsPatagoniaAnimated);

  const [isContainer1, setIsContainer1] = useState(false);
  usePosition(container1, 500, setIsContainer1);

  const [isContainer2, setIsContainer2] = useState(false);
  usePosition(container1, 500, setIsContainer2);

  const [isContainer3, setIsContainer3] = useState(false);
  usePosition(container1, 500, setIsContainer3);
  const [isContainer4, setIsContainer4] = useState(false);
  usePosition(container1, 500, setIsContainer4);

  return (
    <>
      <span ref={animationPhoto}></span>
      <section className="presentation">
        <p className="presentation__heading">Nuestro trabajo</p>

        <div className="presentation__container">
          <p className="presentation__text">
            En Patagonia Infinity{" "}
            <em>
              «entendemos que las maravillas del mundo están hecha a mano»
            </em>{" "}
            y esa es la razón por la que nuestros productos requieren
            necesariamente del amor con que lo hacemos. Creamos productos
            exclusivos y originales para darte algo diferente. Los insumos
            utilizados son  de la mejor calidad,  suaves lanas y finos
            algodones. Este proyecto tiene como objetivo posicionar las fibras
            autóctonas de Latinoamérica, no sólo en el mundo artesanal sino en
            la moda urbana. Trabajamos constantemente en nuestra innovación para
            lograr mejoras en la calidad de las fibras e incorporar diseños que
            acompañen las tendencias en la moda urbana contemporánea.
          </p>
          <motion.img
            className="presentation__img--ourWork"
            src="src/img/img/undraw_Woman_ffrd.png"
            alt=""
            animate={{
              x: isWomanAnimated ? -750 : 0,
              opacity: 1,
              width: isWomanAnimated ? "120%" : "100%",
            }}
            initial={{
              opacity: 0.1,
            }}
            transition={{
              type: "spring",
              duration: 2,
            }}
          />
        </div>
      </section>

      <section ref={animationPatagonia}>
        <motion.img
          animate={{
            y: isPatagoniaAnimated ? 250 : 0,
            opacity: 1,
          }}
          initial={{
            opacity: 0.1,
          }}
          transition={{
            type: "spring",
            duration: 1,
          }}
          className="img"
          src="./public/patagonia fondo.jpg"
          alt=""
        />
      </section>
      <section className="sobreNosotros">
        <img
          className="sobreNosotros__img"
          src="src/img/img/flowers.png"
          alt=""
        />
        <motion.div
          ref={container1}
          animate={{
            x: isContainer1 ? -200 : 0,
            opacity: 1,
          }}
          initial={{
            opacity: 0.1,
          }}
          transition={{
            type: "spring",
            duration: 1,
          }}
          className="sobreNosotros__container"
        >
          <h3 className="sobreNosotros__heading">Nuestra mision</h3>
          <p className="sobreNosotros__paragraph">
            Busco incidir en el rescate y la revalorización de la artesanía como
            forma de expresión y transmisión cultural de nuestros pueblos más
            antiguos. dejo en las manos de consumidores conscientes que desean y
            valoran al objeto artesanal como un articulador de universos.
          </p>
        </motion.div>

        <motion.div
          ref={container2}
          animate={{
            x: isContainer2 ? -200 : 0,
            opacity: 1,
          }}
          initial={{
            opacity: 0.1,
          }}
          transition={{
            type: "spring",
            duration: 1,
            delay: 0.5,
          }}
          className="sobreNosotros__container"
        >
          <h3 className="sobreNosotros__heading">Nuestra vision</h3>
          <p className="sobreNosotros__paragraph">
            La fascinación por la riqueza cultural de la Argentina profunda nos
            guía en la búsqueda de prendas artesanales producida para que se
            aprecie el árte en un tejido. La lana se cura, se lava  para ofrecer
            piezas que son el patrimonio de nuestras culturas originarias.
          </p>
        </motion.div>

        <motion.div
          ref={container3}
          animate={{
            x: isContainer3 ? -200 : 0,
            opacity: 1,
          }}
          initial={{
            opacity: 0.1,
          }}
          transition={{
            type: "spring",
            duration: 1,
            delay: 1,
          }}
          className="sobreNosotros__container"
        >
          <h3 className="sobreNosotros__heading">Nuestros valores</h3>
          <p className="sobreNosotros__paragraph">
            Compromiso con nuestros clientes al ofrecer productos hechos con
            materia prima de calidad y amigable con el medio ambiente
          </p>
        </motion.div>

        <motion.div
          ref={container4}
          animate={{
            x: isContainer4 ? -200 : 0,
            opacity: 1,
          }}
          initial={{
            opacity: 0.1,
          }}
          transition={{
            type: "spring",
            duration: 1,
            delay: 1.5,
          }}
          className="sobreNosotros__container"
        >
          <h3 className="sobreNosotros__heading">Nuestros objetivos</h3>
          <p className="sobreNosotros__paragraph">
            Difundir la cultura y nuestras raíces ancestrales a través de
            creaciones que acaricien el alma de nuestros clientes
          </p>
        </motion.div>
      </section>
    </>
  );
};
