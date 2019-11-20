<template lang="">
  <ul class="list">
    <li class="item" v-for="(item, index) in cities" :key="index">
      {{ index }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Alphabet',
  props: {
    cities: Object
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/varibles.styl'
.list
  display flex
  flex-direction column
  justify-content center
  position absolute
  top 1.58rem
  right 0
  bottom 0
  width .4rem

  .item
    line-height .4rem
    text-align center
    color green
</style>
