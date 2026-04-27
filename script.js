document.addEventListener("DOMContentLoaded", () => {

  // Scroll arrow (solo existe en index)
  const arrow = document.getElementById("scrollArrow");
  if (arrow) {
    arrow.addEventListener("click", () => {
      document.getElementById("work").scrollIntoView({ behavior: "smooth" });
    });
  }

  // Dropdown: hover en desktop, tap en mobile
  const dropdowns = document.querySelectorAll('.nav-dropdown');

  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.nav-dropdown-toggle');

    toggle.addEventListener('click', function () {
      const isOpen = dropdown.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });
  });

  // Cierra al tocar fuera
  document.addEventListener('click', function (e) {
    dropdowns.forEach(dropdown => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
        dropdown.querySelector('.nav-dropdown-toggle').setAttribute('aria-expanded', 'false');
      }
    });
  });

});