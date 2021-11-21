<template lang="pug">
div
  v-icon.loader(name="loader")
  p Cargando...
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style>
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.loader {
  -webkit-animation: 3s rotate linear infinite;
  animation: 3s rotate linear infinite;
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
}
</style>
