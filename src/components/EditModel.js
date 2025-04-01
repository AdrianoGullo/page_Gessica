import React from "react";
import { FaTimes } from "react-icons/fa";

function EditModal({ show, onClose, formData, onChange, onSave, categories }) {
  if (!show) return null; // Não renderiza o modal se estiver fechado

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        {/* Cabeçalho do Modal */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Editar Dados</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-red-500">
            <FaTimes size={20} />
          </button>
        </div>

        {/* Formulário */}
        <form onSubmit={onSave} className="flex flex-col gap-3">
          {/* Seleção de Categoria */}
          <select name="category" value={formData.category} onChange={onChange} className="border p-2 rounded">
            {categories.map((cat, index) => (
              <option key={index} value={cat.title}>{cat.title}</option>
            ))}
          </select>

          <input type="text" name="date" placeholder="Ano (ex: 2025)" value={formData.date} onChange={onChange} className="border p-2 rounded" required />
          <input type="text" name="title" placeholder="Título" value={formData.title} onChange={onChange} className="border p-2 rounded" required />
          <input type="text" name="details" placeholder="Detalhes" value={formData.details} onChange={onChange} className="border p-2 rounded" required />
          
          {/* Link (Opcional para outras categorias) */}
          {formData.category.includes("Publication") && (
            <input type="url" name="link" placeholder="Link" value={formData.link || ""} onChange={onChange} className="border p-2 rounded" />
          )}

          {/* Botão de Atualizar */}
          <button type="submit" className="bg-green-900 text-white px-4 py-2 rounded hover:bg-green-700">
            Atualizar
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditModal;
