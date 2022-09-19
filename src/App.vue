<script setup>
import { RouterView } from 'vue-router'
import MainView from "@/views/MainView.vue"
</script>

<template>
  <RouterView>
    <Suspense>
      <main-view/>
    </Suspense>
  </RouterView>
</template>

<script>

</script>

<style scoped>
</style>
