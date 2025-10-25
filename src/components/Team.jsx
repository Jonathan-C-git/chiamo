import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const Team = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const team = [
    {
      name: 'Damian',
      role: 'Director General',
      description: 'Líder visionario con amplia experiencia en gestión de proyectos de construcción.',
      image: 'Professional construction manager Damian leading a team'
    },
    {
      name: 'Paola',
      role: 'Directora de Operaciones',
      description: 'Experta en coordinación y optimización de procesos constructivos.',
      image: 'Professional operations director Paola in construction site'
    },
    {
      name: 'Matías',
      role: 'Director Técnico',
      description: 'Especialista en innovación tecnológica y calidad en construcción.',
      image: 'Professional technical director Matías reviewing blueprints'
    }
  ];

  return (
    <section id="equipo" ref={ref} className="py-20 bg-[#F5F1E8]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C2416] mb-4">
            Nuestro Equipo
          </h2>
          <div className="w-24 h-1 bg-[#6B8E23] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  alt={`${member.name} - ${member.role}`}
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#2C2416] mb-2">
                  {member.name}
                </h3>
                <p className="text-[#6B8E23] font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-[#5D4E37] leading-relaxed">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;