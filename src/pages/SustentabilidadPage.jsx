import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import PageTransition from '@/components/PageTransition';
import { Leaf } from 'lucide-react';

const SustentabilidadPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Sustentabilidad | CHIAMO Construcciones</title>
        <meta name="description" content="Nuestro compromiso con la construcción sostenible y el medio ambiente. Próximamente más información." />
      </Helmet>
      <div className="bg-chiamo-light pt-32 pb-20 min-h-[70vh] flex items-center">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-chiamo-green p-6 rounded-full mb-8">
              <Leaf className="text-white" size={64} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-chiamo-dark mb-4">
              Sustentabilidad
            </h1>
            <div className="w-24 h-1 bg-chiamo-green mx-auto rounded-full mb-8" />
            <p className="text-xl md:text-2xl text-chiamo-text max-w-3xl mx-auto">
              Próximamente compartiremos nuestros proyectos y compromisos con la construcción sostenible.
            </p>
            <p className="text-lg text-chiamo-text/70 mt-4 max-w-2xl mx-auto">
              Estamos trabajando para integrar prácticas ecológicas y tecnologías innovadoras que minimicen el impacto ambiental y promuevan un futuro más verde.
            </p>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default SustentabilidadPage;