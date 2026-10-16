import profile from "../assets/image/me1.png";

function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />

      <div className="hero-wrapper">
        <div className="hero-content">
          <div className="available-badge">
            <span className="status-dot" />
            Available for opportunities
          </div>

          <p className="hero-intro">HELLO, I'M</p>

          <h1 className="hero-title">
            L Siluvai
            <br />
            <span>Siprin.</span>
          </h1>

          <h2 className="hero-role">
            Full Stack <span>Developer</span>
          </h2>

          <p className="hero-description">
            I design and develop modern web experiences with clean interfaces,
            powerful backend systems, and a focus on performance, usability, and
            scalability.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Work <span>↗</span>
            </a>

            <a href="#contact" className="secondary-btn">
              Let's Talk <span>→</span>
            </a>
          </div>

          <div className="hero-bottom">
            <div className="social-group">
              <span className="social-label">CONNECT WITH ME</span>

              <div className="social-links">
                <a
                  href="https://github.com/LSiluvaiSiprin"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  GH
                </a>

                <a
                  href="https://www.linkedin.com/in/siluvaisiprin"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  IN
                </a>

                <a href="mailto:siluvaisiprin2604@gmail.com" aria-label="Email">
                  @
                </a>
              </div>
            </div>

            <a href="#about" className="scroll-text">
              SCROLL TO EXPLORE <span>↓</span>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-glow" />

          <div className="image-frame">
            <div className="image-top-label">
              <span className="frame-dot" />
              DEVELOPER PORTFOLIO
            </div>

            <div className="image-circle">
              <img src={profile} alt="L Siluvai Siprin, Full Stack Developer" />
            </div>

            <div className="image-caption">
              <div>
                <span className="caption-label">FOCUS</span>
                <p>Building digital experiences</p>
              </div>

              <span className="caption-mark">✳</span>
            </div>
          </div>

          <div className="floating-card">
            <span className="floating-icon">{"</>"}</span>
            <div>
              <strong>Full Stack</strong>
              <p>Web Development</p>
            </div>
          </div>

          <div className="hero-index">01 / 04</div>
        </div>
      </div>
    </section>
  );
}

export default Home;
