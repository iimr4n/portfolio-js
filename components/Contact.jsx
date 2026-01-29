export default function Contact() {
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
          Contact
        </h2>

        <p
          style={{
            maxWidth: "600px",
            color: "var(--muted)",
            fontSize: "17px",
            marginBottom: "24px",
          }}
        >
          I’m always open to conversations about software, ideas, or
          opportunities. Feel free to reach out.
        </p>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a
            href="mailto:iimr3n@gmail.com"
            style={{
              color: "var(--accent)",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            iimr3n@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/7imran"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--accent)",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/iimr3n"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--accent)",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
