// Inicializa los íconos de Lucide
document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) lucide.createIcons();

  // Menú móvil
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIconOpen = document.getElementById("icon-menu-open");
  const menuIconClose = document.getElementById("icon-menu-close");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      const isHidden = mobileMenu.classList.contains("hidden");
      mobileMenu.classList.toggle("hidden");
      menuIconOpen.classList.toggle("hidden", !isHidden ? false : true);
      menuIconClose.classList.toggle("hidden", isHidden ? false : true);
    });
  }

  // Marca el link activo en la navegación según la página actual
  const currentPage = document.body.dataset.page;
  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    if (link.dataset.navLink === currentPage) {
      link.classList.add("text-blue-600", "border-blue-600");
      link.classList.remove("text-slate-600", "border-transparent");
    }
  });
  document.querySelectorAll("[data-nav-link-mobile]").forEach((link) => {
    if (link.dataset.navLinkMobile === currentPage) {
      link.classList.add("text-blue-600", "bg-blue-50");
      link.classList.remove("text-slate-700");
    }
  });
});
