<template>
  <div class="list">
    <div class="area">
      <div class="title border-top-bottom">当前城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-top-bottom">热门城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-top-bottom">A</div>
      <div class="item-list">
        <div class="item border-bottom">安康</div>
        <div class="item border-bottom">安康</div>
        <div class="item border-bottom">安康</div>
        <div class="item border-bottom">安康</div>
        <div class="item border-bottom">安康</div>

      </div>
    </div>

    <div class="area">
      <div class="title border-top-bottom">A</div>
      <div class="item-list">
        <div class="item border-bottom">安康</div>
        <div class="item border-bottom">安康</div>
        <div class="item border-bottom">安康</div>
        <div class="item border-bottom">安康</div>
        <div class="item border-bottom">安康</div>

      </div>
    </div>
    <div class="area">
      <div class="title border-top-bottom">A</div>
      <div class="item-list">
        <div class="item border-bottom">安康</div>
        <div class="item border-bottom">安康</div>
        <div class="item border-bottom">安康</div>
        <div class="item border-bottom">安康</div>
        <div class="item border-bottom">安康</div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityList'
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/varibles.styl'
.list
  overflow hidden
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  .border-bottom
    &:before
      border-color #ccc

  .border-top-bottom
    &:before
      border-color #ccc

  .title
    line-height 0.44rem
    background #eee
    padding-left 0.2rem
    color #666
    font-size 0.26rem

  .button-list
    padding 0.1rem 0.6rem 0.1rem 0.1rem
    overflow hidden

    .button-wrapper
      width 33.3%
      float left

      .button
        text-align center
        margin 0.1rem
        border 0.02rem solid #ccc
        padding 0.1rem 0
        border-radius 0.06rem

  .item-list
    .item
      line-height 0.76rem
      padding-left 0.2rem
</style>
