const form = document.getElementById("registration-form");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password-confirm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const requiredValid = checkRequired([username, email, password, password2]);

  let formValid = requiredValid;

  if (requiredValid) {
    const usernameValid = checkLength(username, 3, 15);
    const emailValid = checkEmail(email);
    const passwordValid = checkLength(password, 6, 25);
    const passwordMatch = checkPasswordsMatch(password, password2);

    formValid = usernameValid && emailValid && passwordValid && passwordMatch;
  }

  if (formValid) {
    alert("Form submitted successfully!");

    form.reset();

    document.querySelectorAll(".form-group").forEach(function (group) {
      group.className = "form-group";
    });
  }
});

// Required validation
function checkRequired(inputs) {
  let valid = true;

  inputs.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${formatName(input)} is required`);

      valid = false;
    } else {
      showSuccess(input);
    }
  });

  return valid;
}

// Format field names
function formatName(input) {
  return input.id
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Show error
function showError(input, message) {
  const group = input.parentElement;

  group.className = "form-group error";

  const small = group.querySelector("small");

  small.innerText = message;
}

// Show success
function showSuccess(input) {
  const group = input.parentElement;

  group.className = "form-group success";

  const small = group.querySelector("small");

  small.innerText = "";
}

// Length check
function checkLength(input, min, max) {
  const length = input.value.trim().length;

  if (length < min) {
    showError(input, `${formatName(input)} must be at least ${min} characters`);

    return false;
  }

  if (length > max) {
    showError(
      input,
      `${formatName(input)} must be less than ${max} characters`,
    );

    return false;
  }

  showSuccess(input);
  return true;
}

// Email validation
function checkEmail(input) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(input.value.trim())) {
    showSuccess(input);
    return true;
  } else {
    showError(input, "Email is not valid");
    return false;
  }
}

// Password match
function checkPasswordsMatch(password, password2) {
  if (password.value !== password2.value) {
    showError(password2, "Passwords do not match");

    return false;
  }

  showSuccess(password2);
  return true;
}
