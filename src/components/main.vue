<template>
  <div class="main">
    {{ compData }}
    <button type="button" @click="compData++">compData++</button>

    <hr>

    <div>
      compData: {{ compData }}
    </div>

    <comp v-model="compData" />
  </div>
</template>

<script setup>
import comp from './comp.vue'
import { ref, reactive, computed, watch, createApp, onMounted } from 'vue'
const canvas = ref()
const test = ref(1)
const compData = ref(1)

onMounted(async () => {
  const isJumping = false
  const KEY = {
    SPACE: 32,
    LEFT: 37,
    TOP: 38,
    RIGHT: 39,
    BOTTOM: 40
  }

  document.addEventListener('keydown', (event) => {
    switch (event.keyCode) {
      case KEY.SPACE:
        console.log('jump start')
        break
    }
  })

  document.addEventListener('keyup', (event) => {
    switch (event.keyCode) {
      case KEY.SPACE:
        console.log('jump end')
        break
    }
  })
})
</script>

<style lang="scss">
.main {
  padding: 1rem;
}
</style>
