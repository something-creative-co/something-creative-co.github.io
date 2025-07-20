document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('subscribe-form')?.addEventListener('submit', e => {
    e.preventDefault();
    e.target.reset();
    document.getElementById('subscribe-form').classList.add('hidden');
    document.getElementById('thanks').classList.remove('hidden');
  });
});

// Toggle mobile menu
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
    hamburger.setAttribute('aria-expanded', !expanded);
    if (mobileMenu.hasAttribute('hidden')) {
      mobileMenu.removeAttribute('hidden');
    } else {
      mobileMenu.setAttribute('hidden', '');
    }
  });
});
