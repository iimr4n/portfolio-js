export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)" }}>
      <div
        className="container"
        style={{
          padding: "32px 0",
          textAlign: "center",
          color: "var(--muted)",
          fontSize: "14px",
        }}
      >
        © {new Date().getFullYear()} Ammad Imran A. All rights reserved.
      </div>
    </footer>
  );
}
