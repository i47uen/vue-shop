<template>
  <b-navbar class="mb-5 container" has-shadow>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        Vue Shop
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="#" tag="router-link" to="/" exact>Главная</b-navbar-item>
<!--      <b-navbar-item href="#" tag="router-link" to="/about">О проекте</b-navbar-item>-->
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <CartButton/>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import CartButton from '@/components/CartButton'

export default {
  components: {
    CartButton
  }
}
</script>