export default function Skills() {
  return (
    <section>
      <div className="container">
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 600,
            marginBottom: "32px",
          }}
        >
          Skills
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "32px",
          }}
        >
          <div>
            <h4 style={{ marginBottom: "8px" }}>Frontend</h4>
            <p style={{ color: "var(--muted)" }}>
              HTML, CSS, JavaScript, React, Next.js
            </p>
          </div>

          <div>
            <h4 style={{ marginBottom: "8px" }}>Backend</h4>
            <p style={{ color: "var(--muted)" }}>
              Node.js, REST APIs, Express (learning)
            </p>
          </div>

          <div>
            <h4 style={{ marginBottom: "8px" }}>Programming</h4>
            <p style={{ color: "var(--muted)" }}>
              JavaScript, Python, Java
            </p>
          </div>

          <div>
            <h4 style={{ marginBottom: "8px" }}>Tools</h4>
            <p style={{ color: "var(--muted)" }}>
              Git, GitHub, VS Code, Linux
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
