// Wait for the document to load
document.addEventListener("DOMContentLoaded", function () {
  // Select the submit button and form inputs
  const submitButton = document.querySelector(".submit-btn");
  const crimeInput = document.getElementById("crime");
  const locationInput = document.getElementById("location");
  const descriptionInput = document.getElementById("description");
  const attachmentInput = document.getElementById("attachments");

  // Event listener for the submit button
  submitButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form from submitting automatically

    // Validate the inputs
    const crime = crimeInput.value.trim();
    const location = locationInput.value.trim();
    const description = descriptionInput.value.trim();

    if (crime === "" || location === "" || description === "") {
      alert("Please fill out all required fields.");
      return;
    }

    // Handle file attachment
    let attachmentName = null;
    if (attachmentInput.files.length > 0) {
      attachmentName = attachmentInput.files[0].name;
    }

    // Create a crime report object
    const crimeReport = {
      crime: crime,
      location: location,
      description: description,
      attachment: attachmentName,
      timestamp: new Date().toISOString(), // Adds a timestamp for tracking
    };

    // Retrieve existing reports from localStorage, or initialize an empty array
    const reports = JSON.parse(localStorage.getItem("crimeReports")) || [];

    // Add the new report to the array
    reports.push(crimeReport);

    // Save the updated reports array back to localStorage
    localStorage.setItem("crimeReports", JSON.stringify(reports));

    // Notify the user of successful submission
    alert("Crime report successfully submitted!");

    // Optional: Clear the form fields
    crimeInput.value = "";
    locationInput.value = "";
    descriptionInput.value = "";
    attachmentInput.value = "";
  });
});
