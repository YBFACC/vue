<template>
  <div
    class="containter"
    @click='handleGallaryClick'
  >
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide
          v-for="(item, index) in imgs"
          :key="index"
        >
          <img
            class="gallary-wrapper"
            :src="item"
          />
        </swiper-slide>
        <!-- Optional controls -->
        <div
          class="swiper-pagination"
          slot="pagination"
        >
        </div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        loop: true,
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
.containter >>> .swiper-container
  overflow inherit

.containter
  display flex
  flex-direction column
  justify-content center
  position fixed
  z-index 99
  left 0
  right 0
  top 0
  bottom 0
  background #000

  .wrapper
    width 100%
    height 0
    width 100%
    padding-bottom 100%

    .gallary-wrapper
      width 100%

    .swiper-pagination
      color #fff
      bottom -1rem
</style>
