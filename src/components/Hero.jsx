import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ['https://horizons-cdn.hostinger.com/8ea8417c-7e84-4d95-89a7-af96163fff02/7603f48ac990de4964f46dac87dcdcf9.jpg', 'https://horizons-cdn.hostinger.com/8ea8417c-7e84-4d95-89a7-af96163fff02/ca6430a4e716a85acbbbe2de85241c6f.jpg'];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };
  const scrollToSection = href => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="inicio" className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div key={currentSlide} initial={{
        opacity: 0,
        scale: 1.1
      }} animate={{
        opacity: 1,
        scale: 1
      }} exit={{
        opacity: 0,
        scale: 0.9
      }} transition={{
        duration: 1
      }} className="absolute inset-0">
          <div className="w-full h-full bg-cover bg-center" style={{
          backgroundImage: `url(${slides[currentSlide]})`
        }}>
            <div className="absolute inset-0 bg-black/50" />
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.img initial={{
        opacity: 0,
        y: -50
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} src="https://horizons-cdn.hostinger.com/8ea8417c-7e84-4d95-89a7-af96163fff02/acacd0481e002ddf13c843909e16ac22.png" alt="CHIAMO Construcciones" className="w-64 md:w-96 mb-8" />

        <motion.h1 initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow">
          CHIAMO Construcciones
        </motion.h1>

        <motion.p initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.4
      }} className="text-xl md:text-2xl text-white mb-12 max-w-3xl text-shadow">
          Transformamos el proceso de construcción en una experiencia excepcional y transparente.
        </motion.p>

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }} className="flex flex-col sm:flex-row gap-4">
          <Button onClick={() => scrollToSection('#contacto')} className="bg-[#6B8E23] hover:bg-[#5a7a1d] text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
            Solicitar Presupuesto
          </Button>
          <Button onClick={() => scrollToSection('#empresa')} variant="outline" className="bg-white/20 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-[#2C2416] font-bold px-8 py-6 text-lg rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105">
            Ver Nuestras Obras
          </Button>
        </motion.div>
      </div>

      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-3 rounded-full transition-all duration-300">
        <ChevronLeft className="text-white" size={32} />
      </button>

      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-3 rounded-full transition-all duration-300">
        <ChevronRight className="text-white" size={32} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white w-8' : 'bg-white/50'}`} />)}
      </div>
    </section>;
};
export default Hero;