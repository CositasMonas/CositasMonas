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
      'Hola, me gustaría consultar este pedido para Cositas Monas:',
      '',
      `Producto: ${fields.get('producto')}`,
      `Unidades: ${fields.get('unidades')}`,
      '',
      '¿Podéis confirmarme disponibilidad y precio respondiendo a este correo?'
    ].join('\n');
    document.getElementById('status').textContent = 'Se abrirá tu aplicación de correo. Recuerda pulsar «Enviar» para hacernos llegar la solicitud.';
    window.location.href = `mailto:cositasmonas28@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
})();
