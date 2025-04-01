import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../Footer";

function CvViewer() {
  return (
      <div
        className="flex flex-col justify-between min-h-screen align-bottom inset-0 bg-white"
        style={{
          backgroundImage: "url('./imagens/fundo.png')",
          backgroundSize: "contain", // Ajusta automaticamente ao tamanho da tela
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center", // Mantém o centro da imagem visível
        }}
      >

      {/* Carrossel Centralizado */}
      <div className="relative flex justify-center items-center flex-grow mt-10 mb-10">
        {/* Seta Esquerda */}
        <button
          className="relative -left-5 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-4 rounded-full shadow-lg hover:bg-gray-600 z-10"
          onClick={() => document.querySelector(".control-prev").click()}
        >
          ❮
        </button>

        {/* Carrossel */}
        <div className="w-70 max-w-2xl">
          <Carousel
            showArrows={false}
            autoPlay={false}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            emulateTouch={true}
            swipeable={true}
          >
            <div className="shadow-lg  rounded-lg overflow-hidden">
              <img src="/imagens/cv/cv1.png" alt="Foto 1" />
            </div>
            <div>
              <img src="/imagens/cv/cv2.png" alt="Foto 2" />
            </div>
            <div>
              <img src="/imagens/cv/cv3.png" alt="Foto 3" />
            </div>
            <div>
              <img src="/imagens/cv/cv4.png" alt="Foto 4" />
            </div>
            <div>
              <img src="/imagens/cv/cv5.png" alt="Foto 5" />
            </div>
          </Carousel>
        </div>

        {/* Seta Direita */}
        <button
          className="relative -right-5 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-4 rounded-full shadow-lg hover:bg-gray-600 z-10"
          onClick={() => document.querySelector(".control-next").click()}
        >
          ❯
        </button>
      </div>

      {/* Footer Ocupando Toda a Largura */}
      <Footer className="w-full" />
    </div>
  );
}

export default CvViewer;
