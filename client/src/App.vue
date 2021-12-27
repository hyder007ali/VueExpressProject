<template>
  <div id="app">
    <Hobbies/>
  </div>
</template>

<script>
import Hobbies from './components/Hobbies.vue'

export default {
  name: 'App',
  components: {
    Hobbies
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
