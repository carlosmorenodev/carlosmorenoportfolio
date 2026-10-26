import React from 'react'
import { FaCodepen, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
    return (
        <header className="flex flex-col md:flex-row justify-between items-center p-4 md:p-6 gap-4 border-b border-stone-900 bg-[#050505] sticky top-0 z-10">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 text-center sm:text-left">
                <img
                    src="/logo.png"
                    alt="Logo de Carlos Moreno Martín"
                    className="size-10 sm:size-12"
                />
                <h1 className="text-base sm:text-xl text-blue-500 font-medium tracking-[0.2em] uppercase text-center">
                    Carlos Moreno Martín
                </h1>
            </div>
            <div className="flex items-center gap-4">
                <a href="/" className="text-black text-2xl sm:text-3xl hover:text-blue-400 transition-colors bg-blue-500 px-2 rounded hover:text-white">Inicio</a>
                <a
                    href="https://www.linkedin.com/in/carlosmorenomartindev/"
                    target="_blank"
                >
                    <FaLinkedin className="text-blue-500 text-2xl sm:text-3xl hover:text-blue-400 transition-colors" />
                </a>
                <a href="https://github.com/carlosmorenodev" target="_blank">
                    <FaGithub className="text-blue-500 text-2xl sm:text-3xl hover:text-blue-400 transition-colors" />
                </a>
                <a href="https://codepen.io/carlosmmdev" target="_blank">
                    <FaCodepen className="text-blue-500 text-2xl sm:text-3xl hover:text-blue-400 transition-colors" />
                </a>
                <a href="mailto: carlosmorenomartindev@gmail.com" target="_blank">
                    <FaEnvelope className="text-blue-500 text-2xl sm:text-3xl hover:text-blue-400 transition-colors" />
                </a>
            </div>
        </header>
    )
}

export default Header