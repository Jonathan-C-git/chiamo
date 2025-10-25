import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Award, RefreshCw } from 'lucide-react';

const Differential = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="diferencial" ref={ref} className="py-20 bg-gradient-to-br from-[#6B8E23] to-[#5a7a1d] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestro Diferencial
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl">
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Award className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Calidad con Valor Agregado</h3>
                  <p className="text-white/90 leading-relaxed">
                    Chiamo se diferencia por ofrecer obras de calidad con valor agregado, impulsadas por la transparencia y la satisfacción del cliente. Su estrategia se basa en un trato empático y personalizado para identificar las necesidades de cliente, la participación de este en el proyecto, la claridad financiera en cada presupuesto, y la inversión constante en tecnología para optimizar tiempos y costos, garantizando así un servicio integral que fomenta la recomendación boca a boca.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl">
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <RefreshCw className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">El Ciclo de la Satisfacción</h3>
                  <p className="text-white/90 leading-relaxed">
                    Consideramos que nuestro trabajo está completo cuando el cliente vuelve a confiar en nosotros para nuevos proyectos. Este ciclo de satisfacción es el motor que impulsa nuestro crecimiento y consolida nuestra posición como líderes en el mercado.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Differential;