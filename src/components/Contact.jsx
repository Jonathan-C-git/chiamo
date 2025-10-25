import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    squareMeters: '',
    projectType: '',
    budget: '',
    message: '',
    consent: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    toast({
      title: "¡Solicitud enviada!",
      description: "Nos pondremos en contacto contigo pronto.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      squareMeters: '',
      projectType: '',
      budget: '',
      message: '',
      consent: false
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contacto" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C2416] mb-4">
            Pedir Presupuesto
          </h2>
          <div className="w-24 h-1 bg-[#6B8E23] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Nombre *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Teléfono / WhatsApp *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="address">Dirección</Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-2"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="squareMeters">Metros cuadrados estimados</Label>
                  <Input
                    id="squareMeters"
                    name="squareMeters"
                    type="number"
                    value={formData.squareMeters}
                    onChange={handleChange}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="projectType">Tipo de proyecto</Label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B8E23]"
                  >
                    <option value="">Seleccionar...</option>
                    <option value="nueva-obra">Nueva obra</option>
                    <option value="ampliacion">Ampliación</option>
                    <option value="refaccion">Refacción</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              <div>
                <Label htmlFor="budget">Presupuesto estimado</Label>
                <Input
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-2"
                />
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, consent: checked }))}
                />
                <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
                  Acepto la política de privacidad y el tratamiento de mis datos personales
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#6B8E23] hover:bg-[#5a7a1d] text-white font-bold py-3 text-lg"
              >
                Enviar solicitud
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-[#F5F1E8] rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#2C2416] mb-6">Información de Contacto</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-[#6B8E23] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-[#2C2416]">Dirección</p>
                    <p className="text-[#5D4E37]">Escobar, Buenos Aires, Argentina</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-[#6B8E23] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-[#2C2416]">Teléfono</p>
                    <p className="text-[#5D4E37]">+54 11 XXXX-XXXX</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-[#6B8E23] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-[#2C2416]">Email</p>
                    <p className="text-[#5D4E37]">info@chiamoconstrucciones.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="font-semibold text-[#2C2416] mb-4">Síguenos en redes sociales</p>
                <div className="flex space-x-4">
                  <a href="#" className="bg-[#6B8E23] p-3 rounded-full hover:bg-[#5a7a1d] transition-colors">
                    <Facebook className="text-white" size={24} />
                  </a>
                  <a href="#" className="bg-[#6B8E23] p-3 rounded-full hover:bg-[#5a7a1d] transition-colors">
                    <Instagram className="text-white" size={24} />
                  </a>
                  <a href="#" className="bg-[#6B8E23] p-3 rounded-full hover:bg-[#5a7a1d] transition-colors">
                    <Linkedin className="text-white" size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg h-80">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-58.8,-34.4,-58.7,-34.3&layer=mapnik&marker=-34.35,-58.75"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Mapa de ubicación CHIAMO Construcciones en Escobar"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;