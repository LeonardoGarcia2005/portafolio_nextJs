'use client'
import CountUp from 'react-countup'

const stats = [
  {
    num: 2,
    text: 'Años de experiencia',
  },
  {
    num: 10,
    text: 'Tecnologías manejadas',
  },
  {
    num: 8,
    text: 'Proyectos realizados',
  },
  {
    num: 250,
    text: 'Code commits',
  },
]

function Stats() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-10 gap-x-8 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center xl:justify-start gap-4"
            >
              {/* Contenedor de número con ancho fijo para mantener el alineado */}
              <div className="min-w-[80px] text-right">
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-5xl xl:text-6xl font-extrabold text-green-600 glow-text inline-block"
                />
              </div>
              <p className="whitespace-nowrap leading-snug text-white/80 text-lg font-medium">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Efecto glow para los números */}
      <style jsx>{`
        .glow-text {
          text-shadow: 0 0 10px rgba(34, 197, 94, 0.8),
            0 0 20px rgba(34, 197, 94, 0.6);
        }
      `}</style>
    </section>
  )
}

export default Stats
