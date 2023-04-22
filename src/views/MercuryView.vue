<template>
  <div>
    <header-bar theme="hsl(194, 48%, 49%)" />
    <PlanetPage pos-bottom="-120px" />
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
};
</script>
