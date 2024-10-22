<template>
  <div id="map" class="map-container">
    <l-map ref="map" v-model:zoom="zoom" v-model:center="center" :useGlobalLeaflet="false">
      <l-tile-layer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker
        v-for="marker in markers"
        :key="marker.name"
        :lat-lng="marker.position"
      >
        <l-icon
          icon-url="icono.png"
          :icon-size="[64, 50]"
        ></l-icon>
        <l-popup>{{ marker.name }}</l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script setup>
import 'leaflet/dist/leaflet.css'
import { LMap, LTileLayer, LMarker, LPopup, LIcon } from '@vue-leaflet/vue-leaflet'
import { ref } from 'vue'

const map = ref(null)
const center = ref([12.5766924, -81.7154752])
const zoom = ref(12)

const markers = ref([
  { name: 'Johnny Cay' , position: [12.5997881, -81.690003] },
  { name: ' Acuario', position: [12.550639, -81.6881781] },
  { name: 'Cueva de Morgan', position: [12.5426162 ,-81.7342121] },
  { name: 'Hoyo Soplador', position: [12.4814156, -81.7337918] },
  { name: 'Playas de San Luis', position: [12.5215346, -81.7240455] },
  { name: 'Casa Museo Isleña', position: [12.5602589, -81.7316877] },
  { name: 'Salto del Tigre', position: [12.527522, -81.7369066] },
  { name: 'Laguna Big Pond', position: [12.5444192, -81.7107188] },
  { name: 'Haines Cay', position: [12.5510722, -81.7069466] }
])
</script>

<style scoped>
.map-container {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
