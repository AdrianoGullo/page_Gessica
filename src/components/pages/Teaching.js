// src/components/Contact.js
import React from "react";
import TeachingTimeline from "../teaching";

function Show_Teaching() {
  return (
    <div>
      <section
        className="relative flex items-center justify-center text-white text-center w-4/4"
        style={{
          backgroundImage: "url('imagens/divisor3.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "20vh",
        }}
      ></section>
      <TeachingTimeline />
    </div>
  );
}

export default Show_Teaching;
