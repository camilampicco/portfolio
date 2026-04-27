document.addEventListener("DOMContentLoaded", () => {
  // Scroll arrow
  const arrow = document.getElementById("scrollArrow");
  arrow.addEventListener("click", () => {
    document.getElementById("work").scrollIntoView({ behavior: "smooth" });
  });

  // Mobile only: toggle on tap (desktop uses CSS :hover)
  const workDropdown = document.getElementById('workDropdown');
  const workToggle   = document.getElementById('workToggle');

  workToggle.addEventListener('click', function (e) {
    if (window.matchMedia('(hover: none)').matches) {
      e.preventDefault();
      const isOpen = workDropdown.classList.toggle('open');
      workToggle.setAttribute('aria-expanded', isOpen);
    }
  });

  document.addEventListener('click', function (e) {
    if (!workDropdown.contains(e.target)) {
      workDropdown.classList.remove('open');
      workToggle.setAttribute('aria-expanded', 'false');
    }
  });
});