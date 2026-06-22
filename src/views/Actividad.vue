<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5

      #Actividad                
        <Actividad :cuestionario="cuestionario"/>

</template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Trazado de patrones',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la apropiación de los fundamentos técnicos relacionados con el trazado digital de patrones, el manejo básico de Optitex y los procesos manuales de trazo, tendido, marcación y corte.',
      barajarPreguntas: true,
      titulo_aprobado: '¡Excelente! Ha superado la actividad',
      titulo_reprobado: 'No ha superado la actividad',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la finalidad principal del componente trazado de patrones en el proceso de patronaje industrial?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Desarrollar planos, moldes y trazos manuales o digitales respondiendo a parámetros de industrialización.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Seleccionar únicamente colores comerciales para presentar colecciones sin construir moldes técnicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reemplazar el corte textil por ilustraciones decorativas sin información de producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Definir solo etiquetas de venta sin analizar piezas, trazos, tendidos ni materiales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se evidencia comprensión del trazado de patrones como proceso técnico para desarrollar moldes manuales o digitales bajo criterios de industrialización.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión técnica de los conceptos.',
        },
        {
          id: 2,
          texto:
            '¿Por qué el trabajo manual sigue siendo base para utilizar <em>software</em> especializado de patronaje?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque permite omitir medidas y construir moldes únicamente con herramientas automáticas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque aporta la lógica técnica necesaria para comprender y aplicar procesos digitales con precisión.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Porque reemplaza todos los comandos del programa y evita configurar el área de trabajo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque solo sirve para dibujar etiquetas sin relación con trazos, moldes o despieces.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se reconoce que el dominio manual proporciona la lógica técnica indispensable para trasladar correctamente el patronaje al entorno digital.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión técnica de los conceptos.',
        },
        {
          id: 3,
          texto:
            '¿Qué elementos conforman la interfaz básica de trabajo en Optitex para el trazado de patrones?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Únicamente la ventana de impresión, la caja de empaque y el registro comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Solamente el color de fondo, la etiqueta de marca y el costo final.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Barra de título, menú, herramientas, ventana de piezas y área de trabajo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Mesa de corte, tijeras, jaboncillo, alfileres y máquina circular industrial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se demuestra apropiación de la interfaz de Optitex al identificar sus barras, ventanas, herramientas y área de trabajo.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión técnica de los conceptos.',
        },
        {
          id: 4,
          texto:
            '¿Qué permite configurar la opción "preferencias" dentro del área de trabajo de Optitex?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El precio comercial de la prenda, la temporada y la ubicación del almacén.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El tipo de empaque, la etiqueta de marca y la ruta de distribución final.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La cantidad de operarios, el salario por hora y la programación de producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Colores, relleno de piezas, ventanas de diálogo, unidades de medida y atributos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se evidencia comprensión de las preferencias como espacio para configurar condiciones visuales, unidades y atributos del entorno digital.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión técnica de los conceptos.',
        },
        {
          id: 5,
          texto:
            '¿Qué medida se utiliza como ancho inicial para crear el rectángulo base de falda femenina en Optitex?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un cuarto del contorno de cadera, de acuerdo con la talla y el cuadro usado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El largo total de manga, sin relación con cadera, cintura o altura de falda.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La mitad del ancho de espalda, porque sustituye el contorno de cadera completo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La medida del cuello, porque define automáticamente el ancho de la falda.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se reconoce que la base de falda parte de un rectángulo cuyo ancho corresponde a un cuarto del contorno de cadera.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión técnica de los conceptos.',
        },
        {
          id: 6,
          texto:
            '¿Qué función cumple la herramienta "mover punto" al modelar la curva de cadera en la falda?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar la pieza completa para sustituirla por una ficha técnica de corte.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Modificar puntos específicos del contorno para dar forma anatómica a la curva.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Cambiar el nombre comercial de la pieza sin alterar medidas ni coordenadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Activar el plóter de impresión antes de terminar la construcción del molde.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se evidencia dominio de la herramienta mover punto como recurso para ajustar el contorno y modelar curvas del patrón.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión técnica de los conceptos.',
        },
        {
          id: 7,
          texto:
            '¿Para qué se emplea la herramienta "pinza", opción "añadir y girar pinza", durante el trazado digital?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para borrar todas las líneas de aplome y dejar el molde sin información técnica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para modificar únicamente colores de relleno sin afectar el patrón ni sus puntos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Para ubicar, construir o trasladar pinzas según amplitud, profundidad y punto de referencia.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Para reemplazar el cuadro de tallas por una imagen sin medidas del cuerpo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se demuestra apropiación de la herramienta de pinza para construir, girar o trasladar ajustes según las medidas del patrón.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión técnica de los conceptos.',
        },
        {
          id: 8,
          texto:
            '¿Qué se debe validar al trazar la base superior femenina para mantener correspondencia entre delantero y posterior?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El tamaño del empaque, el número de etiquetas y la marca comercial final.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La cantidad de imágenes decorativas agregadas al archivo de presentación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El color del fondo del programa y la visibilidad del cursor en pantalla.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La medida de costados, sisa, hombro, escote y puntos de referencia de la talla.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se evidencia comprensión de la validación dimensional entre delantero y posterior para conservar correspondencia técnica en la base superior.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión técnica de los conceptos.',
        },
        {
          id: 9,
          texto:
            '¿Qué propósito tiene la pinza correctiva de talle en los traslados de pinza de la base superior?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Corregir diferencias de costado y servir como punto técnico para trasladar pinzas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Eliminar la sisa de la prenda para construir únicamente piezas rectangulares.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Modificar el color del molde sin realizar movimientos sobre el patrón base.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir los cortes técnicos por etiquetas decorativas sin función de ajuste.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se reconoce la pinza correctiva de talle como ajuste técnico para equilibrar costados y orientar posteriores traslados de pinza.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión técnica de los conceptos.',
        },
        {
          id: 10,
          texto:
            '¿Qué ocurre al convertir traslados de pinza en cortes dentro de Optitex?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Las piezas se convierten automáticamente en imágenes sin puntos ni segmentos editables.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La base se divide en piezas funcionales y se eliminan sobrantes de pinza.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El patrón pierde todas sus medidas y solo conserva el nombre de archivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El <em>software</em> bloquea la ventana de piezas e impide suavizar los vértices.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se demuestra comprensión del corte como división funcional de la base a partir de traslados de pinza y limpieza de sobrantes.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión técnica de los conceptos.',
        },
        {
          id: 11,
          texto:
            '¿Qué recurso permite alargar una blusa hasta la cadera a partir de una base superior?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La eliminación de todos los puntos de cintura sin comprobar recorridos ni contornos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El cambio de color de la pieza para diferenciarla en la ventana del programa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El movimiento paralelo del tramo, asignando el largo requerido según ejes de trabajo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La impresión directa del molde sin modificar largo, cadera ni pinzas internas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se evidencia dominio del movimiento paralelo como herramienta para extender la base superior hasta el largo de cadera.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión técnica de los conceptos.',
        },
        {
          id: 12,
          texto:
            '¿Qué diferencia funcional existe entre el corte princesa y el corte francés en prendas superiores?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El corte princesa solo modifica etiquetas y el francés solo cambia el color del archivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ambos eliminan la necesidad de sisa, escote y ajuste anatómico en la prenda.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Ninguno requiere vértices de pinza, líneas internas ni validación de piezas separadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El corte princesa suele partir del hombro y el francés se genera desde la sisa.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se reconoce la diferencia funcional entre cortes al identificar su origen técnico desde hombro o sisa.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión técnica de los conceptos.',
        },
        {
          id: 13,
          texto:
            '¿Qué se busca al aplicar vuelos en modelos de falda mediante traslados de pinza?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Generar amplitud hacia el ruedo conservando limpieza, dirección de hilo y suavizado de curvas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Reducir todo el contorno de cadera hasta eliminar la estructura del molde base.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir la falda por una ficha de empaque sin modificaciones de patrón.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Bloquear el área de trabajo para impedir la construcción de nuevas piezas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se evidencia comprensión del traslado de pinzas hacia el ruedo como estrategia para generar vuelos y amplitudes controladas.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión técnica de los conceptos.',
        },
        {
          id: 14,
          texto:
            '¿Qué son los componentes exteriores de una prenda dentro del reconocimiento previo al corte?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Elementos internos como forros, entretelas, guatas y sesgos usados por el revés.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Partes del material textil base visibles al exterior, como delanteros, mangas y bolsillos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Herramientas de corte como tijeras, punzones, mesas, reglas y jaboncillo de tiza.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Documentos administrativos que registran lote, talla, consecutivo y almacenamiento final.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se reconoce que los componentes exteriores corresponden a las piezas visibles elaboradas con el material textil base.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión técnica de los conceptos.',
        },
        {
          id: 15,
          texto:
            '¿Qué información técnica debe contener la señalización básica de un patrón para trazo y corte?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Solo el precio comercial, la temporada de moda y el canal de distribución.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Únicamente el nombre del cliente, sin especificar pieza, material ni veces de corte.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Hilo de tela, referencia, nombre de pieza, cantidad de corte, material y piquetes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Solamente el color de la tela, sin relación con tendido, marcación o producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se demuestra apropiación de la señalización como sistema de información para orientar corte, material, cantidad, referencia y ensamble.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión técnica de los conceptos.',
        },
        {
          id: 16,
          texto:
            '¿Cómo se define el corte dentro del proceso de transformación de la materia prima textil?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Como la selección de colores para presentar colecciones sin modificar el tejido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Como la revisión de tendencias antes de elaborar el dibujo plano de moda.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Como el empaque final de prendas terminadas antes de su distribución comercial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Como la transformación del tejido en piezas útiles para confeccionar prendas de vestir.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se evidencia comprensión del corte como proceso que transforma la tela en piezas útiles para la confección.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión técnica de los conceptos.',
        },
        {
          id: 17,
          texto:
            '¿Qué recomendación técnica debe aplicarse durante el extendido manual de material textil?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mantener alineación al orillo, evitar tensión, controlar arrugas y reducir desperdicio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Tensionar fuertemente la tela para que las piezas queden más pequeñas después del corte.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Omitir la revisión de defectos textiles para avanzar con mayor rapidez en producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Ubicar la tela sin considerar orillos, ancho útil, arrugas ni características del material.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se reconoce la importancia de la alineación, baja tensión, control de arrugas y consumo para asegurar calidad en el extendido.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión técnica de los conceptos.',
        },
        {
          id: 18,
          texto:
            '¿Qué caracteriza al trazo direccional utilizado en materiales con vello, brillo o estampado definido?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permite ubicar patrones en cualquier sentido porque el material no presenta restricciones visuales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Exige colocar las piezas en un solo sentido para conservar uniformidad de apariencia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Elimina la necesidad de revisar el derecho de la tela antes de extender las capas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Se aplica únicamente en forros internos sin relación con brillo, textura o estampado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se evidencia comprensión del trazo direccional como requisito para conservar coherencia de brillo, textura, pelo o estampado.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión técnica de los conceptos.',
        },
        {
          id: 19,
          texto:
            '¿Por qué el ancho útil del textil debe identificarse antes de ubicar los patrones?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque reemplaza la necesidad de revisar hilo de tela, orillo y tipo de tendido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque permite calcular el precio de venta sin revisar consumo, piezas ni corte.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Porque define el espacio real de corte al descontar el orillo del ancho total.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Porque elimina los márgenes de costura y transforma automáticamente todas las piezas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se demuestra comprensión del ancho útil como medida real disponible para ubicar patrones después de descontar los orillos.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión técnica de los conceptos.',
        },
        {
          id: 20,
          texto:
            '¿Qué función cumple el tiqueteado dentro de la terminología industrial de trazo y corte?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Fusionar entretelas mediante presión y calor para dar estabilidad a las piezas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Separar paquetes de producción por bloques antes de enviarlos al área de ensamble.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Imprimir automáticamente trazos digitales sin identificar piezas, tallas ni lotes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Rotular piezas cortadas con lote, nombre, talla y consecutivo para controlar el orden.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se reconoce el tiqueteado como rotulación técnica de piezas cortadas para controlar lote, talla, nombre y consecutivo operacional.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión técnica de los conceptos.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra apropiación de los fundamentos técnicos relacionados con trazado digital, Optitex, trazo manual, tendido, marcación y corte.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Se recomienda revisar nuevamente el componente formativo e intentar otra vez la actividad didáctica.',
    },
  }),
}
</script>
