<template>
  <div>
    <header-bar theme="hsl(2, 68%, 53%)" />
    <PlanetPage pos-bottom="-100px"/>
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
};
</script>
