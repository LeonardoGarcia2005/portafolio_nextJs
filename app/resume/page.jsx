'use client'

import { useState } from 'react'
import {
  FaJs,
  FaPython,
  FaNodeJs,
  FaReact,
  FaLinux,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaUserGraduate,
  FaBriefcase,
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaEnvelope,
  FaPhone,
  FaUser,
  FaCode,
} from 'react-icons/fa'

import {
  SiExpress,
  SiPostgresql,
  SiSqlite,
  SiMongodb,
  SiNginx,
  SiGraphql,
  SiApollographql,
  SiVite,
  SiDocker,
  SiPostman,
  SiDiscord,
} from 'react-icons/si'

export default function Resume() {
  const [activeSection, setActiveSection] = useState('about')
  const iconSize = 40

  const renderContent = () => {
    switch (activeSection) {
      case 'experience':
        return (
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-semibold mb-4 text-green-600 flex items-center gap-2">
              <FaBriefcase /> Experiencia Laboral
            </h2>
            <div className="mb-6">
              <h3 className="text-xl font-medium text-green-600">
                Agencia Pangea Technologies
              </h3>
              <p className="text-gray-400">2023 - Actualidad</p>
              <p className="mt-2">
                Desarrollo de aplicaciones con React y Node.js. Aprendizaje
                continuo sobre arquitectura hexagonal, servicios en TypeScript y
                manejo de bases de datos relacionales.
              </p>
            </div>
          </div>
        )
      case 'education':
        return (
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-semibold mb-4 text-green-600 flex items-center gap-2">
              <FaUserGraduate /> Educación
            </h2>
            <div className="mb-6">
              <h3 className="text-xl font-medium text-green-600">
                Universidad Politécnica Territorial Agroindustrial del Estado
                Táchira
              </h3>
              <p className="text-gray-400">Actualmente cursando</p>
              <p className="mt-2">
                Técnico Superior Universitario en Informática. Actualmente
                cursando el nivel de Ingeniería.
              </p>
            </div>
          </div>
        )
      case 'skills':
        return (
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-semibold mb-4 text-green-600 flex items-center gap-2">
              <FaCode /> Tecnologías y Herramientas
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
              <div className="flex flex-col items-center">
                <FaJs size={iconSize} color="#F7DF1E" title="JavaScript" />
                <span className="text-xs mt-1 text-green-600">JavaScript</span>
              </div>
              <div className="flex flex-col items-center">
                <SiPostman size={iconSize} color="#FF6C37" title="Postman" />
                <span className="text-xs mt-1 text-green-600">Postman</span>
              </div>
              <div className="flex flex-col items-center">
                <SiDiscord size={iconSize} color="#5865F2" title="Discord" />
                <span className="text-xs mt-1 text-green-600">Discord</span>
              </div>
              <div className="flex flex-col items-center">
                <SiDocker size={iconSize} color="#2496ED" title="Docker" />
                <span className="text-xs mt-1 text-green-600">Docker</span>
              </div>
              <div className="flex flex-col items-center">
                <FaNodeJs size={iconSize} color="#339933" title="Node.js" />
                <span className="text-xs mt-1 text-green-600">Node.js</span>
              </div>
              <div className="flex flex-col items-center">
                <FaReact size={iconSize} color="#61DAFB" title="React" />
                <span className="text-xs mt-1 text-green-600">React</span>
              </div>
              <div className="flex flex-col items-center">
                <FaLinux size={iconSize} color="#FCC624" title="Linux" />
                <span className="text-xs mt-1 text-green-600">Linux</span>
              </div>
              <div className="flex flex-col items-center">
                <FaHtml5 size={iconSize} color="#E34F26" title="HTML5" />
                <span className="text-xs mt-1 text-green-600">HTML5</span>
              </div>
              <div className="flex flex-col items-center">
                <FaCss3Alt size={iconSize} color="#1572B6" title="CSS3" />
                <span className="text-xs mt-1 text-green-600">CSS3</span>
              </div>
              <div className="flex flex-col items-center">
                <SiVite size={iconSize} color="#646CFF" title="Vite" />
                <span className="text-xs mt-1 text-green-600">Vite</span>
              </div>
              <div className="flex flex-col items-center">
                <FaPython size={iconSize} color="#3776AB" title="Python" />
                <span className="text-xs mt-1 text-green-600">Python</span>
              </div>
              <div className="flex flex-col items-center">
                <SiPostgresql
                  size={iconSize}
                  color="#336791"
                  title="PostgreSQL"
                />
                <span className="text-xs mt-1 text-green-600">PostgreSQL</span>
              </div>
              <div className="flex flex-col items-center">
                <SiSqlite size={iconSize} color="#003B57" title="SQLite" />
                <span className="text-xs mt-1 text-green-600">SQLite</span>
              </div>
              <div className="flex flex-col items-center">
                <SiMongodb size={iconSize} color="#47A248" title="MongoDB" />
                <span className="text-xs mt-1 text-green-600">MongoDB</span>
              </div>
              <div className="flex flex-col items-center">
                <SiNginx size={iconSize} color="#009639" title="NGINX" />
                <span className="text-xs mt-1 text-green-600">NGINX</span>
              </div>
              <div className="flex flex-col items-center">
                <FaGithub size={iconSize} title="GitHub" />
                <span className="text-xs mt-1 text-green-600">GitHub</span>
              </div>
              <div className="flex flex-col items-center">
                <SiExpress size={iconSize} title="Express.js" />
                <span className="text-xs mt-1 text-green-600">Express.js</span>
              </div>
              <div className="flex flex-col items-center">
                <SiGraphql size={iconSize} color="#E10098" title="GraphQL" />
                <span className="text-xs mt-1 text-green-600">GraphQL</span>
              </div>
              <div className="flex flex-col items-center">
                <SiApollographql
                  size={iconSize}
                  color="#311C87"
                  title="Apollo GraphQL"
                />
                <span className="text-xs mt-1 text-green-600">Apollo</span>
              </div>
            </div>
          </div>
        )
      case 'about':
      default:
        return (
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-semibold mb-4 text-green-600 flex items-center gap-2">
              <FaUser /> Sobre mí
            </h2>
            <p className="text-lg mb-6 leading-relaxed">
              Soy Leonardo García, un joven desarrollador backend con muchas
              ganas de crecer y aprender. Actualmente trabajo en la agencia
              Pangea Technologies desde el año 2023, donde he desarrollado desde
              cero una página con React y servicios en Node.js. A lo largo de
              este tiempo he profundizado en bases de datos relacionales, manejo
              de servicios, arquitectura hexagonal, y el uso de TypeScript. Me
              apasiona resolver problemas complejos, entender el funcionamiento
              interno de los sistemas y colaborar en proyectos que me reten
              constantemente.
            </p>

            <h3 className="text-xl font-medium mb-2 text-green-600">
              Información Personal
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-green-600" />
                <span>
                  <strong className="text-green-600">Ubicación:</strong> Junín,
                  Estado Táchira, Venezuela
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FaBirthdayCake className="text-green-600" />
                <span>
                  <strong className="text-green-600">
                    Fecha de Nacimiento:
                  </strong>{' '}
                  5 de abril del 2005
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FaUser className="text-green-600" />
                <span>
                  <strong className="text-green-600">Género:</strong> Masculino
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-green-600" />
                <span>
                  <strong className="text-green-600">Correo:</strong>{' '}
                  leonardojgarciaparada2005@gmail.com
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-green-600" />
                <span>
                  <strong className="text-green-600">Teléfono:</strong>{' '}
                  0412-4105423
                </span>
              </li>
            </ul>
          </div>
        )
    }
  }

  return (
    <div className="bg-foreground min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="md:w-64 bg-foreground p-6">
        <div className="mb-8">
          <h1 className="text-xl font-bold text-green-600 mb-1">
            Leonardo García
          </h1>
          <p className="text-gray-400 text-sm">Desarrollador Backend Junior</p>
        </div>

        <nav>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setActiveSection('about')}
                className={`w-full text-left px-4 py-2 rounded transition-colors flex items-center gap-2 ${
                  activeSection === 'about'
                    ? 'bg-green-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                <FaUser /> Sobre mí
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection('experience')}
                className={`w-full text-left px-4 py-2 rounded transition-colors flex items-center gap-2 ${
                  activeSection === 'experience'
                    ? 'bg-green-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <FaBriefcase /> Experiencia
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection('education')}
                className={`w-full text-left px-4 py-2 rounded transition-colors flex items-center gap-2 ${
                  activeSection === 'education'
                    ? 'bg-green-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <FaUserGraduate /> Educación
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection('skills')}
                className={`w-full text-left px-4 py-2 rounded transition-colors flex items-center gap-2 ${
                  activeSection === 'skills'
                    ? 'bg-green-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <FaCode /> Habilidades
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 text-white">{renderContent()}</div>
    </div>
  )
}
