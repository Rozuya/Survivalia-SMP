document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  const links = document.querySelector(".nav-links");
  if (menu && links) {
    menu.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      menu.setAttribute("aria-expanded", open);
    });
    links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));
  }

  const IP = "survivaliasmp.falixsrv.me";
  const toast = document.getElementById("toast");

  async function copyIP() {
    try {
      await navigator.clipboard.writeText(IP);
    } catch {
      const area = document.createElement("textarea");
      area.value = IP;
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
  }

  document.querySelectorAll("[data-copy-ip]").forEach(button => {
    button.addEventListener("click", copyIP);
  });
});
