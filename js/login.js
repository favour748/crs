document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents form submission to the server

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Basic validation for empty fields
    if (username === "" || password === "") {
      alert("Please fill in both fields.");
    } else {
      // Assuming validation is successful
      alert("Login successful!");
      // Redirect to dashboard or another page
      window.location.href = "/home-page.html"; // You can replace this with your actual dashboard page
    }
  });

//otp verification
