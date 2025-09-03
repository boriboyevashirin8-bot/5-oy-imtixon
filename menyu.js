const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  let menuOchilgan = false;

  menuBtn.addEventListener("click", () => {
    if (menuOchilgan) {
      mobileMenu.style.height = "0px";     // yopiladi
    } else {
      mobileMenu.style.height = "300px";   // ochiladi
    }
    menuOchilgan = !menuOchilgan;          // qiymatni almashtiramiz
  });

const kategoriyaBtn = document.getElementById("kategoriya-btn");
const kategoriyaMenu = document.getElementById("kategoriya-menu");

kategoriyaBtn?.addEventListener("click", () => {
  kategoriyaMenu.classList.toggle("max-h-0");
  kategoriyaMenu.classList.toggle("max-h-96");
});