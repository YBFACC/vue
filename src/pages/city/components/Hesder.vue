<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-icon">&#xe624;</div></router-link
    >
  </div>
</template>

<script>
export default {
  neme: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/varibles.styl'

.header
  position relative
  overflow hidden
  height 0.86rem
  line-height 0.86rem
  text-align center
  color #fff
  background $bgColor
  font-size 0.32rem

  .header-icon
    position absolute
    top 0
    left 0
    width 0.64rem
    text-align center
    font-size 0.4rem
    color #fff
</style>
