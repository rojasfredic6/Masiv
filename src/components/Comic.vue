<template lang="pug">
div.component
  figure.component-figure
    img.component-image(:src="data.img")
    div.component-info
      p Info
  .component-rating
    ul.component-rating-list
      li.component-rating-item(v-for="(s,index) in stars" :key="s.value")
        v-icon.star(name="star", :id="'star-'+s.value")
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
export default {
  name: "Comic",
  props:{
    data: Object || String
  },
  data(){
    return {
      stars: [
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 4 },
        { value: 5 }
      ]
    }
  },
  method:{

  }
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
      width 25%
  &-info
    border 1px solid Cullen
    position absolute
    z-index 5
    width 75%
    height 96%
    @media screen and (min-width 1024px)
      width 24%
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
