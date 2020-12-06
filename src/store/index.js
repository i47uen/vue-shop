import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      { id: 0, name: 'черная куртка', cost: 3500, image: 'https://home.winsports.ru/img/products/49153-kurtka-dc-shoes-arctic-ot-dc-shoes.jpg' },
      { id: 1, name: 'синяя куртка', cost: 5500, image: 'https://static.outnorth.com/image/upload/f_auto,fl_lossy,q_auto/v1470348170/uploads/live_product_image/file/0/0/141/141343/didriksons-nokosi-kids-parka.jpg' },
      { id: 2, name: 'серая куртка', cost: 4500, image: 'https://sport.nohoho.ru/sites/sport.nohoho.ru/files/edyjk03035_arctic2v_cqw0_frt1_0.jpg' },
      { id: 3, name: 'футболка Skyrim', cost: 1250, image: 'https://im0-tub-ru.yandex.net/i?id=b0222fbcde8cc6fce241794f0de982e4&n=13&exp=1' },
    ],
    cart: [
      { id: 2, name: 'серая куртка', cost: 4500, image: 'https://sport.nohoho.ru/sites/sport.nohoho.ru/files/edyjk03035_arctic2v_cqw0_frt1_0.jpg', count: 1 },
      { id: 3, name: 'футболка Skyrim', cost: 1250, image: 'https://im0-tub-ru.yandex.net/i?id=b0222fbcde8cc6fce241794f0de982e4&n=13&exp=1', count: 1 },
    ],
  },
  getters: {
    GET_PRODUCTS: state => {
      return state.products
    },
    GET_CART: state => {
      return state.cart
    }
  },
  mutations: {
    ADD_TO_CART: (state, payload) => {
      let id = state.products[payload].id

      if (state.cart.some(item => item.id === payload)){
        let index = state.cart.findIndex(el => el.id === id)
        state.cart[index].count++
        console.log('Этот товар уже добавлен, id:' + index)
      } else {
        state.cart.push( { ...state.products[payload], count: 1} )
        console.log('Добавлен новый товар, id:' + id)
      }
    },
    REMOVE_FROM_CART(state, payload){
      state.cart.splice(payload, 1)
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()],
})
