(() => {
  const nav = document.querySelector('.nav-links');
  if (nav && !nav.querySelector('[data-cm-request]')) {
    const link = document.createElement('a');
    link.href = 'pedido.html';
    link.textContent = 'Pedir por correo';
    link.dataset.cmRequest = '';
    nav.append(link);
  }
  const groups = document.querySelectorAll('.footer-links');
  const footer = groups[groups.length - 1];
  if (footer && !footer.querySelector('[data-cm-privacy]')) {
    const link = document.createElement('a');
    link.href = 'privacidad.html';
    link.textContent = 'Privacidad';
    link.dataset.cmPrivacy = '';
    footer.append(link);
  }
  const productLink = document.getElementById('contact');
  const slug = new URLSearchParams(location.search).get('id');
  if (productLink && slug) {
    const order = document.createElement('a');
    order.className = 'button';
    order.style.marginLeft = '8px';
    order.href = `pedido.html?producto=${encodeURIComponent(slug)}`;
    order.textContent = 'Solicitar esta cajita';
    productLink.insertAdjacentElement('afterend', order);
  }
})();
