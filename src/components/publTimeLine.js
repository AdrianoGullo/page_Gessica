import React, { useState } from "react";
import { MasterThesis, Articles, BookChapters, ResearchReports } from "./data/publicationData";
import { FaFileAlt} from "react-icons/fa"; // Ícones

const initialCategories = [
  { title: "Master Thesis", data: MasterThesis },
  { title: "Articles", data: Articles },
  { title: "Books Chapters", data: BookChapters },
  { title: "Research Reports", data: ResearchReports }
];

function PublicationTimeline() {
  const [categories] = useState(initialCategories);

  return (
    <div className="bg-white py-5 px-6 md:px-5 w-4/4 max-w-screen-xl mx-auto">
      {/* exibindo publicações */}
      {categories.map((category, idx) => (
        <div key={idx} className="mt-6">
          <h2 className="text-2xl font-semibold font-mono text-black border-b pb-2 mb-3">{category.title}</h2>

          {category.data.map((item, index) => (
            <div key={index} className="border border-gray-100 p-5 shadow-md bg-gray-50 mb-2">
              <h3 className="text-lg font-bold italic text-[rgb(20,43,42)]">
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline inline-block">
                  {item.date} - {item.title} <FaFileAlt className="inline-block text-gray-700 ml-2" size={15} />
                </a>
              </h3>
              <div className="text-gray-700">
                {item.details.map((detail, i) => (
                  <p key={i} className="text-md">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default PublicationTimeline;
