import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import ShortBio from "./components/pages/ShortBio";
import Educationpage from "./components/pages/Education";
import Publicationspage from "./components/pages/Publications";
import Teachingpage from "./components/pages/Teaching";
import WorkingPaperspage from "./components/pages/WorkingPapers";
import PdfViewer from "./components/pages/Cv";
import Login from "./components/admin/Login";
import AdminNavbarShow from "./components/admin/AdminNavbar";
import AdminDashboard from "./components/admin/AdminDashboard";

function App() {
  const [activePage, setActivePage] = useState("home");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);

  // vrifica usuário já está logado
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  // fazer login
  const handleLogin = (username, password) => {
    if (username === "admin" && password === "melhornamorado") {
      setIsAuthenticated(true);
      localStorage.setItem("adminToken", "admin-token-123");  // token simples
      setIsAdminMode(true);
      setActivePage("admin-dashboard");
      return true;
    }
    return false;
  };

  // fazer logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsAdminMode(false);
    localStorage.removeItem("adminToken");
    setActivePage("home");
  };

  // visualização ública e administração
  const toggleAdminMode = () => {
    setIsAdminMode(!isAdminMode);
    setActivePage(isAdminMode ? "home" : "admin-dashboard");
  };

  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Navbar admin ou normalo */}
      {isAdminMode ? (
        <AdminNavbarShow 
          setActivePage={setActivePage} 
          handleLogout={handleLogout} 
          toggleAdminMode={toggleAdminMode}
        />
      ) : (
        <Navbar setActivePage={setActivePage} />
      )}

      <hr className="w-12/12 mx-auto border-t border-gray-200" />

      {/*admin ou voltar ao site (visível apenas quando autenticado) */}
      {isAuthenticated && (
        <div className="text-right p-2">
          <button 
            onClick={toggleAdminMode}
            className="px-4 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 text-sm"
          >
            {isAdminMode ? "Visualizar Site" : "Modo Admin"}
          </button>
        </div>
      )}

      {/*login admin (visível apenas quando não autenticado) */}
      {!isAuthenticated && activePage === "home" && (
        <div className="text-right p-2">
          <button 
            onClick={() => setActivePage("admin-login")}
            className="px-4 py-1 text-gray-500 hover:text-gray-700 text-sm"
          >
            Admin
          </button>
        </div>
      )}

      {/*conteúdo da pag com animação */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePage}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5 }}
          className="w-full flex-grow"
        >
          {/* pags públicas */}
          {!isAdminMode && activePage === "home" && <Home />}
          {!isAdminMode && activePage === "shortbio" && <ShortBio />}
          {!isAdminMode && activePage === "cv" && <PdfViewer />}
          {!isAdminMode && activePage === "education" && <Educationpage />}
          {!isAdminMode && activePage === "publication" && <Publicationspage />}
          {!isAdminMode && activePage === "teaching" && <Teachingpage />}
          {!isAdminMode && activePage === "workingpapers" && <WorkingPaperspage />}
          
          {/* Pagi login de admin */}
          {activePage === "admin-login" && (
            <Login handleLogin={handleLogin} />
          )}
          
          {/* Pags de admin */}
          {isAuthenticated && isAdminMode && activePage === "admin-dashboard" && (
            <AdminDashboard />
          )}
        
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;