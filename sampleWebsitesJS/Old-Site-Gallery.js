// Create container
const container = document.createElement("div");
container.className = "container my-5";

// Header
const header = document.createElement("header");
header.className = "text-center mb-5";
header.innerHTML = `<h1>Tony's Auto Repair Shop</h1>`;
container.appendChild(header);

// Navigation
const nav = document.createElement("nav");
nav.className = "text-center mb-5";
nav.innerHTML = `
  <a href="websiteRedesign.html" class="nav-link">WR Old Website Design</a>
  <a href="oldSiteAbout.html" class="nav-link">Old About Page</a>
  <a href="oldSiteGallery.html" class="nav-link">Old Gallery Page</a>
  <a href="oldSiteContact.html" class="nav-link">Old Contact Page</a>
`;
container.appendChild(nav);

// Team Section
const teamSection = document.createElement("section");
teamSection.className = "mb-5";
teamSection.innerHTML = `
  <h2 class="text-center">Meet Our Team</h2>
  <p class="text-center slogan">“Serving Trust, One Car at a Time — Since '78!”</p>
  <div class="row justify-content-center g-4">
    <div class="col-md-4 flip-card" tabindex="0">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="sampleImages/websiteRedesignImages/old-worker4.jpg" alt="Tony Auto" class="flipCardImage"/>
          <h3>Tony Auto</h3>
          <p>Senior Mechanic</p>
        </div>
        <div class="flip-card-back">
          <p>Tony has over 20 years experience specializing in engine repair and diagnostics.</p>
        </div>
      </div>
    </div>
    <div class="col-md-4 flip-card" tabindex="0">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="sampleImages/websiteRedesignImages/auto-contract3.jpg" alt="Mary Smith" class="flipCardImage"/>
          <h3>Mary Smith</h3>
          <p>Service Advisor</p>
        </div>
        <div class="flip-card-back">
          <p>Mary coordinates customer service and scheduling with a friendly approach.</p>
        </div>
      </div>
    </div>
    <div class="col-md-4 flip-card" tabindex="0">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="sampleImages/websiteRedesignImages/auto-discuss.jpg" alt="David Lee" class="flipCardImage"/>
          <h3>David Lee</h3>
          <p>Brake Specialist</p>
        </div>
        <div class="flip-card-back">
          <p>Expert in brake repair and safety inspections with over 10 years experience.</p>
        </div>
      </div>
    </div>
  </div>
`;
container.appendChild(teamSection);

// Work Gallery Section
const gallerySection = document.createElement("section");
gallerySection.className = "mb-5";
gallerySection.innerHTML = `
  <h2>Work in Progress</h2>
  <div class="row g-4">
    <div class="col-md-3 workItem">
      <img src="sampleImages/websiteRedesignImages/new-worker6.jpg" alt="Car Engine Repair"/>
      <div class="caption">Car Engine Repair</div>
    </div>
    <div class="col-md-3 workItem">
      <img src="sampleImages/websiteRedesignImages/new-worker2.jpg" alt="Brake Replacement"/>
      <div class="caption">Brake Replacement</div>
    </div>
    <div class="col-md-3 workItem">
      <img src="sampleImages/websiteRedesignImages/old-worker2.jpg" alt="Oil Change"/>
      <div class="caption">Oil Change</div>
    </div>
    <div class="col-md-3 workItem">
      <img src="sampleImages/websiteRedesignImages/old-worker.jpg" alt="Tire Service"/>
      <div class="caption">Tire Service</div>
    </div>
  </div>
`;
container.appendChild(gallerySection);

// Inject container into the page
document.body.appendChild(container);

// Footer injected via footer.js
