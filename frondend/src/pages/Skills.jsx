import "../styles/Skills.css";

function Skills() {
  const skills = [
    { name: "HTML", icon: "HTML" },
    { name: "CSS", icon: "CSS" },
    { name: "JavaScript", icon: "JS" },
    { name: "React", icon: "RE" },
    { name: "Node.js", icon: "JS" },
    { name: "MongoDB", icon: "DB" },
    { name: "Python", icon: "PY" },
    { name: "C++", icon: "C+" },
    { name: "Git & GitHub", icon: "GT" },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">

        <div className="skills-heading">
          <span>MY EXPERTISE</span>

          <h2>
            Technical <strong>Skills</strong>
          </h2>

          <p>
            Technologies and tools I use to build modern and efficient
            applications.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>

              <div className="skill-icon">
                {skill.icon}
              </div>

              <div className="skill-name">
                <h3>{skill.name}</h3>
                <span>Technology</span>
              </div>

              <div className="skill-arrow">
                →
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;