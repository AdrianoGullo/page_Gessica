import React from "react";

function AboutMe() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-40 py-10" style={{ backgroundColor: "rgb(20, 43, 42)" }}>
      
      {/* Texto à Esquerda */}
      <div className="w-full md:w-3/4 text-center md:text-left px-6 md:px-10 font-serif md:ml-20">
        <h2 className="text-2xl font-semibold text-white">SHORT BIO</h2>
        <p className="text-white mt-4" style={{ textAlign: "justify" }}>
          Gessica de Freitas is a Ph.D. student in Political Science at the University of Notre Dame specializing in Comparative Politics and Methods. She was awarded a Presidential Fellowship from the University.
          <br /><br />
          She has an MA in Political Science from the University of State Campinas (UNICAMP-Brazil). Her master's thesis explores the endogenous institutional changes Brazilian parliamentarians implemented in federal legislative houses in the recent democratic period.
          <br /><br />
          Her PhD dissertation seeks to explore changes in the balance of Executive-Legislative relations in Latin America, with the strengthening of Congresses as legislative institutions, despite a legacy of executive centralization left by dictatorial regimes, and its impacts on Democratic stability.
          <br /><br />
          She has presented her work at several conferences, such as the Brazilian Association of Political Science (ABCP), the National Association of Postgraduate Studies in Social Sciences (ANPOCS), the Midwest Political Science Association (MPSA), and the Latin American Association of Political Science (ALACIP).
        </p>
      </div>

      {/* Imagem à Direita */}
      <div className="w-full md:w-1/2 flex justify-evenly md:justify-evenly md:mr-20 mt-6 md:mt-0">
        <img 
          src="imagens/foto2.png" 
          alt="Gessica" 
          className="w-100 md:w-100 h-auto rounded-lg shadow-lg"
        />
      </div>

    </div>
  );
}

export default AboutMe;
