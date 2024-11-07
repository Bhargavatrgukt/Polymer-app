function toggleMenu() {
    const menu = document.querySelector(".ham-items");
    const overlay = document.querySelector(".overlay");
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
}