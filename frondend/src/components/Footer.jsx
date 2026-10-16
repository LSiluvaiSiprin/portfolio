import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* BRAND */}

        <div className="footer-brand">
          <div className="footer-logo">
            LS<span>.</span>
          </div>

          <h2>
            L. Siluvai <span>Siprin</span>
          </h2>

          <p>
            Aspiring Software Developer passionate about creating modern,
            responsive and user-friendly web applications.
          </p>

          <div className="footer-status">
            <span></span>
            Available for opportunities
          </div>
        </div>

        {/* QUICK LINKS */}

        <div className="footer-column">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        {/* EXPERTISE */}

        <div className="footer-column">
          <h3>Expertise</h3>

          <p>Web Development</p>
          <p>Frontend Development</p>
          <p>React Development</p>
          <p>Backend Development</p>
          <p>Database Management</p>
          <p>Full-Stack Development</p>
        </div>

        {/* CONNECT */}

        <div className="footer-column">
          <h3>Let's Connect</h3>

          <p className="connect-text">
            Interested in working together or have an opportunity? Feel free to
            reach out.
          </p>

          <a
            href="mailto:siluvaisiprin2604@example.com"
            className="footer-email"
          >
            siluvaisiprin2604@example.com
          </a>

          <div className="footer-socials">
            <a
              href="https://github.com/LSiluvaiSiprin"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/siluvaisiprin"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">
        <p>
          © 2026 <span>L. Siluvai Siprin</span>. All Rights Reserved.
        </p>

        <p>
          Designed & Developed with <span>♥</span>
        </p>

        <a href="#home">Back to Top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
