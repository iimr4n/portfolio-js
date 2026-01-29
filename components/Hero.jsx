export default function Hero() {
  return (
    <section className="hero editorial-hero">
      <div className="container">
        {/* Big Name */}
        <h1 className="hero-name">
          AHAMMAD <br /> IMRAN A
        </h1>

        {/* Role */}
        <div className="hero-meta">
          <span className="hero-role">Software Engineer</span>
        </div>

        {/* Statement */}
        <p className="hero-statement">
          I design and build reliable, scalable software with a focus on
          clarity, performance, and long-term thinking.
        </p>

        {/* Actions */}
        <div className="hero-actions minimal">
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
