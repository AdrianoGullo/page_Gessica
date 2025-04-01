import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-[5px] right-[5px] bg-green-900 text-white p-1 rounded shadow-lg transition-opacity duration-300 button-sm ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <FaArrowUp size={52} />
    </button>
  );
}

export default ScrollToTopButton;
