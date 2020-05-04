<template>
    <div>
        <nav class="navbar bg-white border-bottom navbar-light">
            <router-link :to="{ name: 'home' }" class="navbar-brand mr-auto"
                >Home</router-link
            >
            <router-link :to="{ name: 'second' }" class="btn nav-button">
                About
                <i class="fa fa-anchor" aria-hidden="true"></i>
            </router-link>
        </nav>
        <div class="container mt-4 mb-4 pr-4 pl-4">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";

export default {
    data() {
        return {
            lastSearch: this.$store.state.lastSearch
        };
    },
    computed: mapState({
        lastSearchComputed: "lastSearch"
    })
};
</script>
