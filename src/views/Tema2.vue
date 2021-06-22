<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Requerimientos no funcionales
    .row.justify-content-between
      .col-lg-6
        p Estos no están relacionados de forma directa a funciones específicas del sistema, por esta razón algunos equipos de trabajo no le dedican el tiempo necesario para su definición. Sin embargo, son los requerimientos no funcionales los que se asocian a propiedades clave que determinan en buena parte la calidad de los productos y servicios desarrollados, 
          b como por ejemplo: la fiabilidad, los tiempos de respuesta a operaciones, la capacidad de almacenamiento, entre otras.
          br
          br
          |Los requerimientos no funcionales deben surgir de las necesidades del usuario y el problema particular que se intenta resolver, e involucran temas presupuestales, políticas de la organización, posible interoperabilidad con otros sistemas de software o hardware, además diferentes tipos de políticas como: la privacidad, la seguridad, políticas ambientales, de manejo de datos, entre otras; por lo anterior algunas veces resolver este tipo de requerimientos puede ser más crítico que los mismos requerimientos funcionales (Sommerville, 2011).
      .col-lg-5
        figure.mb-5
          img(src='@/assets/curso/img2.svg', alt='Texto que describa la imagen')
    p.mb-5 En la figura se presentan los diferentes tipos de requerimientos funcionales según (Sommerville, 2011)
    .titulo-sexto.color-acento-contenido
      h5 Clasificación de requerimientos no funcionales
    .row.justify-content-center
      .col-lg-10
        figure.mb-5
          img.mb-3(src='@/assets/curso/img3.svg', alt='Texto que describa la imagen')
          figcaption Fuente: (Sommerville, 2011).
    .row.mb-5
      .col-lg-6
        a.anexo.mb-4(:href="obtenerLink('/downloads/ingenieria_de_software.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. https://sistemamid.com/panel/uploads/biblioteca/2018-06-11_03-37-12144643.pdf
    .row.justify-content-center
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4
          p Los requerimientos de producto incluyen los requerimientos de eficiencia, de usabilidad, de fiabilidad y de portabilidad. Un ejemplo de un requerimiento no funcional de producto podría ser que el producto sea desarrollado en HTML5 sin el applet de java ni ajax, esto con el ánimo de garantizar que sea compatible con la mayoría de los navegadores en el mercado actual.
    p.mb-5 Los requerimientos organizacionales provienen directamente de las características de la organización objetivo para el producto o servicio de software a desarrollar, como por ejemplo: estándares en los procesos, requerimientos de implementación como lenguajes específicos de programación, metodologías de diseño, tiempos de entrega y/o documentación requerida por la organización.
      br
      br
      |En los requerimientos externos se clasifican todos aquellos requerimientos no funcionales adicionales que no corresponden específicamente al producto, su proceso de desarrollo o a la organización. Entre este tipo de requerimientos están los relacionados con interoperabilidad con otros sistemas software o hardware de la empresa o terceros, lo relacionado con políticas y normativas gubernamentales o leyes, y los de tipo ético que se relacionan directamente con el público objetivo. Un ejemplo de este tipo de requerimientos puede ser que debido a la política de protección de datos no se deben mostrar los datos personales de ninguna persona en los informes generados o por ejemplo que el sistema sea compatible con los servicios de búsqueda de la registraduría nacional para el proceso de verificación de documentos en el registro.
    .row.justify-content-center
      .col-lg-8
        .cajon.color-primario.cyan-claro.p-4.mb-4
          p Los requerimientos de producto incluyen los requerimientos de eficiencia, de usabilidad, de fiabilidad y de portabilidad. Un ejemplo de un requerimiento no funcional de producto podría ser que el producto sea desarrollado en HTML5 sin el applet de java ni ajax, esto con el ánimo de garantizar que sea compatible con la mayoría de los navegadores en el mercado actual.
    p.mb-5 Existen dos corrientes para la documentación de requerimientos, independientemente de la corriente se recomienda utilizar la estructura de la Tabla 1 para la documentación de requerimientos no funcionales. Sin embargo, se puede realizar los ajustes y modificaciones que considere enriquecen el proceso.
    .tabla-a.color-acento-botones.mb-5.text-center
      table
        caption Fuente: SENA, 2021
        thead
          tr
            th Nombre del requerimiento
            th Componente 
        tbody
          tr
            td Identificador
            td [Identificador del requerimiento] 
          tr
            td Descripción
            td [Describa la solicitud realizada por el cliente] 
          tr
            td Propósito
            td [Escriba la finalidad del requerimiento]
          tr
            td Forma de verificación
            td [Escriba como se puede realizar la verificación de que el requerimiento fue alcanzado con éxito, en lo posible utilizar medidas cuantitativas]
            






















</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
