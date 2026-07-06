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
        h3.mb-0.ms-2 Reconocimiento de interfaz de Optitex
    
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
          span Interfaz del #[em software] de patronaje digital Optitex
        figure
          img(src="@/assets/curso/temas/tema1/imagen1.png", alt="Captura de pantalla del software Optitex con herramientas y paneles para el diseño digital de patrones de confección.")


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
                span.text-bold a)
                span.mb-0 En la barra de menú, seleccione vista y luego la opción caja de herramientas para activar la ventana que contiene las herramientas de trabajo.
              li 
                span.text-bold b) 
                span.mb-0 Otra forma de acceder a las herramientas es ubicar el cursor debajo de la barra de menú, hacer clic derecho y seleccionar las herramientas disponibles en el menú contextual.
              li 
                span.text-bold c) 
                span.mb-0 Las herramientas pueden activarse o desactivarse según las necesidades del trabajo. Para ello, ubique el cursor sobre el nombre de la herramienta y haga clic para cambiar su estado. 
          .col-lg-6.col-md-6
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 2. 
              span Uso de herramientas de edición y selección en Optitex
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta1/imagen1.svg", alt='Software de patronaje que muestra el menú Ventana con opciones para activar y visualizar diferentes capas de trabajo.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b Ubique el cursor en cada herramienta, con un clic se desactivan. ]
            p Como se puede observar en la gráfica, las herramientas no están disponibles; de esta manera se puede despejar el área de trabajo y activarlas nuevamente cuando sea necesario.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 3.
              span Menú de herramientas de visualización en Optitex
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta1/imagen2.svg", alt='Software de patronaje con el menú de visualización desplegado para mostrar opciones de capas y elementos del área de trabajo.')


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
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta2/imagen1.png", alt='Captura de pantalla de Optitex que muestra la ruta para ingresar a Preferencias desde el menú superior Herramientas.')
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
              figure  
                img(src="@/assets/curso/temas/tema1/tarjeta2/imagen2.png", alt='Pantalla de la ventana de preferencias de Optitex con opciones de configuración de colores y apariencia del área de trabajo.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p.mb-4 Para cambiar el sistema de medición con el que desea trabajar, siga esta ruta en el menú lateral:
              ol.lista-ol--cuadro.fa-ol.mb-4
                li 
                  .lista-ol--cuadro__vineta
                    span A
                  span.mb-0 Seleccione la carpeta principal.
                li 
                  .lista-ol--cuadro__vineta
                    span B
                  span.mb-0 Haga clic en la subcarpeta unidades de trabajo.
              p.mb-0 A la derecha, localice el campo de selección desplegable titulado unidad. Al desplegarlo, elija la opción requerida según sus necesidades de patronaje: centímetros, milímetros, metros, pulgadas, pies o yardas.
            .col-lg-6.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 6.
                span Configuración de unidades de medida en preferencias de Optitex
              figure  
                img(src="@/assets/curso/temas/tema1/tarjeta2/imagen3.png", alt='Pantalla de la ventana de preferencias de Optitex mostrando opciones de unidades de medida como centímetros, milímetros y pulgadas.')
          .row.justify-content-center
            .col-lg-6.col-md-5.mb-4.mb-md-0
              p.mb-4 Dentro de la ventana de preferencias, navegue en el menú lateral izquierdo por la ruta de carpetas: colores y configuración.
              p.mb-4 En el panel central, localice el campo de texto etiquetado como rellena pieza. A la derecha de este, al desplegar el menú de opciones, seleccione el criterio deseado para controlar el sombreado interno de los patrones:
              ol.lista-ol--cuadro.fa-ol
                li 
                  .lista-ol--cuadro__vineta
                    span A
                  span.mb-0 #[b Opción "todos":] aplica el relleno a la totalidad de las piezas contenidas en el archivo.
                li 
                  .lista-ol--cuadro__vineta
                    span B
                  span.mb-0 #[b Opción "ninguna":] desactiva el sombreado interno en todas las piezas, mostrando únicamente sus líneas perimetrales.
                li 
                  .lista-ol--cuadro__vineta
                    span C
                  span.mb-0 #[b Opción "selección":] aplica el relleno de manera exclusiva a la pieza o molde que se encuentre activo en el área de diseño.
            .col-lg-6.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 7.
                span Configuración de unidades de medida en preferencias de Optitex
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta2/imagen4.png", alt='Captura de pantalla de la ventana de preferencias de Optitex mostrando opciones de unidades de medida como centímetros, milímetros y pulgadas.')
            p.mb-0 Asimismo, en esta misma sección de la interfaz, el campo de texto metodo relleno permite clasificar y ordenar el sombreado mediante su respectivo menú desplegable bajo tres criterios: por material, pieza o calidad.
          .row.justify-content-center
            .col-lg-6.col-md-5.mb-4.mb-md-0
              p.mb-4 Para modificar la apariencia y el contraste de la interfaz, navegue en el menú lateral izquierdo por la ruta de carpetas: colores, general.
              p.mb-4 Al seleccionar esta opción, el panel de la derecha mostrará dos listas de campos con controles desplegables para su configuración:
              ol.lista-ol--cuadro.fa-ol
                li 
                  .lista-ol--cuadro__vineta
                    span A
                  span.mb-0 Lista "Área de trabajo"
              p.mb-4 Regula los elementos del fondo de la pantalla mediante los siguientes campos de texto:
              ul.lista-ul--color.fa-ul.color-primario.mb-0
                li.mb-0 
                  i.fas.fa-plus
                  span.mb-0 #[b Fondo:] superficie principal de diseño.
                li.mb-0
                  i.fas.fa-plus
                  span.mb-0 #[b Color de línea guía:] ejes de referencia en pantalla.
                li.mb-0 
                  i.fas.fa-plus
                  span.mb-0 #[b Rejilla y Rayas:] cuadrícula trasera de soporte.
                li.mb-0 
                  i.fas.fa-plus
                  span.mb-0 #[b Color de las reglas:] barras de medición métricas.
            .col-lg-6.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 8.
                span Configuración de colores y apariencia del área de trabajo en Optitex
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta2/imagen5.png", alt='Ventana de preferencias de un software de patronaje con la opción General seleccionada y una paleta de colores para personalizar el área de trabajo.')
            ol.lista-ol--cuadro.fa-ol
              li 
                .lista-ol--cuadro__vineta
                  span B
                span.mb-0 Lista "Pieza
              p.mb-3 Regula la visualización de los moldes mediante los siguientes campos de texto:
              ul.lista-ul--color.fa-ul.color-primario.mb-3
                li.mb-0 
                  i.fas.fa-plus
                  span.mb-0 #[b Color de relleno:] tono de la superficie interna del molde.
                li.mb-0 
                  i.fas.fa-plus
                  span.mb-0 #[b Rellena el set de modelo actual:] sombreado del conjunto activo.
                li.mb-0 
                  i.fas.fa-plus
                  span.mb-0 #[b Color de la pieza seleccionada:] destaca el patrón activo bajo el cursor.
                li.mb-0 
                  i.fas.fa-plus
                  span.mb-0 #[b Color para contorno seleccionado:] modifica el contraste de la línea del borde del molde.
                li.mb-0 
                  i.fas.fa-plus
                  span.mb-0 #[b Punto de piquete seleccionado:] apariencia de las muescas técnicas.
                li.mb-0 
                  i.fas.fa-plus
                  span.mb-0 #[b Marque el color de punto:] coordenadas o nodos de los patrones.
              p.mb-0 Control de selección
              p.mb-0 Al presionar sobre cualquiera de estos campos, se abrirá un cuadro flotante que contiene opciones predefinidas y un botón inferior de texto titulado #[em "More Colors"] (Más colores) para un ajuste preciso.


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
          figure
            img(src="@/assets/curso/temas/tema1/tarjeta3/imagen4.png", alt='OptiTex donde se muestra la opción Ventana Pieza seleccionada desde el menú Vista para visualizar el panel de piezas.')
      .row(titulo="Opción caja de herramientas")
        .col-lg-4.col-md-4.mb-4.mb-md-0
          p En la barra de #[b menú vista] habilite la opción #[b caja de herramientas].
          p En esta ventana se encuentran todas las herramientas que están diseñadas para el proceso de actualización y transformación de las piezas que se encuentran en el área de trabajo. Las herramientas se encuentran divididas en grupos de acuerdo con su funcionalidad.
        .col-lg-7.col-md-8
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 10.
            span Visualización de la caja de herramientas desde el menú vista
          figure
            img(src="@/assets/curso/temas/tema1/tarjeta3/imagen1.png", alt='Software de patronaje con el menú Ventana abierto y la opción caja Herramientas resaltada para mostrar las herramientas de trabajo.')
      .row(titulo="Opción vista y selección")
        .col-lg-4.col-md-4.mb-4.mb-md-0
          p En la barra de #[b menú vista] habilite la opción #[b vista y selección.]
          p En esta ventana se habilita la información de la pieza, puntos o elementos internos que se quieran mostrar u ocultar en las piezas del archivo.
        .col-lg-7.col-md-8
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 11.
            span Acceso a la vista de selección de atributos desde el menú vista
          figure
            img(src="@/assets/curso/temas/tema1/tarjeta3/imagen2.png", alt='OptiTex que muestra la activación de la opción Vista Selección desde el menú Vista para visualizar el panel de atributos de la pieza.')
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
              p #[b A.] Base de falda femenina talla 10. Para dar inicio haga clic derecho en el área de trabajo, dibuje un rectángulo, nombre la pieza como falda delantera:
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
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta4/imagen1.png", alt="Ventana 'crear rectángulo' con las medidas de ancho y largo para generar la pieza base de una falda, mostrada a la derecha en el área de trabajo.")
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b B.] Tome herramienta punto para asignar sobre el rectángulo los puntos necesarios para darle forma a la falda. Sobre la línea vertical derecha marcar:
              ul.lista-ul--color.fa-ul.color-primario
                li 
                  i.fas.fa-plus
                  span.mb-0 #[b Altura de cadera:] según talla (talla 10 = 18 cm).
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 13.
                span Configuración de atributos de punto escalado en el software de patronaje
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta4/imagen2.png", alt='Ventana de atributos de punto con la opción de escalado activada para modificar la posición de un punto en el patrón de una falda base.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b C.] Sobre la línea de cintura, marque:
              ul.lista-ul--color.fa-ul.color-primario
                li 
                  i.fas.fa-plus
                  span.mb-0 #[b Cintura:] ¼ de contorno de cintura + pinza.
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 14.
                span Ubicación de punto escalado lateral mediante atributos de punto en el patrón de falda base
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta4/imagen3.svg", alt='Patrón de falda base con un punto añadido en el costado y ventana de atributos de punto configurada para escalado proporcional.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b D.] Clic derecho, herramienta selección; señale punto ángulo superior derecho de rectángulo y cambie atributos, asigne atributo de curva.
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 15.
                span Activación del atributo de curva mediante las herramientas de selección y propiedades del punto
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta4/imagen4.svg", alt='Interfaz del software de patronaje mostrando la selección de herramientas, las propiedades de punto y el patrón de falda base con puntos editables visibles.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b E.] Tome herramienta mover punto (tecla rápida M), modele curva de cadera.
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 16.
                span Modelado de la curva de cadera mediante la ventana mover punto
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta4/imagen5.svg", alt='Ventana de movimiento de punto con parámetros de desplazamiento aplicada a la curva lateral de un patrón de falda.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b F.] Tome herramienta mover punto, para modificar el punto de cintura costado, subir 1 cm por costado. Marque en el eje Y 1 cm positivo y en el eje X 0.
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 17.
                span Ajuste de la línea de cintura mediante la opción mover punto
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta4/imagen6.svg", alt='Ventana de movimiento de punto con desplazamiento vertical aplicado al borde superior de un patrón de falda.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b G.] Para marcar la curva de cintura traiga una línea guía, ubique un punto en cintura con atributo de curva. Tome la herramienta mover punto y modifique la línea de cintura sin sobrepasar la línea guía trazada.
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 18.
                span Configuración de punto de curva sobre el contorno del patrón
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta4/imagen7.svg", alt='Ventana opción Mover Punto utilizada para elevar el costado de la cintura y modificar la forma superior del patrón de falda.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b H.] Para marcar la pinza, en el grupo de herramientas de insertar, tome la herramienta pinza - añadir y girar pinza.
            .col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 19.
                span Selección de la herramienta para añadir y girar pinzas en el patrón
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta4/imagen8.svg", alt='Menú de inserción del software de patronaje con la opción “Añadir y girar pinza” seleccionada sobre un patrón de falda.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b I.] Para marcar la pinza en relación con la separación de busto, tenga en cuenta la medida del primer lado de la pinza; marque en absoluto la medida del primer lado de pinza. Marque la medida de la amplitud de la pinza.
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 20.
                span Ubicación de los puntos de referencia para la pinza mediante la herramienta atributos de punto
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta4/imagen9.svg", alt='Ventanas de la herramienta Atributos de Punto utilizadas para marcar la posición y amplitud de la pinza en la línea de cintura del patrón de falda.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b J.] En la pestaña propiedades seleccione la opción profundidad, en este espacio asigne la medida de profundidad o largo de la pinza.
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 21.
                span Asignación de la profundidad de la pinza mediante el panel de propiedades
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta4/imagen10.svg", alt='Panel de Propiedades con la opción Profundidad configurada para definir el largo de la pinza en el patrón de falda.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b K.] Para modificar los hilos de tela, en la caja de herramientas líneas de aplome escoja la herramienta hilo paralelo al tramo. Seleccione en sentido de las manecillas del reloj la línea de centro frente, para dejar el aplome paralelo al centro.
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 22.
                span Definición del hilo paralelo al tramo en el patrón de falda con pinza
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta4/imagen11.svg", alt='Caja de herramientas con la opción Hilo Paralelo al Tramo seleccionada y patrón de falda con la línea de aplome ajustada.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b L.] Seleccione herramienta centrar aplome, para centrar el aplome o hilo de tela en relación con la pieza.
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 23.
                span Seleccione herramienta centrar aplome
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta4/imagen12.svg", alt='Caja de herramientas con la opción Centrar Aplome seleccionada y patrón de falda con el hilo de tela centrado respecto a la pieza.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b M.] Al finalizar la parte delantera, dé clic derecho sobre la pieza y seleccione limpiar piezas. Reemplace el original, de esta manera se actualiza la pieza en la ventana - ventana de piezas.
            .col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 24.
                span Selección de la opción reemplazar original para actualizar la pieza en la ventana de piezas
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta4/imagen13.svg", alt='Menú contextual con la opción Reemplazar Original seleccionada y ventana de piezas mostrando la actualización de la pieza de falda.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b N.] Para crear la parte posterior, dé clic derecho sobre el área de trabajo, seleccione la opción nueva pieza, posteriormente la opción crear un rectángulo. También puede acceder por la barra de menú.
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 25.
                span Selección de la opción crear rectángulo para generar la pieza
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta4/imagen14.svg", alt='Selección de las opciones Nueva pieza y Crear Rectángulo para generar la pieza posterior de la falda.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b O.] En la ventana emergente asignar el nombre de la pieza como falda posterior.
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
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta4/imagen15.svg", alt='Ventana crear rectángulo con el nombre de la pieza y las medidas de ancho y largo definidas para generar la falda posterior.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b P.] Tomar herramienta punto sobre (tecla rápida O), para asignar sobre el rectángulo los puntos necesarios para darle forma a la falda.  Sobre la línea vertical derecha, marcar:
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
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta4/imagen16.svg", alt='Ventanas de atributos de punto que muestran la configuración de puntos escalados y sus valores de proporcionalidad en la herramienta de diseño de patrones.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b Q.] Haga clic derecho en la herramienta selección; señale el punto ángulo superior derecho del rectángulo y cambie los atributos, asigne atributo de curva.
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 28.
                span Asignación del atributo de curva mediante el panel de propiedades para modelar el costado de la pieza posterior
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta4/imagen17.svg", alt='Panel de Propiedades con el atributo de curva activado y pieza posterior de la falda con la curva del costado definida.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b R.] Tome herramienta mover punto (tecla rápida M); modele curva de cadera.
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 29.
                span Modelado de la curva de cadera mediante la herramienta mover punto en la pieza posterior
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta4/imagen18.svg", alt='Ventana de la herramienta Mover Punto utilizada para ajustar la curva de cadera en el costado de la pieza posterior de la falda.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b S.] Tome herramienta mover punto, para modificar el punto de cintura costado, subir 1 cm por costado. Marque en el eje de Y 1 cm positivo y en el eje X 0.
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 30.
                span Modificación de la línea de cintura mediante la herramienta mover punto en la pieza posterior
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta4/imagen19.svg", alt='Ventanas de la herramienta Mover Punto utilizadas para elevar el costado de la cintura y ajustar la línea superior de la pieza posterior de la falda.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b T.] Baje el punto de cintura centro atrás 1 cm. Marque en el eje de Y -1 cm y en el eje X 0. Para marcar la curva de cintura, traiga una línea guía y ubique un punto en cintura con atributo de curva. Tome herramienta mover punto y modifique la línea de cintura sin sobrepasar la línea guía trazada.
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 31.
                span Ajuste de la curva de cintura mediante la herramienta mover punto y una línea guía de referencia
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta4/imagen20.svg", alt='Ventana de la herramienta Mover Punto para bajar el punto de cintura y modelar la curva siguiendo la guía en la pieza posterior.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b U.] Para marcar la pinza, en el grupo de herramientas de insertar tome la herramienta pinza, opción añadir y girar pinza. Para marcar la pinza en relación con la separación de busto, se debe tener en cuenta la medida del primer lado de la pinza, marque en absoluto la medida del primer lado de la pinza; marque la medida de la amplitud de la pinza.
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 32.
                span Ubicación de la pinza mediante la herramienta añadir y girar pinza y la definición de sus puntos de referencia
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta4/imagen21.svg", alt='Herramienta Añadir y Girar Pinza y ventana de atributos para definir la posición y amplitud de la pinza en la pieza posterior.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b V.] En la pestaña propiedades, opción profundidad, asigne la medida de profundidad o largo de la pinza.
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 33.
                span Asignación de la profundidad de la pinza mediante la pestaña propiedades
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta4/imagen22.svg", alt='Pestaña Propiedades con el parámetro de profundidad configurado para definir el largo de la pinza en la pieza posterior de la falda.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b W.] Para modificar los hilos de tela, en la caja de herramientas, opción movimiento, mover pieza interna. Tome el hilo de tela de la pieza delantera y arrastrarlo hacia la pieza posterior. 
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 34.
                span Modificación del hilo de tela mediante la opción mover pieza interna en la caja de herramientas
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta4/imagen23.svg", alt='Caja de herramientas con la opción Mover Pieza Interna y traslado del hilo de tela desde la pieza delantera hacia la posterior.')

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
      .row(titulo="Paso A")
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
          figure
            img(src="@/assets/curso/temas/tema1/tarjeta5/imagen1.svg", alt='Archivo inicial con rectángulo base y referencias para el trazado de la parte posterior de la blusa.')
      .row(titulo="Paso B")
        .col-lg-4.col-md-4.mb-4.mb-md-0
          p Haga doble clic sobre el #[b ángulo del escote ] y cambie el atributo del punto, #[b desmarcando escalado y señalando curva. ]
        .col-lg-7.col-md-8
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 36.
            span Modificación de atributos del punto en el escote mediante la ventana atributos de punto
          figure
            img(src="@/assets/curso/temas/tema1/tarjeta5/imagen2.svg", alt='Ventana Atributos de Punto utilizada para activar curva y desactivar escalado en el punto del escote.')
      .row(titulo="Paso C")
        .col-lg-4.col-md-4.mb-4.mb-md-0
          p Los ángulos del hombro y continuación de la sisa se suprimen. El patrón queda como lo señala la imagen.
        .col-lg-7.col-md-8
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 37.
            span Eliminación de los ángulos del hombro y ajuste de la línea de sisa en el patrón posterior
          figure
            img(src="@/assets/curso/temas/tema1/tarjeta5/imagen3.svg", alt='Secuencia del patrón posterior después de eliminar los ángulos del hombro y ajustar la línea de sisa.')
      .row(titulo="Paso D")
        .col-lg-4.col-md-4.mb-4.mb-md-0
          p Con la herramienta #[b medir ] se señala el segmento del hombro en el sentido de las manecillas del reloj. Haga clic en el botón #[b editar largo del segmento]; este a su vez abre la ventana largo del segmento.
          p En la ventana editar largo del segmento, escribir 12 cm para el largo y escoja la opción #[b primer horizontal]. Esta opción se selecciona porque el punto correspondiente al ángulo del hombro sisa es el que debe moverse al realizar el cambio de medida, y elija primer horizontal porque es el punto inicial.
        .col-lg-7.col-md-8
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 38.
            span Modificación de la longitud del hombro mediante la herramienta medir y la ventana editar largo del segmento
          figure
            img(src="@/assets/curso/temas/tema1/tarjeta5/imagen4.svg", alt='Uso de la herramienta Medir para ajustar la longitud del hombro desde la ventana Editar Largo del Segmento.')
      .row(titulo="Paso E")
        .col-lg-4.col-md-4.mb-4.mb-md-0
          p Ubique el punto mitad de sisa (mitad de la distancia entre el escote y altura de sisa), y marque también sobre la línea donde formará la curva de sisa.
        .col-lg-7.col-md-8
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 39.
            span Ubicación del punto medio de la sisa para la construcción de la curva mediante puntos de referencia
          figure
            img(src="@/assets/curso/temas/tema1/tarjeta5/imagen5.svg", alt='Patrón posterior con la ubicación del punto medio de la sisa y referencias para trazar la curva.')
      .row(titulo="Paso F")
        .col-lg-4.col-md-4.mb-4.mb-md-0
          p Mida  la distancia señalada en la gráfica y a esta, réstele el valor de la mitad del ancho de espalda para saber cuánto debe #[b mover el punto ] de la sisa, con el fin de darle la forma a la misma; con la herramienta mover punto, mueva en X el valor que se debe restar para darle la medida de ancho de espalda, y en Y debe quedar 0.
        .col-lg-7.col-md-8
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 40.
            span Ajuste de la posición del punto de sisa mediante la herramienta mover punto para definir el ancho de espalda
          figure
            img(src="@/assets/curso/temas/tema1/tarjeta5/imagen6.svg", alt='Uso de la herramienta Mover Punto para desplazar el punto de sisa y ajustar el ancho de espalda.')
      .row(titulo="Paso G")
        .col-lg-4.col-md-4.mb-4.mb-md-0
          p #[b Dele la forma ] a la sisa siguiendo las indicaciones de las imágenes.
        .col-lg-7.col-md-8
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 41.
            span Aplicación de herramientas para el trazado y modelado de la curva de sisa en la parte posterior
          figure
            img(src="@/assets/curso/temas/tema1/tarjeta5/imagen7.svg", alt='Secuencia de uso de herramientas para definir puntos y formar la curva de sisa en el patrón posterior.')
      .row(titulo="Paso H")
        .col-lg-4.col-md-4.mb-4.mb-md-0
          p Con la herramienta mover punto, entalle la medida de cintura correspondiente a la talla. Fije un punto con atributo de escalado a 9 cm, que corresponde a la medida de la mitad de separación del busto. Según el método de patronaje utilizado, el costado posterior es igual a la medida A-B más 1 cm. Se edita el largo del segmento de costado, siguiendo las indicaciones de la imagen.
        .col-lg-7.col-md-8
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 42.
            span Ajuste de la sisa con la herramienta Editar largo del segmento
          figure
            img(src="@/assets/curso/temas/tema1/tarjeta5/imagen8.svg", alt='Patrón posterior con sisa ajustada mediante la herramienta Editar largo del segmento y configuración del punto horizontal.') 
    

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
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta6/imagen1.png", alt='Configuración de la amplitud y profundidad de la pinza de entalle mediante la herramienta Pinza en el patrón posterior.')
        .row.justify-content-center.my-lg-4
          .col-md-6.col-lg-6.mb-4.mb-md-0
            p #[b B. ] La pinza debe llegar al punto de intersección entre altura y separación de busto. Para ello utilice la herramienta pinza, señale el punto del vértice de la #[b pinza], arrastre y seleccione el punto de intersección entre las líneas guías, haga clic y el vértice de la pinza se traslada al punto señalado.
          .col-md-6.col-lg-5
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 44.
              span Reubicación del vértice de la pinza con la herramienta Pinza
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta6/imagen2.png", alt='Ajuste del vértice de la pinza hasta el punto de intersección de las líneas guía mediante la herramienta Pinza.')
        .row.justify-content-center.my-lg-4
          .col-md-6.col-lg-6.mb-4.mb-md-0
            p #[b C. ] Para terminar el patrón, haga clic en la herramienta #[b reemplazar original ] (grupo de herramientas generales), de esta manera en la #[b barra de piezas] quedan guardados los cambios que se hicieron al rectángulo desde el inicio. Para guardar el archivo, diríjase a la barra de #[b menú archivo], opción #[b guardar como], proceder a darle un nombre al archivo, este queda con #[b extensión dsn].
          .col-md-6.col-lg-5
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 45.
              span Actualización de la pieza con la herramienta reemplazar original
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta6/imagen3.png", alt='Guardado de los cambios del patrón en la barra de piezas mediante la herramienta Reemplazar original.')


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
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta7/imagen1.svg", alt='Definición del centro frente y la altura de sisa utilizando la ventana de punto proporcional sobre el rectángulo base.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b 2. ] Trace líneas guías sobre la caída y la medida de hombro. Eleve el ángulo superior derecho del rectángulo a la intersección de las líneas guías. Para ello, se utiliza la herramienta #[b mover punto]. Haga clic sobre el punto del ángulo superior izquierdo del rectángulo, cambiar el atributo de escalado a curva y modele la curva de escote con la herramienta #[b mover punto].
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 47.
                span Modificación del escote con la herramienta mover punto
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta7/imagen2.svg", alt='Trazado de líneas guía y ajuste de la caída del hombro y la curva del escote mediante la herramienta Mover punto.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b 3. ] Trace la curva de escote utilizando la herramienta #[b punto en contorno]. Suprima los puntos de la imagen anterior para definir la línea de hombro y línea de sisa. Se puede tomar como referencia las #[b líneas guías].
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 48.
                span Trazado de la curva del escote con la herramienta punto en contorno
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta7/imagen3.svg", alt='Construcción de la curva del escote y definición de las líneas de hombro y sisa utilizando la herramienta Punto en contorno y líneas guía.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b 4. ] Seleccione la línea de hombro en #[b sentido de las manecillas del reloj]. Haga clic en el botón #[b editar largo del segmento]; en esta ventana se escribe #[b el valor a editar] que para la talla 10 corresponde a 12 cm, también seleccione la opción #[b última horizontal], según la posición de la gráfica. Al escoger esta opción se debe tener en cuenta que el punto a mover para ajustar la medida debe ser el #[b punto hombro-sisa. ]
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 49.
                span Ajuste de la línea de hombro con la herramienta editar largo del segmento
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta7/imagen4.svg", alt='Modificación de la medida del hombro mediante la herramienta Editar largo del segmento.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b 5. ] Para editar la medida de hombro, utilice la herramienta #[b medida].
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 50.
                span Verificación de la medida de hombro con la herramienta medida
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta7/imagen5.svg", alt='Barra de herramientas de la sección Pieza con el icono para transformar o modificar la forma de una pieza de patronaje resaltado.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b 6. ] Ubique el punto de #[b altura de pecho]. Para ello, se utiliza la herramienta #[b punto en contorno ] y la #[b opción proporcional 0,5]. Seleccione el atributo de escalado. La ubicación de este punto se marca también sobre la línea de sisa.
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 51.
                span Ubicación del punto de altura de pecho con la herramienta punto en contorno
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta7/imagen6.svg", alt='Marcación del punto de altura de pecho sobre el patrón utilizando la herramienta Punto en contorno y la opción proporcional.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b 7. ] Con la herramienta #[b mover punto]; corra el punto a la distancia que resulte de la resta de la medida que dio entre los dos puntos y la medida de mitad de ancho de pecho, según la talla que se esté trazando.
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 52.
                span Ajuste del ancho de pecho con la herramienta mover punto
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta7/imagen7.svg", alt='Desplazamiento del punto de pecho mediante la herramienta Mover punto para obtener la medida de ancho de pecho correspondiente a la talla.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b 8. ] Trace la curva de la sisa e identifique el punto de vértice de pinza.
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 53.
                span Trazado de la curva de sisa y ubicación del vértice de pinza
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta7/imagen8.svg", alt='Construcción de la curva de sisa con apoyo de líneas guía e identificación del punto de separación de busto para la pinza.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b 9. ] Para editar el largo de medida de costado, seleccione, los puntos en el #[b sentido de las manecillas del reloj]. De acuerdo con la figura se debe editar el último punto en forma diagonal. La medida de costado del patrón delantero #[b debe ser igual al costado del posterior. ]
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 54.
                span Ajuste del largo de costado con la herramienta editar largo del segmento
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta7/imagen9.svg", alt='Modificación de la medida del costado del patrón delantero mediante la herramienta Editar largo del segmento para igualarla al costado posterior.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b 10. ] El patrón debe quedar según la ilustración.
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 55.
                span Actualización de la pieza con la herramienta reemplazar original
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta7/imagen10.svg", alt='Guardado de la pieza modificada en la ventana de piezas mediante la herramienta Reemplazar original.')
          .row.justify-content-center
            .col-lg-4.col-md-5.mb-4.mb-md-0
              p #[b 11. ] Corregir el sentido de hilo de la tela con la herramienta #[b hilo paralelo al tramo.] Centre y aplome con la herramienta #[b nueva línea base.] Por último, actualizar los cambios en la ventana de piezas, con la opción #[b reemplazar original.]
            .col-lg-7.col-md-7
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 56.
                span Corrección del hilo de tela y actualización de la pieza con herramientas de Optitex
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta7/imagen11.svg", alt='Patrón delantero con el hilo de tela corregido y alineado mediante las herramientas de aplome y actualización de pieza.')

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
            p Para dar inicio se parte de la base superior delantera, trace una línea guía hasta la línea de cintura o largo de talle delantero.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 57.
              span Trazado de línea guía para traslado de pinza en la base superior delantera
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta8/imagen1.svg", alt='Base superior delantera y posterior con línea guía trazada hasta la cintura para iniciar el traslado de pinza.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p Traiga  una línea guía de la regla vertical y llévela hasta el ángulo #[b cintura costado.] Con la herramienta #[b mover punto,] lleve el ángulo cintura costado a la intersección de las dos líneas guías.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 58.
              span Uso de la herramienta mover punto para ajustar el costado de cintura
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta8/imagen2.svg", alt='Desplazamiento del punto de cintura costado hasta la intersección de las líneas guía mediante la herramienta Mover punto.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p Valide que la línea de cintura esté #[b totalmente recta] sobre la línea de talle delantero, y verifique con la #[b tecla F8] qué medida tiene la cintura.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 59.
              span Verificación de la medida de cintura con la herramienta medir
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta8/imagen3.svg", alt='Patrones delantero y posterior con medidas visibles para comprobar la alineación y dimensión de la cintura.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p En la línea de cintura se identifica un punto con atributo de escalado a 9 cm, este punto determina la medida de separación del busto. #[b Medida de cintura:]
            ul.lista-ul--color.fa-ul.color-primario
              li 
                i.fas.fa-plus
                span.mb-0 #[b Cintura:] ¼ contorno de cintura + pinza.
            p Al tomar como punto de partida los 9 cm, marque un punto a 12 cm para que quede exactamente la medida ¼ contorno de cintura, 17 cm + 4 cm de pinza, para un total de 21 cm. Con la herramienta #[b puntos sobre ] (tecla rápida O) a partir de los 9 cm, ubicar un punto a 12 cm o el restante para la medida de cintura.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 60.
              span Marcación de la separación de busto sobre la línea de cintura con la herramienta punto sobre
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta8/imagen4.svg", alt='Asignación del punto de separación de busto sobre la línea de cintura mediante la herramienta Punto sobre y atributos de punto.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p Dé clic derecho, escoja la herramienta #[b selección], señale el punto del costado y suprimir. Para verificar nuevamente las medidas, oprimir la #[b tecla F8].
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 61.
              span Eliminación del punto de costado y verificación de medidas con la herramienta selección
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta8/imagen5.svg", alt='Patrón delantero con menú de la herramienta Selección para eliminar el punto de costado y comprobar las medidas finales.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p Si la medida de los costados de la pieza del frente y del posterior no coinciden, trace una pinza correctiva de talle. Con la herramienta #[b punto sobre], ubicar un punto a 5 cm por debajo de la altura de la sisa.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 62.
              span Ubicación del punto para la pinza correctiva con la herramienta punto sobre
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta8/imagen6.svg", alt='Ventana de atributos de punto y patrón delantero mostrando la ubicación de un punto a 5 cm por debajo de la altura de sisa para trazar una pinza correctiva.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p Marque una línea guía, exactamente al #[b punto ] de los 5 cm. Con la herramienta punto, fijar ese mismo punto sobre la línea centro frente. Marque una línea guía vertical para identificar el #[b vértice de pinza.]
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 63.
              span Marcación de líneas guía para definir el vértice de la pinza
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta8/imagen7.svg", alt='Patrón delantero con líneas guía horizontal y vertical utilizadas para ubicar el vértice de la pinza.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p Para verificar el largo de los costados, oprima la #[b tecla F8]. Para validar el largo del costado delantero, tome la medida con la herramienta #[b medir], del grupo de herramientas de pieza, o sume los dos segmentos que aparecen.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 64.
              span Comprobación del largo de costado con la herramienta medir y la tecla F8            
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta8/imagen8.svg", alt='Patrones delantero y posterior con medidas visibles y ventana de la herramienta Medir para verificar la longitud de los costados.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p Para poder deducir la #[b medida de la pinza], en el grupo de herramientas #[b vista], opción #[b otras herramientas], seleccione #[b calculadora. ]
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 65.
              span Cálculo de la medida de la pinza mediante la herramienta calculadora
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta8/imagen9.svg", alt='Menú de Optitex y calculadora utilizados para obtener la medida necesaria de la pinza correctiva.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p Después de tener clara la medida de la pinza, #[b marque pinza]. Tome la herramienta #[b pinza], opción #[b insertar pinza], desde el punto de los 5 cm de altura de busto, dar la medida correspondiente a la amplitud de la pinza, marque la #[b profundidad o el largo ] de pinza, hasta la intersección de las líneas guías, correspondiente al vértice de pinza o altura de busto.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 66.
              span Inserción de la pinza con la herramienta pinza y definición de su profundidad
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta8/imagen10.svg", alt='Patrón delantero con la herramienta Pinza utilizada para definir la amplitud y profundidad de la pinza en la altura de busto.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p Con la pinza correctiva de talle se realizarán todos los traslados de pinza. Para crear la pinza de entalle o ajuste por cintura, primero #[b elimine líneas guías y limpie el área de trabajo]. Tome la herramienta pinza, opción #[b insertar pinza] y asigne la medida para el primer y segundo lado de pinza. La pinza de entalle debe quedar entre 2 a 3 cm por debajo de la pinza de recuperación de talle.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 67.
              span Creación de pinzas de entalle con la herramienta pinza a partir de la pinza correctiva
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta8/imagen11.svg", alt='Secuencia de creación de pinzas de entalle en el patrón delantero mediante la herramienta Pinza y ajuste de sus posiciones.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p Para realizar el traslado de pinza se sugiere que mueva el hilo de tela, con el fin de no interferir con el traslado seleccione la herramienta #[b mover interno] (tecla rápida I).
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 68.
              span Reubicación del hilo de tela con la herramienta mover interno para el traslado de pinza
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta8/imagen12.svg", alt='Patrón delantero con la herramienta Mover interno utilizada para desplazar el hilo de tela antes de realizar el traslado de pinza.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p Como ya se identifican las pinzas y para poder actualizarlas pulse #[b clic derecho, opción, limpiar pieza, actualizar pieza. Eliminar o suprimir la pieza posterior.]
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 69.
              span Actualización de la pieza mediante las opciones limpiar pieza y actualizar pieza
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta8/imagen13.svg", alt='Menú de edición y patrón delantero mostrando el proceso de actualización de la pieza tras el traslado de pinza.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p Para poder realizar los diferentes tipos de traslados de pinza, copie la pieza actual del delantero. Para copiar la pieza, en la ventana pieza dé clic #[b derecho en pieza - crear como nueva]. Cree las copias que considere necesarias de acuerdo con la cantidad de traslados de pinza que se vayan a realizar.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 70.
              span Creación de copias de la pieza mediante la opción crear como nueva para realizar traslados de pinza
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta8/imagen14.svg", alt='Menú de piezas y copias del patrón delantero utilizadas para generar nuevas versiones antes de efectuar distintos traslados de pinza.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p Para empezar los traslados de pinza inicie con un traslado de hombro, tome #[b herramienta pinza], opción #[b añadir y girar pinza]. Al acercarse al vértice de pinza, de la pinza correctiva de talle, se identifica un cambio de color, señalando qué se puede modificar o trasladar.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 71.
              span Inicio del traslado de pinza con la herramienta añadir y girar pinza
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta8/imagen15.svg", alt='Menú de la herramienta Pinza y patrón delantero mostrando la selección de la pinza correctiva para iniciar su traslado al hombro.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p En el sentido de las manecillas del reloj se traslada la pinza hacia el hombro para que la pinza quede en toda la mitad de la medida o el largo de hombro; en la ventana de diálogo #[b casilla proporcional] asigne 0.5. Al validar la medida se identifica que el recorrido del patrón se torna de un color diferente desde un punto hacia el otro, esto quiere decir que ya está lista la pieza para realizar el traslado.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 72.
              span Traslado de la pinza al hombro mediante la opción proporcional de la herramienta Añadir y girar pinza
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta8/imagen16.svg", alt='Ventana de atributos y patrón delantero mostrando el traslado de la pinza hacia el hombro utilizando el valor proporcional.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p Haga clic sobre cualquier punto de la pieza, automáticamente la pinza se ancla y al cerrar o mover la pieza se identifica el traslado de la pinza hacia el lado deseado.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 73.
              span Traslado de la pinza correctiva de talle hacia el hombro mediante la herramienta añadir y girar pinza en Optitex.
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta8/imagen17.svg", alt='Traslado de la pinza correctiva de talle hacia el hombro en la base superior del frente utilizando la herramienta Añadir y girar pinza de Optitex.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p De esa manera se deben hacer los traslados de pinza a cada una de las partes del cuerpo.
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
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta8/imagen18.svg", alt='Vistas del patrón delantero con traslados de pinza hacia hombro, sisa, costado, entalle, centro frente y escote en Optitex.')

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
              p.mb-4 #[b A. ] Tomar herramienta #[b pinza], opción #[b añadir y girar pinza]. Encontrará las pinzas en el punto central del busto.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 75.
                span Selección de la herramienta añadir y girar pinza para iniciar el traslado desde el punto central del busto en Optitex
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta9/imagen1.svg", alt='Interfaz de Optitex mostrando la herramienta Añadir y girar pinza y el patrón delantero con las pinzas ubicadas en el punto central del busto.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b B. ] Grupo de herramientas #[b piezas], opción #[b cortar a pieza]. El cursor cambia a una estrella y tijeras, la estrella debe coincidir sobre el punto que se quiere cortar.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 76.
                span Uso de la herramienta cortar pieza para seleccionar el punto de corte en el traslado de pinza en Optitex
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta9/imagen2.svg", alt='Interfaz de Optitex mostrando la herramienta Cortar pieza y el cursor posicionado sobre el punto donde se realizará el corte del patrón.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b C. ] Inicie por el punto de hombro hacia centro frente, haga clic en el #[b vértice de pinza], y luego dé clic en el botón #[b aceptar] de la ventana emergente.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 77.
                span Aplicación de la herramienta mover punto para definir el recorrido desde el hombro hasta el vértice de pinza en el traslado hacia centro frente en Optitex
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta9/imagen3.svg", alt='Patrón delantero con líneas de referencia y ventana de la herramienta Mover punto utilizada para conectar el hombro con el vértice de pinza.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b D. ] Seguir cortando hasta el punto de cintura centro frente, al finalizar el corte se habilita una ventana emergente para asignar margen de costura, en este caso se está trabajando sin margen de costura, así que presione el #[b botón cancelar.]
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 78.
                span Corte de la pieza desde el hombro hasta la cintura centro frente mediante la herramienta cortar pieza
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta9/imagen4.svg", alt='Patrón delantero dividido por el recorrido de corte y ventana de atributos de costura mostrada al finalizar la operación.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b E. ] Al generar el corte se crea un hilo de tela diferente, es decir, quedan hilos de tela independientes por pieza. Al seleccionar la pieza y al arrastrar se identifica la división o el corte.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 79.
                span Identificación de las piezas resultantes y de los hilos de tela independientes después del corte
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta9/imagen5.svg", alt='Pieza delantera dividida en dos segmentos independientes, cada uno con su propio hilo de tela.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b F. ] Para eliminar los excedentes de pinza del corte siguiente se debe tomar la herramienta, #[b cortar a pieza] (tecla rápida C), fijar punto desde el hombro hacia sisa, hasta punto de vértice de pinza, #[b cancelar ventana emergente y separar pieza.]
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 80.
                span Eliminación de excedentes de pinza mediante la herramienta cortar pieza y separación de segmentos resultantes
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta9/imagen6.svg", alt='Herramienta Cortar pieza aplicada para retirar el excedente de pinza y separar el segmento sobrante del patrón delantero.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b G. ] Tome nuevamente herramienta cortar #[b pieza] (tecla rápida C), y finalizar el corte desde vértice de pinza hasta cintura.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 81.
                span Finalización del corte desde el vértice de pinza hasta la cintura para separar los segmentos del patrón
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta9/imagen7.svg", alt='Patrón delantero segmentado mediante un corte desde el vértice de pinza hasta la cintura, mostrando las piezas separadas.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b H. ] Separe la pieza hasta obtener piezas entre frente, pieza acostado y sobrantes de pinza. Para eliminar los sobrantes de las pinzas, haga #[b clic sobre la pieza] para identificar el nombre o la pieza en la #[b ventana de piezas]. Luego de identificar la pieza en la ventana de piezas, dé clic sobre la ventana, opción #[b editar - borrar pieza desde modelo.]
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 82.
                span Eliminación de sobrantes de pinza mediante la gestión y borrado de piezas derivadas del corte
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta9/imagen8.svg", alt='Identificación y eliminación de piezas sobrantes generadas por el corte de la pinza.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b I. ] Repita el ejercicio hasta eliminar todos los sobrantes y dejar únicamente las piezas correspondientes al corte. Con el fin de suavizar las puntas generadas en cada uno de los cortes, lo primero que debe hacer es limpiar la pieza, para ello, #[b haga clic sobre el corte], una vez se seleccione indica, que quedó el segmento de la pinza anterior, oprimir la tecla #[b suprimir] para eliminar dicho segmento.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 83.
                span Eliminación de segmentos sobrantes y limpieza final de las piezas obtenidas tras el corte
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta9/imagen9.svg", alt='Depuración de piezas cortadas mediante la eliminación de segmentos sobrantes de pinza y ajuste final de los contornos.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b J. ] Repita el ejercicio hasta que no se identifiquen segmentos externos a cada una de las piezas. Al tener la pieza completamente limpia de cualquier segmento, dé clic sobre el punto de vértice o de intersección de pinza y en la pestaña #[b propiedades], opción #[b principal], habilite el #[b atributo curva.]
            .col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 84.
                span Configuración del atributo curva desde el panel de propiedades para suavizar los puntos de intersección de la pinza
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta9/imagen10.svg", alt='Panel de propiedades con la opción curva activada y piezas depuradas listas para suavizar los puntos de intersección.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b K. ] Al asignar el #[b atributo de curva] se modifica toda la pieza.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 85.
                span Aplicación del atributo de curva desde el panel de propiedades para suavizar el contorno de la pieza
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta9/imagen11.svg", alt='Pantalla de Optitex con la activación del atributo de curva en el panel de propiedades y el contorno suavizado de la pieza de patronaje.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b L. ] Para evitar modificar todo el trayecto se sugiere agregar punto en ambas direcciones y colocar la medida del trayecto dependiendo del volumen del busto o copa, sin seleccionar ningún atributo.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 86.
                span Configuración de la herramienta agregar punto para controlar el volumen de copa sin modificar todo el trayecto
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta9/imagen12.svg", alt='Ventanas de la herramienta Agregar punto mostrando la ubicación de puntos sobre las piezas para ajustar el volumen de copa de forma localizada.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b M. ] Al seleccionar el #[b punto de vértice pinza ] y pasar atributo de curva se identifica cómo se suaviza el vértice. Seleccionar herramienta #[b mover punto y suavizar] como se haría de manera manual.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 87.
                span Aplicación de las herramientas mover punto y atributos de curva para suavizar el vértice de pinza
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta9/imagen13.svg", alt='Configuración de atributos de curva y ajuste manual del vértice de pinza en el patrón delantero.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b N. ] Para modificar o actualizar el nombre de la pieza, seleccionar la pieza en la ventana, propiedades, pestaña cambiar nombre, haga doble clic y escribir el nombre deseado.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 88.
                span Modificación del nombre de la pieza mediante las opciones de propiedades del patrón
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta9/imagen14.svg", alt='Pantalla de Optitex donde se edita el nombre de la pieza desde el panel de propiedades, mostrando el resultado actualizado en el patrón.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b O. ] Repita el mismo ejercicio en cada una de las bases con traslado de pinza para convertir a cortes, recuerde que los nombres comerciales de los cortes varían según la región o el país donde se trabaje, siempre remítase a la parte funcional o técnica de lo que se está trabajando.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 89.
                span Aplicación del procedimiento para transformar traslados de pinza en cortes del patrón base
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta9/imagen15.svg", alt='Visualización de diferentes piezas del patrón obtenidas tras convertir traslados de pinza en cortes mediante herramientas de modelado.')

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
            p #[b A. ] Para modificar el largo de la prenda, en este caso hasta la altura de cadera; diríjase a #[b caja de herramientas], opción #[b movimiento paralelo. ]
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 90.
              span Selección de la herramienta movimiento paralelo para modificar el largo de la prenda
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta10/imagen1.svg", alt='Interfaz de patronaje donde se selecciona la herramienta movimiento paralelo para ajustar el largo de una pieza del delantero.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b B. ] Seleccionar la línea de cintura en sentido de las manecillas del reloj. Cuando el cursor cambia de forma se puede alargar arrastrando el mouse.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 91.
              span Aplicación de la herramienta movimiento paralelo para alargar la línea de cintura
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta10/imagen2.svg", alt='Secuencia de ajuste del largo de la prenda mediante movimiento paralelo sobre la línea de cintura.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b C. ] En la ventana emergente, #[b movimiento paralelo del tramo], marque el largo deseado, teniendo en cuenta el eje X y el eje Y, posteriormente haga clic en el botón #[b aceptar. ]
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 92.
              span Configuración de parámetros en la herramienta movimiento paralelo del tramo
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta10/imagen3.svg", alt='Ventana de movimiento paralelo del tramo con valores de desplazamiento definidos para modificar el largo de la pieza.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b D. ] Al modificar el largo se identifica la variación en la pinza, es decir, se ve la pinza anclada al largo. Para eliminar la pinza, dé #[b clic derecho] en la #[b herramienta selección], seleccione el trayecto o la pinza y suprimir, de igual manera, se debe suprimir todos y cada uno de los puntos de la pinza.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 93.
              span Eliminación de pinzas mediante la herramienta selección después de modificar el largo de la pieza
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta10/imagen4.svg", alt='Secuencia de selección y eliminación de la pinza generada tras el ajuste del largo del patrón.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b E. ] En este punto ya se tiene la blusa con el largo deseado, es necesario darle la forma de cada uno de los puntos del cuerpo. Para marcar el punto de cintura tome la herramienta puntos sobre y fijar un punto con atributo de #[b escalado], por costado con la medida de altura de cadera. Para verificar las medidas oprimir la #[b tecla F8. ]
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 94.
              span Creación de puntos de referencia con la herramienta puntos sobre para definir la altura de cadera 
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta10/imagen5.svg", alt='Configuración de un punto con atributo de escalado para establecer la altura de cadera y verificar medidas del patrón.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b F. ] Verifique el recorrido de la línea de cadera con la herramienta #[b medir. ]
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 95.
              span Verificación de la línea de cadera mediante la herramienta medir
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta10/imagen6.svg", alt='Ventana de medición mostrando el recorrido de la línea de cadera en la pieza del delantero.')
        .row.justify-content-center.my-lg-4
          .col-md-4.mb-4.mb-md-0
            p #[b G. ] Aumente la medida de 1/4 del contorno de cadera más pinza según el manual, en editar segmento en la ventana de #[b medidas], asignar medida, y presione el botón #[b aceptar].
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 96.
              span Modificación de medidas en la ventana de edición de segmentos para ajustar el contorno de cadera
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta10/imagen7.svg", alt='Ventanas de edición de segmentos utilizadas para incrementar la medida del contorno de cadera en la pieza del delantero.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b H. ] Para marcar la pinza en segmento interno se debe marcar una línea guía en cintura. Con la herramienta #[b puntos sobre], fije en el segmento de centro frente, un punto, en el punto de talle o cintura.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 97.
              span Ubicación de puntos de referencia con la herramienta puntos sobre para definir la pinza en la línea de cintura
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta10/imagen8.svg", alt='Aplicación de la herramienta puntos sobre para marcar un punto de referencia en cintura y centro frente antes de crear la pinza.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b I. ] En el grupo de herramientas #[b insertar] identifique la herramienta #[b botón], y dé clic en #[b crear botón]. Para marcar el punto de pinza se debe tener en cuenta el primer y segundo lado de pinza, el análisis se hace tomando como referencia el ancho de pinza y la separación de busto.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 98.
              span Creación de puntos de referencia para la pinza mediante la herramienta botón
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta10/imagen9.svg", alt='Uso de la herramienta botón para ubicar puntos de referencia que determinan la posición y amplitud de la pinza en el delantero.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b J. ] Crear cada uno de los puntos de pinza con la herramienta #[b botón], con el fin de poder marcar el ancho de la pinza.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 99.
              span Marcación de los puntos de amplitud de la pinza mediante la herramienta botón
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta10/imagen10.svg", alt='Creación de puntos de referencia con la herramienta botón para definir el ancho de la pinza en la pieza del delantero.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b K. ] Para marcar el largo de la pinza por la línea de cadera utilizar la herramienta #[b punto.]
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 100.
              span Definición del largo de la pinza mediante la herramienta punto sobre la línea de cadera
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta10/imagen11.svg", alt='Uso de la herramienta punto para ubicar el vértice y definir la longitud de la pinza sobre la línea de cadera.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b L. ] Se debe identificar cada uno de los vértices de pinza, teniendo en cuenta que no se puede encontrar el vértice de pinza por costado y el vértice de pinza de ajuste.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 101.
              span Identificación de los vértices de pinza para la definición del ajuste en el patrón
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta10/imagen12.svg", alt='Localización de los vértices de la pinza de costado y de ajuste para preparar su trazado en la pieza del delantero.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b M. ] Para marcar o dibujar la pinza, en la herramienta #[b dibujar], opción #[b borrador] se puede ir marcando cada uno de los puntos o vértices señalados.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 102.
              span Construcción de la pinza mediante la herramienta dibujar y la conexión de vértices 
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta10/imagen13.svg", alt='Trazado de la pinza uniendo los puntos de referencia previamente definidos en la pieza del delantero.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-12.mb-4.mb-md-0
            p #[b N. ] Para trazar la parte posterior de la blusa hasta la cadera se parte desde el básico posterior. Trace una línea guía en el punto de cintura costado, en este caso debe tener en cuenta los desniveles de cintura, es decir, el largo de la prenda se dará desde el punto de costado cintura, mientras que la pinza se marcará desde el punto de cintura centro atrás.
            p Para alinear los puntos de cintura, en el grupo de herramientas de #[b contorno] seleccione #[b alinear puntos] (tecla rápida G), seleccione los puntos de cintura que se quieren alinear; siempre se debe marcar en el sentido de las manecillas del reloj.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 103.
              span Ajuste del largo de la blusa posterior y alineación de los puntos de cintura mediante herramientas de contorno
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta10/imagen14.svg", alt='Uso de la herramienta alinear puntos para nivelar la cintura y definir el largo de la blusa en la pieza posterior.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b O. ] En la ventana emergente seleccione #[b alinear al último punto]. En este caso debe seleccionar #[b alinear todos los puntos. ]
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 104.
              span Configuración de la herramienta alinear puntos para nivelar la línea de cintura
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta10/imagen15.svg", alt='Ventana de alineación configurada para ajustar todos los puntos de la cintura en la pieza posterior.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b P. ] En la caja de herramientas escoja #[b movimiento paralelo], seleccione desde el punto de centro atrás hacia costado, en el sentido de las manecillas del reloj; extender hacia abajo, asignando la medida de altura de cadera, teniendo en cuenta el eje X y el eje Y.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 105.
              span Configuración de la herramienta movimiento paralelo para ampliar el largo de la espalda hasta la cadera
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta10/imagen16.svg", alt='Selección de movimiento paralelo y definición de medidas en los ejes X y Y para extender la pieza posterior.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b Q. ] En este punto ya se tiene la blusa con el largo deseado, es necesario darle la forma de cada uno de los puntos del cuerpo. Para marcar el punto de cintura tome la herramienta #[b puntos sobre] y fije un punto con el atributo de #[b escalado], por costado con la medida de altura de cadera. Para verificar las medidas oprimir la #[b tecla F8. ]
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 106.
              span Definición de la línea de cadera mediante la herramienta puntos sobre y verificación de medidas
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta10/imagen17.svg", alt='Aplicación de puntos con atributo de escalado para ubicar la línea de cadera y comprobar las medidas de la pieza posterior.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b R. ] Verificar el recorrido de la línea de cadera con la herramienta #[b medir]. Aumentar la medida de 1/4 del contorno de cadera más pinza según el manual; en editar segmento de la ventana de #[b medidas], asignar medida, y posteriormente dé clic en el botón #[b aceptar. ]
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 107.
              span Medición y ajuste del contorno de cadera mediante la ventana de medidas
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta10/imagen18.svg", alt='Verificación del recorrido de la línea de cadera y modificación de su medida utilizando las herramientas de medición y edición de segmentos.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-12.mb-4.mb-md-0
            p #[b S. ] Para marcar la pinza en segmento interno se debe marcar una línea guía en cintura. Con la herramienta #[b punto sobre], fije en el segmento de centro frente, un punto, en el punto de talle o cintura. En el grupo de herramientas #[b insertar ] identifique la herramienta #[b botón], haga clic en #[b crear botón. ] Para marcar el punto de pinza se debe tener en cuenta el primer y segundo lado de pinza, el análisis se hace tomando como referencia el ancho de pinza y la separación del busto.
            p Crear cada uno de los puntos de pinza con la herramienta botón, con el fin de poder marcar el ancho de la pinza. Para marcar el largo de la pinza por línea de cadera utilizar la herramienta punto sobre. Se debe identificar cada uno de los vértices de pinza, teniendo en cuenta que no se puede encontrar el vértice de pinza por costado y el vértice de pinza de ajuste. Para marcar o dibujar la pinza, en la herramienta dibujar, opción borrador se puede ir marcando cada uno de los puntos o vértices señalados.  
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 108.
              span Creación y trazado de la pinza de ajuste mediante las herramientas punto sobre, botón y dibujar
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta10/imagen19.svg", alt='Definición de los puntos de pinza y trazado de la pinza de ajuste en la línea de cadera utilizando herramientas de inserción y dibujo.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b T. ] Ya en este punto se identifica parte delantera y parte posterior.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 109.
              span Identificación y diferenciación de las piezas delantera y posterior de la blusa
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta10/imagen21.svg", alt='Vista final de las piezas delantera y posterior con sus respectivas pinzas y contornos definidos.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b U. ] Para trazar la pechera o el cruce de botonadura se deben eliminar todos los puntos del centro frente. En el grupo de herramientas #[b editar ] escoja la herramienta #[b extender en paralelo ] y seleccione la #[b línea centro frente ] en el sentido de las manecillas del reloj; en la ventana emergente asigne la medida del cruce de botonadura.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 110.
              span Extensión del centro frente para la construcción de la pechera o cruce de botonadura
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta10/imagen22.svg", alt='Uso de la herramienta extender en paralelo para ampliar la línea de centro frente y definir el ancho del cruce de botonadura.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b V. ] Al realizar la extensión utilice la herramienta crear un #[b contorno interno paralelo al tramo seleccionado], esta permite crear o extender el cruce de botonadura como se hace de manera manual sobre papel.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 111.
              span Creación de un contorno paralelo para definir el cruce de botonadura mediante herramientas de edición
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta10/imagen23.svg", alt='Aplicación de la herramienta crear contorno paralelo para generar y extender el cruce de botonadura en el delantero de la blusa.')

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
              p.mb-4 #[b A. ] Antes de iniciar el corte princesa y el corte francés se hará el corte de almilla, trasladando la parte delantera hacia la parte posterior. A partir del punto cuello hombro y hombro sisa marque el recorrido de la almilla; una los dos puntos con la herramienta #[b dibujar]. Seleccionar la herramienta #[b cortar], opción #[b cortar a pieza a lo largo de un interno. ]
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 112.
                span Herramienta cortar a pieza a lo largo de un interno para el corte princesa
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta11/imagen1.svg", alt='Aplicación de la herramienta de corte interno para generar el corte princesa en la blusa.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b B. ] Dé clic y verifique que aparece un hilo de tela independiente sobre la pieza que se quiere cortar. De igual manera, se habilita la ventana emergente de costuras, si se desea se puede asignar el margen de costura o en este caso como se viene trabajando, no se asigna margen de costura.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 113.
                span Configuración del corte con la herramienta cortar a pieza
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta11/imagen2.svg", alt='Ventana de configuración del corte y patrón de blusa listo para dividir en piezas independientes.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p.mb-4 #[b C. ] Verificar que la pieza se puede trasladar o mover.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 114.
                span Verificación del corte mediante movimiento de la pieza
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta11/imagen3.svg", alt='Piezas separadas del patrón tras el corte, comprobando que pueden desplazarse de forma independiente.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b D. ] Para poder unir la pieza al posterior se debe validar la medida de los escotes, diríjase al grupo de herramientas #[b insertar], opción #[b voltear pieza] y seleccione #[b volteo horizontal. ]
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 115.
                span Volteo horizontal de la pieza con la herramienta voltear pieza
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta11/imagen4.svg", alt='Aplicación del volteo horizontal para orientar la pieza y verificar su unión con el posterior.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p.mb-4 #[b E. ] Para que coincida hombro con hombro diríjase al grupo de herramientas #[b insertar], opción #[b voltear pieza] y seleccione #[b volteo vertical. ]
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 116.
                span Volteo vertical de la pieza con la herramienta voltear pieza
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta11/imagen5.svg", alt='Aplicación del volteo vertical para hacer coincidir la línea de hombro entre las piezas del patrón.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b F. ] Para unir las piezas diríjase a la #[b herramienta piezas], opción #[b recorrido]. Haga clic en la pieza que se cortó el delantero y la parte posterior, y haga clic sobre la línea de hombro para unir la pieza.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 117.
                span Unión de piezas con la herramienta recorrido
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta11/imagen6.svg", alt='Proceso de unión de la pieza cortada al posterior mediante la selección de la línea de hombro.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p.mb-4 #[b G. ] Para fusionar las #[b piezas], en el grupo de herramientas piezas seleccione #[b unir piezas o unir partes. ]
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 118.
                span Fusión de piezas con la herramienta unir piezas
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta11/imagen7.svg", alt='Uso de la herramienta Unir piezas para fusionar la pieza trasladada con el patrón posterior.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b H. ] Luego de fusionadas las piezas si no se identifican curvas suaves en cada unión suavice los puntos; tome la herramienta #[b selección], haga clic sobre el punto y asigne atributo #[b curva]. Con la herramienta #[b mover punto] deslice el mouse hasta suavizar la curva. De igual manera, suavice el punto de hombro escote.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 119.
                span Suavizado de curvas con la herramienta selección
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta11/imagen8.svg", alt='Ajuste de las curvas de unión mediante el atributo curva para suavizar el escote y el hombro del patrón.')
          .row.justify-content-center
            .col-lg-4.col-md-12.mb-4.mb-md-0
              p.mb-4 #[b I. ] Ya en este punto se identifica la corrección de las uniones en cada uno de los puntos de hombro. Si el hilo de tela que se identifica en la pieza no corresponde al hilo de tela del trazo o corte proceda a modificarlo con la opción #[b mover interno ] (tecla rápida I). Arrastre o mueva el hilo de tela de la pieza delantera, haciendo intersección sobre el hilo de la tela posterior, haga clic sobre este; se presenta que el hilo de tela se modifica quedando paralelo al centro atrás.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 120.
                span Corrección del hilo de tela con la herramienta mover interno
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta11/imagen9.svg", alt='Ajuste del hilo de tela para alinearlo de forma paralela al centro atrás después de unir las piezas.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b J. ] Lo ideal es mover los hilos de tela en tal punto que no interfieran con los cortes que se van a trabajar. Para realizar los cortes, en el grupo de herramientas #[b pieza] seleccione #[b cortar], opción #[b cortar pieza.] Haga clic sobre el punto de hombro, y en la ventana emergente, en la opción #[b proporcional], asignar 0.5 para que quede en la mitad.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 121.
                span Corte de la pieza desde el hombro con la herramienta cortar pieza
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta11/imagen10.svg", alt='Uso de la herramienta Cortar pieza para dividir el patrón desde el hombro y ubicar el corte en el punto medio.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p.mb-4 #[b K. ] Vaya al vértice de pinza, posteriormente al primer lado de pinza por cintura, y finalice en el primer lado de pinza por largo total. En la ventana emergente de #[b costura] haga clic en el botón #[b cancelar], identifique el traslado o movimiento del corte.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 122.
                span Traslado del corte desde la pinza con la herramienta cortar pieza
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta11/imagen11.svg", alt='Definición del recorrido del corte desde el vértice de la pinza hasta la cintura para generar el traslado de la pieza.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b L. ] Repita el ejercicio hasta generar el corte de costado. Identifique cada una de las piezas, centro, frente, costado y pinza.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 123.
                span Identificación de piezas después del corte de costado
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta11/imagen12.svg", alt='Piezas resultantes del corte de costado identificadas como centro, frente, costado y pinza.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p.mb-4 #[b M. ] En la pieza de costado identifique la pinza de recuperación de talle, para cerrar la pinza, en el menú herramientas, opción #[b escalado], seleccione #[b cerrar pinza]. En la ventana emergente #[b fijar pinza] seleccione #[b intermedia entre primer y segundo segmento de pinza.]
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 124.
                span Cierre de pinza con la herramienta cerrar pinza
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta11/imagen13.svg", alt='Proceso de cierre de la pinza de recuperación de talle mediante la selección de los segmentos de la pinza en la pieza de costado.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b N. ] Suavice los vértices de pinza en cada uno de los cortes.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 125.
                span Suavizado de vértices de pinza en las piezas cortadas
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta11/imagen14.svg", alt='Ajuste y suavizado de los vértices de pinza en las piezas resultantes del corte princesa y francés.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p.mb-4 #[b O. ] Repita los mismos pasos en la parte posterior para generar el corte princesa en la espalda.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 126.
                span Generación del corte princesa en la espalda
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta11/imagen15.svg", alt='Piezas posteriores obtenidas tras aplicar el procedimiento de corte princesa en la espalda.')
          .row.justify-content-center
            .col-lg-4.col-md-4.mb-4.mb-md-0
              p #[b P. ] Para generar el corte francés en cualquiera de las dos piezas repita los pasos anteriores, partiendo desde sisa, que es donde sale el corte francés.
            .col-lg-7.col-md-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 127.
                span Generación del corte francés desde la sisa
              figure
                img(src="@/assets/curso/temas/tema1/tarjeta11/imagen16.svg", alt='Piezas del patrón con el corte francés trazado desde la sisa mediante el procedimiento de corte y separación.')

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
            p #[b A. ] Para el trazo de tres modelos de falda: falda media campana (página 36), falda con vuelo (página 37) y falda sirena revise en el #[b manual de patronaje SENA (página 34). ]
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 128.
              span Preparación del patrón base para modelos de falda
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta12/imagen1.svg", alt='Patrón base de falda y menú de herramientas utilizado como punto de partida para desarrollar diferentes modelos de falda.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b B. ] Se trabajará la falda de dos pinzas para generar el vuelo hacia el ruedo, cree el primer traslado, tome la herramienta #[b pinza], opción #[b añadir y girar pinza. ]
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 129.
              span Creación y giro de pinza con la herramienta añadir y girar pinza
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta12/imagen2.svg", alt='Aplicación de la herramienta para crear un traslado de pinza en la falda como preparación para generar amplitud en el ruedo.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b C. ] Acérquese con el puntero al vértice de pinza, una vez cambie de color dé clic para seleccionarla y #[b arrastre] hasta el ruedo, en el recuadro #[b atributos de punto] proporcione la ubicación deseada del punto al cual se requiera trasladar la pinza.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 130.
              span Traslado de pinza al ruedo mediante la herramienta añadir y girar pinza
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta12/imagen3.svg", alt='Proceso de selección y desplazamiento de la pinza hacia el ruedo para generar amplitud en la falda.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b D. ] Lleve el puntero a cualquier parte del costado de la falda, haga clic, gire, haga clic y traslade la pinza.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 131.
              span Traslado de pinza al costado con la herramienta añadir y girar pinza
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta12/imagen4.svg", alt='Desplazamiento de la pinza hacia diferentes puntos del costado para generar amplitud y variaciones en el diseño de la falda.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b E. ] Se realiza el mismo procedimiento trasladando la otra pinza, una vez cambie de color el vértice de pinza, haga clic para seleccionar y arrastre hasta el ruedo dando clic sobre este, en el recuadro #[b atributos de punto ] indique la #[b ubicación deseada], haga clic en cualquier parte del costado, gire, haga clic y traslade pinza.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 132.
              span Traslado de la segunda pinza con la herramienta añadir y girar pinza
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta12/imagen5.svg", alt='Traslado de la segunda pinza hacia el costado mediante la herramienta Añadir y girar pinza para aumentar el vuelo de la falda.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b F. ] Haga clic derecho en la herramienta #[b selección], elija la pinza a eliminar y suprima cada una de las líneas para limpiar la pieza.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 133.
              span Eliminación de líneas auxiliares con la herramienta selección
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta12/imagen6.svg", alt='Limpieza del patrón mediante la eliminación de líneas internas y elementos auxiliares después del traslado de pinzas.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b G. ] Para suavizar los puntos que se generaron por los traslados de pinza seleccione los puntos en el sentido de las manecillas del reloj, haga clic en el último punto.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 134.
              span Suavizado de curvas mediante las propiedades del punto
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta12/imagen7.svg", alt='Configuración de las propiedades de los puntos para convertir segmentos rectos en curvas suaves después del traslado de pinzas.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b H. ] En la pestaña #[b propiedades] se identifica que los puntos tienen atributo de #[b escalado], desmárquelo y señale de #[b curva.]
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 135.
              span Cambio del atributo de escalado a curva en los puntos del contorno
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta12/imagen8.svg", alt='Modificación de los puntos del patrón para convertir segmentos escalados en curvas suaves y mejorar el contorno de la falda.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b I. ] Haga clic en los puntos que no se requieren, y luego suprimir.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 136.
              span Eliminación de puntos innecesarios para depurar el contorno
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta12/imagen9.svg", alt='Supresión de puntos sobrantes para obtener un contorno más limpio y uniforme en el patrón de la falda.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b J. ] Con ayuda de una línea guía ubique el ruedo de la falda centro frente y verifique que la curva no sobrepase la línea escuadrada.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 137.
              span Verificación y ajuste de la curva del ruedo con línea guía
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta12/imagen10.svg", alt='Comprobación de la curva del ruedo mediante una línea guía para asegurar que el contorno no sobrepase la línea escuadrada.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b K. ] Haga clic en los puntos de la cintura en sentido de las manecillas del reloj, en la pestaña #[b propiedades ] quite el atributo de #[b escalado] y asigne el atributo de #[b curva], suprima uno de los dos puntos y verifique que la línea guía de la curva no sobrepase la línea escuadrada.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 138.
              span Ajuste de la curva de cintura mediante las propiedades de los puntos
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta12/imagen11.svg", alt='Modificación de puntos de la cintura para aplicar el atributo curva y verificar que el contorno se mantenga dentro de la línea guía.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b L. ] Seleccione en la ventana piezas otra falda; para ajustar el hilo de tela seleccione la herramienta #[b copiar o mover interno], arrastre al otro hilo de tela y haga clic.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 139.
              span Ajuste del hilo de tela con la herramienta copiar o mover interno
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta12/imagen12.svg", alt='Uso de la herramienta Copiar o mover interno para reubicar el hilo de tela entre piezas de la falda.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b M. ] Haga clic derecho sobre la falda previamente modificada, escoja la opción #[b limpiar pieza], posteriormente seleccione #[b actualizar original], suprima cada una de las líneas para limpiar la mesa de trabajo. Marque línea guía.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 140.
              span Limpieza y actualización de la pieza mediante las opciones de edición
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta12/imagen13.svg", alt='Uso de las herramientas Limpiar pieza y Actualizar original para depurar el patrón y preparar la pieza final de la falda.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b N. ] Tome la herramienta #[b construir pieza], haga clic sobre la pieza a seleccionar, haga clic para separar la pieza que se desea ampliar o modificar.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 141.
              span Separación de secciones con la herramienta construir pieza
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta12/imagen14.svg", alt='Uso de la herramienta Construir pieza para dividir el patrón y aislar la sección que será modificada o ampliada.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b O. ] Seleccione en el sentido de las manecillas del reloj dónde se va a dar el vuelo de la pieza. Seleccione en el grupo de herramientas #[b aflojar], opción #[b abrir múltiples flojos] e indique el número de flojos que se quiere trabajar, los flojos corresponden al número de cortes para dar amplitud.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 142.
              span Configuración de pliegues múltiples con la herramienta abrir múltiples aflojos
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta12/imagen15.svg", alt='Aplicación de la herramienta Abrir pliegues múltiples para generar la amplitud y el vuelo de la falda según el número de cortes definidos.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b P. ] En la ventana emergente, en la sección #[b anchos], defina el rango que se quiere trabajar, #[b desde el inicio hasta el final] de las amplitudes.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 143.
              span Definición de amplitudes con la herramienta abrir pliegues múltiples
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta12/imagen16.svg", alt='Configuración del rango de amplitudes en la ventana Abrir pliegues múltiples para generar el vuelo de la falda.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b Q. ] Para suavizar la curva tome los puntos en el sentido de las manecillas del reloj, quite el atributo de #[b escalado ] y asigne atributo de #[b curva.]
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 144.
              span Suavizado de curvas mediante la edición de atributos de puntos
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta12/imagen17.svg", alt='Modificación de atributos de los puntos para eliminar el escalado y generar una curva suave en el contorno de la falda.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b R. ] Repetir el ejercicio para generar más vuelos, las alturas y anchos se pueden modificar.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 145.
              span Desarrollo de variantes de falda mediante control del vuelo
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta12/imagen18.svg", alt='Resultado de la modificación de amplitudes para obtener diferentes niveles de vuelo en el patrón de falda.')
        .row.justify-content-center.my-lg-4
          .col-lg-4.col-md-4.mb-4.mb-md-0
            p #[b S. ] Para dividir la parte superior de la falda y hacer que coincida con el corte o con el vuelo marque la línea guía a la altura de la separación.
          .col-lg-7.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 146.
              span Separación de la pretina mediante la herramienta Pieza
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta12/imagen19.svg", alt='Uso de la herramienta Pieza para dividir la parte superior de la falda y separar la sección correspondiente a la pretina.')

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
