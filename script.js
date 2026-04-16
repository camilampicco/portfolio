document.addEventListener("DOMContentLoaded", () => {
  const arrow = document.getElementById("scrollArrow");

  arrow.addEventListener("click", () => {
    document.getElementById("work").scrollIntoView({
      behavior: "smooth"
    });
  });
});