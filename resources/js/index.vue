<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-white border-bottom navbar-light">
      <router-link :to="{ name: 'home' }" class="navbar-brand mr-auto">Home</router-link>
      <router-link :to="{ name: 'second' }" class="btn nav-button">
        About
        <i class="fa fa-anchor" aria-hidden="true"></i>
      </router-link>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{ name: 'basket'}" class="btn nav-button">
            Basket
            <span v-if="itemsInBasket" class="badge badge-secondary">{{itemsInBasket}}</span>
          </router-link>
        </li>
        <li class="nav-item" v-if="!isLoggedIn">
          <router-link :to="{ name: 'register'}" class="btn nav-button">Register</router-link>
        </li>
        <li class="nav-item" v-if="!isLoggedIn">
          <router-link :to="{ name: 'login'}" class="btn nav-button">Sign-in</router-link>
        </li>
        <li class="nav-item" v-if="isLoggedIn">
          <a class="btn nav-button" href="#" @click.prevent="logout">Logout</a>
        </li>
      </ul>
    </nav>
    <div class="container mt-4 mb-4 pr-4 pl-4">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      lastSearch: this.$store.state.lastSearch
    };
  },
  computed: {
    ...mapState({
      lastSearchComputed: "lastSearch",
      isLoggedIn: "isLoggedIn"
    }),

    ...mapGetters({
      itemsInBasket: "itemsInBasket"
    })
  },
  methods: {
    async logout() {
      try {
        axios.post("/logout");
        this.$store.dispatch("logout");
      } catch (error) {
        this.$store.dispatch("logout");
      }
    }
  }
};
</script>
