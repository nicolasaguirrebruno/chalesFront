import React, { useEffect } from "react";

export const Refounds = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <article className="politics">
      <section className="politics__container">
        <h1 className="politics__heading">DEVOLUCIONES</h1>
        <p className="politics__text">
          Nuestra política dura 30 días. Si pasaron 30 días desde su compra,
          desafortunadamente no podemos ofrecerle un reembolso ni un cambio.{" "}
          <br />
          Para ser elegible para una devolución, su artículo debe estar sin usar
          y en la misma condición en que lo recibió. También debe estar en el
          embalaje original. <br />
          Elementos adicionales que no se pueden devolver: <br />
          * Tarjetas de regalo <br />
          Productos de software descargables <br />
          * Algunos artículos de salud y cuidado personal <br />
          Para completar su devolución, necesitamos un recibo o comprobante de
          compra. No devuelva su compra al fabricante. <br />
          Hay ciertas situaciones en las que solo se otorgan reembolsos
          parciales: (si corresponde) <br />
          * Libro con signos evidentes de uso <br />
          * CD, DVD, cinta VHS, software, videojuego, cinta de cassette o disco
          de vinilo que fue abierto. <br />
          * Cualquier artículo que no se encuentre en su estado original, esté
          dañado o le falten piezas <br />
          por razones que no se deban a nuestro error. <br />* Cualquier
          artículo devuelto más de 30 días después de la entrega. <br />
        </p>
        <p className="politics__subtitle">REEMBOLSOS</p>
        <p className="politics__text">
          Una vez recibida e inspeccionada su devolución, le enviaremos un
          correo electrónico para notificarle que recibimos el artículo que
          devolvió. También le notificaremos sobre la aprobación o el rechazo de
          su reembolso. <br />
          Si se aprueba, se procesará su reembolso y se aplicará un crédito
          automáticamente en su tarjeta de crédito o método de pago original,
          dentro de una cierta cantidad de días.
        </p>

        <p className="politics__subtitle">Reembolsos tardíos o faltantes</p>
        <p className="politics__text">
          Si aún no recibió un reembolso, primero revise de nuevo su cuenta
          bancaria. Luego, comuníquese con la empresa de su tarjeta de crédito.
          Puede demorar algún tiempo antes de que su reembolso se vea reflejado
          de manera oficial. <br />
          Después, contacte a su banco. A menudo es necesario un tiempo de
          procesamiento antes de poder ver reflejado un reembolso. <br />
          Si ya hizo todo lo anterior y aún no recibió su reembolso, puede
          contactarnos escribiendo a provicomsudamericana@gmail.com.
        </p>

        <p className="politics__subtitle">
          Artículos en oferta (si corresponde)
        </p>
        <p className="politics__text">
          Solo se pueden reembolsar los artículos de precio normal.
          Lamentablemente, no se pueden reembolsar los artículos en oferta.
        </p>

        <p className="politics__subtitle">Cambios</p>
        <p className="politics__text">
          Solo reemplazamos los artículos si están defectuosos o dañados. Si
          necesita cambiarlo por el mismo artículo, envíenos un correo
          electrónico a provicomsudamericana@gmail.com y envíe su artículo a:
          Av. Villajoyosa 10, Piso 2, Puerta 07, Alicante, A, 03016, España.
        </p>

        <p className="politics__subtitle">Regalos</p>
        <p className="politics__text">
          Si el artículo estaba marcado como regalo cuando se compró y se lo
          enviamos directamente a usted, recibirá un crédito de regalo por el
          valor de su devolución. Una vez que recibamos el artículo devuelto, se
          le enviará un certificado de regalo por correo. <br />
          Si el artículo no estaba marcado como regalo cuando se compró, o si la
          persona que hizo el regalo decidió que le enviaran el pedido para
          luego dárselo a usted, le enviaremos un reembolso a la persona que
          hizo el regalo y se enterará de su devolución.
        </p>

        <p className="politics__subtitle">Envío</p>
        <p className="politics__text">
          Para devolver su producto, debe enviarlo por correo a: Av. Villajoyosa
          10, Piso 2, Puerta 07, Alicante, A, 03016, España. <br />
          Los costos de envío para devolver su artículo corren por su cuenta.
          Los costos de envío no son reembolsables. Si recibe un reembolso, el
          costo de envío de la devolución se deducirá de su reembolso. <br />
          Según dónde viva, el tiempo que tome recibir el cambio de su producto
          puede variar. <br />
          Si envía un artículo de más de $75, se recomienda usar un servicio de
          envío con seguimiento o comprar un seguro de envío. No garantizamos
          que recibiremos la devolución de su artículo.
        </p>
      </section>
    </article>
  );
};
