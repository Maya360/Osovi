// variables.js

// Datos que deseas pasar a las plantillas de Handlebars
const datosVoluntariado = {
    hero: {
      title: "Conviértete en Voluntario",
      description: "Únete a nuestra misión de ayudar a quienes más lo necesitan. Como voluntario, podrás participar en diversos programas y actividades que tienen un impacto directo en la vida de las personas."
    },
    voluntariado: [
      {
        image: "Imagenes/ayuda eventos.jpg",
        altText: "Voluntariado 1",
        description: "Ayuda en eventos comunitarios"
      },
      {
        image: "Imagenes/apoyo en centros.jpg",
        altText: "Voluntariado 2",
        description: "Apoyo en centros de rehabilitación"
      },
      {
        image: "Imagenes/actividades recreativas.jpg",
        altText: "Voluntariado 3",
        description: "Actividades recreativas para niños"
      }
    ],
    header: {
      logo: "Imagenes/OSOVI.jpeg",
      title: "Fundación OSOVI",
      navLinks: [
        { name: "Inicio", href: "PaginaInicio.html" },
        { name: "Proyecto Macon", href: "ProyMacon.html" },
        { name: "Proyectos Rehabilitacion", href: "REHAB.html" },
        { name: "Voluntariado", href: "Voluntariado.html" },
        { name: "Contactanos", href: "Contacto.html" },
        { name: "Calendario de Eventos", href: "CalendarioEventos.html" },
        { name: "FAQ", href: "FAQ.html" },
        { name: "Historia", href: "Historia.html" },
        { name: "Mision y Vision", href: "MisionVision.html" }
      ]
    }
  };
  
  // Exportar las variables para su uso en el renderizado de las plantillas
  module.exports = datosVoluntariado;
  