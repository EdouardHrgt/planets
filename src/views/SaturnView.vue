<template>
  <div>
    <header-bar theme="hsl(17, 73%, 46%)" />
    <PlanetPage />
    <h1>Saturn</h1>
  </div>
</template>

<script>
import HeaderBar from '@/components/Header.vue';
import PlanetPage from '@/components/Planet.vue';
export default {
  name: 'SaturnView',
  components: {
    HeaderBar,
    PlanetPage,
  },
};
</script>
