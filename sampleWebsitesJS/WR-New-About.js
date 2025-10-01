import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../linkstyles/Website-Redesign.module.css";
import shopImg from "../wrlinkimages/old-shop2.jpg";
import workerImg from "../wrlinkimages/old-worker3.jpg";

// Import the reusable LogoImage component
import LogoImage from "../components/LogoImage";

function WRNewAbout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      {/* Responsive Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navbarBrand}>
          <Link to="/" className={styles.brandLink}>
            Tony's Auto Repair Shop
          </Link>
        </div>
        <button
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>
          <li>
            <Link to="/website-redesign" className={styles.navItem}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/wr-new-about" className={styles.navItem}>
              About
            </Link>
          </li>
          <li>
            <Link to="/wr-new-gallery" className={styles.navItem}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/wr-new-service" className={styles.navItem}>
              Service
            </Link>
          </li>
          <li>
            <Link to="/wr-new-contact" className={styles.navItem}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/wr-old-website-design" className={styles.navItem}>
              Old
            </Link>
          </li>
        </ul>
      </nav>

      <p>
        {" "}
        Please Note: The forms presented on this site are for demonstration
        purposes only, and the contact information shown in the footer or pages
        are fictitious and intended solely for illustrative use. For accurate
        and current contact details, please refer to the original website's
        Landing Page. You may return to that page at any time by clicking the
        site title in the navigation bar. Once in the official website, you will
        find a link to the official Contact Me page at:
        www.mompopshopwebdesign.com.
      </p>

      <section className={styles.section}>
        <h2 className={styles.subheader}>Established | 1978</h2>
        <p>Welcome to Tony's Auto Repair Shop — where quality meets honesty!</p>
        <p>
          Many of our customers keep coming back because they know good work
          means a safe ride.
        </p>
        <p>
          Come on down and meet our friendly staff — experience service that
          goes the extra mile, at prices that won’t break the bank!
        </p>

        <div className={styles.screenshotContainer}>
          <div className={styles.imageWrapper}>
            <img src={shopImg} alt="Tony working on a car" />
            <span className={styles.caption}>
              Tony's Auto Repair Shop | Established 1978
            </span>
          </div>
          <div className={styles.imageWrapper}>
            <img src={workerImg} alt="Tony Auto, Founder and Owner" />
            <span className={styles.caption}>
              Tony Auto | Founder and Owner
            </span>
          </div>
        </div>

        <p>
          I’m not just one of the mechanics... I’m Tony, founder and proud owner
          of Tony's Auto Repair Shop.
        </p>
        <p className={styles.slogan}>
          “Driven by trust, powered by experience!”
        </p>
      </section>

      <div className={styles.slogan2}>
        <h4>We offer a variety of auto repair services:</h4>

        <div className={styles.serviceLists}>
          <ul>
            <li>Senior Mechanic</li>
            <li>Brake Specialist</li>
            <li>Transmission Expert</li>
            <li>Tire Specialist</li>
          </ul>

          <ul>
            <li>Paint & Body Specialist</li>
            <li>Diagnostics Pro</li>
            <li>Electrical Tech</li>
            <li>Detail Specialist</li>
          </ul>

          <ul>
            <li>Service Advisor</li>
            <li>Customer Relations</li>
            <li>Parts Manager</li>
            <li>Product Receiver</li>
          </ul>
        </div>

        <h5>Check out our Gallery page located in the navbar!</h5>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>
          {/* Use reusable LogoImage component here */}
          <LogoImage />
        </p>

        <div>
          &copy; {new Date().getFullYear()} Tony's Auto Repair Shop — All rights
          reserved.
        </div>

        <div
          style={{ marginTop: "1rem", textAlign: "center", fontSize: "0.9rem" }}
        >
          <h2>Contact Information</h2>
          <p>
            <strong>Contact Person:</strong> Tony Auto
          </p>
          <p>
            <strong>Contact Number:</strong> (023) 456-7890
          </p>
          <p>
            <strong>Business Hours:</strong>
          </p>
          <ul
            style={{
              listStyleType: "none",
              paddingLeft: 0,
              marginBottom: "1rem",
            }}
          >
            <li>Monday - Friday: 8:00am to 5:00pm</li>
            <li>Saturday: 12:00pm to 4:00pm</li>
            <li>Closed Sunday and Holidays</li>
          </ul>
          <p>
            <strong>Email Address:</strong>{" "}
            <a href="mailto:TonyAuto@Example.com" style={{ color: "#ffd700" }}>
              TonyAuto@Example.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default WRNewAbout;