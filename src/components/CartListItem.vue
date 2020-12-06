<template>
  <div class="card cart-list__item columns mb-4">
    <img :src="image" alt="Product Image" class="column is-1 is-center">
    <h5 class="column is-4">{{ title }}</h5>
    <div class="column is-2">
      <b-field>
        <b-numberinput icon-pack="fa" :min="1" v-model="count"/>
      </b-field>
    </div>
    <div class="column is-3">
      Цена: <span v-if="count > 1"><strong>{{ cost * count }}</strong> за {{ count }} шт / </span>
      <strong>{{ cost }}</strong> ₽
    </div>
    <div class="column is-2">
      <b-button type="is-danger" expanded @click="confirmDelete()">
        Удалить
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Без названия'
    },
    image: {
      type: String,
      default: '@/assets/logo.png'
    },
    cost: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      default: 1
    },
    index: Number
  },
  methods: {
    removeFromCart() {
      this.$store.commit('REMOVE_FROM_CART', this.index)
    },
    confirmDelete() {
      this.$buefy.dialog.confirm({
        title: 'Подтвердите',
        message: 'Удалить товар из корзины?',
        confirmText: 'Удалить',
        type: 'is-danger',
        hasIcon: true,
        iconPack: 'fa',
        onConfirm: () => {
          this.removeFromCart()
          this.$buefy.notification.open({
            duration: 3200,
            animation: 'fade',
            message: 'Товар успешно удалён',
            position: 'is-top-right',
            type: 'is-success',
            autoClose: true,
            queue: false,
          })
        }
      })
    }
  },
  computed: {

  }
}
</script>

<style lang="scss">
  .cart-list__item {
    border: 1px solid #ccc;
    padding: 5px 12px;
    width: 100%;
    align-items: center;

    h5 {
      font-weight: 500;

      &:first-letter {
        text-transform: uppercase;
      }
    }

  img {
    width: 80%;
    margin: auto;
  }
}
</style>