// header.js
document.addEventListener("DOMContentLoaded", function() {
    // Fetch and insert header
    fetch("header.html")
      .then(response => response.text())
      .then(html => {
        document.getElementById("header-container").innerHTML = html;
      });
  });