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
