# Solicitudes de pedido por correo

## Qué hace esta versión

- El cliente elige una cajita y las unidades; la web no pide su nombre, correo ni dirección.
- «Preparar correo» abre la aplicación de correo del visitante con un mensaje dirigido a `cositasmonas28@gmail.com`.
- El cliente debe pulsar **Enviar** en su aplicación. La web no manda correos automáticamente y no puede confirmar si el mensaje se envió.
- La solicitud no se guarda en una base de datos, no crea una cuenta y no confirma una compra. Cositas Monas responde para confirmar disponibilidad y precio. No hay pagos online.
- La web no pide dirección postal, teléfono ni datos de pago. Si el visitante envía el correo, su aplicación adjunta la dirección remitente; la conversación por correo sí contiene datos personales y debe tratarse con cuidado.

## Publicación

El proyecto son páginas estáticas. No necesita paquetes, base de datos, claves API, configuración de correo, ni comando de compilación. Se puede alojar en GitHub Pages u otro alojamiento estático. El HTML actual incluye metadatos que apuntan a GitHub Pages, pero la consulta a la API de Pages devolvió 404 y no permitió comprobar el estado de publicación. Antes de publicar, revisa en GitHub la rama y carpeta configuradas en **Settings → Pages**. Prueba los enlaces en una previsualización antes de cambiar el sitio público.

Los enlaces se añaden en el navegador desde `pedido-nav.js`; la página de solicitud y la preparación del correo están en `pedido.html` y `pedido.js`. El destinatario coincide con el correo que ya usa «Contáctanos» en `index.html` y `producto.html`.

## Privacidad y situación de actividad

`privacidad.html` explica que la web solo prepara el asunto y el producto elegido, pero sigue pendiente confirmar la identidad legal de la persona responsable y revisar el proveedor/retención del buzón. El visitante no escribe datos personales dentro de la web; si envía el correo, la dirección remitente se recibe en el buzón.

Esta web solo prepara solicitudes y no procesa pagos. Eso no determina si una actividad de venta habitual requiere altas o trámites. La Seguridad Social indica que el alta de trabajo autónomo depende de realizar una actividad económica por cuenta propia de forma habitual; la AEAT indica que el alta censal se presenta antes de iniciar la actividad u operaciones. Antes de empezar a aceptar ventas, consulta con una gestoría, la Seguridad Social y la AEAT qué corresponde a vuestro caso.

- [Seguridad Social: alta en trabajo autónomo](https://portal.seg-social.gob.es/wps/wcm/connect/importass/importass_contenidos/categorias/altas%2C%2Bbajas%2By%2Bmodificaciones/altas%2By%2Bafiliacion%2Bde%2Btrabajadores/alta_trabajo_autonomo)
- [Agencia Tributaria: plazo para el alta censal](https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/guia-practica-cumplimentacion-modelo-censal-036/capitulo-01-cuestiones-generales/plazos-presentacion/declaracion-alta/alta-censo-empresarios-profesionales-retenedores-036.html)
