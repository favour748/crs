document
  .getElementById("otp-verification")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents form submission to the server

    const code = document.getElementById("code").value;

    // Basic validation for empty fields
    if (code === "") {
      alert("Please fill in both fields.");
    } else {
      // Assuming validation is successful
      alert("OTP Verified successful!");
      // Redirect to dashboard or another page
      window.location.href = "/home-page.html"; // You can replace this with your actual dashboard page
    }
  });
