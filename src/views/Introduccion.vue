<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-between
      .col-lg-6
        p En este componente formativo se estudiarán las generalidades que soportan la importancia de la realización de un alistamiento de infraestructura, para el adelanto de actividades en el marco del desarrollo y despliegue de software de acuerdo con el análisis de las necesidades particulares de los clientes. Además, presenta de manera muy simple diferentes tipos de configuraciones tradicionales de plataformas para el desarrollo e implementación de aplicaciones y servicios como lamp, wamp, xamp, wxcf, xatmj y wima.
          br
          br
          |Desde la anterior perspectiva posibilitará trabajar en las generalidades de los requerimientos y sobre todo situándolos en aquellos que no son funcionales en el proceso de desarrollo; posteriormente se abordará la arquitectura y el despliegue de aplicaciones y servicios que posibilitará conocer las necesidades de los clientes a partir de los requisitos no funcionales definidos.
      .col-lg-5
        figure.mb-5
          img(src='@/assets/curso/img1.jpg', alt='Texto que describa la imagen')
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
