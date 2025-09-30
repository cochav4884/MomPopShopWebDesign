// components/navbar.js

document.addEventListener('DOMContentLoaded', () => {
  const navbarHTML = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-secondary px-3">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center" href="index.html">
        <img src="public/favicon.ico" alt="Mom & Pop Shop Logo" style="height:50px; margin-right:10px;">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
          <li class="nav-item"><a class="nav-link" href="services.html">Services</a></li>
          <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
  `;

  // Inject navbar into the page
  const navbarContainer = document.getElementById('navbar-container');
  if (navbarContainer) {
    navbarContainer.innerHTML = navbarHTML;
  }
});
