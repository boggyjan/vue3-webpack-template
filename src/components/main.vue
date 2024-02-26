<template>
  <div class="main">
    <article>
      <h1>Webpack Vue3 Template</h1>
      <h2>Includes</h2>
      <ol>
        <li>Vue3 single file component supported.</li>
        <li>Hot Module Replacement</li>
        <li>Express.js (for production env)</li>
        <li>css/sass/scss, scoped, autoprefixer</li>
      </ol>

      <hr>

      <h2>Usage</h2>
      <ul>
        <li>Install all dependencies <code>npm i</code></li>
        <li>Start server:
          <ul>
            <li>development env: run <code>npm run dev</code></li>
            <li>production env: run <code>npm start</code></li>
          </ul>
        </li>
        <li>Enter <a href="http://localhost:9000" rel="nofollow">http://localhost:9000</a> in the browser to see the result.</li>
      </ul>
    </article>

    <hr>

    <h2>Vue3 Example</h2>
    <div class="example-block">
      count: {{ count }}

      <div class="actions">
        <button
          type="button"
          @click="count++"
        >
          count++
        </button>
      </div>
    </div>

    <div class="example-block">
      <comp v-model="count" />
    </div>
  </div>
</template>

<script setup>
import comp from './comp.vue'
import { ref, onMounted } from 'vue'
const count = ref(1)

onMounted(() => {
  console.log('onMounted')
})
</script>

<style lang="scss">
:root {
  margin: 2rem;
  background: #222;
  color: #fafafa;
  font-size: 16px;
  line-height: 1.8;
  --green: #42b883;
}

button, select, input, textarea {
  font-size: 16px;
}

a {
  color: currentColor;
}

hr {
  margin: 2rem 0;
  height: 1px;
  border: 0;
  background: #6666;
}

h1 {
  color: var(--green);
  font-size: 2rem;
  text-align: center;
}

code {
  display: inline-block;
  padding: 0.15rem 0.5rem;
  border-radius: 0.2rem;
  background: #444;
  font-size: 0.8rem;
}

.example-block {
  margin-top: 1rem;
  padding: 1rem;
  background: #6663;
  border: 1px solid #6666;
  border-radius: 0.2rem;

  .actions {
    margin-top: 0.6rem;
  }
}
</style>
