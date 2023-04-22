<template>
  <div>
    <header-bar theme="hsl(169, 73%, 44%)" />
    <PlanetPage />
    <h1>Uranus</h1>
  </div>
</template>

<script>
import HeaderBar from '@/components/Header.vue';
import PlanetPage from '@/components/Planet.vue';
export default {
  name: 'UranusView',
  components: {
    HeaderBar,
    PlanetPage,
  },
};
</script>
