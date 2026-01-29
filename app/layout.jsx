"use client";

import { useEffect } from "react";
import "./globals.css";
import { initReveal } from "./reveal";

export const metadata = {
  title: "Ammad Imran A — Software Engineer",
  description:
    "Software Engineer focused on clean, scalable software, web development, and AI.",
};

export default function RootLayout({ children }) {
  useEffect(() => {
    initReveal();
  }, []);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
