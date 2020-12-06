<template>
  <div class="column is-3">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by5">
          <img :src="image" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <h4 class="title">{{ title }}</h4>
          <p class="cost">Стоимость: <span>{{ cost }}р</span></p>
          <b-button type="is-primary" :disabled='cost <= 0' expanded @click="addToCart(index)">В корзину</b-button>
        </div>
      </div>
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
      default: 'https://im0-tub-ru.yandex.net/i?id=fcaaf3499dfa7359ae1dc4ad5c905b8f&n=13&exp=1'
    },
    cost: {
      type: Number,
      default: 0
    },
    index: Number
  },
  methods: {
    addToCart(index) {
      this.$store.commit('ADD_TO_CART', index)
      this.$buefy.notification.open({
        duration: 2500,
        animation: 'fade',
        message: 'Товар добавлен в корзину',
        position: 'is-top-right',
        type: 'is-primary',
        autoClose: true,
        queue: false,
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 10px;

  &:first-letter {
    text-transform: uppercase;
  }
}

.cost {
  span {
    float: right;
  }
}
</style>