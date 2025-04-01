// src/components/Contact.js
import React from "react";
import WorkingPapers from "../workingPapers";
import Footer from "../Footer";

function Show_WP() {
  return (
    <div>
        <section
        className="relative flex items-center justify-center text-white text-center w-4/4"
        style={{
          backgroundImage: "url('/imagens/divisor4.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "20vh",
        }}
      ></section>
      <WorkingPapers />
      <Footer />
    </div>
  );
}

export default Show_WP;
