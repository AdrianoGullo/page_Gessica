import React from "react";

const educationData = [
  {
    date: "2023-Present",
    title: "Ph.D. student, Department of Political Science, University of Notre Dame",
    details: [
      "Presidential Fellow.",
      "Kellogg Institute for International Studies Affiliate",
      "Representation and Politics in Legislatures Lab"
    ]
  },
  {
    date: "2023",
    title: "M.A. Political Science, State University of Campinas",
    details: [
      'Master Thesis: “Three decades of institutional changes: how did parliamentarians change the rules of the Brazilian decision-making process post-1988?”',
      "Master's Research Scholarship from the São Paulo Research Foundation (FAPESP)."
    ]
  },
  {
    date: "2019",
    title: "B.A. Social Sciences with a focus on Political Science, State University of Campinas",
    details: ["Undergraduate Research Scholarship from the São Paulo Research Foundation (FAPESP)."]
  }
];

function EducationTimeline() {
  return (
    <div className="bg-white py-5 px-6 md:px-5 w-4/4 max-w-screen-xl mx-auto">
      <h2 className="text-2xl font-semibold font-mono text-black border-b pb-2 mb-5">Education Timeline</h2>

      {educationData.map((item, index) => (
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

export default EducationTimeline;