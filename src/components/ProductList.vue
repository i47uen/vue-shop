<template>
  <div class="columns is-multiline">
    <ProductItem
        v-for="(product, index) in Products"
        :image="product.image"
        :title="product.name"
        :cost="product.cost"
        :index="index"
        :key="index"
    />
  </div>
</template>

<script>
import ProductItem from './ProductItem'

export default {
  components: {
    ProductItem
  },
  computed: {
    Products() {
      return this.$store.getters.GET_PRODUCTS
    }
  }
}
</script>