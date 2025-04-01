import React, { useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [selectedOption, setSelectedOption] = useState("Publications");
  const [data, setData] = useState(null);

  // Função para carregar o JSON baseado na seleção
  const fetchJsonData = () => {
    axios
      .get(`http://localhost:5000/api/${selectedOption.toLowerCase()}`)
      .then((response) => {
        setData(response.data);
        console.log("Dados carregados:", response.data);
      })
      .catch((error) => {
        console.error("Erro ao carregar os dados:", error);
      });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Edit Site information</h1>
      
      <div className="flex items-center gap-4 mb-4">
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="Publications">Publications</option>
          <option value="Education">Education</option>
          <option value="Teaching">Teaching</option>
          <option value="WorkingPapers">Working Papers</option>
          <option value="AboutMe">About Me</option>
        </select>
        <button onClick={fetchJsonData} className="bg-blue-600 text-white px-4 py-2 rounded">
          Carregar Dados
        </button>
      </div>

      {data && (
        <pre className="bg-white p-4 border rounded shadow">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default AdminDashboard;
