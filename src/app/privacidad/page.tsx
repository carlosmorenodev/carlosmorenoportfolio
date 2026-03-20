import Link from "next/link";

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-stone-400 font-mono p-8 md:p-24">
      <div className="max-w-3xl mx-auto space-y-12">
        
        {/* Header Estilo Consola */}
        <header className="border-b border-blue-900/30 pb-8">
          <Link href="/" className="text-blue-500 text-xs hover:underline mb-4 block italic">
            &lt; RETURN_TO_BASE
          </Link>
          <h1 className="text-3xl text-white uppercase tracking-tighter font-bold">
            Data Privacy Protocol <span className="text-blue-500">[SEC-02]</span>
          </h1>
          <p className="text-[10px] text-stone-600 mt-2 tracking-[0.3em]">ENCRYPTED DOCUMENT // NO-TRACKING ZONE</p>
        </header>

        {/* Cuerpo del Documento */}
        <section className="space-y-10 leading-relaxed text-sm">
          
          <div className="space-y-4">
            <h2 className="text-blue-500 uppercase tracking-widest text-lg flex items-center gap-2">
              <span className="text-xs opacity-50">01.</span> Responsable del Tratamiento
            </h2>
            <p>
              El responsable del sistema <span className="text-white">"Dentro del DOM"</span> es <span className="text-white">Carlos Moreno Martín</span>. 
              Cualquier consulta sobre tus datos puede ser enviada al nodo: 
              <span className="text-blue-400 ml-2">carlosmorenomartindev@gmail.com</span>
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-blue-500 uppercase tracking-widest text-lg flex items-center gap-2">
              <span className="text-xs opacity-50">02.</span> Recopilación de Datos
            </h2>
            <p>
              Este sitio está diseñado para ser una zona de **Cero Rastreo**. 
              No almacenamos bases de datos de usuarios, no usamos píxeles de seguimiento ni compartimos información con corporaciones externas. 
              Si decides contactarme vía email, tus datos solo se usarán para responder a tu transmisión.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-blue-500 uppercase tracking-widest text-lg flex items-center gap-2">
              <span className="text-xs opacity-50">03.</span> Tus Derechos (GDPR/RGPD)
            </h2>
            <p className="bg-stone-900/30 p-4 border-l-2 border-blue-500">
              Como usuario de la red, tienes derecho a acceder, rectificar o eliminar cualquier trazo de tu información personal. 
              Para ejecutar estas acciones, envía un comando de "Baja" a mi dirección de contacto.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-blue-500 uppercase tracking-widest text-lg flex items-center gap-2">
              <span className="text-xs opacity-50">04.</span> Seguridad
            </h2>
            <p>
              Implementamos capas de seguridad mediante HTTPS y despliegues cifrados en Vercel para asegurar que la integridad del DOM no sea comprometida.
            </p>
          </div>

        </section>

        {/* Footer del Documento */}
        <footer className="pt-12 border-t border-stone-900 flex justify-between items-center">
          <p className="text-[10px] text-stone-600">END_OF_LINE_</p>
          <div className="h-1 w-12 bg-blue-500/20"></div>
        </footer>
      </div>
    </main>
  );
}