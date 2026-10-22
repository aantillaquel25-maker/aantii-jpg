(() => {
  const items = Array.from(document.querySelectorAll(".gallery-item"));
  const lightbox = document.querySelector(".lightbox");
  if (!items.length || !lightbox) return;

  const image = lightbox.querySelector(".lightbox-image");
  const counter = lightbox.querySelector(".lightbox-counter");
  const closeButton = lightbox.querySelector(".lightbox-close");
  const prevButton = lightbox.querySelector(".lightbox-prev");
  const nextButton = lightbox.querySelector(".lightbox-next");
  let currentIndex = 0;
  let lastFocused = null;

  function openAt(index) {
    currentIndex = (index + items.length) % items.length;
    const thumb = items[currentIndex].querySelector("img");
    image.src = thumb.dataset.full || thumb.src;
    image.alt = thumb.alt || "";
    counter.textContent = `${String(currentIndex + 1).padStart(2, "0")} / ${String(items.length).padStart(2, "0")}`;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-active");
    closeButton.focus();
  }

  function close() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-active");
    image.removeAttribute("src");
    if (lastFocused) lastFocused.focus();
  }

  items.forEach((item, index) => {
    item.addEventListener("click", () => {
      lastFocused = item;
      openAt(index);
    });
  });

  closeButton.addEventListener("click", close);
  prevButton.addEventListener("click", () => openAt(currentIndex - 1));
  nextButton.addEventListener("click", () => openAt(currentIndex + 1));

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) close();
  });

  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("is-open")) return;
    if (event.key === "Escape") close();
    if (event.key === "ArrowLeft") openAt(currentIndex - 1);
    if (event.key === "ArrowRight") openAt(currentIndex + 1);
  });
})();
