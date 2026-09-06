const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginError = document.getElementById('login-error');


const ADMIN_EMAIL = "admin@hostelhub.com";
const ADMIN_PASSWORD = "admin123";

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        sessionStorage.setItem('adminLoggedIn', 'true');
        window.location.href = "admin.html"
    }
    else {
        loginError.style.display = "block";
    }
})


