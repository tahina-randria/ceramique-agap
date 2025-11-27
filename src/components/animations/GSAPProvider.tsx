"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Enregistrer le plugin une seule fois
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GSAPProviderProps {
  children: React.ReactNode;
}

export default function GSAPProvider({ children }: GSAPProviderProps) {
  useEffect(() => {
    // Refresh ScrollTrigger apres le chargement complet
    ScrollTrigger.refresh();

    return () => {
      // Cleanup
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return <>{children}</>;
}
