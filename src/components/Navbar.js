import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Ícones de menu

function Navbar({ setActivePage }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // fechar o dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    
    // listener -> dropdown aberto
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="text-black flex justify-between items-center py-3 px-6 bg-white shadow-md relative">
      {/* Logo + Botão Admin */}
      <div className="flex items-center space-x-4">
        <img src="/imagens/logo.png" alt="Logo" className="w-10 h-10" />
        {/* Botão Admin (visível apenas se autenticado) */}
        {localStorage.getItem("adminToken") && (
          <button
            onClick={() => setActivePage("admin-dashboard")}
            className="px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 text-sm"
          >
            Admin
          </button>
        )}
      </div>

      {/* Botão de menu (mobile) */}
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Links de navegação */}
      <div className="hidden md:flex">
        <ul className="flex items-center">
          {[
            { label: "Home", page: "home" },
            { label: "Short Bio", page: "shortbio" },
            { label: "Education", page: "education" },
            { label: "Publications", page: "publication" },
            { label: "Teaching", page: "teaching" },
            { label: "Working Papers", page: "workingpapers" },
            { label: "Curriculum", page: "cv" },
          ].map((item, index, array) => (
            <React.Fragment key={index}>
              <li
                className="hover:text-green-700 hover:underline cursor-pointer text-lg px-3"
                onClick={() => setActivePage(item.page)}
              >
                {item.label}
              </li>
              {index < array.length - 1 && (
                <div className="h-5 border-r border-gray-300"></div>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>

      {/* Dropdown Mobile */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-16 right-0 w-64 bg-white shadow-lg flex flex-col py-3 transition-all duration-300 z-50 md:hidden border-l border-b border-r border-gray-200 rounded-bl-lg"
        >
          {[
            { label: "Home", page: "home" },
            { label: "Short Bio", page: "shortbio" },
            { label: "Education", page: "education" },
            { label: "Publications", page: "publication" },
            { label: "Teaching", page: "teaching" },
            { label: "Working Papers", page: "workingpapers" },
            { label: "Curriculum", page: "cv" },
          ].map((item, index) => (
            <React.Fragment key={index}>
              <button
                className="text-lg px-6 py-2 hover:bg-gray-100 text-right w-full"
                onClick={() => {
                  setActivePage(item.page);
                  setIsOpen(false);
                }}
              >
                {item.label}
              </button>
              {index < 6 && <div className="border-b border-gray-100 mx-4"></div>}
            </React.Fragment>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;