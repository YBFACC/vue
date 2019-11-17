<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="(item, index) of list"
        :key="index"
      >
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-decs">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/varibles.styl'

.title
  margin-top 0.5rem
  line-height 0.8rem
  background #ccc

.item
  display flex
  overflow hidden
  height 1.9rem

  // background red
  .item-img
    width 1.7rem
    height 1.7rem
    padding 0.1rem

  .item-info
    flex 1
    padding 0.1rem
    min-width 0

    .item-title
      line-height 0.54rem
      font-size 0.32rem
      ellipsis()

    .item-decs
      line-height 0.4rem
      color #ccc
      ellipsis()

    .item-button
      line-height 0.44rem
      margin-top 0.16rem
      background #ff9300
      padding 0.2rem
      border-radius 0.06rem
      color #fff
</style>
