<template lang="pug">
div.home
  h2.home-title Tu Random Comic
  div.component
    figure.component-figure
      img.component-image(src="@/assets/images/Group 289.png")
      div.component-info
        p Info
    .component-rating
      ul.component-rating-list
        li.component-rating-item
          v-icon.star(name="star")
        li.component-rating-item
          v-icon.star(name="star")
        li.component-rating-item
          v-icon.star(name="star")
        li.component-rating-item
          v-icon.star(name="star")
        li.component-rating-item
          v-icon.star(name="star")
</template>

<style lang="stylus">
.home
  display flex
  flex-direction: column
  align-items: center
  width: 100%
  height: 100%
  &-title
    color Lincoln
    padding 20px
    font-weight bold
    border-top 1px solid Lincoln
    border-bottom 1px solid Lincoln

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
  &-info
    border 1px solid Cullen
    position absolute
    z-index 5
    width 75%
    height 96%
  &-rating
    width: 100%
    display grid
    place-items: center
    &-list
      display flex
      padding 0
      width 40%
      justify-content: space-evenly
    &-item
      list-style: none

.star
  width 40px
</style>
