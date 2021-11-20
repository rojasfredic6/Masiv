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
      .header-random-button Random Comic
  main
    router-view
  footer.footer
    img.footer-img(src="@/assets/images/Logo.svg")
</template>

<style lang="stylus">

.header
  display flex
  flex-direction column
  width 100%
  height: 25%
  align-items: center
  justify-content: center
  &-social
    width 50%
    display grid
    &-list
      padding 0
      display: grid
      grid-template-columns: repeat(4, 1fr)
      justify-items: center
    &-item
      list-style none
      width 30px
      height 30px
      padding 10px
      display: grid
      place-items: center
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
      &:hover
        background-color Cullen
        border 1px solid Marcelin
        color Nosferatus
.header-icon
  width 32px
  background-color transparent
  &:hover
    color Cullen
main
  min-height: 75vh
  display: grid
  width 100%
  max-height: max-content
  background-color Aro

.footer
  width 100%
  height 10vh
  background-color Marcelin
  display: grid
  place-items: center
  &-img
    width 100px
    box-shadow: 0px 0px 10px 0 Cullen
</style>
