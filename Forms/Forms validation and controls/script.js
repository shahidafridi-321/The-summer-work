let email = document.getElementById("email");
let emailErrorMessage = document.getElementById("email-error");

let zipCode = document.getElementById("zip-code");
let zipCodeErrorMessage = document.querySelector("span.zip-code-error");

let country = document.querySelector("#country");
let countryErrorMessage = document.querySelector(".country-error");

let password = document.getElementById("password");
let passwordErrorMessage = document.querySelector(".password-error");

let confirmPassword = document.getElementById("confirm-password");
let confirmPasswordErrorMessage = document.querySelector(
  ".confirm-password-error"
);

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
    countryErrorMessage.textContent = "please select country";
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
    zipCodeErrorMessage.textContent = "please select country first";
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
    showError(confirmPassword,confirmPasswordErrorMessage);
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

function showError(input, message) {
  if (input.validity.valueMissing) {
    message.textContent = `${input.id} is required`;
  } else if (input.validity.typeMismatch) {
    message.textContent = `please write ${input.id} in correct format`;
    message.classList.remove("correct");
    message.classList.add("error");
  } else if (input.validity.patternMismatch && input === zipCode) {
    message.textContent = "Invalid zip code format for " + country.value;
  } else if (input.validity.patternMismatch && input === password) {
    message.textContent = `Password should include`;
  } else if (input.validity.tooShort) {
    message.textContent = `The ${input.id} must be atleast ${input.minLength} charaters long`;
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
  let selectedPattern = zipCodePattern[country.value];
  if (selectedPattern) {
    zipCode.setAttribute("pattern", selectedPattern);
  } else {
    zipCode.removeAttribute("pattern");
  }
}

function checksPasswords() {
  if (password.value) {
    confirmPasswordErrorMessage.textContent = "Password did not match";
    confirmPasswordErrorMessage.classList.add("error");
    confirmPasswordErrorMessage.classList.remove("correct");
  }
}
