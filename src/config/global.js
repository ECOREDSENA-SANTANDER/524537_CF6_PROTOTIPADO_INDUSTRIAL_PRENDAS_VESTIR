export default {
  global: {
    Name: 'Requerimientos técnicos y prototipos',
    Description:
      'El control de calidad es un sistema integrado en las empresas para prevenir fallas y problemas en los procesos productivos, y productos terminados; pero no es suficiente encontrar las fallas o defectos, el propósito es anticiparse al problema y suplir las deficiencias.  En este componente se aborda el control de calidad sobre la base de las normas vigentes para el desarrollo de los productos; posteriormente, se profundiza en la elaboración de prototipos.',
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
        titulo: 'Control de calidad',
        numero: '1',
        nombreRuta: 'tema1',
        desarrolloContenidos: true,
        subMenu: [
          {
            titulo: 'Concepto de calidad',
            hash: 't_1_1',
            numero: '1.1',
          },
          {
            numero: '1.2',
            titulo: 'Gestión de la calidad total',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Puntos de control en el proceso de confección',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Control de calidad en patronaje',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Control de calidad en trazo y corte',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Control de calidad en confección',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Control de calidad en terminados',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Control de calidad en insumos, materiales y textiles',
            hash: 't_1_8',
          },
        ],
      },

      {
        titulo: 'Elaboración de prototipos en tejido de punto',
        nombreRuta: 'tema2',
        numero: '2',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Confección <i>panty</i> femenino',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Confección <i>boxer</i> masculino',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Confección de camiseta tipo polo',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Confección de pantalón sudadera',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo:
              'Elaboración de conjunto deportivo <i style="margin-right: 0 !important;">top</i> y <i>leggins</i>',
            hash: 't_2_5',
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
        download: 'downloads/dist.pdf',
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
      tema: 'Generalidades del sistema de gestión de calidad ISO 9001.',
      referencia: 'ISO. (2015). Sistema de gestión de calidad 9001: 2015.',
      tipo: 'Norma',
      link: 'https://www.iso.org/obp/ui/#iso:std:iso:9001:ed-5:v1:es',
    },
    {
      tema:
        'Resumen sobre materiales textiles y aspectos relacionados principalmente con la naturaleza de las fibras.',
      referencia:
        'Alonso, F. (2015). Manual control de calidad en productos textiles y afines.',
      tipo: 'Manual',
      link: 'https://oa.upm.es/38763/',
    },
    {
      tema: 'Confección de ropa interior para dama.',
      referencia:
        'Mata. J. (26 de agosto 2017). Confección de ropa interior para damas. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/Ds5CtwVbaag',
    },
    {
      tema: 'Confección de <i>boxer</i> de hombre.',
      referencia:
        'Academia confección alamoda. (20 de octubre 2019). DIY cómo confeccionar un <i>boxer</i> de hombre.  YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/Y3tyM2WTpZ0',
    },
    {
      tema: 'Confección de camiseta tipo polo.',
      referencia:
        'Juki central europe. (11 de agosto 2015). JUKI - polo <i>shirt</i> production.  YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/QPor7WBIZNA',
    },
    {
      tema: 'Confección de camiseta tipo polo de hombre.',
      referencia:
        'Academia confección alamoda. (6 de abril de 2019). DIY cómo hacer camiseta polo hombre corte y confección.  YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/HJJp-lOu1E4',
    },
    {
      tema: 'Confección de pantalón deportivo con cintas.',
      referencia:
        'Academia confección alamoda. (13 de diciembre 2018). DIY cómo hacer un pantalón sudadera entubado con cintas laterales corte y confección.  YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/oZTVpkX7cuk',
    },
    {
      tema: 'Confección de pantalón de sudadera de dama.',
      referencia:
        'Academia confección alamoda. (17 de octubre 2019). DIY cómo hacer un pantalón de sudadera mujer corte y confección.  YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/hlBctRHgSUw',
    },
    {
      tema: 'Confección de top deportivo.',
      referencia:
        'Josmar creando con amor. (24 de abril de 2020). <i>Top</i> deportivo muy fácil de confeccionar /josmar. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/3xGfOwDybBs',
    },
    {
      tema: 'Confección de <i>leggins</i> con transparencias.',
      referencia:
        'Montilla, E. (10 de mayo 2017). Confección de <i>leggins</i> deportivo con transparencia. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/owM_WYtLwlc',
    },
  ],
  glosario: [
    {
      termino: 'Atributos del producto',
      significado:
        'son las cualidades o características del producto como color, tamaño.',
    },
    {
      termino: 'Defecto',
      significado:
        'es una no conformidad en características requeridas por el cliente o una norma y que causa incumplimiento del requisito y por tanto insatisfacción del cliente.',
    },
    {
      termino: 'ISO',
      significado:
        'Organización Internacional de Estandarización, ubicada en Ginebra Suiza y tiene presencia en 193. Promueve y desarrolla normas para estandarizar productos y servicios.',
    },
    {
      termino: 'Lote',
      significado:
        'número establecido de una producción, las cuales tienen características comunes y se agrupan dependiendo de un objetivo determinado.  ',
    },
    {
      termino: 'Mariposa',
      significado:
        'pieza del <i>panty</i> ubicada entre el tiro y la entrepierna para proteger y dar comodidad en la parte íntima femenina.',
    },
    {
      termino: 'Punto de control',
      significado:
        'son determinados con la metodología de árbol de decisión. Son las operaciones, fases o procesos que requieren realizar inspecciones para controlar la ocurrencia de defectos, lo cual es una medida preventiva.',
    },
    {
      termino: 'Punto de control crítico',
      significado:
        'operaciones, faces o procesos que requiere de riguroso control debido a que representa alto riesgo de presentar defectos y por tanto no cumplir con los requisitos.',
    },
    {
      termino: '<i>Sigma</i> (σ)',
      significado:
        'es una letra del alfabeto griego, utilizada en representar la desviación estándar (unidad estadística de medición), representa la dispersión o variabilidad de un conjunto de datos.',
    },
    {
      termino: 'Variables de calidad',
      significado:
        'cuantificación de las cualidades del producto. Ejemplo: carta de colores de la prenda.',
    },
  ],
  referencias: [
    {
      referencia:
        'Academia confección alamoda. (13 de diciembre 2018). DIY cómo hacer un pantalón sudadera entubado con cintas laterales corte y confección. YouTube.',
      link: 'https://youtu.be/oZTVpkX7cuk',
    },
    {
      referencia:
        'Academia confección alamoda. (17 de octubre 2019). DIY cómo hacer un pantalón de sudadera mujer corte y confección. YouTube.',
      link: 'https://youtu.be/hlBctRHgSUw',
    },
    {
      referencia:
        'Academia confección alamoda. (20 de octubre 2019). DIY cómo confeccionar un <i>boxer</i> de hombre. YouTube.',
      link: 'https://youtu.be/Y3tyM2WTpZ0',
    },
    {
      referencia:
        'Academia confección alamoda. (6 de abril de 2019). DIY cómo hacer camiseta polo hombre corte y confección. YouTube.',
      link: 'https://youtu.be/HJJp-lOu1E4',
    },
    {
      referencia:
        'Alonso, F. (2015). Manual control de calidad en productos textiles y afines.',
      link: 'https://oa.upm.es/38763/',
    },
    {
      referencia: 'ISO. (2015). Sistema de gestión de calidad 9001: 2015.',
      link: 'https://www.iso.org/obp/ui/#iso:std:iso:9001:ed-5:v1:es',
    },
    {
      referencia:
        'Josmar creando con amor. (24 de abril de 2020). <i>Top</i> deportivo muy fácil de confeccionar /josmar.  YouTube.',
      link: 'https://youtu.be/3xGfOwDybBs',
    },
    {
      referencia:
        'Juki central europe. (11 de agosto 2015). JUKI - polo  <i>shirt</i> production.  YouTube',
      link: 'https://youtu.be/QPor7WBIZNA',
    },
    {
      referencia:
        'Mata. J. (26 de agosto 2017). Confección de ropa interior para damas.  YouTube',
      link: 'https://youtu.be/Ds5CtwVbaag',
    },
    {
      referencia:
        'Montilla, E. (10 de mayo 2017). Confección de <i>Leggings</i> deportivo con transparencia.  YouTube.',
      link: 'https://youtu.be/owM_WYtLwlc',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
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
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura ',
        },
        {
          nombre: 'Leidy Johana Velásquez Hernández',
          cargo: 'Experta temática',
          centro: 'Regional Antioquia - Diseño, Confección y Moda ',
        },
        {
          nombre: 'Paola Angélica Castro Salazar',
          cargo: 'Experta temática',
          centro: 'Regional Antioquia - Diseño, Confección y Moda ',
        },
        {
          nombre: 'Paula Andrea Taborda Ortiz',
          cargo: 'Diseñadora instruccional',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología ',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora metodológica y pedagógica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología ',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñador y evaluador instruccional',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica ',
        },
        {
          nombre: 'Carolina Jiménez Suescun',
          cargo: 'Evaluadora instruccional',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
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
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Diana Lizeth Lozada Díaz',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Regional Santander - Centro Agroturístico',
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
