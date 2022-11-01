<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
  {{name}}
  <button type="button" class="btn btn-primary">Primary</button>
</template>

<script>
export default {
  data () {
    return {
      name: process.env.VUE_APP_NAME
      // process.env.為引入環境變數的固定寫法
    }
  }
}
</script>

<style lang="scss">
@import "bootstrap";
</style>
