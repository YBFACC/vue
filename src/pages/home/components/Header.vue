<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市</div>
    <div class="header-right arrow-icon">城市<span class="iconfont">&#xe64a;</span></div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/varibles.styl';//??????
    .header
      display: flex
      line-height: .86rem
      background: $bgColor
      color: #fff
      .header-left
        width: .64rem
        float: left
        .back-icon
          text-align :center
          font-size :.4rem
      .header-input
        flex: 1
        line-height :.64rem
        height :.64rem
        margin-top: .12rem
        margin-left :.2rem
        padding-left :.2rem
        background #fff
        border-radius: .1rem
        color #ccc
      .header-right
        width: 1.24rem
        float: left
        text-align:center
        .arrow-icon
          margin-left :-0.4rem
          font-size :.24rem

</style>
