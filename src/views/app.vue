<template>
  <div class="app">
    <h1>Vuex Electron</h1>
    <h3>Example of usage</h3>

    <div class="count">
      {{count}}
    </div>

    <div class="buttons">
      <button v-on:click="increment">Increment</button>
      <button v-on:click="decrement">Decrement</button>
    </div>

    <p class="note">
      <small>Number automatically increments each 5 seconds<br>from main process</small>
    </p>
  </div>
</template>

<script src="./app.js">
</script>
<style src="./app.scss">
</style>
