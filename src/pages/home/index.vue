<template>
  <div>
    <ul>
      <li v-for="(item, index) in routes" :key="index">
        <router-link :to="item.path">{{item.meta.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const routes = ref([])
routes.value = router.options.routes.filter(item => item.meta)
</script>

<style lang="scss" scoped>

</style>
