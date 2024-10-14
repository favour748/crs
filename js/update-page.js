const locationDisplay = document.getElementById("location-display");
const statusDisplay = document.getElementById("status-display");
const lastUpdatedDisplay = document.getElementById("last-updated");
const refreshBtn = document.getElementById("refresh-btn");

// Example API endpoint for updates
const API_URL = "https://jsonplaceholder.typicode.com/posts/1"; // Replace with real API

// Function to fetch data from the server
async function fetchUpdates() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    // Simulating data for location and status
    const location = data.title || "Unknown Location";
    const status = "Reported"; // This can come from your backend

    // Update the UI with the fetched data
    locationDisplay.textContent = `Location: ${location}`;
    statusDisplay.textContent = `Status: ${status}`;
    lastUpdatedDisplay.textContent = new Date().toLocaleTimeString();
  } catch (error) {
    console.error("Error fetching updates:", error);
    statusDisplay.textContent = "Failed to fetch updates";
  }
}

// Refresh button click event
refreshBtn.addEventListener("click", fetchUpdates);

// Automatically refresh every 10 seconds
setInterval(fetchUpdates, 10000);

// Initial fetch when the page loads
fetchUpdates();
