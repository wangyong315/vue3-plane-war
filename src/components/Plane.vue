<template>
  <Container :x="plane.x" :y="plane.y">
    <Sprite :texture="planeImg"></Sprite>
  </Container>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import planeImg from '../assets/plane.jpg'
import { setupPlane } from '../game';

const plane = setupPlane(reactive({}))

window.addEventListener('keydown', (e) => {
  switch (e.code) {
    case 'ArrowDown':
      plane.moveDown()
      break;
    case 'ArrowUp':
      plane.moveUp()
      break;
    case 'ArrowLeft':
      plane.moveLeft()
      break;
    case 'ArrowRight':
      plane.moveRight()
      break;

    default:
      break;
  }
})

</script>

<style scoped>
</style>
