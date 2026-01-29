export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1>AHAMMAD IMRAN A</h1>
        <h2>Software Engineer</h2>

        <p>
          I design and build reliable, scalable software with a focus on clarity,
          performance, and user experience.
        </p>

        {/* Actions */}
        <div className="hero-actions glass">
          {/* Contact */}
          <a href="#contact" className="btn-primary">
            Contact Me
          </a>

          {/* View Resume */}
          <a
            href="/Imran_Resume.pdf"
            className="btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>

          {/* Social Icons */}
          <div className="social-icons">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/7imran"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.1c.6-1.1 2.1-2.2 4.4-2.2 4.7 0 5.5 3.1 5.5 7.1V24h-5v-7.8c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-5V8z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/iimr3n"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 7.4A2.9 2.9 0 1 1 14.9 12 2.9 2.9 0 0 1 12 14.9zM17.8 6.2a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
