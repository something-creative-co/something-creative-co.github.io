document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('li.menu-toggle');
  const navUl = document.querySelector('nav ul');
  toggle.addEventListener('click', () => {
    navUl.classList.toggle('show-menu');
  });

  const form = document.getElementById('subscribe-form');
  const thankMsg = document.getElementById('thanks-message');

  form.addEventListener('submit', e => {
    e.preventDefault();
    // you could send form data via fetch() here
    form.reset();
    form.classList.add('hidden');
    thankMsg.classList.remove('hidden');
  });
});
