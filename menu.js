document.addEventListener("DOMContentLoaded", function() {
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('nav_links');

  hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('open');
  });
});
