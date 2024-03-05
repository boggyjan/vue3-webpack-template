<template>
  <div class="comp">
    <h3>Nested Component</h3>

    v-model *= 10: <span>{{ result }}</span>

    <div class="actions">
      <button
        type="button"
        @click="add()"
      >
        model.value++
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, defineModel } from 'vue'
// const props = defineProps(['value'])
const model = defineModel()

function add () {
  model.value++
}

const result = computed(() => model.value * 10)
</script>

<style lang="scss" scoped>
h3 {
  margin: 0 0 0.8rem 0;
}
span {
  color: #ff0;
}
</style>
