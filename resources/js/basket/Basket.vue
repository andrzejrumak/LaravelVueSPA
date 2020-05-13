<template>
  <div>
    <div class="row">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Checkout form</h5>
          <div class="d-flex justify-content-between mx-3">
            <h6 class="text-uppercase text-secondary font-weight-bolder">Your Cart</h6>
            <h6 class="badge badge-secondary text-uppercase mx-3">
              <span v-if="itemsInBasket">Items {{ itemsInBasket }}</span>
              <span v-else class="px-2">Empty</span>
            </h6>
          </div>
          <transition-group name="fade">
            <div v-for="item in basket" :key="item.bookable.id">
              <div class="py-3 border-top d-flex justify-content-between">
                <span>
                  <router-link
                    :to="{name: 'bookable', params: {id: item.bookable.id}}"
                  >{{ item.bookable.title }}</router-link>
                </span>
                <span class="font-weight-bold">${{ item.prise.total }}</span>
              </div>
              <div class="card-footer text-muted">
                <div class="d-flex justify-content-between">
                  <span class="pr-3 py-2">From: {{ item.dates.from }}</span>
                  <span class="p-2">To: {{ item.dates.to }}</span>
                </div>
                <div class="p-2 text-right">
                  <button
                    class="btn btn-sm btn-outline-danger"
                    @click="$store.dispatch('removeFromBasket', item.bookable.id)"
                  >
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </div>
              </div>
            </div>
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapGetters(["itemsInBasket"]),
    ...mapState({
      basket: state => state.basket.items
    })
  }
};
</script>

<style scoped>
h6.badge {
  font-size: 100%;
}

a {
  color: black;
}
</style>