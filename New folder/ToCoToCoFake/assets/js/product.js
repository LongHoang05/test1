const toggleBtn = document.getElementById("toggle-menu");
const menuPanel = document.querySelector(".main__menu");
const icon = toggleBtn.querySelector("i");

toggleBtn.addEventListener("click", () => {
  const isOpen = menuPanel.classList.toggle("show");
  icon.className = isOpen ? "fa-regular fa-circle-xmark" : "fa-solid fa-bars";
});

// Ẩn menu khi click ra ngoài
document.addEventListener("click", (e) => {
  if (!menuPanel.contains(e.target) && !toggleBtn.contains(e.target)) {
    menuPanel.classList.remove("show");
    icon.className = "fa-solid fa-bars";
  }
});

//menu cart
const button = document.getElementById("button"); // Nút mở giỏ hàng
const carttop = document.getElementById("cart-top"); // Khối giỏ hàng
const closeBtn = document.getElementById("close-cart"); // Nút X để đóng

// Khi bấm vào nút mở giỏ hàng
button.addEventListener("click", () => {
  button.classList.toggle("active");
  carttop.classList.toggle("show");
});

// Khi bấm vào nút X để đóng giỏ hàng
closeBtn.addEventListener("click", () => {
  carttop.classList.remove("show");
  button.classList.remove("active"); // (tùy chọn) bỏ trạng thái active nếu cần
});
