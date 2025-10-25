import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const sections = [
    {
      icon: Target,
      title: 'Nuestra Misión',
      content: 'Tenemos la misión de transformar el proceso de construcción en una experiencia excepcional y transparente para nuestros clientes, garantizando excelencia en cada obra. Logramos esto mediante la aplicación de métodos, herramientas, e insumos de última generación, el estricto cumplimiento de las normativas de calidad y de seguridad, así como la creación de vínculos de confianza duraderos con el cliente basándonos en el respeto y la transparencia, asegurando que cada proyecto refleje sus sueños y necesidades.'
    },
    {
      icon: Eye,
      title: 'Nuestra Visión',
      content: 'Nuestra Visión es ser referentes en la industria de la construcción en el partido de Escobar. Buscamos liderar proyectos de envergadura que redefinan los estándares de calidad, materializando visiones audaces y dejando un legado de excelencia en cada obra. Nos comprometemos a transformar positivamente el entorno a través de la arquitectura sostenible, utilizando tecnologías y prácticas ecológicas. Queremos que los clientes nos perciban como una empresa honesta, transparente y comprometida con el futuro del planeta, construyendo un patrimonio que perdure y enriquezca a la comunidad y al medio ambiente.'
    },
    {
      icon: Heart,
      title: 'Nuestros Valores',
      content: 'Creemos en el trabajo en equipo y la transparencia para impulsar la innovación. Nos comprometemos con el medio ambiente y la sostenibilidad del planeta aplicando la mejora continua en cada proyecto para buscar un impacto ambiental mínimo en nuestras obras. Tomamos decisiones basadas en nuestro código de ética, para asegurar un crecimiento rentable siempre alineado con nuestra misión de calidad y precio justo.'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C2416] mb-4">
            Sobre Chiamo
          </h2>
          <div className="w-24 h-1 bg-[#6B8E23] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-[#F5F1E8] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-[#6B8E23] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <section.icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#2C2416] mb-4 text-center">
                {section.title}
              </h3>
              <p className="text-[#5D4E37] leading-relaxed text-center">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;