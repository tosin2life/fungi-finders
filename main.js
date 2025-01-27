const navToggle = document.querySelector('[aria-controls="primary-nav"]');
const primaryNav = document.querySelector("#primary-nav");

navToggle.addEventListener("click", () => {
  const navOpened = navToggle.getAttribute("aria-expanded");
  if (navOpened === "false") {
    navToggle.setAttribute("aria-expanded", "true");
  } else {
    navToggle.setAttribute("aria-expanded", "false");
  }
});
// Add the class of resizing to pause all animation
const resizeObserver = new ResizeObserver((entries) => {
  document.body.classList.add("resizing");

  // remove the class when the animation stops
  requestAnimationFrame(() => {
    document.body.classList.remove("resizing");
  });
});
// We need to tell the observe that it is watching the body
resizeObserver.observe(document.body);
