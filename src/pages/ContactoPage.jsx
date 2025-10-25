
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import PageTransition from '@/components/PageTransition';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

const ContactoPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', address: '', squareMeters: '',
    projectType: 'nueva-obra', budget: '', message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage =
      `*Nuevo pedido de presupuesto:*
*Nombre:* ${formData.name}
*Teléfono:* ${formData.phone}
*Email:* ${formData.email}
*Dirección:* ${formData.address || 'No especificada'}
*Metros cuadrados:* ${formData.squareMeters || 'No especificados'}
*Tipo de proyecto:* ${formData.projectType}
*Presupuesto estimado:* ${formData.budget || 'No especificado'}
*Mensaje:* ${formData.message || 'Sin mensaje'}`.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5491130613873&text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    toast({ title: "¡Solicitud enviada!", description: "Tu solicitud se está abriendo en WhatsApp. Nos contactaremos a la brevedad." });
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Contacto | CHIAMO Construcciones</title>
        <meta name="description" content="Pida su presupuesto. Complete el formulario y nos pondremos en contacto para transformar su proyecto en realidad." />
      </Helmet>
      <div className="bg-chiamo-light pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-chiamo-dark mb-4">Pedir Presupuesto</h1>
            <p className="text-lg text-chiamo-text">Completá el formulario y te responderemos a la brevedad.</p>
            <div className="w-24 h-1 bg-chiamo-green mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div><Label htmlFor="name">Nombre completo *</Label><Input id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-2" /></div>
                  <div><Label htmlFor="email">Email *</Label><Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="mt-2" /></div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div><Label htmlFor="phone">Teléfono / WhatsApp *</Label><Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required className="mt-2" /></div>
                  <div><Label htmlFor="address">Dirección del proyecto</Label><Input id="address" name="address" value={formData.address} onChange={handleChange} className="mt-2" /></div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div><Label htmlFor="squareMeters">Metros cuadrados estimados</Label><Input id="squareMeters" name="squareMeters" type="number" value={formData.squareMeters} onChange={handleChange} className="mt-2" /></div>
                  <div><Label htmlFor="projectType">Tipo de proyecto</Label><select id="projectType" name="projectType" value={formData.projectType} onChange={handleChange} className="mt-2 w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chiamo-green"><option value="nueva-obra">Nueva obra</option><option value="remodelacion">Remodelación</option><option value="otro">Otro</option></select></div>
                </div>
                <div><Label htmlFor="budget">Presupuesto estimado</Label><Input id="budget" name="budget" value={formData.budget} onChange={handleChange} className="mt-2" /></div>
                <div><Label htmlFor="message">Mensaje / Observaciones</Label><Textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="mt-2" /></div>
                <Button type="submit" className="w-full bg-chiamo-green hover:bg-chiamo-dark text-white font-bold py-3 text-lg">Enviar Solicitud por WhatsApp</Button>
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="space-y-8">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-chiamo-dark mb-6">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4"><MapPin className="text-chiamo-green flex-shrink-0 mt-1" size={24} /><div><p className="font-semibold text-chiamo-dark">Dirección</p><p className="text-chiamo-text">Escobar (zona céntrica), Buenos Aires, Argentina</p></div></div>
                  <div className="flex items-start space-x-4"><Phone className="text-chiamo-green flex-shrink-0 mt-1" size={24} /><div><p className="font-semibold text-chiamo-dark">Teléfono</p><p className="text-chiamo-text">+54 9 11 3061-3873</p></div></div>
                  <div className="flex items-start space-x-4"><Mail className="text-chiamo-green flex-shrink-0 mt-1" size={24} /><div><p className="font-semibold text-chiamo-dark">Email</p><p className="text-chiamo-text">info@chiamoconstrucciones.com</p></div></div>
                </div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-xl font-bold text-chiamo-dark mb-4 text-center">Síguenos en Redes</h4>
                  <div className="flex justify-center space-x-6">
                    <a href="https://wa.me/5491130613873" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110" aria-label="Contactar a CHIAMO Construcciones por WhatsApp" title="WhatsApp">
                        <img src="https://horizons-cdn.hostinger.com/8ea8417c-7e84-4d95-89a7-af96163fff02/0f4b2f41ab161b19cbd6b0dedca7408f.png" alt="WhatsApp" className="w-10 h-10" />
                    </a>
                    <a href="#REPLACE_INSTAGRAM_LINK" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110" aria-label="Seguir a CHIAMO Construcciones en Instagram" title="Instagram">
                        <img src="https://horizons-cdn.hostinger.com/8ea8417c-7e84-4d95-89a7-af96163fff02/b7a574201022323bcdc5f91b976eae58.png" alt="Instagram" className="w-10 h-10" />
                    </a>
                    <a href="#REPLACE_TIKTOK_LINK" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110" aria-label="Seguir a CHIAMO Construcciones en TikTok" title="TikTok">
                        <img src="https://horizons-cdn.hostinger.com/8ea8417c-7e84-4d95-89a7-af96163fff02/a220034470beeeb601ee60d0baefe9d7.png" alt="TikTok" className="w-10 h-10" />
                    </a>
                  </div>
                </motion.div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg h-80"><iframe src="https://www.openstreetmap.org/export/embed.html?bbox=-58.8,-34.4,-58.7,-34.3&layer=mapnik&marker=-34.35,-58.75" width="100%" height="100%" style={{ border: 0 }} loading="lazy" title="Mapa de ubicación" /></div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ContactoPage;
