<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="(item, index) of list" :key="index">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-decs">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/varibles.styl'

.title
  margin-top 0.2rem
  line-height 0.8rem
  background #eee
  text-indent 0.2rem

  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 37.9%

    .item-img
      width 100%

  .item-info
    padding 0.1rem

  .item-title
    line-height 0.54rem
    font-size 0.32rem
    ellipsis()

  .item-decs
    line-height 0.4rem
    color #ccc
    ellipsis()
</style>
