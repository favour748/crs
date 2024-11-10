document.addEventListener("DOMContentLoaded", function () {
  const reports = JSON.parse(localStorage.getItem("crimeReports")) || [];
  const userCount = JSON.parse(localStorage.getItem("users")) || [];
  function renderCards() {
    // const userCount = 180; // Example
    document.getElementById("user-count").innerText = userCount.length;
    document.getElementById("crime-count").innerText = reports.length;

    const processingCount = reports.filter(
      (report) => report.status === "Processing"
    ).length;
    document.getElementById("processing-count").innerText = processingCount;

    const solvedCount = reports.filter(
      (report) => report.status === "Solved"
    ).length;
    document.getElementById("solved-count").innerText = solvedCount;
  }

  function renderReportTable() {
    const tableBody = document.getElementById("report-table-body");
    tableBody.innerHTML = "";

    reports.forEach((report) => {
      const row = document.createElement("tr");

      const crimeCell = document.createElement("td");
      crimeCell.textContent = report.crime;

      const locationCell = document.createElement("td");
      locationCell.textContent = report.location;

      const descriptionCell = document.createElement("td");
      descriptionCell.textContent = report.description;

      const dateCell = document.createElement("td");
      dateCell.textContent = new Date(report.timestamp).toLocaleDateString();

      row.appendChild(crimeCell);
      row.appendChild(locationCell);
      row.appendChild(descriptionCell);
      row.appendChild(dateCell);

      tableBody.appendChild(row);
    });
  }

  renderCards();
  renderReportTable();
});

function showSection(section) {
  // Placeholder for navigation functionality
  alert("Navigating to " + section);
}

function logout() {
  localStorage.removeItem("adminSession");
  window.location.href = "home-page.html";
}

// // Utility to get stored reports from localStorage
function getStoredReports() {
  const reports = localStorage.getItem("crimeReports");
  return reports ? JSON.parse(reports) : [];
}

// Function to toggle accordion visibility
function toggleAccordion(event) {
  const card = event.currentTarget;
  card.classList.toggle("open");
  card.classList.toggle("closed");
}

// Function to display reports dynamically
function displayReports() {
  const crimeList = document.getElementById("crime-list");
  crimeList.innerHTML = ""; // Clear any existing reports

  const reports = getStoredReports();
  reports.forEach((report) => {
    const card = document.createElement("div");
    card.classList.add("crime-card", "closed");
    card.addEventListener("click", toggleAccordion);

    card.innerHTML = `
          <div class="crime-header">
              <h2 class="crime-title">${report.crime}</h2>
              <span class="arrow-icon">&#9660;</span>
          </div>
          <div class="crime-content">
              <h4>Description:</h4>
              <p class="description-text"> ${report.description} </p>
                <p class="crime-title">Location: ${report.location}</p>
              <img src="${
                report.attachments
              }" alt="Crime Evidence" class="crime-image">
               <span class="crime-date">${new Date(
                 report.timestamp
               ).toLocaleDateString()}</span>
          </div>
      `;
    crimeList.appendChild(card);
  });
}

// Load and display reports on page load
document.addEventListener("DOMContentLoaded", displayReports);

const imageInput = document.getElementById("imageInput");
const displayImage = document.getElementById("displayImage");

imageInput.addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      displayImage.src = e.target.result; // Display the selected image
    };
    reader.readAsDataURL(file); // Read file as a data URL (base64)
  }
});
