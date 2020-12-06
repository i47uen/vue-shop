<template>
  <div>
      <div class="cart-list" v-if="cart.length">
        <b-field class="search" label="Найти товар">
          <b-input class="search__input" placeholder="Название" v-model="search"></b-input>
        </b-field>

        <CartListItem
            v-for="(cartItem, index) in filteredCart"
            :title="cartItem.name"
            :image="cartItem.image"
            :count="cartItem.count"
            :cost="cartItem.cost"
            :key="cartItem.id"
            :index="index"
        />
      </div>

    <div v-else>
      <p class="title mt-5">Корзина пуста</p>
    </div>

  </div>
</template>

<script>
  import CartListItem from "@/components/CartListItem";
  export default {
    data: () => ({
      search: '',
    }),
    components: {
      CartListItem
    },
    computed: {

      cart(){
        return this.$store.getters.GET_CART
      },

      filteredCart: function() {
        let self = this;
        return self.cart.filter(function(cartItem) {
          return (
              cartItem.name.toLowerCase().indexOf(self.search.toLowerCase()) !== -1
            );
        });
      }

    }
  }
</script>

<style lang="scss" scoped>
  .cart-list{
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .search{
    width: 100%;
    &__input{
      margin-bottom: 20px;
      width: 100%;
    }
  }
</style>