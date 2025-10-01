// oldSiteContact.js

// Create the container
const container = document.createElement("div");
container.className = "container";

// Header
const header = document.createElement("header");
header.className = "header";
header.innerHTML = `<h1>Tony's Auto Repair Shop</h1>`;
container.appendChild(header);

// Navigation
const nav = document.createElement("nav");
nav.className = "nav";
nav.innerHTML = `
  <a href="websiteRedesign.html" class="navLink">WR Old Website Design</a>
  <a href="oldSiteAbout.html" class="navLink">Old About Page</a>
  <a href="oldSiteGallery.html" class="navLink">Old Gallery Page</a>
  <a href="oldSiteContact.html" class="navLink">Old Contact Page</a>
`;
container.appendChild(nav);

// Main content
const main = document.createElement("main");
main.className = "main";
main.innerHTML = `
  <h2>Contact Information</h2>
  <p><strong>Contact Person:</strong> Tony Auto</p>
  <p><strong>Contact Number:</strong> (023) 456-7890</p>
  <p><strong>Business Hours:</strong></p>
  <ul class="hoursList">
    <li>Monday - Friday: 8:00am to 5:00pm</li>
    <li>Saturday: 12:00pm to 4:00pm</li>
    <li>Closed Sunday and Holidays</li>
  </ul>
  <p><strong>Email Address:</strong> <a href="mailto:TonyAuto@Example.com">TonyAuto@Example.com</a></p>
  <p class="slogan">“We don't just fix cars—we keep your wheels rollin'!”</p>
`;
container.appendChild(main);

// Footer
const footer = document.createElement("footer");
footer.className = "footer";
footer.innerHTML = "&copy; 1978 Tony's Auto Repair Shop — All rights reserved.";
container.appendChild(footer);

// Inject into body
document.body.appendChild(container);
