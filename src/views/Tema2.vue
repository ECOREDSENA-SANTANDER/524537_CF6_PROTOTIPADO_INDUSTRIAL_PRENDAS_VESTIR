<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Trazo y corte manual
    
    .row.justify-content-center.align-items-center(data-aos="fade")
      .col-sm-12.col-md-8.col-lg-9.mb-3.mb-md-0
        p La industria textil se destaca por tener diferentes procesos productivos para elaborar prendas de vestir; cuando se habla de trazo y corte a nivel general, consiste en toda la optimización o acomodación de moldes sobre el material textil.
        .cajon.color-acento-contenido.p-4
          p.mb-0 #[b Para abordar este tema, y de acuerdo con la necesidad de la industria textil frente al perfil de un patronista, se brindarán los conocimientos y se entregarán las herramientas técnicas requeridas en el área de prototipado o muestreo de producto.  ]
      .col-7.col-md-4.col-lg-3
        img(src="@/assets/curso/temas/tema2/imagen1.png", alt="")
    

    Separador 
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Reconocimiento de las prendas

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-sm-12.col-md-12.col-lg-4
        h3 ¿Para qué?
        p El reconocimiento de las partes que componen una prenda de vestir es sumamente importante para el proceso de trazo y corte, de esto depende una adecuada interpretación de los requerimientos de corte.
      .col-sm-12.col-md-12.col-lg-8
        .row.justify-content-center
          .col-10.col-md-4.col-lg-4
            img(src="@/assets/curso/temas/tema2/imagen2a.svg", alt="")
          .col-10.col-md-4.col-lg-4
            img(src="@/assets/curso/temas/tema2/imagen2b.svg", alt="")
          .col-10.col-md-4.col-lg-4
            img(src="@/assets/curso/temas/tema2/imagen2c.svg", alt="")

    .bgi-3.p-4.mb-5(data-aos="fade")
      .row.justify-content-center.align-items-center
        .col-md-7.col-lg-5.mb-3.mb-lg-0
          .titulo-sexto.color-acento-contenido.mb-2
            h5 Figura 147.
            span Dibujo técnico de chaqueta con detalles de diseño
          figure
            img(src="@/assets/curso/temas/tema2/imagen3.svg", alt="Vista delantera y posterior de una chaqueta con cuello, pinzas, bolsillos y detalles constructivos ampliados.")
        .col-sm-12.col-md-5.col-lg-5
          h4 Dibujo técnico
          p Representación detallada de una prenda y las partes que la componen, permite identificar todas sus características técnicas, pespuntes, botones, costuras, pinzas, acabados. No tiene movimiento, pero se puede identificar la parte delantera y posterior. 

    TabsA.color-acento-botones.mb-5(data-aos="fade")
      .tarjeta.bgi-4.p-4(titulo="Componentes de las prendas")
        .row
          .col-sm-12.col-md-8.col-lg-8
            p Los componentes son los elementos y/o partes de las que están formadas las prendas de vestir.
            p Estos pueden ser:
            ul.lista-ul--color.fa-ul.color-primario
              li 
                i.fas.fa-plus
                span.mb-0 Exteriores
              li
                i.fas.fa-plus
                span.mb-0 Interiores
              li
                i.fas.fa-plus
                span.mb-0 Hilos
              li
                i.fas.fa-plus
                span.mb-0 Fornituras y complementos
          .col-8.col-md-4.col-lg-4
            img(src="@/assets/curso/temas/tema2/imagen4.png", alt="")
      .tarjeta.bgi-4.p-4(titulo="Componentes exteriores")
        .row
          .col-sm-12.col-md-7.col-lg-7
            p Son todas las partes del material textil base con la que está elaborada la prenda en el exterior.
            ul.lista-ul--color.fa-ul.color-primario
              li 
                i.fas.fa-plus
                span.mb-0 Delanteros y posteriores.
              li 
                i.fas.fa-plus 
                span.mb-0 Cuellos.
              li 
                i.fas.fa-plus 
                span.mb-0 Mangas.
              li 
                i.fas.fa-plus 
                span.mb-0 Bolsillos.
              li 
                i.fas.fa-plus 
                span.mb-0 Puños, entre otros.
          .col-md-5.col-lg-5
           img(src="@/assets/curso/temas/tema2/imagen5.png", alt="")
      .tarjeta.bgi-4.p-4(titulo="Componentes interiores")
        .row
          .col-sm-12.col-md-7.col-lg-7
            p Todos aquellos elementos y/o partes que van en el interior o revés de la prenda, estos pueden ser:
            ul.lista-ul--color.fa-ul.color-primario
              li 
                i.fas.fa-plus  
                span.mb-0 Foro.
              li 
                i.fas.fa-plus  
                span.mb-0 Entretela.
              li 
                i.fas.fa-plus 
                span.mb-0 Guata.
              li 
                i.fas.fa-plus 
                span.mb-0 Sesgo.
          .col-md-4.col-lg-5
            img(src="@/assets/curso/temas/tema2/imagen6.png", alt="")
      .tarjeta.bgi-4.p-4(titulo="Hilos")
        .row
          .col-sm-12.col-md-7.col-lg-7
            p Son uno de los elementos principales que logran unir las diferentes partes de la prenda.
            ul.lista-ul--color.fa-ul.color-primario
              li 
                i.fas.fa-plus
                span.mb-0 Pespuntes.
              li 
                i.fas.fa-plus 
                span.mb-0 Puntadas decorativas.
              li 
                i.fas.fa-plus 
                span.mb-0 Bastas.
              li 
                i.fas.fa-plus 
                span.mb-0 Puntadas manuales.
          .col-md-4.col-lg-5.col-4
            img(src="@/assets/curso/temas/tema2/imagen7.png", alt="")

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-sm-12.col-md-12.col-lg-3
        h4.mb-4 Fornituras y complementos
        p Las fornituras son el conjunto de accesorios y adornos que puede llevar una prenda de vestir. Dentro de ellos se identifican: los botones, las cremalleras, corchetes, broches de presión, hebillas, ojetes, vivos, puntillas, cintas, apliques, gomas, cordones, etc.
      .col-12.col-md-12.col-lg-9
        img(src="@/assets/curso/temas/tema2/imagen8.png", alt="")

    .bgi-3.p-4.mb-5(data-aos="fade")
      .row.justify-content-center.align-items-center
        .col-md-8.col-lg-5.mb-3.mb-lg-0
          img(src="@/assets/curso/temas/tema2/imagen9.svg", alt="")
        .col-sm-12.col-md-12.col-lg-3
          h4 Identificación de piezas
          p Cada prenda está compuesta por piezas que tienen un nombre específico de acuerdo con la ubicación. Cada pieza tiene especificaciones técnicas de acuerdo con el proceso de extendido y corte del textil.
        
    
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/subt.svg', alt='')
        h3.mb-0.ms-2 Reconocimiento de las partes que conforman una prenda de vestir

    .tarjeta.bgi-2.p-4.p-lg-5.mb-5(data-aos="fade")
      .tarjeta.bg-white.p-4
        PasosB.color-primario
          .row.justify-content-center
            .col-11
              p.mb-4 Se muestran las partes principales de un pantalón de vestir en vista delantera y posterior para facilitar su identificación y comprensión durante el proceso de patronaje y confección.
              .titulo-sexto.color-acento-contenido.mb-0
                h5 Figura 148.
                span Partes principales de un pantalón de vestir
            .col-12
              figure
                img(src="@/assets/curso/temas/tema2/tarjeta1/imagen1.svg", alt='Esquema de un pantalón de vestir con nomenclatura de sus partes principales en vista delantera y posterior, acompañado de una fotografía de la prenda terminada.')
          .row.justify-content-center
            .col-11
              p.mb-4 Se presentan las partes que conforman un pantalón tipo jean en sus vistas delantera y posterior, permitiendo reconocer los elementos estructurales y funcionales de la prenda
              .titulo-sexto.color-acento-contenido.mb-0
                h5 Figura 149.
                span Partes principales de un pantalón tipo jean
            .col-12
              figure
                img(src="@/assets/curso/temas/tema2/tarjeta1/imagen2.svg", alt='Esquema de un pantalón tipo jean con identificación de sus componentes en vista delantera y posterior, acompañado de una fotografía de la prenda terminada.')
          .row.justify-content-center
            .col-11
              p.mb-4 Se identifican los componentes que conforman un pantalón deportivo, destacando los elementos característicos de ajuste y comodidad utilizados en este tipo de prenda.
              .titulo-sexto.color-acento-contenido.mb-0
                h5 Figura 150.
                span Partes principales de un pantalón deportivo
            .col-12
              figure
                img(src="@/assets/curso/temas/tema2/tarjeta1/imagen3.svg", alt='Esquema de un pantalón deportivo con pretina y botas encauchadas, mostrando sus partes en vista delantera y posterior junto a una fotografía de referencia.')

    p.mb-4 Antes de iniciar el proceso de despiece, es fundamental comprender que esta etapa consiste en separar el patrón base en cada una de las piezas que conformarán la prenda durante la confección. El despiece permite identificar componentes, definir detalles constructivos, aplicar márgenes de costura y preparar los moldes para el corte, garantizando precisión en el ensamblaje y una correcta interpretación del diseño. A continuación, se presenta el despiece de diferentes tipos de prendas y sus respectivas piezas.

    TabsA.color-acento-contenido(data-aos="fade")
      .tarjeta.bgi-4.p-4(titulo="Despiece pantalón")
        .row.justify-content-center.align-items-center
          .col-lg-11
            img(src="@/assets/curso/temas/tema2/tarjeta2/imagen1.svg", alt='La imagen presenta el despiece de un pantalón, ilustrando todos los patrones necesarios para su confección. Incluye imágenes de las técnicas del pantalón terminado, así como las piezas individuales del patrón, como las piernas, bolsillos, cintura y otras partes. Cada pieza del patrón está detallada con marcas y anotaciones que facilitan su ensamblaje.')
      .tarjeta.bgi-4.p-4(titulo="Despiece cargo")
        .row.justify-content-center.align-items-center
          .col-lg-11
            img(src="@/assets/curso/temas/tema2/tarjeta2/imagen2.svg", alt='La imagen detalla el despiece de un pantalón cargo. Incluye técnicas del pantalón terminado, con detalles como bolsillos laterales y un sistema de cierre acordonado. A la derecha, se presentan las piezas individuales del patrón necesarias para su confección, cada una con anotaciones y marcas para guiar el ensamblaje. ')
      .tarjeta.bgi-4.p-4(titulo="Despiece de camisa")
        .row.justify-content-center.align-items-center
          .col-lg-11
            img(src="@/assets/curso/temas/tema2/tarjeta2/imagen3.svg", alt='La imagen expone el despiece de una camisa. Incluye una vista técnica de la camisa terminada y los patrones necesarios para su confección. Las piezas del patrón incluyen partes como las mangas, el delantero, la espalda, el cuello y los puños, cada una con sus respectivas anotaciones y marcas para facilitar el ensamblaje.')
      .tarjeta.bgi-4.p-4(titulo="Despiece de blusa")
        .row.justify-content-center.align-items-center
          .col-lg-11
            img(src="@/assets/curso/temas/tema2/tarjeta2/imagen4.svg", alt='La imagen detalla el despiece de una blusa. Incluye vistas técnicas de la blusa terminada y los patrones necesarios para su confección. Las piezas del patrón abarcan partes como el delantero, la espalda, las mangas y el cuello, cada una con anotaciones y marcas detalladas para guiar el ensamblaje de la prenda.')
      .tarjeta.bgi-4.p-4(titulo="Despiece de chaqueta")
        .row.justify-content-center.align-items-center
          .col-lg-11
            img(src="@/assets/curso/temas/tema2/tarjeta2/imagen5.svg", alt='La imagen expone el despiece de una chaqueta. Incluye técnicas de la chaqueta terminada y los patrones necesarios para su confección. Las piezas del patrón abarcan partes como las mangas, el delantero, la espalda, el cuello y otros detalles, cada una con anotaciones y marcas específicas para facilitar el ensamblaje de la prenda.')

    
    Separador    
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Concepto de trazo y corte

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-sm-12.col-md-12.col-lg-10
        .tarjeta.color-acento-contenido.p-4
          .row.justify-content-around.align-items-center
            .col-4.col-md-2.col-lg-2.mb-3.mb-md-0
              img.px-lg-4(src="@/assets/curso/temas/tema2/admiracion.png")
            .col-sm-12.col-md-10.col-lg-10
              h5 #[b Trazo y corte ]
              p.mb-0 En el proceso de trazo y corte se revisa y analiza el mejor aprovechamiento de los tejidos mediante técnicas de marcadas, dependiendo en gran parte, de la calidad de la confección de la prenda; por tal motivo, constituye una tarea determinante en el costo total del producto.


    .subt.mb-3(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/subt.svg', alt='')
        h3.mb-0.ms-2 ¿Qué es el trazo?
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-sm-12.col-md-12.col-lg-12
        .row.align-items-center.justify-content-center
          .col-sm-12.col-md-12.col-lg-9
            p.mb-4 Procedimiento que se realiza sobre el material textil con jaboncillo o tiza, teniendo en cuenta las características dimensionales del tejido a cortar.
            .row.justify-content-center
              .col-4.col-md-2.col-lg.mb-3.mb-lg-0
                img(src="@/assets/curso/temas/tema2/iconosv/icono1.svg", alt='')
                p.text-center Patrones
              .col-4.col-md-2.col-lg.mb-3.mb-lg-0
                img(src="@/assets/curso/temas/tema2/iconosv/icono2.svg", alt='')
                p.mb-0.text-center Escuadras o reglas
              .col-4.col-md-2.col-lg.mb-3.mb-lg-0
                img(src="@/assets/curso/temas/tema2/iconosv/icono3.svg", alt='')
                p.mb-0.text-center Papel de trazo
              .col-4.col-md-2.col-lg.mb-3.mb-lg-0
                img(src="@/assets/curso/temas/tema2/iconosv/icono4.svg", alt='')
                p.text-center Lápices
              .col-4.col-md-2.col-lg.mb-3.mb-lg-0
                img(src="@/assets/curso/temas/tema2/iconosv/icono5.svg", alt='')
                p.text-center Metro
              .col-4.col-md-2.col-lg.mb-3.mb-lg-0
                img(src="@/assets/curso/temas/tema2/iconosv/icono6.svg", alt='')
                p.mb-0.text-center Jaboncillo de tiza
              .col-4.col-md-2.col-lg.mb-3.mb-lg-0
                img(src="@/assets/curso/temas/tema2/iconosv/icono7.svg", alt='')
                p.text-center Mesa
          .col-lg-3.d-none.d-lg-block
            img(src="@/assets/curso/temas/tema2/imagen10.png", alt='')

    p La marcación de las piezas que componen la prenda, sea manual o asistida por computador, requiere la adecuada distribución de los patrones sobre la extensión de la tela. El trazo se debe realizar por cada material, por ejemplo:
    
    .row.justify-content-evenly.align-items-center.mb-4(data-aos="fade")
      .col-6.col-md-4.col-lg-3
        .tarjeta.bg2.mb-3.p-4
          .row.justify-content-center
            .col-sm-4.col-md-10.col-lg-8
              img(src="@/assets/curso/temas/tema2/tar14/t1.svg", alt='')
            h3.text-center Trazos en tela
      .col-6.col-md-4.col-lg-3
        .tarjeta.bg2.mb-3.p-4
          .row.justify-content-center
            .col-sm-4.col-md-10.col-lg-8
              img(src="@/assets/curso/temas/tema2/tar14/t2.svg", alt='')
            h3.text-center Forro
      .col-6.col-md-4.col-lg-3
        .tarjeta.bg2.mb-3.p-4
          .row.justify-content-center
            .col-sm-4.col-md-10.col-lg-8
              img(src="@/assets/curso/temas/tema2/tar14/t3.svg", alt='')
            h3.text-center Entretelas

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-sm-12.col-md-10.col-lg-10
        .cajon.color-acento-contenido.p-4 
          p.mb-0 #[b  Se debe tener en cuenta cantidades y tallas según orden de corte. En el caso del corte troquelado se realiza mediante el uso de plantillas colocadas a presión y se procede a cortar.  ]


    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/subt.svg', alt='')
        h3.mb-0.ms-2 ¿Qué es el corte?

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-sm-12.col-md-7.col-lg-6
        p El corte se define como el proceso de transformación de la materia prima textil (tejido o tela) en piezas útiles para confeccionar prendas de vestir, este proceso de transformación se realiza utilizando máquinas especializadas de corte o con tijeras convencionales.
        p Para obtener excelentes resultados en el proceso de corte se requiere de:
        ul.lista-ul--color.fa-ul.color-acento-contenido
          li 
            i.fas.fa-plus
            span.mb-0 Maquina de corte o tijeras convencionales.
          li
            i.fas.fa-plus
            span.mb-0 Otras herramientas.
      .col-8.col-md-5.col-lg-4
        img(src="@/assets/curso/temas/tema2/imagen13.svg", alt='')


    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/subt.svg', alt='')
        h3.mb-0.ms-2 Tipos de corte
    
    .row.align-items-center.mb-5(data-aos="fade")
      .col-lg-7
        LineaTiempoD.color-acento-botones
          .row(numero="a" titulo="Manual")
            .col-md-12.mb-4.mb-md-0
              p Requiere la utilización de tijeras más o menos de 8 pulgadas, usadas solo para corte de tela; se colocan directamente los moldes y se procede a cortar.
          .row(numero="b" titulo="Convencional")
            .col-md-12.mb-4.mb-md-0
              p Utiliza maquinaria y equipos electromecánicos, disminuyendo la intervención de operaciones manuales.  
          .row(numero="c" titulo="Automático")
            .col-md-12.mb-4.mb-md-0
              p Comprende mesa, unidad de control conformado por el ordenador con  #[em software ] especializado, cabezal de corte y carro extendedor automático, permitiendo optimizar el espacio y tiempos de corte. 
      .col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/temas/tema2/imagen14.png", alt='')

     
    .subt.mb-5(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/subt.svg', alt='')
        h3.mb-0.ms-2 Herramientas

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-sm-12
        SlyderF(columnas="col-md-6 col-xl-4")
          .tarjeta.bg5.p-4
            .row.justify-content-center.mb-3
              .col-8.col-lg-6
                img(src="@/assets/curso/temas/tema2/tarjeta3/imagen1.svg" alt="")
            p.text-center #[b Patrones ]
          .tarjeta.bg5.p-4
            .row.justify-content-center.mb-3
              .col-8.col-lg-6
                img(src="@/assets/curso/temas/tema2/tarjeta3/imagen2.svg" alt="")
            p.text-center #[b Reglas ]
          .tarjeta.bg5.p-4
            .row.justify-content-center.mb-3
              .col-8.col-lg-6
                img(src="@/assets/curso/temas/tema2/tarjeta3/imagen3.svg" alt="")
            p.text-center #[b Metro ]
          .tarjeta.bg5.p-4
            .row.justify-content-center.mb-3
              .col-8.col-lg-6
                img(src="@/assets/curso/temas/tema2/tarjeta3/imagen4.svg" alt="")
            p.text-center #[b Jaboncillo o tizas ]
          .tarjeta.bg5.p-4
            .row.justify-content-center.mb-3
              .col-8.col-lg-6
                img(src="@/assets/curso/temas/tema2/tarjeta3/imagen5.svg" alt="")
            p.text-center #[b Papel trazo ]
          .tarjeta.bg5.p-4
            .row.justify-content-center.mb-3
              .col-8.col-lg-6
                img(src="@/assets/curso/temas/tema2/tarjeta3/imagen6.svg" alt="")
            p.text-center #[b Mesa de corte ]


    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/subt.svg', alt='')
        h3.mb-0.ms-2 Máquinas de corte industrial

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-lg-10
        img(src='@/assets/curso/temas/tema2/maq1.png', alt='La imagen presenta varias cortadoras utilizadas en la confección textil, incluyendo una cortadora automática, una cortadora sin fin, una cortadora vertical, una cortadora circular y una cortadora de mano. Además, expone un guante de malla que se utiliza como equipo de seguridad al manejar estas herramientas de corte. ')
 

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/subt.svg', alt='')
        h3.mb-0.ms-2 Otras herramientas

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-lg-8
        img(src='@/assets/curso/temas/tema2/herram1.png', alt='La imagen describe herramientas esenciales para la confección textil, incluyendo tijeras, un punzón, una máquina perforadora y agujas o alfileres para la sujeción del textil. Cada herramienta está ilustrada con su respectiva etiqueta, indicando su uso específico en el proceso de confección. ')

    AcordionA.mb-4(tipo="a" clase-tarjeta="tarjeta tarjeta--grisos" data-aos="fade")
      .row.justify-content-around(titulo="Urdimbre y trama")
        .col-md-6.col-lg-7.mb-4.mb-md-0
          p #[b Urdimbre:] la serie longitudinal de los hilos recibe el nombre de urdimbre, y cada uno de los elementos que la constituyen se denomina hilo. Los hilos verticales son la urdimbre.
          p #[b Trama:] la serie transversal recibe el nombre de trama, y cada una de sus unidades se denomina pasada. Las pasadas horizontales son la trama.
        .col-md-5.col-lg-4
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 151.
            span Representación de la urdimbre y la trama en la estructura básica del tejido
          figure
            img(src='@/assets/curso/temas/tema2/imagen17.png', alt='Esquema que muestra la disposición de los hilos de urdimbre y trama en un tejido entrelazado.')
      .row.justify-content-around(titulo="Hilo de tela")
        .col-md-6.col-lg-6.mb-4.mb-md-0
          p El hilo de tela se conoce también como sentido de hilo, y se refiere a la dirección que siguen los hilos de urdimbre (longitudinal) y trama (transversal).
          p La línea que atraviesa la urdimbre y la trama en sentido diagonal es conocida con el nombre de sesgo o bies.
        .col-md-5.col-lg-5
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 152.
            span Orientación del hilo de tela en las piezas del patrón para el corte de la prenda
          figure
            img(src="@/assets/curso/temas/tema2/imagen18.png" alt="Piezas de patrón con flechas que indican la dirección del hilo de tela para su correcta ubicación sobre el material.")
      .row.justify-content-around(titulo="Sesgo o bies")
        .col-md-5.col-lg-5.mb-4.mb-md-0
          p Se llama sesgo o bies al sentido diagonal de las telas en un ángulo de 45° grados; diagonal o al sesgo aporta mejor caída y cierta elasticidad. En algunos casos es necesario cortar las piezas de una prenda al sesgo debido a su diseño.
        .col-md-6.col-lg-6          
          img(src="@/assets/curso/temas/tema2/imagen19.png" alt="")
  
    .bgi-5.mb-5.p-4(data-aos="fade")
      .row.justify-content-center.align-items-center
        .col-sm-12.col-md-10.col-lg-7
          h3.text-center En el material textil
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 153.
            span Identificación del sesgo o bies en relación con la urdimbre y la trama del material textil
          figure
            img.mb-5(src="@/assets/curso/temas/tema2/imagen20.png" alt="Esquema de un material textil que muestra las direcciones de urdimbre, trama y sesgo o bies mediante líneas y flechas.")


    .subt.mb-5(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/subt.svg', alt='')
        h3.mb-0.ms-2 Anchos de las telas
    
    p.mb-4 Los anchos de las telas que se pueden encontrar normalmente en los puntos de venta tienen diferentes medidas que suelen estar normalizados. Estos anchos vienen de fábrica y se dividen en:

    .row.jutify-content-center.mb-5(data-aos="fade")
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7.col-lg-8
              img(src="@/assets/curso/temas/tema2/tarjeta4/imagen1.png")
          h4.text-center Ancho simple
          p.text-center Están elaborados a partir de 70 cm a 90 cm de ancho, en este grupo se encuentran cambre, paños, fieltro, blonda, satén, lino, etc.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7.col-lg-8
              img(src="@/assets/curso/temas/tema2/tarjeta4/imagen2.png") 
          h4.text-center Ancho angosto
          p.text-center Están elaborados a partir de 0,5 mm hasta 25 cm de ancho, en este grupo se encuentran los encajes, franjas, cintas, elásticos, etc.
      .col-sm-6.col-lg-3.mb-4.mb-sm-0
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7.col-lg-8
              img(src="@/assets/curso/temas/tema2/tarjeta4/imagen3.png") 
          h4.text-center Ancho doble
          p.text-center Están elaborados a partir de 140 cm y 150 cm de ancho, en este grupo se encuentran paños, tafetán, popelina, crepé, entretelas, denim, etc.
      .col-sm-6.col-lg-3
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7.col-lg-8
              img(src="@/assets/curso/temas/tema2/tarjeta4/imagen4.png") 
          h4.text-center Ancho especial
          p.text-center.mb-4.p-1 Están elaborados a partir de 2,80 cm, en este  grupo se encuentran la  tapicería y la decoración.
        
    .bgi-5.mb-5.p-4(data-aos="fade")
      .row.justify-content-center.align-items-center
        .col-sm-12.col-md-6.col-lg-3
          .subt2.mb-4
            ul.lista-ul.mb-0
              li.mb-0
                i.fas.fa-circle
                span.mb-0.h4 Orillos de tela
          p.mb-2 Son los bordes longitudinales de la tela, están tejidos con una apariencia diferente y densa, como consecuencia de tratamientos de humectación y secado, que sufren una vez han sido tejidas para su estabilización.
        .col-10.col-md-6.col-lg-5
          img(src="@/assets/curso/temas/tema2/imagen21.png" alt="" )

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-sm-12.col-md-12.col-lg-11
        .tarjeta.bg1.p-4
          .row.justify-content-around.align-items-center
            .col-4.col-md-2.col-lg-2.mb-3.mb-md-0
              img.px-lg-4(src="@/assets/curso/temas/tema2/admiracion.png")
            .col-sm-12.col-md-10.col-lg-10
              h5 ¿Cómo surgen?
              p.mb-0 Los agujeritos de los orillos son realizados por unas plaquetas de agujas situadas en los laterales de los hornos encargados de secar las telas y que hacen que estas se mantengan sujetas y estiradas en su ancho durante todo el proceso. Suelen perforar el tejido desde el revés hacia el derecho, por lo que, por regla general, las rebabas de las perforaciones en los orillos indican el #[b derecho de la tela. ]


    .subt.mb-5(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/subt.svg', alt='')
        h3.mb-0.ms-2 Tipos de orillos
    
    p.mb-4 El propósito del orillo es que la tela no se deshilache. Según el diseño o fabricante los orillos de la tela se dividen en:
    
    .row(data-aos="fade")
      .col-lg-8
        LineaTiempoD.color-acento-botones
          .row(numero="A" titulo="Orillo metido")
            .col-md-12.mb-4.mb-md-0
              p Una aguja especial en forma de gancho impulsada por una leva, después de que esta se corta, la inserción del extremo del hilo retorna, formando así un borde fuerte. Este sistema es usado generalmente en las telas de peso ligero a medio.
          .row(numero="B" titulo="Orillo leno")
            .col-md-12.mb-4.mb-md-0
              p Estos orillos se obtienen uniendo la trama con fuertes hilos adicionales y eliminando mediante corte los extremos de la trama que sobresalen. Este sistema es usado generalmente en las telas de peso pesado.  
          .row(numero="C" titulo="Orillo de puntada cadeneta")
            .col-md-12.mb-4.mb-md-0
              p Este tipo de orillo se produce mayoritariamente en un mecanismo de tejido de punto, se realiza principalmente en una máquina de tejer por medio de agujas. 
          .row(numero="D" titulo="Orillos fusionados")
            .col-md-12.mb-4.mb-md-0
              p Se obtiene presionando unos elementos mecánicos calientes en el borde de la tela, este método se puede aplicar en textiles de fibras sintéticas. 
          .row(numero="E" titulo="Orillos lisos")
            .col-md-12.mb-4.mb-md-0
              p Este tipo de orillo también llamado orillo de estampación es usado para controlar los colores básicos que tiene el dibujo, enumerándolos en el orden de estampación, además añade la marca del fabricante. 
          .row(numero="F" titulo="Orillos de cinta")
            .col-md-12.mb-4.mb-md-0
              p Este tipo de orillo es utilizado por los fabricantes de textiles clásicos como paños, también tejen sus nombres en el orillo para que sean identificados fácilmente en las sastrerías a medida. 
      .col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/temas/tema2/imagen22.png", alt='')


    Separador    
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Proceso de extendido

    .row.justify-content-center
      .col-lg-10
        .subt2.mb-4
          ul.lista-ul.mb-0
            li.mb-0
              i.fas.fa-circle
              span.mb-0.h4 ¿Qué es el extendido?
        p.mb-4 El tendido o extendido consiste en ubicar la tela sobre una superficie plana (mesa de corte), ya sea una capa de tela o varias según la orden de producción; se extiende la tela considerando las características del textil, se prepara y selecciona los materiales e instrumentos necesarios para la ejecución de la tarea; el extendido se puede realizar de dos formas: 

    .row.justify-content-center.mb-5
      .col-md-10.col-lg-5.mb-3.mb-lg-0      
        .tarjeta.bg1.p-4.py-lg-2.h-100
          .row.align-items-center.justify-content-center
            .col-5.col-md-3.col-lg-4
              img(src="@/assets/curso/temas/tema2/tarjeta5/imagen1.png") 
            .col-7.col-md-9.col-lg-8
              h4.mb-0 Con carro extendedor
              p.mb-0 Extendedora automática, extendedora de codo.
      .col-md-10.col-lg-5.mb-3.mb-lg-0      
        .tarjeta.bg1.p-4.py-lg-2.h-100
          .row.align-items-center.justify-content-center
            .col-5.col-md-3.col-lg-4
              img(src="@/assets/curso/temas/tema2/tarjeta5/imagen2.png") 
            .col-7.col-md-9.col-lg-8
              h4.mb-0 Manual
              p.mb-0 Extendedora de carro o coche.

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-10
        .subt2.mb-4
          ul.lista-ul.mb-0
            li.mb-0
              i.fas.fa-circle
              span.mb-0.h4 Herramientas
        img(src='@/assets/curso/temas/tema2/herram2.png', alt='')

    .tarjeta.bgi-3.p-4.p-lg-5.mb-5(data-aos="fade")
      .row.justify-content-center.align-items-center
        .col-6.col-md-5.col-lg-3.mb-3.mb-md-0
          img(src="@/assets/curso/temas/tema2/imagen24.png") 
        .col-sm-12.col-md-7.col-lg-7
          h4 Extendido manual
          p.mb-0 En el extendido manual se sitúa la pieza de textil en un extremo de la mesa, mientras dos operarios efectúan el estirado de la tela (pueden también utilizar un carro de extendido) hasta el largo previamente establecido.
    
    p.mb-4 Recomendaciones:

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-8
        LineaTiempoD.color-acento-botones
          .row(numero="A" titulo="Alineación")
            .col-md-12.mb-4.mb-md-0
              p Se recomienda que el textil se encuentre completamente alineado al orillo, de ser posible alinear los dos orillos.
          .row(numero="B" titulo="Tensión")
            .col-md-12.mb-4.mb-md-0
              p En lo posible evitar la tensión en la tela, ya que después del corte las piezas pueden quedar reducidas (pequeñas con relación al tamaño real del molde).  
          .row(numero="C" titulo="Arrugas")
            .col-md-12.mb-4.mb-md-0
              p Evitar que la tela se encuentre arrugada en el tendido para que no se formen burbujas de aire, que ocasionan distorsiones en el corte. 
          .row(numero="D" titulo="Consumo")
            .col-md-12.mb-4.mb-md-0
              p Cortar solamente lo necesario para evitar más consumo de tela, controlando el desperdicio de acuerdo con la acomodación de los moldes. 
      .col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/temas/tema2/imagen25.png")

    .mb-5.bgi-6.p-4(data-aos="fade")
      .row.justify-content-center.align-items-center
        .col-9.col-md-5.col-lg-3.mb-3.mb-md-0
          img(src="@/assets/curso/temas/tema2/imagen26.svg") 
        .col-md-7.col-lg-7
          h4 Preparación del textil
          p Algunos textiles se pueden encoger o aumentar después de ser sometidos al lavado o planchado, por tal motivo, se sugiere que antes de realizar cualquier proceso de extendido y corte, el textil sea sometido a lo siguiente:
          ul.lista-ul--color.fa-ul
            li.mb-1 
              i.fas.fa-plus
              span.mb-0 Pruebas de % de elongación o reducción.
            li.mb-1
              i.fas.fa-plus
              span.mb-0 Pruebas de fusionado.
            li.mb-1
              i.fas.fa-plus
              span.mb-0 Pruebas de fusionado.
            li.mb-1
              i.fas.fa-plus
              span.mb-0 Lavado.
            li.mb-1
              i.fas.fa-plus
              span.mb-0 Planchado.
            li.mb-0
              i.fas.fa-plus
              span.mb-0 Identificación de defectos textiles.

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/subt.svg', alt='')
        h3.mb-0.ms-2 Disposición de la tela sobre la mesa
    
    p.mb-4 Extienda el textil sobre la mesa y defina el tipo de extendido de acuerdo con los patrones que desea trabajar: 

    .tarjeta.bgi-1.p-4.mb-5(data-aos="fade")
      SlyderA(tipo="b")
        .row.justify-content-center.my-lg-4
          p #[b Tendido abierto  ]
          .col-lg-10.col-11
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 154.
              span Ubicación de las piezas en tendido abierto respetando la dirección del hilo y el orillo de la tela
            figure
              img(src="@/assets/curso/temas/tema2/tarjeta6/imagen1.svg", alt='Diagrama de tendido abierto donde las piezas del patrón se alinean con el orillo de la tela para garantizar el correcto sentido del hilo.')
        .row.justify-content-center.my-lg-4
          p #[b Tendido cerrado  ]
          .col-lg-10.col-11
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 155.
              span Distribución de piezas en tendido cerrado alineadas al doblez y al orillo de la tela
            figure
              img(src="@/assets/curso/temas/tema2/tarjeta6/imagen2.svg", alt='Esquema de tendido cerrado donde las piezas del patrón se ubican sobre el doblez de la tela y paralelas al orillo para obtener piezas simétricas completas.')

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/subt.svg', alt='')
        h3.mb-0.ms-2 Extendido industrial
    
    p El proceso de extendido industrial se realiza a través del  #[em software ] especializado (CAD, sistemas de diseño asistido por computador: Optitex, Lectra, Audaces). Este proceso se realiza según las especificaciones de la orden de corte o ficha técnica. Los extendidos utilizados en la industria son:

    AcordionA(tipo="b" clase-tarjeta="tarjeta" data-aos="fade")
      .row(titulo="Extendido cara arriba")
        .col-lg-4.mb-4.mb-md-0
          p La capa de tela se extiende según el largo del trazo, es importante determinar cuál es el derecho de la tela, ya que esta debe quedar mirando hacia arriba con respecto a la mesa. Se extiende la capa desde el inicio del trazo hasta el final del largo del trazo y se procede a cortar; nuevamente se desplaza la siguiente capa desde el inicio y se repite el proceso el número de veces que requiera las capas.
        .col-md-8.col-lg-7
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 156.
            span Representación del extendido industrial cara arriba para el tendido de capas de tela
          figure
            img(src="@/assets/curso/temas/tema2/tarjeta7/imagen1.svg" alt="Esquema de extendido cara arriba donde las capas de tela se colocan en la misma dirección, manteniendo visible el derecho de la tela y alineando los orillos.")
      .row(titulo="Extendido al lomo o doblez de tela")
        .col-lg-4.mb-4.mb-md-0
          p Se realiza cuando la tela se dobla a la mitad de su ancho, se une orillo con orillo formando un doblez de tela en un extremo, conocido como lomo. Al doblar la tela queda derecho con derecho, lo que se denomina careado o cara a cara. Este tipo de extendido se utiliza para cortar prototipos, es utilizado por modistas o sastres.
        .col-md-8.col-lg-7
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 157.
            span Representación del extendido al lomo o doblez de tela en el proceso de tendido
          figure
            img(src="@/assets/curso/temas/tema2/tarjeta7/imagen2.svg" alt="Esquema de extendido al lomo donde la tela se dobla sobre sí misma, ubicando derecho con derecho y formando un doblez para el corte de piezas simétricas.")
      .row(titulo="Extendido cara a cara")
        .col-lg-4.mb-4.mb-md-0
          .col-lg-4p La capa de tela se extiende según el largo del trazo, es importante determinar cuál es el derecho de la tela, ya que la primera capa debe quedar con el derecho hacia arriba con respecto a la mesa. Se extiende la capa desde el inicio del trazo hasta el final del largo del trazo y se procede a cortar.
          p Se repite el proceso con la siguiente capa, pero teniendo en cuenta que esta debe quedar con el derecho de tela hacia abajo, quedando cada a cara con la primera capa. Las siguientes capas deben quedar en pares, derecho con derecho de la tela.
        .col-md-8.col-lg-7
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 158.
            span Representación del extendido cara a cara para la disposición alternada de capas de tela
          figure
            img(src="@/assets/curso/temas/tema2/tarjeta7/imagen3.svg" alt="Extendido cara a cara donde las capas de tela se colocan alternando el derecho y el revés, quedando enfrentadas para optimizar el proceso de corte.")
      .row(titulo="Extendido <em>zigzag</em>")
        .col-lg-4.mb-4.mb-md-0
          p El proceso es igual al extendido cara a cara, la diferencia es que no se cortan los extremos. Una vez llegado al extremo dobla sobre sí mismo para hacer el recorrido en sentido contrario. De esta forma las capas de tela deben quedar pares cara con cara y revés con revés.
        .col-md-8.col-lg-7
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 159.
            span Representación del extendido en zigzag para la disposición continúa de capas de tela
          figure
            img(src="@/assets/curso/temas/tema2/tarjeta7/imagen4.svg" alt="Extendido en zigzag donde las capas de tela se doblan al final de cada recorrido, alternando el sentido de colocación sin cortar los extremos.")
      .row(titulo="Extendido escalonado o espiga")
        .col-lg-4.mb-4.mb-md-0
          p Es un extendido cara arriba en el que los largos de las capas de tela no son iguales. Las capas más largas se colocan debajo y las más cortas se colocan arriba formando un escalón, este tipo de extendido se emplea para ajustar en un solo trazo diferentes cantidades en relación con tallas y colores de prendas a cortar.
        .col-md-8.col-lg-7
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 160.
            span Representación del extendido escalonado o en espiga para la combinación de tallas y colores
          figure
            img(src="@/assets/curso/temas/tema2/tarjeta7/imagen5.svg" alt="Esquema de extendido escalonado con capas de tela de diferentes longitudes, organizadas en niveles para optimizar el corte de distintas tallas y colores.")


    Separador    
    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4  Tipos de trazo
    
    .subt2.mb-4
      ul.lista-ul.mb-0
        li.mb-0
          i.fas.fa-circle
          span.mb-0.h4 Tipos de trazo según requerimientos de patronaje:
    .row.justify-content-center.mb-5
      .col-lg-9
        img(src='@/assets/curso/temas/tema2/tipos-trazo.png', alt='')
    
    .subt2.mb-4
      ul.lista-ul.mb-0
        li.mb-0
          i.fas.fa-circle
          span.mb-0.h4 Señalización

    .row.justify-content-center.mb-5
      .col-sm-12.col-md-7.col-lg-7
        p.mb-4 Para tener claro los requerimientos desde el área de patronaje es importante identificar y conocer la respectiva señalización de patrones:
        .row.justify-content-center
          .col-lg-6.col-sm-12.col-md-6
            ul.lista-ul--color.fa-ul
              li 
                i.fas.fa-plus
                span.mb-0 Hilo de tela.
              li
                i.fas.fa-plus
                span.mb-0 Referencia o diseño.
              li
                i.fas.fa-plus
                span.mb-0 Nombre de la pieza.
              li
                i.fas.fa-plus
                span.mb-0 Número de veces a cortar.
          .col-lg-6.col-sm-12.col-md-6
            ul.lista-ul--color.fa-ul
              li 
                i.fas.fa-plus
                span.mb-0 Tipo de material.
              li
                i.fas.fa-plus
                span.mb-0 Número de pieza en el tendido.
              li
                i.fas.fa-plus
                span.mb-0 Piquetes.
              li
                i.fas.fa-plus
                span.mb-0 Plantilla.
      .col-8.col-md-5.col-lg-3
        img(src="@/assets/curso/temas/tema2/imagen27.png")

    .subt2.mb-4
      ul.lista-ul.mb-0
        li.mb-0
          i.fas.fa-circle
          span.mb-0.h4  Señalización - Hilos de tela
    
    p Para tener claro los requerimientos desde el área de patronaje es importante identificar y conocer la respectiva señalización de patrones:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        img(src='@/assets/curso/temas/tema2/senalizacion.png', alt='')
    
    p.mb-4 Hilo de tela una cabeza hacia arriba, hilo de tela una cabeza hacia abajo, hilo de tela una cabeza doble.

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--grisos" data-aos="fade")
      .row.justify-content-around(titulo="Trazo bidireccional, vello en ambos sentidos")
        .col-lg-5.mb-4.mb-md-0
          p Este trazo/marcado se realiza cuando el hilo de tela tiene la cabeza doble; se pueden colocar los patrones en dos sentidos de dirección.
          p El material textil que se utilice no debe tener restricción con respecto a sus características.
          p Hilo de tela una cabeza doble.
        .col-lg-5
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 161.
            span Trazo bidireccional con doble cabeza
          figure
            img(src='@/assets/curso/temas/tema2/imagen28.png', alt='Piezas orientadas en ambos sentidos sobre el hilo de tela.')
      .row.justify-content-around(titulo="Bidireccional, vello en ambos sentidos")
        .col-lg-5.mb-4.mb-md-0
          p En este tipo de trazo, las piezas pueden orientarse en diferentes direcciones sin afectar la apariencia del material, optimizando el aprovechamiento de la tela.
        .col-lg-5
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 162.
            span Trazo bidireccional en materiales con vello en ambos sentidos
          figure
            img(src="@/assets/curso/temas/tema2/imagen29.png", alt="Piezas distribuidas en ambos sentidos sobre la tela en un trazo bidireccional.")
      .row.justify-content-around(titulo="Trazo direccional, vello en un solo sentido")
        .col-lg-7.mb-4.mb-md-0
          p Este trazo/marcado se realiza cuando el hilo de tela tiene la cabeza sea hacia arriba o hacia abajo; se deben colocar los patrones en un sentido de dirección. El procedimiento de marcado tendrá por resultado un producto con la más elevada calidad. Este tipo de trazo se usa para materiales que tienen restricción con respecto a sus características en cuanto a brillo, cambio de color al tacto, estampados, dirección de pelo/vello, entre otros.
          p Hilo de tela una cabeza hacia arriba - Hilo de tela una cabeza hacia abajo.
        .col-md-6.col-lg-3
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 163.
            span Orientación direccional de las piezas según el sentido del hilo de tela
          figure
            img(src='@/assets/curso/temas/tema2/imagen30.png', alt='Piezas ubicadas en una sola dirección siguiendo el sentido del hilo de tela.')
      .row.justify-content-around(titulo="Direccional - vello en un solo sentido")
        .col-lg-5.mb-4.mb-md-0
          p En este tipo de trazo, todas las piezas se orientan en una misma dirección para conservar la uniformidad visual y las características del material.
        .col-lg-5
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 164.
            span Trazo direccional para materiales con vello en un solo sentido
          figure
            img(src="@/assets/curso/temas/tema2/imagen31.png", alt="Piezas distribuidas en una sola dirección sobre la tela siguiendo el sentido del vello.")
      .row.justify-content-around(titulo="Señalización")
        .col-lg-8.mb-4.mb-md-0
          ul.lista-ul--color.fa-ul.color-primario
            li 
              i.fas.fa-plus
              span.mb-0 #[b Referencia o diseño:] ref: 20201208
            li
              i.fas.fa-plus
              span.mb-0 #[b Nombre de la pieza:] delantero o frente
            li
              i.fas.fa-plus
              span.mb-0 #[b Número de veces a cortar o marcadas:] x 3 veces
            li
              i.fas.fa-plus
              span.mb-0 #[b Tipo de material:] x 1 v material base x 1 v material forro x 1 v material entretela
            li
              i.fas.fa-plus
              span.mb-0 #[b Número de pieza en el tendido:] 1/2
        .col-md-6.col-lg-3
          img(src='@/assets/curso/temas/tema2/imagen32.png', alt='')


    Separador    
    #t_2_5.titulo-segundo.color-acento-contenido
      h2 2.5  Tendido marcación y corte
    
    p.mb-4 El tendido y marcación son una parte clave para el proceso de corte, este procedimiento requiere de precisión y técnica. Una vez identificados los requerimientos desde el área de patronaje se procede a realizar el tendido y marcación, para ello es importante seguir los siguientes pasos:
     
    .row.justify-content-center.mb-5(data-aos="fade")
      .col-6.col-md-6.col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/uno.png')
          .tarjeta.color-primario.p-4.w-100
            .text-center
              h4.text-center Identificar el ancho útil
      .col-6.col-md-6.col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/dos.png')
          .tarjeta.color-primario.p-4.w-100
            .text-center
              h4.text-center Ubicación de patrones
      .col-6.col-md-6.col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/tres.png')
          .tarjeta.color-primario.p-4.w-100
            .text-center
              h4.text-center Marcación
      .col-6.col-md-6.col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/cuatro.png')
          .tarjeta.color-primario.p-4.w-100
            .text-center
              h4.text-center  Corte

    .subt2.mb-4
      ul.lista-ul.mb-0
        li.mb-0
          i.fas.fa-circle
          span.mb-0.h4 Ancho útil
    
    p.mb-4 Es importante identificar el ancho útil del material textil antes de empezar a desarrollar el trazo; se sugiere lo siguiente:

    .tarjeta--container.row.mb-5
      .col-sm-12.col-md-6.col-lg-6.tarjeta.bg1.p-5
        .row.justify-content-center.mb-4
          .col-6.col-lg-5
            img(src='@/assets/curso/temas/tema2/boton1.png', alt='')
        h4.text-center 1.	Identificar el ancho total del textil
      .col-sm-12.col-md-6.col-lg-6.tarjeta.bg2.p-5
        .row.justify-content-center.mb-4
          .col-6.col-lg-5
            img(src='@/assets/curso/temas/tema2/boton2.png', alt='')
        h4.text-center 2.	Definir cuánto mide el orillo

    p.mb-4 El ancho útil se halla restando al ancho total de la tela, el orillo.

    .bgi-5.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-7  
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 165.
            span Cálculo del ancho útil de la tela a partir del ancho total y los orillos
          figure
            img(src="@/assets/curso/temas/tema2/imagen35.png" alt="Esquema que muestra cómo determinar el ancho útil de la tela descontando el ancho de los orillos del ancho total.")
  
     
    .subt2.mb-4
      ul.lista-ul.mb-0
        li.mb-0
          i.fas.fa-circle
          span.mb-0.h4 Ubicar patrones
    
    p.mb-4 Una vez identificado, analizado y alistado:
    
    .row.justify-content-center.mb-5(data-aos="fade")
      .col-6.col-lg-3.col-md-6.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/uno.png')
          .tarjeta.color-primario.w-100.p-4
            .text-center
              h4.text-center Los requerimientos del patrón desde el área de patronaje
      .col-6.col-lg-3.col-md-6.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/dos.png')
          .tarjeta.color-primario.w-100.p-4
            .text-center
              h4.text-center El tipo de extendido/tendido a trabajar
      .col-6.col-lg-3.col-md-6.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/tres.png')
          .tarjeta.color-primario.w-100.p-4
            .text-center
              h4.text-center El ancho útil

    p Se procede a hacer el trazo o marcación del molde o patrón en el textil.

    .row.justify-content-center.mb-5     
      .col-sm-12.col-lg-7
        img(src="@/assets/curso/temas/tema2/imagen37.png" alt="")


    .subt2.mb-4
      ul.lista-ul.mb-0
        li.mb-0
          i.fas.fa-circle
          span.mb-0.h4 ¿Cómo transferir patrones?

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-6.col-md-6.col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/uno.png')
          .tarjeta.bg1.w-100.p-4
            .text-center
              h4.text-center Marcar con tiza o jabón
      .col-6.col-md-6.col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/dos.png')
          .tarjeta.bg1.w-100.p-4
            .text-center
              h4.text-center Pinar o alfileres
      .col-6.col-md-6.col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/tres.png')
          .tarjeta.bg1.w-100.p-4
            .text-center
              h4.text-center Pesas para sujetar

    .subt2.mb-4
      ul.lista-ul.mb-0
        li.mb-0
          i.fas.fa-circle
          span.mb-0.h4 Tipos de marcación 
    
    p.mb-4 Para transferir patrones al textil existen dos formas que son las más implementadas.

    SlyderF.mb-4(columnas="col-md-6 col-xl-4" data-aos="fade")
      .tarjeta.bg1.h-100.p-4.py-lg-5
        .row.justify-content-center.mb-3
          .col-8.col-lg-7
            img(src="@/assets/curso/temas/tema2/tarjeta10/imagen1.png" alt="")
        p.text-center #[b Tiza de cal ]
      .tarjeta.bg1.h-100.p-4.py-lg-5
        .row.justify-content-center.mb-3
          .col-8.col-lg-7
            img(src="@/assets/curso/temas/tema2/tarjeta10/imagen2.png" alt="")
        p.text-center #[b Jabón regular ]
      .tarjeta.bg1.h-100.p-4.py-lg-5
        .row.justify-content-center.mb-3
          .col-8.col-lg-7
            img(src="@/assets/curso/temas/tema2/tarjeta10/imagen3.png" alt="")
        p.text-center #[b Lapiz tela ]
      .tarjeta.bg1.h-100.p-4.py-lg-5
        .row.justify-content-center.mb-3
          .col-8.col-lg-7
            img(src="@/assets/curso/temas/tema2/tarjeta10/imagen4.png" alt="")
        p.text-center #[b Marcador tela ]
      .tarjeta.bg1.h-100.p-4.py-lg-5
        .row.justify-content-center.mb-3
          .col-8.col-lg-7
            img(src="@/assets/curso/temas/tema2/tarjeta10/imagen5.png" alt="")
        p.text-center #[b Rodaja ]
      .tarjeta.bg1.h-100.p-4.py-lg-5
        .row.justify-content-center.mb-3
          .col-8.col-lg-7
            img(src="@/assets/curso/temas/tema2/tarjeta10/imagen6.png" alt="")
        p.text-center #[b Papel onix o calco ]
    
    .bgi-3.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-sm-12.col-md-7.col-lg-6
          p Es el método más utilizado por los sastres para marcaciones especiales sobre el textil; este método tiene puntos con hebras de hilo que sirven de guía, sin llegar a manchar el textil. Esta es una puntada suelta en bucle como una indicación de dónde coser finalmente.
        .col-7.col-md-5.col-lg-3
          img(src="@/assets/curso/temas/tema2/imagen40.png")
    

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/subt.svg', alt='')
        h3.mb-0.ms-2 Tipos de marcación, alfileres

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-9
        p.mb-0 Fijar patrones con alfileres. 
        p Los alfileres vienen en una variedad de tamaños. Si la tela es gruesa use alfileres grandes y largos, si la tela es delgada y delicada como la seda utilice alfileres pequeños y cortos para evitar dañarla.
        .cajon.color-acento-contenido.p-4
          p.mb-0 #[b Inserte los alfileres cada 3 cm al rededor del patrón y en puntos claves, evite coger mucha cantidad del textil para evitar los bucles y malformaciones a la hora de pinar, es recomendable ubicar los alfileres de forma diagonal. ]
      .col-lg-3.d-none.d-lg-block
        img(src="@/assets/curso/temas/tema2/imagen41.png")

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-6.col-md-5.col-lg-3.mb-3.mb-md-0
        img(src="@/assets/curso/temas/tema2/imagen42.svg")
      .col-sm-12.col-md-7.col-lg-7
        .tarjeta.color-primario.p-4.mb-4
          .row.justify-content-around.align-items-center
            .col-4.col-md-3.col-lg-2.mb-3.mb-md-0
              img(src="@/assets/curso/temas/tema2/admiracion3.png")
            .col-8.col-md-9.col-lg-9
              h5 Pinar 
              p.mb-0 Insertar alfileres en el textil para asegurar el molde.
        .row.align-items-end
          .col-sm-12.col-md-6.col-lg-4
            p.mb-4 #[b Lo que no se debe hacer ]
            ul.lista-ul--color.fa-ul
              li 
                i.fas.fa-plus
                span.mb-0 Asegurar con cinta.
              li
                i.fas.fa-plus
                span.mb-0 No fijar los patrones.
          .col-sm-12.col-md-6.col-lg-8
            ul.lista-ul--color.fa-ul
              li
                i.fas.fa-plus
                span.mb-0 No cortar el margen del patrón de forma inadecuada.
              li
                i.fas.fa-plus
                span.mb-0 Marcar con tiza de forma inadecuada.


    .subt.mb-5(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/subt.svg', alt='')
        h3.mb-0.ms-2 Proceso de corte

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/imagen43.svg')})`}")
      .bloque-texto-g__texto.p-4.py-lg-5
        p.mb-0 Luego de realizar y seguir cada uno de los pasos para una adecuada calidad del proceso, se continúa con el corte del textil de acuerdo con la marcación. Para ello, es importante conocer las herramientas fundamentales para este proceso y elegir las adecuadas, lo cual garantiza un mejor trabajo.
    

    .subt2.mb-4
      ul.lista-ul.mb-0
        li.mb-0
          i.fas.fa-circle
          span.mb-0.h4 Herramientas

    SlyderF.mb-4(columnas="col-md-6 col-xl-4" data-aos="fade")
      .tarjeta.bg2.p-4
        .row.justify-content-center.mb-3
          .col-8.col-lg-7
            img(src="@/assets/curso/temas/tema2/tarjeta11/imagen1.png" alt="")
        h4 #[b Tijeras castellana ]
        p Tienen los dos orificios para los dedos del mismo tamaño, suelen tener un tamaño medio y son bastante ligeras, se recomiendan para textiles de peso liviano.
      .tarjeta.bg2.p-4
        .row.justify-content-center.mb-3
          .col-8.col-lg-7
            img(src="@/assets/curso/temas/tema2/tarjeta11/imagen2.png" alt="")
        h4 #[b Tijeras sastre ]
        p Uno de los lados de la hoja no sobresale a su mango, permitiendo de esta manera apoyar las tijeras en la mesa a la hora de cortar la tela; tienen un tamaño y peso mayor. Se recomiendan para textiles de peso mediano a pesado.
      .tarjeta.bg2.p-4
        .row.justify-content-center.mb-3
          .col-8.col-lg-7
            img(src="@/assets/curso/temas/tema2/tarjeta11/imagen3.png" alt="")
        h4 #[b Tijeras  #[em zigzag ] ]
        p Poseen dientes en las hojas, lo que crea un patrón de corte en  #[em zig zag ]. La función principal de este tipo de tijeras es la de evitar que se deshilache el textil después del corte.
      .tarjeta.bg2.p-4
        .row.justify-content-center.mb-3
          .col-8.col-lg-7
            img(src="@/assets/curso/temas/tema2/tarjeta11/imagen4.png" alt="")
        h4 #[b Cortadores térmicos ]
        p Estos cortadores se emplean para el corte de acrílico y textiles. Una vez cortada la tela queda sellada y no se deshilacha.
      .tarjeta.bg2.p-4
        .row.justify-content-center.mb-3
          .col-8.col-lg-7
            img(src="@/assets/curso/temas/tema2/tarjeta11/imagen5.png" alt="")
        h4 #[b Cúter rotatorio ]
        p Se caracteriza por ser el mejor cortador para telas, lonas, láminas plásticas, hule, vinilos y otros materiales textiles tejidos o no tejidos (fieltro). Su mango facilita el manejo, perfección y agilidad a la hora de cortar, se puede apoyar con reglas y otros elementos para una mejor precisión del corte.

    .row.justify-content-center.align-items-center
      .col-sm-12.col-md-7.col-lg-7
        p #[b Tips de corte ]
        ul.lista-ul--color.fa-ul.color-primario
          li.mb-2 
            i.fas.fa-plus
            span.mb-0 Con una mano sostenga la tela y con la otra realice el corte.
          li.mb-2
            i.fas.fa-plus
            span.mb-0 Realice cortadas amplias.
          li.mb-2
            i.fas.fa-plus
            span.mb-0 El tendido no se mueve, lo que se mueve son las tijeras, la mano y el operario a medida que se va cortando.
          li
            i.fas.fa-plus
            span.mb-0 En cada piquete, hacer un pequeño corte de máximo 3 mm de profundidad.
      .col-7.col-md-5.col-lg-3
        img(src="@/assets/curso/temas/tema2/imagen44.svg")


    Separador    
    #t_2_6.titulo-segundo.color-acento-contenido
      h2 2.6  Características del material
    
    .subt2.mb-4
      ul.lista-ul.mb-0
        li.mb-0
          i.fas.fa-circle
          span.mb-0.h4 Tipos de trazo
    
    .row.justify-content-center.mb-5
      .col-lg-10
        img(src='@/assets/curso/temas/tema2/tipos-trazo2.png', alt='')
        

    h4 #[b ¿Para qué? ]
    p.mb-4 El reconocimiento de las características del material textil a trabajar es sumamente importante para asegurar una calidad óptima en la prenda al cortar y ensamblar. Antes de cada proceso de tendido, marcación y corte se deben verificar dichas características.
    
    .row.justify-content-center.mb-5
      .col-lg-9
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 166.
          span Identificación y verificación del sentido del pelo en materiales textiles durante el proceso de corte
        figure
          img(src="@/assets/curso/temas/tema2/imagen45.png" alt="Ilustración que muestra la dirección del pelo de una tela y su comprobación mediante el deslizamiento de la mano sobre la superficie del material.")

    .subt2.mb-4
      ul.lista-ul.mb-0
        li.mb-0
          i.fas.fa-circle
          span.mb-0.h4 ¿Qué es la textura #[em nap] (#[em velvet], pelusa, #[em fleece])?

    .row.justify-content-center.mb-4
      .col-lg-9
        p Nap es la textura de los textiles que van en una dirección particular. Esta propiedad de la prenda es fundamental para garantizar la calidad de la misma. En algunos textiles se logra evidenciar el nap a simple vista como #[em velvet, fleece,] piel sintética, denim cepillado, franela, gamuza sintética, sarga, elástica, tela de felpa, etc.
        .tarjeta.bg1.p-4
          .row.justify-content-around.align-items-center
            .col-4.col-md-2.col-lg-2.mb-3.mb-md-0
              img.px-lg-3(src="@/assets/curso/temas/tema2/admiracion2.png")
            .col-sm-12.col-md-10.col-lg-10
              h5 #[b ¿Por qué es importante el #[em nap]? ]
              p.mb-0 El #[em nap] es muy importante para determinar cómo se establece el patrón en el textil, en este caso se trabaja siempre un trazo direccional. Se debe tener en cuenta lo siguiente:
      .col-lg-3.d-none.d-lg-block
        img(src="@/assets/curso/temas/tema2/imagen46.png")

    .row.justify-content-center.mb-5
      .col-sm-12.col-md-10.col-lg-5.mb-3
        .estilo1.p-4.h-100
          .row.justify-content-center
            .col-4.col-md-3.col-lg-3.mb-3.mb-md-0
              img(src='@/assets/curso/temas/tema2/uno.svg' alt='')
            .col-sm-12.col-md-9.col-lg-9
              h5 Acabados de la prenda 
              p.mb-0 Si no se tiene en cuenta el  #[em nap ] al momento de cortar la prenda, la prenda terminaría con brillos diferentes en cada pieza, necesitan un color y una textura uniforme en toda la pieza.
      .col-sm-12.col-md-10.col-lg-5.mb-3
        .estilo1.p-4.h-100
          .row.justify-content-center
            .col-4.col-md-3.col-lg-3.mb-3.mb-md-0
              img(src='@/assets/curso/temas/tema2/dos.svg' alt='')
            .col-sm-12.col-md-9.col-lg-9
              h5 Determinar el consumo del textil 
              p.mb-0 Se debe determinar el consumo de material que requiere la prenda para garantizar que todo el textil sea suficiente para el corte, lo cual es una clara desventaja, ya que se desperdicia mucha tela al seguir un trazo direccional.

    .subt.mb-5(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/subt.svg', alt='')
        h3.mb-0.ms-2 ¿Cómo identificar el #[em nap]?

    .row.justify-content-center.mb-4
      .col-sm-12.col-md-12.col-lg-5
        p Al pasar las manos suavemente por el textil para sentir el  #[em nap]/pelusa
        ul.lista-ul--color.fa-ul
          li 
            i.fas.fa-plus
            span.mb-0 La sensación más suave es la dirección con  #[em nap]/pelusa.
          li
            i.fas.fa-plus
            span.mb-0 La sensación más áspera es la dirección contraria al  #[em nap]/pelusa.
          li
            i.fas.fa-plus
            span.mb-0 El brillo de la tela es diferente cuando se ve desde diferentes direcciones.
      .col-lg-7
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 167.
          span Identificación y orientación correcta del nap o pelusa en las piezas de una prenda
        figure
          img(src="@/assets/curso/temas/tema2/imagen48.png" alt="Ilustración que muestra cómo identificar la dirección del nap o pelusa de una tela y la orientación correcta e incorrecta de las piezas durante el corte.")

    .row.justify-content-center.align-items-end.mb-5
      .col-sm-12.col-md-12.col-lg-3.mb-4.mb-md-0
        .subt2.mb-4
          ul.lista-ul.mb-0
            li.mb-0
              i.fas.fa-circle
              span.mb-0.h4 Trazo o marcado
        p.mb-0 Se recomienda que cuando se utilice este tipo de textiles con #[em nap], el proceso de transferir los moldes al textil se trabaje preferiblemente en un tendido abierto, sujetado con alfileres. Para marcar pinzas o elementos clave se recomienda los hilvanes o  #[em tailor tacks].
      .col-md-7.col-lg-7
        img(src="@/assets/curso/temas/tema2/imagen49.png" alt="")

    .row.justify-content-center.mb-5
      .col-sm-12.col-md-7.col-lg-7
        .subt2.mb-4
          ul.lista-ul.mb-0
            li.mb-0
              i.fas.fa-circle
              span.mb-0.h4  Piel sintética
        p La piel sintética también cuenta con  #[em nap]/siesta que es mucho más sencilla para identificar la dirección del vello. En este caso se debe trabajar:
        ul.lista-ul--color.fa-ul.color-primario
          li.mb-1 
            i.fas.fa-plus
            span.mb-0 Trazo direccional.
          li.mb-1
            i.fas.fa-plus
            span.mb-0 Tendido abierto.
          li
            i.fas.fa-plus
            span.mb-0 Marcación por el revés con tiza.
        p Algunas tienen el vello más largo que otras, por eso es importante realizar un trazo, marcado y corte de forma adecuada.
      .col-7.col-md-5.col-lg-3
        img(src="@/assets/curso/temas/tema2/imagen50.png")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .row.estilo2
          .col-lg-6.bg6
            .p-4
              p #[b Tips de corte, piel sintética ]
              p.mb-0 Cortar en el sentido del  #[em nap]/vello. Realice cortadas pequeñas, preferible con la punta de la tijeras. Una vez cortado se sugiere eliminar el exceso de vello/pelo por el margen de costura, teniendo en cuenta la dirección del pelo se recomienda confeccionarlo en esa misma dirección.
          .col-lg-6
            .row.align-items-center
              .titulo-sexto.color-acento-botones.mb-3
                h5 Figura 168.
                span Recomendaciones para el corte y manejo del nap o vello en piel sintética
              figure
                img(src="@/assets/curso/temas/tema2/imagen51.svg" alt="Ilustración con recomendaciones para cortar piel sintética siguiendo la dirección del vello y retirar el exceso de pelo en los márgenes de costura.")

    .row.justify-content-end.mb-5
      .col-lg-5
        .subt2.mb-4
          ul.lista-ul.mb-0
            li.mb-0
              i.fas.fa-circle
              span.mb-0.h4 Textiles estampados
        p Los textiles estampados también se deben trabajar con un trazo direccional, ya que de esto depende la dirección del estampado que se desee en la prenda terminada. Esto significa que todas las piezas deben cortarse en la misma dirección para que el estampado quede acorde al diseño.
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-0
          h5 Figura 169.
          span Orientación y corte de piezas en textiles estampados según la dirección del diseño
        figure
          img(src="@/assets/curso/temas/tema2/imagen52.png" alt="Ilustración que muestra la colocación y corte de moldes sobre tela estampada, manteniendo todas las piezas en la misma dirección del diseño para conservar la orientación del estampado en la prenda terminada.")

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-3.d-none.d-lg-block
        img(src="@/assets/curso/temas/tema2/imagen53.png")
      .col-lg-7
        .subt2.mb-4
          ul.lista-ul.mb-0
            li.mb-0
              i.fas.fa-circle
              span.mb-0.h4 Textiles de cuadros
        p La continuidad de las líneas y el dibujo/cuadros en las prendas producen un efecto agradable a la vista.
        .cajon.color-acento-contenido.p-4 
          p.mb-0 #[b  Hacer coincidir cada una de las líneas, cuadros o elementos del dibujo del textil requiere precisión; sin embargo, esto se utiliza en prendas de muy altos estándares de calidad, ya que el corte se debe hacer preferiblemente individual.  ]

    .row.justify-content-center.mb-5
      .col-sm-12.col-md-5.col-lg-5
        h4 Tendido y corte
        p Para los textiles de cuadros se recomienda trabajarlos de la siguiente manera:
        ul.lista-ul--color.fa-ul.color-primario
          li 
            i.fas.fa-plus
            span.mb-0 Trabajar despiece sin costura.
          li
            i.fas.fa-plus
            span.mb-0 Trazo direccional.
          li
            i.fas.fa-plus
            span.mb-0 Tendido abierto cara arriba.
          li
            i.fas.fa-plus
            span.mb-0 Marcación por el revés con tiza.
          li
            i.fas.fa-plus
            span.mb-0 Fijar los patrones con alfileres.
      .col-sm-12.col-md-7.col-lg-5
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 170.
          span Recomendaciones para el tendido y corte de textiles a cuadros: alineación y concordancia del diseño
        figure
          img(src="@/assets/curso/temas/tema2/imagen54.png" alt="Chaqueta de cuadros con indicaciones de puntos de concordancia del diseño y lista de recomendaciones para el tendido y corte, incluyendo trazo direccional, tendido abierto y fijación de patrones.")


    .subt2.mb-4
      ul.lista-ul.mb-0
        li.mb-0
          i.fas.fa-circle
          span.mb-0.h4 Tips de corte para cuadros 

    .mb-5
      img(src='@/assets/curso/temas/tema2/tips-corte.png', alt='')
    
    h4 Ejemplo de tipos de tendido con diferentes características del material
    p En el desarrollo de los contenidos se han identificado términos técnicos de la industria, los cuales se irán apropiando con mayor rigor en la práctica; la inmersión en la industria y el mercado permitirá afianzar cada vez más los conocimientos teóricos; sin embargo, con el fin de sintetizar de una manera más gráfica se hará la contextualización aplicada en diferentes tipos de materiales con una serie de moldes a escala que permitirán poner en práctica los conceptos explicados.
    
    p Para una mejor comprensión del tema revisar el siguiente video de “ejemplo sobre tipos de tendido con diferentes características del material”.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/-nkWodY_bPE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Ejemplo de tipos de tendido con diferentes características del material


    Separador    
    #t_2_7.titulo-segundo.color-acento-contenido
      h2 2.7  Terminología industrial de trazo y corte
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-sm-12.col-md-7.col-lg-7
        h4 Tiqueteado
        p Consiste en rotular cada una de las piezas cortadas, identificando el lote, nombre de la pieza, talla y un consecutivo para contribuir en el orden del sistema operacional.
        .cajon.color-primario.p-4
          p.mb-0 #[b  Se usa tiqueteadora con su papel adhesivo; es importante definir la ubicación en la pieza, se trabaja por el revés de la tela.  ]
      .col-7.col-md-5.col-lg-3
        img(src="@/assets/curso/temas/tema2/imagen55.png")
                    
    h3.mb-4 Operaciones auxiliares de corte
    p Interviene personal auxiliar para apoyar el proceso. 

    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--purple" data-aos="fade")
      .row(titulo="Fusionado")
        .col-11.mb-4.mb-md-0
          p Una vez se corta la tela y la entretela, para entretelar se utiliza una máquina fusionadora, que a través de presión y calor adhiere la entretela a la tela. Es importante el control de temperatura según el textil, ya que puede generar encogimiento.
      .row(titulo="Paqueteo")
        .col-11.mb-4.mb-md-0
          p Consiste en separar por bloques las piezas cortadas, paqueteando la cantidad definida de todas las piezas que conforman la prenda, amarrando y conformando paquetes de 10 a 20 unidades; para así facilitar el control de producción y de calidad. Una vez se paquetee es importante el almacenamiento, utilizando la técnica de Kanban para entregarlas a ensamble.
      .row(titulo="Tecnología en corte")
        .col-11.mb-4.mb-md-0
          p La tecnología en el área de corte inicia con el trazo asistido por computador a través de programas especializados, los cuales ahorran tiempo y espacio. Para el transporte de telas y paquetes cortados se usan bandas o carros, que son utilizados también para entregar los paquetes al área de ensamble.
      .row(titulo="<em>Software</em> de corte")
        .col-11.mb-4.mb-md-0
          p Los programas empleados en la industria textil como Audaces, Gerber, Optitex o Lectra cuentan con módulos especializados en trazo, que facilitan el corte de las prendas, siendo más precisos, optimizando los tiempos y disminuyendo el desperdicio de materia prima. Además del computador y del programa se requiere el plotter para poder imprimir los trazos. En el caso de que el corte sea automático, el cabezal irá cortando sobre la tela sin previa impresión del trazo.


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
