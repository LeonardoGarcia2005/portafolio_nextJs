"use client"

import Image from "next/image"
import Link from "next/link"
import { FiArrowUpRight } from "react-icons/fi"
import { FaGithub } from "react-icons/fa"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

function Work() {
  const [activeProject, setActiveProject] = useState("palabra-de-vida")
  
  const projects = [
    {
      id: "palabra-de-vida",
      title: "Palabra de Vida",
      number: "01",
      description: "Aplicación de biblia cristiana con lecturas diarias y búsqueda de versículos",
      image: "/assets/work/palabra.png",
      backendTech: ["Node.js", "Express", "PostgreSql"],
      frontendTech: ["React", "Bootstrap"],
      contribution: "Desarrollé toda la lógica del backend con Node.js mientras colaboré con el equipo en aspectos del frontend.",
      github: "#",
      demo: "#"
    },
    {
      id: "teneria",
      title: "Tenería",
      number: "02",
      description: "Sistema de gestión de inventario para control de productos y materiales",
      image: "/assets/work/teneria.jpg",
      backendTech: ["Node.js", "Express", "PostgreSql"],
      frontendTech: ["React", "Bootstrap"],
      contribution: "Encargado del desarrollo completo del backend y las APIs. Proporcioné soporte al equipo de frontend durante la integración.",
      github: "#",
      demo: "#"
    },
    {
      id: "pdf-connect",
      title: "PDF Connect",
      number: "03",
      description: "Gestor de documentos PDF para lectura, anotación y compartir archivos",
      image: "/assets/work/pdfconnect.jpg",
      backendTech: ["Python", "FastAPI", "MongoDB"],
      frontendTech: ["Vue.js", "Vuetify"],
      contribution: "Desarrollé el backend completo con FastAPI y Python, mientras el frontend fue implementado por el equipo usando Vue.js.",
      github: "#",
      demo: "#"
    },
  ]

  const handleTabChange = (value) => {
    setActiveProject(value)
  }

  const getProjectIndex = () => {
    return projects.findIndex(project => project.id === activeProject)
  }

  const currentProject = projects.find(p => p.id === activeProject);
  
  return (
    <div className="min-h-screen bg-foreground text-white flex items-start justify-center pt-25 px-10 pb-6">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Section - Project Info */}
        <div className="flex flex-col justify-center space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeProject}-number`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              <h1 className="text-5xl font-bold tracking-tighter">
                <span className="border border-gray-700 rounded-full px-3 py-1">
                  {currentProject?.number}
                </span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold mt-3">Desarrollo Backend</h2>
              <p className="text-gray-400 text-sm mt-2 max-w-md">
                Especializado en el desarrollo de backend con soporte frontend. Creo soluciones robustas y escalables.
              </p>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeProject}-contribution`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-2"
            >
              <p className="text-sm text-gray-300">
                {currentProject?.contribution}
              </p>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeProject}-tech`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-3"
            >
              <div className="flex flex-wrap gap-2">
                {currentProject?.backendTech.map((tech, i) => (
                  <Badge key={`back-${i}`} variant="outline" className="text-emerald-400 border-emerald-400/20 bg-emerald-400/10">
                    {tech}
                  </Badge>
                ))}
                {currentProject?.frontendTech.map((tech, i) => (
                  <Badge key={`front-${i}`} variant="outline" className="text-blue-400 border-blue-400/20 bg-blue-400/10">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="border-t border-gray-800 my-3 pt-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeProject}-links`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex gap-3"
              >
                <Link href={currentProject?.demo || "#"} className="p-2 border border-gray-800 rounded-full hover:bg-gray-900 transition-colors">
                  <FiArrowUpRight size={18} />
                </Link>
                <Link href={currentProject?.github || "#"} className="p-2 border border-gray-800 rounded-full hover:bg-gray-900 transition-colors">
                  <FaGithub size={18} />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Section - Project Showcase */}
        <div className="relative">
          <Tabs 
            defaultValue="palabra-de-vida" 
            className="w-full"
            onValueChange={handleTabChange}
          >
            <TabsList className="grid grid-cols-3 mb-3 mx-auto">
              {projects.map((project) => (
                <TabsTrigger key={project.id} value={project.id} className="text-sm text-white">
                  {project.title}
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="h-[300px] relative overflow-hidden">
              <AnimatePresence mode="wait">
                {projects.map((project) => (
                  project.id === activeProject && (
                    <TabsContent key={project.id} value={project.id} className="mt-0 h-full">
                      <motion.div 
                        className="rounded-lg relative h-full"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: 1,
                          transition: { delay: 0.5, duration: 0.4, ease: 'easeInOut' },
                        }}
                      >
                        {/* Project image with overlay */}
                        <div className="relative overflow-hidden rounded-lg shadow-2xl h-full">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={`${project.title} preview`}
                            width={600}
                            height={400}
                            className="w-full h-full object-cover rounded-lg"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
                            <h3 className="text-base font-bold">{project.title}</h3>
                            <p className="text-xs text-gray-300 mt-1">{project.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    </TabsContent>
                  )
                ))}
              </AnimatePresence>
            </div>
          </Tabs>

          {/* Navigation Dots - Moved closer to the image */}
          <div className="flex gap-1 justify-center mt-2">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                animate={{ 
                  scale: index === getProjectIndex() ? 1.2 : 1 
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === getProjectIndex() ? 'bg-green-600' : 'bg-gray-600'}`}
              ></motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work