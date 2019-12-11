<template>
  <div>
    <router-link
      to="/"
      tag="div"
      class="header-ads"
      v-show="showabs"
    >
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div
      class="header-fixed"
      v-show="!showabs"
      :style="opacityStyle"
    >
      景点详情
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showabs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showabs = false
      } else {
        this.showabs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)// 对全局事件解绑
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/varibles.styl'

.header-ads
  position absolute
  left 0.2rem
  top 0.2rem
  width 0.8rem
  height 0.8rem
  line-height 0.8rem
  border-radius 0.4rem
  text-align center
  background rgba(0, 0, 0, 0.8)

  .header-abs-back
    color #ffffff
    font-size 0.4rem

.header-fixed
  position fixed
  top 0
  left 0
  left 0
  right 0
  height 0.86rem
  line-height 0.86rem
  text-align center
  color #fff
  background $bgColor
  font-size 0.32rem

  .header-fixed-back
    position absolute
    top 0
    left 0
    width 0.64rem
    text-align center
    font-size 0.4rem
    color #fff
</style>
