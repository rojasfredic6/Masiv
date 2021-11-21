<template lang="pug">
div
  header.header
    .header-logo
      figure.header-logo-figure
        img.header-logo-image(src="@/assets/images/Logo.svg")
    .header-social
      ul.header-social-list
        li.header-social-item
          v-icon.header-icon(name="twitter")
        li.header-social-item
          v-icon.header-icon(name="instagram")
        li.header-social-item
          v-icon.header-icon(name="facebook")
        li.header-social-item
          v-icon.header-icon(name="github")
    .header-random
      .header-random-button(@click="newRandom") Random Comic
  main
    router-view(ref="child")
  footer.footer
    img.footer-img(src="@/assets/images/Logo.svg")
</template>

<script>
import { comicCount } from "./api/api";

export default {
  name: "App",
  data() {
    return {
      random: "",
    };
  },
  async created() {
    try {
      this.$store.commit("loader");
      let random = await comicCount();
      await this.$store.dispatch("halarComic", {
        id: Math.round(Math.random() * random.data.num),
      });
      this.$store.commit("loader");
    } catch (err) {
      throw new Error("Error en App.vue: " + err);
    }
  },
  methods: {
    async newRandom() {
      try {
        this.$store.commit("loader");
        let random = await comicCount();
        await this.$store.dispatch("halarComic", {
          id: Math.round(Math.random() * random.data.num),
        });
        this.$refs.child.reset();
        this.$store.commit("loader");
      } catch (err) {
        throw new Error("Error en App.vue: " + err);
      }
    },
  },
};
</script>

<style lang="stylus">

.header
  display flex
  flex-direction column
  width 100%
  height: 25%
  align-items: center
  justify-content: center
  padding 10px
  @media screen and (min-width: 768px)
    flex-direction row
    gap 10px
  &-social
    width 50%
    height  100px
    display grid
    place-content stretch
    @media screen and (min-width: 768px) and (max-width: 1020px)
      width 70%
    @media screen and (min-width 1024px)
      justify-content left
      p
    &-list
      padding 0
      display: grid
      grid-template-columns: repeat(4, 1fr)
      place-items center
      place-content stretch
      gap 10px
    &-item
      list-style none
      width 45px
      height 45px
      display: grid
      place-content stretch
      place-items stretch
      &:hover
        border-radius 100%
        cursor pointer
        box-shadow: 2px 2px 6px 0 Nosferatus
        background-color: Dracula

  &-random
    width 100%
    display: flex
    justify-content: center
    align-items: center
    &-button
      height 45px
      width 45%
      margin 20px
      background-color Marcelin
      color Cullen
      border-radius 30px
      display: grid
      place-items: center
      font-weight bold
      cursor pointer
      @media screen and (min-width: 768px) and (max-width: 1020px)
        width 80%
      &:hover
        background-color Cullen
        border 1px solid Marcelin
        color Nosferatus
.header-icon
  width 32px
  margin 10px
  background-color transparent
  &:hover
    color Cullen
main
  display: grid
  min-height: 75vh
  width 100%
  max-height: max-content
  background-color Aro
  @media screen and (min-width 760px)
    max-height max-content
.footer
  width 100%
  height 10vh
  background-color Marcelin
  display: grid
  place-items: center
  &-img
    width 100px
    box-shadow: 0px 0px 10px 0 Cullen
    @media screen and (min-width 760px) and (max-width 1024)
      width 200px
    @media screen and (min-width 1024px)
      width 250px
</style>
