// mpwBookingPage.js

// ------------------ Helper ------------------
function createEl(tag, className, innerHTML) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (innerHTML) el.innerHTML = innerHTML;
  return el;
}

// ------------------ Container ------------------
const container = createEl("div", "container");

// ------------------ Navigation ------------------
const nav = createEl("nav", "nav");
nav.innerHTML = `
  <h1 class="title"><a href="../index.html" style="color:#cc0000;text-decoration:none;">Retro Photo Shop</a></h1>
  <button class="hamburger" aria-label="Toggle navigation menu">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </button>
`;

const navList = createEl("ul", "navList");
navList.style.display = "none"; // hidden by default
navList.innerHTML = `
  <li><a class="navLink" href="multi-page-website.html">Home</a></li>
  <li><a class="navLink" href="mpw-gallery-page.html">Gallery</a></li>
  <li><a class="navLink" href="mpw-booking-page.html">Booking</a></li>
  <li><a class="navLink" href="mpw-contact-page.html">Contact</a></li>
`;

nav.appendChild(navList);
container.appendChild(nav);

// ------------------ Hamburger Toggle ------------------
let menuOpen = false;
const hamburger = nav.querySelector(".hamburger");

function toggleMenu() {
  menuOpen = !menuOpen;
  navList.style.display = menuOpen ? "block" : "none";
}

hamburger.addEventListener("click", toggleMenu);

// Close menu when a link is clicked
navList.querySelectorAll(".navLink").forEach(link => {
  link.addEventListener("click", () => {
    navList.style.display = "none";
    menuOpen = false;
  });
});

// ------------------ Main Content ------------------
const main = createEl("main");
main.innerHTML = `
  <header class="header">
    <h1 class="pageTitle2">Book Your Photo Session</h1>
    <p>Please Note: The forms on this site are for demonstration purposes only. Contact information in the footer is fictitious. For accurate details, refer to the original website's Landing Page.</p>
    <p class="intro">Choose your preferred date, time, and package below.</p>
    <p class="intro">We look forward to capturing your memories!</p>
  </header>
`;

const section = createEl("section");
const form = createEl("form", "bookingForm");
form.noValidate = true;
form.autocomplete = "off";

form.innerHTML = `
  <label class="formLabel" for="name">Full Name<span style="color:#cc0000">*</span></label>
  <input class="formInput" type="text" id="name" name="name" placeholder="Your full name" required>
  <div class="error" id="error-name"></div>

  <label class="formLabel" for="email">Email Address<span style="color:#cc0000">*</span></label>
  <input class="formInput" type="email" id="email" name="email" placeholder="you@example.com" required>
  <div class="error" id="error-email"></div>

  <label class="formLabel" for="phone">Phone Number</label>
  <input class="formInput" type="tel" id="phone" name="phone" placeholder="(optional)">

  <label class="formLabel" for="date">Preferred Date<span style="color:#cc0000">*</span></label>
  <input class="formInput" type="date" id="date" name="date" required>
  <div class="error" id="error-date"></div>

  <label class="formLabel" for="time">Preferred Time<span style="color:#cc0000">*</span></label>
  <input class="formInput" type="time" id="time" name="time" required>
  <div class="error" id="error-time"></div>

  <label class="formLabel" for="package">Select Package<span style="color:#cc0000">*</span></label>
  <select class="formInput" id="package" name="package" required>
    <option value="" disabled selected>-- Choose a Package --</option>
    <option value="basic">Basic - 30 min session</option>
    <option value="standard">Standard - 1 hour session</option>
    <option value="deluxe">Deluxe - 2 hour session with prints</option>
  </select>
  <div class="error" id="error-package"></div>

  <label class="formLabel" for="notes">Additional Notes</label>
  <textarea class="formInput" id="notes" name="notes" rows="4" placeholder="Any special requests or info"></textarea>

  <button type="submit" class="button" style="margin-top:20px;">Submit Booking</button>
`;

section.appendChild(form);
main.appendChild(section);
container.appendChild(main);

// ------------------ Status Message ------------------
const statusMessage = createEl("div");
statusMessage.style.marginTop = "20px";
container.appendChild(statusMessage);

// ------------------ Form Validation ------------------
const errorsDivs = {
  name: form.querySelector("#error-name"),
  email: form.querySelector("#error-email"),
  date: form.querySelector("#error-date"),
  time: form.querySelector("#error-time"),
  package: form.querySelector("#error-package"),
};

function handleSubmit(event) {
  event.preventDefault();

  Object.values(errorsDivs).forEach(el => (el.textContent = ""));
  statusMessage.textContent = "";

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const date = form.date.value;
  const time = form.time.value;
  const packageVal = form.package.value;
  const notes = form.notes.value.trim();

  let hasError = false;

  if (!name) { errorsDivs.name.textContent = "Full name is required."; hasError = true; }
  if (!email) { errorsDivs.email.textContent = "Email address is required."; hasError = true; }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) { errorsDivs.email.textContent = "Invalid email address."; hasError = true; }
  if (!date) { errorsDivs.date.textContent = "Please select a preferred date."; hasError = true; }
  if (!time) { errorsDivs.time.textContent = "Please select a preferred time."; hasError = true; }
  if (!packageVal) { errorsDivs.package.textContent = "Please select a package."; hasError = true; }

  if (hasError) return;

  const formData = { name, email, phone, date, time, package: packageVal, notes };
  console.log("Booking submitted:", formData);

  statusMessage.textContent = `Thank you for booking with us, ${name}! We will contact you soon.`;
  statusMessage.style.backgroundColor = "#cc0000";
  statusMessage.style.color = "#fff";
  statusMessage.style.padding = "20px";
  statusMessage.style.borderRadius = "8px";
  statusMessage.style.textAlign = "center";
  statusMessage.style.fontWeight = "bold";
  statusMessage.style.fontSize = "1.2rem";

  form.reset();
}

form.addEventListener("submit", handleSubmit);

// ------------------ Footer ------------------
const footer = createEl("footer", "footer");
footer.innerHTML = `
  <p><img src="images/logo.png" alt="Logo"></p>
  <div>&copy; 2025 Retro Photo Shop — All rights reserved.</div>
  <div style="margin-top:1rem;text-align:center;font-size:0.9rem;">
    <h2 style="margin-bottom:0.5rem;">Contact Information</h2>
    <p><strong>Owners:</strong> Steve and Gary</p>
    <p><strong>Phone Number:</strong> (555) 123-4567</p>
    <p><strong>Business Hours:</strong></p>
    <ul style="list-style:none;padding-left:0;margin-bottom:1rem;">
      <li>Monday - Friday: 10:00am to 6:00pm</li>
      <li>Saturday: 11:00am to 3:00pm</li>
      <li>Closed Sunday and Holidays</li>
    </ul>
    <p><strong>Email:</strong> <a href="mailto:contact@retrophotoshop.com" style="color:#ffd700">contact@retrophotoshop.com</a></p>
  </div>
`;
container.appendChild(footer);

// ------------------ Inject into Body ------------------
document.body.appendChild(container);
