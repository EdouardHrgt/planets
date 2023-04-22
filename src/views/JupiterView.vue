<template>
  <div>
    <header-bar theme="hsl(2, 68%, 53%)" />
    <PlanetPage />
    <h1>TOTOTOTOTOTOTOTOTO</h1>
  </div>
</template>

<script>
import HeaderBar from '@/components/Header.vue';
import PlanetPage from '@/components/Planet.vue';
export default {
  name: 'JupiterView',
  components: {
    HeaderBar,
    PlanetPage,
  },
  props: {
    top: String,
    bottom: String,
    left: String,
    right: String,
  },
};
</script>
