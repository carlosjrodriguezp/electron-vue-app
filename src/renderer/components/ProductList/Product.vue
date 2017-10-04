<template>
    <div>
        <h2><strong>{{product.name}}</strong></h2>
        <router-link to="/products">Back to all products</router-link>
        <img :src="product.image">
        <p>{{product.description}}</p>
        <strong>{{product.price}}</strong>
        <div>
            <button>Add to Cart</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'product',
  data () {
    return {
      product: {}
    }
  },
  created () {
    let id = this.$route.params.id
    console.log(id)
    this.$http.get(`https://hplussport.com/api/products/id/${id}`)
      .then(response => {
        this.product = response.body[0]
      })
  }
}
</script>

<style scoped>
    img {
        width: 200px;
        height: 200px;
    }
</style>     

