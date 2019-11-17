<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="page of pages" :key="page.id">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icons-img">
            <img class="icon-img-content" :src="item.imgUrl" />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        loop: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/varibles.styl'
@import '~@/assets/mixins.styl'

.icons
  overflow hidden
  height 0
  padding-bottom 50%
  margin-top .1rem
  .icon
    position relative
    overflow hidden
    float left
    width 25%
    height 0
    padding-bottom 25%

    .icon-desc
      position absolute
      left 0
      right 0
      bottom 0
      height 0.44rem
      line-height 0.44rem
      color $darkTextColor
      text-align center
      ellipsis()

    .icons-img
      position absolute
      top 0
      left 0
      right 0
      bottom 0.44rem
      box-sizing border-box
      padding 0.1rem

      .icon-img-content
        height 100%
        display block
        margin 0 auto
</style>
