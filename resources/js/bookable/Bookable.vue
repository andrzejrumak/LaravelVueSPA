<template>
  <div class="row">
    <div class="col-md-8 pb-4">
      <div class="card">
        <div class="card-body">
          <div v-if="!loading">
            <h2>{{ bookable.title }}</h2>
            <hr />
            <article>{{ bookable.description }}</article>
          </div>
          <div v-else>Loading...</div>
        </div>
      </div>

      <review-list :bookable-id="this.$route.params.id"></review-list>
    </div>
    <div class="col-md-4 pb-4">
      <availability
        :bookable-id="this.$route.params.id"
        @availability="checkPrice($event)"
        class="mb-4"
      ></availability>
      <transition name="fade">
        <price-breakdown v-if="price" :price="price"></price-breakdown>
      </transition>
      <transition name="fade">
        <button
          class="btn btn-outline-secondary btn-block mt-2"
          v-if="price"
          @click="addToBasket"
          :disabled="inBasketAlready"
        >Book now</button>
      </transition>
      <button
        class="btn btn-outline-danger btn-block mt-2"
        v-if="inBasketAlready"
        @click="removeFromBasket"
      >Remove from the basket</button>
      <div
        v-if="inBasketAlready"
        class="mt-4 text-muted warning"
      >If want to change dates, remove items from basket</div>
    </div>
  </div>
</template>

<script>
import Availability from "./Availability";
import ReviewList from "./ReviewList";
import PriceBreakdown from "./PriceBreakdown";
import { mapState, mapGetters } from "vuex";

export default {
  components: {
    Availability,
    ReviewList,
    PriceBreakdown
  },
  data() {
    return {
      bookable: null,
      loading: false,
      price: null
    };
  },
  created() {
    this.loading = true;
    axios.get(`/api/bookables/${this.$route.params.id}`).then(response => {
      this.bookable = response.data;
      this.loading = false;
    });
  },
  computed: {
    ...mapState({
      lastSearch: "lastSearch",
      inBasketAlready() {
        if (null === this.bookable) {
          return false;
        }
        return this.$store.getters.inBasketAlready(this.bookable.id);
      }
    })
  },
  methods: {
    async checkPrice(hasAvailability) {
      if (!hasAvailability) {
        this.price = null;
        return;
      }
      try {
        this.price = (
          await axios.get(
            `/api/bookables/${this.bookable.id}/price?from=${this.lastSearch.from}&to=${this.lastSearch.to}`
          )
        ).data.data;
      } catch (err) {
        this.price = null;
      }
    },
    addToBasket() {
      this.$store.dispatch("addToBasket", {
        bookable: this.bookable,
        prise: this.price,
        dates: this.lastSearch
      });
    },
    removeFromBasket() {
      this.$store.dispatch("removeFromBasket", this.bookable.id);
    }
  }
};
</script>

<style  scoped>
.warning {
  font-size: 0.75rem;
}
</style>
