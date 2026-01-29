import "./globals.css";

export const metadata = {
  title: "AHAMMAD IMRAN A | Software Engineer",
  description:
    "AHAMMAD IMRAN A is a Software Engineer specializing in web development, AI, and clean user-centric digital solutions.",

  keywords: [
    "Ammad Imran",
    "Software Engineer",
    "Web Developer",
    "Next.js Portfolio",
    "AI and Data Science",
    "Frontend Developer",
  ],

  authors: [{ name: "AHAMMAD IMRAN A" }],
  creator: "AHAMMAD IMRAN A",

  metadataBase: new URL("https://iimr3n.in"),

  openGraph: {
    title: "AHAMMAD IMRAN A | Software Engineer",
    description:
      "Personal portfolio of AHAMMAD IMRAN A showcasing projects, skills, and contact information.",
    url: "https://iimr3n.in",
    siteName: "AHAMMAD IMRAN A",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
  <meta
    name="google-site-verification"
    content="S9DCP7jd0PaVAlfICqrOBHJ6QqxjlQJgigBZpkNJntI"
  />
</head>
      <body>{children}</body>
    </html>
  );
}
