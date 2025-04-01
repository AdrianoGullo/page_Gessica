import React from "react";
import EducationTime from "../educationTable";
import Footer from "../Footer";

function EducationTimeline() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Imagem de fundo */}
      <section
        className="flex items-center justify-center text-white text-center w-full py-10"
        style={{
          backgroundImage: "url('imagens/divisor1.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "20vh",
        }}
      ></section>

      {/* Conteúdo principal */}
      <div className="flex-grow">
        <EducationTime />
      </div>

      {/* Footer fixo no final */}
      <Footer />
    </div>
  );
}

export default EducationTimeline;
