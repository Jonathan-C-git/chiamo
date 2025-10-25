import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Header = ({
  scrolled
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const smoothScrollTo = id => {
    const element = document.getElementById(id);
    const header = document.querySelector('header');
    const offset = header ? header.offsetHeight : 80;
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const [path, hash] = href.split('#');
    if (location.pathname !== path && path) {
      navigate(path);
      // Wait for navigation and then scroll
      setTimeout(() => {
        if (hash) smoothScrollTo(hash);else window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 100);
    } else if (hash) {
      smoothScrollTo(hash);
    } else if (path === location.pathname) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => smoothScrollTo(id), 100);
    }
  }, [location]);
  const menuItems = [{
    label: 'Inicio',
    href: '/'
  }, {
    label: 'Empresa',
    href: '/#empresa'
  }, {
    label: 'Quiénes Somos',
    href: '/quienes-somos'
  }, {
    label: 'Sustentabilidad',
    href: '/sustentabilidad'
  }, {
    label: 'Contacto',
    href: '/contacto'
  }];
  const isHomePage = location.pathname === '/';
  return <motion.header initial={{
    y: -100
  }} animate={{
    y: 0
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || !isHomePage ? 'bg-chiamo-light/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
          <nav className="container mx-auto px-4 py-2">
            <div className="flex items-center justify-between">
              <Link to="/" onClick={e => handleNavClick(e, '/')} className="flex-shrink-0">
                <motion.div whileHover={{
            scale: 1.05
          }}>
                  <img src="https://horizons-cdn.hostinger.com/8ea8417c-7e84-4d95-89a7-af96163fff02/icono-2SOzP.png" alt="CHIAMO Construcciones Logo" className="h-20 md:h-24 w-auto" />
                </motion.div>
              </Link>

              <div className="hidden lg:flex items-center space-x-8">
                {menuItems.map(item => <a key={item.label} href={item.href} onClick={e => handleNavClick(e, item.href)} className={`text-sm font-medium transition-colors hover:text-chiamo-green ${location.pathname === item.href.split('#')[0] && !item.href.includes('#') ? 'text-chiamo-green font-bold' : scrolled || !isHomePage ? 'text-chiamo-text' : 'text-white'}`}>
                    {item.label}
                  </a>)}
                <Button asChild className="bg-chiamo-green hover:bg-chiamo-dark text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Link to="/contacto">Pedir Presupuesto</Link>
                </Button>
              </div>

              <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className={scrolled || !isHomePage ? 'text-chiamo-text' : 'text-white'} size={28} /> : <Menu className={scrolled || !isHomePage ? 'text-chiamo-text' : 'text-white'} size={28} />}
              </button>
            </div>

            <AnimatePresence>
              {mobileMenuOpen && <motion.div initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} className="lg:hidden mt-4 bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="flex flex-col space-y-4 p-6">
                    {menuItems.map(item => <a key={item.label} href={item.href} onClick={e => handleNavClick(e, item.href)} className={`text-left text-chiamo-text hover:text-chiamo-green font-medium transition-colors ${location.pathname === item.href.split('#')[0] && !item.href.includes('#') ? 'text-chiamo-green font-bold' : ''}`}>
                        {item.label}
                      </a>)}
                    <Button asChild className="bg-chiamo-green hover:bg-chiamo-dark text-white font-semibold w-full mt-4">
                      <Link to="/contacto" onClick={() => setMobileMenuOpen(false)}>Pedir Presupuesto</Link>
                    </Button>
                  </div>
                </motion.div>}
            </AnimatePresence>
          </nav>
        </motion.header>;
};
export default Header;