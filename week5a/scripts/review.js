// Get the current count from local storage, or default to 0 if it doesn't exist yet
let numReviews = Number(window.localStorage.getItem("reviewsCounter")) || 0;

// Add 1 for this new review
numReviews++;

// Save the updated count back to local storage
window.localStorage.setItem("reviewsCounter", numReviews);

// Display the count on the page
document.getElementById("review-counter").textContent = numReviews;

// Footer Dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastmodified").textContent = `Last Modified: ${document.lastModified}`;