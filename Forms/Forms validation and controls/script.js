let email = document.getElementById("email");
let emailErrorMessage = document.getElementById("email-error");

let zipCode = document.getElementById("zip-code");
let zipCodeErrorMessage = document.querySelector("span.zip-code-error");

let country = document.querySelector("#country");
let countryErrorMessage = document.querySelector(".country-error");

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

function showError(input, message) {
  if (input.validity.valueMissing) {
    message.textContent = `${input.id} is required`;
    message.classList.remove("correct");
    message.classList.add("error");
  } else if (input.validity.typeMismatch) {
    message.textContent = `please write ${input.id} in correct format`;
    message.classList.remove("correct");
    message.classList.add("error");
  } else if (input.validity.patternMismatch) {
    if (input === zipCode) {
      message.textContent = "Invalid zip code format for " + country.value;
      message.classList.remove("correct");
      message.classList.add("error");
    } else {
    }
  }
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
