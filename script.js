function showSection(sectionId) {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    if (section.id === sectionId) {
      section.style.display = "block"; // Show selected section
    } else {
      section.style.display = "none"; // Hide other sections
    }
  });
}
// Add this to your existing script.js file
document.getElementById("mobile-menu").addEventListener("click", function () {
  const navbarLinks = document.getElementById("navbar-links");
  navbarLinks.classList.toggle("active"); // Toggle active class to show/hide links
});

function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => (section.style.display = "none"));

  // Show the selected section
  const selectedSection = document.getElementById(sectionId);
  selectedSection.style.display = "block";

  // Close the mobile menu after selecting a section
  const navbarLinks = document.getElementById("navbar-links");
  if (navbarLinks.classList.contains("active")) {
    navbarLinks.classList.remove("active");
  }
}
