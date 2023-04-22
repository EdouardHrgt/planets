<template>
  <div>
    <header-bar theme="hsl(33, 82%, 64%)" />
    <PlanetPage pos-bottom="-100px" />
  </div>
</template>

<script>
import HeaderBar from '@/components/Header.vue';
import PlanetPage from '@/components/Planet.vue';
export default {
  name: 'VenusView',
  components: {
    HeaderBar,
    PlanetPage,
  },
};
</script>
