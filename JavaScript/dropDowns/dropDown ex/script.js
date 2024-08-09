const humberger = document.querySelector(".humberger");
const navBar = document.querySelector(".nav-bar");

humberger.addEventListener("click", () => {
  const isExpanded = humberger.getAttribute("aria-expanded") === "true";
  humberger.setAttribute("aria-expanded", !isExpanded);
  navBar.classList.toggle("hidden");
});

document.addEventListener("click", (event) => {
  if (!navBar.contains(event.target) && !humberger.contains(event.target)) {
    navBar.classList.add("hidden");
    humberger.setAttribute("aria-expanded", "false");
  }
});
