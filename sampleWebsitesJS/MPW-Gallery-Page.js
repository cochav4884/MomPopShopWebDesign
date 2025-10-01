// mpwGalleryPage.js

// Sample image data (replace with your actual image paths)
const retroPhotoImages = [
  { id: 1, src: "images/retro1.jpg", alt: "Retro Photo 1" },
  { id: 2, src: "images/retro2.jpg", alt: "Retro Photo 2" },
];
const photographerImages = [
  { id: 1, src: "images/photographer1.jpg", alt: "Photographer 1", name: "Steve", years: 10, about: "Portrait specialist", experience: 10 },
];
const clientImages = [
  { id: 1, src: "images/client1.jpg", alt: "Client 1" },
];

// Helper to create elements with class
function createEl(tag, className, innerHTML) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (innerHTML) el.innerHTML = innerHTML;
  return el;
}

// Modal logic
let modalOpen = false;
let currentImage = null;

function openModal(image) {
  currentImage = image;
  modalOverlay.style.display = "flex";
  modalImg.src = image.src;
  modalImg.alt = image.alt;
  caption.innerHTML = `<p>${image.alt}</p>`;
  if (image.name) {
    caption.innerHTML += `
      <p><strong>Name:</strong> ${image.name}</p>
      <p><strong>Years Experience:</strong> ${image.years}</p>
      <p><strong>About:</strong> ${image.about}</p>
      <p><strong>Experience:</strong> ${image.experience} years</p>
    `;
  }
}

function closeModal() {
  modalOverlay.style.display = "none";
  currentImage = null;
}

// Container
const container = createEl("div", "container");

// Navigation
const nav = createEl("nav", "nav");
nav.innerHTML = `
  <h1 class="title"><a href="/" style="color:#cc0000;text-decoration:none;">Retro Photo Shop</a></h1>
  <ul class="navList">
    <li><a href="multi-page-website.html">Home</a></li>
    <li><a href="mpw-gallery-page.html">Gallery</a></li>
    <li><a href="mpw-booking-page.html">Booking</a></li>
    <li><a href="mpw-contact-page.html">Contact</a></li>
  </ul>
`;
container.appendChild(nav);

// Main
const main = createEl("main");
main.innerHTML = `
  <header class="header" style="margin-bottom:2rem;">
    <h1 class="pageTitle2">Gallery</h1>
    <p>Please Note: The forms presented on this site are for demonstration purposes only, and the contact information shown in the footer is fictitious...</p>
    <p class="intro">Explore our collection of vintage-inspired photos and portraits.</p>
  </header>
`;
container.appendChild(main);

// Function to create gallery sections
function createGallerySection(title, images) {
  const section = createEl("section", "gallerySection");
  section.innerHTML = `<h3 class="sectionTitle">${title}</h3>`;
  const grid = createEl("div", "galleryGrid");

  images.forEach((img) => {
    const box = createEl("div", "imageBox");
    const imageEl = createEl("img", "galleryImage");
    imageEl.src = img.src;
    imageEl.alt = img.alt;

    box.appendChild(imageEl);
    box.tabIndex = 0;
    box.setAttribute("role", "button");
    box.setAttribute("aria-label", `View larger image: ${img.alt}`);
    box.addEventListener("click", () => openModal(img));
    box.addEventListener("keydown", (e) => { if (e.key === "Enter") openModal(img); });

    grid.appendChild(box);
  });

  section.appendChild(grid);
  main.appendChild(section);
}

// Create gallery sections
createGallerySection("Photographers", photographerImages);
createGallerySection("Colored Photos", retroPhotoImages);
createGallerySection("Black/White & Specialty Photos", clientImages);

// Modal
const modalOverlay = createEl("div", "modalOverlay");
modalOverlay.style.display = "none";
modalOverlay.addEventListener("click", closeModal);

const modalContent = createEl("div", "modalContent");
modalContent.addEventListener("click", (e) => e.stopPropagation());

const modalImg = createEl("img", "enlargedImage");
const caption = createEl("div", "caption");
const closeBtn = createEl("button", "button", "Close");
closeBtn.addEventListener("click", closeModal);

modalContent.appendChild(modalImg);
modalContent.appendChild(caption);
modalContent.appendChild(closeBtn);
modalOverlay.appendChild(modalContent);
container.appendChild(modalOverlay);

// Footer
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

// Inject container into body
document.body.appendChild(container);
