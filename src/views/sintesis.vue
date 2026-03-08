<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p.mb-4 En este componente se enfatizó en la importancia de prevenir fallas y errores en procesos de producción, considerando las normativas vigentes y el control de calidad en cada proceso. El siguiente diagrama presenta los conceptos más importantes trabajados:
    
    .row.justify-content-center
      .col-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="El diagrama de flujo presenta el contenido de la unidad, describiendo cada tema y sus subtemas")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
