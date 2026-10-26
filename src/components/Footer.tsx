import React from 'react'
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="border-t border-stone-900 bg-[#050505] p-8 ">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center ">
                {/* Columna 1: Branding y Status */}
                <div className="space-y-2">
                    <p className="text-blue-500 text-xs tracking-widest uppercase font-bold">
                        Carlos Moreno Martín
                    </p>
                    <div className="flex items-center gap-2 text-[10px] text-stone-500 uppercase">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Buscando mi primera oportunidad como desarrollador web
                    </div>
                </div>

                {/* Columna 2: Créditos Técnicos */}
                <div className="text-center">
                    <p className="text-[10px] text-stone-600 uppercase tracking-[0.2em]">
                        Desarrollado con{" "}
                        <span className="text-stone-400">Next.js 15</span> &{" "}
                        <span className="text-stone-400">Tailwind CSS</span>
                    </p>
                </div>

                {/* Columna 3: Copyright y Legal */}
                <div className="text-right space-y-1">
                    <p className="text-[10px] text-stone-500 uppercase">
                        © {new Date().getFullYear()} — Todos los derechos reservados
                    </p>
                    <div className="flex justify-end gap-4 text-[9px] text-stone-600 uppercase tracking-tighter">
                        <Link
                            href="/privacidad"
                            className="hover:text-blue-500 transition-colors"
                        >
                            Privacidad
                        </Link>

                        <Link
                            href="/cookies"
                            className="hover:text-blue-500 transition-colors"
                        >
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer