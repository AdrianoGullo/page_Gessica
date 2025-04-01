import React, { useState } from "react";
import { MasterThesis, Articles, BookChapters, ResearchReports } from "./data/publicationData";
import { FaFileAlt, FaPlus, FaTimes } from "react-icons/fa"; // Ícones

const initialCategories = [
  { title: "Master Thesis", data: MasterThesis },
  { title: "Articles", data: Articles },
  { title: "Books Chapters", data: BookChapters },
  { title: "Research Reports", data: ResearchReports }
];

function PublicationTimeline() {
  const [categories, setCategories] = useState(initialCategories);
  const [showModal, setShowModal] = useState(false);
  const [newPublication, setNewPublication] = useState({
    category: "Articles",
    date: "",
    title: "",
    details: "",
    link: ""
  });

  function handleChange(e) {
    setNewPublication({ ...newPublication, [e.target.name]: e.target.value });
  }

  function handleAddPublication(e) {
    e.preventDefault();

    const updatedCategories = categories.map((category) =>
      category.title === newPublication.category
        ? { ...category, data: [...category.data, { ...newPublication, details: [newPublication.details] }] }
        : category
    );

    setCategories(updatedCategories);
    setShowModal(false); // Fecha o modal
    setNewPublication({ category: "Articles", date: "", title: "", details: "", link: "" });
  }

  return (
    <div className="bg-white py-5 px-6 md:px-5 w-4/4 max-w-screen-xl mx-auto">

      {/* Botão "+" para abrir o formulário */}
      <button 
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition"
        onClick={() => setShowModal(true)}
      >
        <FaPlus size={24} />
      </button>

      {/* Modal do Formulário */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Adicionar Publicação</h2>
              <button onClick={() => setShowModal(false)} className="text-gray-600 hover:text-red-500">
                <FaTimes size={20} />
              </button>
            </div>

            <form onSubmit={handleAddPublication} className="flex flex-col gap-3">
              <select name="category" value={newPublication.category} onChange={handleChange} className="border p-2 rounded">
                {categories.map((cat, index) => (
                  <option key={index} value={cat.title}>{cat.title}</option>
                ))}
              </select>
              <input type="text" name="date" placeholder="Ano (ex: 2025)" value={newPublication.date} onChange={handleChange} className="border p-2 rounded" required />
              <input type="text" name="title" placeholder="Título" value={newPublication.title} onChange={handleChange} className="border p-2 rounded" required />
              <input type="text" name="details" placeholder="Detalhes" value={newPublication.details} onChange={handleChange} className="border p-2 rounded" required />
              <input type="url" name="link" placeholder="Link" value={newPublication.link} onChange={handleChange} className="border p-2 rounded" required />
              <button type="submit" className="bg-green-900 text-white px-4 py-2 rounded hover:bg-green-700">Update Section</button>
            </form>
          </div>
        </div>
      )}

      {/* Exibição das Publicações */}
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
