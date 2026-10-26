import React from 'react'

const moreProjects = [
    {
        titulo: "Assassins creed Lightbox",
        desc: "Motor de narrativa interactiva basado en nodos para escritores de RPG.",
        tech: ["Vanilla Javascript"],
        githubLink: "https://github.com/carlosmorenodev/lightbox-assassins-creed",
        liveLink: "https://carlosmorenodev.github.io/lightbox-assassins-creed/",
        img: "/proyectos/LightboxAC.png",
        description: "Galería interactiva inspirada en la saga Assassin’s Creed, desarrollada para explorar la presentación de imágenes mediante un efecto lightbox. Un proyecto centrado en la manipulación del DOM, la interacción con el usuario y la creación de una experiencia visual atractiva y adaptable a distintos dispositivos.",
    },
    {
        titulo: "Colección de Cartas animadas",
        desc: "Simulador de terminal con efectos CRT y sistema de archivos dinámico.",
        tech: ["Vanilla Javascript"],
        githubLink: "https://github.com/carlosmorenodev/animated-cards",
        liveLink: "https://carlosmorenodev.github.io/animated-cards/",
        img: "/proyectos/animated-card.png",
        description: "Colección de tarjetas con animaciones y efectos visuales diseñados para crear una interfaz dinámica y atractiva. Este proyecto explora las posibilidades de CSS para trabajar con transiciones, transformaciones y microinteracciones, mejorando la experiencia de usuario sin renunciar a un diseño responsive.",
    },

    {
        titulo: "Juego con números",
        desc: "Blog desarrollado con Astro",
        tech: ["Vanilla Javascript"],
        githubLink: "https://github.com/carlosmorenodev/minijuego-numeros",
        liveLink: "https://carlosmorenodev.github.io/minijuego-numeros/",
        img: "/proyectos/juegonumeros.png",
        description: "Pequeño juego interactivo desarrollado con JavaScript para practicar la lógica de programación y la gestión de eventos. Incluye dinámicas basadas en números y respuestas del usuario, poniendo en práctica el uso de condicionales, funciones y manipulación del DOM.",
    },

    {
        titulo: "Clon de Twitter",
        desc: "Clon de Twitter (X) programado con NextJs",
        tech: ["NextJs"],
        githubLink: "https://github.com/carlosmorenodev/twitter-clone",
        liveLink: "https://carlosmm-twitter-clone.vercel.app/",
        img: "/proyectos/twitter-clone.png",
        description: "Proyecto inspirado en la interfaz de Twitter, desarrollado para practicar la construcción de interfaces de redes sociales mediante componentes reutilizables y un diseño responsive. Una oportunidad para trabajar la organización del contenido, la presentación de publicaciones y la reproducción de patrones habituales en aplicaciones web modernas.",
    },

];

const Page = () => {
    return (
        <main className='w-[70%] mx-auto py-12 grid grid-cols-1 md:grid-cols-2 gap-8'>
            {moreProjects.map((p, index) => (
                <div key={index} className="group border border-stone-800 bg-stone-900/20 hover:bg-stone-900/40 transition-all overflow-hidden flex flex-col h-full rounded-lg">
                    {/* Imagen con zoom */}
                    <div className="overflow-hidden">
                        <img
                            src={p.img}
                            alt={p.titulo}
                            className="transition-transform duration-300 group-hover:scale-110 w-full object-cover"
                        />
                    </div>

                    {/* Contenedor de información con padding */}
                    <div className="p-6 flex flex-col grow justify-between">
                        <div>
                            {/* Título */}
                            <h3 className="text-white text-xl text-center mb-2 group-hover:text-blue-400 transition-colors flex items-center justify-center">
                                {p.titulo}
                            </h3>
                            {/* Descripción */}
                            <p className="text-stone-400 text-sm text-center mb-4">{p.description}</p>
                        </div>

                        {/* Tecnologías */}
                        <div className="flex flex-wrap justify-center gap-2 mb-2">
                            {p.tech.map((t) => (
                                <span
                                    key={t}
                                    className="text-[12px] text-blue-400 border border-blue-900/50 px-2 py-0.5 uppercase font-bold bg-blue-950/20 rounded"
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
                                Ver en vivo
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </main>
    )
}

export default Page;