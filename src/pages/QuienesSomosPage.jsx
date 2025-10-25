import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import PageTransition from '@/components/PageTransition';
import { Target, Eye, Heart, TreePine, PawPrint } from 'lucide-react';

const TeamMember = ({ name, role, description, image, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg overflow-hidden my-4"
  >
    <div className="md:w-1/3 p-4">
      <img
        src={image}
        alt={`Foto de ${name}`}
        className="w-40 h-40 rounded-full object-cover mx-auto shadow-md border-4 border-chiamo-base"
      />
    </div>
    <div className="md:w-2/3 p-6">
      <h3 className="text-2xl font-bold text-chiamo-dark font-logo">{name}</h3>
      <p className="text-chiamo-green font-semibold mb-3">{role}</p>
      <p className="text-chiamo-text leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const QuienesSomosPage = () => {
  const team = [
    {
      name: 'Damián',
      role: 'Licenciado en Administración de Empresas',
      description: 'Aporta la mirada estratégica, la planificación y la gestión eficiente que sostienen cada proyecto.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
    },
    {
      name: 'Paola',
      role: 'Técnica en Recursos Humanos',
      description: 'Es el corazón humano del equipo, quien cuida el vínculo con las personas, el bienestar del equipo y la relación cercana con cada cliente.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    },
    {
      name: 'Matías',
      role: 'Arquitecto',
      description: 'Es el creador de las formas, el responsable de convertir las ideas en espacios reales, funcionales y llenos de identidad.',
      image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop',
    },
  ];

   const values = [
    {
      icon: Target,
      title: 'Nuestra Misión (Es lo que hacemos)',
      content: 'Tenemos la misión de transformar el proceso de construcción en una experiencia excepcional y transparente para nuestros clientes, garantizando excelencia en cada obra. Logramos esto mediante la aplicación de métodos, herramientas, e insumos de última generación, el estricto cumplimiento de las normativas de calidad y de seguridad, así como la creación de vínculos de confianza duraderos con el cliente basándonos en el respeto y la transparencia, asegurando que cada proyecto refleje sus sueños y necesidades.',
    },
    {
      icon: Eye,
      title: 'Nuestra Visión (Es la meta)',
      content: 'Nuestra Visión es ser referentes en la industria de la construcción en el partido de Escobar. Buscamos liderar proyectos de envergadura que redefinan los estándares de calidad, materializando visiones audaces y dejando un legado de excelencia en cada obra. Nos comprometemos a transformar positivamente el entorno a través de la arquitectura sostenible, utilizando tecnologías y prácticas ecológicas. Queremos que los clientes nos perciban como una empresa honesta, transparente y comprometida con el futuro del planeta, construyendo un patrimonio que perdure y enriquezca a la comunidad y al medio ambiente.',
    },
    {
      icon: Heart,
      title: 'Nuestros Valores',
      content: 'Creemos en el trabajo en equipo y la transparencia para impulsar la innovación. Nos comprometemos con el medio ambiente y la sostenibilidad del planeta aplicando la mejora continua en cada proyecto para buscar un impacto ambiental mínimo en nuestras obras. Tomamos decisiones basadas en nuestro código de ética, para asegurar un crecimiento rentable siempre alineado con nuestra misión de calidad y precio justo.',
    },
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Quiénes Somos | CHIAMO Construcciones</title>
        <meta name="description" content="Nuestra historia, nuestro equipo y nuestro compromiso con un futuro más humano, verde y solidario." />
      </Helmet>
      <div className="bg-chiamo-light pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-chiamo-dark mb-4 font-logo">Quiénes Somos</h1>
            <p className="text-lg text-chiamo-text leading-relaxed mt-4 text-justify">
              Somos Chiamo, un proyecto que nació de la amistad y del deseo compartido de construir algo más que obras: construir confianza, vínculos y sueños. Somos tres amigos que decidimos unir nuestras experiencias, nuestras profesiones y, sobre todo, nuestros valores, para transformar la forma en que se vive una construcción.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-center text-chiamo-dark mb-10">Un Equipo, Una Vocación</h2>
            {team.map((member, index) => (
              <TeamMember key={member.name} {...member} delay={index * 0.2} />
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16 max-w-4xl mx-auto">
             <p className="text-lg text-chiamo-text leading-relaxed text-justify">
              Cada uno con más de 20 años de experiencia en su área, encontramos en este proyecto el punto en común entre lo profesional y lo personal: hacer las cosas con pasión, con ética y con un profundo respeto por quienes confían en nosotros.
            </p>
          </motion.div>

           <section className="py-20 bg-white rounded-xl shadow-lg">
            <div className="container mx-auto px-4">
               <div className="space-y-12">
                {values.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="flex flex-col md:flex-row items-center gap-8"
                  >
                    <div className="bg-chiamo-green w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0"><item.icon className="text-white" size={40} /></div>
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold text-chiamo-dark mb-3">{item.title}</h3>
                      <p className="text-chiamo-text leading-relaxed">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <div className="bg-white rounded-xl shadow-lg p-10 max-w-5xl mx-auto mt-20">
            <h2 className="text-3xl font-bold text-center text-chiamo-dark mb-10">Nuestro Compromiso Social</h2>
            <div className="grid md:grid-cols-2 gap-10 text-center">
              <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
                <div className="bg-chiamo-green w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <TreePine className="text-white" size={40} />
                </div>
                <h3 className="text-xl font-bold text-chiamo-dark mb-2">Huella Verde</h3>
                <p className="text-chiamo-text text-justify">Colaboramos activamente en la plantación de árboles, contribuyendo a generar más espacios verdes y aire puro.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
                <div className="bg-chiamo-green w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <PawPrint className="text-white" size={40} />
                </div>
                <h3 className="text-xl font-bold text-chiamo-dark mb-2">Corazón Solidario</h3>
                <p className="text-chiamo-text text-justify">Apoyamos a refugios de perros y gatos mediante la donación de cuchas fabricadas por nosotros.</p>
              </motion.div>
            </div>
             <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.6 }} className="text-center text-xl font-semibold text-chiamo-green mt-12 text-justify">
              Porque construir, para nosotros, es dejar una huella que hable de lo que somos: amigos, profesionales y soñadores comprometidos con un futuro más humano, más verde y más solidario.
            </motion.p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default QuienesSomosPage;