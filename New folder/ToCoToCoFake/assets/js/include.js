async function loadComponent(id, file) {
  const container = document.getElementById(id);
  if (container) {
    try {
      const response = await fetch(file);
      if (!response.ok) throw new Error(`Không tìm thấy file ${file}`);
      const html = await response.text();
      container.innerHTML = html;
    } catch (error) {
      console.error(error);
    }
  }
}

// Khi trang tải xong thì chèn header và footer
window.addEventListener("DOMContentLoaded", () => {
  // Kiểm tra nếu đang ở trong thư mục "pages"
  const basePath = window.location.pathname.includes("/pages/") ? "../" : "";

  loadComponent("header", `${basePath}components/header.html`);
  loadComponent("footer", `${basePath}components/footer.html`);
});

window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
