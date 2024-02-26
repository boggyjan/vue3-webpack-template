<template>
  <div class="comp">
    {{ model * 10 }}:

    <button
      type="button"
      @click="add()"
    >
      compData++
    </button>
  </div>
</template>

<script setup>
import { ref, defineModel } from 'vue'
// const props = defineProps(['value'])
const model = defineModel()

function add () {
  model.value++
}
</script>

<style lang="scss">
.comp {
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid #F00;
}
</style>
