
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");
const readMoreBtn = document.getElementById("readMoreBtn");
const moreAbout = document.getElementById("moreAbout");
const welcomeMessage = document.getElementById("welcomeMessage");

// Mobile navigation
menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});

// Close menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show");
    });
});

// Dark and light mode
themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    themeToggle.textContent = isDark ? "Light Mode" : "Dark Mode";
});

// Read More / Show Less
readMoreBtn.addEventListener("click", function () {
    moreAbout.classList.toggle("hidden");

    readMoreBtn.textContent = moreAbout.classList.contains("hidden")
        ? "Read More"
        : "Show Less";
});

// Contact button
document.getElementById("contactBtn").addEventListener("click", function () {
    alert("Thank you for visiting my portfolio. Have a lovely day!");
});

// Sample project links
function showProjectMessage(event, projectName) {
    event.preventDefault();

    alert(
        "Add your actual link for " +
        projectName +
        " to open this project."
    );
}

// Welcome message
welcomeMessage.textContent = "Thanks for visiting my portfolio!";

// Automatic copyright year
document.getElementById("year").textContent =
    new Date().getFullYear();

// Current date and time
function updateDateTime() {
    document.getElementById("dateTime").textContent =
        "Current date and time: " + new Date().toLocaleString();
}

updateDateTime();
setInterval(updateDateTime, 1000);

// Back-to-top button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    backToTop.style.display =
        window.scrollY > 300 ? "block" : "none";
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
