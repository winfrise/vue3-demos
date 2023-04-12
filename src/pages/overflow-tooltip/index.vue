<template>
  <div class="overflow-tooltip">
    <OverflowTooltip :content="content" width="60px" />
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import OverflowTooltip from './OverflowTooltip.vue'
  const content=ref('我爱北京天安门')
</script>

<style lang="scss" scoped>
.overflow-tooltip {
  padding: 100px;
}
</style>
