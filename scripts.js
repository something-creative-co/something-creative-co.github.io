<script>
  document.addEventListener('DOMContentLoaded', function () {
    const testimonials = document.querySelectorAll('.testimonial');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let index = 0;

    function showTestimonial(i) {
      testimonials.forEach(t => t.classList.remove('active'));
      testimonials[i].classList.add('active');
    }

    prev.addEventListener('click', () => {
      index = (index - 1 + testimonials.length) % testimonials.length;
      showTestimonial(index);
    });

    next.addEventListener('click', () => {
      index = (index + 1) % testimonials.length;
      showTestimonial(index);
    });

    // show first testimonial on load
    showTestimonial(index);
  });
</script>


// Highlight active nav link based on current page
const links = document.querySelectorAll('.nav-link');
const currentPath = window.location.pathname.split('/').pop();

links.forEach(link => {
  if (link.getAttribute('href') === currentPath) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});