"use client";

import { useEffect } from "react";
import { initReveal } from "../app/reveal";

export default function RevealProvider({ children }) {
  useEffect(() => {
    initReveal();
  }, []);

  return children;
}
