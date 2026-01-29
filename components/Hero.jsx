export default function Hero() {
  return (
    <section>
      <div className="container">
        <h1 style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 600 }}>
          Build software with clarity.
        </h1>

        <p
          style={{
            marginTop: "20px",
            maxWidth: "600px",
            color: "var(--muted)",
            fontSize: "18px",
          }}
        >
          I’m Ammad Imran A, a Software Engineer focused on building clean,
          scalable software and thoughtful digital experiences.
        </p>

        <div style={{ marginTop: "32px" }}>
          <a
            href="/Imran_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "12px 18px",
              borderRadius: "10px",
              background: "var(--accent)",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}
