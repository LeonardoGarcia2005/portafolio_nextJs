'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

function Photo() {
  const backgroundColor = "oklch(0.151 0.01 307.31)";
  
  return (
    <motion.div
      className="relative w-[236px] h-[236px] xl:w-[480px] xl:h-[390px] mix-blend-lightens"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: 'easeInOut' },
      }}
    >
      <div
        className="absolute inset-0 z-10 rounded-md"
        style={{
          background:
            'radial-gradient(circle at center, rgba(50, 50, 50, 0.3) 0%, rgba(0, 0, 0, 0) 70%)',
          zIndex: 0,
        }}
      ></div>
      <div className="relative w-full h-full">
        <Image
          src="/assets/photo.png"
          priority
          quality={95}
          alt="Leonardo Garcia"
          fill
          className="object-cover rounded-md"
          style={{
            objectFit: 'contain',
            filter:
              'brightness(1) contrast(1.3) drop-shadow(0 0 8px rgba(0,0,0,0.8))',
            maskImage:
              'radial-gradient(circle at center, black 50%, rgba(0,0,0,0.3) 75%, transparent 90%)',
            WebkitMaskImage:
              'radial-gradient(circle at center, black 50%, rgba(0,0,0,0.3) 75%, transparent 100%)',
          }}
        />
        {/* Efecto de desvanecimiento que coincide con el color del fondo */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-24 rounded-b-md"
          style={{
            background: `linear-gradient(to top, ${backgroundColor} 5%, rgba(255,255,255,0) 100%)`,
            mixBlendMode: 'normal'
          }}
        ></div>
      </div>
    </motion.div>
  )
}

export default Photo