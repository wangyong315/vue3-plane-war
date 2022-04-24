<script setup lang="ts">
import plane from '../../'
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <Container>
    <Sprite :texture=""></Sprite>
  </Container>
</template>

<style scoped>
</style>
