<template>
  <div class="wapper">
    <swiper
      :options="swiperOption"
      ref="mySwiper"
      v-if="showSwiper"
    >
      <!-- slides -->
      <swiper-slide
        v-for="item in list"
        :key="item.id"
      >
        <img
          class="swiper-wrapper"
          :src="item.imgUrl"
        />
      </swiper-slide>
      <!-- Optional controls -->
      <div
        class="swiper-pagination"
        slot="pagination"
      ></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 31.25vw

  .swiper-img
    width 100%
</style>
