// mpwContactPage.js

// ---- Menu toggle ----
let menuOpen = false;
function toggleMenu() {
  menuOpen = !menuOpen;
  navList.style.display = menuOpen ? "block" : "none";
}

// ---- Form submission ----
function handleSubmit(event) {
  event.preventDefault();
  statusMessage.textContent = "";
  statusMessage.style.color = "";

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    statusMessage.textContent = "Please fill in all required fields.";
    statusMessage.style.color = "red";
    return;
  }

  const formData = {
    name: name,
    email: email,
    phone: form.phone.value.trim(),
    subject: form.subject.value.trim(),
    message: message,
  };

  console.log("Contact form submitted:", formData);
  alert("Message submitted! Check the console for details.");

  statusMessage.textContent = "Thank you for your message! We'll get back to you shortly.";
  statusMessage.style.color = "green";
  form.reset();
}

// ---- Create DOM elements ----
const container = document.createElement("div");
container.className = "container";

// Navigation
const nav = document.createElement("nav");
nav.className = "nav";

nav.innerHTML = `
  <h1 class="title"><a href="/" style="color:#cc0000;text-decoration:none;">Retro Photo Shop</a></h1>
  <button class="hamburger" aria-label="Toggle navigation menu">☰</button>
`;

const navList = document.createElement("ul");
navList.className = "navList";
navList.innerHTML = `
  <li><a href="multi-page-website.html">Home</a></li>
  <li><a href="mpw-gallery-page.html">Gallery</a></li>
  <li><a href="mpw-booking-page.html">Booking</a></li>
  <li><a href="mpw-contact-page.html">Contact</a></li>
`;

nav.appendChild(navList);
container.appendChild(nav);

// Hamburger toggle
const hamburger = nav.querySelector(".hamburger");
hamburger.addEventListener("click", toggleMenu);

// Main
const main = document.createElement("main");

main.innerHTML = `
  <header class="header" style="margin-bottom:2rem;">
    <h1>Contact Us</h1>
    <p>Please Note: The forms presented on this site are for demonstration purposes only, and the contact information shown in the footer is fictitious and intended solely for illustrative use. For accurate and current contact details, please refer to the original website's Landing Page. You may return to that page at any time by clicking the site title in the navigation bar. Once in the official website, you will find a link to the official Contact Me page at: www.mompopshopwebdesign.com.</p>
    <p class="intro">Got a question or comment? Reach out and we'll get back to you soon!</p>
  </header>
`;

const section = document.createElement("section");

const form = document.createElement("form");
form.className = "contactForm";
form.noValidate = true;

// Form fields
form.innerHTML = `
  <label for="name" class="formLabel">Name:</label>
  <input type="text" id="name" name="name" class="formInput" placeholder="Your Name" required>
  
  <label for="email" class="formLabel">Email:</label>
  <input type="email" id="email" name="email" class="formInput" placeholder="you@example.com" required>
  
  <label for="phone" class="formLabel">Phone:</label>
  <input type="tel" id="phone" name="phone" class="formInput" placeholder="(optional) Your Phone Number">
  
  <label for="subject" class="formLabel">Subject:</label>
  <input type="text" id="subject" name="subject" class="formInput" placeholder="Subject (optional)">
  
  <label for="message" class="formLabel">Message:</label>
  <textarea id="message" name="message" class="formInput" placeholder="Write your message here..." required></textarea>
  
  <button type="submit" class="button">Send Message</button>
  <p id="statusMessage" style="margin-top:1rem;"></p>
`;

form.addEventListener("submit", handleSubmit);

section.appendChild(form);
main.appendChild(section);
container.appendChild(main);

// Footer
const footer = document.createElement("footer");
footer.className = "footer";

footer.innerHTML = `
  <p><img src="images/logo.png" alt="Logo"></p>
  <div>&copy; 2025 Retro Photo Shop — All rights reserved.</div>
  <div style="margin-top:1rem;text-align:center;font-size:0.9rem;">
    <h2 style="margin-bottom:0.5rem;">Contact Information</h2>
    <p><strong>Owners:</strong> Steve and Gary</p>
    <p><strong>Phone Number:</strong> (555) 123-4567</p>
    <p><strong>Business Hours:</strong></p>
    <ul style="list-style-type:none;padding-left:0;margin-bottom:1rem;">
      <li>Monday - Friday: 10:00am to 6:00pm</li>
      <li>Saturday: 11:00am to 3:00pm</li>
      <li>Closed Sunday and Holidays</li>
    </ul>
    <p><strong>Email:</strong> <a href="mailto:contact@retrophotoshop.com" style="color:#cc0000">contact@retrophotoshop.com</a></p>
  </div>
`;

container.appendChild(footer);

// Inject container into body
document.body.appendChild(container);

const statusMessage = document.getElementById("statusMessage");
const formElement = document.querySelector(".contactForm");