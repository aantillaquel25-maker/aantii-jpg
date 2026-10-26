const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menú");
      navigation.classList.remove("is-open");
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

//DESPLEGABLE PARA LAS GALERIAS
const galleryDropdown = document.querySelector(".nav-dropdown");
const galleryToggle = document.querySelector(".nav-dropdown-toggle");

if (galleryDropdown && galleryToggle) {
  galleryToggle.addEventListener("click", () => {
    const isOpen = galleryDropdown.classList.toggle("is-open");
    galleryToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (event) => {
    if (!galleryDropdown.contains(event.target)) {
      galleryDropdown.classList.remove("is-open");
      galleryToggle.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      galleryDropdown.classList.remove("is-open");
      galleryToggle.setAttribute("aria-expanded", "false");
      galleryToggle.focus();
    }
  });
}
