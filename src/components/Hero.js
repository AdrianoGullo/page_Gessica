import React from "react";
import { MdOpenInNew } from "react-icons/md";

function Hero( {setActivePage} ) {

  return (
      <header
        className="relative flex flex-col md:flex-row items-center px-15 md:px-40 py-10 bg-fixed bg-top shadow-2xl"
        style={{
          backgroundImage: "url('imagens/fundo2.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100vw",
          height: "70vh",
        }}
      >

      {/* camada de opacidade */}
      <div className="absolute inset-0 bg-white opacity-50"></div>

      {/* Container para conteúdo e imagem */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center md:justify-evenly">
        
        {/* Imagem acima no mobile, direita no desktop */}
        <div className="w-full flex justify-center md:w-1/4 md:justify-end mb-6 md:mb-0">
          <img
            src="imagens/2025-03-31_17-18.png"
            alt="Gessica"
            className="w-48 md:w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Texto abaixo no mobile, esquerda desktop */}
        <div className="max-w-xl text-black text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Gessica Batista de Freitas
          </h1>

          <h2 className="text-xl md:text-2xl font-light leading-none mt-4 bg-white bg-opacity-40 rounded-md">
            <span className="font-semibold text-black">Ph.D. Student and Presidential Fellow</span>, <br />
            <span className="text-gray-800 mt-2">University of Notre Dame</span> <br />
            <span className="text-gray-800">Kellogg Institute for International Studies Affiliate</span> <br />
            <span className="text-gray-800">Representation and Politics in Legislatures Lab</span> <br /><br />
            <span className="text-sm italic text-gray-800 font-semibold">2060 Jenkins Nanovic Halls, Notre Dame</span>
          </h2>

        {/* Botões */}
        <div className="mt-6 flex flex-col items-center md:items-start gap-3">
          {/* Primeira linha */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 w-full">
            <span
              className="px-6 py-2 text-white rounded-full"
              style={{ backgroundColor: "rgb(62, 99, 85)"}}
            >
              R
            </span>
            <span
              className="px-6 py-2 text-white rounded-full"
              style={{ backgroundColor: "rgb(62, 99, 85)"}}
            >
              Excel
            </span>
            <span
              className="px-6 py-2 text-white rounded-full"
              style={{ backgroundColor: "rgb(62, 99, 85)"}}
            >
              SPSS
            </span>
            <span
              className="px-6 py-2 text-white rounded-full"
              style={{ backgroundColor: "rgb(62, 99, 85)"}}
            >
              Overleaf
            </span>
          </div>

          {/* Segunda linha - Curriculum */}
          <div className="w-auto text-center md:text-left">
            <button
              className="px-8 py-2 text-white rounded-full flex items-center gap-2 justify-center md:justify-start"
              style={{ backgroundColor: "rgb(20, 43, 42)", transition: "background-color 0.2s ease" }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "rgb(112, 115, 114)")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "rgb(20, 43, 42)")}
              onClick={() => setActivePage("cv")} // Altera a página para 'cv'
            >
              Curriculum
              <MdOpenInNew className="text-xl" />
            </button>
          </div>
        </div>

          
        </div>
        
        <div className="w-100 h-auto"  ></div>
      </div>
    </header>
  );
}

export default Hero;
