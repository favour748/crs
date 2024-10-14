// Select DOM elements
const profilePic = document.getElementById("profile-pic");
const uploadImage = document.getElementById("upload-image");
const exitBtn = document.getElementById("exit-btn");

// Event listener for image upload
uploadImage.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      profilePic.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Exit button logic
exitBtn.addEventListener("click", () => {
  const confirmExit = confirm("Are you sure you want to exit the page?");
  if (confirmExit) {
    window.location.href = "report-page.html"; // Change to your landing page
  }
});

// Handle form submission
const profileForm = document.getElementById("profile-form");
profileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Profile saved successfully!");
  profileForm.reset(); // Clear the form after submission
  profilePic.src = "default-avatar.png"; // Reset profile pic
});
