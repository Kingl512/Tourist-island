<template>
  <div style="padding: 2rem;">
    <header>
      <nav>
        <div class=”logo”></div>
        <div>TOURIST ISLAND</div>
      </nav>
    </header>

    <main>
      <section id=”image”>
        <p>Image</p>
      </section>

      <div class=”buttons”>
        <button @click="$router.push('/map')">Ver mapa</button>
        <button>Compartir</button>
      </div>

      <article>
        <h1>Johnny Cay y Acuario</h1>
        <p>Johnny Cay, también conocido como Islote Sucre, es un cayo cercano a San Andrés famoso por sus playas de arena blanca, palmeras y aguas cristalinas. Es ideal para nadar, hacer snorkel y disfrutar de la gastronomía local¹. El Acuario, o Rose Cay, es otro cayo donde puedes observar una gran variedad de flora y fauna marina.</p>
      </article>

      <article>
        <h1>Cueva de Morgan</h1>
        <p>Esta cueva está asociada con la leyenda del pirata Henry Morgan, quien supuestamente escondió tesoros en la isla. Es un lugar lleno de historia y misterio, perfecto para los amantes de las aventuras y las historias de piratas</p>
      </article>

      <article>
        <h1>Hoyo Soplador</h1>
        <p> Es un fenómeno natural donde el agua del mar es expulsada a través de un agujero en las rocas, creando un efecto de géiser. Es una atracción divertida y sorprendente que no te puedes perder.</p>
      </article>

      <article>
        <h1>Playas de San Luis</h1>
        <p>Estas playas son conocidas por su tranquilidad y belleza. Son menos concurridas que otras playas de la isla, lo que las hace perfectas para relajarse y disfrutar del paisaje caribeño.</p>
      </article>

      <article>
        <h1>Casa Museo Isleña</h1>
        <p>Este museo ofrece una visión de la cultura y la historia de San Andrés. Aquí puedes aprender sobre las tradiciones, la arquitectura y la vida cotidiana de los isleños a lo largo del tiempo.</p>
      </article>

      <article>
        <h1>Salto del Tigre</h1>
        <p>también conocido como Salto de Morgan, es un balneario natural rocoso en San Andrés Islas, Colombia. Se encuentra aproximadamente a 10 km del centro de la ciudad, cerca del Batallón Militar y el Hotel Blue Cove1. Este lugar es popular para saltos y clavados, y es conocido por sus formaciones rocosas y aguas cristalinas </p>
      </article>

      <article>
        <h1>Laguna Big Pond</h1>
        <p>Esta pintoresca laguna está ubicada en el centro de la isla y es una de las fuentes de agua dulce del departamento. Está habitada por muchas especies de reptiles como babillas, iguanas y tortugas, además de aves exóticas. Es un lugar ideal para conectarse con la naturaleza y disfrutar de la fauna local.</p>
      </article>

      <article>
        <h1>Haines Cay</h1>
        <p>Este cayo es conocido por sus aguas cristalinas y su rica vida marina. Es un lugar perfecto para hacer snorkel y disfrutar de la belleza submarina. Se encuentra cerca del Acuario y es accesible en bote.</p>
      </article>


      <figure>
        <!-- <img src=”@/assets/talimagen.png” alt=”image” width=”300”> -->
        <figcaption>image description</figcaption>
      </figure>
    </main>

    <footer>
      <!--Contenido del pie de página -->
    </footer>
  </div>
</template>

<style scoped>
  body {
    Font-family: Arial, sans-serif;
    Margin: 0;
    Padding: 0;
  }
  header {
    Background-color: #333;
    Color: white;
    Padding: 10px 0;
    Text-align: center;
  }
  nav {
    Display: flex;
    Justify-content: space-between;
    Align-items: center;
    Padding: 0 20px;
  }
  .logo {
    Width: 50px;
    Height: 50px;
    Border-radius: 50%;
    Background-color: white;
  }
  #carousel {
    Width: 100%;
    Height: 200px;
    Background-color: #ddd;
    Display: flex;
    Justify-content: center;
    Align-items: center;
  }
  .buttons {
    Display: flex;
    Justify-content: center;
    Margin: 20px 0;
  }
  .buttons button {
    Margin: 0 10px;
    Padding: 10px 20px;
    Background-color: #333;
    Color: white;
    Border: none;
    Cursor: pointer;
  }
  article {
    Padding: 20px;
    Text-align: center;
  }
  figure {
    Margin: 20px 0;
    Text-align: center;
  }
  figcaption {
    Margin-top: 10px;
    Font-style: italic;
  }
</style>
