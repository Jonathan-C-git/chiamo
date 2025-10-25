import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Building2, MapPin, Users } from 'lucide-react';
const Company = () => {
  const [ref, isInView] = useInView({
    threshold: 0.1
  });
  return <section id="empresa" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.8
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C2416] mb-4">
            La Empresa
          </h2>
          <div className="w-24 h-1 bg-[#6B8E23] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.8
        }} className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-[#6B8E23] p-3 rounded-full flex-shrink-0">
                <Building2 className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2C2416] mb-2">Nueva Empresa</h3>
                <p className="text-[#5D4E37] leading-relaxed">
                  Chiamo es una empresa nueva y nuestras oficinas comerciales estarán ubicadas en el partido de Escobar, específicamente en la zona céntrica de la ciudad, de manera que permita tener cercanía con el centro neurálgico de administración de la Dirección y Registro de Obras y Catastro de la zona.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#6B8E23] p-3 rounded-full flex-shrink-0">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2C2416] mb-2">Ubicación Estratégica</h3>
                <p className="text-[#5D4E37] leading-relaxed">
                  El lugar que elegimos es el que consideramos estratégico para desarrollar nuestras actividades.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#6B8E23] p-3 rounded-full flex-shrink-0">
                <Users className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2C2416] mb-2">Puntos de Venta</h3>
                <p className="text-[#5D4E37] leading-relaxed">
                  El proyecto incluye puntos de venta ubicados en municipalidades y grandes negocios de materiales para la construcción y hogar, con vendedores capacitados permanentemente con métodos alineados al producto que se ofrece.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="relative">
            <img className="rounded-2xl shadow-2xl w-full h-auto object-cover" alt="Oficinas CHIAMO Construcciones en Escobar" src="https://horizons-cdn.hostinger.com/8ea8417c-7e84-4d95-89a7-af96163fff02/whatsapp-image-2025-10-14-at-21.03.06-Sla0l.jpeg" />
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Company;