// src/components/Home.js
import React from "react";
import Hero from "../Hero";
import AboutMe from "../aboutMe";
import EducationTimeline from "../educationTable";
import PublicationTimeline from "../publTimeLine";
import TeachingTimeline from "../teaching";
import WorkingPapers from "../workingPapers";
import Footer from "../Footer";

function Home({setActivePage})  {
  return (
    <>
      <Hero setActivePage={setActivePage}/>
      <AboutMe />
      <section
        className="relative flex items-center justify-center text-white text-center w-4/4"
        style={{
          backgroundImage: "url('/imagens/divisor1.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "20vh",
        }}
      ></section>
      <EducationTimeline />

      <section
        className="relative flex items-center justify-center text-white text-center w-4/4"
        style={{
          backgroundImage: "url('/imagens/divisor2.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "20vh",
        }}
      ></section>
      <PublicationTimeline />

      <section
        className="relative flex items-center justify-center text-white text-center w-4/4"
        style={{
          backgroundImage: "url('/imagens/divisor3.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "20vh",
        }}
      ></section>
      <TeachingTimeline />

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
    </>
  );
}

export default Home;
