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
