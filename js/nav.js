const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggle.querySelector('i').classList.toggle('fa-bars');
    navToggle.querySelector('i').classList.toggle('fa-xmark');
});

const adminNavLink = document.getElementById("admin-nav-link");

if (sessionStorage.getItem("adminLoggedIn") === "true") {
    adminNavLink.textContent = "Logout";
    adminNavLink.addEventListener("click", (event) => {
        event.preventDefault();
        const confirmLogout = confirm("Are you sure you want to logout?");
        if (confirmLogout) {
            sessionStorage.removeItem("adminLoggedIn");
            window.location.href = "admin-login.html";
        }
    });

} 