// registration.js
const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const phoneNumberInput = document.getElementById("phoneNumber");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const phoneNumberError = document.getElementById("phoneNumberError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    // Clear previous error messages
    phoneNumberError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    // Validate phone number
    const phoneNumberValue = phoneNumberInput.value.trim();
    if (!phoneNumberValue) {
        phoneNumberError.textContent = "Phone Number is required";
        return;
    }

    if (!/^\d{10}$/.test(phoneNumberValue)) {
        phoneNumberError.textContent = "Phone Number must be exactly 10 digits";
        return;
    }

    // Validate email
    const emailValue = emailInput.value.trim();
    if (!emailValue) {
        emailError.textContent = "Email is required";
        return;
    }

    if (!emailValue.includes("@")) {
        emailError.textContent = "Invalid email format";
        return;
    }

    // Validate password
    const passwordValue = passwordInput.value.trim();
    if (!passwordValue) {
        passwordError.textContent = "Password is required";
        return;
    }

    // Validate password strength
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    if (!passwordRegex.test(passwordValue)) {
        passwordError.textContent = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character";
        return;
    }

    // Validate confirm password
    const confirmPasswordValue = confirmPasswordInput.value.trim();
    if (!confirmPasswordValue) {
        confirmPasswordError.textContent = "Confirm Password is required";
        return;
    }

    if (confirmPasswordValue !== passwordValue) {
        confirmPasswordError.textContent = "Passwords do not match";
        return;
    }

    // Perform registration operation
    // This is where you would send the registration data to the server
    console.log("Phone Number:", phoneNumberValue);
    console.log("Email:", emailValue);
    console.log("Password:", passwordValue);
});
