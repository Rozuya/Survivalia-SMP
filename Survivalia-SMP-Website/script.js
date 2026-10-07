document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(open));
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => navLinks.classList.remove("open"));
    });
  }

  const ip = "survivaliasmp.falixsrv.me";
  const toast = document.getElementById("toast");

  async function copyServerIp() {
    try {
      await navigator.clipboard.writeText(ip);
    } catch {
      const area = document.createElement("textarea");
      area.value = ip;
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }

    if (toast) {
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 1800);
    }

    document.querySelectorAll("#copy-label").forEach(label => {
      const old = label.textContent;
      label.textContent = "Copié !";
      setTimeout(() => label.textContent = old, 1800);
    });
  }

  document.querySelectorAll("#copy-ip, #copy-ip-bottom").forEach(btn => {
    btn.addEventListener("click", copyServerIp);
  });
});
