document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "" || password === "") {
      alert("Please enter your username and password.");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (!user) {
      alert("Invalid username or password.");
      return;
    }

    // Save session info in localStorage (or any other means for session management)
    localStorage.setItem("adminSession", JSON.stringify(user));

    // Check the role and redirect accordingly
    if (user.role === "Admin") {
      window.location.href = "admin.html";
    } else if (user.role === "Reporter") {
      window.location.href = "welcome.html";
    } else if (user.role === "Police") {
      window.location.href = "welcom.html"; // Example page for Police role
    } else {
      alert("User type not recognized.");
    }
  });
