<template>
    <div class="index">
      <v-header/>
      <v-Baseline/>
      <v-footer/>
    </div>
</template>

<script>
import Header from '@/common/header'
// import Swiper from '@/components/index/swiper'
import Baseline from '@/common/baseline.vue'
import Footer from '@/common/footer.vue'
export default {
  components: {
    'v-header': Header,
    // 'v-swiper': Swiper,
    'v-Baseline': Baseline,
    'v-footer': Footer
  }
}
</script>

<style lang="less" scoped>
  .index {
    padding-bottom: 1.2rem;
    font-size: 12px;
  }
</style>
