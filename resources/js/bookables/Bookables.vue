<template>
  <div>
    <div v-if="loading">Data is loading.....</div>
    <div if-else>
      <div class="row mb-4" v-for="row in rows" :key="'row' + row">
        <div
          class="col d-flex align-items-stretch bk-light"
          v-for="(bookable, column) in bookablesInRow(row)"
          :key="'row'+row+column"
        >
          <bookable-list-item v-bind="bookable"></bookable-list-item>
        </div>
        <div class="col" v-for="p in plInRow(row)" :key="'pl' + row + p"></div>
      </div>
    </div>
  </div>
</template>

<script>
import BookableListItem from "./BookableListItem";
export default {
  components: {
    BookableListItem
  },
  data() {
    return {
      bookables: null,
      loading: false,
      columns: 3
    };
  },
  computed: {
    rows() {
      return this.bookables === null
        ? 0
        : Math.ceil(this.bookables.length / this.columns);
    }
  },
  methods: {
    bookablesInRow(row) {
      return this.bookables.slice((row - 1) * this.columns, row * this.columns);
    },
    plInRow(row) {
      return this.columns - this.bookablesInRow(row).length;
    }
  },
  created() {
    this.loading = true;

    const request = axios.get("/api/bookables").then(response => {
      this.bookables = response.data;
      this.loading = false;
    });
    console.log(request);
  }
};
</script>