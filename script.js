const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const burger = document.querySelector(".burger");
const mobileNav = document.getElementById("mobileNav");

function closeMobileNav() {
  if (!mobileNav) return;
  mobileNav.hidden = true;
  burger?.setAttribute("aria-expanded", "false");
}

function toggleMobileNav() {
  if (!mobileNav) return;
  const willOpen = mobileNav.hidden === true;
  mobileNav.hidden = !willOpen;
  burger?.setAttribute("aria-expanded", willOpen ? "true" : "false");
}

burger?.addEventListener("click", toggleMobileNav);

// Fermer menu quand on clique un lien
mobileNav?.addEventListener("click", (e) => {
  const target = e.target;
  if (target && target.tagName === "A") closeMobileNav();
});

// Fermer menu si on agrandit l’écran (retour desktop)
window.addEventListener("resize", () => {
  if (window.innerWidth > 820) closeMobileNav();
});
