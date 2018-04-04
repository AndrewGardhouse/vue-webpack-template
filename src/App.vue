<template>
  <div id="app">
    <h1>Your Vue.JS Project</h1>
    <MyComponent msg="Hello World"></MyComponent>
  </div>
</template>

<script>
import MyComponent from './components/MyComponent'

export default {
  components: {
    MyComponent
  }
}
</script>

<style lang="scss">
</style>
