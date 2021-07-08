<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite 
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Generalidades sobre requerimientos
    p.mb-5 El proceso de levantamiento de requerimientos es fundamental al momento de iniciar un proyecto de desarrollo de software, este permite identificar las características o funcionalidades que debe tener el software a construir o en algunos casos, también permite definir cuáles y qué tipo de restricciones deben ser cubiertas por el equipo de desarrollo para que el producto sea recibido de manera satisfactoria por el cliente.
      br
      br
      |Este proceso se hace a fin de que el equipo de trabajo pueda entender qué tipo de funcionalidades, complejidad, tiempos, herramientas y tecnologías podrían ser empleadas durante el proceso de construcción y posterior implementación de la solución, este es un proceso bastante crítico ya que si no se hace de manera correcta y exhaustiva el desarrollo del proyecto puede no ser exitoso.
      br
      br
      | Según (Sommerville, 2011) los requerimientos se pueden clasificar en:
    .titulo-sexto.color-acento-contenido
      h5 Tabla 1 Requerimientos funcionales y no funcionales
    .tabla-b.color-acento-contenido.mb-5
      .tabla-b__header.text-white
        h5.mb-0 Requerimientos funcionales y no funcionales
      table
        caption Fuente: SENA, 2021
        tr
          th Funcionales
          td Hace referencia a lo que espera el usuario que ofrezca el sistema a nivel de servicios, como, por ejemplo: registrar comentarios, hacer búsquedas por nombre, etc.
        tr
          th No funcionales
          td Hace referencia a las características y restricciones generales que debe satisfacer el sistema para poder ofrecer los servicios establecidos en los requisitos funcionales con ciertos niveles de calidad requeridos, por ejemplo: arquitectura del sistema, tiempos de respuesta, capacidad de carga, tolerancia a fallos, etc.
    p.mb-5 Para el desarrollo de este componente y dada la naturaleza de los requerimientos, se abordará los no funcionales de tal manera que se pueda, a partir de la definición de la arquitectura ser utilizada en el proceso de desarrollo de software, suplir y dar cumplimiento con los requerimientos.
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
