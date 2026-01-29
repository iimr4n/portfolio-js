export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        {/* Big Editorial Name */}
        <h1>
          AHAMMAD <br /> IMRAN A
        </h1>

        {/* Role */}
        <h2>Software Engineer</h2>

        {/* Statement */}
        <p>
          I design and build reliable, scalable software with a focus on clarity,
          performance, and long-term thinking.
        </p>

        {/* Minimal Actions */}
        <div className="hero-actions">
          <a
            href="/Imran_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            View Resume
          </a>

          <a
            href="https://www.linkedin.com/in/7imran"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/iimr3n"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
