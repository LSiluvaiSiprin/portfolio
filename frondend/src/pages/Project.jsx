import "../styles/Project.css";
import Port from "../assets/image/portfolio.png";
import recon from "../assets/image/recon.png";

function Project() {
  const projects = [
    {
      title: "Personal Portfolio",
      image: Port,
      description:
        "A modern and responsive personal portfolio website designed to showcase my skills, projects, education, and contact information.",
      technologies: "React • CSS • JavaScript • Node.js • Express.js",
      liveDemo: "",
      github: "",
    },
    {
      title: "ReConWorks",
      image: recon,
      description:
        "A modern construction management website designed to showcase construction services and projects.",
      technologies: "React • CSS • JavaScript • Node.js • Express.js • MongoDB",
      liveDemo: "",
      github: "",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        {/* HEADING */}

        <div className="projects-heading">
          <span>MY WORK</span>

          <h2>
            Featured <strong>Projects</strong>
          </h2>

          <p>
            Some of the projects I have designed and developed while learning
            and improving my development skills.
          </p>
        </div>

        {/* PROJECTS */}

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              {/* PROJECT IMAGE */}

              {project.image && (
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
              )}

              <div className="project-number">0{index + 1}</div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">{project.technologies}</div>

                <div className="project-buttons">
                  <a
                    href={project.liveDemo}
                    className="project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    className="project-btn outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
