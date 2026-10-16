import "../styles/Edu.css";

function Education() {
  return (
    <section id="education" className="education">
      <div className="education-container">

        <div className="education-heading">
          <span>MY ACADEMIC JOURNEY</span>

          <h2>
            My <strong>Education</strong>
          </h2>

          <p>
            My academic journey from school to postgraduate studies.
          </p>
        </div>

        <div className="education-timeline">

          {/* MCA */}

          <div className="education-card">
            <div className="education-dot"></div>

            <div className="education-year">
              2026 - Present
            </div>

            <div className="education-content">
              <h3>Master of Computer Applications</h3>

              <h4>MCA</h4>

              <p>
                Currently pursuing my MCA, focusing on advanced programming,
                software development and modern technologies.
              </p>
            </div>
          </div>


          {/* BCA */}

          <div className="education-card">
            <div className="education-dot"></div>

            <div className="education-year">
              2023 - 2026
            </div>

            <div className="education-content">
              <h3>Bachelor of Computer Applications</h3>

              <h4>BCA</h4>

              <p>
                Completed my BCA with a focus on programming, web development,
                databases and software development.
              </p>
            </div>
          </div>


          {/* 12th */}

          <div className="education-card">
            <div className="education-dot"></div>

            <div className="education-year">
              2022 - 2023
            </div>

            <div className="education-content">
              <h3>Higher Secondary Education</h3>

              <h4>12th Standard — Computer Science Group</h4>

              <p>
                Completed my 12th standard education in the Computer Science
                group.
              </p>
            </div>
          </div>


          {/* 11th */}

          <div className="education-card">
            <div className="education-dot"></div>

            <div className="education-year">
              2021 - 2022
            </div>

            <div className="education-content">
              <h3>Higher Secondary Education</h3>

              <h4>11th Standard — Computer Science Group</h4>

              <p>
                Completed my 11th standard education in the Computer Science
                group.
              </p>
            </div>
          </div>


          {/* 10th */}

          <div className="education-card">
            <div className="education-dot"></div>

            <div className="education-year">
              2020 - 2021
            </div>

            <div className="education-content">
              <h3>Secondary Education</h3>

              <h4>10th Standard</h4>

              <p>
                Completed my 10th standard education.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;