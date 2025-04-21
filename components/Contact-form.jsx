"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceChange = (value) => {
    setFormData((prev) => ({ ...prev, service: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Formulario enviado:", formData)
    // Aquí iría la lógica para enviar el formulario
  }

  return (
    <>
      <p className="text-gray-400 mb-8">
        Estoy disponible para proyectos freelance y oportunidades de trabajo. Contáctame para discutir
        cómo puedo ayudarte.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Nombre"
              className="bg-[#121316] border-0 h-12 text-white"
            />
          </div>
          <div>
            <Input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Apellido"
              className="bg-[#121316] border-0 h-12 text-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Correo electrónico"
              className="bg-[#121316] border-0 h-12 text-white"
            />
          </div>
          <div>
            <Input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Número de teléfono"
              className="bg-[#121316] border-0 h-12 text-white"
            />
          </div>
        </div>

        <Select onValueChange={handleServiceChange}>
          <SelectTrigger className="bg-[#121316] border-0 h-12 text-white">
            <SelectValue placeholder="Selecciona un servicio" />
          </SelectTrigger>
          <SelectContent className="bg-[#1a1c20] text-white border-0">
            <SelectItem value="web">Desarrollo Web</SelectItem>
            <SelectItem value="mobile">Desarrollo Móvil</SelectItem>
            <SelectItem value="design">Diseño UI/UX</SelectItem>
            <SelectItem value="consulting">Consultoría</SelectItem>
          </SelectContent>
        </Select>

        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Escribe tu mensaje aquí."
          className="bg-[#121316] border-0 min-h-[120px] text-white"
        />

        <Button type="submit" className="bg-green-600/90 text-white cursor-pointer hover:bg-green-600/45 transition px-6 py-2 rounded-full">
          Enviar mensaje
        </Button>
      </form>
    </>
  )
}
