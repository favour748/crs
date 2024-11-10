// Utility to get stored reports from localStorage
function getStoredReports() {
  const reports = localStorage.getItem("crimeReports");
  return reports ? JSON.parse(reports) : [];
}

// Function to toggle card visibility
function toggleCard(event) {
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
    card.addEventListener("click", toggleCard);

    card.innerHTML = `
          <div class="crime-header">
              <h2 class="crime-title">${report.name}</h2>
              <span class="crime-date">${report.date}</span>
              <span class="arrow-icon">&#9660;</span>
          </div>
          <div class="crime-description">${report.description}</div>
      `;
    crimeList.appendChild(card);
  });
}

// Load and display reports on page load
document.addEventListener("DOMContentLoaded", displayReports);
