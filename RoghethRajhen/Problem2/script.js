// script.js
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");

    // Clear previous error messages
    usernameError.textContent = "";
    passwordError.textContent = "";

    // Validate username (phone or email)
    const usernameValue = usernameInput.value.trim();
    if (!usernameValue) {
        usernameError.textContent = "Username is required";
        return;
    }

    // Validate username format
    let isPhoneNumber = /^\d{10}$/.test(usernameValue);
    let isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(usernameValue);

    if (!(isPhoneNumber || isEmail)) {
        usernameError.textContent = "Invalid username format";
        return;
    }

    // Validate password
    const passwordValue = passwordInput.value.trim();
    if (!passwordValue) {
        passwordError.textContent = "Password is required";
        return;
    }

    // Password requirements
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    if (!passwordRegex.test(passwordValue)) {
        passwordError.textContent = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character";
        return;
    }

    // Perform login operation
    // This is where you would send the login data to the server for authentication
    console.log("Username:", usernameValue);
    console.log("Password:", passwordValue);
});

const registerLink = document.getElementById("registerLink");
const forgotPasswordLink = document.getElementById("forgotPasswordLink");

registerLink.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "registration.html"; // Redirect to the registration form
});

forgotPasswordLink.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Redirect to forgot password page");
});
