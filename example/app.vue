<template>
  <p>{{ greeting }} World!</p>
</template>

<script>
module.exports = {
  data: function () {
    return {
      greeting: 'Hello'
    }
  }
}
</script>

<style lang="scss" scoped>
.app {
  color: black;
  margin: 5px;
  margin: $hello;
  margin: $hello;
  .app-two {
    margin:        2px;
    .app-three {
      margin:2px;
      color: black;
      margin: $hello;
      margin:   5px;
    }
  }
}
</style>