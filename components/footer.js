// Get current year dynamically
const currentYear = new Date().getFullYear();

// Footer HTML
const footerHTML = `
<footer class="bg-secondary text-white py-4">
  <div class="container text-center">
    <!-- Logo -->
    <p>
      <a href="#" id="back-to-top" btn-sm"><img src="images/logo_small.jpeg" alt="Mom & Pop Shop Logo">  </a>
    </p>

    <!-- Copyright -->
    <p>
      &copy; ${currentYear} Mom & Pop Shop Web Design. All rights reserved.
    </p>

    <!-- Contact -->
    <p>
      Created by Corinne Padilla | 
      <a href="contact.html" class="privacy-inline-link">corinnepadilla@yahoo.com</a>
    </p>

    <!-- Terms -->
    <p>
      <a href="termsofuse.html" class="privacy-inline-link">Terms of Use</a> | 
      <a href="privacypolicy.html" class="privacy-inline-link">Privacy Policy</a>
    </p>
  </div>
</footer>
`;

// Inject the footer into the page
document.getElementById('footer-container').innerHTML = footerHTML;

// Optional: Smooth scroll to top
document.getElementById('back-to-top').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
