<template lang="pug">
div.component
  figure.component-figure
    loading-vue(v-if="loader")
    img.component-image(:src="data.img", v-else)
  .component-rating
    ul.component-rating-list
      li.component-rating-item(v-for="(s,index) in stars" :key="s.value", @click="valorar(index)")
        v-icon.star(name="star", :id="'star-'+s.value", :class="s.select === true ? 'selected-star' : ''")
      //- li.component-rating-item
      //-   v-icon.star(name="star")
      //- li.component-rating-item
      //-   v-icon.star(name="star")
      //- li.component-rating-item
      //-   v-icon.star(name="star")
      //- li.component-rating-item
      //-   v-icon.star(name="star")
</template>

<script>
import LoadingVue from "./Loading.vue";

export default {
  name: "Comic",
  components: {
    LoadingVue,
  },
  props: {
    data: {},
  },
  data() {
    return {
      stars: [
        { value: 1, select: false },
        { value: 2, select: false },
        { value: 3, select: false },
        { value: 4, select: false },
        { value: 5, select: false },
      ],
    };
  },
  computed: {
    loader() {
      return this.$store.state.loader;
    },
  },
  methods: {
    valorar(id) {
      this.stars.map((item) => (item.select = false));
      for (let i = 0; i <= id; i++) {
        this.stars[i].select = true;
      }
    },
    reset() {
      this.stars.map((item) => (item.select = false));
    },
  },
};
</script>

<style lang="stylus">
.component
  display grid
  width: 100%
  &-figure
    width: 100%
    display flex
    justify-content: center
    align-items: center
    margin 0
    padding 0
    position relative
    z-index 1
  &-image
    width 80%
    height auto
    @media screen and (min-width 1024px)
      width 50%
  &-rating
    width: 100%
    display grid
    place-items: center
    padding 10px 0
    &-list
      display flex
      padding 0
      width 40%
      justify-content: space-evenly
      @media screen and (min-width 1024px)
        justify-content center
        gap 20px
    &-item
      list-style: none
      & .star
        width 40px
.selected-star
  color Lincoln
</style>
