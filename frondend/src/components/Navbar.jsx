import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar-header">
      <nav className="nav">
        <a href="#home" className="nav-logo" onClick={closeMenu}>
          <span className="logo-mark">S.</span>
          <span className="logo-text">
            SILUVAI<span className="logo-dot">.</span>
          </span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
        >
          <span />
          <span />
          <span />
        </button>

        <div
          id="nav-menu"
          className={`nav-menu ${menuOpen ? "menu-open" : ""}`}
        >
          <div className="nav-links">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="navlink"
                onClick={closeMenu}
              >
                {item.name}
              </a>
            ))}
          </div>

          <a href="#contact" className="nav-cta" onClick={closeMenu}>
            Let's Talk <span>↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;