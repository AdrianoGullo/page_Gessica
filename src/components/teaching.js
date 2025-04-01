import React from "react";
import { teachingData } from "./data/teachingData";

function TeachingTimeline() {
  return (
    <div className="bg-white py-5 px-6 md:px-5 w-4/4 max-w-screen-xl mx-auto">
      <h2 className="text-2xl font-semibold font-mono text-black border-b pb-2 mb-5">Teaching Timeline</h2>

      {teachingData.map((item, index) => (
        <div key={index} className="border border-gray-100 p-5 shadow-md bg-gray-50 mb-2" style={{ textAlign: "justify" }}>
          {/* Data e Título */}
          <h3 className="text-lg font-bold italic text-[rgb(20,43,42)]">{item.date} - {item.title}</h3>

          {/* Detalhes */}
          <div className="text-gray-700">
            {item.details.map((detail, i) => (
              <p key={i} className="text-md">{detail}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TeachingTimeline;
