(() => {
  const products = {
    "navidad-bonita":"Cajita mujer · Navidad bonita",
    "un-caprichito":"Cajita mujer · Un caprichito",
    "especial-ilusion":"Cajita mujer · Especial ilusión",
    "navidad-especial":"Cajita hombre · Navidad especial",
    "un-detalle-para-el":"Cajita hombre · Un detalle para él",
    "pequena-sorpresa":"Cajita hombre · Pequeña sorpresa",
    "pequena-ilusion":"Cajita niños · Pequeña ilusión",
    "navidad-divertida":"Cajita niños · Navidad divertida",
    "regalo-magico":"Cajita niños · Regalo mágico"
  };
  const form = document.getElementById('request-form');
  const selected = products[new URLSearchParams(location.search).get('producto')];
  if (selected) document.querySelector('[name="producto"]').value = selected;
  form.addEventListener('submit', event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const fields = new FormData(form);
    const subject = `Solicitud de pedido · ${fields.get('producto')}`;
    const body = [
      'Hola, quiero hacer este pedido a Cositas Monas:',
      '',
      `Producto: ${fields.get('producto')}`,
      `Unidades: ${fields.get('unidades')}`,
      '',
      'Mis datos para calcular el precio del envío y gestionar el pedido:',
      'Nombre y apellidos:',
      'Teléfono:',
      'Dirección de envío:',
      'Código postal y localidad:',
      'Correo para responder (si es distinto del remitente):',
      '',
      'Comentario:'
    ].join('\n');
    document.getElementById('status').textContent = 'Completa tus datos en la plantilla del correo y pulsa «Enviar» para hacernos llegar el pedido.';
    window.location.href = `mailto:cositasmonas28@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
})();
