'use client'

import { BsArrowRight, BsCode, BsPhone, BsChatDots, BsDatabase, BsBuilding } from 'react-icons/bs'
import Link from 'next/link'
import { motion } from 'framer-motion'

const services = [
  {
    num: '01',
    title: 'Backend Development',
    description:
      'Desarrollo de soluciones robustas en backend, creación de APIs y realización de integraciones. Experiencia con Node.js, Express y bases de datos relacionales para implementar sistemas escalables.',
    href: '#'
  },
  {
    num: '02',
    title: 'Aplicaciones Móviles',
    description:
      'Diseño y desarrollo de aplicaciones móviles con React Native. Creación de prototipos y pruebas de consumo de APIs, optimizando la experiencia y rendimiento de la aplicación.',
    href: '#'
  },
  {
    num: '03',
    title: 'Chatbots e Integración',
    description:
      'Implementación de chatbots y sistemas de mensajería, conectando soluciones backend con plataformas como Meta para brindar experiencias conversacionales efectivas.',
    href: '#'
  },
  {
    num: '04',
    title: 'APIs & MongoDB',
    description:
      'Construcción de APIs robustas utilizando FAZT API y MongoDB, garantizando escalabilidad y rendimiento en el manejo eficiente de datos para diversas aplicaciones.',
    href: '#'
  },
  {
    num: '05',
    title: 'Soluciones Odoo ERP',
    description:
      'Desarrollo, personalización e integración de soluciones ERP usando Odoo, optimizando procesos administrativos y de gestión empresarial.',
    href: '#'
  },
]

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  },
}

function Services() {
  const getIconByIndex = (index) => {
    const commonClass = "text-green-600"
    switch(index) {
      case 0: return <BsCode className={commonClass} size={16} />
      case 1: return <BsPhone className={commonClass} size={16} />
      case 2: return <BsChatDots className={commonClass} size={16} />
      case 3: return <BsDatabase className={commonClass} size={16} />
      case 4: return <BsBuilding className={commonClass} size={16} />
      default: return <BsCode className={commonClass} size={16} />
    }
  }

  return (
    <section className="py-10">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: 'easeInOut' },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-slate-800/20 backdrop-blur rounded-lg p-6 hover:bg-slate-800/30 transition-all duration-300 border border-slate-700/30 flex flex-col h-full shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-green-800/30 hover:-translate-y-1 group"
            >
              {/* top */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-x-4">
                  <span className="text-3xl font-extrabold text-white group-hover:text-green-500 transition-colors">{service.num}</span>
                  <div className="w-10 h-10 rounded-full bg-green-600/15 flex items-center justify-center group-hover:bg-green-600/30 transition-all duration-300">
                    {getIconByIndex(index)}
                  </div>
                </div>
                <Link href={service.href} className="relative">
                  <div className="w-10 h-10 rounded-full bg-green-600/15 flex items-center justify-center transition-all duration-300 group-hover:bg-green-600/30">
                    <BsArrowRight className="text-green-500 transition-transform duration-300 group-hover:translate-x-1" size={18} />
                  </div>
                </Link>
              </div>
              
              {/* title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-500 transition-colors duration-300">{service.title}</h3>
              
              {/* description */}
              <p className="text-gray-300 text-sm mb-6 flex-grow group-hover:text-gray-200 transition-colors duration-300">{service.description}</p>
              
              {/* border & link */}
              <div className="pt-4 border-t border-slate-700/30 mt-auto group-hover:border-green-700/50 transition-colors duration-300">
                <Link 
                  href={service.href} 
                  className="text-sm text-green-500 hover:text-green-300 transition-colors duration-300 flex items-center"
                >
                  Explorar servicio
                  <BsArrowRight className="ml-2" size={12} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
