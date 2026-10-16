import "../styles/About.css";
function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">

        <div className="about-title">
          <p>Get To Know Me</p>
          <h2>About <span>Me</span></h2>
        </div>

        <div className="about-content">

          <div className="about-text">
            <h3>Hi, I'm <span>L. Siluvai Siprin</span> 👋</h3>

            <p>
              I'm a passionate and aspiring software developer interested in
              building modern, responsive, and user-friendly web applications.
            </p>

            <p>
              I enjoy working with technologies like HTML, CSS, JavaScript,
              React, Node.js, and MongoDB. I like learning new
              technologies and turning ideas into real-world projects.
            </p>

            <p>
              I'm currently focused on improving my full-stack development
              skills, problem-solving abilities, and creating projects that
              provide a good user experience.
            </p>

            <div className="about-buttons">
              <a href="#contact" className="about-btn">
                Contact Me
              </a>

              <a href="#projects" className="about-btn outline-btn">
                My Projects
              </a>
            </div>
          </div>

          <div className="about-info">

            <div className="info-card">
              <span>🎓</span>
              <div>
                <h4>Education</h4>
                <p>Undergraduate Student</p>
              </div>
            </div>

            <div className="info-card">
              <span>💻</span>
              <div>
                <h4>Development</h4>
                <p>Web & Full-Stack Development</p>
              </div>
            </div>

            <div className="info-card">
              <span>🚀</span>
              <div>
                <h4>Goal</h4>
                <p>Become a Skilled Software Developer</p>
              </div>
            </div>

            <div className="info-card">
              <span>🧠</span>
              <div>
                <h4>Interests</h4>
                <p>Technology, Coding & New Ideas</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;