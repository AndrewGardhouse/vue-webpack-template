<template>
  <div class="my-component">
    <img src="../images/logo.png" alt="Logo">
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String
    }
  }
}
</script>

<style lang="scss">
.my-component {
  text-align: center;
  img {
    display: inline-block;
    margin: auto;
  }
}
</style>
