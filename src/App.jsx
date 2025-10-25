
import React from 'react';
    import { Routes, Route, useLocation } from 'react-router-dom';
    import { AnimatePresence } from 'framer-motion';
    import Layout from '@/components/Layout';
    import HomePage from '@/pages/HomePage';
    import QuienesSomosPage from '@/pages/QuienesSomosPage';
    import SustentabilidadPage from '@/pages/SustentabilidadPage';
    import ContactoPage from '@/pages/ContactoPage';
    import PreguntasFrecuentesPage from '@/pages/PreguntasFrecuentesPage';
    import { Toaster } from '@/components/ui/toaster';

    function App() {
      const location = useLocation();

      return (
        <Layout>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/quienes-somos" element={<QuienesSomosPage />} />
              <Route path="/sustentabilidad" element={<SustentabilidadPage />} />
              <Route path="/contacto" element={<ContactoPage />} />
              <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentesPage />} />
            </Routes>
          </AnimatePresence>
          <Toaster />
        </Layout>
      );
    }

    export default App;
