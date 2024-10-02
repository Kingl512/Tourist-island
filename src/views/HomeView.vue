<template>
  <div style="padding: 2rem;">
    <header>
      <nav>
        <div class=”logo”></div>
        <div>touristsanisland.co/default</div>
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
        <h1>Título del artículo</h1>
        <p>Este es un párrafo de ejemplo que describe el contexto histórico del sitio de san andres</p>
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
