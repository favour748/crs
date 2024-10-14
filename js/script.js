// JavaScript for handling the Start button click
document.getElementById("startButton").addEventListener("click", function () {
  // Redirect to the report crime page (you can change this URL)
  window.location.href = "login.html";
});

// login
// JavaScript for handling login form submission
// JavaScript to handle login form submission and validation

//sign-in
// JavaScript for sign-up form validation
document
  .getElementById("forget-password")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents form submission to the server

    const username = document.getElementById("username").value;

    // Basic validation for empty fields
    if (username === "") {
      alert("Please fill in both fields.");
    } else {
      // Assuming validation is successful
      alert("OTP code has been sent successful!");
      // Redirect to dashboard or another page
      window.location.href = "/otp-verification.html"; // You can replace this with your actual dashboard page
    }
  });
