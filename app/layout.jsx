import "./globals.css";

export const metadata = {
  title: "Ammad Imran A | Software Engineer",
  description:
    "Software Engineer focused on clean, scalable software and modern web experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
