<template>
  <div>
    <header-bar theme="hsl(263, 67%, 51%)" />
    <PlanetPage position-bottom="-120px" position-left="50%" />
    <h1>Earth</h1>
  </div>
</template>

<script>
import HeaderBar from '@/components/Header.vue';
import PlanetPage from '@/components/Planet.vue';
export default {
  name: 'EarthView',
  components: {
    HeaderBar,
    PlanetPage,
  },
  props: {
    positionBottom: String,
    positionLeft: String,
  },
};
</script>
