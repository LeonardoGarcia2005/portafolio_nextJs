import { FiDownload } from 'react-icons/fi'
/* Componentes */
import Social from '@/components/Social'
import { Button } from '@/components/ui/button'
import Photo from '@/components/Photo'
import Stats from '@/components/Stats'

function Home() {
  return (
    // Cambiamos items-center por items-start y agregamos pt-2 para ajustar el espacio superior
    <section className="min-h-screen flex items-start pt-6">
      <div className="container mx-auto">
        <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-22">
          {/* Quitamos el padding-top de xl:pt-4 para evitar el espacio adicional */}
          <div className="flex flex-col xl:flex-row items-center justify-between gap-10 pb-12">
            {/* Text + Botones */}
            <div className="text-center xl:text-left order-2 xl:order-none flex-1">
              <span className="text-center xl:text-left">
                Desarrollador Backend
              </span>
              <h1 className="h1 mb-6">
                Hola, soy <br />
                <span className="text-green-600">Leonardo Garcia</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                Especialista en desarrollo backend con amplia experiencia en
                arquitecturas robustas y APIs eficientes. Poseo conocimientos
                básicos en desarrollo frontend y DevOps que complementan mi
                perfil técnico.
              </p>
              {/* Botón y Redes */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <a href="/assets/cv.png" download className="w-fit">
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex items-center gap-2 bg-transparent border-green-600/50 text-green-600/80 hover:bg-green-600/50 hover:text-black cursor-pointer"
                  >
                    <FiDownload className="text-xl" />
                    Descargar CV
                  </Button>
                </a>
                <div>
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-green-600 rounded-full flex justify-center items-center text-green-600 text-base hover:bg-green-600 hover:text-foreground hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>
            {/* Imagen */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0 flex-1 flex justify-center">
              <Photo />
            </div>
          </div>
        </div>
        {/* Stats se muestran justo debajo */}
        <Stats />
      </div>
    </section>
  )
}

export default Home
