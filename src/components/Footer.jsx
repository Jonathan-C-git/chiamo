
import React from 'react';
    import { Link, useNavigate, useLocation } from 'react-router-dom';

    const Footer = () => {
      const navigate = useNavigate();
      const location = useLocation();

      const handleFaqClick = (e, href) => {
        e.preventDefault();
        const [path, hash] = href.split('#');

        const scrollToAnchor = () => {
          setTimeout(() => {
            if (hash) {
              const element = document.getElementById(hash);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }, 100);
        };
        
        if (location.pathname !== path) {
            navigate(path);
            scrollToAnchor();
        } else {
            scrollToAnchor();
        }
      };

      return (
        <footer id="footer-section" className="bg-[#5d4e37] text-white pt-16 pb-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              
              <div>
                <h3 className="text-lg font-bold mb-4">Navegación</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-white/80 hover:text-chiamo-green transition-colors">Inicio</Link></li>
                  <li><Link to="/quienes-somos" className="text-white/80 hover:text-chiamo-green transition-colors">Quiénes Somos</Link></li>
                  <li><Link to="/sustentabilidad" className="text-white/80 hover:text-chiamo-green transition-colors">Sustentabilidad</Link></li>
                  <li><Link to="/contacto" className="text-white/80 hover:text-chiamo-green transition-colors">Contacto</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">
                    <a href="/preguntas-frecuentes" onClick={(e) => handleFaqClick(e, '/preguntas-frecuentes')} className="hover:text-chiamo-green transition-colors">Preguntas Frecuentes</a>
                </h3>
                 <ul className="space-y-2">
                  <li><a href="/preguntas-frecuentes#ubicacion" onClick={(e) => handleFaqClick(e, '/preguntas-frecuentes#ubicacion')} className="text-white/80 hover:text-chiamo-green transition-colors">¿Dónde están ubicados?</a></li>
                  <li><a href="/preguntas-frecuentes#quienes" onClick={(e) => handleFaqClick(e, '/preguntas-frecuentes#quienes')} className="text-white/80 hover:text-chiamo-green transition-colors">¿Quiénes son?</a></li>
                  <li><a href="/preguntas-frecuentes#contacto" onClick={(e) => handleFaqClick(e, '/preguntas-frecuentes#contacto')} className="text-white/80 hover:text-chiamo-green transition-colors">¿Cómo los contacto?</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Contacto</h3>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li>Escobar, Buenos Aires, Argentina</li>
                  <li>+54 9 11 3061-3873</li>
                  <li>info@chiamoconstrucciones.com</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Síguenos</h3>
                <div className="flex space-x-4">
                  <a href="https://wa.me/5491130613873" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110" aria-label="Contactar a CHIAMO Construcciones por WhatsApp">
                    <img src="https://horizons-cdn.hostinger.com/8ea8417c-7e84-4d95-89a7-af96163fff02/0f4b2f41ab161b19cbd6b0dedca7408f.png" alt="WhatsApp" className="w-8 h-8" />
                  </a>
                  <a href="#REPLACE_INSTAGRAM_LINK" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110" aria-label="Seguir a CHIAMO Construcciones en Instagram">
                    <img src="https://horizons-cdn.hostinger.com/8ea8417c-7e84-4d95-89a7-af96163fff02/b7a574201022323bcdc5f91b976eae58.png" alt="Instagram" className="w-8 h-8" />
                  </a>
                  <a href="#REPLACE_TIKTOK_LINK" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110" aria-label="Seguir a CHIAMO Construcciones en TikTok">
                    <img src="https://horizons-cdn.hostinger.com/8ea8417c-7e84-4d95-89a7-af96163fff02/a220034470beeeb601ee60d0baefe9d7.png" alt="TikTok" className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-white/60 text-sm text-center md:text-left">
                  © 2025 CHIAMO Construcciones. Todos los derechos reservados.
                </p>
              </div>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;
