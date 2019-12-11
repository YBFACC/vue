<template>
  <div>
    <div
      class="banner"
      @click='handleBannerClick'
    >
      <img
        :src='bannerImg'
        class="banner-img"
      >
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe60d;</span>
          {{this.bannerImgs.length}}
        </div>
      </div>
    </div>
    <common-gallary
      :imgs='bannerImgs'
      v-show="showGallary"
      @close='handleGallaryClose'
    ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/gallary'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/201305/21/cd18d368b5725ea9c8d65eac.jpg_r_800x800_46b00719.jpg',
        'http://img1.qunarzz.com/sight/p0/201305/21/c2463efb61e8b03ac8d65eac.jpg_r_800x800_18bbddb0.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%

  .banner-img
    width 100%

  .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    line-height 0.6rem
    color #fff
    background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))

    .banner-title
      flex 1
      font-size 0.32rem
      padding 0 0.2rem

    .banner-number
      margin-top 0.14rem
      padding 0 0.4rem
      line-height 0.32rem
      height 0.4rem
      border-radius 0.2rem
      background rgba(0, 0, 0, 0.8)
      font-size 0.24rem

      .banner-icon
        font-size 0.24rem
</style>
