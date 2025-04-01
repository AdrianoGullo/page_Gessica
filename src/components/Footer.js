import React from "react";
import { CiPhone } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io";


function Footer() {
  return (
    <div className="py-10 px-10 mt-auto text-white" style={{ backgroundColor: "rgb(20, 43, 42)" }}>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Coluna 1 */}
        <div>
          <h3 className="text-lg font-semibold border-b-2 border-gray-300 pb-2 mb-4">Phone</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-1 hover:underline italic">
              <CiPhone className="text-xl" /> {/* Ícone ajustado para tamanho adequado */}
              <a href="tel:+">574-303-3779</a> {/* Número de telefone */}
            </li>
          </ul>
        </div>

        {/* Coluna 2 */}
        <div>
          <h3 className="text-lg font-semibold border-b-2 border-gray-300 pb-2 mb-4">Location</h3>
          <ul className="space-y-2">
            <li>2051 Jenkins Nanovic Hall Notre Dame, Indiana, 46556</li>
          </ul>
        </div>

        {/* Coluna 3 */}
        <div>
          <h3 className="text-lg font-semibold border-b-2 border-gray-300 pb-2 mb-4">Hours</h3>
          <ul className="space-y-2">
            <li>Monday-Friday: 09am-06pm</li>
            <li>Saturday: 09am-01pm</li>
          </ul>
        </div>

        {/* Coluna 4 */}
        <div>
          <h3 className="text-lg font-semibold border-b-2 border-gray-300 pb-2 mb-4 mr-3">Connect</h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-5 italic">
              <a href="mailto:gdefreit@nd.edu"> <MdOutlineMailOutline className="text-4xl hover:text-5xl" /> </a>
              <a href="https://www.linkedin.com/in/gessica-de-freitas/"> <CiLinkedin className="text-4xl hover:border-white"/> </a> 
              <a href="https://github.com/Defreitasgb"> <IoLogoGithub className="text-4xl hover:text-5xl" /> </a> 
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
