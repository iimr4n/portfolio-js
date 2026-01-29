export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h3>Skills</h3>

        <div className="skills-grid">
          <div className="skill-group">
            <h4>Languages</h4>
            <div className="skill-tags">
              <span>JavaScript</span>
              <span>Python</span>
              <span>Java</span>
            </div>
          </div>

          <div className="skill-group">
            <h4>Frontend</h4>
            <div className="skill-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>React</span>
              <span>Next.js</span>
            </div>
          </div>

          <div className="skill-group">
            <h4>AI & Data Science</h4>
            <div className="skill-tags">
              <span>Machine Learning</span>
              <span>Data Analysis</span>
              <span>Python for AI</span>
            </div>
          </div>

          <div className="skill-group">
            <h4>Tools & Practices</h4>
            <div className="skill-tags">
              <span>Git</span>
              <span>Clean Code</span>
              <span>Responsive Design</span>
              <span>Problem Solving</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
