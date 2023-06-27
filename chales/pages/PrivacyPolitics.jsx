import React, { useEffect } from "react";

export const PrivacyPolitics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <article className="politics">
      <section className="politics__container">
        <h1 className="politics__heading">Politicas de privacidad</h1>
        <p className="politics__text">
          Esta Política de privacidad describe cómo se recopila, utiliza y
          comparte su información personal cuando visita o hace una compra en
          https://patagoniainfinity.com (denominado en lo sucesivo el “Sitio”).{" "}
        </p>
        <p className="politics__subtitle">
          INFORMACIÓN PERSONAL QUE RECOPILAMOS
        </p>
        <p className="politics__text">
          Cuando hace una compra o intenta hacer una compra a través del Sitio,
          recopilamos cierta información de usted, entre la que se incluye su
          nombre, dirección de facturación, dirección de envío, información de
          pago incluidos los números de la tarjeta de crédito , dirección de
          correo electrónico y número de teléfono. Nos referimos a esta
          información como “Información del pedido”.
          <br />
          Cuando hablamos de “Información personal” en la presente Política de
          privacidad, nos referimos tanto a la Información del dispositivo como
          a la Información del pedido.
        </p>

        <p className="politics__subtitle">
          ¿CÓMO UTILIZAMOS SU INFORMACIÓN PERSONAL?
        </p>
        <p className="politics__text">
          Usamos la Información del pedido que recopilamos en general para
          preparar los pedidos realizados a través del Sitio (incluido el
          procesamiento de su información de pago, la organización de los envíos
          y la entrega de facturas y/o confirmaciones de pedido). Además,
          utilizamos esta Información del pedido para: comunicarnos con usted;
          examinar nuestros pedidos en busca de fraudes o riesgos potenciales; y
          cuando de acuerdo con las preferencias que usted compartió con
          nosotros, le proporcionamos información o publicidad relacionada con
          nuestros productos o servicios.
        </p>

        <p className="politics__subtitle">COMPARTIR SU INFORMACIÓN PERSONAL</p>
        <p className="politics__text">
          Finalmente, también podemos compartir su Información personal para
          cumplir con las leyes y regulaciones aplicables, para responder a una
          citación, orden de registro u otra solicitud legal de información que
          recibamos, o para proteger nuestros derechos.
        </p>

        <p className="politics__subtitle">SUS DERECHOS</p>
        <p className="politics__text">
          Si usted es un residente europeo, tiene derecho a acceder a la
          información personal que tenemos sobre usted y a solicitar que su
          información personal sea corregida, actualizada o eliminada. Si desea
          ejercer este derecho, comuníquese con nosotros a través de la
          información de contacto que se encuentra a continuación. Además, si
          usted es un residente europeo, tenemos en cuenta que estamos
          procesando su información para cumplir con los contratos que podamos
          tener con usted (por ejemplo, si realiza un pedido a través del Sitio)
          o para perseguir nuestros intereses comerciales legítimos enumerados
          anteriormente. Además, tenga en cuenta que su información se
          transferirá fuera de Europa, incluidos Canadá y los Estados Unidos.
        </p>

        <p className="politics__subtitle">RETENCIÓN DE DATOS</p>
        <p className="politics__text">
          Finalmente, también podemos compartir su Información personal para
          cumplir con las leyes y regulaciones aplicables, para responder a una
          citación, orden de registro u otra solicitud legal de información que
          recibamos, o para proteger nuestros derechos.
        </p>

        <p className="politics__subtitle">CAMBIOS</p>
        <p className="politics__text">
          Podemos actualizar esta política de privacidad periódicamente para
          reflejar, por ejemplo, cambios en nuestras prácticas o por otros
          motivos operativos, legales o reglamentarios.
        </p>

        <p className="politics__subtitle">CONTÁCTENOS</p>
        <p className="politics__text">
          Para obtener más información sobre nuestras prácticas de privacidad,
          si tiene alguna pregunta o si desea presentar una queja, contáctenos
          por correo electrónico a provicomsudamericana@gmail.com o por correo
          mediante el uso de la información que se proporciona a continuación:
          Av. Villajoyosa 10, Piso 2, Puerta 07, Alicante, A, 03016, España
        </p>
      </section>
    </article>
  );
};
