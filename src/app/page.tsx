import { FaCodepen, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import { proyectos } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

const habilidades = [
  {
    cat: "Frontend",
    items: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "Astro",
      "React",
      "NextJs",


      "TypeScript",
    ],
  },
  { cat: "Estilos", items: ["Tailwind CSS", "Bootstrap"] },
  { cat: "Backend", items: ["PHP", "MySQL", "Laravel", "Supabase"] },
  { cat: "Herramientas", items: ["GIT", "Github", "Vercel", "Consumo de APIs REST"] },
];

export default function Home() {
  return (
    <>
      {/* <main className="min-h-screen bg-[#050505] text-stone-300 font-mono p-6 md:p-12"> */}
      <div className="max-w-360 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <section className="space-y-8 lg:col-span-4">
          <img
            src="/user-img.png"
            alt="Carlos Moreno Martín"
            className="w-sm"
          />
          <div>
            <h2 className="text-xl text-blue-500 border-b border-blue-900/30 pb-2 uppercase tracking-widest">Sobre mí</h2>
            <p className="text-sm/6 mb-2">Soy desarrollador frontend y estoy orientando mi carrera profesional al desarrollo de aplicaciones web modernas.</p>
            <p className="text-sm/6 mb-2">Trabajo principalmente con JavaScript, React y Next.js. A través de mis proyectos personales he practicado el desarrollo de interfaces responsive, el consumo de APIs, la gestión de estado y la integración con servicios como Supabase.</p>
            <p className="text-sm/6 mb-2">Me gusta aprender construyendo proyectos funcionales, resolver problemas y mejorar el código de forma progresiva.</p>
            <p className="text-sm/6 mb-6">Actualmente busco mi primera oportunidad profesional como desarrollador web, preferiblemente en Málaga o en remoto desde España, donde pueda aportar mis conocimientos y seguir aprendiendo dentro de un equipo.</p>
            <div className="flex gap-2 justify-center">
              <a href="/proyectos"><button className="bg-blue-500 text-black border py-1.5 px-2 cursor-pointer hover:text-blue-400  hover:bg-blue-950/20 hover:border-blue-900/50">Ver proyectos</button></a>
              <a href="mailto: carlosmorenomartindev@gmail.com"><button className="bg-blue-500 text-black border py-1.5 px-2 cursor-pointer hover:text-blue-400  hover:bg-blue-950/20 hover:border-blue-900/50">Contactar</button></a>
              <a href="/curriculum-carlos-moreno.pdf" target="_blank"><button className="bg-blue-500 text-black border py-1.5 px-2 cursor-pointer hover:text-blue-400  hover:bg-blue-950/20 hover:border-blue-900/50">Descargar CV</button></a>
            </div>


          </div>

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      {/* </main> */}


    </>
  );
}
