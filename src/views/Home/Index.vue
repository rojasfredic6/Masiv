<template lang="pug">
div.home
  h2.home-title {{comicData.safe_title}}
  comic(:data="comicData", ref="comicComponent")
</template>

<script>
import Comic from "../../components/Comic.vue";

export default {
  name: "Home",
  components: {
    Comic,
  },
  computed: {
    comicData() {
      return this.$store.state.comic;
    },
  },
  methods: {
    reset() {
      this.$refs.comicComponent.reset();
    },
  },
};
</script>

<style lang="stylus">
.home
  display flex
  flex-direction: column
  align-items: center
  justify-content center
  width: 100%
  height: 100%
  &-title
    color Lincoln
    padding 20px
    margin 15px 0
    font-weight bold
    border-top 1px solid Lincoln
    border-bottom 1px solid Lincoln
</style>
