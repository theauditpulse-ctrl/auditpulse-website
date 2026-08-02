import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const TOP_SCROLL_OPTIONS = { top: 0, left: 0, behavior: "auto" };

function ScrollToTop() {
  const { pathname, search, hash } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (typeof window === "undefined") return;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (hash) {
      const target = document.getElementById(hash.slice(1));

      if (target) {
        target.scrollIntoView({ behavior: "auto", block: "start" });
        return;
      }
    }

    window.requestAnimationFrame(() => {
      window.scrollTo(TOP_SCROLL_OPTIONS);
    });
  }, [pathname, search, hash, navigationType]);

  return null;
}

export default ScrollToTop;
