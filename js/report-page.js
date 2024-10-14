// Wait for the document to load
document.addEventListener("DOMContentLoaded", function () {
  // Select the submit button and form inputs
  const submitButton = document.querySelector(".submit-btn");
  const locationInput = document.getElementById("location");
  const descriptionInput = document.getElementById("description");
  const attachmentInput = document.getElementById("attachments");

  // Event listener for the submit button
  submitButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form from submitting automatically

    // Validate the inputs
    const location = locationInput.value.trim();
    const description = descriptionInput.value.trim();

    if (location === "" || description === "") {
      alert("Please fill out all required fields.");
      return;
    }

    // Handle file attachment
    const attachment = attachmentInput.files[0];
    if (attachment) {
      console.log("Attachment uploaded: ", attachment.name);
    }

    // Simulate form submission
    alert("Crime report successfully submitted!");

    // Redirect to another page (e.g., a thank-you page)
    window.location.href = "thank-you.html"; // Replace with your page URL
  });
});
