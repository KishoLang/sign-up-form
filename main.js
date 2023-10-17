
// Grab reference to sign up form
const form = document.getElementById("sign-up-form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");

confirmPassword.addEventListener("change", () => {
    if (password.value === confirmPassword.value) {
        confirmPassword.setCustomValidity("");
    } else {
        confirmPassword.setCustomValidity("Not the same password!")
    }
});


// Validate on submit
form.addEventListener("submit", (event) => {
    if (password.value === confirmPassword.value) {
        return true;
    } else {
        event.preventDefault();
        return false;
    }
});