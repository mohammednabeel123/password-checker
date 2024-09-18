const InputPassword = document.getElementById("password");
const strengthLevel = document.getElementById("strengthLevel");
const checkButton = document.getElementById("checkButton");
const showButton = document.getElementById("showButton");
const hidepassword = document.getElementById("hidepassword");

checkButton.addEventListener("click", function () {
  let password = InputPassword.value;
  if (password.length >= 8) {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const special = /[^A-Za-z0-9]/.test(password);

    if (hasUpperCase && hasLowerCase && hasNumber && special) {
      strengthLevel.textContent = "Strong";
      strengthLevel.style.color = "green";
    } else if ((hasLowerCase || hasUpperCase) && (hasNumber || special)) {
      strengthLevel.textContent = "Medium";
      strengthLevel.style.color = "orange";
    } else {
      strengthLevel.textContent = "Weak";
      strengthLevel.style.color = "red";
    }
  } else {
    strengthLevel.textContent = "Password must be at least 8 characters long";
    strengthLevel.style.color = "red";
  }
});

// Event listener for "Show Password"
showButton.addEventListener("click", function () {
  InputPassword.type = "text";
  showButton.style.display = "none";
  hidepassword.style.display = "block";
});

// Event listener for "Hide Password"
hidepassword.addEventListener("click", function () {
  InputPassword.type = "password";
  hidepassword.style.display = "none";
  showButton.style.display = "block";
});
