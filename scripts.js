document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('subscribe-form')?.addEventListener('submit', e => {
    e.preventDefault();
    e.target.reset();
    document.getElementById('subscribe-form').classList.add('hidden');
    document.getElementById('thanks').classList.remove('hidden');
  });
});

<!-- Swiper JS -->
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
<script>
  const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      768: { slidesPerView: 2 }
    }
  });
</script>