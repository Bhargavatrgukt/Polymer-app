// Selecting elements
const menuToggle = document.querySelector(".menu-toggle");
const slide = document.getElementById("slide");

// Toggle sidebar when menu icon is clicked
menuToggle.addEventListener("click", function(event) {
    event.stopPropagation(); // Prevent the click from propagating to the document
    slide.classList.toggle("open");
});

// Close sidebar when clicking outside of it
document.addEventListener("click", function(event) {
    // Check if the sidebar is open and if the click was outside of it
    if (slide.classList.contains("open") && !slide.contains(event.target) && !menuToggle.contains(event.target)) {
        slide.classList.remove("open");
    }
});
