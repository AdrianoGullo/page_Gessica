import React, { useState, useRef, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function AdminNavbarShow({ setActivePage, handleLogout, toggleAdminMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="text-black flex justify-between items-center py-3 px-6 bg-white shadow-md relative">
      {/* Logo Admin */}
      <div className="font-bold text-2xl">
        <img src="/imagens/logo.png" alt="Logo" className="w-10 h-10" />
      </div>

      {/* Botão de menu (mobile) */}
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Links de navegação */}
      <ul className="hidden md:flex items-center gap-4">
        <li
          className="hover:text-green-800 cursor-pointer text-lg"
          onClick={() => setActivePage("admin-dashboard")}
        >
          Edit Information
        </li>
        <li
          className="hover:text-red-800 cursor-pointer text-lg"
          onClick={handleLogout}
        >
          Sair
        </li>
      </ul>

      {/* Dropdown Mobile */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-16 right-0 w-48 bg-gray-700 shadow-lg flex flex-col py-3 transition-all duration-300 z-50 md:hidden border rounded-lg"
        >
          <button
            className="text-lg px-6 py-2 hover:bg-green-700 text-white text-right"
            onClick={() => {
              setActivePage("admin-dashboard");
              setIsOpen(false);
            }}
          >
            Edit Information
          </button>
          <button
            className="text-lg px-6 py-2 hover:bg-gray-600 text-red-900 text-right"
            onClick={() => {
              handleLogout();
              setIsOpen(false);
            }}
          >
            Sair
          </button>
        </div>
      )}
    </nav>
  );
}

export default AdminNavbarShow;
