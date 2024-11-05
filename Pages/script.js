// JavaScript to toggle the sidebar
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.getElementById('sidebar').classList.add('sidebar-open');
});

document.getElementById('closeSidebar').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('sidebar-open');
});
