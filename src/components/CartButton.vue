<template>
  <router-link to="/cart">
    <b-button type="is-primary">
      <i class="fa fa-shopping-cart"></i> <span v-if="Count > 0">{{ Count }}</span>
    </b-button>
  </router-link>
</template>

<script>
  export default {
    computed: {
      Count(){
        return this.$store.getters.GET_CART.length
      }
    }
  }
</script>

<style scoped lang="scss">
  i{
    padding-right: 5px;
  }
</style>