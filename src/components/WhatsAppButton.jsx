
import React from 'react';
    import { motion } from 'framer-motion';

    const WhatsAppButton = () => {
      const handleClick = () => {
        const message = encodeURIComponent('Hola, quiero solicitar presupuesto con CHIAMO Construcciones.');
        window.open(`https://wa.me/5491130613873?text=${message}`, '_blank');
      };

      return (
        <motion.button
          onClick={handleClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
          className="fixed bottom-5 right-5 md:bottom-8 md:right-8 bg-transparent text-white p-0 rounded-full shadow-2xl z-50 flex items-center justify-center"
          aria-label="Contactar por WhatsApp"
        >
          <img src="https://horizons-cdn.hostinger.com/8ea8417c-7e84-4d95-89a7-af96163fff02/0f4b2f41ab161b19cbd6b0dedca7408f.png" alt="WhatsApp" className="w-16 h-16" />
        </motion.button>
      );
    };

    export default WhatsAppButton;
