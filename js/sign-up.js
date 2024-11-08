document
  .getElementById("signin-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const userType = document.getElementById("reportType").value; // Get selected user type

    if (username === "") {
      alert("Please enter your username.");
      return;
    }

    if (email === "") {
      alert("Please enter your email.");
      return;
    }

    if (password === "") {
      alert("Please enter your password.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.some((user) => user.username === username);
    if (userExists) {
      alert("Username already exists. Please choose a different one.");
      return;
    }

    // Save the user with the selected role
    const newUser = {
      username: username,
      email: email,
      password: password,
      role: userType, // Store user type
    };
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Sign-up successful! Your data has been saved locally.");
    window.location.href = "login.html";
  });
