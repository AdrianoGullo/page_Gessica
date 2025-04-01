import React from "react";
import { workingPapersData } from "./data/workingPapersData";

function WorkingPapers() {
  return (
    <div className="bg-white py-5 px-6 md:px-5 w-4/4 max-w-screen-xl mx-auto">
      <h2 className="text-2xl font-semibold font-mono text-gray-900 border-b pb-2 mb-5">Working Papers</h2>

      {workingPapersData.map((item, index) => (
        <div key={index} className="border border-gray-100 p-5 shadow-md bg-gray-50 mb-2" style={{ textAlign: "justify" }}>
          {/* Título e Link */}
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold italic text-[rgb(20,43,42)]">{item.title}</h3>
          </div>

          {/* Detalhes */}
          <div className="text-gray-700">
            {item.details.map((detail, i) => (
              <p key={i} className="text-md">{detail}</p>
            ))}
          </div>

          {/* Status */}
          <div className="mt-3 text-green-900 font-semibold italic">{item.status}</div>
        </div>
      ))}
    </div>
  );
}

export default WorkingPapers;
