document
  .getElementById("signin-form")
  .addEventListener("submit", function (event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get the form fields
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Simple validation checks
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

    // If validation passes, redirect to another page
    alert("Sign-up successful!");

    // Redirect to a welcome page or any other page
    window.location.href = "welcome.html"; // Replace with the actual page
  });
