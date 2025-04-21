import { Phone, Mail, MapPin } from "lucide-react"
import ContactForm from "@/components/Contact-form"

export default function Contact() {
  return (
    <div className="min-h-screen bg-foreground text-white">
      <main className="container mx-auto px-4 pt-1 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-foreground p-8 rounded-lg">
          <h1 className="text-3xl font-bold mb-4 text-green-600">Trabajemos juntos</h1>
          <ContactForm />
        </div>

        <div className="space-y-8 py-35">
          <div className="flex items-start gap-4">
            <div className="bg-foreground p-3 rounded-lg">
              <Phone className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-300">Teléfono</h3>
              <p>+58 04124105423</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-foreground p-3 rounded-lg">
              <Mail className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-300">Email</h3>
              <p>leoanrdojgarciaparada2005@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-foreground p-3 rounded-lg">
              <MapPin className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-300">Dirección</h3>
              <p>Táchira, municipio Junín</p>
              <p>Código postal 5030</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="container mx-auto px-4 py-6 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Leonardo García. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}
