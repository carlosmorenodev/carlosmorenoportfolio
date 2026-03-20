import React from "react";

import { proyectos } from "@/lib/projects";

const ProjectCard = () => {
  return (
    <>
    {proyectos.map((p) => (
      <div className="group border border-stone-800 bg-stone-900/20 hover:bg-stone-900/40 transition-all overflow-hidden flex flex-col h-full">
        {/* Imagen con zoom */}
        <div className="overflow-hidden">
          <img
            src={p.img}
            alt={p.titulo}
            className="transition-transform duration-300 group-hover:scale-110 w-full object-cover"
          />
        </div>

        {/* Contenedor de información con padding */}
        <div className="p-6 flex flex-col grow">
          {/* 1. Título: Siempre arriba */}
          <h3 className="text-white text-xl text-center mb-4 group-hover:text-blue-400 transition-colors h-[60px] flex items-center justify-center">
            {p.titulo}
          </h3>

          {/* 2. Tecnologías: Se quedan en el medio */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {p.tech.map((t) => (
              <span
                key={t}
                className="text-[12px] text-blue-400 border border-blue-900/50 px-2 py-0.5 uppercase font-bold bg-blue-950/20"
              >
                {t}
              </span>
            ))}
          </div>

          {/* 3. Enlaces: Empujados al fondo con mt-auto */}
          <div className="flex justify-center gap-10 mt-auto pt-4 border-t border-stone-800/50">
            <a
              href={p.githubLink}
              target="_blank"
              className="text-s text-stone-400 hover:text-white underline underline-offset-4"
            >
              Ver Github
            </a>
            <a
              href={p.liveLink}
              target="_blank"
              className="text-s text-stone-400 hover:text-white underline underline-offset-4"
            >
              Ver vivo
            </a>
          </div>
        </div>
      </div>
       ))}
    </>
  );
};

export default ProjectCard;
