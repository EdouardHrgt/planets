<template>
  <div>
    <header-bar theme="hsl(222, 87%, 56%)" />
    <PlanetPage pos-bottom="-120px"/>
  </div>
</template>

<script>
import HeaderBar from '@/components/Header.vue';
import PlanetPage from '@/components/Planet.vue';
export default {
  name: 'NeptuneView',
  components: {
    HeaderBar,
    PlanetPage,
  },
};
</script>
