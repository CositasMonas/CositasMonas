(() => {
  const nav = document.querySelector('.nav-links');
  if (nav && !nav.querySelector('[data-cm-request]')) {
    const link = document.createElement('a');
    link.href = 'pedido.html';
    link.textContent = 'Pedir por correo';
    link.dataset.cmRequest = '';
    nav.append(link);
  }
  const contactSection = document.getElementById('contacto');
  if (contactSection && !document.getElementById('resenas')) {
    const style = document.createElement('style');
    style.textContent = '.cm-reviews{padding:64px 22px;background:#fff8ee;color:#49342b}.cm-reviews-inner{max-width:1100px;margin:auto}.cm-reviews-head{text-align:center;margin:0 auto 28px;max-width:700px}.cm-reviews-head .eyebrow{color:#b95e69;font-size:11px;letter-spacing:2px;text-transform:uppercase}.cm-reviews-head h2{font:400 clamp(32px,4vw,44px) Georgia,serif;color:#563022;margin:8px 0}.cm-reviews-head p{font-size:13px;color:#766e65}.cm-review-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:16px}.cm-review{background:#fffefa;border:1px solid #eadfd3;border-radius:14px;padding:20px}.cm-review-stars{color:#b95e69;letter-spacing:2px}.cm-review-name{font-weight:700;color:#563022;margin:8px 0}.cm-review-text{font-size:14px;color:#766e65;white-space:pre-wrap}.cm-review-empty{text-align:center;background:#fffefa;border:1px solid #eadfd3;border-radius:14px;padding:25px;color:#766e65}.cm-review-cta{display:block;width:max-content;margin:22px auto 0;padding:12px 18px;border-radius:24px;background:#b95e69;color:#fff;font-size:12px;font-weight:700;letter-spacing:.4px;text-transform:uppercase}@media(max-width:560px){.cm-reviews{padding:48px 16px}}';
    document.head.append(style);
    const section = document.createElement('section');
    section.id = 'resenas'; section.className = 'cm-reviews';
    const inner = document.createElement('div'); inner.className = 'cm-reviews-inner';
    const head = document.createElement('div'); head.className = 'cm-reviews-head';
    const eyebrow = document.createElement('div'); eyebrow.className = 'eyebrow'; eyebrow.textContent = 'Experiencias reales';
    const title = document.createElement('h2'); title.textContent = 'Reseñas de nuestras clientas y clientes';
    const description = document.createElement('p'); description.textContent = 'Cada reseña se revisa antes de publicarse.';
    head.append(eyebrow, title, description);
    const list = document.createElement('div'); list.className = 'cm-review-list';
    const reviews = Array.isArray(window.COSITAS_MONAS_REVIEWS) ? window.COSITAS_MONAS_REVIEWS : [];
    if (!reviews.length) {
      const empty = document.createElement('div'); empty.className = 'cm-review-empty';
      empty.textContent = 'Todavía no hay reseñas aprobadas. Si ya has recibido tu pedido, puedes enviarnos la tuya.';
      list.append(empty);
    }
    reviews.forEach(review => {
      const card = document.createElement('article'); card.className = 'cm-review';
      const stars = Math.max(1, Math.min(5, Number(review.rating) || 0));
      const rating = document.createElement('div'); rating.className = 'cm-review-stars'; rating.setAttribute('aria-label', `${stars} de 5 estrellas`); rating.textContent = '★'.repeat(stars) + '☆'.repeat(5-stars);
      const name = document.createElement('div'); name.className = 'cm-review-name'; name.textContent = review.name || 'Cliente';
      const quote = document.createElement('div'); quote.className = 'cm-review-text'; quote.textContent = review.text || '';
      card.append(rating, name, quote); list.append(card);
    });
    const cta = document.createElement('a'); cta.href = 'resena.html'; cta.className = 'cm-review-cta'; cta.textContent = 'Enviar una reseña';
    inner.append(head, list, cta); section.append(inner); contactSection.insertAdjacentElement('beforebegin', section);
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
  if (nav && !nav.querySelector('[data-cm-reviews]')) {
    const link = document.createElement('a'); link.href = 'index.html#resenas'; link.textContent = 'Reseñas'; link.dataset.cmReviews = ''; nav.append(link);
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
