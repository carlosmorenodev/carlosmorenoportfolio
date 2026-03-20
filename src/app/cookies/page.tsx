import Link from "next/link";

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-stone-400 font-mono p-8 md:p-24">
      <div className="max-w-3xl mx-auto space-y-12">
        
        {/* Encabezado Estilo Terminal */}
        <header className="border-b border-blue-900/30 pb-8">
          <Link href="/" className="text-blue-500 text-xs hover:underline mb-4 block">
            &lt; VOLVER_AL_SISTEMA
          </Link>
          <h1 className="text-3xl text-white uppercase tracking-tighter font-bold">
            Protocolo de Cookies <span className="text-blue-500">[v.1.0]</span>
          </h1>
          <p className="text-xs text-stone-600 mt-2">ÚLTIMA ACTUALIZACIÓN: MARZO 2026</p>
        </header>

        {/* Contenido Seccionado */}
        <section className="space-y-8 leading-relaxed text-sm">
          <div className="space-y-4">
            <h2 className="text-blue-500 uppercase tracking-widest text-lg">01. Definición</h2>
            <p>
              Las cookies son pequeños archivos de datos que se alojan en tu terminal para que el sistema 
              reconozca tu sesión y preferencias. En <span className="text-white">Dentro del DOM</span>, 
              las usamos para optimizar la transmisión de datos.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-blue-500 uppercase tracking-widest text-lg">02. Tipos de Cookies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-stone-800 bg-stone-900/20">
                <h4 className="text-white text-xs mb-2">TÉCNICAS (Necesarias)</h4>
                <p className="text-[11px]">Permiten la navegación y las funciones básicas de seguridad. No se pueden desactivar.</p>
              </div>
              <div className="p-4 border border-stone-800 bg-stone-900/20">
                <h4 className="text-white text-xs mb-2">ANALÍTICAS</h4>
                <p className="text-[11px]">Recopilan datos anónimos sobre cómo interactúas con los proyectos del Grimoire API.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-blue-500 uppercase tracking-widest text-lg">03. Gestión</h2>
            <p>
              Puedes configurar tu navegador para bloquear estas cookies, pero partes de la 
              interfaz de usuario podrían quedar <span className="text-red-900 font-bold uppercase italic">corruptas</span> o inaccesibles.
            </p>
          </div>
        </section>

        {/* Footer de la página legal */}
        <footer className="pt-12 border-t border-stone-900 text-[10px] text-stone-600">
          <p>SISTEMA OPERATIVO: NEXTJS_STABLE_BUILD // USER_IP: ENCRYPTED</p>
        </footer>
      </div>
    </main>
  );
}