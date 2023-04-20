<template>
  <div class="about">
    <header-bar />
    <h2>{{ $route.params.name }}</h2>
  </div>
</template>

<script>
import HeaderBar from '@/components/Header.vue';
export default {
  name: 'PlanetView',
  components: {
    HeaderBar,
  },
};
</script>

<style scoped>
h2 {
  font-size: 8rem;
  color: red;
}
</style>
