<template>
  <div style="padding: 2rem;">
    <header>
      <nav>
        <div class="logo"></div>
        <h1 class="title">TOURIST ISLAND</h1>
      </nav>
    </header>

    <main>
      <!-- Sección de imagen destacada -->
      <section id="hero">
        <h2>Explora los tesoros de San Andrés</h2>
        <button @click="$router.push('/map')" class="cta-button">Ver mapa</button>
      </section>

      <!-- Artículos de atracciones -->
      <section id="attractions">
        <article v-for="(attraction, index) in attractions" :key="index" class="attraction-card">
          <h2>{{ attraction.title }}</h2>
          <p>{{ attraction.description }}</p>
        </article>
      </section>

      <!-- Galería de imágenes -->
      <section id="gallery">
        <figure>
          <!-- Imagen destacada -->
          <img src="@/assets/playa-san-andres.jpg" alt="playa san andres" width="300" />
          <figcaption>¡Ven y visita la isla de san andres islas!</figcaption>
        </figure>
      </section>
    </main>

    <footer>
      <p>© 2024 Tourist Island. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<style scoped>
/* General */
body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f9;
  color: #333;
}

/* Header */
header {
  background-color: #009688;
  color: white;
  padding: 1rem 0;
  text-align: center;
  position: sticky;
  top: 0;
  z-index: 1000;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}

.logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: url('@/assets/logo.png');
  background-size: cover;
  background-position: center;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
}

/* Hero Section */
#hero {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url('@/assets/hero-image.jpg') no-repeat center center/cover;
  color: white;
  text-align: center;
  padding: 3rem 1rem;
  border-radius: 10px;
}

#hero h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

/* Atracciones */
#attractions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 2rem 0;
}

.attraction-card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  text-align: center;
}

.attraction-card h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333; 
}

.attraction-card p {
  font-size: 1rem;
  line-height: 1.5;
  color: #666;
}

/* Gallery */
#gallery {
  text-align: center;
  margin: 2rem 0;
}

#gallery img {
  max-width: 100%;
  border-radius: 10px;
}

#gallery figcaption {
  margin-top: 0.5rem;
  font-style: italic;
  color: #666;
}

/* Footer */
footer {
  background-color: #009688;
  color: white;
  text-align: center;
  padding: 1rem 0;
  margin-top: 2rem;
  font-size: 0.9rem;
}
</style>

<script>
export default {
  data() {
    return {
      attractions: [
        {
          title: "Johnny Cay y Acuario",
          description:
            "Johnny Cay es famoso por sus playas y el Acuario por su vida marina impresionante.",
        },
        {
          title: "Cueva de Morgan",
          description:
            "Una cueva llena de historia y leyendas sobre el pirata Henry Morgan.",
        },
        {
          title: "Hoyo Soplador",
          description:
            "Un fenómeno natural donde el agua es expulsada como un géiser.",
        },
        {
          title: "Playas de San Luis",
          description: "Playas tranquilas ideales para relajarse en el Caribe.",
        },
        {
          title: "Casa Museo Isleña",
          description:
            "Un museo que muestra la cultura y tradición de San Andrés.",
        },
        {
          title: "Salto del Tigre",
          description:
            "Balneario natural rocoso, ideal para saltos y clavados.",
        },
        {
          title: "Laguna Big Pond",
          description:
            "Una laguna pintoresca llena de vida silvestre y paisajes.",
        },
        {
          title: "Haines Cay",
          description: "Un cayo perfecto para snorkel y exploración marina.",
        },
      ],
    };
  },
};
</script>
