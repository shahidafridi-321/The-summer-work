let email = document.getElementById("email");
let emailErrorMessage = document.getElementById("email-error");

let zipCode = document.getElementById("zip-code");
let zipCodeErrorMessage = document.querySelector("span.zip-code-error");

email.addEventListener("input", () => {
  if (email.validity.valid) {
    emailErrorMessage.textContent = "correct";
    emailErrorMessage.classList.add("correct");
    emailErrorMessage.classList.remove("error");
  } else {
    showError(email, emailErrorMessage);
  }
});

zipCode.addEventListener("input", () => {
  if (zipCode.validity.valid) {
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
  }
}
