export default {
  global: {
    componenteFormativo: 'Identificación de requerimientos',
    descripcionCurso:
      'El despliegue e implementación de sistemas requiere de una serie de componentes de infraestructura y plataforma tecnológica dentro de los cuales se encuentran los sistemas operativos, sistemas de gestión de base de datos, servidores web, lenguajes o intérpretes de programación los cuales deben ser definidos antes del inicio del proyecto.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Generalidades sobre requerimientos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Requerimientos no funcionales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Arquitectura de despliegue de aplicaciones y servicios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Componentes de una arquitectura de software',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Plataformas de desarrollo e implantación de aplicaciones y servicios ',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Introducción a las máquinas virtuales y contenedores',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Alarcón, J. M. (2018, 14 junio). ¿Qué diferencia hay entre Docker (Contenedores) y Máquinas virtuales (VMware, VirtualBox)? campusMVP.es. ',
      link:
        'https://www.campusmvp.es/recursos/post/que-diferencia-hay-entre-docker-contenedores-y-maquinas-virtuales.aspx',
    },
    {
      referencia:
        'Arroyave, M. H. T., & Cardona, D. (2012). Criterios de evaluación de plataformas de desarrollo de aplicaciones empresariales para ambientes web (Doctoral dissertation, Universidad Tecnológica de Pereira. Facultad de Ingenierías Eléctrica, Electrónica, Física y Ciencias de la Computación. Ingeniería de Sistemas y Computación).',
    },
    {
      referencia:
        'Lazarte Méndez, J. P. (2019). CONTENEDORES DOCKER COMO ESTRATÉGIA DE VIRTUALIZACION (Doctoral dissertation).',
    },
    {
      referencia:
        'Mariño, S. I., Godoy, M. V., Alfonzo, P. L., Acevedo, J. J., Solís, L. G., & Vázquez, A. F. (2012). Accesibilidad en la definición de requerimientos no funcionales. Revisión de herramientas. Multiciencias, 12(3), 305-312.',
    },
    {
      referencia:
        'Pardo, M. R. V., Tapia, J. A. H., Moreno, A. S. G., & Sánchez, L. F. V. (2018). Comparación de tendencias tecnológicas en aplicaciones web.',
    },
    {
      referencia:
        'Rodríguez Ramírez, A. M., & Obando Ortiz, F. R. (2005). Análisis comparativo de sistemas operativos de red  (Bachelors thesis, QUITO/PUCE/2005).',
    },
    {
      referencia:
        'Rojo, S. D. V. (2012). Requerimientos No funcionales para aplicaciones Web (Doctoral dissertation, Universidad Nacional de La Plata).',
    },
    {
      referencia:
        'Sommerville I. (2011).  Ingeniería del software. México: Addison-Wesley',
    },
    {
      referencia:
        'Torrico Rojas, L. (2019). COMPARAR “MAQUINAS VIRTUALES VS DOCKER” (Doctoral dissertation).',
    },
  ],
  glosario: [
    {
      termino: 'Interoperabilidad',
      significado:
        'capacidad de un sistema de comunicarse con otros sistemas para intercambiar y usar información entre ellos.',
    },
    {
      termino: 'IDE',
      significado:
        'Acrónimo en ingles de Integrated Development Environment (Entornos de Desarrollo Integrado). Es un software especializado que ofrece servicios que facilitan el proceso de construcción de software a desarrolladores. ',
    },
    {
      termino: 'HTML5',
      significado: 'es una versión de HTML. ',
    },
    {
      termino: 'HTML',
      significado:
        'acrónimo en ingles de HyperText Markup Language (Lenguaje de Marcado de Hipertexto). HTML es el lenguaje de marcado estándar para crear páginas web y se usa para describir la estructura de una página web.',
    },
    {
      termino: 'Hosting',
      significado:
        'servicio de alojamiento de sitios web indispensable para que sea visualizado por cualquier usuario por medio de internet.',
    },
  ],
  complementario: [
    {
      texto:
        'Autodidacta, F. (2020, 22 septiembre). Instalar la pila de LAMP (Linux, apache, MariaDB y php) en Debian 10 [Vídeo]. ',
      tipo: 'Video',
      link: 'https://youtu.be/AGF4fFuwCEU ',
    },
    {
      texto:
        'Dp, I. (2020, 5 noviembre). WampServer 3.2.0 - Instalación paso a paso. [Vídeo].',
      tipo: 'Video',
      link: 'https://youtu.be/LIubtGr63RM ',
    },
    {
      texto:
        'Didacticode, L. A.-. (2020, 23 noviembre).  Cómo descargar e instalar XAMPP en Windows 10 2020 para trabajar con Apache, PHP, MySQL, Perl [Vídeo].',
      tipo: 'Video',
      link: 'https://youtu.be/DOZPG4V6-JU',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jonathan Guerrero Astaiza',
        cargo: 'Experto temático',
        centro:
          'Centro de teleinformática y producción industrial Regional Cauca',
      },
      {
        nombre: 'Paula Andrea Taborda Ortiz',
        cargo: 'Diseñadora instruccional',
        centro: ' Centro de diseño y metrología  Regional distrito capital',
      },
      {
        nombre: 'Vilma Lucía Perilla Méndez',
        cargo: 'Revisora metodológica y pedagógica ',
        centro: 'Centro de Gestión Industrial Regional distrito capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: [
          'Zuleidy Maria Ruiz Torres',
          'Wilson Andrés Arenales Cáceres',
          'Gilberto Junior Rodriguez Rodriguez',
          'María Carolina Tamayo Lopez ',
          'Ángela María Maldonado Jaime',
          'Carmen Alicia Martinez Torres',
        ],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
