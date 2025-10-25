import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Users, Shield, MessageCircle, DollarSign, Star } from 'lucide-react';

const WhyChoose = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const reasons = [
    {
      icon: Users,
      title: 'Experiencia personalizada',
      description: 'Adaptamos cada proyecto a las necesidades y preferencias de nuestros clientes.'
    },
    {
      icon: Shield,
      title: 'Calidad garantizada',
      description: 'Utilizamos materiales de primera calidad y contamos con un equipo altamente capacitado.'
    },
    {
      icon: MessageCircle,
      title: 'Transparencia y comunicación',
      description: 'Mantenemos a nuestros clientes informados en todo momento.'
    },
    {
      icon: DollarSign,
      title: 'Precio justo',
      description: 'Nos destacamos por ofrecer precios justos con márgenes claros calculados sobre costos reales.'
    },
    {
      icon: Star,
      title: 'Compromiso con la satisfacción',
      description: 'Nuestro objetivo es superar las expectativas de nuestros clientes.'
    }
  ];

  return (
    <section id="por-que-elegirnos" ref={ref} className="py-20 bg-[#F5F1E8]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C2416] mb-4">
            ¿Por qué elegir Chiamo Construcciones?
          </h2>
          <div className="w-24 h-1 bg-[#6B8E23] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-[#6B8E23] to-[#5a7a1d] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <reason.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#2C2416] mb-3">
                {reason.title}
              </h3>
              <p className="text-[#5D4E37] leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-[#6B8E23] to-[#5a7a1d] rounded-2xl p-8 shadow-xl"
        >
          <p className="text-2xl md:text-3xl font-bold text-white mb-4">
            "La verdad es la medida de todas las cosas"
          </p>
          <p className="text-xl text-white/90">
            ¡Construyamos juntos tu proyecto ideal!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;