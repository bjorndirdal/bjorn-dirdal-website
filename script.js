const currentPage = (() => {
  const path = window.location.pathname.split("/").pop();
  return path || "index.html";
})();

document.querySelectorAll(".site-nav a").forEach((link) => {
  const target = link.getAttribute("href").replace("./", "");
  if (target === currentPage) {
    link.classList.add("is-active");
  }
});

const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");

if (header && navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".site-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const cards = [...document.querySelectorAll(".argument-card")];
const panels = [...document.querySelectorAll(".argument-panel")];

const inlineImages = window.__inlineImages || {};

document.querySelectorAll("[data-inline-image]").forEach((image) => {
  const key = image.dataset.inlineImage;
  const chunks = inlineImages[key];

  if (!chunks || image.getAttribute("src")) {
    return;
  }

  image.src = `data:image/jpeg;base64,${chunks.join("")}`;
});

if (cards.length && panels.length) {
  const activate = (key) => {
    cards.forEach((card) => {
      card.classList.toggle("is-active", card.dataset.argument === key);
    });

    panels.forEach((panel) => {
      panel.classList.toggle("is-active", panel.dataset.panel === key);
    });
  };

  cards.forEach((card) => {
    card.addEventListener("click", () => activate(card.dataset.argument));
  });

  activate(cards[0].dataset.argument);
}
