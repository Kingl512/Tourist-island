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
const center = ref([12.57858, -81.69973])
const zoom = ref(12)

const markers = ref([
  { name: 'Johnny Cay' , position: [12.5953, -81.6994] },
  { name: ' Acuario', position: [12.5578, -81.6976] },
  { name: 'Cueva de Morgan', position: [12.5465, -81.7208] },
  { name: 'Hoyo Soplador', position: [12.5096,  -81.7164] },
  { name: 'Playas de San Luis', position: [12.5147, -81.7158] },
  { name: 'Casa Museo Isleña', position: [12.5390, -81.7161] },
  { name: 'Salto del Tigre', position: [12.5310, -81.7050] },
  { name: 'Laguna Big Pond', position: [12.5619, -81.7203] },
  { name: 'Haines Cay', position: [12.5700, -81.6924] }
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
