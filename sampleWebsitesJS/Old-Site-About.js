// oldSiteAbout.js

// ------------------ Build Page ------------------
const container = document.createElement("div");
container.className = "container";

// ----------- Header -----------
const header = document.createElement("header");
header.className = "header";
header.innerHTML = `<h1>Tony's Auto Repair Shop</h1>`;
container.appendChild(header);

// ----------- Navigation -----------
const nav = document.createElement("nav");
nav.className = "nav";
nav.innerHTML = `
  <a href="Website-Redesign.html">WR Old Website Design</a>
  <a href="Old-Site-About.html">Old About Page</a>
  <a href="Old-Site-Gallery.html">Old Gallery Page</a>
  <a href="Old-Site-Contact.html">Old Contact Page</a>
`;
container.appendChild(nav);

// ----------- Main Content -----------
const main = document.createElement("main");
main.className = "main";

main.innerHTML = `
  <h2>Established | 1978</h2>
  <p>Welcome to Tony's Auto Repair Shop — where quality meets honesty!</p>
  <p>Many of our customers keep coming back because they know good work means a safe ride.</p>
  <p>Come on down and meet our friendly staff — experience service that goes the extra mile, at prices that won’t break the bank!</p>
`;

const imageRow = document.createElement("div");
imageRow.className = "imageRow";

// Add images
const img1 = document.createElement("img");
img1.src = "sampleImages/websiteRedesignImages/old-shop2.jpg";
img1.alt = "Tony working on a car";
img1.className = "image";

const img2 = document.createElement("img");
img2.src = "sampleImages/websiteRedesignImages/old-worker3.jpg";
img2.alt = "Another worker in the shop";
img2.className = "image";

imageRow.appendChild(img1);
imageRow.appendChild(img2);
main.appendChild(imageRow);

// Add remaining paragraphs
const pTony = document.createElement("p");
pTony.textContent = "I’m not just one of the mechanics... I’m Tony, founder and proud owner of Tony's Auto Repair Shop.";
main.appendChild(pTony);

const slogan = document.createElement("p");
slogan.className = "slogan";
slogan.textContent = "“Driven by trust, powered by experience!”";
main.appendChild(slogan);

container.appendChild(main);

// ----------- Footer -----------
const footer = document.createElement("footer");
footer.className = "footer";
footer.textContent = "© 1978 Tony's Auto Repair Shop — All rights reserved.";
container.appendChild(footer);

// ----------- Append to body -----------
document.body.appendChild(container);
