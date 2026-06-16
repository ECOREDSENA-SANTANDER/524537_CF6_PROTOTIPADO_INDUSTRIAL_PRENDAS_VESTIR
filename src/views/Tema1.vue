<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Trazado de patrones (#[em software] de patronaje)
      
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-sm-12.col-md-7.col-lg-7.mb-3.mb-md-0
        p Para el manejo e implementación del #[em software] de patronaje es necesario tener como referente el desarrollo y elaboración de básicos, de acuerdo con la metodología del manual de patronaje SENA y demás teorías estudiadas hasta el momento.
        .cajon.color-acento-contenido.p-4
          p.mb-0 #[b  Para el trazo de patrones se referenciará únicamente la línea femenina; sin embargo, cabe resaltar que las herramientas del programa y manejo de interfaz aplican para cualquier línea; tenga en cuenta que el desarrollo del trabajo manual es la base para la apropiación de un proceso digital.]
      .col-7.col-md-5.col-lg-3
        img(src="@/assets/curso/introduccion/imagen2.png", alt="")


    Separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1  Personalizar área de trabajo - Optitex

    .subt.mb-5(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/subt.svg', alt='')
        h3.mb-0.ms-2 Reconocimiento interfaz de Optitex
    
    .row.justify-content-center.mb-5(data-aos="fade")
      .col-sm-12.col-md-5.col-lg-3
        ol.lista-ol--cuadro.lista-ol--separador.fa-ol
          li 
            .lista-ol--cuadro__vineta
              span.fw-bold A
            span Barra de #[b título.]
          li 
            .lista-ol--cuadro__vineta
              span.fw-bold B
            span Barra de #[b menú.]
          li 
            .lista-ol--cuadro__vineta
              span.fw-bold C
            span Barra de #[b herramientas.]
          li 
            .lista-ol--cuadro__vineta
              span.fw-bold D
            span Ventana de #[b piezas.]
          li 
            .lista-ol--cuadro__vineta
              span.fw-bold E
            span Ventana de #[b herramientas.]
          li 
            .lista-ol--cuadro__vineta
              span.fw-bold F
            span Área de #[b trabajo.]
      .col-12.col-md-7.col-lg-7
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 1.
          span Interfaz del software de patronaje digital Optitex
        img(src="@/assets/curso/temas/tema1/imagen1.png", alt="La imagen hace una descripción del paso a paso de la herramienta  para poder hacer los trazos de cada prenda, allí se enumeran las barras y ventanas que se necesitan en cada fase. La imagen expone la interfaz de un programa de diseño de patrones, probablemente para confección. En la parte superior, se encuentra la barra de menú y debajo de ella la barra de herramientas con varios íconos. A la derecha, están los controles de ventana para minimizar, maximizar y cerrar. Debajo de la barra de herramientas, hay una ventana de piezas que expone en miniatura. En el lado izquierdo, se encuentra el panel de propiedades con varias pestañas relacionadas con las herramientas y opciones del diseño. En el centro, está el área de trabajo que detalla una pieza del patrón con diversas líneas y marcas. Las flechas moradas señalan estas secciones específicas de la interfaz.")


    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/subt.svg', alt='')
        h3.mb-0.ms-2 Despejar el área de trabajo y activar herramientas

    .tarjeta.bgi-1.p-4.mb-5(data-aos="fade")
      SlyderA(tipo="b")
        .row.justify-content-center.my-lg-4
          .col-lg-5.col-md-6.mb-4.mb-md-0          
            ol.lista-ol.fa-ul
              li 
                span.text-bold A)
                span.mb-0 En la barra de menú #[b vista] seleccione la opción #[b caja de herramientas] y active la ventana de #[b herramientas], ubicada al lado izquierdo de la pantalla.
              li 
                span.text-bold B) 
                span.mb-0 Otra manera de visualizar las herramientas es #[b situar el cursor debajo de la barra de menú], y con clic derecho observar las que están disponibles.
              li 
                span.text-bold C) 
                span.mb-0 De igual manera, se pueden activar las herramientas que se necesitan y dejar inactivas las que no se estén utilizando en el momento.
          .col-lg-6.col-md-6
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 2.
              span Uso de herramientas de edición y selección en Optitex
            img(src="@/assets/curso/temas/tema1/tarjeta1/imagen1.svg", alt='La imagen presenta dos capturas de pantalla de la interfaz de un programa de diseño de patrones. En la parte superior, se detalla un menú desplegable seleccionado desde la barra de menú, mostrando opciones de configuración. En la parte inferior, se expone un submenú desplegado que ofrece varias opciones adicionales, posiblemente relacionadas con herramientas específicas del diseño. Ambos menús están resaltados con un óvalo negro.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b Ubique el cursor en cada herramienta, con un clic se desactivan. ]
            p Como se puede observar en la gráfica, las herramientas no están disponibles; de esta manera se puede despejar el área de trabajo y activarlas nuevamente cuando sea necesario.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 3.
              span Menú de herramientas de visualización en Optitex
            img(src="@/assets/curso/temas/tema1/tarjeta1/imagen2.svg", alt='La imagen describe la interfaz de un programa de diseño de patrones con un menú desplegable abierto. El menú está resaltado con un óvalo negro y ofrece varias opciones como “General”, “Modelo”, “Almacenamiento”, “Bibliotecas”, “Reglas de piezas”, “Vista 3D”, y “Simulación 3D”, entre otras. A la izquierda, se encuentra el panel de herramientas con categorías como “Herramientas de Piezas”, “Herramientas Generales”, “Puntos y Piquetes”, y “Capturar Puntos y Piquetes”. El área central ilustra una regla horizontal en la parte superior del área de trabajo.')


    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/subt.svg', alt='')
        h3.mb-0.ms-2 Configurar área de trabajo

    .tarjeta.bgi-2.p-4.p-lg-5.mb-5(data-aos="fade")
      .tarjeta.bg-white.p-4
        PasosB.color-primario
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p En la barra de menú de herramientas, seleccione la opción #[b preferencias], aparece la siguiente ventana.
            .col-lg-6.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 4.
                span Acceso a herramientas de edición y comandos rápidos en Optitex
              img(src="@/assets/curso/temas/tema1/tarjeta2/imagen1.png", alt='La imagen detalla una captura de pantalla de un programa de diseño de patrones con el menú “Herramientas” desplegado. En el menú, se destacan las opciones “Costura”, “Escalado”, “Aflojar”, “Pliegues”, “Editar Segmento”, “Líneas guías”, “Configuración temas…”, “Personalizar…”, “Resetear layout área trabajo…”, y “Preferencias…”. La opción “Herramientas” y “Preferencias…” están resaltadas con círculos naranjas. A la izquierda, se ve el panel de “Propiedades” con detalles de una pieza, como el nombre, cantidad y código.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p En esa ventana se puede configurar:
              ol.lista-ol--cuadro.mb-0.fa-ol
                li 
                  .lista-ol--cuadro__vineta
                    span A
                  span.mb-0 Colores.
                li 
                  .lista-ol--cuadro__vineta
                    span B
                  span.mb-0 Activar o desactivar relleno de la pieza.
                li 
                  .lista-ol--cuadro__vineta
                    span C
                  span.mb-0 Activar ventanas de diálogo de las herramientas.
                li 
                  .lista-ol--cuadro__vineta
                    span D
                  span.mb-0 Unidades de trabajo (unidades de medida).
                li 
                  .lista-ol--cuadro__vineta
                    span E
                  span.mb-0 Atributos de herramientas.
            .col-lg-6.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 5.
                span Ventana de preferencias y configuración de colores en Optitex
              img(src="@/assets/curso/temas/tema1/tarjeta2/imagen2.png", alt='La imagen expone la ventana de “Preferencias” de un programa de diseño de patrones. A la izquierda, se encuentran varias categorías como “Principal”, “Interno y Texto”, “Piquete”, “Plot y corta”, “Guardar”, “Fuente”, “Colores” y “Configuración”, con subcategorías como “General”, “Pieza”, “Comando”, “Material”, “Puntada” y “Calidad”. En el panel derecho, bajo “Área de trabajo”, se pueden configurar opciones como el fondo, el color de línea guía, la rejilla, las rayas y el color de las reglas. Bajo “Pieza”, se pueden ajustar el color de relleno, el color de la pieza seleccionada, el color para contorno seleccionado, y varios otros colores específicos relacionados con el diseño de las piezas. La sección “Preferencias” está resaltada con un círculo amarillo.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p Al estar en la opción #[b preferencias], diríjase a la carpeta #[b principal] y seleccione #[b unidad]. 
              p.mb-0 Esta ventana permite seleccionar la unidad de medida con la que desea trabajar.
            .col-lg-6.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 6.
                span Configuración de unidades de medida en preferencias de Optitex
              img(src="@/assets/curso/temas/tema1/tarjeta2/imagen3.png", alt='La imagen describe la ventana de “Preferencias” del programa de diseño de patrones, específicamente en la sección “Principal” bajo “Unidades de trabajo”. A la izquierda, se ven varias categorías de configuración, incluyendo “Pieza”, “Interno y Texto”, “Piquete”, “Plot y corta”, “Guardar”, “Fuente”, “Colores”, “Configurar importación” y “Configurar exportación”. A la derecha, en el panel principal, se puede seleccionar la unidad de medida entre opciones como milímetros, centímetros, metros, pulgadas, pies y yardas. Ambas secciones están resaltadas con óvalos negros.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p.mb-0 Seleccione la carpeta, #[b colores], opción #[b configuración].
              p #[b Activar o desactivar] el relleno de las piezas: 
              ol.lista-ol--cuadro.fa-ol
                li 
                  .lista-ol--cuadro__vineta
                    span A
                  span.mb-0 Todas las piezas del archivo.
                li 
                  .lista-ol--cuadro__vineta
                    span B
                  span.mb-0 Ninguna pieza.
                li 
                  .lista-ol--cuadro__vineta
                    span C
                  span.mb-0 Solo la pieza seleccionada. También se puede seleccionar el método de relleno, que puede ser: por material, pieza y calidad.
            .col-lg-6.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 7.
                span Configuración de unidades de medida en preferencias de Optitex
              img(src="@/assets/curso/temas/tema1/tarjeta2/imagen4.png", alt='La imagen expone la configuración de “Rellena pieza” en las “Preferencias” del programa de diseño de patrones. En la sección “Colores”, se puede activar o desactivar el relleno de piezas, aplicándolo a todas las piezas, ninguna, la pieza seleccionada o el set del modelo activo. También se puede elegir el método de relleno por material, pieza o calidad.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p Ahora, seleccione la carpeta #[b colores], opción #[b general]. Ahí se puede modificar el #[b área de trabajo]:
              ol.lista-ol--cuadro.fa-ol
                li 
                  .lista-ol--cuadro__vineta
                    span A
                  span.mb-0 Color del fondo.
                li 
                  .lista-ol--cuadro__vineta
                    span B
                  span.mb-0 Líneas guías.
                li 
                  .lista-ol--cuadro__vineta
                    span C
                  span.mb-0 Color de las reglas.
              p En la pieza:
              ol.lista-ol--cuadro.fa-ol
                li 
                  .lista-ol--cuadro__vineta
                    span A
                  span.mb-0 Color del relleno de las piezas.
                li 
                  .lista-ol--cuadro__vineta
                    span B
                  span.mb-0 Color de la pieza seleccionada.
                li 
                  .lista-ol--cuadro__vineta
                    span C
                  span.mb-0 Color del contorno seleccionado.
            .col-lg-6.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 8.
                span Configuración de colores y apariencia del área de trabajo en Optitex
              img(src="@/assets/curso/temas/tema1/tarjeta2/imagen5.png", alt='La imagen expone la ventana de “Preferencias” del programa de diseño de patrones, enfocada en la configuración de colores. En la categoría “Configuración” bajo “General”, se puede ajustar el color de diferentes elementos del área de trabajo y las piezas. Un menú desplegable permite seleccionar colores para el fondo, líneas guía, rejilla, rayas, y reglas del área de trabajo, así como colores específicos para el relleno de piezas, bordes y otros detalles. La sección “General” está resaltada con un círculo amarillo. ')
    

    .subt.mb-5(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/subt.svg', alt='')
        h3.mb-0.ms-2 ¿Qué habilitar en la barra de menú vista?

    AcordionA(tipo="b" clase-tarjeta="tarjeta" data-aos="fade")
      .row(titulo="Opción ventana de piezas")
        .col-lg-4.col-md-4.mb-4.mb-md-0
          p En la barra de #[b menú vista] seleccione la opción #[b ventana de piezas]. En esta ventana se detallan las piezas que se han creado en el archivo.
        .col-lg-7.col-md-8
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 9.
            span Activación de la ventana de piezas desde el menú vista
          img(src="@/assets/curso/temas/tema1/tarjeta3/imagen4.png", alt='La imagen describe la interfaz del programa de diseño de patrones OptiTex PDS 10 Demo, específicamente en el menú “Vista”. Se despliega el menú “Ventana Pieza”, resaltado con un óvalo negro, que permite abrir y configurar diversas ventanas y herramientas del programa, como la ventana de pieza, caja de herramientas, info del set modelo, comparar largo, tabla piezas, vista selección, y ventana 3D. En la parte izquierda, se presenta el panel de “Propiedades” con detalles de una pieza seleccionada.')
      .row(titulo="Opción caja de herramientas")
        .col-lg-4.col-md-4.mb-4.mb-md-0
          p En la barra de #[b menú vista] habilite la opción #[b caja de herramientas].
          p En esta ventana se encuentran todas las herramientas que están diseñadas para el proceso de actualización y transformación de las piezas que se encuentran en el área de trabajo. Las herramientas se encuentran divididas en grupos de acuerdo con su funcionalidad.
        .col-lg-7.col-md-8
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 10.
            span Visualización de la caja de herramientas desde el menú vista
          img(src="@/assets/curso/temas/tema1/tarjeta3/imagen1.png", alt='La imagen presenta la interfaz del programa de diseño de patrones OptiTex PDS 10 Demo, con el menú “Vista” desplegado y la opción “Caja Herramientas” resaltada con un óvalo negro. A la izquierda, se identifica la “Caja herramientas” con diversas opciones y herramientas de diseño. En el área central, hay un patrón de pieza de color amarillo, mostrando su diseño.')
      .row(titulo="Opción vista y selección")
        .col-lg-4.col-md-4.mb-4.mb-md-0
          p En la barra de #[b menú vista] habilite la opción #[b vista y selección.]
          p En esta ventana se habilita la información de la pieza, puntos o elementos internos que se quieran mostrar u ocultar en las piezas del archivo.
        .col-lg-7.col-md-8
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 11.
            span Acceso a la vista de selección de atributos desde el menú vista
          img(src="@/assets/curso/temas/tema1/tarjeta3/imagen2.png", alt='La imagen describe la interfaz del programa de diseño de patrones OptiTex PDS 10 Demo, con el menú “Vista” desplegado y la opción “Vista Selección” resaltada con un óvalo negro. A la izquierda, se ve el panel “Vista & Selección Atributos” que permite ajustar diversas propiedades y atributos de las piezas, como líneas guía, segmentos y tipos de puntada. En el área central, hay un patrón de pieza de color amarillo, mostrando su diseño y dimensiones.')
      .row(titulo="Más opciones para habilitar")
        .col-lg-4.col-md-4.mb-4.mb-md-0
          p En la barra del menú vista también se puede habilitar:
          ol.lista-ol--cuadro.fa-ol
            li 
              .lista-ol--cuadro__vineta
                span A
              span.mb-0 Tabla de escalado
            li 
              .lista-ol--cuadro__vineta
                span B
              span.mb-0 Tabla de piezas
            li 
              .lista-ol--cuadro__vineta
                span C
              span.mb-0 Ventana de 3D
            li 
              .lista-ol--cuadro__vineta
                span D
              span.mb-0 Reglas
            li 
              .lista-ol--cuadro__vineta
                span E
              span.mb-0 Otras ventanas (calculadora)
            li 
              .lista-ol--cuadro__vineta
                span F
              span.mb-0 Habilitar colores por comandos
            li 
              .lista-ol--cuadro__vineta
                span G
              span.mb-0 Mostrar líneas guías
        .col-lg-7.col-md-8
          img(src="@/assets/curso/temas/tema1/tarjeta3/imagen3.png", alt='')

    
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2  Trazo de la falda - Optitex

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/subt.svg', alt='')
        h3.mb-0.ms-2 ¿Cómo trazar la base de falda femenina?

    .tarjeta.bgi-2.p-4.p-lg-5.mb-5(data-aos="fade")
      .tarjeta.bg-white.p-4
        PasosB.color-primario
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p 1. Base de falda femenina talla 10. Para dar inicio haga clic derecho en el área de trabajo, dibuje un rectángulo, nombre la pieza como falda delantera:
              ul.lista-ul--color.fa-ul.color-primario
                li 
                  i.fas.fa-plus
                  span.mb-0 #[b Ancho:] ¼ de contorno de cadera.
                li
                  i.fas.fa-plus
                  span.mb-0 #[b Largo:] largo según talla (talla 10 = 60 cm).
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 12.
                span Generación de la base de falda femenina mediante la herramienta crear rectángulo
              img(src="@/assets/curso/temas/tema1/tarjeta4/imagen1.png", alt='La imagen presenta la ventana de creación de un rectángulo en un programa de diseño de patrones. A la izquierda, se ve un cuadro de diálogo titulado “Crear Rectángulo” donde se especifica el nombre de la pieza (“FALDA DEL”), su ancho (24) y su largo (60). A la derecha, se visualiza el rectángulo creado con las dimensiones especificadas, etiquetado como “FALDA DEL” en color azul claro.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p 2. Tome herramienta punto para asignar sobre el rectángulo los puntos necesarios para darle forma a la falda. Sobre la línea vertical derecha marcar:
              ul.lista-ul--color.fa-ul.color-primario
                li 
                  i.fas.fa-plus
                  span.mb-0 #[b Altura de cadera:] según talla (talla 10 = 18 cm).
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 13.
                span Configuración de atributos de punto escalado en el software de patronaje
              img(src="@/assets/curso/temas/tema1/tarjeta4/imagen2.png", alt='La imagen expone la ventana de creación de un rectángulo en un programa de diseño de patrones. A la izquierda, se ve un cuadro de diálogo titulado “Crear Rectángulo” donde se especifica el nombre de la pieza (“FALDA DELANTERO”), su ancho (24) y su largo (60). A la derecha, se visualiza el rectángulo creado con las dimensiones especificadas, etiquetado como “FALDA DELANTERO” en color azul claro.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p 3. Sobre la línea de cintura, marque:
              ul.lista-ul--color.fa-ul.color-primario
                li 
                  i.fas.fa-plus
                  span.mb-0 #[b Cintura:] ¼ de contorno de cintura + pinza.
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 14.
                span Ubicación de punto escalado lateral mediante atributos de punto en el patrón de falda base
              img(src="@/assets/curso/temas/tema1/tarjeta4/imagen3.svg", alt='La imagen expone una interfaz de software con una ventana emergente titulada “Atributos de Punto”. En esta ventana se pueden definir varios parámetros de un punto, como su tipo, nombre, posición (X, Y), distancia, ángulo y opciones de movimiento sobre el contorno. También se presentan valores absolutos y proporcionales para la ubicación del punto.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p 4. Clic derecho, herramienta selección; señale punto ángulo superior derecho de rectángulo y cambie atributos, asigne atributo de curva.
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 15.
                span Activación del atributo de curva mediante las herramientas de selección y propiedades del punto
              img(src="@/assets/curso/temas/tema1/tarjeta4/imagen4.svg", alt='La imagen describe una captura de pantalla de una interfaz de software de diseño. A la izquierda, se expone un objeto azul etiquetado como “FALDA DELANTERA Base”. En el centro, aparece un menú desplegable titulado “Seleccionar Herramienta” con varias opciones. A la derecha, se encuentra un panel de propiedades con opciones para un punto seleccionado, y al lado, una ventana.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p 5. Tome herramienta mover punto (tecla rápida M), modele curva de cadera.
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 16.
                span Modelado de la curva de cadera mediante la ventana mover punto
              img(src="@/assets/curso/temas/tema1/tarjeta4/imagen5.svg", alt='La imagen presenta una ventana de software de diseño con un cuadro de diálogo titulado “Mover Punto.” En este cuadro se presentan opciones para mover un punto en un gráfico mediante coordenadas y ángulos específicos. Los campos de entrada muestran valores numéricos: -1.97, 7.92, -7.67 y -104.4. Hay opciones para aceptar o cancelar la acción. A la derecha, se detalla una parte de un gráfico con una forma azul claro y una curva verde conectada a puntos de control en rosa, junto a una regla en la parte superior.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p 6. Tome herramienta mover punto, para modificar el punto de cintura costado, subir 1 cm por costado. Marque en el eje Y 1 cm positivo y en el eje X 0.
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 17.
                span Ajuste de la línea de cintura mediante la opción mover punto
              img(src="@/assets/curso/temas/tema1/tarjeta4/imagen6.svg", alt='La imagen describe una ventana de software de diseño, probablemente un programa de CAD o similar. En el cuadro de diálogo titulado “Mover Punto,” se presentan opciones para mover un punto en un gráfico. Se pueden ajustar las coordenadas y ángulos, y hay botones para aceptar o cancelar la acción. A la derecha del cuadro de diálogo, se expone una parte de un gráfico con una forma en azul claro y puntos de control en rosa.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p 7. Para marcar la curva de cintura traiga una línea guía, ubique un punto en cintura con atributo de curva. Tome la herramienta mover punto y modifique la línea de cintura sin sobrepasar la línea guía trazada.
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 18.
                span Configuración de punto de curva sobre el contorno del patrón
              img(src="@/assets/curso/temas/tema1/tarjeta4/imagen7.svg", alt='La imagen presenta una ventana de software de diseño con un cuadro de diálogo titulado “Atributos de Punto.” En este cuadro, se detallan varias opciones de configuración para un punto en un gráfico. Los tipos de punto incluyen “Curva” y “Escalado,” con casillas de verificación para cada uno. También hay opciones para mover el punto sobre el contorno, ajustar las coordenadas X e Y, la distancia y el ángulo. Los campos de entrada exponen valores para el punto previo y el punto siguiente, tanto en términos absolutos como proporcionales. En la parte inferior hay botones para “OK” y “Cancelar.” A la izquierda del cuadro de diálogo, se describe una parte del gráfico con una forma azul claro y puntos de control en rosa.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p 8. Para marcar la pinza, en el grupo de herramientas de insertar, tome la herramienta pinza - añadir y girar pinza.
            .col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 19.
                span Selección de la herramienta para añadir y girar pinzas en el patrón
              img(src="@/assets/curso/temas/tema1/tarjeta4/imagen8.svg", alt='La imagen expone un menú desplegable en un software de diseño, específicamente en la pestaña “Insertar.” Las opciones del menú incluyen “Añadir y girar pinza,” “Agregar Aflojo,” y “Crear pinza por puntos pivotes,” entre otras.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p 9. Para macar la pinza en relación con la separación de busto, tenga en cuenta la medida del primer lado de la pinza; marque en absoluto la medida del primer lado de pinza. Marque la medida de la amplitud de la pinza.
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 20.
                span Ubicación de los puntos de referencia para la pinza mediante la herramienta atributos de punto
              img(src="@/assets/curso/temas/tema1/tarjeta4/imagen9.svg", alt='La imagen presenta dos cuadros de diálogo de “Atributos de Punto” en un software de diseño. Cada cuadro permite configurar el tipo de punto (Curva o Escalado), las coordenadas X e Y, la distancia y el ángulo. También se pueden detallar los valores absolutos y proporcionales del punto previo y del punto siguiente. Los cuadros tienen botones para “OK” y “Cancelar.” En el fondo se presenta parte de un gráfico con una forma azul claro y puntos de control en rosa.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p 10. En la pestaña propiedades seleccione la opción profundidad, en este espacio asigne la medida de profundidad o largo de la pinza.
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 21.
                span Asignación de la profundidad de la pinza mediante el panel de propiedades
              img(src="@/assets/curso/temas/tema1/tarjeta4/imagen10.svg", alt='La imagen presenta una sección de un software de diseño con el panel de “Propiedades” abierto a la izquierda. En este panel, se preentan atributos como “Profundidad” (9.5 cm), “Ancho” (2 cm), “Sobrepuesta” (CCW), entre otros. A la derecha, hay un gráfico con una forma azul claro y un objeto seleccionado, indicado por un contorno punteado y una figura geométrica con líneas guía. ')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p 11. Para modificar los hilos de tela, en la caja de herramientas líneas de aplome escoja la herramienta hilo paralelo al tramo. Seleccione en sentido de las manecillas del reloj la línea de centro frente, para dejar el aplome paralelo al centro.
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 22.
                span Definición del hilo paralelo al tramo en el patrón de falda con pinza
              img(src="@/assets/curso/temas/tema1/tarjeta4/imagen11.svg", alt='La imagen presenta el panel “Caja herramientas” de un software de diseño de patrones a la izquierda, con varias opciones. A la derecha, hay dos piezas de patrón en azul claro etiquetadas como “FALDA DELANTERO Base” con puntos de control en rosa y líneas guía.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p 12. Seleccione herramienta centrar aplome, para centrar el aplome o hilo de tela en relación con la pieza.
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 23.
                span Seleccione herramienta centrar aplome
              img(src="@/assets/curso/temas/tema1/tarjeta4/imagen12.svg", alt='La imagen presenta un software de diseño de patrones con el panel “Caja herramientas” a la izquierda y una pieza de patrón en azul claro a la derecha, etiquetada como “FALDA DEL Base.” Las opciones del panel incluyen “Centrar Aplome (Ctrl+I)” y “Girar por línea de hilo (Shift+P).”')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p 13. Al finalizar la parte delantera, dé clic derecho sobre la pieza y seleccione limpiar piezas. Reemplace el original, de esta manera se actualiza la pieza en la ventana - ventana de piezas.
            .col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 24.
                span Selección de la opción reemplazar original para actualizar la pieza en la ventana de piezas
              img(src="@/assets/curso/temas/tema1/tarjeta4/imagen13.svg", alt='La imagen expone un menú contextual de un software de diseño de patrones junto a una pieza de patrón en azul claro etiquetada como “FALDA DELANTERO Base.” El menú incluye opciones como “Seleccionar Herramienta,” “Atributos,” “Borrar,” “Limpiar Piezas” con sub opciones “Reemplazar Original” y “Remover Actual,” entre otras.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p 14. Para crear la parte posterior, dé clic derecho sobre el área de trabajo, seleccione la opción nueva pieza, posteriormente la opción crear un rectángulo. También puede acceder por la barra de menú.
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 25.
                span Selección de la opción crear rectángulo para generar la pieza
              img(src="@/assets/curso/temas/tema1/tarjeta4/imagen14.svg", alt='La imagen presenta dos menús desplegables en un software de diseño de patrones. El menú de la izquierda tiene la opción “Nueva pieza” con sub opciones para crear diferentes formas: “Crear Rectángulo,” “Crear Polígono,” “Crear Círculo,” “Crear Sector,” y “Crear Espiral.” El menú de la derecha también expone opciones similares bajo la opción “Nueva pieza,” como “Crear Rectángulo,” “Crear Polígono,” “Crear Círculo,” “Crear Sector,” y “Crear Espiral.”')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p 15. En la ventana emergente asignar el nombre de la pieza como falda posterior.
              ul.lista-ul--color.fa-ul.color-primario
                li 
                  i.fas.fa-plus
                  span.mb-0 #[b Ancho:] ¼ de contorno de cadera.
                li 
                  i.fas.fa-plus
                  span.mb-0 #[b Largo:] largo según talla (talla 10 = 60 cm).
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 26.
                span Ventana emergente, crear rectángulo
              img(src="@/assets/curso/temas/tema1/tarjeta4/imagen15.svg", alt='La imagen presenta un cuadro de diálogo del software de diseño de patrones titulado “Crear Rectángulo.” En el cuadro, se ingresa el nombre de la pieza como “FALDA POSTERIOR,” y se especifican las dimensiones: ancho de 24 y largo de 60. A la derecha, se expone la representación gráfica de la pieza de patrón en azul claro, etiquetada como “FALDA POSTERIOR Base.” ')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p 16. Tomar herramienta punto sobre (tecla rápida O), para asignar sobre el rectángulo los puntos necesarios para darle forma a la falda.  Sobre la línea vertical derecha, marcar:
              ul.lista-ul--color.fa-ul.color-primario
                li 
                  i.fas.fa-plus
                  span.mb-0 #[b Altura de cadera:] según talla (talla 10 = 18 cm).
              p Sobre la línea de cintura, marcar:
              ul.lista-ul--color.fa-ul.color-primario
                li 
                  i.fas.fa-plus
                  span.mb-0 #[b Cintura:] ¼ de contorno de cintura + pinza.
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 27.
                span Ubicación de los puntos de referencia mediante la herramienta punto sobre para definir la altura de cadera y la línea de cintura
              img(src="@/assets/curso/temas/tema1/tarjeta4/imagen16.svg", alt='La imagen presenta dos cuadros de diálogo de “Atributos de Punto” en un software de diseño de patrones. Ambos cuadros permiten configurar el tipo de punto (Curva o Escalado), coordenadas X e Y, distancia y ángulo. También se detallan valores para el punto previo y el punto siguiente en términos absolutos y proporcionales. Los cuadros tienen botones para “OK” y “Cancelar.” En el fondo, se presenta parte de las piezas de patrón en azul claro etiquetadas como “FALDA POSTERIOR.”')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p 17. Haga clic derecho en la herramienta selección; señale el punto ángulo superior derecho del rectángulo y cambie los atributos, asigne atributo de curva.
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 28.
                span Asignación del atributo de curva mediante el panel de propiedades para modelar el costado de la pieza posterior
              img(src="@/assets/curso/temas/tema1/tarjeta4/imagen17.svg", alt='La imagen expone el panel “Propiedades” de un software de diseño de patrones a la izquierda, con opciones como “Escalado,” “Curva,” “Conectado,” “Nombre,” “Ángulo,” “Costura,” y “Punto alternativo de partida.” A la derecha, se presentan dos piezas de patrón: una en negro etiquetada como “FALDA DELANTERO” y otra en azul claro etiquetada como “FALDA POSTERIOR Base.” Ambas piezas tienen puntos de control en rosa y líneas de guía. ')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p 18. Tome herramienta mover punto (tecla rápida M); modele curva de cadera.
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 29.
                span Modelado de la curva de cadera mediante la herramienta mover punto en la pieza posterior
              img(src="@/assets/curso/temas/tema1/tarjeta4/imagen18.svg", alt='La imagen expone un cuadro de diálogo titulado “Mover Punto” en un software de diseño de patrones. El cuadro permite ajustar la posición de un punto utilizando coordenadas y ángulos específicos. Los campos de entrada detallan los valores: -1.64, 7.74, -7.56 y -102.2. Hay opciones para aceptar o cancelar la acción. A la derecha, se presenta parte de una pieza de patrón en azul claro con puntos de control en rosa y una curva verde.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p 19. Tome herramienta mover punto, para modificar el punto de cintura costado, subir 1 cm por costado. Marque en el eje de Y 1 cm positivo y en el eje X 0.
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 30.
                span Modificación de la línea de cintura mediante la herramienta mover punto en la pieza posterior
              img(src="@/assets/curso/temas/tema1/tarjeta4/imagen19.svg", alt='La imagen expone dos cuadros de diálogo titulados “Mover Punto” en un software de diseño de patrones. Ambos cuadros permiten ajustar la posición de un punto utilizando coordenadas y ángulos. Los valores en los campos de entrada del primer cuadro son: 0.13, 1.34, 1.33, y 95.5. En el segundo cuadro, los valores son: 0, 1, 1, y 90.0. Hay opciones para aceptar o cancelar la acción. ')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p 20. Baje el punto de cintura centro atrás 1 cm. Marque en el eje de Y -1 cm y en el eje X 0. Para marcar la curva de cintura, traiga una línea guía y ubique un punto en cintura con atributo de curva. Tome herramienta mover punto y modifique la línea de cintura sin sobrepasar la línea guía trazada.
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 31.
                span Ajuste de la curva de cintura mediante la herramienta mover punto y una línea guía de referencia
              img(src="@/assets/curso/temas/tema1/tarjeta4/imagen20.svg", alt='La imagen presenta un cuadro de diálogo titulado “Mover Punto” en un software de diseño de patrones. El cuadro permite ajustar la posición de un punto utilizando coordenadas y ángulos específicos. Los valores en los campos de entrada son: 0.03, 1, 1, y -88.5. Hay opciones para aceptar o cancelar la acción. A la derecha, se presenta una parte de una pieza de patrón en azul claro con puntos de control en rosa y una línea verde.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p 21. Para marcar la pinza, en el grupo de herramientas de insertar tome la herramienta pinza, opción añadir y girar pinza. Para marcar la pinza en relación con la separación de busto, se debe tener en cuenta la medida del primer lado de la pinza, marque en absoluto la medida del primer lado de la pinza; marque la medida de la amplitud de la pinza.
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 32.
                span Ubicación de la pinza mediante la herramienta añadir y girar pinza y la definición de sus puntos de referencia
              img(src="@/assets/curso/temas/tema1/tarjeta4/imagen21.svg", alt='La imagen presenta el menú desplegable “Añadir y girar pinza” en un software de diseño de patrones, con opciones como “Agregar Aflojo,” “Crear pinza por puntos pivotes,” y “Cortar pinza por arco.” A la derecha, se encuentra un cuadro de diálogo de “Atributos de Punto” con opciones para ajustar el tipo de punto (Curva o Escalado), las coordenadas X e Y, distancia y ángulo. Los valores presentados  en el cuadro son: Absoluto 2.75 y 1.95, Proporcional 0.833 y 0.167. ')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p 22. En la pestaña propiedades, opción profundidad, asigne la medida de profundidad o largo de la pinza.
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 33.
                span Asignación de la profundidad de la pinza mediante la pestaña propiedades
              img(src="@/assets/curso/temas/tema1/tarjeta4/imagen22.svg", alt='La imagen expone el panel “Propiedades” de un software de diseño de patrones a la izquierda, con atributos de la pieza seleccionada como “Profundidad” (11.1 cm), “Ancho” (3 cm), y “Sobrepuesta” (CCW). A la derecha, se presenta la pieza de patrón en azul claro etiquetada como “FALDA POSTERIOR” con una pinza o pliegue delineado y un símbolo de guía en el centro.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p 23. Para modificar los hilos de tela, en la caja de herramientas, opción movimiento, mover pieza interna. Tome el hilo de tela de la pieza delantera y arrastrarlo hacia la pieza posterior. 
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 34.
                span Modificación del hilo de tela mediante la opción mover pieza interna en la caja de herramientas
              img(src="@/assets/curso/temas/tema1/tarjeta4/imagen23.svg", alt='La imagen presenta el panel “Caja herramientas” de un software de diseño de patrones, destacando la opción “Mover” con sub opciones como “Mover punto (M)” y “Mover línea (B).” A la derecha, se exponen cuatro piezas de patrón en azul claro, etiquetadas como “FALDA POSTERIOR” con puntos de control en rosa y líneas de guía. Cada pieza detalla diferentes detalles de ajuste y configuración.')

    p Para una mejor comprensión, revisar el siguiente video de “trazo de falda básica”.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Bm8tEpqKDtI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Trazo de falda básica


    Separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Trazo de la base superior femenina - Optitex

    .subt.mb-5(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/subt.svg', alt='')
        h3.mb-0.ms-2 ¿Cómo trazar la base superior femenina?
    
    .subt2.mb-4
      ul.lista-ul.mb-0
        li.mb-0
          i.fas.fa-circle
          span.mb-0.h4 Parte posterior talla 10.

    AcordionA.mb-4(tipo="b" clase-tarjeta="tarjeta tarjeta--purple" data-aos="fade")
      .row(titulo="Paso 1")
        .col-lg-4.col-md-4.mb-4.mb-md-0
          p Inicie creando un archivo nuevo, sobre el archivo cree un rectángulo con las siguientes medidas:
          ul.lista-ul--color.fa-ul.color-primario
              li 
                i.fas.fa-plus
                span.mb-0 #[b Largo:] medida de talle posterior: 42,5 cm.
              li
                i.fas.fa-plus
                span.mb-0 #[b Ancho:] ¼ de busto, 23 cm.
        .col-lg-7.col-md-8
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 35.
            span Creación del archivo base para el trazado de la parte posterior de la blusa femenina mediante un rectángulo de referencia
          img(src="@/assets/curso/temas/tema1/tarjeta5/imagen1.svg", alt='La imagen detalla un patrón de costura con varias medidas y etiquetas. En el lado izquierdo, se presenta una línea vertical con una etiqueta en el centro. A la derecha, se expone un esquema con medidas específicas: “Medida de Hombro,” “Medida de Escote,” “Caída de Hombro,” y “Medida Centro Atrás.” También se indican instrucciones para ajustar el patrón, como “Mitad de la distancia A-D” y “Bajar Punto B 2 cms.” Las letras A, B, C, D, E, F, y H marcan puntos clave en el patrón.')
      .row(titulo="Paso 2")
        .col-lg-4.col-md-4.mb-4.mb-md-0
          p Haga doble clic sobre el #[b ángulo del escote ] y cambie el atributo del punto, #[b desmarcando escalado y señalando curva. ]
        .col-lg-7.col-md-8
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 36.
            span Modificación de atributos del punto en el escote mediante la ventana atributos de punto
          img(src="@/assets/curso/temas/tema1/tarjeta5/imagen2.svg", alt='La imagen presenta un cuadro de diálogo titulado “Atributos de Punto” en un software de diseño de patrones. Las opciones permiten seleccionar el tipo de punto, con casillas de verificación para “Escalado” y “Curva,” siendo “Curva” la opción seleccionada. Se puede ajustar el “Ángulo del punto” (con el valor 180) y el “Nombre del punto.” Hay botones para “Aplicar,” “Cancelar,” y “Costura.”')
      .row(titulo="Paso 3")
        .col-lg-4.col-md-4.mb-4.mb-md-0
          p Los ángulos del hombro y continuación de la sisa se suprimen. El patrón queda como lo señala la imagen.
        .col-lg-7.col-md-8
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 37.
            span Eliminación de los ángulos del hombro y ajuste de la línea de sisa en el patrón posterior
          img(src="@/assets/curso/temas/tema1/tarjeta5/imagen3.svg", alt='La imagen presenta tres piezas de patrón de costura alineadas horizontalmente. Cada pieza tiene una línea central vertical y varias líneas horizontales y curvas en la parte superior que indican diferentes medidas y ajustes. Las piezas parecen representar diferentes etapas de modificación de un mismo patrón.')
      .row(titulo="Paso 4")
        .col-lg-4.col-md-4.mb-4.mb-md-0
          p Con la herramienta #[b medir ] se señala el segmento del hombro en el sentido de las manecillas del reloj. Haga clic en el botón #[b editar largo del segmento]; este a su vez abre la ventana largo del segmento.
          p En la ventana editar largo del segmento, escribir 12 cm para el largo y escoja la opción #[b primer horizontal]. Esta opción se selecciona porque el punto correspondiente al ángulo del hombro sisa es el que debe moverse al realizar el cambio de medida, y elija primer horizontal porque es el punto inicial.
        .col-lg-7.col-md-8
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 38.
            span Modificación de la longitud del hombro mediante la herramienta medir y la ventana editar largo del segmento
          img(src="@/assets/curso/temas/tema1/tarjeta5/imagen4.svg", alt='La imagen detalla un patrón de costura a la izquierda con una línea central vertical y varias líneas de control en los bordes. A la derecha, hay dos cuadros de diálogo. El primero es la “Ventana de medidas,” que incluye opciones para editar la longitud del segmento, con el botón “Editar largo del segmento” resaltado. El segundo cuadro de diálogo, titulado “Largo del segmento,” permite ajustar la longitud de un segmento específico, con opciones para aceptar, cancelar y copiar/pegar. Elementos como “Nuevo,” “Punto vertical,” y “Uso horizontal” están resaltados. ')
      .row(titulo="Paso 5")
        .col-lg-4.col-md-4.mb-4.mb-md-0
          p Ubique el punto mitad de sisa (mitad de la distancia entre el escote y altura de sisa), y marque también sobre la línea donde formará la curva de sisa.
        .col-lg-7.col-md-8
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 39.
            span Ubicación del punto medio de la sisa para la construcción de la curva mediante puntos de referencia
          img(src="@/assets/curso/temas/tema1/tarjeta5/imagen5.svg", alt='La imagen presenta un patrón de costura con una línea central vertical. Una flecha horizontal señala dos puntos en el patrón, con el texto “Medimos la distancia entre estos puntos para deducir la medida de mitad de ancho espalda.” Esta instrucción indica cómo determinar la medida de la mitad del ancho de la espalda utilizando los puntos indicados.')
      .row(titulo="Paso 6")
        .col-lg-4.col-md-4.mb-4.mb-md-0
          p Mida  la distancia señalada en la gráfica y a esta, réstele el valor de la mitad del ancho de espalda para saber cuánto debe #[b mover el punto ] de la sisa, con el fin de darle la forma a la misma; con la herramienta mover punto, mueva en X el valor que se debe restar para darle la medida de ancho de espalda, y en Y debe quedar 0.
        .col-lg-7.col-md-8
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 40.
            span Ajuste de la posición del punto de sisa mediante la herramienta mover punto para definir el ancho de espalda
          img(src="@/assets/curso/temas/tema1/tarjeta5/imagen6.svg", alt='La imagen presenta un patrón de costura con una línea central vertical y una nueva línea en verde en la parte superior izquierda del patrón. Debajo del patrón, hay un cuadro de diálogo titulado “Mover Punto,” que permite ajustar la posición de un punto utilizando coordenadas específicas. Los valores en los campos de entrada son: 3.2 y 3.2 para las coordenadas, y 0° para el ángulo. Hay opciones para aceptar o cancelar la acción.')
      .row(titulo="Paso 7")
        .col-lg-4.col-md-4.mb-4.mb-md-0
          p #[b Dele la forma ] a la sisa siguiendo las indicaciones de las imágenes.
        .col-lg-7.col-md-8
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 41.
            span Aplicación de herramientas para el trazado y modelado de la curva de sisa en la parte posterior
          img(src="@/assets/curso/temas/tema1/tarjeta5/imagen7.svg", alt='La imagen expone tres etapas en la modificación de un patrón de costura. Primero, se presenta el patrón original. Luego, se añade una línea verde curva al patrón, utilizando un cuadro de diálogo titulado “Crear arco” con campos para el número de puntos y el radio. Finalmente, el patrón modificado detalla la curva aplicada, indicando que el punto seleccionado tiene atributos tanto de escalado como de curva, según el texto que dice: “Doble clic sobre este punto y además de atributo de escalado, le damos también de curva.” ')
      .row(titulo="Paso 8")
        .col-lg-4.col-md-4.mb-4.mb-md-0
          p Con la herramienta mover punto, entalle la medida de cintura correspondiente a la talla. Fije un punto con atributo de escalado a 9 cm, que corresponde a la medida de la mitad de separación del busto. Según el método de patronaje utilizado, el costado posterior es igual a la medida A-B más 1 cm. Se edita el largo del segmento de costado, siguiendo las indicaciones de la imagen.
        .col-lg-7.col-md-8
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 42.
            span Ajuste de la sisa con la herramienta Editar largo del segmento
          img(src="@/assets/curso/temas/tema1/tarjeta5/imagen8.svg", alt='La imagen expone dos patrones de costura y dos cuadros de diálogo. El primer patrón está etiquetado con puntos A y B, indicando que “A ponemos punto a mitad de separación de hombro”. El segundo patrón refleja una modificación con una curva añadida. Los cuadros de diálogo muestran la “Ventana de medidas” con opciones para editar la longitud del segmento y el cuadro “Largo del segmento” con opciones para ajustar la longitud y posición del segmento, resaltando “Largo” y “Primera posición”. ') 
    

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/subt.svg', alt='')
        h3.mb-0.ms-2 ¿Cómo trazar la pinza?

    .tarjeta.bgi-1.p-4.mb-5(data-aos="fade")
      SlyderA(tipo="b")
        .row.justify-content-center.my-lg-4
          .col-md-6.col-lg-6.mb-4.mb-md-0
            p #[b A. ] Tome la herramienta pinza y reparta a cada lado del punto señalado, mitad de la amplitud de la pinza, para este caso, 1,5 a cada lado del punto. Traiga una línea guía a la altura de la sisa hasta donde llega la profundidad de sisa para marcar hasta ahí el largo de esta. Se marca la pinza, llevando la misma hasta la línea de altura de la sisa y en la última ventana #[b atributos de pinza ] se activa la opción #[b sobrepuesta].
          .col-md-6.col-lg-5
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 43.
              span Creación y ajuste de la pinza de entalle con la herramienta Pinza
            img(src="@/assets/curso/temas/tema1/tarjeta6/imagen1.png", alt='La imagen detalla un programa de diseño de patrones de costura. En la parte superior, se expone una ventana de atributos de pieza con opciones para seleccionar, desfilar y cambiar medidas de la pieza. La opción “Subgrupo” está destacada con un círculo rojo. En la parte inferior, hay dos diagramas de patrones de una prenda. El diagrama de la izquierda describe una línea verde, que parece indicar una modificación en el patrón original. El diagrama de la derecha expone el mismo patrón con líneas punteadas azules, indicando las líneas de costura y cortes.')
        .row.justify-content-center.my-lg-4
          .col-md-6.col-lg-6.mb-4.mb-md-0
            p #[b B. ] La pinza debe llegar al punto de intersección entre altura y separación de busto. Para ello utilice la herramienta pinza, señale el punto del vértice de la #[b pinza], arrastre y seleccione el punto de intersección entre las líneas guías, haga clic y el vértice de la pinza se traslada al punto señalado.
          .col-md-6.col-lg-5
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 44.
              span Reubicación del vértice de la pinza con la herramienta Pinza
            img(src="@/assets/curso/temas/tema1/tarjeta6/imagen2.png", alt='La imagen expone dos diagramas de patrones de costura. Ambos diagramas están enfocados en una misma sección de los patrones, que está resaltada con un círculo rojo. La sección resaltada indica un ajuste o una modificación específica en la línea de costura central. El patrón de la izquierda y el de la derecha son similares, pero el detalle en el círculo rojo puede señalar un punto de ajuste clave en el diseño del patrón, probablemente relacionado con la colocación de la pinza o un punto de intersección de líneas importantes.')
        .row.justify-content-center.my-lg-4
          .col-md-6.col-lg-6.mb-4.mb-md-0
            p #[b C. ] Para terminar el patrón, haga clic en la herramienta #[b reemplazar original ] (grupo de herramientas generales), de esta manera en la #[b barra de piezas] quedan guardados los cambios que se hicieron al rectángulo desde el inicio. Para guardar el archivo, diríjase a la barra de #[b menú archivo], opción #[b guardar como], proceder a darle un nombre al archivo, este queda con #[b extensión dsn].
          .col-md-6.col-lg-5
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 45.
              span Actualización de la pieza con la herramienta reemplazar original
            img(src="@/assets/curso/temas/tema1/tarjeta6/imagen3.png", alt='La imagen detalla dos diagramas de patrones de costura para el cuerpo de una prenda. El diagrama de la izquierda presenta un patrón básico con líneas punteadas que indican la ubicación de una pinza en la cintura, y el contorno del patrón está delineado con líneas sólidas negras. El diagrama de la derecha expone el mismo patrón pero con el área sombreada en azul, destacando la pieza completa. Ambas imágenes tienen las mismas líneas punteadas y sólidas para indicar las características del patrón, siendo la principal diferencia el sombreado azul en el diagrama derecho. ')


    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/subt.svg', alt='')
        h3.mb-0.ms-2 Parte delantera talla 10

    .tarjeta.bgi-2.p-4.p-lg-5.mb-5(data-aos="fade")
      .tarjeta.bg-white.p-4
        PasosB.color-primario
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p.mb-4 #[b 1. ] Se parte de un rectángulo, cuyas dimensiones son:
              ul.lista-ul--color.fa-ul.color-primario
                li.mb-1 
                  i.fas.fa-plus
                  span.mb-0 #[b Largo del rectángulo=] medida de talle delantero.
                li
                  i.fas.fa-plus
                  span.mb-0 #[b Ancho=] ¼ de la medida de contorno de busto.
              p.mb-4 Sobre el rectángulo se ubican los puntos de:
              ul.lista-ul--color.fa-ul.color-primario
                li.mb-1 
                  i.fas.fa-plus
                  span.mb-0 #[b Centro frente (punto A).]
                li.mb-1
                  i.fas.fa-plus
                  span.mb-0 #[b ½ de la medida de talle (punto B).] 
                li.mb-1
                  i.fas.fa-plus  
                  span.mb-0 #[b Este punto se ubica utilizando la ventana de punto proporcional 0,5.]
                li
                  i.fas.fa-plus
                  span.mb-0 #[b El punto B corresponde a la altura de sisa.]
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 46.
                span Ubicación de puntos con la ventana de punto proporcional
              img(src="@/assets/curso/temas/tema1/tarjeta7/imagen1.svg", alt='La imagen presenta cómo ubicar un punto en un patrón de costura usando un software de diseño. Se expone un rectángulo con dos puntos, Punto A y Punto B, conectados por una línea horizontal. A la derecha, una ventana de “Atributos de Punto” detalla las configuraciones, destacando la opción “Proporcional” en 0.5. Esta configuración posiciona el punto de manera proporcional respecto a otros puntos en el patrón.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b 2. ] Trace líneas guías sobre la caída y la medida de hombro. Eleve el ángulo superior derecho del rectángulo a la intersección de las líneas guías. Para ello, se utiliza la herramienta #[b mover punto]. Haga clic sobre el punto del ángulo superior izquierdo del rectángulo, cambiar el atributo de escalado a curva y modele la curva de escote con la herramienta #[b mover punto].
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 47.
                span Modificación del escote con la herramienta mover punto
              img(src="@/assets/curso/temas/tema1/tarjeta7/imagen2.svg", alt='La imagen expone el diseño de un patrón de costura enfocado en la medida del escote y del hombro. A la izquierda, se indican las medidas del escote y del hombro con flechas rojas en la parte superior del rectángulo, junto con una flecha adicional que señala la “Caída de Hombro”. A la derecha, se presenta el patrón ajustado con una línea curva que representa la caída del hombro, y líneas punteadas azules que indican las guías para las medidas del escote y el hombro. Este diagrama explican cómo tomar y aplicar estas medidas en el patrón de una prenda.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b 3. ] Trace la curva de escote utilizando la herramienta #[b punto en contorno]. Suprima los puntos de la imagen anterior para definir la línea de hombro y línea de sisa. Se puede tomar como referencia las #[b líneas guías].
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 48.
                span Trazado de la curva del escote con la herramienta punto en contorno
              img(src="@/assets/curso/temas/tema1/tarjeta7/imagen3.svg", alt='La imagen presenta un patrón de costura con líneas y puntos que indican las medidas y ajustes para el escote y el hombro. Las líneas punteadas azules representan guías de referencia para estas medidas. La línea curva en la parte superior izquierda indica el escote, mientras que las líneas inclinadas y rectas a la derecha muestran la caída y la posición del hombro. Este patrón expone cómo aplicar las medidas del escote y el hombro en el diseño de una prenda. ')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b 4. ] Seleccione la línea de hombro en #[b sentido de las manecillas del reloj]. Haga clic en el botón #[b editar largo del segmento]; en esta ventana se escribe #[b el valor a editar] que para la talla 10 corresponde a 12 cm, también seleccione la opción #[b última horizontal], según la posición de la gráfica. Al escoger esta opción se debe tener en cuenta que el punto a mover para ajustar la medida debe ser el #[b punto hombro-sisa. ]
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 49.
                span Ajuste de la línea de hombro con la herramienta editar largo del segmento
              img(src="@/assets/curso/temas/tema1/tarjeta7/imagen4.svg", alt='La imagen expone un software de diseño de patrones de costura, enfocado en la configuración del largo de un segmento. En la parte superior izquierda, hay una ventana titulada “Largo del segmento” donde se introduce la medida de 12 en el campo “Largo”, resaltada en un círculo rojo. Abajo, otra ventana titulada “Editar largo del segmento” también tiene el campo “Largo” con el valor 12.05, igualmente resaltado. A la derecha, el patrón de costura presenta las modificaciones aplicadas, con líneas y guías punteadas azules que ayudan a ajustar y verificar las dimensiones del segmento en el diseño de la prenda. ')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b 5. ] Para editar la medida de hombro, utilice la herramienta #[b medida].
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 50.
                span Verificación de la medida de hombro con la herramienta medida
              img(src="@/assets/curso/temas/tema1/tarjeta7/imagen5.svg", alt='La imagen detalla una barra de herramientas del software de diseño de patrones de costura, específicamente la sección llamada “Pieza”. Entre los íconos disponibles, uno está resaltado con un círculo rojo, aunque parece estar deshabilitado (en gris). Los íconos incluyen herramientas para manipular y ajustar piezas del patrón, como medir, cortar, y seleccionar diferentes tipos de prendas.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b 6. ] Ubique el punto de #[b altura de pecho]. Para ello, se utiliza la herramienta #[b punto en contorno ] y la #[b opción proporcional 0,5]. Seleccione el atributo de escalado. La ubicación de este punto se marca también sobre la línea de sisa.
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 51.
                span Ubicación del punto de altura de pecho con la herramienta punto en contorno
              img(src="@/assets/curso/temas/tema1/tarjeta7/imagen6.svg", alt='La imagen detalla una ventana de “Atributos de Punto” del software de diseño de patrones de costura junto a un patrón de prenda. En la ventana, se pueden configurar los atributos del punto, como el tipo de punto (Curva o Escalado), coordenadas X e Y, distancia, ángulo, y la opción de mover sobre el contorno. También se destacan los valores de posición absoluta y proporcional del punto. A la derecha, el patrón presenta el punto ajustado en el diseño de la prenda, con líneas y puntos que indican las medidas y ajustes específicos. ')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b 7. ] Con la herramienta #[b mover punto]; corra el punto a la distancia que resulte de la resta de la medida que dio entre los dos puntos y la medida de mitad de ancho de pecho, según la talla que se esté trazando.
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 52.
                span Ajuste del ancho de pecho con la herramienta mover punto
              img(src="@/assets/curso/temas/tema1/tarjeta7/imagen7.svg", alt='La imagen presenta dos diagramas de patrones de costura. En el diagrama superior, se indican dos puntos específicos con círculos rojos, entre los cuales se mide la distancia utilizando la herramienta “Medida”. El texto entre los puntos dice: “Medimos la distancia entre estos puntos, con la herramienta ‘Medida’”. En el diagrama inferior, se presenta un patrón de prenda con las medidas y ajustes aplicados, reflejando la modificación basada en la distancia medida entre los dos puntos en el diagrama superior. ')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b 8. ] Trace la curva de la sisa e identifique el punto de vértice de pinza.
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 53.
                span Trazado de la curva de sisa y ubicación del vértice de pinza
              img(src="@/assets/curso/temas/tema1/tarjeta7/imagen8.svg", alt='La imagen presnta un patrón de costura con instrucciones para trazar la curva de la sisa y ubicar el punto de separación del busto. En la parte superior, se indica “Trazar la curva de sisa con ayuda de líneas guías”, utilizando líneas punteadas azules como referencia. En la parte inferior, una flecha roja señala “Ubicar el punto de separación de busto”, marcando su posición en el patrón.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b 9. ] Para editar el largo de medida de costado, seleccione, los puntos en el #[b sentido de las manecillas del reloj]. De acuerdo con la figura se debe editar el último punto en forma diagonal. La medida de costado del patrón delantero #[b debe ser igual al costado del posterior. ]
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 54.
                span Ajuste del largo de costado con la herramienta editar largo del segmento
              img(src="@/assets/curso/temas/tema1/tarjeta7/imagen9.svg", alt='La imagen presenta una ventana de "Largo del segmento" del software de diseño de patrones de costura. A la izquierda, la "Ventana de medidas"  detalla como la distancia, ángulo, y largo del segmento seleccionado, con un valor base de 22.25. En el centro, se ve el patrón de una prenda con líneas que indican las medidas ajustadas. A la derecha, otra ventana de "Largo del segmento" presenta un valor de 18.25 y opciones para extender el segmento en dirección vertical, horizontal o diagonal. Estas ventanas permiten ajustar y medir segmentos específicos del patrón.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b 10. ] El patrón debe quedar según la ilustración.
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 55.
                span Actualización de la pieza con la herramienta reemplazar original
              img(src="@/assets/curso/temas/tema1/tarjeta7/imagen10.svg", alt='La imagen expone una ventana emergente de un software de diseño de patrones de costura. La ventana emergente está titulada “ventana piezas” y ofrece opciones para editar una pieza del patrón. El menú desplegable presenta las opciones “Editar”, “Pieza”, y “Borrar”. Bajo la opción “Pieza”, se pueden elegir las subopciones “Reemplazar Original”, “Remover Actual” y “Crear como nueva”. En el fondo, se identitica parte de un patrón de costura y una regla de medición, lo que sugiere que el usuario está trabajando en ajustar o modificar el diseño del patrón. ')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b 11. ] Corregir el sentido de hilo de la tela con la herramienta #[b hilo paralelo al tramo.] Centre y aplome con la herramienta #[b nueva línea base.] Por último, actualizar los cambios en la ventana de piezas, con la opción #[b reemplazar original.]
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 56.
                span Corrección del hilo de tela y actualización de la pieza con herramientas de Optitex
              img(src="@/assets/curso/temas/tema1/tarjeta7/imagen11.svg", alt='La imagen presenta un patrón de costura para la parte delantera de una prenda, como una camisa o blusa. Incluye las líneas de contorno para los bordes, puntos de referencia importantes (marcados en rosa y negro), y líneas de construcción para guiar el corte y la costura. La “Base Delantero” es una línea vertical utilizada como referencia. Las curvas en la parte superior representan el escote y la sisa, esenciales para el ajuste de la prenda. El patrón guía el corte y ensamblaje de la tela para asegurar un ajuste correcto y la forma deseada. ')

    p A continuación, le invito a revisar el siguiente video sobre el "trazo de la base superior femenina”.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/X4KNcAe4-FA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Trazo de la base superior femenina  


    Separador
    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4 Traslados de pinza - Optitex

    .tarjeta.bgi-1.p-4.mb-5(data-aos="fade")
      SlyderA(tipo="b")
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 1. ] Para dar inicio se parte de la base superior delantera, trace una línea guía hasta la línea de cintura o largo de talle delantero.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 57.
              span Trazado de línea guía para traslado de pinza en la base superior delantera
            img(src="@/assets/curso/temas/tema1/tarjeta8/imagen1.svg", alt='La imagen detalla dos patrones de costura para la parte delantera y trasera de una prenda, como una camisa o blusa. El patrón de la izquierda, marcado como “Base SUPERIOR FRENTE”, corresponde a la parte delantera, mientras que el de la derecha, “Base SUPERIOR ESPALDA”, corresponde a la parte trasera. Ambos patrones incluyen puntos de referencia en rosa que indican lugares clave para la construcción de la prenda. Las líneas de contorno definen los bordes de cada pieza, incluyendo el escote, la sisa, el costado y el dobladillo. Las flechas indican la dirección de la base y sirven como guía para la alineación y corte de la tela.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 2. ] Traiga  una línea guía de la regla vertical y llévela hasta el ángulo #[b cintura costado.] Con la herramienta #[b mover punto,] lleve el ángulo cintura costado a la intersección de las dos líneas guías.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 58.
              span Uso de la herramienta mover punto para ajustar el costado de cintura
            img(src="@/assets/curso/temas/tema1/tarjeta8/imagen2.svg", alt='La imagen detalla dos patrones de costura para la parte delantera de una prenda, etiquetados como “Base SUPERIOR FRENTE”. Ambos patrones son azules y tienen puntos de referencia en rosa para la construcción. Las líneas de contorno definen los bordes de la pieza, y las flechas indican la dirección de la base para guiar el corte de la tela.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 3. ] Valide que la línea de cintura esté #[b totalmente recta] sobre la línea de talle delantero, y verifique con la #[b tecla F8] qué medida tiene la cintura.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 59.
              span Verificación de la medida de cintura con la herramienta medir
            img(src="@/assets/curso/temas/tema1/tarjeta8/imagen3.svg", alt='La imagen presenta dos patrones de costura: uno para la parte delantera (izquierda) y otro para la parte trasera (derecha) de una prenda. El patrón delantero está marcado como “Base SUPERIOR FRENTE” y está coloreado en azul, mientras que el trasero está marcado como “Base SUPERIOR ESPALDA”. Ambos patrones incluyen puntos de referencia en rosa y medidas específicas en cada punto, indicando las distancias entre los diferentes puntos clave del patrón. Las flechas indican la dirección de la base para guiar el corte de la tela. ')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 4. ] En la línea de cintura se identifica un punto con atributo de escalado a 9 cm, este punto determina la medida de separación del busto. #[b Medida de cintura:]
            ul.lista-ul--color.fa-ul.color-primario
              li 
                i.fas.fa-plus
                span.mb-0 #[b Cintura:] ¼ contorno de cintura + pinza.
            p Al tomar como punto de partida los 9 cm, marque un punto a 12 cm para que quede exactamente la medida ¼ contorno de cintura, 17 cm + 4 cm de pinza, para un total de 21 cm. Con la herramienta #[b puntos sobre ] (tecla rápida O) a partir de los 9 cm, ubicar un punto a 12 cm o el restante para la medida de cintura.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 60.
              span Marcación de la separación de busto sobre la línea de cintura con la herramienta punto sobre
            img(src="@/assets/curso/temas/tema1/tarjeta8/imagen4.svg", alt='La imagen expone una ventana de configuración de atributos de punto en un software de diseño de patrones de costura, junto a un patrón para la parte delantera de una prenda etiquetado como “Base SUPERIOR FRENTE”. En la ventana de configuración, se pueden ajustar las coordenadas (X e Y), la distancia, el ángulo, y si el punto es una curva o escalado. También se detalla la posición relativa y absoluta del punto en relación con otros puntos del patrón.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 5. ] Dé clic derecho, escoja la herramienta #[b selección], señale el punto del costado y suprimir. Para verificar nuevamente las medidas, oprimir la #[b tecla F8].
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 61.
              span Eliminación del punto de costado y verificación de medidas con la herramienta selección
            img(src="@/assets/curso/temas/tema1/tarjeta8/imagen5.svg", alt='La imagen presenta tres vistas de patrones de costura en un software de diseño. En la vista izquierda, se detalla el patrón de la parte delantera de una prenda etiquetado como “Base SUPERIOR FRENTE”. En el centro, hay un menú contextual del software con opciones como “Seleccionar Herramienta”, “Líneas guía”, “Nueva pieza”, “Insertar”, “Herramientas”, “Segmento”, “Zoom”, y “Deshacer Agregar un punto”. En la parte derecha, se expone el mismo patrón delantero con medidas específicas entre puntos clave. Los patrones están en azul y tienen puntos de referencia en rosa, con líneas de contorno que definen los bordes y flechas que indican la dirección de la base.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 6. ] Si la medida de los costados de la pieza del frente y del posterior no coinciden, trace una pinza correctiva de talle. Con la herramienta #[b punto sobre], ubicar un punto a 5 cm por debajo de la altura de la sisa.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 62.
              span Ubicación del punto para la pinza correctiva con la herramienta punto sobre
            img(src="@/assets/curso/temas/tema1/tarjeta8/imagen6.svg", alt='La imagen detalla una ventana de configuración de atributos de punto en un software de diseño de patrones de costura, junto a un patrón para la parte delantera de una prenda etiquetado como “Base SUPERIOR FRENTE”. La ventana permite ajustar las coordenadas X e Y, la distancia, y el ángulo de un punto específico en el patrón. También se puede seleccionar si el punto es una curva o escalado, y moverlo sobre el contorno. Además, se presentan las posiciones absoluta y proporcional del punto en relación con otros puntos del patrón. ')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 7. ] Marque una línea guía, exactamente al #[b punto ] de los 5 cm. Con la herramienta punto, fijar ese mismo punto sobre la línea centro frente. Marque una línea guía vertical para identificar el #[b vértice de pinza.]
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 63.
              span Marcación de líneas guía para definir el vértice de la pinza
            img(src="@/assets/curso/temas/tema1/tarjeta8/imagen7.svg", alt='La imagen detallan dos versiones del patrón de costura para la parte delantera de una prenda, etiquetados como “Base SUPERIOR FRENTE”. Ambos patrones son azules y tienen puntos de referencia en rosa. Las líneas de contorno definen los bordes de cada pieza, y las flechas indican la dirección de la base. La diferencia entre los dos patrones es que el de la derecha tiene una línea adicional horizontal y vertical, posiblemente para ajustes o modificaciones específicas del diseño. ')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 8. ] Para verificar el largo de los costados, oprima la #[b tecla F8]. Para validar el largo del costado delantero, tome la medida con la herramienta #[b medir], del grupo de herramientas de pieza, o sume los dos segmentos que aparecen.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 64.
              span Comprobación del largo de costado con la herramienta medir y la tecla F8
            img(src="@/assets/curso/temas/tema1/tarjeta8/imagen8.svg", alt='La imagen expone dos patrones de costura, uno delantero y otro trasero, ambos etiquetados como “Base SUPERIOR FRENTE” y “Base SUPERIOR ESPALDA”. Cada patrón está en azul con puntos de referencia en rosa y medidas entre puntos clave. También se ve una herramienta de medición del software de diseño, que permite ajustar ángulos y longitudes de los segmentos del patrón.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 9. ] Para poder deducir la #[b medida de la pinza], en el grupo de herramientas #[b vista], opción #[b otras herramientas], seleccione #[b calculadora. ]
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 65.
              span Cálculo de la medida de la pinza mediante la herramienta calculadora
            img(src="@/assets/curso/temas/tema1/tarjeta8/imagen9.svg", alt='La imagen presenta una interfaz de software de diseño de patrones de costura con un menú desplegable que ofrece varias opciones como calcular, mostrar líneas guía y otras herramientas. A la derecha, se expone una calculadora. Estos elementos indican la integración de herramientas de medición y cálculo dentro del software para ajustar y diseñar los patrones de costura.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 10. ] Después de tener clara la medida de la pinza, #[b marque pinza]. Tome la herramienta #[b pinza], opción #[b insertar pinza], desde el punto de los 5 cm de altura de busto, dar la medida correspondiente a la amplitud de la pinza, marque la #[b profundidad o el largo ] de pinza, hasta la intersección de las líneas guías, correspondiente al vértice de pinza o altura de busto.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 66.
              span Inserción de la pinza con la herramienta pinza y definición de su profundidad
            img(src="@/assets/curso/temas/tema1/tarjeta8/imagen10.svg", alt='La imagen presenta dos capturas de pantalla de un software de diseño de patrones. La izquierda presenta una ventana para ajustar atributos de punto (coordenadas, distancia y ángulo), mientras que la derecha expone el patrón delantero de una prenda, etiquetado como “Base SUPERIOR FRENTE”, con un punto ajustado. ')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 11. ] Con la pinza correctiva de talle se realizarán todos los traslados de pinza. Para crear la pinza de entalle o ajuste por cintura, primero #[b elimine líneas guías y limpie el área de trabajo]. Tome la herramienta pinza, opción #[b insertar pinza] y asigne la medida para el primer y segundo lado de pinza. La pinza de entalle debe quedar entre 2 a 3 cm por debajo de la pinza de recuperación de talle.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 67.
              span Creación de pinzas de entalle con la herramienta pinza a partir de la pinza correctiva
            img(src="@/assets/curso/temas/tema1/tarjeta8/imagen11.svg", alt='La imagen detalla tres capturas de pantalla de un software de diseño de patrones de costura. La primera captura presenta una ventana de configuración de atributos de punto, permitiendo ajustar coordenadas, distancia, y ángulo de un punto. La segunda captura expone el patrón delantero de una prenda con un punto ajustado y líneas adicionales. La tercera captura también detalla el patrón delantero con modificaciones en las líneas de construcción.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 12. ] Para realizar el traslado de pinza se sugiere que mueva el hilo de tela, con el fin de no interferir con el traslado seleccione la herramienta #[b mover interno] (tecla rápida I).
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 68.
              span Reubicación del hilo de tela con la herramienta mover interno para el traslado de pinza
            img(src="@/assets/curso/temas/tema1/tarjeta8/imagen12.svg", alt='La imagen expone tres capturas de pantalla de un software de diseño de patrones de costura. La primera captura presenta la “Caja de herramientas” con varias opciones para mover puntos y piezas, resaltando “Mover Interno (I)”. La segunda y tercera capturas detallan el patrón delantero de una prenda, etiquetado como “Base SUPERIOR FRENTE”, con líneas y puntos ajustados utilizando las herramientas seleccionadas.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 13. ] Como ya se identifican las pinzas y para poder actualizarlas pulse #[b clic derecho, opción, limpiar pieza, actualizar pieza. Eliminar o suprimir la pieza posterior.]
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 69.
              span Actualización de la pieza mediante las opciones limpiar pieza y actualizar pieza
            img(src="@/assets/curso/temas/tema1/tarjeta8/imagen13.svg", alt='La imagen expone tres capturas de pantalla de un software de diseño de patrones de costura. La primera captura presenta la “Caja de herramientas” con varias opciones para mover puntos y piezas, resaltando “Mover Interno (I)”. La segunda y tercera capturas detallan el patrón delantero de una prenda, etiquetado como “Base SUPERIOR FRENTE”, con líneas y puntos ajustados utilizando las herramientas seleccionadas.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 14. ] Para poder realizar los diferentes tipos de traslados de pinza, copie la pieza actual del delantero. Para copiar la pieza, en la ventana pieza dé clic #[b derecho en pieza - crear como nueva]. Cree las copias que considere necesarias de acuerdo con la cantidad de traslados de pinza que se vayan a realizar.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 70.
              span Creación de copias de la pieza mediante la opción crear como nueva para realizar traslados de pinza
            img(src="@/assets/curso/temas/tema1/tarjeta8/imagen14.svg", alt='La imagen expone una captura de pantalla de un software de diseño de patrones de costura con una ventana emergente de opciones para editar piezas. La opción seleccionada es “Crear copia nueva”. En el fondo, hay varios patrones delanteros de una prenda etiquetados como “Base SUPERIOR FRENTE”, uno de ellos en azul y los demás en blanco. Cada patrón tiene líneas y puntos de referencia ajustados. ')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 15. ] Para empezar los traslados de pinza inicie con un traslado de hombro, tome #[b herramienta pinza], opción #[b añadir y girar pinza]. Al acercarse al vértice de pinza, de la pinza correctiva de talle, se identifica un cambio de color, señalando qué se puede modificar o trasladar.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 71.
              span Inicio del traslado de pinza con la herramienta añadir y girar pinza
            img(src="@/assets/curso/temas/tema1/tarjeta8/imagen15.svg", alt='La imagen expone un menú del software de diseño de patrones con la opción “Añadir y girar pinza” seleccionada. A la derecha, un patrón delantero de una prenda (“Base SUPERIOR FRENTE”) tiene una pinza añadida y ajustada.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 16. ] En el sentido de las manecillas del reloj se traslada la pinza hacia el hombro para que la pinza quede en toda la mitad de la medida o el largo de hombro; en la ventana de diálogo #[b casilla proporcional] asigne 0.5. Al validar la medida se identifica que el recorrido del patrón se torna de un color diferente desde un punto hacia el otro, esto quiere decir que ya está lista la pieza para realizar el traslado.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 72.
              span Traslado del a pinza al hombro mediante la opción proporcional de la herramienta Añadir y girar pinza
            img(src="@/assets/curso/temas/tema1/tarjeta8/imagen16.svg", alt='La imagen detalla dos capturas de pantalla de un software de diseño de patrones de costura. A la izquierda, se presenta una ventana de configuración de atributos de punto con opciones para ajustar coordenadas, distancia y ángulo. A la derecha, se expone un patrón delantero de prenda etiquetado como “Base SUPERIOR FRENTE” con ajustes  en las líneas de construcción y una pinza añadida. ')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 17. ] Haga clic sobre cualquier punto de la pieza, automáticamente la pinza se ancla y al cerrar o mover la pieza se identifica el traslado de la pinza hacia el lado deseado.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 73.
              span Traslado de la pinza correctiva de talle hacia el hombro mediante la herramienta añadir y girar pinza en Optitex.
            img(src="@/assets/curso/temas/tema1/tarjeta8/imagen17.svg", alt='La imagen presenta dos patrones delanteros de una prenda etiquetados como “Base SUPERIOR FRENTE”. A la izquierda, el patrón tiene líneas verdes adicionales que indican ajustes o añadidos, como una pinza. A la derecha, el patrón exponen más modificaciones con una pinza añadida y un área destacada con un recuadro punteado, indicando un ajuste específico.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 18. ] De esa manera se deben hacer los traslados de pinza a cada una de las partes del cuerpo.
            ol.lista-ol--cuadro.fa-ol
                li 
                  .lista-ol--cuadro__vineta
                    span A
                  span.mb-0 Traslado al hombro.
                li 
                  .lista-ol--cuadro__vineta
                    span B
                  span.mb-0 Traslado a la sisa.
                li 
                  .lista-ol--cuadro__vineta
                    span C
                  span.mb-0 Traslado al costado.
                li 
                  .lista-ol--cuadro__vineta
                    span D
                  span.mb-0 Traslado a la pinza de entalle.
                li 
                  .lista-ol--cuadro__vineta
                    span E
                  span.mb-0 Traslado al centro frente.
                li 
                  .lista-ol--cuadro__vineta
                    span F
                  span.mb-0 Traslado al escote.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 74.
              span Aplicación de la herramienta añadir y girar pinza para realizar los diferentes traslados de pinza en el patrón delantero.
            img(src="@/assets/curso/temas/tema1/tarjeta8/imagen18.svg", alt='La imagen detalla cinco patrones de la parte delantera de una prenda etiquetada como “Base SUPERIOR FRENTE”. Cada patrón tiene variaciones en las líneas de construcción y las pinzas, indicando diferentes ajustes y modificaciones. Los puntos de referencia en rosa y las líneas de construcción exponen cómo se pueden alterar los patrones para adaptar la prenda.')

    p Para una mejor comprensión del tema le invito a revisar el siguiente video sobre “traslados de pinza”.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/5MttEL044vw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Traslados de pinza
  
    
    Separador    
    .row.mb-4
      #t_1_5.titulo-segundo.color-acento-contenido
        h2 1.5  Cortes base superior femenina - Optitex

    .subt.mb-5(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/subt.svg', alt='')
        h3.mb-0.ms-2 ¿Cómo convertir los traslados de pinza a cortes?

    .tarjeta.bgi-2.borde-redondo.p-4.p-lg-5.mb-5(data-aos="fade")
      .tarjeta.bg-white.p-4
        PasosB.color-primario
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p.mb-4 #[b 1. ] Tomar herramienta #[b pinza], opción #[b añadir y girar pinza]. Encontrará las pinzas en el punto central del busto.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 75.
                span Selección de la herramienta añadir y girar pinza para iniciar el traslado desde el punto central del busto en Optitex
              img(src="@/assets/curso/temas/tema1/tarjeta9/imagen1.svg", alt='La imagen detalla tres capturas de pantalla de un software de diseño de patrones de costura. A la izquierda, se presenta un menú desplegable con la opción “Añadir y girar pinza” seleccionada. En el centro y a la derecha, se exponen patrones delanteros de una prenda, etiquetados como “Base SUPERIOR FRENTE”, con pinzas añadidas y ajustadas, representadas por líneas de construcción y puntos de referencia en el área del busto.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b 2. ] Grupo de herramientas #[b piezas], opción #[b cortar a pieza]. El cursor cambia a una estrella y tijeras, la estrella debe coincidir sobre el punto que se quiere cortar.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 76.
                span Uso de la herramienta cortar pieza para seleccionar el punto de corte en el traslado de pinza en Optitex
              img(src="@/assets/curso/temas/tema1/tarjeta9/imagen2.svg", alt='La imagen detalla una captura de pantalla de un software de diseño de patrones de costura, enfocada en la herramienta “Pieza”. El menú desplegable ofrece dos opciones: “Cortar a pieza” y “Cortar a pieza a lo largo de un interno”. La opción “Cortar a pieza” está seleccionada. Esta herramienta permite ajustar y modificar las piezas del patrón dentro del software.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b 3. ] Inicie por el punto de hombro hacia centro frente, haga clic en el #[b vértice de pinza], y luego dé clic en el botón #[b aceptar] de la ventana emergente.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 77.
                span Aplicación de la herramienta mover punto para definir el recorrido desde el hombro hasta el vértice de pinza en el traslado hacia centro frente en Optitex
              img(src="@/assets/curso/temas/tema1/tarjeta9/imagen3.svg", alt='La imagen detalla dos capturas de pantalla de un software de diseño de patrones de costura. En la captura de la izquierda, se presenta un patrón delantero de prenda etiquetado como “Base SUPERIOR FRENTE” con líneas de construcción y puntos de referencia. A la derecha, se presenta la ventana “Mover Puntos”, que permite ajustar la posición de un punto específico en el patrón, con opciones para mover desde un punto, un segmento, o una ventana definida, y para ajustar las coordenadas y ángulos del punto seleccionado.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b 4. ] Seguir cortando hasta el punto de cintura centro frente, al finalizar el corte se habilita una ventana emergente para asignar margen de costura, en este caso se está trabajando sin margen de costura, así que presione el #[b botón cancelar.]
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 78.
                span Corte de la pieza desde el hombro hasta la cintura centro frente mediante la herramienta cortar pieza
              img(src="@/assets/curso/temas/tema1/tarjeta9/imagen4.svg", alt='La imagen presenta dos capturas de pantalla de un software de diseño de patrones de costura. A la izquierda, se expone un patrón delantero de prenda etiquetado como “Base SUPERIOR FRENTE” con líneas de construcción y puntos de referencia. A la derecha, se detalla la ventana “Atributos de Costura”, que permite definir el inicio y fin de las costuras, las costuras de esquina, y ajustar el ancho de costura. También incluye opciones para conservar escalado y aplicar configuraciones específicas a las costuras del patrón.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b 5. ] Al generar el corte se crea un hilo de tela diferente, es decir, quedan hilos de tela independientes por pieza. Al seleccionar la pieza y al arrastrar se identifica la división o el corte.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 79.
                span Identificación de las piezas resultantes y de los hilos de tela independientes después del corte
              img(src="@/assets/curso/temas/tema1/tarjeta9/imagen5.svg", alt='La imagen detalla dos patrones de costura para la parte delantera de una prenda, etiquetados como “Base SUPERIOR FRENTE”. Cada patrón presenta variaciones en las líneas de construcción y puntos de referencia, indicando diferentes ajustes y modificaciones. Los patrones están en azul con puntos de referencia en rosa, y las líneas de construcción exponen cómo se pueden alterar los patrones para adaptar la prenda.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b 6. ] Para eliminar los excedentes de pinza del corte siguiente se debe tomar la herramienta, #[b cortar a pieza] (tecla rápida C), fijar punto desde el hombro hacia sisa, hasta punto de vértice de pinza, #[b cancelar ventana emergente y separar pieza.]
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 80.
                span Eliminación de excedentes de pinza mediante la herramienta cortar pieza y separación de segmentos resultantes
              img(src="@/assets/curso/temas/tema1/tarjeta9/imagen6.svg", alt='La imagen detalla tres capturas de pantalla de un software de diseño de patrones de costura. A la izquierda, se presenta el menú de la herramienta “Pieza” con la opción “Cortar a pieza” seleccionada. En el centro, se expone un patrón delantero de una prenda etiquetado como “Base SUPERIOR FRENTE” con líneas de construcción adicionales que indican un corte. A la derecha, el patrón cortado en dos piezas separadas, reflejando el ajuste realizado.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b 7. ] Tome nuevamente herramienta cortar #[b pieza] (tecla rápida C), y finalizar el corte desde vértice de pinza hasta cintura.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 81.
                span Finalización del corte desde el vértice de pinza hasta la cintura para separar los segmentos del patrón
              img(src="@/assets/curso/temas/tema1/tarjeta9/imagen7.svg", alt='La imagen detalla dos capturas de pantalla de un software de diseño de patrones de costura. A la izquierda, se presenta un patrón delantero de prenda etiquetado como “Base SUPERIOR FRENTE” cortado en dos partes. A la derecha, el patrón se ha dividido en tres piezas separadas: la parte superior, una pieza intermedia, y una pieza pequeña adicional, todas etiquetadas y ajustadas según las líneas de construcción y puntos de referencia.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b 8. ] Separe la pieza hasta obtener piezas entre frente, pieza acostado y sobrantes de pinza. Para eliminar los sobrantes de las pinzas, haga #[b clic sobre la pieza] para identificar el nombre o la pieza en la #[b ventana de piezas]. Luego de identificar la pieza en la ventana de piezas, dé clic sobre la ventana, opción #[b editar - borrar pieza desde modelo.]
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 82.
                span Eliminación de sobrantes de pinza mediante la gestión y borrado de piezas derivadas del corte
              img(src="@/assets/curso/temas/tema1/tarjeta9/imagen8.svg", alt='La imagen presenta dos capturas de pantalla de un software de diseño de patrones de costura. En la captura de la izquierda, se presenta la ventana “Ventana piezas” con varias piezas de patrones, destacando la “Base SUPERIOR FRENTE” que se ha dividido en varias partes. En la captura de la derecha, un menú contextual indica las opciones para editar, cortar, copiar y borrar piezas, con la opción “Borrar Pieza desde modelo” resaltada. Las piezas del patrón se presentan separadas y etiquetadas, listas para ser ajustadas o eliminadas según sea necesario.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b 9. ] Repita el ejercicio hasta eliminar todos los sobrantes y dejar únicamente las piezas correspondientes al corte. Con el fin de suavizar las puntas generadas en cada uno de los cortes, lo primero que debe hacer es limpiar la pieza, para ello, #[b haga clic sobre el corte], una vez se seleccione indica, que quedó el segmento de la pinza anterior, oprimir la tecla #[b suprimir] para eliminar dicho segmento.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 83.
                span Eliminación de segmentos sobrantes y limpieza final de las piezas obtenidas tras el corte
              img(src="@/assets/curso/temas/tema1/tarjeta9/imagen9.svg", alt='La imagen expone tres capturas de pantalla de un software de diseño de patrones de costura. En la primera captura, se detalla la ventana "Ventana piezas" con varias piezas de patrones, destacando la "Base SUPERIOR FRENTE" que se ha dividido en varias partes. En la segunda captura, se presenta un patrón delantero de prenda con una pinza añadida y líneas de construcción adicionales, representado como varias piezas etiquetadas. En la tercera captura, las piezas del patrón se exponen separadas y etiquetadas, destacando la "Base SUPERIOR FRENTE" dividida en tres partes, listas para ser ajustadas o ensambladas.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b 10. ] Repita el ejercicio hasta que no se identifiquen segmentos externos a cada una de las piezas. Al tener la pieza completamente limpia de cualquier segmento, dé clic sobre el punto de vértice o de intersección de pinza y en la pestaña #[b propiedades], opción #[b principal], habilite el #[b atributo curva.]
            .col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 84.
                span Configuración del atributo curva desde el panel de propiedades para suavizar los puntos de intersección de la pinza
              img(src="@/assets/curso/temas/tema1/tarjeta9/imagen10.svg", alt='La imagen presenta una interfaz de software de diseño de patrones de costura. En la parte superior, hay una barra con iconos de diferentes piezas de patrones. En el centro, se exponen dos piezas de patrón: una recta y otra curva, con líneas y puntos de ajuste. A la izquierda, hay un panel de propiedades con opciones seleccionables como “Punto”, “Escalada”, “Curva”, entre otras. ')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b 11. ] Al asignar el #[b atributo de curva] se modifica toda la pieza.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 85.
                span Aplicación del atributo de curva desde el panel de propiedades para suavizar el contorno de la pieza
              img(src="@/assets/curso/temas/tema1/tarjeta9/imagen11.svg", alt='La imagen presenta una interfaz de software de diseño de patrones de costura. En la parte superior, hay una barra con iconos de diferentes piezas de patrón etiquetadas como “Base Sup”. En el centro, se exponen dos piezas de patrón: una recta y otra curva (coloreada en azul), con líneas y puntos de ajuste. A la izquierda, hay un panel de propiedades con opciones como “Principal”, “Escalado”, “Curva”, “Conectado”, y otras.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b 12. ] Para evitar modificar todo el trayecto se sugiere agregar punto en ambas direcciones y colocar la medida del trayecto dependiendo del volumen del busto o copa, sin seleccionar ningún atributo.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 86.
                span Configuración de la herramienta agregar punto para controlar el volumen de copa sin modificar todo el trayecto
              img(src="@/assets/curso/temas/tema1/tarjeta9/imagen12.svg", alt='La imagen representa dos capturas de pantalla de una interfaz de software de diseño de patrones de costura. En ambas capturas, se presentan dos piezas de patrón: una recta y otra curva (coloreada en azul). Cada captura tiene una ventana emergente titulada “Atributos de Punto”, donde se pueden ajustar valores como la distancia y el ángulo. Ambas ventanas tienen opciones para “Cerrar”, “Mostrar valor constante”, y campos para ingresar detalles específicos de los puntos. ')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b 13. ] Al seleccionar el #[b punto de vértice pinza ] y pasar atributo de curva se identifica cómo se suaviza el vértice. Seleccionar herramienta #[b mover punto y suavizar] como se haría de manera manual.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 87.
                span Aplicación de las herramientas mover punto y atributos de curva para suavizar el vértice de pinza
              img(src="@/assets/curso/temas/tema1/tarjeta9/imagen13.svg", alt='La imagen expone dos partes de una interfaz de software de diseño de patrones de costura. La parte izquierda detalla la interfaz completa con dos piezas de patrón, una recta y otra curva (coloreada en azul), y un panel de propiedades con opciones como “Principal”, “Escalado”, “Curva”, entre otras. La parte derecha representa una ampliación de la pieza curva en azul, detallando los puntos y líneas de ajuste. ')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b 14. ] Para modificar o actualizar el nombre de la pieza, seleccionar la pieza en la ventana, propiedades, pestaña cambiar nombre, haga doble clic y escribir el nombre deseado.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 88.
                span Modificación del nombre de la pieza mediante las opciones de propiedades del patrón
              img(src="@/assets/curso/temas/tema1/tarjeta9/imagen14.svg", alt='La imagen expone dos partes de una interfaz de software de diseño de patrones de costura. A la izquierda, se presenta la interfaz completa con una pieza de patrón curva (coloreada en azul) y un panel de propiedades con opciones como “Principal”, “Nombre”, “Escalado”, entre otras. A la derecha, representa una ampliación de la misma pieza curva en azul, detallando los puntos y líneas de ajuste.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b 15. ] Repita el mismo ejercicio en cada una de las bases con traslado de pinza para convertir a cortes, recuerde que los nombres comerciales de los cortes varían según la región o el país donde se trabaje, siempre remítase a la parte funcional o técnica de lo que se está trabajando.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 89.
                span Aplicación del procedimiento para transformar traslados de pinza en cortes del patrón base
              img(src="@/assets/curso/temas/tema1/tarjeta9/imagen15.svg", alt='La imagen presenta cuatro piezas de patrón de costura en una interfaz de software de diseño. Las piezas están etiquetadas como “Blusa CF”, “Blusa Espalda DEL”, “Blusa Espalda”, y “Blusa Espalda Fruncida” (esta última coloreada en azul). Todas las piezas tienen líneas y puntos de ajuste, organizados de manera que parecen partes de un patrón para una blusa.')

    p Para una mejor comprensión del tema, revisar el siguiente video sobre “cortes base superior femenina”.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/5IFOw9kqvGw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Cortes base superior femenina


    Separador    
    #t_1_6.titulo-segundo.color-acento-contenido
      h2 1.6  Blusa hasta la cadera - Optitex

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Para dar inicio al trazo de la blusa hasta cadera (página número 39 del manual) se trabajará con la base trazada anteriormente, con traslado de pinza por costado y pinza de ajuste. Este ejercicio brinda el contexto general para trabajar cualquier tipo de interpretación o modificación de prendas superiores.

    .tarjeta.bgi-1.p-4.mb-5(data-aos="fade")
      SlyderA(tipo="b")
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 1. ] Para modificar el largo de la prenda, en este caso hasta la altura de cadera; diríjase a #[b caja de herramientas], opción #[b movimiento paralelo. ]
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 90.
              span Selección de la herramienta movimiento paralelo para modificar el largo de la prenda
            img(src="@/assets/curso/temas/tema1/tarjeta10/imagen1.svg", alt='La imagen representa dos pantallazos de una interfaz de software de diseño de patrones de costura. En la parte izquierda, se presenta una pieza de patrón titulada “Base Sup FRENTE” (coloreada en azul) con líneas y puntos de ajuste, y un panel de herramientas a la izquierda con opciones como “Mover punto”, “Movimiento paralelo”, y “Cortar/Borrar”. A la derecha, se presenta una ampliación de la misma pieza de patrón con más detalle en las líneas y puntos de ajuste. ')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 2. ] Seleccionar la línea de cintura en sentido de las manecillas del reloj. Cuando el cursor cambia de forma se puede alargar arrastrando el mouse.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 91.
              span Aplicación de la herramienta movimiento paralelo para alargar la línea de cintura
            img(src="@/assets/curso/temas/tema1/tarjeta10/imagen2.svg", alt='La imagen expone tres vistas de una pieza de patrón titulada “Base Sup FRENTE” (coloreada en azul) en una interfaz de software de diseño de patrones de costura. Las tres imágenes presentan la misma pieza, pero con diferentes líneas y puntos de ajuste, exponiendo variaciones en los detalles de costura y ajustes. Cada vista incluye líneas punteadas y sólidas que indican diferentes secciones y posibles ajustes de la pieza del patrón. ')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 3. ] En la ventana emergente, #[b movimiento paralelo del tramo], marque el largo deseado, teniendo en cuenta el eje X y el eje Y, posteriormente haga clic en el botón #[b aceptar. ]
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 92.
              span Configuración de parámetros en la herramienta movimiento paralelo del tramo
            img(src="@/assets/curso/temas/tema1/tarjeta10/imagen3.svg", alt='La imagen detalla dos partes de una interfaz de software de diseño de patrones de costura. A la izquierda, se presenta una ventana emergente titulada “Movimiento paralelo del tramo”, donde se pueden ingresar valores numéricos y direcciones para ajustar el movimiento de los puntos del patrón. A la derecha, se expone una pieza de patrón titulada “Base Sup FRENTE” (coloreada en azul) con líneas y puntos de ajuste, indicando las modificaciones realizadas. ')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 4. ] Al modificar el largo se identifica la variación en la pinza, es decir, se ve la pinza anclada al largo. Para eliminar la pinza, dé #[b clic derecho] en la #[b herramienta selección], seleccione el trayecto o la pinza y suprimir, de igual manera, se debe suprimir todos y cada uno de los puntos de la pinza.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 93.
              span Eliminación de pinzas mediante la herramienta selección después de modificar el largo de la pieza
            img(src="@/assets/curso/temas/tema1/tarjeta10/imagen4.svg", alt='La imagen detallan tres vistas de una pieza de patrón titulada “Base Sup FRENTE” (coloreada en azul) en una interfaz de software de diseño de patrones de costura. En la imagen izquierda, se expone un menú desplegable con opciones como “Seleccionar Herramienta”, “Líneas guía”, “Nueva pieza”, “Herramientas”, “Segmento”, y “Zoom”. Las imagenes central y derecha presentan la misma pieza de patrón con diferentes detalles de líneas y puntos de ajuste, indicando posibles modificaciones en la costura. ')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 5. ] En este punto ya se tiene la blusa con el largo deseado, es necesario darle la forma de cada uno de los puntos del cuerpo. Para marcar el punto de cintura tome la herramienta puntos sobre y fijar un punto con atributo de #[b escalado], por costado con la medida de altura de cadera. Para verificar las medidas oprimir la #[b tecla F8. ]
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 94.
              span Creación de puntos de referencia con la herramienta puntos sobre para definir la altura de cadera 
            img(src="@/assets/curso/temas/tema1/tarjeta10/imagen5.svg", alt='La imagen expone dos partes de una interfaz de software de diseño de patrones de costura. A la izquierda, se detalla una ventana emergente titulada “Atributos de Punto” con opciones para ajustar el tipo de punto, su número, y sus coordenadas (X e Y), además de opciones de movimiento y escalado. A la derecha, se detalla una pieza de patrón titulada “Base Sup FRENTE” (coloreada en azul) con líneas y puntos de ajuste, incluyendo medidas y coordenadas numéricas para varios puntos del patrón. ')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 6. ] Verifique el recorrido de la línea de cadera con la herramienta #[b medir. ]
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 95.
              span Verificación de la línea de cadera mediante la herramienta medir
            img(src="@/assets/curso/temas/tema1/tarjeta10/imagen6.svg", alt='La imagen presenta una interfaz de software de diseño de patrones de costura. A la izquierda, se expone una ventana emergente titulada “Ventana de medidas” con campos para ajustar la distancia, ángulo, y largo de un segmento, además de opciones para editar el largo del segmento. A la derecha, se expone una pieza de patrón titulada “Base Sup FRENTE” (coloreada en azul) con líneas y puntos de ajuste. La ventana de medidas parece estar utilizada para modificar y precisar las dimensiones de la pieza del patrón. ')
        .row.justify-content-center.my-lg-4
          .col-md-4.mb-4.mb-md-0
            p #[b 7. ] Aumente la medida de 1/4 del contorno de cadera más pinza según el manual, en editar segmento en la ventana de #[b medidas], asignar medida, y presione el botón #[b aceptar].
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 96.
              span Modificación de medidas en la ventana de edición de segmentos para ajustar el contorno de cadera
            img(src="@/assets/curso/temas/tema1/tarjeta10/imagen7.svg", alt='La imagen expone dos capturas de una interfaz de software de diseño de patrones de costura. Ambas capturas presentan la “Ventana de medidas” con campos para ajustar la distancia (Dist), ángulo (Angulo) y largo (Largo) de un segmento. En ambas ventanas, se están modificando los valores del largo del segmento para la talla “Base”. A la derecha, se expone una pieza de patrón titulada “Base Sup FRENTE” (coloreada en azul) con líneas y puntos de ajuste. Las ventanas de medidas permiten modificar y precisar las dimensiones de esta pieza del patrón. ')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 8. ] Para marcar la pinza en segmento interno se debe marcar una línea guía en cintura. Con la herramienta #[b puntos sobre], fije en el segmento de centro frente, un punto, en el punto de talle o cintura.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 97.
              span Ubicación de puntos de referencia con la herramienta puntos sobre para definir la pinza en la línea de cintura
            img(src="@/assets/curso/temas/tema1/tarjeta10/imagen8.svg", alt='La imagen detalla dos vistas de una interfaz de software de diseño de patrones de costura, ambas con la pieza de patrón titulada “Base Sup FRENTE” (coloreada en azul). A la izquierda, se presenta una ventana emergente titulada “Atributos de Punto” que permite ajustar las coordenadas X e Y, la distancia, y el ángulo de un punto específico en el patrón, además de opciones para mover el punto sobre el contorno y escalado. A la derecha, se detalla la misma pieza de patrón sin la ventana emergente, mostrando las líneas y puntos de ajuste. ')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 9. ] En el grupo de herramientas #[b insertar] identifique la herramienta #[b botón], y dé clic en #[b crear botón]. Para marcar el punto de pinza se debe tener en cuenta el primer y segundo lado de pinza, el análisis se hace tomando como referencia el ancho de pinza y la separación de busto.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 98.
              span Creación de puntos de referencia para la pinza mediante la herramienta botón
            img(src="@/assets/curso/temas/tema1/tarjeta10/imagen9.svg", alt='La imagen detalla una interfaz de software de diseño de patrones de costura. Incluye una barra de herramientas con la opción “Crear Botón”, una ventana emergente para ajustar las coordenadas y la posición del botón, y una pieza de patrón “Base Sup FRENTE” con un botón agregado en el patrón. ')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 10. ] Crear cada uno de los puntos de pinza con la herramienta #[b botón], con el fin de poder marcar el ancho de la pinza.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 99.
              span Marcación de los puntos de amplitud de la pinza mediante la herramienta botón
            img(src="@/assets/curso/temas/tema1/tarjeta10/imagen10.svg", alt='La imagen expone una interfaz de software de diseño de patrones de costura. A la izquierda, se presenta una barra de herramientas con opciones de edición, y una pieza de patrón coloreada en azul con un símbolo de botón agregado. A la derecha, se presenta una pieza de patrón titulada “Base Sup FRENTE” con varios símbolos de botón agregados en diferentes puntos del patrón. ')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 11. ] Para marcar el largo de la pinza por la línea de cadera utilizar la herramienta #[b punto.]
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 100.
              span Definición del largo de la pinza mediante la herramienta punto sobre la línea de cadera
            img(src="@/assets/curso/temas/tema1/tarjeta10/imagen11.svg", alt='La imagen detalla una interfaz de software de diseño de patrones de costura con dos ventanas emergentes tituladas “Atributos de Punto”. Estas ventanas permiten ajustar las coordenadas, distancia, ángulo y proporciones de los puntos en el patrón. En el fondo, se exponen dos piezas de patrón coloreadas en azul con varios símbolos de botón agregados y líneas de ajuste visibles.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 12. ] Se debe identificar cada uno de los vértices de pinza, teniendo en cuenta que no se puede encontrar el vértice de pinza por costado y el vértice de pinza de ajuste.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 101.
              span Identificación de los vértices de pinza para la definición del ajuste en el patrón
            img(src="@/assets/curso/temas/tema1/tarjeta10/imagen12.svg", alt='La imagen expone dos patrones de costura para la parte delantera de una prenda. Ambos patrones tienen marcados los mismos puntos de referencia y líneas guía, pero el patrón de la izquierda incluye marcas adicionales para la colocación de pinzas, mientras que el patrón de la derecha tiene una marca para un ojal. ')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 13. ] Para marcar o dibujar la pinza, en la herramienta #[b dibujar], opción #[b borrador] se puede ir marcando cada uno de los puntos o vértices señalados.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 102.
              span Construcción de la pinza mediante la herramienta dibujar y la conexión de vértices 
            img(src="@/assets/curso/temas/tema1/tarjeta10/imagen13.svg", alt='La imagen describe dos patrones de costura adicionales para la parte delantera de una prenda. El patrón de la izquierda tiene una línea verde que parece indicar una nueva línea de corte o costura. El patrón de la derecha tiene un diseño con una pinza central que se extiende desde la parte inferior hasta el centro del patrón, además de una marca para un ojal cerca de la parte superior.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-12.mb-4.mb-md-0
            p #[b 14. ] Para trazar la parte posterior de la blusa hasta la cadera se parte desde el básico posterior. Trace una línea guía en el punto de cintura costado, en este caso debe tener en cuenta los desniveles de cintura, es decir, el largo de la prenda se dará desde el punto de costado cintura, mientras que la pinza se marcará desde el punto de cintura centro atrás.
            p Para alinear los puntos de cintura, en el grupo de herramientas de #[b contorno] seleccione #[b alinear puntos] (tecla rápida G), seleccione los puntos de cintura que se quieren alinear; siempre se debe marcar en el sentido de las manecillas del reloj.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 103.
              span Ajuste del largo de la blusa posterior y alineación de los puntos de cintura mediante herramientas de contorno
            img(src="@/assets/curso/temas/tema1/tarjeta10/imagen14.svg", alt='La imagen detalla dos patrones de costura para la parte trasera de una prenda. Ambos patrones tienen marcas de referencia con medidas numéricas en puntos clave. El patrón de la izquierda incluye una línea vertical que puede indicar una costura o pliegue. El patrón de la derecha, que es una versión más pequeña del primero, también tiene una línea vertical similar. Ambos patrones indican que son para la “Base Sub ESPALDA” y exponen opciones de alineación en el software de diseño. ')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 15. ] En la ventana emergente seleccione #[b alinear al último punto]. En este caso debe seleccionar #[b alinear todos los puntos. ]
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 104.
              span Configuración de la herramienta alinear puntos para nivelar la línea de cintura
            img(src="@/assets/curso/temas/tema1/tarjeta10/imagen15.svg", alt='La imagen describe una acción que es: en la ventana emergente, seleccione “Alinear al último punto”. En esta ocasión, debe seleccionar “Alinear todos los puntos”.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 16. ] En la caja de herramientas escoja #[b movimiento paralelo], seleccione desde el punto de centro atrás hacia costado, en el sentido de las manecillas del reloj; extender hacia abajo, asignando la medida de altura de cadera, teniendo en cuenta el eje X y el eje Y.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 105.
              span Configuración de la herramienta movimiento paralelo para ampliar el largo de la espalda hasta la cadera
            img(src="@/assets/curso/temas/tema1/tarjeta10/imagen16.svg", alt='En la imagen se describe como en la caja de herramientas, se selecciona la opción de movimiento paralelo. Luego, marque desde el punto central trasero hacia el costado, en sentido de las manecillas del reloj. Extienda hacia abajo, asignando la medida de la altura de la cadera, considerando los ejes X e Y. ')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 17. ] En este punto ya se tiene la blusa con el largo deseado, es necesario darle la forma de cada uno de los puntos del cuerpo. Para marcar el punto de cintura tome la herramienta #[b puntos sobre] y fije un punto con el atributo de #[b escalado], por costado con la medida de altura de cadera. Para verificar las medidas oprimir la #[b tecla F8. ]
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 106.
              span Definición de la línea de cadera mediante la herramienta puntos sobre y verificación de medidas
            img(src="@/assets/curso/temas/tema1/tarjeta10/imagen17.svg", alt='La imagen detalla tres piezas de un patrón de costura, cada una correspondiente a una parte del cuerpo, probablemente para una prenda superior (como una blusa o chaqueta). Cada pieza tiene medidas específicas y puntos de referencia marcados, que ayudan en la confección y ensamblaje de la prenda.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 18. ] Verificar el recorrido de la línea de cadera con la herramienta #[b medir]. Aumentar la medida de 1/4 del contorno de cadera más pinza según el manual; en editar segmento de la ventana de #[b medidas], asignar medida, y posteriormente dé clic en el botón #[b aceptar. ]
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 107.
              span Medición y ajuste del contorno de cadera mediante la ventana de medidas
            img(src="@/assets/curso/temas/tema1/tarjeta10/imagen18.svg", alt='La imagen detalla dos ventanas de un software de diseño de patrones, donde se ajustan las dimensiones y divisiones de segmentos del patrón, y una pieza de patrón de costura con medidas y puntos de referencia para confección de una prenda.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-12.mb-4.mb-md-0
            p #[b 19. ] Para marcar la pinza en segmento interno se debe marcar una línea guía en cintura. Con la herramienta #[b punto sobre], fije en el segmento de centro frente, un punto, en el punto de talle o cintura. En el grupo de herramientas #[b insertar ] identifique la herramienta #[b botón], haga clic en #[b crear botón. ] Para marcar el punto de pinza se debe tener en cuenta el primer y segundo lado de pinza, el análisis se hace tomando como referencia el ancho de pinza y la separación del busto.
            p Crear cada uno de los puntos de pinza con la herramienta botón, con el fin de poder marcar el ancho de la pinza. Para marcar el largo de la pinza por línea de cadera utilizar la herramienta punto sobre. Se debe identificar cada uno de los vértices de pinza, teniendo en cuenta que no se puede encontrar el vértice de pinza por costado y el vértice de pinza de ajuste. Para marcar o dibujar la pinza, en la herramienta dibujar, opción borrador se puede ir marcando cada uno de los puntos o vértices señalados.  
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 108.
              span Creación y trazado de la pinza de ajuste mediante las herramientas punto sobre, botón y dibujar
            img(src="@/assets/curso/temas/tema1/tarjeta10/imagen19.svg", alt='La imagen explica la acción para marcar la pinza en el segmento interno, trace una línea guía en la cintura. Utilice la herramienta de punto sobre para fijar un punto en el segmento del centro frente, en el talle o cintura. En el grupo de herramientas de insertar, seleccione la herramienta botón y cree un botón. Para marcar el punto de pinza, considere los lados de la pinza y analice el ancho de la pinza y la separación del busto. La imagen presenta una ventana del software de diseño de patrones, donde se pueden ajustar las coordenadas (X, Y), la distancia y el ángulo para la colocación de un botón. A la derecha, se presenta un patrón de costura con una pinza marcada en el centro, indicando cómo se aplican las configuraciones del software en el diseño del patrón. ')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 20. ] Ya en este punto se identifica parte delantera y parte posterior.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 109.
              span Identificación y diferenciación de las piezas delantera y posterior de la blusa
            img(src="@/assets/curso/temas/tema1/tarjeta10/imagen21.svg", alt='La imagen detalla dos piezas de un patrón de costura para la parte delantera y trasera de una prenda. Ambas piezas tienen pinzas marcadas para ajustar el contorno del busto y la cintura, con puntos de referencia y líneas guía que facilitan el ensamblaje y la confección.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 21. ] Para trazar la pechera o el cruce de botonadura se deben eliminar todos los puntos del centro frente. En el grupo de herramientas #[b editar ] escoja la herramienta #[b extender en paralelo ] y seleccione la #[b línea centro frente ] en el sentido de las manecillas del reloj; en la ventana emergente asigne la medida del cruce de botonadura.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 110.
              span Extensión del centro frente para la construcción de la pechera o cruce de botonadura
            img(src="@/assets/curso/temas/tema1/tarjeta10/imagen22.svg", alt='La imagen expone la forma como Para trazar la pechera o el cruce de botonadura, elimine todos los puntos del centro frente. En el grupo de herramientas de edición, seleccione la herramienta de extensión en paralelo y marque la línea del centro frente en el sentido de las manecillas del reloj. En la ventana emergente, asigne la medida del cruce de botonadura.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 22. ] Al realizar la extensión utilice la herramienta crear un #[b contorno interno paralelo al tramo seleccionado], esta permite crear o extender el cruce de botonadura como se hace de manera manual sobre papel.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 111.
              span Creación de un contorno paralelo para definir el cruce de botonadura mediante herramientas de edición
            img(src="@/assets/curso/temas/tema1/tarjeta10/imagen23.svg", alt='La imagen detalla la interfaz de un software de diseño de patrones, específicamente en la funcionalidad de crear una línea paralela a un segmento. En la primera ventana emergente, se configuran la distancia y los puntos de extensión de la nueva línea paralela. En la segunda ventana emergente, se pregunta si también se debe crear un punto sobre el contorno extendido. A la derecha, se expone una pieza de patrón con el centro frente y las pinzas marcadas.')

    .mb-5 
      p Para una mejor comprensión del tema revisar el siguiente video de “blusa hasta la cadera delantero”. 
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/nK68BdFTM6Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Blusa hasta la cadera delantero

    p Para una mejor comprensión del tema revisar el siguiente video de “blusa hasta la cadera posterior”. 
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/SGyBgw1NNlk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Blusa hasta la cadera posterior


    Separador    
    #t_1_7.titulo-segundo.color-acento-contenido
      h2 1.7  Corte princesa y francés - Optitex

    .tarjeta.bgi-2.borde-redondo.p-4.p-lg-5.mb-5(data-aos="fade")
      .tarjeta.bg-white.p-4
        PasosB.color-primario
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p.mb-4 #[b 1. ] Antes de iniciar el corte princesa y el corte francés se hará el corte de almilla, trasladando la parte delantera hacia la parte posterior. A partir del punto cuello hombro y hombro sisa marque el recorrido de la almilla; una los dos puntos con la herramienta #[b dibujar]. Seleccionar la herramienta #[b cortar], opción #[b cortar a pieza a lo largo de un interno. ]
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 112.
                span Herramienta cortar a pieza a lo largo de un interno para el corte princesa
              img(src="@/assets/curso/temas/tema1/tarjeta11/imagen1.svg", alt='La imagen detalla dos piezas de patrón, una delantera y otra trasera, ambas con pinzas marcadas. En la parte superior, se expone una opción del menú del software de diseño de patrones, que permite “Cortar la pieza a lo largo de un interno”. Esta función facilita la modificación del patrón siguiendo líneas internas definidas, como las de las pinzas o las líneas de ajuste.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b 2. ] Dé clic y verifique que aparece un hilo de tela independiente sobre la pieza que se quiere cortar. De igual manera, se habilita la ventana emergente de costuras, si se desea se puede asignar el margen de costura o en este caso como se viene trabajando, no se asigna margen de costura.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 113.
                span Configuración del corte con la herramienta cortar a pieza
              img(src="@/assets/curso/temas/tema1/tarjeta11/imagen2.svg", alt='La imagen expone una ventana de configuración del software de diseño de patrones, titulada “Símbolos de Costura”. Aquí se pueden definir los tipos de líneas de costura, el final de las costuras y las cintas de sesgo. A la derecha, se presenta una pieza de patrón con ajustes en las pinzas y otros detalles. La ventana de configuración permite personalizar los símbolos y las líneas que se utilizarán en el diseño del patrón para una mayor precisión en la confección. ')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p.mb-4 #[b 3. ] Verificar que la pieza se puede trasladar o mover.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 114.
                span Verificación del corte mediante movimiento de la pieza
              img(src="@/assets/curso/temas/tema1/tarjeta11/imagen3.svg", alt='La imagen expone la forma como se puede  verificar que la pieza se puede trasladar o mover, para facilitar el proceso.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b 4. ] Para poder unir la pieza al posterior se debe validar la medida de los escotes, diríjase al grupo de herramientas #[b insertar], opción #[b voltear pieza] y seleccione #[b volteo horizontal. ]
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 115.
                span Volteo horizontal de la pieza con la herramienta voltear pieza
              img(src="@/assets/curso/temas/tema1/tarjeta11/imagen4.svg", alt='La imagen expone la forma como puede  unir la pieza al posterior, primero valide la medida de los escotes. Luego, vaya al grupo de herramientas “Insertar”, seleccione la opción “Voltear pieza” y elija “Volteo horizontal”.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p.mb-4 #[b 5. ] Para que coincida hombro con hombro diríjase al grupo de herramientas #[b insertar], opción #[b voltear pieza] y seleccione #[b volteo vertical. ]
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 116.
                span Volteo vertical de la pieza con la herramienta voltear pieza
              img(src="@/assets/curso/temas/tema1/tarjeta11/imagen5.svg", alt='La imagen expone la forma para alinear los hombros, vaya al grupo de herramientas “Insertar”, seleccione la opción “Voltear pieza” y elija “Volteo vertical”. ')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b 6. ] Para unir las piezas diríjase a la #[b herramienta piezas], opción #[b recorrido]. Haga clic en la pieza que se cortó el delantero y la parte posterior, y haga clic sobre la línea de hombro para unir la pieza.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 117.
                span Unión de piezas con la herramienta recorrido
              img(src="@/assets/curso/temas/tema1/tarjeta11/imagen6.svg", alt='La imagen expone la forma como debe unir las piezas, vaya a la herramienta “Piezas” y seleccione la opción “Recorrido”. Haga clic en la pieza cortada del delantero y en la parte posterior, luego haga clic en la línea del hombro para unirlas. ')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p.mb-4 #[b 7. ] Para fusionar las #[b piezas], en el grupo de herramientas piezas seleccione #[b unir piezas o unir partes. ]
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 118.
                span Fusión de piezas con la herramienta unir piezas
              img(src="@/assets/curso/temas/tema1/tarjeta11/imagen7.svg", alt='La imagen explica como se debe  unir las piezas, dirígete a la herramienta “Unir piezas”, selecciona la opción “Recorrido”, haz clic en la pieza cortada del delantero y en la parte posterior, y luego haz clic en la línea del hombro. En la ventana emergente “Unir piezas”, configura las opciones necesarias y haz clic en “OK”. ')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b 8. ] Luego de fusionadas las piezas si no se identifican curvas suaves en cada unión suavice los puntos; tome la herramienta #[b selección], haga clic sobre el punto y asigne atributo #[b curva]. Con la herramienta #[b mover punto] deslice el mouse hasta suavizar la curva. De igual manera, suavice el punto de hombro escote.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 119.
                span Suavizado de curvas con la herramienta selección
              img(src="@/assets/curso/temas/tema1/tarjeta11/imagen8.svg", alt='La imagen describe como una vez fusionadas las piezas, si no se presentan curvas suaves en cada unión, suavice los puntos. Utilice la herramienta de selección, haga clic sobre el punto y asigne el atributo de curva. Luego, con la herramienta de mover puntos, deslice el mouse hasta suavizar la curva. Repita el proceso para suavizar el punto en el hombro y el escote. ')
          .row.justify-content-center
            .col-lg-4.col-md-12.mb-4.mb-md-0
              p.mb-4 #[b 9. ] Ya en este punto se identifica la corrección de las uniones en cada uno de los puntos de hombro. Si el hilo de tela que se identifica en la pieza no corresponde al hilo de tela del trazo o corte proceda a modificarlo con la opción #[b mover interno ] (tecla rápida I). Arrastre o mueva el hilo de tela de la pieza delantera, haciendo intersección sobre el hilo de la tela posterior, haga clic sobre este; se presenta que el hilo de tela se modifica quedando paralelo al centro atrás.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 120.
                span Corrección del hilo de tela con la herramienta mover interno
              img(src="@/assets/curso/temas/tema1/tarjeta11/imagen9.svg", alt='La imagen expone tres vistas de un patrón de costura en color azul, con líneas y puntos de control que delinean su forma. Cada vista parece representar diferentes ángulos o ajustes del mismo patrón, posiblemente relacionados con las modificaciones en la estructura del diseño de una prenda. Las líneas negras y los puntos de control rosa indican las costuras y ajustes precisos en el diseño del patrón, mientras que las flechas y medidas sugieren direcciones y longitudes específicas para el corte y confección. ')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b 10. ] Lo ideal es mover los hilos de tela en tal punto que no interfieran con los cortes que se van a trabajar. Para realizar los cortes, en el grupo de herramientas #[b pieza] seleccione #[b cortar], opción #[b cortar pieza.] Haga clic sobre el punto de hombro, y en la ventana emergente, en la opción #[b proporcional], asignar 0.5 para que quede en la mitad.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 121.
                span Corte de la pieza desde el hombro con la herramienta cortar pieza
              img(src="@/assets/curso/temas/tema1/tarjeta11/imagen10.svg", alt='La imagen expone una interfaz de software de diseño de patrones, donde se detalla la opción de “Cortar a pica” en el menú superior. Además, se presenta un cuadro de diálogo titulado “Atributos de Punto”, donde se pueden ajustar diversos parámetros como el tipo de punto, las coordenadas X e Y, la distancia, y el ángulo. Estas herramientas permiten realizar ajustes precisos en el diseño del patrón, facilitando la creación y modificación de puntos clave en la pieza. ')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p.mb-4 #[b 11. ] Vaya al vértice de pinza, posteriormente al primer lado de pinza por cintura, y finalice en el primer lado de pinza por largo total. En la ventana emergente de #[b costura] haga clic en el botón #[b cancelar], identifique el traslado o movimiento del corte.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 122.
                span Traslado del corte desde la pinza con la herramienta cortar pieza
              img(src="@/assets/curso/temas/tema1/tarjeta11/imagen11.svg", alt='Para suavizar las uniones, use la herramienta de selección para hacer clic en los puntos de las curvas y asigne el atributo de curva. Luego, con la herramienta de mover puntos, deslice el mouse hasta suavizar las curvas en las uniones, incluyendo el punto del hombro y escote. ')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b 12. ] Repita el ejercicio hasta generar el corte de costado. Identifique cada una de las piezas, centro, frente, costado y pinza.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 123.
                span Identificación de piezas después del corte de costado
              img(src="@/assets/curso/temas/tema1/tarjeta11/imagen12.svg", alt='La imagen describe como suavizar las uniones, para ello utilice la herramienta de selección para hacer clic en los puntos de las curvas y asigne el atributo de curva. Luego, con la herramienta de mover puntos, deslice el mouse hasta suavizar las curvas en las uniones, incluyendo los puntos en los hombros y escotes. ')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p.mb-4 #[b 13. ] En la pieza de costado identifique la pinza de recuperación de talle, para cerrar la pinza, en el menú herramientas, opción #[b escalado], seleccione #[b cerrar pinza]. En la ventana emergente #[b fijar pinza] seleccione #[b intermedia entre primer y segundo segmento de pinza.]
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 124.
                span Cierre de pinza con la herramienta cerrar pinza
              img(src="@/assets/curso/temas/tema1/tarjeta11/imagen13.svg", alt='La imagen describe como suavizar las uniones, para ello utilice la herramienta de selección para hacer clic en los puntos de las curvas y asigne el atributo de curva. Luego, con la herramienta de mover puntos, deslice el mouse hasta suavizar las curvas en las uniones, incluyendo los puntos en los hombros y escotes. ')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b 14. ] Suavice los vértices de pinza en cada uno de los cortes.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 125.
                span Suavizado de vértices de pinza en las piezas cortadas
              img(src="@/assets/curso/temas/tema1/tarjeta11/imagen14.svg", alt='La imagen describe dos patrones de costura para una prenda de vestir, probablemente una blusa o una camisa. Cada patrón está coloreado en azul claro y tiene líneas y puntos que indican las líneas de corte y costura. La pieza de la izquierda parece ser la parte delantera del patrón, y la pieza de la derecha, la parte trasera. Ambos patrones tienen flechas y textos que posiblemente indican instrucciones de ensamblaje o alineación.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p.mb-4 #[b 15. ] Repita los mismos pasos en la parte posterior para generar el corte princesa en la espalda.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 126.
                span Generación del corte princesa en la espalda
              img(src="@/assets/curso/temas/tema1/tarjeta11/imagen15.svg", alt='La imagen detalla cuatro patrones de costura para una prenda, con etiquetas y flechas que indican instrucciones de ensamblaje. La cuarta pieza está coloreada en azul claro.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b 16. ] Para generar el corte francés en cualquiera de las dos piezas repita los pasos anteriores, partiendo desde sisa, que es donde sale el corte francés.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 127.
                span Generación del corte francés desde la sisa
              img(src="@/assets/curso/temas/tema1/tarjeta11/imagen16.svg", alt='La imagen detalla dos patrones de costura, uno de los cuales está coloreado en azul claro. Las piezas tienen etiquetas y flechas que indican instrucciones de ensamblaje. ')

    p Para una mejor comprensión del tema revisar el siguiente video de “cortes princesa y francés”. 
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/FV13Ljc1TxM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Cortes princesa y francés


    Separador    
    #t_1_8.titulo-segundo.color-acento-contenido
      h2 1.8  Modelos de faldas - Optitex

    .tarjeta.bgi-1.p-4.mb-5(data-aos="fade")
      SlyderA(tipo="b")
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 1. ] Para el trazo de tres modelos de falda: falda media campana (página 36), falda con vuelo (página 37) y falda sirena revise en el #[b manual de patronaje SENA (página 34). ]
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 128.
              span Preparación del patrón base para modelos de falda
            img(src="@/assets/curso/temas/tema1/tarjeta12/imagen1.svg", alt='La imagen describe una captura de pantalla de un software de diseño de patrones de costura. En la parte superior hay un menú desplegable con opciones relacionadas con pliegues y pinzas. Debajo del menú, se presente un patrón de costura coloreado en azul claro, con una flecha y etiquetas que indican instrucciones de ensamblaje.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 2. ] Se trabajará la falda de dos pinzas para generar el vuelo hacia el ruedo, cree el primer traslado, tome la herramienta #[b pinza], opción #[b añadir y girar pinza. ]
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 129.
              span Creación y giro de pinza con la herramienta añadir y girar pinza
            img(src="@/assets/curso/temas/tema1/tarjeta12/imagen2.svg", alt='La imagen describe tres patrones de costura, todos coloreados en azul claro y etiquetados con instrucciones y flechas para el ensamblaje. Además, hay una ventana emergente de “Atributos de Punto” que parece ser parte del software de diseño de patrones, detalla las opciones para ajustar los detalles de las costuras y las pinzas. ')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 3. ] Acérquese con el puntero al vértice de pinza, una vez cambie de color dé clic para seleccionarla y #[b arrastre] hasta el ruedo, en el recuadro #[b atributos de punto] proporcione la ubicación deseada del punto al cual se requiera trasladar la pinza.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 130.
              span Traslado de pinza al ruedo mediante la herramienta añadir y girar pinza
            img(src="@/assets/curso/temas/tema1/tarjeta12/imagen3.svg", alt='La imagen expone tres patrones de costura, todos coloreados en azul claro y con etiquetas y flechas que indican instrucciones de ensamblaje. El primer patrón tiene líneas de pinzas en la parte superior. El segundo patrón incluye una línea verde adicional que podría representar una modificación o ajuste. El tercer patrón indica una línea discontinua y una línea verde que indica un posible cambio en el diseño o la posición de alguna parte del patrón. ')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 4. ] Lleve el puntero a cualquier parte del costado de la falda, haga clic, gire, haga clic y traslade la pinza.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 131.
              span Traslado de pinza al costado con la herramienta añadir y girar pinza
            img(src="@/assets/curso/temas/tema1/tarjeta12/imagen4.svg", alt='La imagen expone cinco patrones de costura, todos coloreados en azul claro y con etiquetas y flechas que indican instrucciones de ensamblaje. Algunos patrones tienen líneas discontinuas y verdes que indican modificaciones o ajustes en el diseño. En la parte superior central, hay una ventana emergente de “Atributos de Punto” que forma parte del software de diseño, mostrando opciones para ajustar los detalles de las costuras y las pinzas. ')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 5. ] Se realiza el mismo procedimiento trasladando la otra pinza, una vez cambie de color el vértice de pinza, haga clic para seleccionar y arrastre hasta el ruedo dando clic sobre este, en el recuadro #[b atributos de punto ] indique la #[b ubicación deseada], haga clic en cualquier parte del costado, gire, haga clic y traslade pinza.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 132.
              span Traslado de la segunda pinza con la herramienta añadir y girar pinza
            img(src="@/assets/curso/temas/tema1/tarjeta12/imagen5.svg", alt='La imagen expone cuatro patrones de costura, todos coloreados en azul claro, con etiquetas y flechas que indican instrucciones de ensamblaje. Algunos patrones tienen líneas discontinuas, probablemente para indicar ajustes o pliegues. A la izquierda de la imagen, hay un menú desplegable del software de diseño con varias opciones de herramientas para trabajar con los patrones. ')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 6. ] Haga clic derecho en la herramienta #[b selección], elija la pinza a eliminar y suprima cada una de las líneas para limpiar la pieza.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 133.
              span Eliminación de líneas auxiliares con la herramienta selección
            img(src="@/assets/curso/temas/tema1/tarjeta12/imagen6.svg", alt='La imagen expone dos patrones de costura, ambos coloreados en azul claro y con líneas y puntos que indican detalles de ensamblaje. El patrón de la izquierda tiene una flecha y una línea que podría representar una dirección del grano o una pinza. El patrón de la derecha parece ser una representación ampliada de una sección de un patrón, exponiendo más detalles en los puntos de ajuste o costura. ')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 7. ] Para suavizar los puntos que se generaron por los traslados de pinza seleccione los puntos en el sentido de las manecillas del reloj, haga clic en el último punto.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 134.
              span Suavizado de curvas mediante las propiedades del punto
            img(src="@/assets/curso/temas/tema1/tarjeta12/imagen7.svg", alt='La imagen presenta tres paneles de propiedades del software de diseño de patrones, todos titulados “Propiedades”. Cada panel tiene varias opciones ajustables como “Escalado”, “Curva”, “Conectado”, “Nombre”, “Ángulo”, “Costura” y “Punto alternativo de partida”. Las casillas de verificación permiten al usuario seleccionar o deseleccionar estas opciones para ajustar las características del patrón. ')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 8. ] En la pestaña #[b propiedades] se identifica que los puntos tienen atributo de #[b escalado], desmárquelo y señale de #[b curva.]
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 135.
              span Cambio del atributo de escalado a curva en los puntos del contorno
            img(src="@/assets/curso/temas/tema1/tarjeta12/imagen8.svg", alt='La imagen detalla cuatro patrones de costura, todos coloreados en azul claro y con líneas y puntos que indican detalles de ensamblaje. Tres de los patrones parecen ser secciones ampliadas, mostrando más detalles en los puntos de ajuste o costura. Uno de los patrones (izquierda) tiene una línea que podría representar una dirección del grano o una pinza. Los otros patrones describen curvas y puntos de referencia para el ensamblaje. ')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 9. ] Haga clic en los puntos que no se requieren, y luego suprimir.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 136.
              span Eliminación de puntos innecesarios para depurar el contorno
            img(src="@/assets/curso/temas/tema1/tarjeta12/imagen9.svg", alt='La imagen detalla dos patrones de costura coloreados en azul claro. El patrón de la izquierda tiene una flecha y líneas que indican instrucciones de ensamblaje, probablemente para la dirección del grano o una pinza. El patrón de la derecha parece ser una sección más grande, también con una flecha similar. Ambas piezas tienen líneas punteadas en la parte inferior que podrían indicar un borde o una línea de corte adicional. ')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 10. ] Con ayuda de una línea guía ubique el ruedo de la falda centro frente y verifique que la curva no sobrepase la línea escuadrada.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 137.
              span Verificación y ajuste de la curva del ruedo con línea guía
            img(src="@/assets/curso/temas/tema1/tarjeta12/imagen10.svg", alt='La imagen detalla varios patrones de costura, todos coloreados en azul claro y con líneas y puntos que indican detalles de ensamblaje. Hay un panel de “Propiedades” en el centro que permite ajustar características como “Escalado”, “Curva” y “Conectado”. Los patrones incluyen flechas y líneas que indican la dirección del grano o las pinzas, y algunos tienen líneas punteadas que podrían representar bordes o líneas de corte adicionales. ')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 11. ] Haga clic en los puntos de la cintura en sentido de las manecillas del reloj, en la pestaña #[b propiedades ] quite el atributo de #[b escalado] y asigne el atributo de #[b curva], suprima uno de los dos puntos y verifique que la línea guía de la curva no sobrepase la línea escuadrada.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 138.
              span Ajuste de la curva de cintura mediante las propiedades de los puntos
            img(src="@/assets/curso/temas/tema1/tarjeta12/imagen11.svg", alt='La imagen expone varios patrones de costura, algunos coloreados en azul claro y otros sin color, con etiquetas y flechas que indican instrucciones de ensamblaje. En la parte superior hay una ventana del software titulada “Ventana piezas” que detalla las diferentes piezas de una falda. Los patrones incluyen líneas y flechas que indican la dirección del grano y posibles pinzas o pliegues, con líneas punteadas que podrían representar bordes o líneas de corte adicionales.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 12. ] Seleccione en la ventana piezas otra falda; para ajustar el hilo de tela seleccione la herramienta #[b copiar o mover interno], arrastre al otro hilo de tela y haga clic.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 139.
              span Ajuste del hilo de tela con la herramienta copiar o mover interno
            img(src="@/assets/curso/temas/tema1/tarjeta12/imagen12.svg", alt='La imagen describe una captura de pantalla de un software de diseño de patrones. A la izquierda, hay un menú desplegable con varias opciones relacionadas con la manipulación de líneas y piezas. En la parte superior, una ventana titulada “Ventana piezas” expone diferentes piezas de una falda. Abajo, se presenta parte de un patrón de costura coloreado en azul claro con líneas y flechas que indican instrucciones de ensamblaje. Las opciones del menú permiten al usuario trabajar con las líneas y ajustar detalles del patrón. ')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 13. ] Haga clic derecho sobre la falda previamente modificada, escoja la opción #[b limpiar pieza], posteriormente seleccione #[b actualizar original], suprima cada una de las líneas para limpiar la mesa de trabajo. Marque línea guía.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 140.
              span Limpieza y actualización de la pieza mediante las opciones de edición
            img(src="@/assets/curso/temas/tema1/tarjeta12/imagen13.svg", alt='La imagen detalla dos patrones de costura coloreados en azul claro, con flechas y líneas que indican instrucciones de ensamblaje. Entre los dos patrones, hay una ventana emergente titulada “Atributos de Punto”. Esta ventana permite ajustar diversos parámetros del punto, como el tipo de punto (curva o escalado), la posición (X, Y), distancia, ángulo y los puntos previos y siguientes. La ventana también incluye opciones para mover el punto sobre el contorno y definir si es proporcional o absoluto. ')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 14. ] Tome la herramienta #[b construir pieza], haga clic sobre la pieza a seleccionar, haga clic para separar la pieza que se desea ampliar o modificar.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 141.
              span Separación de secciones con la herramienta construir pieza
            img(src="@/assets/curso/temas/tema1/tarjeta12/imagen14.svg", alt='La imagen expone tres patrones de costura. El primer patrón a la izquierda está dividido en dos colores: la parte superior en azul claro y la parte inferior en verde, con flechas y líneas que indican instrucciones de ensamblaje. En la parte superior izquierda de la imagen, hay un menú desplegable con opciones como “Definir pieza”, “Definir Tamaño”, “Definir piezas”, “Construir zonas piezas”, y “Definir zonas piezas”. Los otros dos patrones también están coloreados en azul claro, con líneas y flechas similares que indican detalles del ensamblaje. ')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 15. ] Seleccione en el sentido de las manecillas del reloj dónde se va a dar el vuelo de la pieza. Seleccione en el grupo de herramientas #[b aflojar], opción #[b abrir múltiples flojos] e indique el número de flojos que se quiere trabajar, los flojos corresponden al número de cortes para dar amplitud.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 142.
              span Configuración de pliegues múltiples con la herramienta abrir múltiples aflojos
            img(src="@/assets/curso/temas/tema1/tarjeta12/imagen15.svg", alt='La imagen detalla una captura de pantalla de un software de diseño de patrones. En la parte superior izquierda, hay un menú desplegable con opciones relacionadas con “Ajustar”, incluyendo “Insert Ajuste”, “Abrir Múltiples Ajustes” y “Cerrar Ajuste”. En la parte inferior derecha, hay una ventana emergente titulada “Abrir Pliegues múltiples” que permite al usuario configurar el número de pliegues, el ancho, la posición de los primeros y últimos puntos, y el ángulo de los pliegues. ')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 16. ] En la ventana emergente, en la sección #[b anchos], defina el rango que se quiere trabajar, #[b desde el inicio hasta el final] de las amplitudes.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 143.
              span Definición de amplitudes con la herramienta abrir pliegues múltiples
            img(src="@/assets/curso/temas/tema1/tarjeta12/imagen16.svg", alt='La imagen describe  la ventana emergente, en la sección de anchos, donde se define el rango que se desea trabajar, desde el inicio hasta el final de las amplitudes.  ')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 17. ] Para suavizar la curva tome los puntos en el sentido de las manecillas del reloj, quite el atributo de #[b escalado ] y asigne atributo de #[b curva.]
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 144.
              span Suavizado de curvas mediante la edición de atributos de puntos
            img(src="@/assets/curso/temas/tema1/tarjeta12/imagen17.svg", alt='La imagen expone  la forma como se puede  suavizar la curva, en donde debe seleccionar los puntos en el sentido de las manecillas del reloj, eliminar el atributo de escalado y asignar el atributo de curva. ')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 18. ] Repetir el ejercicio para generar más vuelos, las alturas y anchos se pueden modificar.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 145.
              span Desarrollo de variantes de falda mediante control del vuelo
            img(src="@/assets/curso/temas/tema1/tarjeta12/imagen18.svg", alt='La imagen presenta un software de diseño de patrones de falda. En el centro, hay dos patrones: uno rectangular a la izquierda y dos patrones curvados a la derecha, con el último patrón a la derecha resaltado en azul. En la parte superior, hay íconos de diferentes tipos de patrones de falda.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b 19. ] Para dividir la parte superior de la falda y hacer que coincida con el corte o con el vuelo marque la línea guía a la altura de la separación.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 146.
              span Separación de la pretina mediante la herramienta Pieza
            img(src="@/assets/curso/temas/tema1/tarjeta12/imagen19.svg", alt='La imagen muestra una interfaz de software de diseño de patrones de costura. En ella, se presentan tres patrones de falda, cada uno en una etapa diferente de edición, con áreas sombreadas en verde y azul para resaltar secciones específicas. En la esquina inferior izquierda, hay un menú desplegable con varias opciones, como “Delinear tramos”, “Delinear pieza” y “Construir zonas piezas”, entre otras.')

    p Para una mejor comprensión del tema le invito a revisar el video “modelos de faldas”.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/oNEVi41jzMk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Modelos de faldas


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
