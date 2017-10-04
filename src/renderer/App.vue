<template>
  <div id="app">
    <router-view :products="theProducts" title="Shop our award-winning product line"></router-view>
  </div>
</template>

<script>
export default {
  name: 'electron-vue-app',
  data () {
    return {
      theProducts: []
    }
  },
  created () {
    // this.$.getJSON('https://hplussport.com/api/products')
    // .done(data => { this.theProducts = data })
    this.$http.get('https://hplussport.com/api/products').then(response => { this.theProducts = response.body })
  }
}
</script>

<style>
  /* CSS */
</style>
