const email = document.getElementById("email");
const emailErrorMessage = document.getElementById("email-error");

const zipCode = document.getElementById("zip-code");
const zipCodeErrorMessage = document.querySelector("span.zip-code-error");

const country = document.querySelector("#country");
let countryErrorMessage = document.querySelector(".country-error");

const password = document.getElementById("password");
const passwordErrorMessage = document.querySelector(".password-error");

const confirmPassword = document.getElementById("confirm-password");
const confirmPasswordErrorMessage = document.querySelector(
  ".confirm-password-error"
);

const form = document.querySelector(".browser-form");

email.addEventListener("input", () => {
  if (email.validity.valid) {
    emailErrorMessage.textContent = "correct";
    emailErrorMessage.classList.add("correct");
    emailErrorMessage.classList.remove("error");
  } else {
    showError(email, emailErrorMessage);
  }
});

country.addEventListener("change", () => {
  if (!country.value) {
    countryErrorMessage.textContent = "Please select a country";
    countryErrorMessage.classList.add("error");
    countryErrorMessage.classList.remove("correct");
  } else {
    countryErrorMessage.textContent = "correct";
    countryErrorMessage.classList.add("correct");
    countryErrorMessage.classList.remove("error");
    setZipCodePattern();
    showError(zipCode, zipCodeErrorMessage);
  }
});

zipCode.addEventListener("input", () => {
  if (!country.value) {
    zipCodeErrorMessage.textContent = "Please select a country first";
    zipCodeErrorMessage.classList.add("error");
    zipCodeErrorMessage.classList.remove("correct");
  } else if (zipCode.validity.valid) {
    zipCodeErrorMessage.textContent = "correct";
    zipCodeErrorMessage.classList.add("correct");
    zipCodeErrorMessage.classList.remove("error");
  } else {
    showError(zipCode, zipCodeErrorMessage);
  }
});

password.addEventListener("input", () => {
  if (confirmPassword.value !== password.value) {
    checksPasswords();
  }
  if (password.validity.valid) {
    passwordErrorMessage.textContent = "correct";
    passwordErrorMessage.classList.add("correct");
    passwordErrorMessage.classList.remove("error");
  } else {
    showError(password, passwordErrorMessage);
  }
});

confirmPassword.addEventListener("input", () => {
  if (!password.value) {
    confirmPasswordErrorMessage.textContent = "Please choose a password first";
    confirmPasswordErrorMessage.classList.add("error");
    confirmPasswordErrorMessage.classList.remove("correct");
  } else if (confirmPassword.value !== password.value) {
    checksPasswords();
  } else if (confirmPassword.validity.valid) {
    confirmPasswordErrorMessage.textContent = "correct";
    confirmPasswordErrorMessage.classList.add("correct");
    confirmPasswordErrorMessage.classList.remove("error");
  } else {
    showError(confirmPassword, confirmPasswordErrorMessage);
  }
});

form.addEventListener("submit", (event) => {
  if (
    !email.validity.valid ||
    !country.validity.valid ||
    !zipCode.validity.valid ||
    !password.validity.valid ||
    !confirmPassword.validity.valid
  ) {
    event.preventDefault();
  } else {
    successMessage();
  }
});

function showError(input, message) {
  if (input.validity.valueMissing) {
    message.textContent = `${input.id} is required`;
  } else if (input.validity.typeMismatch) {
    message.textContent = `Please enter a valid ${input.id}`;
  } else if (input.validity.patternMismatch && input === zipCode) {
    message.textContent = `Invalid zip code format for ${country.value}`;
  } else if (input.validity.patternMismatch && input === password) {
    message.textContent = `Password should include uppercase, lowercase, a number, and a special character`;
  } else if (input.validity.tooShort) {
    message.textContent = `The ${input.id} must be at least ${input.minLength} characters long`;
  }
  message.classList.remove("correct");
  message.classList.add("error");
}

function setZipCodePattern() {
  zipCode.removeAttribute("pattern");
  let zipCodePattern = {
    england: "^[A-Z]{1,2}\\d[A-Z\\d]? \\d[A-Z]{2}$", // Example: "W1A 1AA"
    australia: "^\\d{4}$",
    finland: "^\\d{5}$",
    germany: "^\\d{5}$",
  };
  let selectedPattern = zipCodePattern[country.value.toLowerCase()];
  if (selectedPattern) {
    zipCode.setAttribute("pattern", selectedPattern);
  } else {
    zipCode.removeAttribute("pattern");
  }
}

function checksPasswords() {
  if (password.value) {
    confirmPasswordErrorMessage.textContent = "Passwords do not match";
    confirmPasswordErrorMessage.classList.add("error");
    confirmPasswordErrorMessage.classList.remove("correct");
  }
}

function successMessage() {
  const highFive = document.querySelector(".high-five");
  highFive.innerHTML =
    "<p class = 'success-msg'>Form Submitted Successfully</p>";
  highFive.style.display = "flex";
}
