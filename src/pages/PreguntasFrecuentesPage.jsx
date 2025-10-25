import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import PageTransition from '@/components/PageTransition';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const PreguntasFrecuentesPage = () => {

  const faqs = [
    {
      id: "ubicacion",
      question: "¿Dónde están ubicados?",
      answer: "Nuestras oficinas comerciales estarán ubicadas en el partido de Escobar, específicamente en la zona céntrica de la ciudad. Consideramos esta ubicación estratégica para el desarrollo de nuestras actividades y para estar cerca de la administración de Obras y Catastro.",
    },
    {
      id: "quienes",
      question: "¿Quiénes son?",
      answer: "Somos CHIAMO Construcciones, un proyecto nacido de la amistad y la pasión por construir con propósito. Nuestro equipo está formado por Damián (Administración), Paola (Recursos Humanos) y Matías (Arquitectura), uniendo más de 20 años de experiencia para ofrecer un servicio transparente, de calidad y cercano.",
    },
    {
      id: "contacto",
      question: "¿Cómo los contacto?",
      answer: "Puedes contactarnos a través de nuestro formulario de contacto en la web, llamando al +54 9 11 3061-3873, o escribiéndonos un correo a info@chiamoconstrucciones.com. ¡Estaremos encantados de atenderte!",
    },
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Preguntas Frecuentes | CHIAMO Construcciones</title>
        <meta name="description" content="Encuentre respuestas a las preguntas más comunes sobre nuestros servicios de construcción, presupuestos y garantías." />
      </Helmet>
      <div className="bg-chiamo-light pt-40 pb-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-chiamo-dark mb-4">
              Preguntas Frecuentes
            </h1>
            <p className="text-lg text-chiamo-text max-w-2xl mx-auto">
              Aquí encontrarás respuestas a las dudas más habituales. Si no encuentras lo que buscas, no dudes en <Link to="/contacto" className="text-chiamo-green font-semibold hover:underline">contactarnos</Link>.
            </p>
            <div className="w-24 h-1 bg-chiamo-green mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                id={faq.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                  <h2 className="text-2xl font-semibold text-chiamo-dark mb-3">{faq.question}</h2>
                  <p className="text-chiamo-text leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default PreguntasFrecuentesPage;