<script>
  export default {
    props: {
      msg: String
    }
  }
</script>

<style>
  p {
    font-weight: bold;
  }
</style>

<template>
  <p>{{ msg }}</p>
</template>
