<template>
  <div>
    <header-bar theme="hsl(194, 48%, 49%)" />
    <PlanetPage />
    <h1>mercury</h1>
  </div>
</template>

<script>
import HeaderBar from '@/components/Header.vue';
import PlanetPage from '@/components/Planet.vue';
export default {
  name: 'MercuryView',
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
