<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Arquitectura de despliegue de aplicaciones y servicios 
    figure.mb-5
      img(src='@/assets/curso/img4.jpg', alt='Texto que describa la imagen')
    p.mb-5 En el desarrollo de aplicaciones, es necesario tener claridad sobre la pertinencia de cada herramienta de desarrollo según el proyecto, ya que el uso o no de una herramienta tiene costos asociados que pueden impactar el alcance y recursos del proyecto. Por ello, es importante analizar los diferentes tipos de licencias pagadas y libres a nivel de sistemas operativos, lo mismo aplica con herramientas usadas para el desarrollo de un producto como IDE, sistemas gestores de bases de datos, herramientas para la ejecución de pruebas, entre otros. Por lo anterior es importante hacer un balance y un análisis serio sobre las mejores opciones de acuerdo con las necesidades de los clientes y teniendo en cuenta los requisitos no funcionales definidos.
      br
      br
      |Por esta razón es importante elegir las herramientas que harán parte de la arquitectura tecnológica definida para el desarrollo y posterior despliegue e implementación de la solución tecnológica,  construida de acuerdo con el tipo de proyecto y tipo de cliente para el cual se pretende desarrollar el proyecto.
    #t_3_1.titulo-segundo
      h2 3.1 Componentes de una arquitectura de software
    //- p.mb-5 Toda arquitectura definida en el proceso de construcción de un software debe incluir una serie de elementos o componentes que en su conjunto definen la estructura o línea de trabajo entre todos los miembros del equipo de desarrollo, a continuación, se definirá de manera general los componentes que deben de seleccionarse o definirse para el inicio de un proyecto, la definición de los componentes dependerá del tipo de proyecto que se desea construir, por ejemplo no es lo mismo desarrollar una aplicación web que una aplicación móvil. Para realizar lo anterior, se debe tener en cuenta: 
    //- ol.lista-ol--cuadro.mb-5
    //-     li 
    //-       .lista-ol--cuadro__vineta
    //-         span 1
    //-       | Clientes y servidores: examinar qué servicios son requeridos en el servidor como servidores web, DNS, FTP, entre otros y de igual manera a las aplicaciones de tipo cliente que son necesarias para acceder a estos servicios.

    //-     li 
    //-       .lista-ol--cuadro__vineta
    //-         span 2
    //-       | Bases de datos.

    //-     li 
    //-       .lista-ol--cuadro__vineta
    //-         span 3
    //-       | Sistemas Operativos.

    //-     li 
    //-       .lista-ol--cuadro__vineta
    //-         span 4
    //-       | Lenguajes de programación

    //-     li 
    //-       .lista-ol--cuadro__vineta
    //-         span 5
    //-       | Niveles en sistemas jerárquico.
    //- .row.justify-content-between
    //-   .col-lg-6
    //-     p En términos generales la arquitectura de desarrollo define los componentes del software, su función e interacción con otros componentes de software y hardware. La selección o escogencia de estos componentes es lo que nos lleva a construir lo que se llevará a una plataforma de desarrollo la cual nos brinda un entorno de software común sobre la cual el equipo de desarrollo realizará las actividades necesarias para la construcción del producto de software. Adicionalmente, la plataforma es la base para la integración de los elementos software y hardware que permiten el funcionamiento del sistema en entornos productivos una vez que se realizan los respectivos procesos de despliegue por lo cual es importante que la arquitectura del software sea definida desde el inicio del proyecto.
    //-   .col-lg-5
    //-     figure.mb-5
    //-       img(src='@/assets/curso/img5.svg', alt='Texto que describa la imagen')
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/XrjY2iOVR8o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Componentes de una arquitectura de software
    #t_3_2.titulo-segundo
      h2 3.2 Plataformas de desarrollo e implantación de aplicaciones y servicios
    p.mb-5 A continuación, se relacionan algunas de las plataformas de desarrollo e implantación de aplicaciones y servicios más comunes o de mayor popularidad dependiendo del proyecto a construir.
    TabsB.color-acento-contenido.mb-5
      .px-5.py-4.py-md-5(titulo="LAMP" :icono="require('@/assets/curso/img6.svg')")
        .row.justify-content-between
          .col-lg-8.mb-4.mb-md-0
            h4 LAMP
            p Es quizá la plataforma tecnológica más utilizada y popular en el ámbito del desarrollo web, es el acrónimo usado para describir un sistema de infraestructura de internet que usa las siguientes herramientas:
            ol.lista-ol--cuadro.mb-5
              li 
                .lista-ol--cuadro__vineta.vineta-cyan.p-4
                  span L
                p.my-auto Linux, el sistema operativo.
              li 
                .lista-ol--cuadro__vineta.vineta-cyan.p-4
                  span A
                p.my-auto Apache, el servidor web.
              li 
                .lista-ol--cuadro__vineta.vineta-cyan.p-4
                  span M
                p.my-auto MySQL/MariaDB, el gestor de bases de datos.
              li 
                .lista-ol--cuadro__vineta.vineta-cyan.p-4
                  span P
                p.my-auto PHP, PERL, PYTHON, el lenguaje de programación.
              p Este tipo de plataforma es muy común debido a su fácil implementación y despliegue además de utilizar herramientas tecnológicas todas de tipo GPL, cuando se requiere hacer despliegue de servicios y aplicaciones en sitios de hosting por ejemplo es el más popular.
          .col-lg-3
            figure
              img(src='@/assets/curso/img12.jpg', alt='Texto que describa la imagen')
      .px-5.py-4.py-md-5(titulo="WAMP" :icono="require('@/assets/curso/img7.svg')")
        .row.justify-content-between
          .col-lg-8.mb-4.mb-md-0
            h4 WAMP
            p Este tipo de plataformas se utilizan más en entornos locales (ON PREMISE) de despliegue, donde el acceso es a través de la red local al igual que la plataforma anterior utiliza casi los mismos componentes a excepción del sistema operativo que en este caso es reemplazado por Windows en lugar de Linux.
            ol.lista-ol--cuadro.mb-5
              li 
                .lista-ol--cuadro__vineta.vineta-cyan.p-4
                  span W
                p.my-auto Windows, el sistema operativo.
              li 
                .lista-ol--cuadro__vineta.vineta-cyan.p-4
                  span A
                p.my-auto Apache, el servidor web.
              li 
                .lista-ol--cuadro__vineta.vineta-cyan.p-4
                  span M
                p.my-auto MySQL/MariaDB, el gestor de bases de datos.
              li 
                .lista-ol--cuadro__vineta.vineta-cyan.p-4
                  span P
                p.my-auto PHP, PERL, PYTHON, el lenguaje de programación.
          .col-lg-2
            figure
              img(src='@/assets/curso/img13.svg', alt='Texto que describa la imagen')
      .px-5.py-4.py-md-5(titulo="XAMPP" :icono="require('@/assets/curso/img8.svg')")
        .row.justify-content-between
          .col-lg-8.mb-4.mb-md-0
            h4 XAMPP
            p Es una plataforma tecnológica utilizada como un paquete integrando varios componentes de tipo multiplataforma de ahí el origen de la primera letra X que significa cualquiera de los diferentes sistemas operativos, este paquete es distribuido con licencia GNU y es una plataforma para despliegue de aplicaciones y servicios web de muy fácil instalación y utilización.
              br
              br
              |Incluye los siguientes componentes:
            ol.lista-ol--cuadro.mb-5
              li 
                .lista-ol--cuadro__vineta.vineta-cyan.p-4
                  span X
                p.my-auto X, diferentes sistemas operativos(Multiplataforma). 
              li 
                .lista-ol--cuadro__vineta.vineta-cyan.p-4
                  span A
                p.my-auto Apache, el servidor web.
              li 
                .lista-ol--cuadro__vineta.vineta-cyan.p-4
                  span M
                p.my-auto MariaDB, el gestor de bases de datos.
              li 
                .lista-ol--cuadro__vineta.vineta-cyan.p-4
                  span PP
                p.my-auto PHP, PERL, el lenguaje de programación.
          .col-lg-2
            figure
              img(src='@/assets/curso/img14.svg', alt='Texto que describa la imagen')
      .px-5.py-4.py-md-5(titulo="WXCF" :icono="require('@/assets/curso/img9.svg')")
        .row.justify-content-between
          .col-lg-8.mb-4.mb-md-0
            h4 WXCF
            p Esta plataforma utiliza ColdFusión para el desarrollo y despliegue de aplicaciones de tipo web, permite programar páginas o aplicaciones web a través de etiquetas similares a HTML y que además es multiplataforma, utiliza los siguientes componentes:
            ol.lista-ol--cuadro.mb-5
              li 
                .lista-ol--cuadro__vineta.vineta-cyan.p-4
                  span W
                p.my-auto Windows, el sistema operativo. 
              li 
                .lista-ol--cuadro__vineta.vineta-cyan.p-4
                  span X
                p.my-auto X: puede utilizar servidores web como Apache o Internet Information services.
              li 
                .lista-ol--cuadro__vineta.vineta-cyan.p-4
                  span C
                p.my-auto Soporta bases de datos como: Sybase, Oracle, MySQL, SQL Server.
              li 
                .lista-ol--cuadro__vineta.vineta-cyan.p-4
                  span F
                p.my-auto 
          .col-lg-2
            figure
              img(src='@/assets/curso/img15.svg', alt='Texto que describa la imagen')
      .px-5.py-4.py-md-5(titulo="XATMJ" :icono="require('@/assets/curso/img10.svg')")
        .row.justify-content-between
          .col-lg-8.mb-4.mb-md-0
            h4 XATMJ
            p Este tipo de plataforma web es muy poco común encontrarla en los proveedores de hosting, se utiliza específicamente cuando el desarrollo web es realizado con JSP, incluye los siguientes componentes:
            ol.lista-ol--cuadro.mb-5
              li 
                .lista-ol--cuadro__vineta.vineta-cyan.p-4
                  span X
                p.my-auto X, diferentes sistemas operativos(Multiplataforma). 
              li 
                .lista-ol--cuadro__vineta.vineta-cyan.p-4
                  span A
                p.my-auto Apache.
              li 
                .lista-ol--cuadro__vineta.vineta-cyan.p-4
                  span T
                p.my-auto Tomcat como servidor web.
              li 
                .lista-ol--cuadro__vineta.vineta-cyan.p-4
                  span M
                p.my-auto MySQL, como gestor de bases de datos.
              li 
                .lista-ol--cuadro__vineta.vineta-cyan.p-4
                  span J
                p.my-auto JSP como lenguaje de programación.
          .col-lg-2
            figure
              img(src='@/assets/curso/img16.svg', alt='Texto que describa la imagen')
      .px-5.py-4.py-md-5(titulo="WIMA" :icono="require('@/assets/curso/img11.svg')")
        .row.justify-content-between
          .col-lg-8.mb-4.mb-md-0
            h4 WIMA
            p Este tipo de plataforma es muy popular en los desarrolladores que utilizan herramientas y plataformas tecnológicas propietarias de Microsoft, involucran desarrollos en ASP y ASP.net, incluye los siguientes componentes:
            ol.lista-ol--cuadro.mb-5
              li 
                .lista-ol--cuadro__vineta.vineta-cyan.p-4
                  span W
                p.my-auto Windows, el sistema operativo.
              li 
                .lista-ol--cuadro__vineta.vineta-cyan.p-4
                  span I
                p.my-auto IIS (Internet Information Services) como servidor web.
              li 
                .lista-ol--cuadro__vineta.vineta-cyan.p-4
                  span M
                p.my-auto MS SQL Server como gestor de bases de datos.
              li 
                .lista-ol--cuadro__vineta.vineta-cyan.p-4
                  span A
                p.my-auto ASP.net como lenguaje de programación.
          .col-lg-2
            figure
              img(src='@/assets/curso/img17.svg', alt='Texto que describa la imagen')
    #t_3_3.titulo-segundo
      h2 3.3 Introducción a las máquinas virtuales y contenedores
    .row.justify-content-between.mb-5 
      .col-lg-6 
        p En la definición de la arquitectura de despliegue de aplicaciones y servicios es muy importante la definición de los componentes desde el punto de vista de la plataforma tecnológica que serán utilizados en el momento de iniciar el proceso de desarrollo y en el de hacer el despliegue o puesta en producción, para lo cual el equipo de desarrollo deberá elegir qué tipo de plataforma tecnológica será la utilizada.
          br
          br
          |Si bien la plataforma tecnológica exige la selección de varios componentes como sistema operativo, servidor web, gestor de base de datos y lenguaje de programación, en la actualidad se debe tener claro qué tipo de despliegue se requiere para la construcción local del producto en las máquinas de los equipos de desarrollo y para el despliegue en producción (generalmente debe ser el mismo).  Lo anterior puede sugerir la necesidad de máquinas virtuales o contenedores para lo cual se dará una definición que permita diferenciar un concepto de otro.
      .col-lg-5 
        figure
          img(src='@/assets/curso/img18.jpg', alt='Texto que describa la imagen')
    h3 Máquinas virtuales
    p.mb-5 Las máquinas virtuales son un sistema operativo completo funcionando de manera aislada dentro de otro sistema operativo anfitrión (Alarcón, 2018), de igual manera debe existir un componente de infraestructura de tipo hardware que soporte todo lo anterior,  que en últimas es el servidor o equipo donde se haga el desarrollo y creación de la máquina virtual o si se trata del despliegue y puesta en producción final de la aplicación, puede referirse a un proveedor que suministra el hardware necesario que soportará la máquina virtual como Azure, Google Cloud, AWS, Digital Ocean, entre otras.
    .titulo-sexto.color-acento-contenido
      h5 Funcionamiento de una máquina virtual
    .row.justify-content-center.mb-5 
      .col-lg-11
        figure
          img.mb-3(src='@/assets/curso/img19.svg', alt='Texto que describa la imagen')
          figcaption Fuente: (Alarcón, 2018).
    h3 Contenedores
    p.mb-5 Los contenedores por su parte a diferencia de las máquinas virtuales no requieren tener un sistema operativo completo aislado, lo que hacen es aislar las aplicaciones compartiendo los recursos del sistema operativo sobre el cual se ejecutan.
      br
      br
      |La contenerización de aplicaciones lo que hace es compartir todos esos recursos del equipo anfitrión entre todas las aplicaciones que se generen a través de contenedores, es decir, que ya no se requiere disponer de una capacidad determinada de recursos como memoria RAM, procesador, almacenamiento y networking como se hace en las máquinas virtuales lo que permite optimizar el recurso.
    .titulo-sexto.color-acento-contenido
      h5 Funcionamiento contenedores Docker
    .row.justify-content-center.mb-5 
      .col-lg-11
        figure
          img.mb-3(src='@/assets/curso/img20.svg', alt='Texto que describa la imagen')
          figcaption Fuente: (Alarcón, 2018).
    p.mb-5 Al igual que en las máquinas virtuales los contenedores requieren de un componente de infraestructura que soporte el sistema operativo anfitrión, el Docker Engine y la creación o aislamiento de las diferentes aplicaciones a través de contenedores que es entregado por el servidor de desarrollo, pruebas y puesta en producción ya sea local o propio del equipo de desarrollo o entregado a través de un proveedor como Azure, Google Cloud, AWS, Digital Ocean entre otras.



</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
