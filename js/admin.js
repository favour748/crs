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
