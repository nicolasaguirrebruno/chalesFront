import { CaretDown } from "phosphor-react";

import { AccordionItem } from "./subcomponents";

const accordionInfo = [
  {
    number: "01",
    question: "¿Cuánto tiempo se necesita para recibir el pedido?",
    answer: `Tenga en cuenta que este producto es único y de no contar con su
    existencia por ser vendido se podrá solicitar uno similar (no
    igual) y se confeccionará bajo pedido. Permítase de 4-6 semanas la
    entrega del producto desde la confirmación y acreditación de pago
    de dicho pedido. Recibirá confirmación de envío cuando se envíe la
    confirmación de la finalización y terminado de la confección de
    dicho pedido.`,
  },
  {
    number: "02",
    question: "¿Existe otra forma de pago además de la tarjeta de crédito?",
    answer: `Sí, existe otra forma de pago. patagoniainfinity.com le propone pagar su pedido por medio de
    Stripe que ya cuenta con 31 millones de miembros y 42000 sitios Web&#39;s utilizan sus servicios. Para
    abrir una cuenta en Stripe u obtener más información sobre este sistema de pago: www.stripe.com.`,
  },
  {
    number: "03",
    question: "¿Cómo van a entregarme mi pedido?",
    answer: `Patagoniainfinity.com trabaja exclusivamente con el correo clásico
    de españa (por razones tarifarias); pero, bajo solicitud expresa
    información en: info@patagoniainfinity.com, enviamos su pedido por
    Courrier DHL o correo de España.`,
  },
  {
    number: "04",
    question: "¿Puedo seguir mi pedido en la red ?",
    answer: `Si usted solicitó un transporte Express como DHL, Correo de España
    o Fedex, puede seguir su pedido en la red. Patagoniainfinity.com
    le dará todos los datos necesarios para el seguimiento de su
    pedido como el número del paquete, la fecha de envío, etc. a
    través del Código de Seguimiento.`,
  },
];

export const Questions = () => {
  return (
    <section className="questions">
      <div className="accordion">
        <h2 className="heading__secondary heading--accordion">
          Preguntas frecuentes
        </h2>

        {accordionInfo.map((item) => (
          <AccordionItem key={item.number} question={item} />
        ))}
      </div>

      <div className="questions__images">
        <img
          className="questions__pic"
          src="./public/img/question-pic.jpeg"
          alt=""
        />

        <img className="pic--2" src="./public/img/question-pic-2.jpeg" alt="" />
      </div>
    </section>
  );
};
