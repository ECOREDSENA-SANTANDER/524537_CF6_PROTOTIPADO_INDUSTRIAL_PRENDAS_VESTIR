export default {
  global: {
    Name: 'Trazado de patrones',
    Description:
      'En este componente se aborda el manejo de un programa digital para la elaboración y el desarrollo de planos, moldes o trazos de patronaje; se exponen conceptos relacionados con: el reconocimiento de la interfaz, el trazo de los básicos, prendas de vestir, despiece y análisis de cada una de las partes que componen una prenda; de igual manera se trabajarán las generalidades del proceso de tendido, trazo y corte de prendas de vestir.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Trazado de patrones (<em>software</em> de patronaje)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Personalizar área de trabajo - Optitex',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Trazo de la falda - Optitex',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Trazo de la base superior femenina - Optitex',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Traslados de pinza - Optitex',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Cortes base superior femenina - Optitex',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Blusa hasta la cadera - Optitex',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Cortes princesa y francés - Optitex',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Modelos de faldas - Optitex',
            hash: 't_1_8',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Trazo y corte manual',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Reconocimiento de las prendas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Concepto de trazo y corte',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Proceso de extendido',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Tipos de trazo',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Tendido, marcación y corte',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Características del material',
            hash: 't_2_6',
            desarrolloContenidos: true,
          },
          {
            numero: '2.7',
            titulo: 'Terminología industrial de trazo y corte',
            hash: 't_2_7',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF4_524537_DU.pdf',
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
  complementario: [
    {
      tema: 'Personalizar área de trabajo.',
      referencia: 'Araque, J. (13 de noviembre de 2013). Tiqueteador de tela.',
      tipo: 'Video',
      link: 'https://youtu.be/uO2HGq24lkE',
    },
    {
      tema: 'Reconocimiento de las prendas.',
      referencia:
        'Digitalmentes asesorías. (28 de junio de 2020). Manipulando pinzas en  Optitex.',
      tipo: 'Video',
      link: 'https://youtu.be/7X9G8DTMV9w',
    },
    {
      tema: 'Trazo y corte manual.',
      referencia:
        'Duarte, N. (1983). Conocimientos básicos de corte. Unidad instruccional No. 3. Servicio Nacional de Aprendizaje SENA.',
      tipo: 'Libro',
      link: 'downloads/modisteria-principios-basicos-de-corte.pdf',
    },
    {
      tema: 'Trazado de patrones.',
      referencia:
        'Gutiérrez, L (2011). Como graduar los patrones básicos de dama.',
      tipo: 'Video',
      link: 'https://youtu.be/amafgzhmMlw',
    },
    {
      tema: 'Trazado de patrones.',
      referencia:
        'Herramientas digitales Moda. (13 de junio 2018). AUDACES TIZADA Trazo.',
      tipo: 'Video',
      link: 'https://youtu.be/C0O6derJC2s',
    },
    {
      tema: 'Trazado de patrones.',
      referencia:
        'Herramientas digitales Moda. (15 de marzo 2018). OPTITEX - MARKER Trazo de patrones.',
      tipo: 'Video',
      link: 'https://youtu.be/fscxWYsenLE',
    },
    {
      tema: 'Trazado de patrones.',
      referencia:
        'Herramientas digitales Moda. (2 de mayo 2018). OPTITEX Falda Básica.',
      tipo: 'Video',
      link: 'https://youtu.be/oBVuhFGidN4',
    },
    {
      tema: 'Trazado de patrones.',
      referencia:
        'Lisandro, L. (24, de octubre de 2020). Cómo crear pinzas en Optitex.',
      tipo: 'Video',
      link: 'https://youtu.be/DX9-gvA37e4',
    },
    {
      tema: 'Trazado de patrones.',
      referencia: 'Londoño, A. (31 de marzo de 2020). Corpiño.',
      tipo: 'Video',
      link: 'https://youtu.be/yUYtfsOZoSg',
    },
  ],
  glosario: [
    {
      termino: '<em>Marker</em>',
      significado:
        'Programa de diseño de corte, que permite la optimización del uso de textiles, a través de anidamiento automatizado o ubicación manual de piezas en la mesa de trazo.',
    },
    {
      termino: 'Optitex',
      significado:
        'Herramienta de diseño de patrones, muy utilizada en la industria textil, en empresas dedicadas a la confección de prendas de vestir.',
    },
    {
      termino: 'PDS',
      significado: 'Se traduce como sistema de diseño de patrones.',
    },
    {
      termino: 'Piquetes',
      significado:
        'Línea corta (0,3 cm máximo 0,5 cm) en dirección perpendicular al molde, señaladas en el patrón, con el fin de facilitar la operación de confección, al indicar ubicaciones o al guiar y al unir cortes.',
    },
    {
      termino: 'Procedimiento',
      significado:
        'Descripción precisa de los pasos para realizar un proceso. Es la respuesta al cómo hacer el proceso.',
    },
    {
      termino: 'Proceso',
      significado:
        'Descripción general de los pasos de una actividad o conjunto de operaciones.',
    },
    {
      termino: 'Talla',
      significado:
        'Expresión normalizada que permite identificar a las personas para el uso de prendas de vestir (Vélez et al., 1996).',
    },
  ],
  referencias: [
    {
      referencia:
        'Duarte, N. (1983). Conocimientos básicos de corte. Unidad instruccional No. 3. Servicio Nacional de Aprendizaje SENA.',
    },
    {
      referencia:
        'Gutiérrez, L., Moncayo, A., Tanaka, K., Kimura, F., Moreno, D. (2011).  Manual de patronaje básico e interpretación de diseños. Servicio Nacional de Aprendizaje SENA.',
    },
    {
      referencia:
        'Vélez, M., García M., Hincapié L. (1996).  Patronaje y escalado línea interior y deportiva.  Servicio Nacional de Aprendizaje SENA.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Lizeth Maritza Rodríguez Beltrán',
          cargo: 'Experta temática',
          centro:
            'Centro de Manufactura en Textil y Cuero - Regional Distrito Capital',
        },
        {
          nombre: 'Natalia Andrea Bueno Pizarro',
          cargo: 'Diseñadora instruccional y evaluadora instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Diseñadora instruccional y evaluadora instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette González Quintero',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
