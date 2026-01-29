export default function About() {
  return (
    <section>
      <div className="container">
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 600,
            marginBottom: "20px",
          }}
        >
          About
        </h2>

        <p
          style={{
            maxWidth: "700px",
            color: "var(--muted)",
            fontSize: "17px",
            marginBottom: "16px",
          }}
        >
          I am an aspiring Software Engineer currently pursuing my B.Tech in
          Artificial Intelligence and Data Science (2025–2029).
        </p>

        <p
          style={{
            maxWidth: "700px",
            color: "var(--muted)",
            fontSize: "17px",
            marginBottom: "16px",
          }}
        >
          I enjoy building clean, scalable web applications and exploring how
          software, data, and design come together to solve real-world problems.
        </p>

        <p
          style={{
            maxWidth: "700px",
            color: "var(--muted)",
            fontSize: "17px",
          }}
        >
          My approach is simple: build things that are reliable, readable, and
          designed to last.
        </p>
      </div>
    </section>
  );
}
