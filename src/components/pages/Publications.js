// src/components/Contact.js
import React from "react";
import PublicationTimeline from "../publTimeLine";
import Footer from "../Footer";

function Show_Publications() {
    return (
        <div>
            <section
            className="relative flex items-center justify-center text-white text-center w-4/4"
            style={{
              backgroundImage: "url('imagens/divisor2.png')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              width: "100%",
              height: "20vh",
            }}
          ></section>
          <PublicationTimeline />
          <Footer />
        </div>
      );
}

export default Show_Publications;
