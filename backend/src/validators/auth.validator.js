function isValidEmail(email) {
  // check for @
  let at_index = -1,
    at_count = 0;
  for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      at_index = i;
      at_count++;
    }
  }
  if (at_count !== 1 || at_index === 0 || at_index === email.length - 1)
    return false;

  // dots after @
  let dot_count = 0,
    dot_index = 0;
  for (let i = at_index + 1; i < email.length; i++) {
    if (email[i] === ".") {
      dot_count++;
      dot_index = i;
    }
  }
  if (dot_count === 0 || dot_index === email.length - 1) return false;
  return true;
}

function isValidPassword(password) {
  // min len should be 8
  // one upper case && atleast 1 special symbol
  if (password.length < 8) {
    return {
      status: false,
      message: "Minimum 8 characters are required",
    };
  }
  let upperChar = false,
    special = false;

  for (let i = 0; i < password.length; i++) {
    let val = password.charCodeAt(i);
    if (val >= 65 && val <= 90) {
      upperChar = true;
      continue;
    }
    if ((val >= 97 && val <= 122) || (val >= 48 && val <= 57)) continue;
    else {
      special = true;
    }
  }

  if (!upperChar) {
    return {
      status: false,
      message: "Missing UpperCase Letter in Password",
    };
  }
  if (!special) {
    return {
      status: false,
      message: "Missing special Character in Password",
    };
  }
  return { status: true };
}

function ValidateRegister(username, email, password, confirmPassword) {
  if (!username || username.trim() === "")
    return { status: false, message: "Username is required" };
  if (!email) return { status: false, message: "Email is required" };
  if (!password) return { status: false, message: "Password is required" };
  if (!confirmPassword)
    return { status: false, message: "Confirm Password is required" };

  if (!isValidEmail(email)) {
    return {
      status: false,
      message: "Invalid Email Address",
    };
  }

  const validPassword = isValidPassword(password);
  if (validPassword.status === false) {
    return validPassword;
  }

  if (password !== confirmPassword) {
    return {
      status: false,
      message: "Password and confirm password didn't matched.",
    };
  }
  return { status: true };
}

module.exports = { ValidateRegister };
