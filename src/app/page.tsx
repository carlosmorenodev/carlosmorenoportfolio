import { FaCodepen, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import { proyectos } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

const habilidades = [
  {
    cat: "Frontend",
    items: [
      "Astro",
      "React",
      "NextJs",
      "Tailwind CSS",
      "Bootstrap",
      "TypeScript",
    ],
  },
  { cat: "Backend", items: ["PHP", "MySQL", "Laravel"] },
];

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center p-6 flex-wrap border-b border-stone-900 bg-[#050505] sticky top-0 z-10">
        <div className="flex items-center gap-5">
          <img
            src="/logo.png"
            alt="Logo de Carlos MOreno Martín"
            className="size-12"
          />
          <h1 className="text-xl text-blue-500 font-medium tracking-[0.2em] uppercase">
            Carlos Moreno Martín
          </h1>
        </div>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/carlosmorenomartindev/"
            target="_blank"
          >
            <FaLinkedin className="text-blue-500 text-3xl" />
          </a>
          <a href="https://github.com/carlosmorenodev" target="_blank">
            <FaGithub className="text-blue-500 text-3xl" />
          </a>
          <a href="https://codepen.io/carlosmmdev" target="_blank">
            <FaCodepen className="text-blue-500 text-3xl" />
          </a>
          <a href="mailto: carlosmorenomartindev@gmail.com" target="_blank">
            <FaEnvelope className="text-blue-500 text-3xl" />
          </a>
        </div>
      </header>

      <main className="min-h-screen bg-[#050505] text-stone-300 font-mono p-6 md:p-12">
        <div className="max-w-360 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <section className="space-y-8 lg:col-span-4">
            <img
              src="/user-img.png"
              alt="Carlos Moreno Martín"
              className="w-sm"
            />

            <h2 className="text-xl text-blue-500 border-b border-blue-900/30 pb-2 uppercase tracking-widest">
              Habilidades
            </h2>
            {habilidades.map((cat) => (
              <div>
                <h3 className="text-white mb-3 text-sm">{cat.cat}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <span className="px-3 py-1 bg-stone-900 border border-stone-800 text-xs hover:border-blue-700 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section className="lg:col-span-8 space-y-8 text-center">
            <h2 className="text-xl text-blue-500 text-left border-b border-blue-900/30 pb-2 uppercase tracking-widest">
              Proyectos Seleccionados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ProjectCard />
            </div>
            <a
              href="https://github.com/carlosmorenodev"
              target="_blank"
              className="text-[16px] text-blue-400 border border-blue-900/50 px-3 py-1 uppercase font-bold bg-blue-950/20"
            >
              Ver más en GitHub
            </a>
          </section>
        </div>
      </main>

      <footer className="border-t border-stone-900 bg-[#050505] p-8 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center ">
          {/* Columna 1: Branding y Status */}
          <div className="space-y-2">
            <p className="text-blue-500 text-xs tracking-widest uppercase font-bold">
              Carlos Moreno Martín
            </p>
            <div className="flex items-center gap-2 text-[10px] text-stone-500 uppercase">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Disponible para nuevos proyectos
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
    </>
  );
}
