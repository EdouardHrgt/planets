<template>
  <div>
    <header-bar theme="hsl(10, 63%, 51%)" />
    <PlanetPage pos-bottom="-110px"/>
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
};
</script>
