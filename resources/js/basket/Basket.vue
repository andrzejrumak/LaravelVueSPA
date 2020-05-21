<template>
  <div>
    <div class="row">
      <div class="col-md-6 mr-2">
        <div class="card mb-2">
          <div class="card-body">
            <h6 class="text-uppercase text-secondary font-weight-bolder card-title">Checkout</h6>
            <hr />
            <form>
              <div class="form-row">
                <div class="col-md-6 form-group">
                  <label for="first_name">First names</label>
                  <input
                    type="text"
                    class="form-control"
                    name="first_name"
                    v-model="customer.first_name"
                  />
                </div>
                <div class="col-md-6 form-group">
                  <label for="last_name">Last name</label>
                  <input
                    type="text"
                    class="form-control"
                    name="last_name"
                    v-model="customer.last_name"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-12 form-group">
                  <label for="email">Email</label>
                  <input type="text" class="form-control" name="email" v-model="customer.email" />
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6 form-group">
                  <label for="street">Street</label>
                  <input type="text" class="form-control" name="street" v-model="customer.street" />
                </div>
                <div class="col-md-6 form-group">
                  <label for="city">City</label>
                  <input type="text" class="form-control" name="city" v-model="customer.city" />
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6 form-group">
                  <label for="country">Country</label>
                  <input type="text" class="form-control" name="country" v-model="customer.country" />
                </div>
                <div class="col-md-4 form-group">
                  <label for="state">State</label>
                  <input type="text" class="form-control" name="state" v-model="customer.state" />
                </div>
                <div class="col-md-2 form-group">
                  <label for="zip">Zip</label>
                  <input type="text" class="form-control" name="zip" v-model="customer.zip" />
                </div>
              </div>
              <hr />
              <div class="form-row">
                <div class="col-md-12 form-group">
                  <button
                    type="submit"
                    class="btn btn-lg btn-primary btn-block"
                    @click.prevent="book"
                  >Book now!</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-5">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between mx-3">
              <h6 class="text-uppercase text-secondary font-weight-bolder card-title">Your Cart</h6>
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
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import validationErrors from "./../shared/mixins/validationErrors";

export default {
  mixins: [validationErrors],
  data() {
    return {
      customer: {
        loading: false,
        first_names: null,
        last_name: null,
        email: null,
        street: null,
        city: null,
        country: null,
        state: null,
        zip: null
      }
    };
  },
  computed: {
    ...mapGetters(["itemsInBasket"]),
    ...mapState({
      basket: state => state.basket.items
    })
  },

  methods: {
    async book() {
      this.loading = true;
      try {
        await axios.post(`/api/checkout`, {
          customer: this.customer,
          bookings: this.basket.map(basketItem => ({
            bookable_id: basketItem.bookable.id,
            from: basketItem.dates.from,
            to: basketItem.dates.to
          }))
        });
      } catch (err) {}
      this.loading = false;
    }
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