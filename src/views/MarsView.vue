<template>
  <div>
    <header-bar theme="hsl(10, 63%, 51%)" />
    <PlanetPage />
    <h1>Mars</h1>
  </div>
</template>

<script>
import HeaderBar from '@/components/Header.vue';
import PlanetPage from '@/components/Planet.vue';
export default {
  name: 'MarsView',
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
