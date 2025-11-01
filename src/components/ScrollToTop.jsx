import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // 👈 scroll smoothly to top
  }, [pathname]); // Runs every time the path changes

  return null; // This component doesn’t render anything
}
