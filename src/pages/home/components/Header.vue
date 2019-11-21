<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>输入城市
    </div>
    <router-link to='/city'>
      <div class="header-right arrow-icon">
        {{this.doubleCity}}<span class="iconfont">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']), // ????
    ...mapGetters(['doubleCity'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/varibles.styl'

.header
  display flex
  line-height 0.86rem
  background $bgColor
  color #fff

  .header-left
    width 0.64rem
    float left

    .back-icon
      text-align center
      font-size 0.4rem

  .header-input
    flex 1
    line-height 0.64rem
    height 0.64rem
    margin-top 0.12rem
    margin-left 0.2rem
    padding-left 0.2rem
    background #fff
    border-radius 0.1rem
    color #ccc

  .header-right
    min-width 1.04rem
    float right
    text-align center
    color #fff
    padding 0 0.1rem

    .arrow-icon
      margin-left -0.4rem
      font-size 0.24rem
</style>
